// Science-overlap: the cross-misfit warrant check for the Misfits house.
//
// Every gate the house runs is intra-misfit. The canon validator, the cast
// conformance, the language policy, the LORE check, the isolation rule, the
// lane and the changeset all ask "is this misfit well-formed?", and not one of
// them asks "is this misfit already in the house?". The registry build counts
// directories; it never compares them. So two misfits can stage one mechanism
// off one research spine and every gate passes, which is exactly what happened
// with A Reason Too Many and Paid to Stop Caring: both anchor on Deci (1971)
// and on Lepper, Greene and Nisbett (1973), and neither names the other.
//
// The rule this module computes: a work belongs to one misfit. The same scholar
// across different works is expected and fine, and is most of the index. What
// is not fine is the same (scholar, work) carrying the spine of two misfits.
//
// Two exits keep the rule honest, and both are configured rather than judged,
// in `workPolicy` in khai-guard.config.json:
//
//   canon    -- a field's foundational work, which many misfits may share.
//               Kahneman & Tversky on prospect theory, Forrester and Sterman on
//               system dynamics, Capen, Clapp & Campbell on the winner's curse.
//               Citing the canon of a field is not sharing a spine.
//   contrast -- a work cited to mark a line rather than to carry one. The house
//               already does this in prose ("cited to distinguish", "Distinction
//               only."); `contrastMarkers` turns that convention into a term the
//               check can read.
//
// Source of truth is docs/SCIENCE.md, the generated forward map (science ->
// misfit) that `khai-tests science build` inverts out of every misfit's
// REFERENCE.md Origin table. Reading the index rather than the 246 files means
// this check and the per-misfit warrant cannot drift apart, and the drift gate
// in science-drift.test.mjs already holds the index to a fresh build.
//
// Runnable directly, which is the point: the cheapest place to catch an overlap
// is before 31 files exist, not at the pull request.
//
//   node tests/science_overlap.mjs                 the house report
//   node tests/science_overlap.mjs --json          the same, machine-readable
//   node tests/science_overlap.mjs --check "Deci :: Effects of Externally ..."
//                                                 does this spine already anchor
//                                                 a misfit? ask before authoring

import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const DEFAULT_CONTRAST_MARKERS = [
  "cited to distinguish",
  "cited to mark the line",
  "distinction only",
  "distinction.",
  "the neighbour, held clear",
  "the cousin, and the difference",
  "the classical effect it is named against",
  "held near",
  "held clear",
  "(contrast)",
];

export function loadPolicy(root = ROOT) {
  const cfg = JSON.parse(fs.readFileSync(join(root, "khai-guard.config.json"), "utf8"));
  const wp = cfg.workPolicy || {};
  return {
    contrastMarkers: (wp.contrastMarkers || DEFAULT_CONTRAST_MARKERS).map((m) => m.toLowerCase()),
    canon: (wp.canon || []).map(normaliseWork),
    aliases: wp.aliases || {},
  };
}

// A row of the index: one scholar, one misfit, one work, one scope.
// Scholar rows open with the bolded name; continuation rows carry the turnstile.
export function parseScience(src) {
  const rows = [];
  let scholar = null;
  for (const line of src.split("\n")) {
    const m = line.match(
      /^\|\s*(?:\*\*(.+?)\*\*|↳)\s*\|\s*`([a-z0-9_]+)`\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/,
    );
    if (!m) continue;
    if (m[1]) scholar = m[1];
    if (!scholar) continue;
    rows.push({ scholar, misfit: m[2], work: m[3], scope: m[4] });
  }
  return rows;
}

// Work identity. The Key Work cell is free text and the same paper is written
// several ways across the house ("Undermining Children's Intrinsic Interest
// with Extrinsic Reward" against the same title carrying its subtitle), so the
// string is reduced to a stem: the first work named, without its parenthetical
// journal and year, without punctuation, capped at six words. `aliases` is the
// escape hatch for the pairs the stem does not catch.
export function normaliseWork(work, aliases = {}) {
  let s = String(work)
    .replace(/<br>[\s\S]*$/, "") // the <sub> author annotation is not the title
    .replace(/\([^)]*\)/g, " ") // journal and year
    .split(";")[0] // the first work named
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  s = s.split(" a test of the ")[0];
  s = s.split(" ").slice(0, 6).join(" ");
  return aliases[s] || s;
}

export function isContrast(row, markers) {
  const hay = (row.scope + " " + row.work).toLowerCase();
  return markers.some((m) => hay.includes(m));
}

export function keyOf(row, aliases) {
  return row.scholar + " :: " + normaliseWork(row.work, aliases);
}

