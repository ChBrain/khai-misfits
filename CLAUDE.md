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
  guess. The file is a **rider** in `branchScope`, like `management/orders/**`, so
  **the strike rides the lane of the change that earns it** and a pass that only
  touches the register homes to `governance/`: a misfit strikes its own line in
  its own pull request, and a sweep opens its own. It was governance until a gate
  demanded a strike the misfit lane could not make, which is the general shape
  worth keeping: a rule that cannot be obeyed from the branch it is read on is a
  rule about the branch, not about the author. It was then briefly `shared`, which
  is the wrong primitive and is worth knowing why: `shared` is for **build
  artefacts**, which are never the whole of a change, so a shared path owns no
  lane and a register-only pass had nowhere to go. A rider is the primitive that
  already meant what was wanted.
- [Cut to Fit](management/plan_cut_to_fit.md) is the authoring standard below.
- **The field count is computable, so read it before choosing the candidate.** Every
  warrant declares its `field`, and the distribution is lopsided: measurement is
  more than a quarter of the house, and six consecutive misfits went into it before
  anybody noticed, from memory rather than from the register.

  ```
  for f in misfits/*/REFERENCE.md; do awk '/^---$/{n++;next} n==1 && /^field:/{print}' "$f"; done | sort | uniq -c | sort -rn
  ```

  But a thin field is not automatically an opportunity, and the thinnest is the
  proof: every candidate the eighth sweep raised in **Groups, candour, and face**
  was already held, most of them by one incumbent. A field can be small because its
  phenomena are few and well covered, so **the count tells you where to look and
  never what is there**. It orders the search; the dedup still decides.

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

**The table says which move to make and not how to tell, so here is the test:
name the incumbent's quantity, set it to zero, and ask whether anybody is still
hurt.** A different domain is not a different mechanism, and a candidate whose
harm scales with a quantity another misfit already stages **is** that misfit, in
new clothes. Clinical triage was slated on the claim that the same inversion is
present in a quiet emergency department. The inversion is: the lowest-acuity
patient is last in the order at any load. But remove **No Idle Hands**'s
quantity, by supposing real slack, and that patient waits twenty minutes and
nothing happens to them, because deterioration and leaving without being seen are
studied against crowding, which is utilisation. The inversion survived the test
and **the harm did not**, and the harm is the misfit.

Run it the other way to confirm a candidate stands: mesopredator release keeps
its whole cost when the culled species is stipulated never to rebound, which is
Room to Grow's quantity removed, and cosmic variance binds an estimator
stipulated to have no capacity to overfit. **A candidate that survives its
incumbent's engine being switched off is a misfit; one that goes quiet is an
Origin row.**

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
map the drift gate already holds to a fresh build, with three configured exits in
`workPolicy` (`khai-guard.config.json`):

- **`canon`**: a field's foundational text, which many misfits in one family may
  share. Citing the canon is not sharing a spine.
- **`contrastMarkers`**: the vocabulary that marks a work cited to hold a line
  rather than to carry one, the convention the house already writes in prose
  (`cited to distinguish`, `Distinction only.`).
- **`supportingMarkers`**: the vocabulary that marks a work as this misfit's
  background rather than its spine (`cited as background`, `(background)`). The
  rule is about a work carrying **two** spines, so one side saying it is not one
  answers it. Honoured by the kit's wall as well as by `--compound` from
  khai-tests 0.3.3, so a declared background exempts everywhere.

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

**And the sharpest case is two people with the same given name**, which `Ross`
now carries: Michael Ross of the planning fallacy and Michael L Ross of the oil
curse. Written `["Michael L", "Michael", ...]` the build keys them apart, and
written the other way round the shorter form absorbs the longer and two scholars
become one, silently. Nothing but this flag can see it. **It also marks the limit
of what a scan can do without a declaration**: the probe that finds undeclared
namesakes uses the same token-prefix rule to guess identity and therefore merges
these two, reporting four Rosses where there are five. In the build the rule is
right, since a declared form should absorb a longer cell; in a probe it is a
guess. Same rule, opposite jobs, and the declaration is what settles it.

```
node tests/science_overlap.mjs --forms       # declared forms, and any left unreachable
```

