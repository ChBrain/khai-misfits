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
  if (args.includes("--build-refs")) {
    fs.writeFileSync(join(ROOT, "REFERENCES.md"), buildReferences());
    console.log("REFERENCES.md rebuilt from the warrants");
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
  const silent = opp.filter((p) => !p.aNamesB || !p.bNamesA).length;
  console.log(`opposed pairs on a declared axis: ${opp.length}, undeclared: ${silent}\n`);
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
