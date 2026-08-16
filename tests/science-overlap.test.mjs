import fs from "node:fs";
import { join } from "node:path";
import { ROOT } from "./science_overlap.mjs";
import { describe, it, expect } from "vitest";
import {
  report,
  findUndeclared,
  findOpposed,
  findUnaxised,
  findMalformedAxes,
  findUnindexed,
  findUnconcepted,
  buildReferences,
} from "./science_overlap.mjs";

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
// That half is now a wall too. 37 of 246 misfits named no neighbour, almost all
// of them early ones written before the convention existed, and all 37 have been
// written. Nothing is grandfathered here either.
//
// The rule stays deliberately loose: the REFERENCE.md must name at least one
// other misfit's title, anywhere, rather than in a fixed phrase. A stricter
// sentence-level form was tried and scored worse, 186 of 246 against 209, and
// its false negatives were exactly the misfits that declare their neighbour
// inside an Origin row rather than in prose. A robust weak check that holds
// beats a fragile strong one that fails correct work.
//
// Reciprocity is deliberately not required. Across the house there are 604
// directed declarations and only 25 reciprocated pairs, because nearest is not
// a symmetric relation: a misfit may sit closest to one that sits closest to
// something else again. Requiring the return edge would be wrong as well as
// expensive.
const UNDECLARED_BASELINE = 0;

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
        `science-overlap: ${undeclared.length} misfit(s) name no neighbour, and the house holds at zero.\n` +
          `Every REFERENCE.md must name at least one other misfit by its title and say\n` +
          `where the line between them falls. Asking that question in writing is what\n` +
          `catches the misfit standing next to yours.\n\n` +
          `  ${undeclared.join("\n  ")}`,
      );
    }
    expect(undeclared.length).toBeLessThanOrEqual(UNDECLARED_BASELINE);
  });

  it("no opposed pair goes undeclared", () => {
    // The third question, and the one the other two cannot ask. The shared-work
    // wall catches misfits that agree so completely they are nearly one. It is
    // structurally blind to the opposite failure, because what makes two misfits
    // contradict is that they come from different literatures, which is exactly
    // what makes them pass a shared-work check: Room to Grow and Safety in
    // Numbers share no scholar and no work at all.
    //
    // So the opposition is declared once in `axisPolicy` and checked forever.
    // Two misfits on one axis with opposite signs are in conflict and must name
    // each other. The judgement is made at authoring; nothing is judged here.
    //
    // This is a pilot over one family, the density-dependence misfits, and it
    // has already earned itself: from eight declared entries it found Room to
    // Grow against Worth More Nearly Gone, which a hand sweep of that same
    // family had missed, and it correctly declined to flag Safety in Numbers
    // against Worth More Nearly Gone, which share an axis and a sign. Declaring
    // the rest of the house widens the check; it does not change it.
    const silent = findOpposed().filter((p) => !p.aNamesB || !p.bNamesA);
    if (silent.length) {
      throw new Error(
        `science-overlap: ${silent.length} opposed pair(s) not declared from both sides.\n` +
          `Two misfits on one axis with opposite signs make contradictory claims,\n` +
          `and a reader taking either as the general law will be wrong about the\n` +
          `other's cases. Each must name the other and say what sets the sign.\n\n` +
          silent
            .map(
              (p) =>
                `  [${p.axis}] ${p.a} vs ${p.b} (${p.aNamesB ? "" : "a->b missing "}${p.bNamesA ? "" : "b->a missing"})`,
            )
            .join("\n"),
      );
    }
    expect(silent.length).toBe(0);
  });

  it("no axis declaration is malformed", () => {
    // A half-written or misspelled declaration is worse than none, because it
    // reads as covered and checks nothing. There is no legacy set of these to
    // grandfather, so this fails outright rather than ratcheting.
    expect(findMalformedAxes()).toEqual([]);
  });

  it("coverage does not slip: no new misfit ships without an axis", () => {
    // The opposition check iterates the misfits that declare an axis, not the
    // house, so a misfit carrying no declaration is not caught and not failed:
    // it is invisible. That is the same "depends on somebody remembering" the
    // rest of this gate exists to remove, so coverage is ratcheted.
    //
    // 238 of 246 carry no axis yet. They are grandfathered and walk down as
    // families are declared; what the ratchet refuses is a new misfit adding
    // to them. Because the declaration lives in the misfit's own REFERENCE.md
    // frontmatter rather than in khai-guard.config.json, it rides the same
    // branch as the misfit it describes, so satisfying this costs no second
    // pull request.
    const UNAXISED_BASELINE = 228;
    const unaxised = findUnaxised();
    if (unaxised.length > UNAXISED_BASELINE) {
      const fresh = unaxised.length - UNAXISED_BASELINE;
      throw new Error(
        `science-overlap: ${unaxised.length} misfit(s) declare no axis, baseline ${UNAXISED_BASELINE}.\n` +
          `${fresh} new misfit(s) shipped without one, so the opposed-pair check\n` +
          `cannot see them. Add to the misfit's REFERENCE.md frontmatter:\n\n` +
          `  axis: <the quantity the play acts on>\n` +
          `  sign: positive | negative   # how the outcome moves as that quantity rises\n`,
      );
    }
    expect(unaxised.length).toBeLessThanOrEqual(UNAXISED_BASELINE);
  });

  it("coverage does not slip: every misfit reaches the concordance", () => {
    // REFERENCES.md is the lookup an author is told to dedup against, keyed by
    // the scholarly name rather than the house's title, so a misfit missing from
    // it is invisible to the check that is supposed to prevent restaging its
    // concept. It is hand-written because resolving a concept to its canonical
    // name is a judgement, so it cannot be generated the way docs/SCIENCE.md is,
    // and it drifted 37 misfits behind before anything noticed.
    //
    // A wall now: the 37 have been indexed. The pairing rule was already written
    // in REFERENCES.md itself and was skipped anyway, which is why it is a gate.
    const UNINDEXED_BASELINE = 0;
    const unindexed = findUnindexed();
    if (unindexed.length > UNINDEXED_BASELINE) {
      throw new Error(
        `science-overlap: ${unindexed.length} misfit(s) absent from REFERENCES.md, and the house holds at zero.\n` +
          `The concordance is the lookup an author dedups against, keyed by the concept's\n` +
          `scholarly name rather than the house title. A misfit missing from it can have\n` +
          `its concept restaged by somebody who checked properly.\n\n  ` +
          unindexed.slice(-10).join("\n  "),
      );
    }
    expect(unindexed.length).toBeLessThanOrEqual(UNINDEXED_BASELINE);
  });

  it("every misfit declares its concordance row", () => {
    // concept, field and source live in the warrant's own frontmatter, so the
    // row travels with the misfit. A warrant missing any of the three is simply
    // absent from the built concordance, which is the failure the hand-kept
    // file had, so this is a wall rather than a ratchet.
    expect(findUnconcepted()).toEqual([]);
  });

  it("REFERENCES.md equals a fresh build from the warrants", () => {
    // The last hand-kept index in the house is now generated, so it cannot fall
    // behind the way it fell 37 misfits behind before. The prose stays written;
    // only the tables under ## Origin are built. Rebuild with
    // `node tests/science_overlap.mjs --build-refs`.
    // Compared on content, not on padding: Prettier owns the column widths of a
    // markdown table and re-pads them after a build, so a byte comparison would
    // fail on whitespace the format:check gate is already responsible for.
    const norm = (t) =>
      t
        .split("\n")
        .map((l) => (l.startsWith("|") ? l.replace(/\s+/g, " ").trim() : l))
        .filter((l) => !/^\|[\s|:-]+\|$/.test(l))
        .join("\n");
    const built = norm(buildReferences());
    const onDisk = norm(fs.readFileSync(join(ROOT, "REFERENCES.md"), "utf8"));
    if (built !== onDisk)
      throw new Error(
        "REFERENCES.md is out of date with the warrants that generate it.\n" +
          "Run `node tests/science_overlap.mjs --build-refs` and commit the result.",
      );
    expect(built).toBe(onDisk);
  });
});
