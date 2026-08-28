---
---

The changeset wall asserted a non-empty corpus, and failed the one branch where
empty is correct.

`tests/changesets.test.mjs` opened with an anti-vacuity check --
`expect(changesets.length).toBeGreaterThan(0)` -- so that a reader which matched
nothing could not pass the wall in silence. The intent was right and the
instrument was wrong: the corpus is empty on exactly one branch,
`changeset-release/main`, because `changeset version` has consumed every
changeset there, and that is the correct state. So the wall failed the **Version
Packages** pull request -- the one branch whose whole job is to publish -- and
blocked the release it was written to protect. It did that in both houses, on the
first release after it shipped, and it did it to a release that had just been
recovered from a two-day outage.

The replacement holds on every branch: the changeset directory exists and is the
one changesets itself reads. **The real guard was already there and did not need
a corpus**: the parser is proved on literal inputs, which is where a reader that
matched nothing actually shows. A count only ever proved that somebody had
written a changeset lately.

The general shape is worth keeping, because it is the mirror of the one this
house already writes down about gates that pass by checking nothing: **a check
whose precondition is "there is work here" fails on the branch that has finished
the work.** Verified against both states -- 35 changesets on `main`, zero on the
release branch.