**And a suffix is not a surname.** The build takes the **last token** of an author
part as the surname, which is right for every name the house holds and wrong for
the few carrying a generational suffix: `Robert E. Lucas Jr.` keyed under `Jr`
and `John C. Bailar III` under `III`, so neither scholar was findable under their
own name and a pre-authoring scan for `Lucas` returned a **false clear**. The
suffixes are a closed list and are never surnames anywhere, so this is its own
wall, and the fix is always to drop the suffix from the Source cell and never to
add it to a policy.

```
node tests/science_overlap.mjs --suffixes    # index keys that are generational suffixes
```

**And the three walls above are about the scholar half of the key. The work half
has a blind spot of its own, and it is not a wall.** A Key Work cell may hold more
than one work, separated by a semicolon, and the index does not: `normaliseWork`
takes `.split(";")[0]`. That is **right for the common case**, where the tail is a
gloss, an edition, a translation or a prize, and it is what keeps scope prose out
of the index. Where the tail is a **second work**, the work never enters the index
at all, so `--check` answers a true clear to a false question and the shared-work
wall never adjudicates it. The house has 476 such hidden work-strings, 17 of which
collide with a work another misfit already holds, and when the scan was written
**12 of those carried no exemption**, which meant they were not violations but
**determinations that had never been put**.

All seventeen have now been put. Five carry canon or contrast, ten declare a
supporting citation, one was read and found not to be a shared spine at all, and
**one is a shared spine and is not a fault**. That last one is the whole reason
this stays an instrument: whether a hidden work is a shared spine, a field's
canon, a row cited to hold a line or one misfit's background is exactly the
judgement `workPolicy` exists to make, and the seventeenth is a case the policy
has no way to express and deliberately never will. **The count is one, it will
stay one, and the one is the argument.**

```
node tests/science_overlap.mjs --compound   # works hidden behind a semicolon that another misfit holds
```

**And reading the twelve found something better than a list: the wall is stricter
than the rule it enforces, and the blind spot was masking the difference.** The
rule says the same (scholar, work) **carrying the spine** of two misfits is a
finding. The check cannot read a spine. It flags any shared work outside `canon`
and `contrastMarkers`, and there was no exemption for **a work that is one
misfit's spine and another's background** - which is what ten of the twelve are.
Everybody's Business has Latané and Darley as its spine while Belt and Braces
cites the same book for the shirking Sagan invokes; The Long Calm rests on
Minsky's financial instability hypothesis while Debt-Deflation cites it for the
leverage that sets the stage. Closing the blind spot without that exemption would
fail the build on ten good warrants, so the hole was not the finding: **the hole
was hiding a mismatch between the wall and the rule.**

So `workPolicy` has a third exit, `supportingMarkers`, built exactly like
`contrastMarkers` - a declared phrase in the Scope or Key Work cell, honoured
from either side, since one side saying the work is its background already
answers a rule about a work carrying two spines.

| The role a citation plays         | What the cell says                    |
| --------------------------------- | ------------------------------------- |
| the field's foundational text     | nothing; it is in `canon`             |
| cited to hold a line              | `cited to distinguish`, `(contrast)`  |
| cited as this misfit's background | `cited as background`, `(background)` |
| carrying this misfit's spine      | nothing; this is the default          |

**Declared and not inferred, for the reason contrast is**: the author knows which
role a citation plays and no scan of the prose does. The alternative considered
and rejected was to mark the ten as contrast rows, which is cheapest and least
honest - those rows are not cited to hold a line, and the marker would come to
mean two things.

**The limit this section used to record is gone, and how it went is the part
worth keeping.** The kit's wall read `canon` and `contrastMarkers` and nothing
else, so a `background` declaration exempted a hidden work in `--compound` and
did **not** exempt a first-work collision at `npm test`. It was written down as
an accepted cost, on the grounds that the wall holds at zero shared works so
nothing could yet be wrong.

That reasoning was sound about today and wrong about the shape. **Two checks
reading one policy and disagreeing is worse than either answer**, because the
divergence only becomes visible on the first real collision - an author declares
the row background, watches one instrument clear it, and gets a red build with
no explanation. And beneath it sat a second fault: `loadWorkPolicy` normalised
the config to `{ contrastMarkers, canon, aliases }` and dropped every other key,
so the vocabulary was in the config and the check read an empty list. The
exemption could not fire at all, and `--compound` reporting an unchanged count
looked exactly like no cell having declared a marker yet.

