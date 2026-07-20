---
---

Pin `@chbrain/khai-tests` to `^0.2.0` to activate the science build-drift gate.
The 0.2.0 release makes `khai-tests science` collection-aware, so `docs/SCIENCE.md`
is now computed by the installed tool and the previously dormant
`tests/science-drift` gate goes live. Reindex reconciles the one row that landed
after the index was first generated (the Iron Triangle's Ripley & Franklin
source). A devDependency bump that ships no package content: an empty changeset.
