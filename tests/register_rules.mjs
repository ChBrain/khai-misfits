// Register-rules: the instrument that finds a rule this house discovered and
// never sent to a plan.
//
// The register, `management/plan_fill_the_season.md`, is append-only and
// chronological, and it is where a rule is discovered. The plans are where a
// rule is kept. Those are different files and nothing has ever connected them,
// so a pass that finds a rule, writes it up, and moves on has left it where
// only a reader of eleven thousand lines will find it again.
//
// Two passes measured the size of that gap. Of the hundred and thirty
// work-framed rules written into the register before this run, exactly one had
// reached a plan. The rest were carried by hand, two passes at a time, or are
// carried still. The register has concluded six times that method belongs in
// the plans and executed twice, both times as a pass that took it as the whole
// unit, which is the expensive version and the only one with a record of
// working. The cheap version, remembering to carry a rule when you write one,
// has failed every time it has been relied on.
//
// It failed because it was a discipline. This module is the attempt to make it
// a tool instead, and it exists because of a rule the house already holds:
// where a defect is a judgement about what a cell means, build something that
// finds it and leave the deciding to a person; where a defect is a computation,
// build a wall. Deciding whether a bold sentence is a standing rule or an
// observation about one play is a judgement, and the filter below has obvious
// false positives, so this is emphatically an instrument and not a gate. It
// reports; a person decides; and nothing here fails a build.
//
// THE FILTER, in four tests, each of which earned its place by cutting the set:
//
//   bold and long      -- a rule in this register is bold and at least eight
//                         words. 2717 bold spans become 1368.
//   general marker     -- it carries a modal or a general claim: never, always,
//                         cannot, must, is not, only, every. 1368 become 630.
//   no proper noun     -- past the first word. This is the test that does most
//                         of the work, because a statement about one play names
//                         it. 630 become 472. Its known cost is a false negative
//                         on a rule that names one of the house's own capitalised
//                         column or chapter names, `Source`, `Scope`, `Origin`,
//                         `Company` and the rest, so those are held in COMMON:
//                         they are a closed set and none of them is a person.
//   framed on the work -- its subject is a pass, a warrant, a candidate, an
//                         axis, an instrument, a lane, a count, rather than a
//                         subject the house stages. 472 become 130.
//
// THE CARRIED TEST is phrase containment, and it replaced a vocabulary-overlap
// score that did not work. The score asked how much of a rule's vocabulary
// appears in the plans, and a rule's vocabulary is this house's standard nouns,
// so six rules scoring a perfect one were absent from every plan. Containment
// asks whether any six consecutive content words of the rule appear in a plan.
// This house carries rules close to verbatim, so it is nearly free of both
// error kinds and it is exact rather than approximate.
//
// AND IT NEEDS NO BOOKMARK. An earlier attempt ordered the set by score and
// recorded a rank as the resume point, and the rank did not survive one pass:
// carrying a rule raised its own score and its neighbours', so five of seven
// carried rules reappeared in the set the next pass was told was unread. A test
// that computes carried-or-absent exactly does not need a resume point at all,
// because the queue is regenerated and a carried rule leaves it by itself.

import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");
const REGISTER = "management/plan_fill_the_season.md";

// Capitalised words that begin a sentence or are ordinary English rather than a
// name. Anything else capitalised mid-span is a play title, a scholar or a
// place, and marks the span as being about a subject rather than about the work.
const COMMON = new Set(
  `A An The This That These Those And But So It Its If When Where What Which Who
   Whose Not No Nothing Nobody Every Each Both Two Three Four Five One Read Take
   Order Run Name Write Declare Count Ask Grep Check Fix Do Use Prefer Here There
   Then Now Only Same Under In On At By For From To With Without Against Because
   Since While Until Whether
   Source Scope Origin Restrictions Encoding Company Triggers Stakes Arc Estate
   Taxonomy Owner Direction Orders Targets Implementation`.split(/\s+/),
);

const MARKER =
  /\b(never|always|cannot|must|should|is not|are not|does not|do not|the rule|means|is the|is what|only|every|a pass|worth)\b/i;

