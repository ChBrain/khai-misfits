---
khai: order
title: "Scout the Hatchery"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-29"
---

# Order: Scout the Hatchery

## Direction

The slate carried no open candidate, only a hold, so this was a scouting pass and
began where the contract says to begin. The field count is unchanged in shape:
measurement is 84 of 327, a quarter of the house, and **Groups, candour, and
face** is still the thinnest real field at 24 and still, on reading its concepts,
the proof that a thin field is thin because its phenomena are few and covered.

So the search was run by domain rather than by field: sixty-odd terms probed
against the concordance and the index, reporting the ones the house does not
carry. It returned real gaps, and the strongest was **captive breeding for
release**. Fish hatcheries supplement a wild population by rearing and releasing
its young, and the released fish measurably depress the fitness of the population
they were meant to save.

**The candidate was tested and it is already staged**, which is the finding this
order exists to record, along with how nearly it was missed.

## Orders

Discard the hatchery candidate as a misfit and extend the incumbent's warrant
instead, on the contract's own table: the same mechanism in a new domain is an
Origin row and never a cast. **Bred for the Ark** runs on genetic adaptation to
captivity, and the hatchery case is that mechanism in a different taxon and a
different institution.

Record the switch-off, since the table says which move to make and not how to
tell. Set Bred for the Ark's quantity to zero, stipulating that the captive
environment imposes exactly the selection the wild imposes, and the hatchery harm
**goes quiet entirely**: nothing is left to depress the wild population. The
harm goes quiet, so it is an Origin row. Run the other way, the popular sire
effect's quantity is the share of matings one animal takes, and equalising family
sizes perfectly leaves the hatchery harm untouched, so **The One Everybody Used**
is a neighbour and not the owner.

Record the near miss, because it is the useful part. The domain sweep reported
**hatchery 0, salmon 0, domestication 0, relaxed selection 0** and **captive 1**.
Four terms from the candidate's own vocabulary came back empty on a mechanism the
house has staged since August, because the incumbent is written in the language of
**its** domain, arks and conservation programmes, and not the candidate's. The
single hit was the answer and it was read past on its way to the zeros. **A dedup
that stops at the candidate's own vocabulary is not a dedup**, which is the same
lesson the contract already teaches about stopping at a surname, and the
instrument that would have answered in one line was `--check` against the
concept, never run because the concept looked absent.

Take the two salmonid sources on the merits rather than as padding. The ark
literature is comparative and largely cannot measure what it claims; the
hatchery literature can, because a river's returning adults can be assigned to
parents. Araki, Cooper and Blouin reconstruct a three generation pedigree with
microsatellites and measure lifetime reproductive success in the wild; Christie,
Marine, French and Blouin separate domestication selection from inbreeding by
bounding what inbreeding could account for. **That is the hardest evidence the
mechanism has anywhere**, and it is the reason to extend rather than to leave the
warrant on one paper.

Declare Becky Cooper before the warrant cites her, on the contract's ordering
rule. `Cooper` is **already declared**, carrying Elisabeth J and Graham, so it is
under the namesake wall now: the moment a cell names a third Cooper without a
matching form the occurrence is unresolved and the build fails. The declaration
therefore goes first and the warrant follows it, which is the third row of the
contract's ordering table and the opposite of the cells-first case.

## Implementation

`scholarPolicy.homonyms.Cooper` gains `Becky`. It changes no index key, because
no cell names her yet, so `docs/SCIENCE.md` is unchanged and no artefact is
rebuilt: a declaration made ahead of its cell is the one kind that costs nothing.

The findings and the discards are appended to the Playwright's standing slate,
[Fill the Season](../plan_fill_the_season.md). The warrant extension itself is a
separate pass on the misfit's own lane, since it rebuilds two indexes and ships
package content.

## Targets

- [x] the search is ordered by the field count and run by domain, not chosen from memory
- [x] the candidate is switched off against its incumbent in both directions and the result recorded
- [x] the candidate is discarded as a misfit and slated as an Origin row on the incumbent
- [x] the near miss is recorded as an instruction about vocabulary, not as an anecdote
- [x] both new sources are verified by search and taken on what they add, not on their number
- [x] the declared surname is declared before the cell that would leave it unresolved
