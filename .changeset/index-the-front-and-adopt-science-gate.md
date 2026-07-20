---
---

Index The Front and adopt a computed science index. The Front (Goffman's
impression management) was staged and in the registry but missing from the
`REFERENCES.md` concordance; index it under "Groups, candour, and face". And add
`docs/SCIENCE.md` — the forward map science → misfit, built by `khai-tests
science build` from every misfit's `REFERENCE.md` Origin table — with a
build-drift gate (`tests/science-drift`) so a staged misfit that is not reindexed
fails at the PR, the gap that let The Front sit unindexed. Wired via the existing
`khai-tests` package: a `science` script, a `version`-step reindex, `docs/SCIENCE.md`
shared across lanes like `registry.json`, and prettier-ignored like the generated
registry. The gate is dormant until `@chbrain/khai-tests` is bumped to the
collection-aware release. Ships no package content: an empty changeset.
