---
---

Adopt the published kit: `@chbrain/khai-tests` `^0.3.4` -> `^0.4.1`, refreshing
`@chbrain/khai-stage` to 0.0.25 and `@chbrain/khai-guard` to 0.3.1 (verified
installed, not just declared: package-lock.json now carries khai-tests 0.4.1,
khai-stage 0.0.25, khai-guard 0.3.1).

CLAUDE.md gains a short "Case law next" blockquote pointing at
`node_modules/@chbrain/khai-stage/conduct.md`, the shared case law now shipped
by khai-stage for every khai house (modelled on khai's own blueprint
blockquote). Nothing else in CLAUDE.md was trimmed: it stays the house's own
executable contract and case law (the science walls, the namesake instruments,
the authoring rules), which conduct.md does not restate.

GEMINI.md is restructured to quirks-plus-pointers: it now reads CLAUDE.md (the
house contract, in full) and conduct.md (the shared case law) explicitly,
rather than a bare "this file adds nothing Gemini-specific" with no pointer at
all. This follows the khai-cultures house's own measured failure: its
GEMINI.md sat at 31 lines against CLAUDE.md's 308 and never told a second
model about changesets or gates, three of four root causes traced to briefing
error. This house's GEMINI.md carries no Gemini-specific quirks today, so it
stays short (15 -> 19 lines) because it points, not because it omits.

Adopts the kit's `gates` runner: a `gates` array in khai-guard.config.json
declaring the walls CI already runs (prettier check/fix, the vitest suite,
`khai-guard` and `khai-guard branch-check`, from `.github/workflows/ci.yml`
and `.husky/pre-push`), and an npm `gates` script:
`khai-tests gates . --content-root misfits/`. The `--content-root` flag is
load-bearing: this house keeps its content in `misfits/`, not `packages/`,
and the runner's own default watches `packages/`, an empty directory here --
without the flag the visibility check would report clean on a tree it cannot
see, which is exactly the failure the runner exists against. Verified both
ways: an untracked file under `misfits/` makes the runner refuse before any
wall runs (visibility FAIL, 0 walls recorded, exit 1), and removing it
restores the pass.

## The non-author wall, and how the house answers it

khai-tests 0.4.0 added `originRowErrors`' second wall: an Origin row whose
Source cell yields no scholar surname does not fail, it VANISHES from the
science index, taking its citation with it, so a Source that names nobody must
now be declared in `scholarPolicy.nonAuthorSources`. Measured against this
house that wall fired on **499 rows across 352 distinct Source values**, the
great majority of them this house's own deliberate idiom rather than any
defect. Declaring 352 strings is precisely the answer this house's own
contract forbids -- "a closed list of the `NON_AUTHOR` kind ... a list to
maintain" -- so the bump stalled there rather than paying it.

khai-tests **0.4.1** is the answer, and it is the shape `contrastMarkers`
already has: an entry written `"/regex/"` compiles with the `i` flag against
the qualifier-stripped Source, so **one house's intentional class is a rule
and not a list**. Three declarations carry the convention:

- `"/^(The|Whether|Why|What|How|Whose|Where|When|A |An ) /"` -- the
  leading-article Source, the house's standing idiom for a row headed by the
  question it answers rather than by a person ("The arithmetic of a series",
  "Whether any settlement reaches it", "Why reduction alone fails").
- `"Practitioner"` -- the field-knowledge placeholder, 120 rows, matched after
  qualifier-stripping so `Practitioner (HR)` collapses to it too. The kit's own
  `NON_AUTHOR` comment names it as the one idiom a structural rule cannot
  catch, being a lone capitalised token indistinguishable from a mononym.
- `"Boundary of the effect"` -- the honest-note row, 20 rows across 20 misfits.

The measured trajectory: **499 -> 58 -> 38 -> 0**. 499 undeclared at 0.4.0;
58 after the pattern and `Practitioner`; 38 after `Boundary of the effect`;
0 after the residual determinations below.

## The residual 38 are put determinations, not a bulk exemption

Each of the 38 remaining Source values was opened in its own `REFERENCE.md`,
read as a whole row (Source | Key Work | Scope) in its misfit's Origin table,
and answered one of two ways. **37 are intentionally person-free** -- a
literature label (`Mimetic isomorphism`, `Statistical-learning theory`), a
field (`Soil science`, `Labour economics`), a practice note (`Take-up /
practice`, `Tolerance practice`), a record or award (`Nobel 2001`), a legal
doctrine whose Key Work is case law (`Willful blindness`, `Command
responsibility`), or a second-aspect row whose person is named in the row
directly above it (`Volterra's principle`, `Playing for rules`). Each is
declared as an exact string, never widened into a pattern: the leading-article
class is a documented convention and safe as a rule, whereas widening to cover
these would silently exempt future rows nobody has read. The reasoning for
each is tabled in the pull request body.

**The 38th was flagged, read, and then declared with a companion fix owed**:
`too_sure_to_be_true`'s `Systematic vs random error`, whose Key Work reads
"metrology and eyewitness identification (biased line-ups; Wells on lineup
construction)". Both readings fired on it -- the Source is honestly a label
(textbook metrology, no author), and the Key Work carries a scholar the Source
does not name. The declaration is honest because the label half is real; the
Wells half is content debt, not config: a follow-up **misfit-lane** PR gives
Gary L. Wells (lineup construction) his own Origin row with the given name
written into the Source cell, and rebuilds `docs/SCIENCE.md`.

The reading also corrected the flag itself: the first probe reported Wells
absent from `docs/SCIENCE.md`, and the sanctioned instrument
(`science_overlap.mjs --surname Wells`) says **taken** -- `better_in_both`
cites the Will Rogers paper (Feinstein, Sosin & **Carolyn** Wells, NEJM 1985),
already named in its cell and keyed bare in the index. So Gary L. Wells
arrives as an **undeclared namesake**, and the contract's own table orders the
work: cells first (his named row, misfit lane), then a governance follow-up
declaring `Wells` in `scholarPolicy.homonyms` (`Gary L`, `Carolyn`) with the
`docs/SCIENCE.md` rebuild that key change forces. Neither half rides this PR:
the declaration before the citing cell exists would leave nothing to resolve
against, which is the order the contract says is wrong for an undeclared
surname.

Devdependency bumps, a doc pointer, a provider-file restructure, a gate
manifest and a scholar-policy declaration ship no package content, so this
changeset is empty.
