# CLAUDE.md, the Misfits house

This is the Misfits production house (`khai-misfits`), raised by
khai-stage. The misfits are written separately, in khai-playwright mode.

**Voice first.** Operate under the
[management instructions](management/management_instructions.md): the khai
**voice and mechanics** (who speaks, the company, management orders). _Then_ this
file is the **coding contract** for the house. Voice and mechanics there; coding
rules here. The order matters: management voice first, coding second.

## Branching

Computed, not chosen. Let the guard pick the lane:

```
npx khai-guard branch <topic>
```

- `misfit/<topic>` owns `misfits/**` (the productions).
- `governance/<topic>` owns the gates and config (`.github/**`, `.husky/**`,
  `khai-guard.config.json`, `tests/**`, `CLAUDE.md`, `README.md`, `REFERENCE.md`, `REFERENCES.md`, `management/**`).
- `changeset-release/*` is a bot-controlled general lane for version releases.

A **management order** (`management/orders/**`) is a **rider**: an order directs
work in any lane, so it rides the lane of the change it drives. Write the order
beside that change and the guard folds both onto one branch (an order that
restages a misfit lands as one `misfit/` PR); committed alone, an order homes to
`governance/`. So an order and the change it commands are one PR, never two.

Never `--no-verify`. Never merge; open the PR and stop.

## Authoring

**Read the management layer before choosing what to author.** The house keeps its
authoring memory there, not here, and it is easy to work beside it without
opening it:

- [Fill the Season](management/plan_fill_the_season.md) is the Playwright's
  standing backlog **and the register of what has been discarded**. It records
  each held-off concept with its reason and what would bring it back, and it
  records reversals. Take the next misfit from the top of it, strike what you
  stage, and **write your discards back into it** so the next author does not
  re-derive them. A candidate chosen from memory rather than from this plan is a
  guess. The file is `shared` in `branchScope`, so **the strike rides the lane of
  the change that earns it**: a misfit strikes its own line in its own pull
  request, exactly as it carries its own `REFERENCES.md` row. It was governance
  until a gate demanded a strike the misfit lane could not make, which is the
  general shape worth keeping: a rule that cannot be obeyed from the branch it is
  read on is a rule about the branch, not about the author.
- [Cut to Fit](management/plan_cut_to_fit.md) is the authoring standard below.
- [`management/orders/**`](management/orders) records scouting passes and the
  reading of their failures.

When the pre-authoring check hits, what the hit means decides the move, and only
one of the four is a new misfit:

| The hit                                          | The move                                                   |
| ------------------------------------------------ | ---------------------------------------------------------- |
| Shared work, cited to hold a line                | nothing, it is already marked contrast                     |
| Shared work, **different** mechanism             | new misfit on another spine; mark the shared work contrast |
| **Same** mechanism, new domain or scholar        | **extend the incumbent's warrant**: an Origin row, no cast |
| Distinct mechanism the incumbent has **annexed** | narrow the incumbent, then build                           |

Never extend a misfit's **cast** to cover more ground: that is what Cut to Fit
forbids, and a play carrying two mechanisms is the defect the warrant gate
exists to remove. Extend the **warrant** instead, which is why Origin tables run
five and six sources deep: a mechanism shown in four domains over sixty years is
a finding where one paper is a claim. Adding a source goes through the same gate
as authoring, since it rebuilds `docs/SCIENCE.md`.

Cut to fit, computed not copied. A misfit is one **play**, and the play is the
only fixed element; the pitch is the single hook. Every element below them
(personas, positions, plans, places, processes, pieces, plots) is cast to the
concept's own load-bearing vectors, one per vector and no filler, never a uniform
mould stamped from a sibling misfit. Fluid is not loose: wire what you name, hold
the floor. The standard is the Playwright's standing plan,
[Cut to Fit](management/plan_cut_to_fit.md); read it before authoring or
restaging a misfit.

### A work belongs to one misfit

Every other gate is **intra-misfit**: the canon validator, the cast conformance,
the language policy, the LORE check, the isolation rule, the lane and the
changeset all ask _is this misfit well-formed?_ None asks _is this misfit already
in the house?_ The registry build counts directories; it never compares them. So
two misfits can stage one mechanism off one research spine and every gate passes,
which is how **A Reason Too Many** and **Paid to Stop Caring** both came to anchor
on Deci (1971) and on Lepper, Greene and Nisbett (1973) without either naming the
other.

