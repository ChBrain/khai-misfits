---
---

Adopt a computed science index. Add `docs/SCIENCE.md` — the forward map,
science → misfit, inverted by `khai-tests science build` from every misfit's
`REFERENCE.md` Origin table — with a build-drift gate (`tests/science-drift`)
that holds the committed index byte-identical to a fresh build. This makes the
concordance computed rather than hand-kept, so a staged misfit that is not
reindexed fails at the PR (the gap that let The Front sit in the registry while
absent from the hand-kept `REFERENCES.md`). Wired via the existing `khai-tests`
package: a `science` script, a `version`-step reindex beside the registry build,
`docs/SCIENCE.md` shared across lanes like `registry.json`, and prettier-ignored
like the generated registry. The gate is dormant until `@chbrain/khai-tests` is
bumped to the collection-aware release that exposes it. Ships no package content:
an empty changeset.
