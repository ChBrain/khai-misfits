---
---

Name the package the way the workspace does, and give a changeset a lane it can
be committed on.

Nine changesets declared `"khai-misfits"`. The package is
`@chbrain/khai-misfits`, so `changeset version` threw on the first of them and
took the whole release with it:

```
Error: Found changeset a-dark-age-to-be-reborn-from for package khai-misfits
which is not in the workspace
```

The release has been down since 26 August. Every run in that window failed at
the same line, `npm test` was green in all of them, and the only symptom was a
Version Packages pull request that stopped moving: #646 is thirty commits behind
main and would land `0.315.0` against a house already at `0.323.0`. Merging it
would have walked the version backwards.

**The gate could not read that half of the file.** `khai-guard changeset-check`
parses each changeset's frontmatter into `{ name, level }` entries and then reads
`level` alone -- it is the rule about a content add owing a `minor`, and all nine
declare `minor` correctly. So nine pull requests passed a gate that had opened
their changeset, approved the only field it knew about, and never asked whether
the package named on the line above exists. That is a khai-guard gap and is
fixed there; `tests/changesets.test.mjs` is this house's own wall, which does not
wait on a kit release and does not depend on one.

**And the repair had nowhere to be committed, which is the second finding.**
`.changeset/**` was declared `shared`, and `khai-guard branch` refused: _this
change is not one lane_. That is the defect this house has already met and
already named, for `plan_fill_the_season.md`: `shared` is for build artefacts,
which are never the whole of a change, so a shared path owns no lane and a pass
that touches nothing else has no home. The primitive that means what was wanted
is a **rider** -- it rides the lane of the change it accompanies and homes to a
declared fallback when it rides alone. So `.changeset/**` moves from `shared` to
`riders` with `fallback: governance`. A misfit's changeset still travels on the
misfit's own lane, exactly as before; a changeset-only pass now computes
`governance`, which is how this one was branched.

Reproduced before and after: `npx changeset status` throws on `main` and reports
`@chbrain/khai-misfits: minor` with these nine corrected. The new wall was run
against the broken state and fails on it.
