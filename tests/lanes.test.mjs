// The lanes hold in both layouts, and the config says so before the move.
//
// `khai-guard.config.json` is the one file in this house that is neither built
// nor read by the suite, so until now nothing checked what it actually decides.
// That was tolerable while there was one layout to get right. It stops being
// tolerable across a move, because every path in the house changes at once and
// a lane config is a set of globs: a glob that stops matching does not fail, it
// silently stops owning, and an unowned path is a violation with a message
// pointing nowhere near the cause.
//
// So the config is exercised against a table of representative paths in BOTH
// arrangements, through the same `checkBranchScope` the CI gate calls. Written
// now, the table is a claim about a layout that does not exist yet; after step 4
// it is a regression test on the one that does. Same assertions either way,
// which is the only way to know the two agree.
//
// The most useful row is `packages/khai-misfits/README.md` being CLOSED to the
// misfit lane. The migration briefing said to translate the misfit lane's
// `misfits/**` to `packages/**`, which is right for a house whose packages are
// each one unit of solution work and wrong for this one: the package holds the
// content AND the README and the concordance that governance owns. A lane's
// `allow` list grants a cross-lane pass, overriding ownership, so `packages/**`
// would have quietly handed the misfit lane the whole package.

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { checkBranchScope, resolveConfig } from "@chbrain/khai-guard";

// The repository root: `tests/` does not move, so this needs no probing in
// either layout.
const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

const config = resolveConfig(
  JSON.parse(readFileSync(join(REPO, "khai-guard.config.json"), "utf8")),
);

const MISFIT = "misfit/a-topic";
const GOVERNANCE = "governance/a-topic";

/** Which of the two protected lanes may carry this path, by the gate's own answer. */
function lanes(path) {
  return {
    misfit: checkBranchScope(MISFIT, [path], config).ok,
    governance: checkBranchScope(GOVERNANCE, [path], config).ok,
  };
}

const OWNED_BY_MISFIT = { misfit: true, governance: false };
const OWNED_BY_GOVERNANCE = { misfit: false, governance: true };
const EITHER = { misfit: true, governance: true };

// One table, read twice: once at the repository root and once under the package
// root. Every row must give the same answer in both columns, because the move
// changes where the house is and nothing about who owns what.
const HOUSE_PATHS = [
  ["misfits/a_misfit/play_a_misfit.md", OWNED_BY_MISFIT],
  ["misfits/a_misfit/REFERENCE.md", OWNED_BY_MISFIT],
  ["README.md", OWNED_BY_GOVERNANCE],
  ["AGENTS.md", OWNED_BY_GOVERNANCE],
  ["PERPLEXITY.md", OWNED_BY_GOVERNANCE],
  ["registry.json", EITHER],
  ["docs/SCIENCE.md", EITHER],
  ["REFERENCES.md", EITHER],
  ["package.json", EITHER],
  ["CHANGELOG.md", EITHER],
  ["LICENSE", EITHER],
  ["LICENSE-CODE", EITHER],
];

describe("lanes: the config decides the same way in both layouts", () => {
  describe.each([
    ["flat, as the house stands today", (p) => p],
    ["under packages/khai-misfits, as the house will stand", (p) => `packages/khai-misfits/${p}`],
  ])("%s", (_label, at) => {
    it.each(HOUSE_PATHS)("%s", (path, expected) => {
      expect(lanes(at(path))).toEqual(expected);
    });
  });

  it("keeps the governance layer where it is, which is not in the package", () => {
    // The other half of the move: these do NOT go down a level, because a lane
    // is a repository-level fact and a changeset is addressed to a workspace.
    // A config that moved them would be describing a repository nobody has.
    for (const path of [
      "khai-guard.config.json",
      "tests/lanes.test.mjs",
      ".github/workflows/ci.yml",
      "CLAUDE.md",
    ]) {
      expect(lanes(path)).toEqual(OWNED_BY_GOVERNANCE);
    }
  });

  it("lets the riders ride either lane, in both layouts", () => {
    for (const path of [
      ".changeset/a-change.md",
      "management/orders/an_order.md",
      "management/plan_fill_the_season.md",
    ]) {
      expect(lanes(path)).toEqual(EITHER);
    }
  });

  it("holds .changeset/** as a rider, not as shared", () => {
    // `shared` is for build artefacts, which are never the whole of a change, so
    // a shared path owns no lane and `khai-guard branch` refuses: "this change is
    // not one lane". A changeset REPAIR is a change whose whole content is
    // .changeset/**, so under `shared` the fix for a wrong package name would
    // have had nowhere to be committed. A rider already means what was wanted:
    // it rides the lane of the change it accompanies and homes to a fallback
    // when it rides alone. Moved here from tests/changesets.test.mjs, retired
    // now that the corpus rule it stood beside (a changeset names a real
    // workspace package) is computed by `khai-guard changeset-check` itself.
    const raw = JSON.parse(readFileSync(join(REPO, "khai-guard.config.json"), "utf8"));
    expect(raw.branchScope.shared).not.toContain(".changeset/**");
    expect(raw.branchScope.riders).toContainEqual({
      pattern: ".changeset/**",
      fallback: "governance",
    });
  });

  it("does not hand the misfit lane the rest of the package", () => {
    // The briefing's `packages/**` would pass every one of these. Named as its
    // own test rather than left implicit in the table above, because it is the
    // assertion that would go quiet if somebody later widened the glob to match
    // the sibling house, and a widened lane fails nothing on the day it lands.
    for (const path of [
      "packages/khai-misfits/README.md",
      "packages/khai-misfits/playwright_instructions.md",
      "packages/another-house/misfits/x/play_x.md",
    ]) {
      expect(checkBranchScope(MISFIT, [path], config).ok).toBe(false);
    }
  });

  it("classifies a misfit's content as source in both layouts", () => {
    // The source/test separation gate reads the same globs; a play that stopped
    // being source would let a restructure ride in on a test-only PR.
    expect(config.source).toContain("misfits/**");
    expect(config.source).toContain("packages/khai-misfits/misfits/**");
    expect(config.changesetPolicy.countDrivenAdd).toContain(
      "packages/khai-misfits/misfits/*/play_*.md",
    );
  });
});
