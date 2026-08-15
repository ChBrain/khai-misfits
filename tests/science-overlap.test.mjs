import { describe, it, expect } from "vitest";
import { report, findUndeclared } from "./science_overlap.mjs";

// The cross-misfit warrant gate for the Misfits house. Every other gate is
// intra-misfit: the canon validator, the cast conformance, the language policy,
// the LORE check, the isolation rule, the lane and the changeset all ask "is
// this misfit well-formed?", and none asks "is this misfit already in the
// house?". This one asks the second question, and it asks it two ways.
//
// First, off docs/SCIENCE.md, the computed forward map (science -> misfit) that
// the drift gate already holds to a fresh build: a work belongs to one misfit.
// The same scholar across different works is expected and is most of the index;
// the same (scholar, work) carrying the spine of two misfits is the finding.
// Canon and contrast citations are exempted through `workPolicy` in
// khai-guard.config.json, so the exits are configured rather than judged.
//
// That half is now a wall. The house went 67 shared works -> 29 after the canon
// triage -> 4 after fourteen neighbour citations were marked as contrasts -> 0
// once A Reason Too Many and Paid to Stop Caring were restaged apart. Nothing is
// grandfathered and there is no baseline left to sit above: a new misfit that
// takes a work already carrying another misfit's spine fails here.
//
// Second, off the misfits themselves: a misfit must say where it sits. This is
// worth requiring on its own, because the pair that started all of this each
// carried a neighbours section and both named the same three, The Cobra Effect,
// Metric Fixation and Moral Licensing. Each had scanned the house and missed
// only the misfit standing next to it, and no source analysis was needed to
// catch that, only the question "which misfit is nearest, and why is it not
// this one?" asked of a reader who had to answer in writing.
//
// That half is still a ratchet. 37 of 246 misfits name no neighbour at all, and
// they are overwhelmingly the early ones (The Commons, The Cobra Effect, Moral
// Hazard, Regulatory Capture, Path Dependence, Jevons Paradox, The Market for
// Lemons, The Winning Bid), written before the convention existed. Failing them
// would block every pull request, so the gate holds the line where it is and
// lets nothing new past while they are worked through.
const UNDECLARED_BASELINE = 37;

describe("Misfits house: cross-misfit warrant gate", () => {
  it("no work carries the spine of more than one misfit", () => {
    const { overlaps, pairs } = report();
    if (overlaps.length) {
      const worst = pairs
        .slice(0, 10)
        .map(
          (p) =>
            `  [${p.stems.length}] ${p.pair}\n${p.stems.map((s) => `        ${s}`).join("\n")}`,
        )
        .join("\n");
      throw new Error(
        `science-overlap: ${overlaps.length} shared work(s), and the house holds at zero.\n` +
          `A misfit is citing a work that already carries another misfit's spine.\n` +
          `Resolve it one of three ways: add the work to workPolicy.canon if it is a\n` +
          `field's foundational text, mark the citation as a contrast in the REFERENCE.md\n` +
          `Origin table, or restage the boundary between the two misfits.\n\n` +
          `Run \`node tests/science_overlap.mjs\` for the full report, or\n` +
          `\`node tests/science_overlap.mjs --check "<Scholar> :: <Work>"\` before authoring.\n\n${worst}`,
      );
    }
    expect(overlaps.length).toBe(0);
  });

  it("no new misfit ships without naming a neighbour", () => {
    const undeclared = findUndeclared();
    if (undeclared.length > UNDECLARED_BASELINE) {
      throw new Error(
        `science-overlap: ${undeclared.length} misfit(s) name no neighbour, baseline ${UNDECLARED_BASELINE}.\n` +
          `Every REFERENCE.md must name at least one other misfit by its title and say\n` +
          `where the line between them falls. Asking that question in writing is what\n` +
          `catches the misfit standing next to yours.\n\n` +
          `  ${undeclared.join("\n  ")}`,
      );
    }
    expect(undeclared.length).toBeLessThanOrEqual(UNDECLARED_BASELINE);
  });

  it("the undeclared baseline is not stale", () => {
    // BASELINE lives in tests/, the governance lane, and the declarations live in
    // misfits/, which is not, so the two can never be lowered in one pull request
    // and an equality assertion would fail every content pull request that fixes
    // one. The slack is what the lane split costs; it goes to zero with the
    // baseline when the last of the 37 is written.
    const SLACK = 37;
    expect(UNDECLARED_BASELINE - findUndeclared().length).toBeLessThanOrEqual(SLACK);
  });
});
