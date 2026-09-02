---
---

Wire the kit's delivery walls into the house. `khai-guard.config.json` now
declares the `changeset-check` gate CI already ran locally, gives `branch-check`
its own job id (`khai-branch-scope`, which does not fall out of the name), and
tells `gates verify-ci` that `khai-tests` is one job running `prettier` and
`suite` as steps. `tests/house.test.mjs` gains one block asserting empty
findings from `verifyGatesAgainstCi`, `verifyRelease`, `packedFilesAny` plus
`checkRegistryPacking`, `checkManagement`, and `verifyRegistry` -- the same
questions `tests/release.test.mjs` and `tests/packing.test.mjs` already asked
by hand, now asked through the kit that has since learned to ask them itself.
Ships nothing.
