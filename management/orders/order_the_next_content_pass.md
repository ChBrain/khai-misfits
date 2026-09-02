---
khai: order
title: "The Next Content Pass"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-09-02"
---

# Order: The Next Content Pass

## Direction

The house is green on every gate and the slate is down to three lines, one of
which is a hold and one of which was **written wrongly**. This order corrects
that line, makes the remaining work executable, and states the order the passes
must run in, because two of them are namesake-ordered and the wrong order fails
the build.

**The correction first, because it is a lesson and not a typo.** The slate said
five bare `Olson` cells and one bare `Macinko` cell. There are **three** bare
`Olson` cells and **no** bare `Macinko` cell: Bootleggers and Baptists, The High
Water Mark and The Loud Few already write **Mancur Olson**, and The Driest Wells
already writes **James Macinko**. The line was written from `--surname`, which
reports the **index key**, and an undeclared surname has no declared form to
resolve against, so its key is bare **by construction whatever its cells
contain**. This contract already records that exact trap under `Ericsson` and the
line was written into it anyway. **A `(bare)` from `--surname` is a statement
about the declaration and never about the cells**, and the only instrument that
separates them is declaring the surname locally and reading `--namesakes`.

**And the correction changes what is owed, in the cheap direction.** Macinko owes
nothing at all: its cell is named, so a declaration would cost one line and no
content pass. That is the ordering table's middle row, which this contract added
after `Cohen` and which the slate line then failed to apply.

## Orders

**Run the passes in this order.** Two of them are namesake-ordered, and an
already-declared surname forces its declaration to land before the misfit that
cites the new person.

**A. Name the three bare Olson cells.** Misfit lane, cells-first, **patch**
changeset. `misfits/regulatory_capture/REFERENCE.md` line 45,
`misfits/the_commons/REFERENCE.md` line 44 and
`misfits/vetocracy/REFERENCE.md` line 47 each open a Source cell with
`**Olson**`; all three are Mancur, and each should read `**Mancur Olson**` to
match the five cells that already do. Do **not** declare the surname in this
pass: `Olson` is undeclared and collates to one key, so a bare cell is valid and
a declaration for a second Olson the house does not hold would split one person
across two keys, which this contract names as the error. Naming the cells is
what makes a later declaration free. Rebuild `docs/SCIENCE.md` and
`REFERENCES.md`; the misfit count does not move.

**B. Extend You Have to Mean It with Selten's chain store paradox.** Misfit lane,
**patch** changeset, an Origin row and **no cast**, per the determination already
recorded on the slate: the finite-horizon unravelling is that misfit's own engine
demonstrated in an economic rather than a strategic setting, and the candidate
goes quiet when the incumbent's engine is switched off. The warrant currently
carries six Origin rows and should carry the chain store as a seventh, with the
incomplete-information resolution as an eighth if it is taken.

The namesake facts, scanned and read rather than inferred:

| Surname   | State                         | What this pass owes                                                                                                                                         |
| --------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Selten`  | bare, one cell, After You     | nothing: the same person on another work, which is expected                                                                                                 |
| `Milgrom` | bare, three cells, all Paul   | nothing: Milgrom and Roberts's Milgrom is that Paul                                                                                                         |
| `Roberts` | bare, one cell, **Melinda A** | a **declaration first** if the Milgrom and Roberts row is taken, since John is a second person and the existing cell is already named, so no cells are owed |
| `Wilson`  | **declared**, five forms      | the cell must write **Robert Wilson**, because a bare `Wilson` under a declared surname fails the namesake wall                                             |

So: taking Kreps and Wilson needs no governance pass and needs the given name in
the cell. Taking Milgrom and Roberts needs a governance pass declaring
`Roberts` as `["Melinda A", "John"]` to land **before** the misfit pass. The
declared form carries no full stop, because the build strips `[.,]` from the
Source cell and not from the form.

**C. Widen the axis coverage, which is the largest piece of content work
outstanding.** 109 of 329 misfits declare an `axis`, so 220 are invisible to the
opposition check rather than passing it: an undeclared misfit is not caught and
not failed, it is simply not looked at. Take the families
`node tests/science_overlap.mjs --families` ranks, which is a complete map of the
house's shared canon works and therefore of where two misfits are in one
conversation, and declare the axis and sign for the misfits in them. Misfit lane;
several misfits in one pull request is one lane and is fine.

Two rules govern this and both are already paid for in blood on this slate. **A
sign that is only true under an unstated condition is a malformed declaration
that parses**, and no gate can see it, so name the quantity the play actually
turns on rather than the one the harm is usually described by. And a
**one-dial-two-bad-ends** structure has no sign: leave it undeclared rather than
inventing one, as Exactly How Far already is.

**D. Refill the slate.** After A to C it carries one hold and nothing else. Scout,
and scout the way the last three passes learned to rather than the way they
started: **read the house's own concept list rather than probing the house with
the candidate's vocabulary**, since four terms from a candidate's domain came back
empty on a mechanism the house had staged for a month; run
`node tests/science_overlap.mjs --check "<Scholar> :: <Work>"` against the
**concept** before believing an absence; and **distrust a probe that returns
mostly zeros**, because a house of 329 does not have four adjacent empty terms
unless it is holding the thing under another word.

## Implementation

The correction and the three new lines are written onto the Playwright's standing
slate, [Fill the Season](../plan_fill_the_season.md). The passes themselves are
separate pull requests on the lanes named above, each carrying its own changeset,
each rebuilding the artefacts it touches, and none of them carrying
`CHANGELOG.md`.

Nothing here touches the workspace migration, which remains blocked: khai-guard
0.3.1 still runs its `git()` helper as `execFileSync` with no `maxBuffer`, and the
move's diff still fails with `ENOBUFS`, verified against this tree at this
version. That is a kit fix and no content pass can route around it.

## Targets

- [x] every gate, wall and builder is run against the four landed pull requests and the result recorded
- [x] the migration blocker is re-tested at the current kit version rather than assumed unchanged
- [x] the wrong slate line is corrected and the reason it was wrong is recorded as a rule
- [x] the namesake facts for each ordered pass are scanned and the **cells read**, not inferred from the key
- [x] the ordering each pass must run in is stated, including which declaration lands before which misfit
- [x] the outstanding work is written onto the slate as open lines rather than left inside this order