Both are fixed upstream in khai-tests 0.3.3: `roleOf` reads `supportingMarkers`
symmetrically with `contrastMarkers`, `loadWorkPolicy` returns it, and the wall
honours it. This house's local re-read of the config is retired with it. **The
general lesson is the one this file already teaches about the walls: a
vocabulary declared where nothing reads it is indistinguishable from a
vocabulary nobody has used.**

**And the house's own loader reads it, because the kit's does not.** `loadWorkPolicy`
normalises the config to `{ contrastMarkers, canon, aliases }` and drops every
other key without complaint, which is right for a loader serving many houses and
makes a house that declares a key the kit does not know fail in the quietest way
available: the vocabulary is in the config, the check reads an empty list, and the
unexempted count comes back unchanged, which is **indistinguishable from no cell
having declared a marker yet**. It shipped that way and passed a green suite,
because the pass that adds a vocabulary is by definition the pass with no cells to
tell the two apart. So the third exit is read from the config directly in
`loadPolicy`. **The check on a newly declared key is not that the build passes; it
is that the key is in the loaded policy**, which is one line and was not asserted.

**And the fourth exit, which was considered and must not be built.** The
seventeenth collision is Kahneman and Tversky's "On the Psychology of Prediction",
which carries representativeness in The Rare Disease Test and the flight-instructor
misattribution of regression in The Bounce. Both are spines. The switch-off runs
clean both ways: zero The Bounce's luck variance and the rare-disease arithmetic
still bites, since its quantity is prevalence against the false-positive rate; set
the base rate aside and the instructor still misreads regression as an effect of
praise. Two mechanisms, one paper, and the rule keys on the work.

A declarable `distinctClaims` would clear it, and the reason to refuse it
generalises: **contrast and background are exits an author takes by conceding the
work is not their spine, which is what makes them safe to self-declare.** A
distinct-claims marker asserts the opposite, that two spines on one work are fine,
which is the determination the wall exists to force a person to make. Made
declarable, every collision exempts itself. So the wall stays unable to express
this case, on purpose, and a person answers it each time.

**Two practical consequences.** When citing a work, check the cell it would live
beside: if an existing cell already carries it after a semicolon, `--check` will
clear you wrongly, and `--compound` is the only command that says so. And when
writing a Source cell, **put one work before the semicolon and prefer a second row
to a second work in one cell**, since a work worth citing is worth being visible
to the wall.

**That second consequence has exactly two named exceptions, and they are the two
cells the determinations left standing.** Splitting Sick Enough to Spread's
_Evolution of Infectious Disease_, or The Rare Disease Test's "On the Psychology of
Prediction", onto its own Origin row turns each into a **first-work** collision,
which the kit's wall does read and cannot exempt, since it honours neither
`supportingMarkers` nor anything covering the two-mechanisms-one-paper case. The
build would fail on three good warrants. The advice is right everywhere else; here
the semicolon is load-bearing, and **the rule that made the general advice good, a
work worth citing is worth being visible to the wall, is the same rule that makes
these two exceptions, since a wall that cannot answer should not be asked.**

Those three walls are one shape seen three times, and the shape is worth carrying
forward: **the index key is computed from a cell an author wrote, and nothing
checks that the computation found a person.** A declared form ordered wrongly, a
surname resolved to the wrong person and a suffix taken for a surname all pass
every other gate, report clean counts, and were each caught by eye. When a fourth
appears it will look like those: quiet, arithmetically fine, and wrong about who
somebody is.

**The fourth arrived as predicted, and it is not a wall: it is the order of the
pass.** `Campbell` was scanned before authoring and reported **one cell against
one, both certain**, the cheapest kind. Declaring it turned up **five more**
unresolved cells and **three** people: Donald T in Metric Fixation, More to Stand
Still, The Bounce and The Cobra Effect; W M, with Capen and Clapp, in The Best on
Paper and The Winning Bid; Lyle in Erased by What Divided Them. The scan was not
misread. It was **correct about the index, and the index was not yet about
people**, because an undeclared surname collates: six rows under one bare key
read as one scholar across several works, which is the expected case this file
already says owes nothing, and nothing in that output tells one person with six
works from three people with six between them.

