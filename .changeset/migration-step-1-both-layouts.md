---
---

Migration step 1: the readers learn both layouts. One helper resolves the house's content root by package name rather than by path, and every path-reading test in `tests/` takes the root that owns what it reads. Run against a simulated post-move tree the suite fails on exactly two things, both true and both requirements for step 4: the licences stop being shipped, and the one management link into the house breaks. Ships nothing.