The rule is computed, not judged: **the same scholar across different works is
expected and is most of the index; the same (scholar, work) carrying the spine of
two misfits is a finding.** It runs off `docs/SCIENCE.md`, the generated forward
map the drift gate already holds to a fresh build, with two configured exits in
`workPolicy` (`khai-guard.config.json`):

- **`canon`**: a field's foundational text, which many misfits in one family may
  share. Citing the canon is not sharing a spine.
- **`contrastMarkers`**: the vocabulary that marks a work cited to hold a line
  rather than to carry one, the convention the house already writes in prose
  (`cited to distinguish`, `Distinction only.`).

Ask **before** authoring, not at the pull request, since the cheapest place to
find an overlap is before 31 files exist:

```
node tests/science_overlap.mjs --check "<Scholar> :: <Key Work>"
node tests/science_overlap.mjs                 # the whole house
```

The house holds at **zero shared works** and the gate is a wall: nothing is
grandfathered, and a misfit that takes a work already carrying another misfit's
spine fails `npm test`.

#### And a namesake must be resolved, or the key is wrong

That check keys on `scholar :: work`, and the scholar half comes from the
science build, which keys on the **bare surname** by default. That default is
right and cannot be replaced by a rule: two given names under one surname look
identical to one person written two ways, so anything that split Oliver Hart
from Julian Tudor Hart would also split `Buchanan` from `James M Buchanan`. The
shared surnames are therefore **declared**, in `scholarPolicy.homonyms`, and the
build keys those as `Adams (Gordon)` against `Adams (John)`.

Where a surname is declared and a citation carries no matching form, the build
leaves it **bare on purpose**, so an unresolved occurrence stays visible rather
than being silently attributed to one of them. It emitted that signal for a long
time and nobody read it: **nine** unresolved occurrences sat in the index across
five declared surnames, one added the same afternoon the gate was written. A
declared surname left bare in one misfit and resolved in another is one person
split across two keys, or two people merged into one, and either way the
shared-work check is comparing the wrong things.

So it is a wall, and a narrow one: **a surname declared in
`scholarPolicy.homonyms` may not appear in the index unresolved.** The
undeclared direction needs no gate, because two people sharing an undeclared
surname collate into a single key and can only raise a spurious overlap, which
fails loudly rather than passing quietly. Nothing here judges who anybody is;
the declaration does that, and the gate insists only that it was applied.

```
node tests/science_overlap.mjs --namesakes     # declared surnames, and any left loose
```

Two moves fix a hit, and which one depends on the cause: write the given name
into the Origin table's Source cell when the citation names no given name at
all, which rides the misfit's own lane, or add the form to
`scholarPolicy.homonyms` when the house has met a namesake it has not declared,
which is governance. **But a surname hit has three readings and only two of them
are namesakes.** It may be the same person on another work, which is expected,
is most of the index, and owes nothing: declaring a homonym there is the error,
since it splits one person across two keys and defeats the wall. It may be two
people, which is the case above. Or it is two people on one work, which cannot
happen and would be a shared-work finding if it did. So the scan locates a cell
to read and never decides by itself. An Angle and a Count hit two surnames and
only one was a namesake: the house's Kamp coined bikeshedding and also wrote the
leap second's practitioner argument, one scholar across two works. **A dedup that stops at the surname is not a dedup.** Four
surname collisions turned up in two consecutive research passes and every one
would have struck a good candidate: the house's Kessler is Daniel and Friedrich
and not Donald, its Pauly is Mark and not Daniel, its Pierce is W. David and not
Jon, its Robinson is Robert and not Sandra. At this size a common surname is
more likely than not to be taken already, which is why `--check` takes the full
`"Scholar :: Work"` string.

The largest so far is **Miller**, which carried five people: Wendi in Don't Look,
Dale in Moral Licensing, Geoffrey in Only the Close Ones, Franklin in Treated and
Counted, and Edward M. arriving with The Shares to Say It With. Geoffrey had
already been resolved by the pass that declared Kessler, because the two share a
cell, which is the general case worth knowing: **resolving one surname resolves
whichever others sit beside it**, so a cells-first pass costs less than the count
of unresolved occurrences suggests. Declared forms carry no full stops, since the
build strips `[.,]` from the Source cell and not from the form, so `W David` and
`Edward M` are written bare.

