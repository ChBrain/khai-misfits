---
---

Adopt the published kit: `@chbrain/khai-tests` `^0.3.4` -> `^0.4.0`, refreshing
`@chbrain/khai-stage` to 0.0.25 and `@chbrain/khai-guard` to 0.3.1 (verified
installed, not just declared: package-lock.json now carries khai-tests 0.4.0,
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

Also declares two rows in the new `scholarPolicy.nonAuthorSources` key that
khai-tests 0.4.0 reads (`The biofortification programme`,
`The measurement dispute` in `a_bigger_harvest_every_year`'s Origin table):
genuine no-person Source cells of the kind the kit's own comment anticipates.

Devdependency bumps, a doc pointer, a provider-file restructure and a gate
manifest ship no package content, so this changeset is empty.

**Known, unresolved issue surfaced by this bump (see PR body): khai-tests
0.4.0 adds a new hard validation that an Origin row's Source cell must yield a
detectable scholar surname unless declared in `scholarPolicy.nonAuthorSources`
-- a check that did not exist in 0.3.4. This house's own Origin-table
convention uses a "no scholar" descriptive Source header extensively (roughly
499 rows across the great majority of misfits), a pattern CLAUDE.md itself
documents as a deliberate choice NOT to wall on. `npm test` currently fails on
two test files (`tests/science-drift.test.mjs`,
`tests/science-overlap.test.mjs`) because of this, unrelated to any change in
this PR. Declaring ~499 individual exemptions is a content judgement across
almost every misfit and is out of scope for this governance PR; it is left for
the maintainer to resolve upstream (soften the kit check) or via a dedicated
follow-up sweep.
