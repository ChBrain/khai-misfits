import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as kt from "@chbrain/khai-tests";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// The science index build-drift gate for the Misfits house. `docs/SCIENCE.md`
// is the computed forward map (science -> misfit), inverted from every misfit's
// REFERENCE.md Origin table by `khai-tests science build`. This gate holds the
// committed index byte-identical to a fresh build, so a misfit that is staged
// but not reindexed fails at the PR -- the exact gap that let The Front sit in
// the registry while absent from the concordance.
//
// Dormant until the installed @chbrain/khai-tests is collection-aware (exposes
// `collectCollectionScience`). Bumping khai-tests to that release activates the
// gate automatically -- the same "dormant until the source lands" idiom the kit
// uses elsewhere, so source (the khai-tests feature) and its gate never share a
// release.
const DORMANT = typeof kt.collectCollectionScience !== "function";

describe.skipIf(DORMANT)("Misfits house: science index build-drift gate", () => {
  it("docs/SCIENCE.md equals a fresh build from every misfit's REFERENCE.md Origin table", () => {
    // Empty array == in sync; any element is a drift error (missing or stale).
    expect(kt.verifyScienceIndex(root)).toEqual([]);
  });
});