**And a declared form can be unreachable, which nothing else catches.** The build
resolves a citation to the **first** declared form matching `given === form` or
`given.startsWith(form + " ")`. The prefix arm is deliberate and cannot go: it is
what lets one declared `James` absorb a cell written `James M Buchanan`. But
where one form is a space-prefix of another, the **array order decides the
answer**. `Greene` carries three people, David the psychologist, David L the
transport economist and Mark the archivist, and written
`["David", "David L", "Mark"]` it keys `David L Greene` as `Greene (David)`,
merging two of them. The namesake wall cannot see it, because under the wrong
order nothing is left bare: every cell resolves, to the wrong person. So it is
its own wall, and the fix is always a reordering and never a deletion, longest
form first.

```
node tests/science_overlap.mjs --forms       # declared forms, and any left unreachable
```

**And a rare surname is not a safe one.** The heuristic above says a common
surname is more likely than not to be taken already, which is true and is the
reason to run the full `"Scholar :: Work"` string. It does not run the other way.
`Hirshleifer` is rare, was already held by **David** in Information Cascade, and
was taken again by **Jack** in Nothing Left to Pool: they are son and father. A
rare surname is rare because it belongs to a family, and academic families
produce academics, so the very thing that makes a name look safe is what
concentrates it. Scan the surname whatever it looks like: the scan costs one
command and the collision costs a misfit.

### And a misfit must say where it sits

Every `REFERENCE.md` **names at least one other misfit by its title** and states
the line between them. This is required on its own, independently of the source
analysis, because it is the cheaper catch: A Reason Too Many and Paid to Stop
Caring each carried a neighbours section and both named the same three, The Cobra
Effect, Metric Fixation and Moral Licensing. Each had scanned the house and
missed only the misfit standing next to it. Answering _which misfit is nearest,
and why is it not this one?_ in writing is what closes that.

This is a wall too: all 268 name one. The rule is deliberately loose, a real
house title anywhere in the file rather than a fixed phrase, because a stricter
sentence-level form scored worse and its false negatives were the misfits that
declare their neighbour inside an Origin row. Reciprocity is **not** required:
nearest is not symmetric, and a misfit may sit closest to one that sits closest
to something else again.

### And a misfit must say when it disagrees

The two rules above catch misfits that **agree** too much. Neither can see the
opposite failure. What makes two misfits contradict is that they come from
different literatures, and coming from different literatures is exactly what
makes them pass a shared-work check: **Room to Grow** and **Safety in Numbers**
make opposite claims about the same intervention on the same quantity and share
no scholar and no work at all.

So the opposition is declared once and computed forever, the same shape as
`canon`. Each misfit's **`REFERENCE.md` frontmatter** records the quantity it
acts on and the **sign** of the outcome's response to an increase in it:

```yaml
axis: population-density
sign: negative # how the outcome moves as that quantity rises
```

Two misfits on one axis with opposite signs are in conflict and **must name each
other and say what sets the sign**. The declaration sits in the warrant, not in
`khai-guard.config.json` where it started and not in play frontmatter, for two
reasons that decided the design: the config is the governance lane, so a misfit
could never declare its own axis in the pull request that adds it, and the canon
validator owns the play's frontmatter schema and rejects unknown keys. The
warrant's frontmatter is unpoliced and rides the misfit's own lane.

**Declaring is not optional for new work.** The opposition check iterates the
misfits that declare an axis, not the house, so an undeclared misfit is not
caught and not failed: it is invisible. Coverage is therefore ratcheted. 228 of
261 carried no axis when the ratchet was set and are grandfathered; a **new** misfit without one fails.
A malformed declaration fails outright, since there is no legacy set of those.

The first declared 8 were the density-dependence family, and they earned the
design: from those eight the check found Room to Grow against Worth More Nearly
Gone, which a hand sweep of the same family had missed, and it correctly declined
to flag Safety in Numbers against Worth More Nearly Gone, which share an axis and
a sign. The declared set now stands at 40 and the check reports 4 opposed pairs,
all of them declared and none loose. Declaring more of the house widens the
check; it does not change it.

```
node tests/science_overlap.mjs                 # overlaps and opposed pairs
node tests/science_overlap.mjs --families      # which family to declare next
```