So **the declaration is the instrument, not the last step of the pass**, and the
count of cells owed is knowable only after it. Declare locally, read the wall,
then decide what the pass costs. And where the cells and the declaration are both
needed, **the cells go first**: a bare cell is valid without the declaration,
since it merely collates, while the declaration is not valid without the cell,
which is the wall's whole point. `khai-guard advise` names the opposite order,
governance before solution. That is right about lanes and wrong here, and the
distinction is worth keeping: **the advisor orders lanes, not dependencies.** It
answers which lanes a change spans, which is the question it was built for; it
does not answer which half can stand alone on `main`, and nothing does.

**And that order reverses when the surname is already declared, which is the
other half of the same rule.** Cells-first is right for `Campbell`, and it is
right because `Campbell` was **undeclared**: an undeclared surname collates, so
the bare cells sit on `main` harmlessly and only the declaration would expose
them. A surname the house has **already** declared is under the wall now. The
cosmology misfit cites Martin White against a `White` declared with three other
forms, so the moment it lands the occurrence is unresolved and `npm test` fails:
there the **declaration goes first**, and the misfit cannot be written into the
house until it does. The same pass carried both directions at once, since its
`Scott` and `Schwarz` were undeclared and owed cells before anything, and its
`White` was declared and owed a form before the misfit.

So the question that fixes the order is not which lane a change is in and not
which came first, but **which side is already under the wall**:

| The surname                       | The order                                                     |
| --------------------------------- | ------------------------------------------------------------- |
| Not yet declared, cells bare      | cells first, then the declaration                             |
| Not yet declared, cells **named** | **declaration first**: no cells are owed                      |
| Already declared, new namesake    | **declaration first**, then the misfit that cites the new one |

