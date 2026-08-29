// Where the house is, which is not always where the repository is.
//
// This exists ahead of the workspace move, and that order is the whole point.
// Today the content root and the repository root are one directory: `misfits/`,
// `registry.json`, `docs/SCIENCE.md` and `REFERENCES.md` sit beside
// `khai-guard.config.json`, `.changeset/`, `management/` and `tests/`. After the
// move they do not: the content drops to `packages/khai-misfits/` and the
// governance layer stays at the top, because a lane is a repository-level fact
// and a changeset is addressed to a workspace.
//
// So there are two roots, and every reader in this directory wants exactly one
// of them. Getting that wrong does not throw. A reader handed the repository
// root after the move finds no `misfits/` and reports an empty house, which is
// a PASS: zero misfits, zero warrants, zero overlaps, zero unresolved
// namesakes. **The gate goes quiet rather than red**, which is why the counts
// are taken before the move and compared after, and why any count that improves
// is read here as a reader having gone blind rather than as good news.
//
// The house root is resolved by NAME and not by path. The briefing that ordered
// this migration says to try `packages/khai-misfits` and then `.`, which is
// right about today and encodes the directory layout in every reader that asks.
// The manifest already carries the answer: `workspacePackages` returns the root
// package plus every directory the root's `workspaces` patterns reach, keyed by
// the name each manifest declares. In the flat layout that map is the one root
// package and the answer is the repository; in the workspace layout the root is
// `@chbrain/khai-misfits-workspace` and the answer is the directory whose
// manifest still says `@chbrain/khai-misfits`. One question, both layouts, and
// no reader needs to know which one it is standing in.
//
// It throws when it cannot find the package. That is deliberate and is the
// lesson the vacuous language gate below it taught: a helper that falls back to
// the repository root on failure would hand every reader a root with no house
// under it, and every one of them would pass.

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { workspacePackages } from "@chbrain/khai-tests";

/** The package that publishes. The anchor: a name, not a path. */
export const PACKAGE = "@chbrain/khai-misfits";

/**
 * The repository root: the lanes, the config, the changesets, the management
 * layer and this directory. `tests/` does not move, so this needs no probing in
 * either layout.
 */
export const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * The content root of the house, from a repository root. The directory whose
 * manifest declares `@chbrain/khai-misfits`, which is the repository itself
 * until the move and `packages/khai-misfits` after it.
 *
 * @param {string} repo
 * @returns {string}
 */
export function houseRoot(repo = REPO) {
  const packages = workspacePackages(repo);
  const dir = packages.get(PACKAGE);
  if (dir && existsSync(join(dir, "package.json"))) return dir;
  throw new Error(
    `houseRoot: no manifest in ${repo} declares ${PACKAGE}` +
      ` (found: ${[...packages.keys()].join(", ") || "nothing"})`,
  );
}

/** The content root, resolved once for the readers in this directory. */
export const HOUSE = houseRoot(REPO);