The house keeps **two** indexes and **both are now generated**. `docs/SCIENCE.md`
is built from every Origin table. [`REFERENCES.md`](REFERENCES.md) is the
concordance keyed by a concept's scholarly name, which resolves the Peter
Principle to Rising to Unfit: that naming is a judgement no inversion of a
warrant can supply, so the file was written by hand and fell **37 misfits
behind**. The judgement is real but it is the **author's**, so it now lives in
the warrant's own frontmatter beside `axis`, and the tables are built from it:

```yaml
concept: "Gresham's Law (bad money drives out good)"
field: "Markets, money, and economic equilibria"
source: "Gresham (16th c.); named by Macleod"
```

All three are required, and both indexes are held to a fresh build. The prose of
`REFERENCES.md` stays hand-written; only the tables under `## Origin` are built.
Rebuild with `node tests/science_overlap.mjs --build-refs`. **A misfit no longer
needs a paired governance pull request to be indexed**, which is the whole point:
the row rides the misfit's own lane, and the built file is `shared` in
`branchScope` so it travels with the change that regenerates it, exactly as
`registry.json` and `docs/SCIENCE.md` do.

**Read the canon list forwards to pick the next family.** `workPolicy.canon` is
written as a list of exceptions, works exempted so a field's foundational text
does not read as a shared spine. The same data says something positive: the
misfits citing one canon work are **in one conversation**, which is exactly where
an opposed pair hides, since two misfits in one literature are the ones with a
quantity in common to disagree about. All 32 canon works are shared by two or
more misfits, so the list is a complete family map of the house. `--families`
ranks them and marks who has no axis yet.

## Versioning

The minor version IS the misfit count, computed not chosen; the **Version Packages**
PR is the deploy gate every release passes through. The `version` script runs
`npx khai-tests registry build`, which sets the version from the misfit count:
`0.<count>.0` (the minor is the count, the patch resets to 0), reconciling both
`package.json` and `registry.json`. The build is the single writer of the version
number; never hand-edit it.

- **Adding a misfit** -> a `minor` changeset. The misfit PR carries it, so the
  deploy is steered through the Version Packages PR and the CHANGELOG names the
  misfit. `changeset version` bumps the minor and the build reconciles it back to
  the misfit count, resetting the patch to 0 (`0.<count>.0`). It **must** be
  `minor`: a `patch` (or empty) changeset survives the reconcile (count === minor)
  and drifts the version to `0.<count>.1`, so the `changeset-check` gate rejects it.
- **A fix to existing content** (ships package `files`) -> a `patch` changeset; it
  ships at the same misfit count (`0.<count>.1`).
- **A change that ships nothing** (governance, tooling, docs, tests) -> an
  **empty** changeset (`npx changeset add --empty`); it records the PR and merges
  green without republishing identical content.

A non-zero major resets the minor while the count keeps climbing, so a house
stays `0.x`; the numbering guard rejects a major bump.

### The generated artefacts travel with the change

`registry.json`, `package.json`, `docs/SCIENCE.md` and `REFERENCES.md` are **built,
never merged**.
A misfit PR carries them, and they are only valid against the `main` it will
merge into: the moment another misfit lands first, the count moves and they are
stale. No rebase can fix that, because git cannot resolve a computed count, so
rebasing a misfit PR means rebuilding, not merging:

1. reset the branch to `main`;
2. take **only** the content across, the misfit directory and its changeset;
3. run `npx khai-tests registry build`, `npx khai-tests science build` and
   `node tests/science_overlap.mjs --build-refs` against the final tree;
4. **revert `CHANGELOG.md`**, see below;
5. verify with `npm test` before pushing.

The count is read from the directories on disk, so an untracked misfit left in
the tree inflates it: build with only the misfit you are shipping present.

**Do not carry `CHANGELOG.md` in a misfit PR.** From `khai-tests` 0.2.4 the
registry build heals the top CHANGELOG heading to the manifest. That is right in
a release, where the top heading is the pending version `changeset version` just
wrote, and wrong in a branch, where the top heading is the release already on the
registry and the heal rewrites it to a version that does not exist. Revert it and
leave the heading to the release.

## Protection

Content is CC-BY-NC-SA, code is MIT (see `LICENSE` and `LICENSE-CODE`); the
source is credited where it is in the public domain, never claimed. `main` is
protected: pull requests and the gate checks are required before merge.
