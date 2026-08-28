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
// This is the same question every khai surface resting on a body of research
// has to ask, so from @chbrain/khai-tests 0.2.6 the kit owns the shape-agnostic
// half of the answer: `loadWorkPolicy`, `normaliseWork`, `isContrast`,
// `collectUnits`, `findOverlaps`, `pairsOf`, `checkCandidate`, `scanSurname`,
// `findUnresolvedNamesakes`, `scholarMatches` and `workMatches` all run off the
// same collector the science build itself runs on (docs/SCIENCE.md is a
// render of it, not the source of truth), for a collection house exactly as
// for the engine monorepo. This module now delegates every one of those to the
// kit rather than reimplementing them, and keeps only what is genuinely
// house-specific: the neighbours wall, the axis/opposition wall, the canon
// family finder, the register-slate check, and the REFERENCES.md concordance
// build, none of which the kit has any way to know about.
//
// Two exits keep the shared-work rule honest, and both are configured rather
// than judged, in `workPolicy` in khai-guard.config.json:
//
//   canon    -- a field's foundational work, which many misfits may share.
//               Kahneman & Tversky on prospect theory, Forrester and Sterman on
//               system dynamics, Capen, Clapp & Campbell on the winner's curse.
//               Citing the canon of a field is not sharing a spine.
//   contrast -- a work cited to mark a line rather than to carry one. The house
//               already does this in prose ("cited to distinguish", "Distinction
//               only."); `contrastMarkers` turns that convention into a term the
//               check can read.
//   supporting-- a work that is one misfit's spine and another's background. The
//               rule keys on a work *carrying the spine* of two misfits; the wall
//               cannot read a spine, so `supportingMarkers` is how the other side
//               says it is not one. Declared, not inferred, for the same reason
//               contrast is: the author knows which role a citation plays and no
//               scan of the prose does.
//
// Source of truth is the same collector `khai-tests science build` runs to
// produce docs/SCIENCE.md, the generated forward map (science -> misfit).
// Reading off that collector rather than the rendered markdown means this
// check and the per-misfit warrant cannot drift apart, and the drift gate in
// science-drift.test.mjs already holds the rendered index to a fresh build.
//
// Runnable directly, which is the point: the cheapest place to catch an overlap
// is before 31 files exist, not at the pull request.
//
//   node tests/science_overlap.mjs                 the house report
//   node tests/science_overlap.mjs --json          the same, machine-readable
//   node tests/science_overlap.mjs --slate         open register lines naming a
//                                                 concept the house already holds
//   node tests/science_overlap.mjs --check "Deci :: Effects of Externally"
//                                                 does this spine already anchor
//                                                 a misfit? ask before authoring.
//                                                 An abbreviated title is fine:
//                                                 this one matches loosely on
//                                                 purpose, since a false clear is
//                                                 what costs 31 files
//   node tests/science_overlap.mjs --undeclared-namesakes
//                                                 which surnames the house has not
//                                                 declared whose own cells already
//                                                 name more than one person: the
//                                                 probe run before a declaration,
//                                                 since the other namesake flags
//                                                 all read the index after one
//   node tests/science_overlap.mjs --compound
//                                                 which Key Work cells hide a
//                                                 second work behind a semicolon
//                                                 that another misfit already
//                                                 holds: the wall cannot see past
//                                                 the first work in a cell
//   node tests/science_overlap.mjs --surname Miller
//                                                 is this surname anywhere in the
//                                                 index, bare or resolved? The
//                                                 question --check cannot answer:
//                                                 handed a bare surname it reports
//                                                 a true clear to the wrong question

import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  loadWorkPolicy,
  normaliseWork,
  isContrast,
  roleOf,
  collectUnits,
  findOverlaps as kitFindOverlaps,
  pairsOf,
  scholarMatches,
  workMatches,
  checkCandidate as kitCheckCandidate,
  scanSurname as kitScanSurname,
  findUnresolvedNamesakes as kitFindUnresolvedNamesakes,
} from "@chbrain/khai-tests";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

export { normaliseWork, isContrast, scholarMatches, workMatches, pairsOf };

/**
 * The declared work policy for this house: the kit's loader, and only that.
 *
 * This used to re-read `supportingMarkers` from the config itself, because
 * `loadWorkPolicy` normalised to `{ contrastMarkers, canon, aliases }` and
 * dropped every other key without complaint -- so the vocabulary sat in the
 * config, the check read an empty list, and the count came back unchanged,
 * indistinguishable from no cell having declared a marker yet.
 *
 * The kit supplies it as of khai-tests 0.3.3, and supplies it to the SHARED-WORK
 * WALL as well, which the local re-read never could. That is the whole reason
 * the override goes rather than merely becoming redundant: while it stood, a
 * declared background exempted this instrument and not `npm test`, and a
 * divergence between two checks reading one policy is worse than either answer.
 */