const WORK =
  /\b(a pass|the pass|every pass|each pass|any pass|this house|the slate|the register|the warrant|a warrant|the plan|a declaration|an audit|the audit|an instrument|the instrument|a grep|the grep|a shortlist|the shortlist|a selector|the selector|the gate|a gate|the wall|a wall|the lane|a lane|the changeset|a changeset|the branch|a branch|the concordance|the roster|the index|a candidate|the candidate|the count|a count|the dedup|dedup|the axis|an axis|a dial|the sign|the encoding|the canon)\b/i;

const words = (text) => text.toLowerCase().match(/[a-z']+/g) ?? [];

function hasProperNoun(span) {
  const parts = span.split(/\s+/);
  return parts.some((raw, i) => {
    if (i === 0) return false;
    const w = raw.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "");
    return (
      Boolean(w) && w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase() && !COMMON.has(w)
    );
  });
}

// Every bold span in the register that survives the four tests, with the line
// it sits on. `from` and `to` bound the search to a stretch of the file, which
// is how a pass checks only its own entry.
export function ruleSpans(root = REPO, { from = 1, to = Infinity } = {}) {
  const text = fs.readFileSync(join(root, REGISTER), "utf8");
  const out = [];
  for (const m of text.matchAll(/\*\*(.+?)\*\*/gs)) {
    const span = m[1].split(/\s+/).join(" ").trim();
    if (span.split(" ").length < 8) continue;
    if (!MARKER.test(span)) continue;
    if (hasProperNoun(span)) continue;
    if (!WORK.test(span)) continue;
    const line = text.slice(0, m.index).split("\n").length;
    if (line < from || line > to) continue;
    out.push({ line, span });
  }
  return out;
}

// The plans, normalised to a single stream of lower-case words, which is what
// containment is tested against. The register is excluded: it is the source.
export function planText(root = REPO) {
  const dir = join(root, "management");
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("plan_") && f.endsWith(".md") && !f.includes("fill_the_season"))
    .map((f) => fs.readFileSync(join(dir, f), "utf8"))
    .join(" ");
}

// Any `n` consecutive words of the span appearing in the plans counts as carried.
// Stop words are kept rather than stripped, because verbatim carriage is what is
// being detected and the connectives are part of what was carried. Six is the
// working length: shorter matches house boilerplate, longer misses a rule that
// was carried with a word changed.
export function isCarried(span, plans, n = 6) {
  const w = words(span);
  const p = ` ${words(plans).join(" ")} `;
  if (w.length < n) return p.includes(` ${w.join(" ")} `);
  for (let i = 0; i + n <= w.length; i += 1) {
    if (p.includes(` ${w.slice(i, i + n).join(" ")} `)) return true;
  }
  return false;
}

// The report: every rule-shaped span in range that no plan carries.
export function uncarried(root = REPO, range = {}) {
  const plans = planText(root);
  return ruleSpans(root, range).filter(({ span }) => !isCarried(span, plans));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const arg = (name) => {
    const hit = args.find((a) => a.startsWith(`--${name}=`));
    return hit ? Number(hit.split("=")[1]) : undefined;
  };
  const range = { from: arg("from") ?? 1, to: arg("to") ?? Infinity };
  const all = ruleSpans(REPO, range);
  const missing = uncarried(REPO, range);
  const where =
    range.to === Infinity ? `from line ${range.from}` : `lines ${range.from}-${range.to}`;
  console.log(
    `register rules (${where}): ${all.length} rule-shaped span(s), ${all.length - missing.length} carried into a plan, ${missing.length} not.`,
  );
  if (missing.length) {
    console.log("");
    for (const { line, span } of missing) {
      console.log(`  ${String(line).padStart(6)}  ${span}`);
    }
    console.log("");
    console.log(
      "A reading list and not a wall. Most of these are observations about one pass and owe nothing;",
    );
    console.log(
      "the ones that read as a standing instruction belong in a plan, and a person decides which.",
    );
  }
}
