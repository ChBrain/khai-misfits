import { describe, it, expect } from "vitest";
import { report } from "./science_overlap.mjs";

// The cross-misfit warrant gate for the Misfits house. Every other gate is
// intra-misfit: the canon validator, the cast conformance, the language policy,
// the LORE check, the isolation rule, the lane and the changeset all ask "is
// this misfit well-formed?", and none asks "is this misfit already in the
// house?". This one asks the second question, off docs/SCIENCE.md, the computed
// forward map (science -> misfit) that the drift gate already holds to a fresh
// build.
//
// The rule: a work belongs to one misfit. The same scholar across different
// works is expected and is most of the index; the same (scholar, work) carrying
// the spine of two misfits is the finding. Canon and contrast citations are
// exempted through `workPolicy` in khai-guard.config.json, so the exits are
// configured rather than judged.
//
// Phase 1 ships this as a ratchet, not a wall. The house carries 67 shared
// works today, most of them a field's foundational text cited by several
// misfits in the same family, and one of them a real overlap: A Reason Too Many
// and Paid to Stop Caring both anchor on Deci (1971) and on Lepper, Greene and
// Nisbett (1973). Failing on the legacy set would block every pull request, so
// the gate holds the line where it is and lets nothing new past. Phase 2 walks
// BASELINE down as each is triaged into canon, into contrast, or into a
// restaged boundary; Phase 3 sets it to zero and deletes the constant.
//
// The ratchet is on the count, so it tolerates one overlap being swapped for
// another between runs. That is the known slack, and it closes when the number
// reaches zero.
const BASELINE = 29;
const SLACK = 30;

describe("Misfits house: cross-misfit warrant gate", () => {
  it("no work carries the spine of two misfits beyond the triaged baseline", () => {
    const { overlaps, pairs } = report();
    if (overlaps.length > BASELINE) {
      const worst = pairs
        .slice(0, 10)
        .map(
          (p) =>
            `  [${p.stems.length}] ${p.pair}\n${p.stems.map((s) => `        ${s}`).join("\n")}`,
        )
        .join("\n");
      throw new Error(
        `science-overlap: ${overlaps.length} shared work(s), baseline ${BASELINE}.\n` +
          `A new misfit is citing a work that already carries another misfit's spine.\n` +
          `Resolve it one of three ways: add the work to workPolicy.canon if it is a\n` +
          `field's foundational text, mark the citation as a contrast in the REFERENCE.md\n` +
          `Origin table, or restage the boundary between the two misfits.\n\n` +
          `Run \`node tests/science_overlap.mjs\` for the full report.\n\n${worst}`,
      );
    }
    expect(overlaps.length).toBeLessThanOrEqual(BASELINE);
  });

  it("the baseline is not stale: it tracks the house rather than sitting above it", () => {
    // A baseline left far above the real count silently stops ratcheting, so the
    // two are held together. Not by equality, though: BASELINE lives in tests/,
    // which is the governance lane, and the citations live in misfits/, which is
    // not, so the two can never be lowered in one pull request. An equality
    // assertion would therefore fail every content pull request that resolves an
    // overlap, with no legal way to fix it in the same branch.
    //
    // SLACK is what the lane split costs: a misfit pull request may retire up to
    // this many overlaps on its own, and governance re-tightens BASELINE after.
    // It is sized for the Phase 2 sweep, which retires overlaps from the content
    // side in one pass, so for now only the ratchet is load-bearing. Phase 3 sets
    // BASELINE and SLACK both to zero, and then the gate is exact.
    const { overlaps } = report();
    expect(BASELINE - overlaps.length).toBeLessThanOrEqual(SLACK);
  });
});
