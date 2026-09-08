---
khai: plan
title: "Keep Clean"
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-11"
status: active
---

# Plan: Keep Clean

## Taxonomy

A **mandate**: a standing checklist the house Roadie holds, run continuously
rather than on a one-off cue.

## Owner

- Owner: [The Roadie](position_roadie.md)

## Direction

This house stays clean and current: nothing red, nothing stale, the stage stocked
with what the Playwright needs. The board is green so the house can produce on
solid ground.

## Orders

The Roadie runs this continuously and guards it. Findings are surfaced and the
deterministic tools are run; the Roadie never edits content to make a check pass,
and never authors. A finding the Roadie cannot clear by running a tool is raised
to the Theatre Manager, not fixed by hand.

**A gate that never fires is not a gate**, and a wall the house trusts has to be a
wall that **only** fires when something is wrong. Those are the two failures and
they pull in opposite directions: a check that has never once caught anything is
either watching a thing that cannot happen or is written so that it cannot see it,
and a check that fires on correct work teaches the house to route around it. Both
are found the same way, by reading what a wall has actually caught rather than by
reading what it was meant to catch.

**And where a defect is a judgement about what a cell means, build something that
finds it and leave the deciding to a person; where a defect is a computation, build
a wall.** That line decides whether a finding belongs to the suite or to a reader,
and it is why this house has instruments that report and gates that fail.

**A grep for a frontmatter key must be anchored to the frontmatter block.** An
unanchored search for a line beginning with a key name matches prose that happens to
wrap onto that word, and a count that returns one more category than the house has
is the cheapest possible signal that it was not anchored.

**Before a pass writes its register entry, run `node tests/register_rules.mjs
--from=<the first line of the entry>` and read what it says.** The instrument finds
bold spans in the register that are rule-shaped, carry no proper noun, and are framed
on the work rather than on a subject the house stages, then asks whether any six
consecutive words of each appear in a plan. What comes back uncarried is a reading
list: most of it is an observation about one pass and owes nothing, and the ones that
read as a standing instruction belong in a plan before the pass ends.

**It is an instrument and not a wall, by this file's own rule.** Deciding whether a
bold sentence is a standing rule or an observation is a judgement, and the filter has
obvious false positives, so it reports and a person decides. Nothing here fails a
build.

**And it needs no bookmark, which is why it can be a step rather than a pass.** The
carried test is exact, so the queue regenerates every run and a rule that has been
carried leaves it by itself. Two earlier attempts at this were periodic passes that
each took the carry as their whole unit; they worked and did not stop the
accumulation, because a rule written between them waited for the next one. The
measured state at the time this order was written: **174 rule-shaped spans in the
register, 30 in a plan, 144 not.**

**And the rule this order exists for was itself in the register three times and
carried none of them.** _A pass that ends with a rule worth keeping has not finished
until the rule is in the plan that governs the work it constrains._ _A rule that
lives only in the register is a rule remembered at the edit._ _The register is where
a rule is discovered and not where it is kept._ Three statements, three passes, no
plan. That is the whole argument for the instrument and it was available the entire
time.

**Two more the instrument found, both about gates.** **A lane allow for a path that
cannot occur is cargo**, and the cheapest way to learn whether the tooling ever
generates one is to let it fail loudly on the day it does. And **the guard computes
the lane and never the base**, and nothing else does either, so a branch cut from
another lane's branch rather than from the trunk carries that lane's files into this
one and `branch-check` rejects it, correctly and late. Check the trunk, not the
pull request.

**The house has a gate for every relation it can compute and none for the relation
between a slate line and the house's own contents**, which is computable: a line
names a concept and the concept either has a directory or it does not. Stale ticks
and stale counts are the symptom, and they are stale because **a slate item is
opened by one pass and closed by a different one**.

**And the instrument that failed is worth more than the two that worked.** A run
that returns nothing has told you either that the house is clean or that the
instrument cannot see, and only reading what it looked at distinguishes those.

**A gate failed without finding anything, and the shape of that is worth carrying.**
The canon validator went red once, passed on a re-run with nothing changed in the tree,
and was written off in a pull request as transient. It was not transient and it was not
a flake: there is no randomness, no ordering and no async race in that test. It was the
runner's default five-second timeout against an assertion whose cost grows with the
house, and **the count is not what failed it, load is**: anything that doubles
wall-clock puts the resting time over the wall. **A gate that fails without naming a
finding is reporting on the machine and not on the house**, and writing it off as a
flake is how the house learns to ignore the one wall that measures its own growth.

**And the whole point of the lane is that content and its governance move separately**,
which is why the guard refuses a change that touches both and is right to.

**A ratchet with a hand-written baseline ratchets only while somebody remembers, so
check it from both sides.** A baseline that refuses only growth is a constant somebody
has to lower, and the work that would lower it is the work that makes lowering it
unnecessary to notice: this house's axis ratchet stood at 228 against an actual 138, so
it carried ninety of headroom and could not have fired for months. **Cap the slack.**
Let the baseline sit no more than one pass's work above what it is holding, and fail with
the number to write when it does, so forgetting costs a failed gate rather than costing
nothing. And **prove the new side fires before trusting it**, by moving the baseline and
watching it go red: a wall nobody has seen fire is a wall nobody has tested.

**Audit a list with the instrument that consumes it, and never with a grep.** A
first pass over the canon exemptions, matched by normalising the strings and searching
the warrants, reported one entry as exempting nothing. Run through `canonFamilies`, the
view the wall itself reads, all thirty-two exempt a real pair and none is dead. **A
hand-rolled matcher answers a question the wall never asked**, so the audit of a list is
worth only as much as its use of the list's own reader.

**And cargo is indistinguishable from a forward-declaration without a stated reason.**
The lane config carries thirteen `packages/**` allows for a workspace layout this house
does not have and has documented a plan to adopt, and they read exactly like the one
entry that was a typo. **An entry whose justification lives nowhere will be re-audited
forever**, so the reason belongs somewhere a later audit will find it: the thirteen
stand for the planned move of the content to `packages/khai-misfits/`, reasoned through
in the register, and are not to be cleared as cargo.

**A gate that names one way out teaches the house the other does not exist**, so where a
wall has two honest answers its message carries both. The axis ratchet now says declare a
sign **or** argue the exemption, because a play whose law is a trade-off has no sign to
declare and was previously told only to declare one.

**And raise the mechanism only when a misfit arrives that the convention cannot serve.**
This house has four times declined to build a gate ahead of the cases that would use it,
and the discipline is not thrift: a wall built for an imagined case is written against an
imagined shape, and the real case arrives shaped differently. Offer a convention, record
the cases it does not fit, and build when the count of those is the argument. What
changes the answer is evidence and not elegance.

## Implementation

The gates, dependency updates, the security panel (alerts, secret scanning), the
conformance kit, and the engines deployed into this house. Deterministic tools
only; the content and the rules are out of bounds.

## Targets

- [ ] dependencies up to date: no green dependency update left unmerged
- [ ] security panel clean: no open alerts, secret scanning clear
- [ ] all instance files conform (the conformance kit)
- [ ] the gates are green on every open change
- [ ] the stage is current: each engine the house uses is at its deployed version
