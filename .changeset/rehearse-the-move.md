---
---

Rehearse the move: step 4 performed in full against a scratch clone and every gate run on the result. It comes out green and lands as one in-lane PR with 11,322 of 11,327 paths exempt as renames. Found one new requirement, repaired here as an addition: `.prettierignore`'s `docs/SCIENCE.md` is an anchored pattern that stops matching when the index moves, which fails `format:check` if left and fails the drift gate with a false diagnosis if formatted. Ships nothing.
