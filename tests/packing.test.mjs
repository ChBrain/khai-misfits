// What the manifest promises is in the tarball.
//
// This wall exists because of a failure in another house, not one here: the
// cultures tongues package shipped a hollow tarball, because `files` reached the
// package root and the content lived a directory below it. That is exactly the
// shape here. `files` names `misfits/**`, and every one of the three hundred and
// twenty seven misfits is a DIRECTORY of thirty six files, so the box is almost
// entirely subdirectory content and almost none of it is named individually.
//
// Nothing is wrong today and the test would have passed on the day it was
// written, which is the reason to write it now rather than after the move: the
// house is about to change where its content root sits, and a packing gate is
// worth having on both sides of that so the before and after can be compared.
// A gate added afterwards can only ever say that the new arrangement is
// self-consistent.
//
// It reads the box through the kit rather than parsing `npm pack` here, so the
// house and the kit cannot come to disagree about what a tarball contains.

import { describe, it, expect } from "vitest";
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { workspacePackages, packedFiles, checkPacking } from "@chbrain/khai-tests";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES = workspacePackages(root);
const PKG = "@chbrain/khai-misfits";

/**
 * The tarball's contents, in whichever layout the house is in.
 *
 * `packedFiles` asks npm with `-w` or `--workspaces`, which is the right ask and
 * the only ask once a workspace root exists, and which npm refuses in a
 * single-package repository. So while the house is flat the same question is put
 * without the workspace flag, in the package's own directory.
 *
 * The duplication is one `npm pack --dry-run --json` invocation and its shape is
 * the kit's: the parse is `packedFiles`'s in the layout that has workspaces, and
 * the flat branch exists only until the move and is deleted with it. What is
 * NOT duplicated is the judgement, which is `checkPacking`'s in both.
 */
function box() {
  const rootPkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  if (rootPkg.workspaces) return packedFiles(root, { names: [PKG] }).get(PKG);
  const dir = PACKAGES.get(PKG) ?? root;
  const raw = execFileSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: dir,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
    stdio: ["ignore", "pipe", "ignore"],
  });
  const entry = JSON.parse(raw).find((e) => e?.name === PKG);
  return new Set((entry?.files ?? []).map((f) => f.path));
}

describe("the package ships what its manifest names", () => {
  const files = box();

  it("promises nothing it does not ship", () => {
    // The kit's judgement, which reads what the manifest NAMES: members, main,
    // and the Playwright guide where one is on disk. It is narrow on purpose and
    // is currently vacuous for this house, which declares none of those. It is
    // here so that the day this house declares one, the wall is already standing.
    const packed = new Map([[PKG, files]]);
    expect(checkPacking(root, packed)).toEqual([]);
  });

  it("ships the content that lives below the package root", () => {
    // The house's own claim, and the one the cultures failure was about. `files`
    // names `misfits/**`, a glob whose whole value is that it reaches downward,
    // so a representative misfit's own files are what proves the box rather than
    // the count of entries in it.
    const registry = JSON.parse(
      readFileSync(join(PACKAGES.get(PKG) ?? root, "registry.json"), "utf8"),
    );
    const someMisfit = (registry.misfits ?? registry.entries ?? []).map(
      (m) => m.id ?? m.slug ?? m.name,
    )[0];
    expect(typeof someMisfit).toBe("string");
    expect(files.has(`misfits/${someMisfit}/REFERENCE.md`)).toBe(true);
    expect(files.has(`misfits/${someMisfit}/play_${someMisfit}.md`)).toBe(true);
  });

  it("ships the built artefacts and the licences the manifest lists", () => {
    for (const named of ["registry.json", "README.md", "LICENSE", "LICENSE-CODE"]) {
      expect({ named, shipped: files.has(named) }).toEqual({ named, shipped: true });
    }
  });

  it("ships every misfit, not merely the one that was sampled", () => {
    // The sample above proves the glob reaches downward at all; this proves it
    // reached all of them, which is the failure mode where a `files` list is
    // right about its shape and wrong about its coverage.
    const dir = PACKAGES.get(PKG) ?? root;
    const registry = JSON.parse(readFileSync(join(dir, "registry.json"), "utf8"));
    const ids = (registry.misfits ?? registry.entries ?? []).map((m) => m.id ?? m.slug ?? m.name);
    const missing = ids.filter((id) => !files.has(`misfits/${id}/REFERENCE.md`));
    expect(missing).toEqual([]);
    expect(ids.length).toBeGreaterThan(300);
  });

  it("does not ship the house's own machinery", () => {
    // `files` is a list of what goes in, so this is not a second gate on the same
    // question: it is the reason the list is a list. A consumer installing the
    // package gets the misfits and the registry, and not the tests, the gates or
    // the season plan.
    for (const kept of ["tests/house.test.mjs", "khai-guard.config.json", "CLAUDE.md"]) {
      expect({ kept, shipped: files.has(kept) }).toEqual({ kept, shipped: false });
    }
    expect(existsSync(join(root, "khai-guard.config.json"))).toBe(true);
  });
});