export function loadPolicy(root = ROOT) {
  return loadWorkPolicy(root);
}

// A row of the rendered index: one scholar, one misfit, one work, one scope.
// Scholar rows open with the bolded name; continuation rows carry the turnstile.
// Kept for the house-specific instruments below (canonFamilies, findSuffixKeys)
// that read the rendered markdown rather than the kit's collector, since they
// have no counterpart in the kit and this is the simplest honest read of the
// index they need.
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

/**
 * findOverlaps, root-defaulted for this house. The house's wall is
 * `expect(report().overlaps).toEqual([])`: the kit computes off the same
 * collector the science build runs on, this house holds the line.
 */
export function findOverlaps(root = ROOT) {
  return kitFindOverlaps(root);
}

export function report(root = ROOT) {
  const policy = loadPolicy(root);
  const { records } = collectUnits(root);
  const overlaps = findOverlaps(root);
  return { rows: records.length, policy, overlaps, pairs: pairsOf(overlaps) };
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
//
// House-specific: the kit has no notion of a misfit "naming" another one.
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

// Pre-authoring: does a proposed spine already anchor a misfit? Delegates to the
// kit's checkCandidate(root, spec), which runs off the same collector as the
// science build and matches both halves loosely on purpose (the advisory's only
// expensive failure is a false clear, not a spurious hit). This wrapper keeps
// the house's own call shape (`spec` first, `root` defaulted) and the field
// name (`misfit`) the CLI output below and the house's callers already use --
// the kit's hits carry `unit`, since it is shape-agnostic across an engine
// monorepo and a collection house alike.
export function checkCandidate(spec, root = ROOT) {
  return kitCheckCandidate(root, spec).map((h) => ({
    scholar: h.scholar,
    misfit: h.unit,
    work: h.work.replace(/<br>[\s\S]*$/, "").trim(),
    contrast: h.contrast,
    canon: h.canon,
    match: h.match,
  }));
}

// The surname scan: is this surname anywhere in the index, bare or resolved?
// Delegates to the kit's scanSurname(root, name); same field-name adaptation as
// checkCandidate above (`unit` -> `misfit`, in a `hits` array rather than `rows`,
// matching what this house's CLI output already prints).
export function scanSurname(name, root = ROOT) {
  return kitScanSurname(root, name).map((k) => ({
    key: k.key,
    resolved: k.resolved,
    hits: k.rows.map((r) => ({
      misfit: r.unit,
      work: r.work.replace(/<br>[\s\S]*$/, "").trim(),
    })),
  }));
}

// The declared shared-surname policy for this house. Not re-exported from the
// kit's public entry point (only `scholarCollisions`, which answers a different
// question, is), so this stays a small local read of the same declared config
// the kit's own build resolves against -- the simplest honest implementation
// for the one piece the kit does not expose.
export function scholarHomonyms(root = ROOT) {
  const path = join(root, "khai-guard.config.json");
  if (!fs.existsSync(path)) return {};
  try {
    return JSON.parse(fs.readFileSync(path, "utf8"))?.scholarPolicy?.homonyms ?? {};
  } catch {
    return {};
  }
}

// The namesake wall: a surname declared in scholarPolicy.homonyms may not
// appear in the index unresolved. Delegates to the kit's
// findUnresolvedNamesakes(root); same field-name adaptation (`unit` ->
// `misfit`) as the two wrappers above.
export function findUnresolvedNamesakes(root = ROOT) {
  return kitFindUnresolvedNamesakes(root).map((r) => ({
    scholar: r.scholar,
    misfit: r.unit,
    forms: r.forms,
    work: r.work.replace(/<br>[\s\S]*$/, "").trim(),
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
        `${h.canon ? "canon   " : h.contrast ? "contrast" : "SPINE   "}  ${h.misfit}  <- ${h.scholar}: ${h.work}` +
          (h.match === "prefix"
            ? "\n            (loose match: read the cell above and judge it)"
            : ""),
      );
    process.exit(0);
  }
  const si = args.indexOf("--surname");
  if (si !== -1) {
    const name = args[si + 1] || "";
    if (!name) {
      console.log("usage: node tests/science_overlap.mjs --surname <Surname>");
      process.exit(2);
    }
    const keys = scanSurname(name);
    if (!keys.length) {
      console.log(`clear: no index key is the surname "${name}", bare or resolved.`);
      process.exit(0);
    }
    console.log(
      `taken: ${keys.length} index key(s) carry the surname "${name}". ` +
        `A hit is a cell to read, not a verdict: the same person on another work is expected.`,
    );
    for (const k of keys) {
      console.log(`  ${k.key}${k.resolved ? "" : "  (bare)"}`);
      for (const h of k.hits) console.log(`      ${h.misfit}  <- ${h.work}`);
    }
    process.exit(0);
  }
  if (args.includes("--slate")) {
    const stale = findStagedButOpen();
    if (!stale.length) console.log("slate: no open line names a concept the house already holds.");
    for (const x of stale)
      console.log(`STALE   "${x.concept}" is staged as ${x.misfit}: strike the line.`);
    process.exit(0);
  }
  if (args.includes("--build-refs")) {
    fs.writeFileSync(join(ROOT, "REFERENCES.md"), buildReferences());
    console.log("REFERENCES.md rebuilt from the warrants");
    process.exit(0);
  }
  if (args.includes("--namesakes")) {
    const loose = findUnresolvedNamesakes();
    const homonyms = scholarHomonyms();
    console.log(
      `${Object.keys(homonyms).length} declared shared surname(s); ${loose.length} unresolved.`,
    );
    for (const r of loose)
      console.log(
        `  ${r.scholar}  <- ${r.misfit}\n     declared: ${r.forms.join(", ")}\n     cited as: ${r.work}`,
      );
    process.exit(0);
  }
  if (args.includes("--forms")) {
    const shadowed = findShadowedForms();
    const homonyms = scholarHomonyms();
    console.log(
      `${Object.keys(homonyms).length} declared surname(s); ${shadowed.length} unreachable form(s).`,
    );
    for (const s of shadowed)
      console.log(
        `  ${s.surname} (${s.form}) is unreachable: "${s.shadowedBy}" is listed first and matches it.\n     move "${s.form}" before "${s.shadowedBy}".`,
      );
    process.exit(0);
  }
  if (args.includes("--compound")) {
    const found = findCompoundWorks();
    const open = found.filter((f) => !f.canon && !f.contrast && !f.supporting);
    if (!found.length)
      console.log("no Key Work cell hides a second work that another misfit holds.");
    for (const f of found) {
      const why = f.canon
        ? " [canon: exempt]"
        : f.contrast
          ? " [contrast row: exempt]"
          : f.supporting
            ? " [background: exempt]"
            : "";
      console.log(
        `COMPOUND  ${f.unit}${why}\n     hidden after the semicolon: ${f.hidden}\n     already indexed to: ${f.holders.join(", ")}`,
      );
    }
    if (found.length)
      console.log(
        `\n${found.length} hidden work(s) collide with an indexed work of another misfit; ` +
          `${open.length} carry no exemption and were never put to the wall.`,
      );
    process.exit(0);
  }

  if (args.includes("--suffixes")) {
    const bad = findSuffixKeys();
    if (!bad.length) console.log("no index key is a generational suffix.");
    for (const b of bad)
      console.log(
        `SUFFIX  "${b.key}" is keyed from ${b.misfit}: the Source cell ends in a suffix,\n     so the build took it for the surname. Drop the suffix from the cell.`,
      );
    process.exit(0);
  }
  if (args.includes("--undeclared-namesakes")) {
    const found = findUndeclaredNamesakes();
    if (!found.length) console.log("no undeclared surname's own cells name more than one person.");
    for (const f of found) {
      console.log(`UNDECLARED  ${f.surname} names ${f.people.length} people and is not declared.`);
      for (const p of f.people)
        console.log(
          `     ${p.given} ${f.surname}: ${[...new Set(p.rows.map((r) => r.unit))].join(", ")}`,
        );
    }
    if (found.length)
      console.log(
        `\n${found.length} undeclared surname(s) carry cells naming more than one person. ` +
          `A hit is a cell to read, not a verdict: declare locally and run --namesakes to cost the pass.`,
      );
    process.exit(0);
  }
  if (args.includes("--families")) {
    for (const f of canonFamilies()) {
      const marked = f.misfits.map((d) => (f.declared.includes(d) ? d : d + " (no axis)"));
      console.log(`[${f.misfits.length}] ${f.work}\n     ${marked.join(", ")}`);
    }
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
  const opp = findOpposed();
  const silent = opp.filter((p) => !p.aNamesB || !p.bNamesA);
  console.log(`opposed pairs on a declared axis: ${opp.length}, undeclared: ${silent.length}\n`);
  for (const p of opp) {
    const state = p.aNamesB && p.bNamesA ? "declared  " : "UNDECLARED";
    console.log(`  ${state}  [${p.axis}]  ${p.a} vs ${p.b}`);
  }
}

// ---------------------------------------------------------------------------
// Opposed pairs: the third question, and the one the other two cannot ask.
//
// The shared-work wall catches two misfits that agree so completely they are
// nearly one, which is what A Reason Too Many and Paid to Stop Caring were. It
// is structurally blind to the opposite failure, two misfits that contradict
// each other, because what makes two misfits contradict is that they come from
// different literatures, and coming from different literatures is exactly what
// makes them pass a shared-work check. Room to Grow and Safety in Numbers make
// opposite claims about the same intervention on the same quantity and share no
// scholar and no work at all.
//
// Contradiction is not computable from prose, and a cheap proxy was tried and
// rejected: "name at least one neighbour sharing no scholar with you" scores
// 209 of 246 and does not catch Room to Grow, which passes it comfortably while
// still contradicting Safety in Numbers unacknowledged.
//
// So the opposition is declared once and checked forever, the same shape as
// `canon` and `contrastMarkers`: each misfit's REFERENCE.md frontmatter records
// the quantity it acts on and the sign of the outcome's response to an increase
// in it. Two misfits on one axis with opposite signs are in conflict and must
// name each other. The judgement happens at authoring; the check does not judge
// anything.
//
// The declaration sits in the warrant rather than in khai-guard.config.json,
// which is where it started, for a lane reason that decides the whole design:
// the config is the governance lane and a misfit is not, so a new misfit could
// never declare its own axis in the pull request that adds it, and the gate
// meant to cover new work would have cost a second pull request every time. It
// is not in play frontmatter either, because the canon validator owns that
// schema and rejects unknown keys. The warrant's frontmatter is unpoliced and
// is in the misfit's own lane, so the declaration can travel with the misfit.
//
// House-specific: the kit has no notion of a play's axis or sign.
export function axesOf(root = ROOT) {
  const out = new Map();
  for (const d of fs.readdirSync(join(root, "misfits"))) {
    const p = join(root, "misfits", d, "REFERENCE.md");
    if (!fs.existsSync(p)) continue;
    const head = fs.readFileSync(p, "utf8").split("---")[1] || "";
    const axis = (head.match(/^axis:\s*(\S+)\s*$/m) || [])[1];
    const sign = (head.match(/^sign:\s*(\S+)\s*$/m) || [])[1];
    if (axis || sign) out.set(d, { axis, sign });
  }
  return out;
}

// A declaration that is half-written or misspelled is worse than none, because
// it reads as covered and checks nothing. Malformed declarations fail outright
// rather than ratcheting: there is no legacy set of them to grandfather.
export function findMalformedAxes(root = ROOT) {
  const bad = [];
  for (const [d, { axis, sign }] of axesOf(root)) {
    if (!axis) bad.push(`${d}: sign without axis`);
    else if (!sign) bad.push(`${d}: axis without sign`);
    else if (sign !== "positive" && sign !== "negative")
      bad.push(`${d}: sign is "${sign}", expected positive or negative`);
  }
  return bad.sort();
}

// Misfits carrying no axis at all. Invisible to the opposition check, which is
// why the coverage of that check is ratcheted rather than assumed.
export function findUnaxised(root = ROOT) {
  const declared = axesOf(root);
  return [...houseTitles(root).keys()].filter((d) => !declared.has(d)).sort();
}

export function findOpposed(root = ROOT) {
  const declared = axesOf(root);
  const titles = houseTitles(root);
  const names = (d, other) => {
    const t = titles.get(other);
    return !!t && fs.readFileSync(join(root, "misfits", d, "REFERENCE.md"), "utf8").includes(t);
  };
  const out = [];
  const keys = [...declared.keys()]
    .filter((d) => declared.get(d).axis && declared.get(d).sign)
    .sort();
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const [a, b] = [keys[i], keys[j]];
      if (declared.get(a).axis !== declared.get(b).axis) continue;
      if (declared.get(a).sign === declared.get(b).sign) continue;
      out.push({ a, b, axis: declared.get(a).axis, aNamesB: names(a, b), bNamesA: names(b, a) });
    }
  }
  return out;
}

// The canon list read forwards. `workPolicy.canon` exists to stop a field's
// foundational text reading as a shared spine, so it is written as a list of
// exceptions, but the same data says something positive: the misfits citing one
// canon work are in one conversation. That is exactly the population where an
// opposed pair hides, since two misfits in one literature are the ones with a
// quantity in common to disagree about.
//
// It is a better candidate generator than intuition. The density-dependence and
// safety families were both picked by hand; this hands back every family the
// house actually has, ranked, with the undeclared members marked, so the next
// family to declare is read off rather than guessed at.
//
// House-specific: ranking canon families against this house's own axis
// declarations is not a question the kit's generic policy loader can answer.
export function canonFamilies(root = ROOT) {
  const policy = loadPolicy(root);
  const rows = parseScience(fs.readFileSync(join(root, "docs", "SCIENCE.md"), "utf8"));
  const declared = axesOf(root);
  const fam = new Map();
  for (const r of rows) {
    const stem = normaliseWork(r.work, policy.aliases);
    if (!policy.canon.includes(stem)) continue;
    if (!fam.has(stem)) fam.set(stem, new Set());
    fam.get(stem).add(r.misfit);
  }
  return [...fam.entries()]
    .map(([work, set]) => {
      const misfits = [...set].sort();
      return { work, misfits, declared: misfits.filter((d) => declared.has(d)) };
    })
    .filter((f) => f.misfits.length > 1)
    .sort((a, b) => b.misfits.length - a.misfits.length || a.work.localeCompare(b.work));
}

// A slate line for a concept the house already holds.
//
// The rule in CLAUDE.md is one line long: take the next misfit from the top of
// the register and **strike what you stage**. The second half is the half that
// gets skipped, every time, because striking is the only step in the sequence
// that produces nothing. It has now been skipped three times, and twice the
// response was a prose note telling the next author to try harder, which is what
// a house writes when it has not worked out how to compute something.
//
// An unstruck line is not a neutral omission. The register is the authoring
// memory and the next author trusts it, so a line left open is a live
// instruction to build something that already exists.
//
// The register itself cannot be generated: a discard and its reason are
// judgements, and no inversion of a warrant supplies them. This part of it can
// be checked. A slate line opens with the candidate's concept name, and a
// staged misfit declares its concept in frontmatter, so a line whose name
// matches a concept in the house is a line that should have been struck.
//
// **It catches about half, and the half it misses is worth knowing.** A line is
// written before the misfit exists, and the concept is often renamed during
// authoring once the cut is settled: "The Lucas Critique" stayed and was caught,
// "Certification Requires Individuation" became "Certification and the
// Attribution Requirement" and was not. No key fixes that, because the drift is
// the author changing their mind, which is the thing authoring is for. What the
// check has instead is **no false positives**: if the concept is in the house,
// the line is stale, so it can be a wall rather than an advisory.
//
// Lines that begin "Extend" are skipped, since those direct an Origin row onto
// an incumbent and are supposed to name a concept the house holds.
//
// House-specific: the register is a house document; the kit has no notion of it.
export function slateLineConcept(line) {
  const body = line.replace(/^-\s*\[\s?\]\s*(\[P\d\]\s*)?/, "");
  if (/^Extend\b/i.test(body)) return null;
  return normaliseWork(body.split(/\s*[(:]/)[0]);
}

export function findStagedButOpen(root = ROOT) {
  const heads = new Map();
  for (const dir of fs.readdirSync(join(root, "misfits"))) {
    const src = fs.readFileSync(join(root, "misfits", dir, "REFERENCE.md"), "utf8");
    const concept = (src.match(/^concept:\s*"(.+?)"$/m) || [])[1];
    if (concept) heads.set(normaliseWork(concept.split(" (")[0]), dir);
  }
  const register = fs.readFileSync(join(root, "management", "plan_fill_the_season.md"), "utf8");
  const stale = [];
  for (const line of register.split("\n")) {
    if (!line.startsWith("- [ ]")) continue;
    const head = slateLineConcept(line);
    if (head && heads.has(head)) stale.push({ concept: head, misfit: heads.get(head) });
  }
  return stale.sort((a, b) => a.concept.localeCompare(b.concept));
}

// REFERENCES.md coverage. The house keeps two indexes and only one of them is
// generated. docs/SCIENCE.md is built from every Origin table and held to a
// fresh build by the drift gate, so it cannot fall behind. REFERENCES.md is the
// concordance keyed the way a concept arrives, by its scholarly name, and it is
// written by hand: it resolves "the Peter Principle" to Rising to Unfit, which
// no generated inversion can do, because the canonical name of a concept is a
// judgement and not a field in any warrant.
//
// That is why it cannot simply be generated, and also why it drifts. It fell 37
// misfits behind between July and this check, which is 15 per cent of the house
// unreachable by the lookup the plan tells an author to dedup against. So the
// part that can be computed is: every misfit must appear in it.
//
// House-specific: the kit has no notion of REFERENCES.md.
export function findUnindexed(root = ROOT) {
  const refs = fs.readFileSync(join(root, "REFERENCES.md"), "utf8");
  return [...houseTitles(root).keys()].filter((d) => !refs.includes("`" + d + "`")).sort();
}

// The concordance, generated. REFERENCES.md was the one house index written by
// hand, on the reasoning that a concept's canonical name is a judgement and no
// inversion of the warrants can supply it. That was right about the judgement
// and wrong about where it has to live: the judgement is the author's, made
// once at authoring, so it belongs in the warrant's own frontmatter beside axis
// and sign, in the misfit's own lane. Which is the same correction that took
// axis out of khai-guard.config.json, for the same reason: a fact about a
// misfit that lives outside the misfit's lane cannot travel with it, so keeping
// it current costs a second pull request, and the second pull request is what
// went missing 37 times.
//
// The prose of the file stays hand-written. Only the tables under ## Origin are
// built, from these three keys per warrant.
export function conceptsOf(root = ROOT) {
  const out = new Map();
  // Both YAML quote styles: the migration wrote double-quoted, and Prettier
  // normalises any value containing a double quote into the single-quoted form,
  // where the escape is a doubled quote rather than a backslash.
  const unq = (s) =>
    s[0] === "'"
      ? s.slice(1, -1).replace(/''/g, "'")
      : s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  for (const d of fs.readdirSync(join(root, "misfits"))) {
    const p = join(root, "misfits", d, "REFERENCE.md");
    if (!fs.existsSync(p)) continue;
    const head = fs.readFileSync(p, "utf8").split("---")[1] || "";
    const g = (k) => {
      const m = head.match(
        new RegExp("^" + k + ": (\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^']|'')*')$", "m"),
      );
      return m ? unq(m[1]) : null;
    };
    out.set(d, { concept: g("concept"), field: g("field"), source: g("source") });
  }
  return out;
}

// A misfit missing any of the three is silently absent from the built
// concordance, which is the failure the old hand-kept file had. A wall.
export function findUnconcepted(root = ROOT) {
  const bad = [];
  for (const [d, c] of conceptsOf(root))
    for (const k of ["concept", "field", "source"]) if (!c[k]) bad.push(`${d}: no ${k}`);
  return bad.sort();
}

// Field order is the order the sections already stand in, so the file's shape
// is preserved; rows sort by concept inside a field, because a generator needs
// a deterministic order and insertion order is not one.
export function buildReferences(root = ROOT) {
  const src = fs.readFileSync(join(root, "REFERENCES.md"), "utf8");
  const titles = houseTitles(root);
  const rows = [...conceptsOf(root)].map(([dir, c]) => ({ dir, ...c, title: titles.get(dir) }));
  const order = [...src.matchAll(/^### (.+)$/gm)].map((m) => m[1]);
  const head = src.slice(0, src.indexOf("\n### ") + 1);
  const tail = src.slice(src.indexOf("\n## Restrictions"));
  const blocks = order.map((field) => {
    const mine = rows
      .filter((r) => r.field === field)
      .sort((a, b) => a.concept.localeCompare(b.concept));
    const body = mine.map((r) => `| ${r.concept} | ${r.source} | ${r.title} (\`${r.dir}\`) |`);
    return [
      `### ${field}`,
      "",
      "| Concept (canonical name, aliases) | Leading source | Staged as (`id`) |",
      "| --- | --- | --- |",
      ...body,
      "",
    ].join("\n");
  });
  return head + blocks.join("\n") + tail;
}

// A declared form can be **unreachable**, and the namesake wall cannot see it.
//
// The build resolves a citation to a declared form by longest-match rather than
// first-match from @chbrain/khai-tests 0.2.6 onward, which makes the array
// order in scholarPolicy.homonyms irrelevant to resolution: `["David",
// "David L"]` and `["David L", "David"]` now resolve a cell written "David L
// Greene" the same way. This check reads the declared config directly (not the
// kit, which does not expose it) and stays as documented config hygiene: an
// order the old first-match build would have mis-resolved is still worth
// flagging as confusing to a reader, even though it can no longer merge two
// people. Kept as a flag so the documented command does not break; it reports
// the now-always-clean result under the current build.
export function findShadowedForms(root = ROOT) {
  const shadowed = [];
  for (const [surname, forms] of Object.entries(scholarHomonyms(root))) {
    if (!Array.isArray(forms)) continue;
    forms.forEach((form, j) => {
      for (let i = 0; i < j; i++) {
        if (form.startsWith(`${forms[i]} `)) shadowed.push({ surname, form, shadowedBy: forms[i] });
      }
    });
  }
  return shadowed.sort((a, b) => a.surname.localeCompare(b.surname));
}

// A generational suffix is not a surname, and the build cannot tell.
//
// From @chbrain/khai-tests 0.2.6 the build itself drops a generational suffix
// before taking the last token of an author part as the surname, so "Robert E.
// Lucas Jr." keys under `Lucas` rather than `Jr`. This check reads the rendered
// index directly and stays as documented config hygiene; it reports the
// now-always-clean result under the current build, kept as a flag so the
// documented command does not break.
// A Key Work cell may hold more than one work, separated by a semicolon. The
// index does not: normaliseWork takes `.split(";")[0]`, which is right for the
// common case, where the tail is a gloss, an edition note or a prize, and wrong
// for the case where the tail is a second work. There the work never enters the
// index, so --check reports a true clear to a false question and the shared-work
// wall never gets to adjudicate it. This is not a wall: whether a hidden work is
// a shared spine, a canon text, a contrast row or one misfit's background is
// exactly the judgement the policy exists to make, and it cannot be made on a
// work nobody can see. So the scan surfaces the determinations that were never
// put, with the exemptions each side already carries, and leaves the deciding
// where it belongs.
//
// The kit's wall reads `canon` and `contrastMarkers` and nothing else, so a
// `supportingMarkers` declaration exempts here and not there. That is not an
// oversight to route around: the wall holds at zero shared works today, so the
// third exemption changes nothing it can see, and the vocabulary exists so that
// the ten spine-against-background pairs below can say what they are before
// anything is built that could read them.
//
// It runs on the kit's own normaliseWork and workMatches, so it cannot drift
// from the wall it is reporting the blind spot of.
export function findCompoundWorks(root = ROOT) {
  const policy = loadPolicy(root);
  const markers = policy.contrastMarkers || [];

  const canon = new Set((policy.canon || []).map((c) => normaliseWork(c)));
  const { records } = collectUnits(root);

  const indexed = new Map(); // stem -> [{ unit, record }]
  for (const r of records) {
    const stem = normaliseWork(r.keyWork);
    if (!indexed.has(stem)) indexed.set(stem, []);
    indexed.get(stem).push(r);
  }

  // One finding per determination the wall never made, which is (the misfit, the
  // hidden work, the misfits already holding it). Keying on that rather than on
  // the record pair matters: an indexed work held by a misfit in three rows is
  // one question about one work, not three.
  const found = new Map();
  for (const r of records) {
    const parts = String(r.keyWork).split(";");
    if (parts.length < 2) continue;
    for (const tail of parts.slice(1)) {
      const stem = normaliseWork(tail);
      if (stem.split(" ").filter(Boolean).length < 2) continue;
      for (const [istem, holders] of indexed) {
        if (!workMatches(stem, istem)) continue;
        const others = holders.filter((h) => h.unit !== r.unit);
        if (!others.length) continue;
        // Contrast is a property of a row, and this collision has two sides, so
        // both must be asked. Reading only the hiding row reports a contrast the
        // wall would exempt: the bike-shed pair was flagged that way and the
        // holder there is written `Herbert Simon (contrast)` in its own cell.
        const key = `${r.unit}::${stem}`;
        const prior = found.get(key);
        const units = new Set([...(prior?.holders || []), ...others.map((o) => o.unit)]);
        const heldAsContrast = others.every((o) => isContrast(o, markers));
        // A supporting citation is the third exemption, and it is now the kit's
        // `roleOf` that decides it rather than a second implementation here: one
        // reading of a role, used by this instrument and by the wall alike.
        const heldAsSupport = others.every((o) => roleOf(o, policy) === "support");
        found.set(key, {
          unit: r.unit,
          hidden: tail.trim(),
          stem,
          indexedStem: istem,
          holders: [...units].sort(),
          canon: prior?.canon || canon.has(stem) || canon.has(istem),
          contrast: isContrast(r, markers) || heldAsContrast,
          supporting: roleOf(r, policy) === "support" || heldAsSupport,
        });
      }
    }
  }
  return [...found.values()].sort((a, b) => (a.unit + a.stem).localeCompare(b.unit + b.stem));
}

// The namesake walls above all run *after* a declaration: --namesakes reads the
// index for a declared surname left bare, --forms for a declared form nothing can
// reach. None of them scans for a surname that ought to be declared and is not,
// and the contract records why that gap is expensive: an undeclared surname
// **collates**, so several people under one key look exactly like one person
// across several works, which is the expected case that owes nothing. The pass
// that declared `Campbell` found five more unresolved cells and three people only
// *after* declaring it locally, and the pass that reached for `Wilson` found four.
//
// So this is the probe, run before the declaration rather than after it, and it
// is an instrument and never a wall. It reports keys whose own Source cells name
// **more than one person**, which is a finding no other flag can see. It decides
// nothing: a hit is a cell to read, exactly as --surname's is.
//
// It gathers given names locally because the kit exports no name helper, and the
// gathering is deliberately weaker than the build's own keying: it never computes
// a key, it only reads what an author already wrote beside a surname. Where it
// cannot find a given name it says so and keeps quiet, which is why a house full
// of bare cells does not drown the output.

/**
 * The given-name evidence a Source cell carries for one surname, or "".
 *
 * The stop list is inside the function on purpose: the CLI below runs at module
 * top level and earlier in the file, so a `const` up here would be in its
 * temporal dead zone by the time a flag calls this.
 */
export function givenFor(source, surname) {
  const NON_GIVEN = new Set(["the", "and", "et", "al", "eds", "ed"]);
  const parts = String(source)
    .replace(/\bet al\.?/gi, "")
    .split(/[,;&]|\s+and\s+/i)
    .map((x) =>
      x
        .replace(/\([^()]*\)/g, " ")
        .replace(/[.]/g, "")
        .trim(),
    )
    .filter(Boolean);
  for (const part of parts) {
    const tokens = part.split(/\s+/).filter(Boolean);
    const tail = tokens.slice(-surname.split(" ").length).join(" ");
    if (tail.toLowerCase() !== surname.toLowerCase()) continue;
    const given = tokens
      .slice(0, tokens.length - surname.split(" ").length)
      .filter((t) => !NON_GIVEN.has(t.toLowerCase()))
      .join(" ")
      .trim();
    if (given) return given;
  }
  return "";
}

// Two given forms are the same person when one is the other, or is a token-prefix
// of it: "Timothy" absorbs "Timothy D" exactly as a declared form does in the
// build. Comparing on token boundaries and not on characters is what keeps
// "Robert" and "Roberto" apart, which is a real pair in this house's `Weber`.
function sameGiven(a, b) {
  const [x, y] = a.length <= b.length ? [a, b] : [b, a];
  return x === y || y.startsWith(x + " ");
}

export function findUndeclaredNamesakes(root = ROOT) {
  const declared = new Set(
    Object.keys(
      JSON.parse(fs.readFileSync(join(root, "khai-guard.config.json"), "utf8"))?.scholarPolicy
        ?.homonyms ?? {},
    ),
  );
  const { records } = collectUnits(root);
  const bySurname = new Map();
  for (const r of records) {
    if (declared.has(r.surname)) continue;
    const given = givenFor(r.source, r.surname);
    if (!given) continue;
    if (!bySurname.has(r.surname)) bySurname.set(r.surname, []);
    bySurname.get(r.surname).push({ given, unit: r.unit, work: r.keyWork });
  }

  const found = [];
  for (const [surname, rows] of bySurname) {
    const people = [];
    for (const row of rows) {
      const hit = people.find((p) => sameGiven(p.given, row.given));
      if (hit) {
        if (row.given.length > hit.given.length) hit.given = row.given;
        hit.rows.push(row);
      } else people.push({ given: row.given, rows: [row] });
    }
    if (people.length < 2) continue;
    if (new Set(rows.map((r) => r.unit)).size < 2) continue;
    found.push({ surname, people: people.sort((a, b) => a.given.localeCompare(b.given)) });
  }
  return found.sort(
    (a, b) => b.people.length - a.people.length || a.surname.localeCompare(b.surname),
  );
}

export function findSuffixKeys(root = ROOT) {
  const GENERATIONAL = new Set(["jr", "sr", "ii", "iii", "iv", "v", "jnr", "snr"]);
  const bad = [];
  const rows = parseScience(fs.readFileSync(join(root, "docs", "SCIENCE.md"), "utf8"));
  for (const row of rows) {
    const bare = row.scholar.replace(/\s*\(.*\)$/, "");
    if (GENERATIONAL.has(bare.toLowerCase().replace(/[.,]/g, "")))
      bad.push({ key: row.scholar, misfit: row.misfit, work: row.work });
  }
  return bad;
}
