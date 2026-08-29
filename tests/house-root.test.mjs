// The helper every other reader now depends on, held to both layouts.
//
// This is the one gate in the directory that cannot be checked by the house
// passing: `houseRoot` is what tells the other readers where to look, so if it
// answers wrongly they do not fail, they certify an empty house. It is a single
// point of failure with no loud failure mode, which is exactly the kind of thing
// that earns a test of its own.
//
// The workspace case is asserted against a tree built here rather than against
// the repository, because the repository is not in that layout yet and will not
// be until step 4. That is the point: the reader is proved against the
// arrangement it is being written for, on the day it is written, rather than on
// the day the move lands and every gate is in motion at once.

import { describe, it, expect } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { houseRoot, PACKAGE, REPO, HOUSE } from "./house_root.mjs";

/** A repository on disk with the given manifests, one per relative directory. */
function tree(manifests) {
  const dir = mkdtempSync(join(tmpdir(), "khai-house-root-"));
  for (const [rel, pkg] of Object.entries(manifests)) {
    mkdirSync(join(dir, rel), { recursive: true });
    writeFileSync(join(dir, rel, "package.json"), JSON.stringify(pkg));
  }
  return dir;
}

describe("house root: the readers find the house in either layout", () => {
  it("resolves the repository itself while the house is one package at the top", () => {
    const dir = tree({ ".": { name: PACKAGE, version: "0.327.0" } });
    try {
      expect(houseRoot(dir)).toBe(dir);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("resolves packages/khai-misfits once the house takes the workspace shape", () => {
    const dir = tree({
      ".": {
        name: `${PACKAGE}-workspace`,
        private: true,
        version: "0.0.0",
        workspaces: ["packages/*"],
      },
      "packages/khai-misfits": { name: PACKAGE, version: "0.327.0" },
    });
    try {
      expect(houseRoot(dir)).toBe(join(dir, "packages", "khai-misfits"));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("follows the name and not the directory, so a rename does not silently blind it", () => {
    // The briefing asked for `packages/khai-misfits` then `.`, which is a path.
    // The manifest is the authority on which directory is the house, so the
    // reader asks it: a package moved or renamed on disk is still found, and a
    // directory that merely LOOKS right is not mistaken for the house.
    const dir = tree({
      ".": { name: `${PACKAGE}-workspace`, private: true, workspaces: ["packages/*"] },
      "packages/khai-misfits": { name: "@chbrain/something-else" },
      "packages/the-house": { name: PACKAGE },
    });
    try {
      expect(houseRoot(dir)).toBe(join(dir, "packages", "the-house"));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("throws rather than falling back when no manifest declares the house", () => {
    // The failure that must never be quiet. A helper that returned the
    // repository root here would hand every reader in this directory a root
    // with no content under it, and every one of them would pass on nothing.
    const dir = tree({ ".": { name: "@chbrain/not-this-house", private: true } });
    try {
      expect(() => houseRoot(dir)).toThrow(/declares @chbrain\/khai-misfits/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("answers for this repository, in the layout this repository is actually in", () => {
    // Ties the simulated cases to the real tree, so a helper that passed the
    // fixtures and failed here could not go unnoticed.
    expect(HOUSE).toBe(houseRoot(REPO));
    expect(HOUSE.startsWith(REPO)).toBe(true);
  });
});