// Every (scholar, work) carrying a spine in more than one misfit, canon and
// contrast citations removed.
export function findOverlaps(rows, policy) {
  const byKey = new Map();
  for (const row of rows) {
    if (isContrast(row, policy.contrastMarkers)) continue;
    const stem = normaliseWork(row.work, policy.aliases);
    if (policy.canon.includes(stem)) continue;
    const key = row.scholar + " :: " + stem;
    if (!byKey.has(key)) byKey.set(key, new Map());
    byKey.get(key).set(row.misfit, row.work.replace(/<br>[\s\S]*$/, "").trim());
  }
  return [...byKey.entries()]
    .filter(([, misfits]) => misfits.size > 1)
    .map(([key, misfits]) => ({
      key,
      scholar: key.split(" :: ")[0],
      stem: key.split(" :: ")[1],
      misfits: [...misfits.keys()].sort(),
      forms: [...new Set(misfits.values())],
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
}

// The same overlaps grouped by the misfit pair they implicate, which is the
// view that ranks: a pair sharing four works is a different problem from a pair
// sharing one.
export function pairsOf(overlaps) {
  const pairs = new Map();
  for (const o of overlaps) {
    for (let i = 0; i < o.misfits.length; i++) {
      for (let j = i + 1; j < o.misfits.length; j++) {
        const pk = o.misfits[i] + " + " + o.misfits[j];
        if (!pairs.has(pk)) pairs.set(pk, []);
        pairs.get(pk).push(o.stem);
      }
    }
  }
  return [...pairs.entries()]
    .map(([pair, stems]) => ({ pair, stems: [...new Set(stems)] }))
    .sort((a, b) => b.stems.length - a.stems.length || a.pair.localeCompare(b.pair));
}

export function report(root = ROOT) {
  const policy = loadPolicy(root);
  const rows = parseScience(fs.readFileSync(join(root, "docs", "SCIENCE.md"), "utf8"));
  const overlaps = findOverlaps(rows, policy);
  return { rows: rows.length, policy, overlaps, pairs: pairsOf(overlaps) };
}

// The house's misfits by directory and display title, read from each play's
// frontmatter, which is the only place a title is authoritative.
export function houseTitles(root = ROOT) {
  const dir = join(root, "misfits");
  const titles = new Map();
  for (const d of fs.readdirSync(dir)) {
    const play = join(dir, d, `play_${d}.md`);
    if (!fs.existsSync(play)) continue;
    const t = (fs.readFileSync(play, "utf8").match(/^title: "(.+)"$/m) || [])[1];
    if (t) titles.set(d, t);
  }
  return titles;
}

// The second half of the cross-misfit warrant: a misfit must say where it sits.
// A Reason Too Many and Paid to Stop Caring each carried a "carefully distinct
// from its nearest neighbours" section, and both named the same three, The Cobra
// Effect, Metric Fixation and Moral Licensing. Each had scanned the house and
// missed only the misfit standing next to it, so a declaration that names a real
// neighbour is worth requiring on its own, independently of the source analysis.
//
// The rule is deliberately loose: the REFERENCE.md must name at least one other
// misfit's title, anywhere. It does not require a fixed phrasing, because the
// house writes the declaration several ways and puts it in prose or in an Origin
// row depending on the misfit, and a stricter sentence-level rule was tried and
// misfires on exactly the misfits that declare their neighbour inside a table.
// A robust weak check that ratchets beats a fragile strong one that cries wolf.
// Titles of seven characters or fewer are skipped, since a short one can appear
// in ordinary prose by accident.
export function findUndeclared(root = ROOT) {
  const titles = houseTitles(root);
  const undeclared = [];
  for (const [d] of titles) {
    const src = fs.readFileSync(join(root, "misfits", d, "REFERENCE.md"), "utf8");
    let names = false;
    for (const [other, title] of titles) {
      if (other === d || title.length <= 7) continue;
      if (src.includes(title)) {
        names = true;
        break;
      }
    }
    if (!names) undeclared.push(d);
  }
  return undeclared.sort();
}

// Pre-authoring: does a proposed spine already anchor a misfit? Accepts
// "Scholar :: Work" or a bare work, and answers before 31 files exist.
export function checkCandidate(spec, root = ROOT) {
  const policy = loadPolicy(root);
  const rows = parseScience(fs.readFileSync(join(root, "docs", "SCIENCE.md"), "utf8"));
  const [lhs, rhs] = spec.includes("::")
    ? spec.split("::").map((s) => s.trim())
    : [null, spec.trim()];
  const stem = normaliseWork(rhs, policy.aliases);
  return rows
    .filter((r) => normaliseWork(r.work, policy.aliases) === stem)
    .filter((r) => !lhs || r.scholar.toLowerCase().includes(lhs.toLowerCase()))
    .map((r) => ({
      scholar: r.scholar,
      misfit: r.misfit,
      work: r.work.replace(/<br>[\s\S]*$/, "").trim(),
      contrast: isContrast(r, policy.contrastMarkers),
      canon: policy.canon.includes(stem),
    }));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const ci = args.indexOf("--check");
  if (ci !== -1) {
    const hits = checkCandidate(args[ci + 1] || "");
    if (!hits.length) console.log("clear: no misfit cites this work.");
    for (const h of hits)
      console.log(
        `${h.canon ? "canon   " : h.contrast ? "contrast" : "SPINE   "}  ${h.misfit}  <- ${h.scholar}: ${h.work}`,
      );
    process.exit(0);
  }
  const r = report();
  if (args.includes("--json")) {
    console.log(JSON.stringify({ rows: r.rows, overlaps: r.overlaps, pairs: r.pairs }, null, 2));
    process.exit(0);
  }
  console.log(
    `science-overlap: ${r.rows} index rows, ${r.overlaps.length} work(s) shared across misfits\n`,
  );
  for (const p of r.pairs) {
    console.log(`  [${p.stems.length}] ${p.pair}`);
    for (const s of p.stems) console.log(`        ${s}`);
  }
}
