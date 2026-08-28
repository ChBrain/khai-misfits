// A changeset names a package the workspace actually has.
//
// This exists because nine of them did not. They declared `"khai-misfits"` and
// the package is `@chbrain/khai-misfits`, so `changeset version` threw on the
// first of them -- "Found changeset ... for package khai-misfits which is not in
// the workspace" -- and took the release down from 26 August. `npm test` was
// green in every failed run, the failure sitting in the last step of a job whose
// visible work all passes, and the only symptom was a Version Packages pull
// request that stopped moving: it fell thirty commits behind and would have
// landed 0.315.0 against a house already at 0.323.0.
//
// The gate that should have caught it could not see that half of the file.
// `khai-guard changeset-check` parses each changeset's frontmatter into
// `{ name, level }` entries and reads `level` alone, which is the rule about a
// content add owing a `minor`. All nine declared `minor` correctly. So nine pull
// requests passed a gate that had opened their changeset, approved the only
// field it knew about, and never asked whether the package on the line above
// exists. That is fixed upstream in khai-guard; this is the house's own wall,
// which does not wait on a kit release and does not depend on one.

import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { workspacePackages } from "@chbrain/khai-tests";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// The workspace's package names, read the way the kit reads them, which is the
// root manifest plus every directory its `workspaces` patterns reach.
//
// This used to be `package.json`'s own `name`, which is the same answer while
// the house is one package at the root and the WRONG answer the moment it is
// not: under a private workspace root the name at the top becomes
// `@chbrain/khai-misfits-workspace`, and a changeset naming the package that
// actually publishes would be flagged as naming a package the workspace does
// not have. The gate would then fail every correct changeset and pass none.
// Reading the workspace is the same check in both layouts, which is the point.
//
// Private packages are included deliberately. Changesets never asks for one, so
// naming it would be an odd thing to do, and it is not this wall's business to
// forbid: this wall asks whether the name EXISTS, and the private root does.
const PACKAGES = workspacePackages(root);
const NAMES = new Set(PACKAGES.keys());

/** The one package that publishes, for the parser's literal inputs below. */
const PKG = [...PACKAGES.keys()].find((n) => {
  const pkg = JSON.parse(readFileSync(join(PACKAGES.get(n), "package.json"), "utf8"));
  return pkg.private !== true;
});

/** The package names a changeset declares, one per bump line in its frontmatter.
 * A changeset with an empty frontmatter (the `--empty` kind, which records a pull
 * request that ships nothing) declares none, and owes none. */
function declaredNames(text) {
  const m = /^﻿?---\r?\n([\s\S]*?)\r?\n?---/.exec(text);
  if (!m) return [];
  return m[1]
    .split(/\r?\n/)
    .map((line) => /^\s*["']?([^"':]+)["']?\s*:\s*(patch|minor|major)\s*$/.exec(line))
    .filter(Boolean)
    .map((hit) => hit[1].trim());
}

const changesets = readdirSync(join(root, ".changeset"))
  .filter((f) => f.endsWith(".md") && f !== "README.md")
  .map((f) => ({ file: f, text: readFileSync(join(root, ".changeset", f), "utf8") }));

describe("every changeset names this workspace's package", () => {
  it("finds the changeset directory it reads", () => {
    // Anti-vacuity, and deliberately NOT a count. The corpus is empty on exactly
    // one branch -- `changeset-release/main`, where `changeset version` has
    // consumed every changeset -- and empty is the CORRECT state there. Asserting
    // a non-empty corpus therefore fails the Version Packages pull request, which
    // is the one branch whose whole job is to publish, so the wall would block
    // the release it was written to protect. It did exactly that, in both houses,
    // on the first release after it shipped.
    //
    // What holds on every branch is that the directory is there and is the one
    // changesets itself reads. The guard against a reader that matches nothing is
    // the parser test below, run on literal inputs, which is where such a fault
    // would actually show -- a corpus count only ever proved that somebody had
    // written a changeset lately.
    expect(existsSync(join(root, ".changeset", "config.json"))).toBe(true);
    expect(changesets.every((c) => c.file.endsWith(".md"))).toBe(true);
  });

  it("declares no package the workspace does not have", () => {
    const wrong = changesets.flatMap(({ file, text }) =>
      declaredNames(text)
        .filter((name) => !NAMES.has(name))
        .map((name) => `${file}: "${name}" (the workspace has ${[...NAMES].join(", ")})`),
    );
    expect(wrong).toEqual([]);
  });

  it("finds the workspace it reads, in whichever layout the house is in", () => {
    // Anti-vacuity for the reader above: an empty name set would accept every
    // changeset ever written, including the nine that took the release down.
    // The assertion is deliberately about the publishable package rather than a
    // count, because the count is one today and two after a workspace root is
    // added, and neither number is the thing that matters.
    expect(NAMES.size).toBeGreaterThan(0);
    expect(PKG).toBe("@chbrain/khai-misfits");
  });

  it("reads the bump line it claims to read", () => {
    // The parser above is the load-bearing half, so it is exercised directly
    // rather than trusted because the corpus happens to pass.
    expect(declaredNames(`---\n"${PKG}": minor\n---\n\nbody\n`)).toEqual([PKG]);
    expect(declaredNames(`---\n"khai-misfits": minor\n---\n\nbody\n`)).toEqual(["khai-misfits"]);
    expect(declaredNames("---\n---\n\nan empty changeset\n")).toEqual([]);
  });
});

describe("a changeset can be committed on a lane the guard computes", () => {
  it("holds .changeset/** as a rider, not as shared", () => {
    // `shared` is for build artefacts, which are never the whole of a change, so
    // a shared path owns no lane and `khai-guard branch` refuses: "this change is
    // not one lane". A changeset REPAIR is a change whose whole content is
    // .changeset/**, so under `shared` the fix for the outage above had nowhere
    // to be committed. A rider already means what was wanted -- it rides the lane
    // of the change it accompanies and homes to a fallback when it rides alone --
    // and this is the second path in this house to need it, after the season plan.
    const { branchScope } = JSON.parse(readFileSync(join(root, "khai-guard.config.json"), "utf8"));
    expect(branchScope.shared).not.toContain(".changeset/**");
    expect(branchScope.riders).toContainEqual({ pattern: ".changeset/**", fallback: "governance" });
  });
});
