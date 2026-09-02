---
---

Retire the house's own copies of checks the kit now holds. `tests/release.test.mjs`
and `tests/packing.test.mjs` are deleted; `verifyRelease` and `checkRegistryPacking`
in `tests/house.test.mjs`, wired in the branch this one builds on, already ask the
same questions. `tests/changesets.test.mjs` is deleted too: its corpus rule, that a
changeset names a real workspace package, is computed by `khai-guard changeset-check`
itself from `workspaceNames` since 0.3.1, and its rider assertion for `.changeset/**`
moves into `tests/lanes.test.mjs`, which already holds the lane config to a table.
`tests/house_root.mjs` and `tests/house-root.test.mjs` are deleted; every importer
now resolves the house through the kit's own `resolveHouse(REPO)`, and the anti-
blindness cases the deleted test held now live in the kit's own suite.

`tests/science_overlap.mjs` re-imports `findShadowedForms`, `findSuffixKeys`,
`axesOf`, `findMalformedAxes`, `findOpposed`, `undeclaredNamesakes`, `mixedCells`
and `compoundWorks` from the kit instead of carrying its own copies, keeping only
the field-name adaptation this house's CLI output and tests already expect and the
genuinely house-specific instruments (the neighbours wall, the axis coverage
ratchet, the canon family finder, the register-slate check, the REFERENCES.md
build). The retired CLI flags `--forms`, `--suffixes`, `--compound`,
`--undeclared-namesakes` and `--mixed-cells` are gone; run `npx khai-tests science
forms`, `science suffixes` and `science probe` instead. `tests/science-overlap.test.mjs`
drops the two tests that pinned a mechanism the kit now owns outright (the axis
declaration's parse form, and the given-name reading `givenFor` did), since the
kit's own suite pins those; every wall this house holds at zero still holds at zero
through the delegated functions. `AGENTS.md` points the retired commands at their
kit replacements; the lessons in its prose are unchanged.

Two implementations of one rule diverge, so the local copy goes once the kit
carries it. Nothing here changes what the house checks, only who checks it. Ships
nothing.