**The middle row is the case the table first missed, and the probe is what found
it.** `Cohen` was undeclared and looked like the cells-first case, so the pass
was costed as cells plus a declaration. Declaring it locally and reading
`--namesakes` returned **zero unresolved**, because the existing cell in
Whatever's in the Can was already written `Michael Cohen, James March, Johan
Olsen`: an author who happens to have written their given name in owes nothing
later. So no cells were due, nothing had to land on the misfit lane first, and
the declaration could go straight in. **Undeclared does not mean bare**, and the
question the table is really asking is not whether a surname is declared but
whether any cell would be left unresolved by declaring it. The probe answers
that directly and is the only thing that does.

**And the instrument says bare anyway, which is what makes that sentence easy to
read past.** `--surname` reports the **index key**, and an undeclared surname has
no declared form to resolve against, so its key is bare **by construction**,
whatever its cells contain. `Ericsson` printed `(bare)` and every cell in it was
already written `Neil Ericsson`: nothing was owed, and the pass had already
costed itself a repair of every occurrence. So **a `(bare)` from `--surname` is a
statement about the declaration and never about the cells**, it is exactly as
bare for the middle row of the table as for the first, and reading it as evidence
of an unnamed cell mis-costs the pass in the expensive direction. Only the probe
separates them.

The pre-authoring probe answers this too, and costs one build: declare the
candidate surnames locally and read `--namesakes`. Where the misfit is not yet
in the tree, an already-declared surname reports **zero** owed, which is the
answer, because the wall has long since forced every existing cell to resolve.
That is the one case where a count taken before the pass is trustworthy.

**And a rare surname is not a safe one.** The heuristic above says a common
surname is more likely than not to be taken already, which is true and is the
reason to run the full `"Scholar :: Work"` string. It does not run the other way.
`Hirshleifer` is rare, was already held by **David** in Information Cascade, and
was taken again by **Jack** in Nothing Left to Pool: they are son and father. A
rare surname is rare because it belongs to a family, and academic families
produce academics, so the very thing that makes a name look safe is what
concentrates it. Scan the surname whatever it looks like: the scan costs one
command and the collision costs a misfit.

**And the command is `--surname`, which for a long time did not exist - a trap
the last sentence used to set.** `--check` takes a `"Scholar :: Work"` string
and answers the shared-work wall. Given a bare surname it matches no work and
reports `clear: no misfit cites this work`, which is true, and is not the
question that was asked, so a surname the house already held returned a **false
clear from the sanctioned instrument**, and the other three flags were no help
either: `--namesakes`, `--forms` and `--suffixes` all read the index _after_ a
declaration and none of them scans for one. The interim was a hand-rolled grep
against `docs/SCIENCE.md` that had to match both key arms (`Adams` bare,
`Adams (Gordon)` resolved) and the file's exact row shape; anchored wrongly
once, it swept twenty-eight surnames, reported all of them clear, and was wrong
about every one (`Davis` and `Cooper` were both taken, and only the missing hit
gave it away). A rule with no command behind it is obeyed literally and
answered wrongly, so now there is a command, computed off the same parse the
walls use:

```
node tests/science_overlap.mjs --surname <Surname>   # taken or clear, bare and resolved arms both
```

It matches the index key exactly, case-insensitively, never as a substring
(`Adams` must not hit `Adamson`), and a hit is a **cell to read, not a
verdict**: the same person on another work is expected and owes nothing, and a
hit's three readings are the ones the namesake rule above already names.

**And every namesake instrument above runs after a declaration, which is the gap
that made the ordering rule expensive to learn.** `--namesakes` reads the index
for a declared surname left bare, `--forms` for a declared form nothing can
reach, `--surname` for a key already in the index. **None of them scans for a
surname that ought to be declared and is not**, and the contract's own account of
`Campbell` and `Wilson` says why that costs: an undeclared surname **collates**,
so several people under one key are rendered as one person across several works,
which is the expected case that owes nothing. The declaration was the only
instrument, and it had to be made speculatively to be read.

So there is a probe that runs **before** the declaration, and it is an instrument
and never a wall. It reports an undeclared surname whose own Source cells already
name **more than one person**, which is a thing no other flag can see:

```
node tests/science_overlap.mjs --undeclared-namesakes   # surnames the house has not declared whose cells name two people
```

It reads only what an author already wrote beside a surname and computes no key,
so **it reports a lower bound**: a bare cell is evidence of nothing, and this
house's `Wilson` names four people while the probe can see three. **The
declaration is still the instrument, and the pass that used the probe proved
it**: the probe reported two `Diamond`s, both named, and declaring the surname
turned up a third, Douglas of the bank-run model, sitting in a bare cell. So the
probe orders the search and the declaration answers it, which is the same shape
as the field count ordering the search for a candidate and never saying what is
there. Two given forms
are one person when one is a token-prefix of the other, the same rule the build
uses for a declared form, which is what keeps `Robert` and `Roberto` apart.

**And it has a blind spot with a computable complement, which is its own flag.**
The probe needs **two named cells** to report a surname at all, so a namesake
whose counterpart sits in a bare cell is invisible to it. That is not a fault to
fix, since guessing at bare cells would fill the output with a house's worth of
them; it is a place to look, and the place is an undeclared surname whose cells
**mix a named one with a bare one**. Douglas Diamond hid exactly there, behind
`Diamond & Dybvig`, and reading the complement found five more in one pass.

```
node tests/science_overlap.mjs --mixed-cells   # undeclared surnames mixing a named cell with a bare one
```

**It is a reading list and not a finding count, and the number is what says so.**
It returns dozens of surnames and almost every one is a single scholar an author
named in one cell and not another, which owes nothing. So the two scans bracket
the answer rather than either giving it: **the probe is the lower bound, this is
where to look, and a person decides.** That is the third instrument here to order
a search rather than answer one, after the field count and the surname scan, and
it is the general shape of everything that reads this index.

**Its first run found three kinds of defect and it was built for one.** Four
genuine undeclared namesakes, `Wilson`, `Daniels`, `Diamond` and `List`. One
scholar written two ways in two cells, `E J` against `EJ`, which is cell hygiene
and not a namesake. And two cells where **the computation did not find a person
at all**: a Source cell naming a treaty keys `Convention` as a scholar, since the
last capitalised token is taken for a surname and nothing asks whether it is
somebody, and a cell written `Finite-horizon / Simon` keys the right scholar from
a string that is not a name. That last pair is the shape this file already
predicts three times over, arriving in its most literal form yet: **the index key
is computed from a cell an author wrote, and nothing checks that the computation
found a person.** Here it did not, and every count stayed clean.

**And scan again at the end, because the second source set is where the namesakes
are.** The pre-authoring scan covers the sources you **planned**, and the best row
in a warrant is routinely chosen during the build: the cut moves, a better
citation turns up, and the citation list moves with it. That list is what the
dedup runs on. Three consecutive passes each turned up a namesake the first scan
could not have seen, which is not a run of bad luck but the shape of the work:
**Holt** arrived when the mechanism row moved to intraguild predation, **Johnson**
when the baseline for interpreted testimony was traced to its source paper, and
**Appelbaum** when a conservation row was added to an archaeology warrant. The
first source set is chosen from what the author already knows, and the second from
what the subject actually needs, so the second is the one that reaches outside the
author's own reading.

The re-scan is one command and it decides the shape of the pass, since an
already-declared surname forces its declaration to land **before** the misfit. The
Johnson case is the one to remember: the obvious citation carried a sixth Johnson
and would have blocked the misfit, and the same research group's other paper
carried none. Swapping there is legitimate **only on the merits**, and it was,
since the paper taken is the one written for the audience the play is about.

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
5. run `npm run format`, see below;
6. verify with **both** `npm test` and `npm run format:check` before pushing.

The count is read from the directories on disk, so an untracked misfit left in
the tree inflates it: build with only the misfit you are shipping present.

**And `npm test` is not the `khai-tests` job.** That job runs
`npm run format:check` **first** and exits on failure, so a formatting fault
fails CI having never reached the suite: the report reads `khai-tests` red while
`npm test` is green locally, and both statements are true at once. Reading the
job name as the suite is what makes it cost a cycle.

**The fault has exactly one source, and the reason it is missed is that the
other two builders do not have it.** `npx khai-tests registry build` and
`npx khai-tests science build` emit `registry.json` and `docs/SCIENCE.md`
Prettier-clean, every time. `--build-refs` does not: it writes its Origin tables
**compact** where Prettier wants them column-aligned, so **a rebuilt
`REFERENCES.md` is unformatted every time**, and a pass that formats the misfit
directory never reaches it, because it is not in the misfit directory. Three
builds run, one file comes back dirty, and it is the one furthest from what was
being authored.

Formatting it does not put it at odds with the build: the drift gate normalises
whitespace, so the formatted file still equals a fresh build from the warrants.
**The two gates are satisfiable together and always were**, and the only way to
fail is to check one of them.

**And the rule above is not about the misfit count, which is the reading that
makes it look inapplicable.** It is written for misfit pull requests and justified
by the count moving, so a governance pass reads it and concludes it is exempt. It
is not: the rule is about **any branch that regenerates a shared artefact**, and
the count is only the most familiar reason one gets regenerated. A homonym
declaration ships no package content, never touches the count, lives wholly in the
governance lane, and still rebuilds `docs/SCIENCE.md`, because changing a scholar
key changes the index. Two such branches conflict on that file exactly as two
misfits do, and merging `main` in produces a file matching neither build, which
then fails the drift gate. `Kelly` and `Barnett` were declared against one `main`
and a misfit landed first; the fix was the procedure above applied unchanged to a
governance branch, reset and rebuild rather than merge. **The lane does not decide
it. Touching a built file does.**

**And when git reports a conflict in one of these files, both sides of it are
outputs.** That is the sentence worth having, because every instinct and every tool
reaching a conflict tries to **resolve** it, which is right everywhere else in the
repository and wrong here: neither side is a source, so choosing between them, or
splicing them, produces a file that no build would emit. It fails the drift gate if
the difference is large, and it passes quietly if the difference is small, which is
worse. **Discard both sides and rebuild.** A hand-merged index is the one defect in
this house that looks more correct the less of it there is: transcribing two changed
keys across lands on the right characters and teaches the wrong method, and the same
method applied to forty rows silently produces an index matching neither branch.
Copilot was asked to clear a conflict on a misfit pull request and did exactly this,
editing `docs/SCIENCE.md` by hand and reporting the branch clean while it was still
based on the commit before the one it conflicted with. **A conflict in a built file is
not a merge problem. It is a rebuild that has not happened yet.**

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
