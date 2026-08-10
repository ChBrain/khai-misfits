---
khai: play
title: "Bug for Bug"
description: "A behaviour nobody specified gets depended on, so matching the bug is required and fixing it is the thing that breaks."
language: english
license: CC-BY-NC-SA-4.0
voice: "Engineering and matter-of-fact on the surface: a contract written down, a release shipped, a defect reported, a patch prepared, a test suite that passes. Underneath, a promise that was never the thing anyone was using, and a repair that is indistinguishable from an outage. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-09"
---

# Play: Bug for Bug

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Bug for Bug.
Two systems meet at a surface, and one of them promises certain things about what it will do there. The promise is written down: this is the contract, these are the guarantees, everything else is an implementation detail and may change. And then people use it, in numbers, and what they build against is not the promise. It is whatever the thing actually does. Not because they are careless, and mostly not because they noticed: they wrote something, they tried it, it worked, and they moved on. Every accident of the implementation is now load-bearing for somebody, and none of them knows they are doing it.

## Arc

The bend is this: what is depended on is what is observable, and what was promised is only a subset of that.
It runs on a law with no exceptions in it.
The Behaviour Nobody Specified is an ordinary accident. A sort that happens to be stable, an error message with a particular wording, a field that comes back in a certain order, a call that happens to be fast enough to do in a loop. Not documented, not intended, not forbidden either, and true on every run.
The One Who Shipped It did nothing wrong. Somebody wrote a reasonable implementation of a documented contract on a deadline, and the parts nobody specified came out however they came out, which is the only way they could have come out. There was no decision here to make badly.
The Ones Who Depend On It never agreed to anything. With enough users of an interface, all observable behaviours will be depended on by somebody, whatever the contract says: this is Hyrum's law and it holds without anybody consenting to it. The dependency forms by use rather than by promise, and most of the people holding it could not tell you which of the things they rely on were guaranteed.
So The One Who Must Match is punished for being right. A competing implementation that follows the written contract exactly will fail against real content built for the other one, and the users will not read the specification to work out whose fault it is: they will observe that this one is broken. Correctness is the thing that looks like a defect.
And then The One Who Fixes It causes the outage. Repairing the accident is a change to observable behaviour, so it breaks working systems belonging to people who never asked for the repair and are not doing anything wrong. The maintainer is fixing a genuine bug, on their own code, in accordance with their own contract, and the consequence is other people's software stopping.
So the fix is reverted, and the accident is now permanent. It has stopped being a defect and become a requirement, without anybody deciding that it should.
And in the end the document is rewritten to describe it. When HTML was finally specified in a way that could produce interoperable browsers, the error handling was written by reverse-engineering what the browsers already did, precisely so that the behaviours documents already depended on would be carried forward. That is the right call, because a specification nobody implements is worth nothing. It also makes the standard a description of what happened rather than a statement of what ought to.
And the corrections all keep the surface. Compatibility modes work, and mean maintaining the old behaviour and the new one for as long as anybody is left on the old one, which is forever. Version negotiation works, and multiplies the combinations that must be tested. Deprecation windows work, and are paid by everybody who has to migrate, including the ones whose dependency was never on anything anybody promised.

## Company

**Pitch**

- [Nobody Wrote It Down](pitch_nobody_wrote_it_down.md)

**Personas**

- [The Behaviour Nobody Specified](persona_the_behaviour_nobody_specified.md)
- [The One Who Shipped It](persona_the_one_who_shipped_it.md)
- [The Ones Who Depend On It](persona_the_ones_who_depend_on_it.md)
- [The One Who Must Match](persona_the_one_who_must_match.md)
- [The One Who Fixes It](persona_the_one_who_fixes_it.md)

**Positions**

- [Behaviour Nobody Specified](position_behaviour_nobody_specified.md)
- [One Who Shipped It](position_one_who_shipped_it.md)
- [Ones Who Depend On It](position_ones_who_depend_on_it.md)
- [One Who Must Match](position_one_who_must_match.md)
- [One Who Fixes It](position_one_who_fixes_it.md)

**Plans**

- [Ship on Friday](plan_ship_on_friday.md)
- [Make It Work Here](plan_make_it_work_here.md)
- [Write Down What Happens](plan_write_down_what_happens.md)

**Places**

- [Where They Meet](place_where_they_meet.md)
- [The Issue Tracker](place_the_issue_tracker.md)

**Processes**

- [Shipping It](process_shipping_it.md)
- [Building On It](process_building_on_it.md)
- [Matching It](process_matching_it.md)
- [Reverting the Fix](process_reverting_the_fix.md)

**Pieces**

- [The Written Contract](piece_the_written_contract.md)
- [The Code Written Against It](piece_the_code_written_against_it.md)
- [The Compatibility Mode](piece_the_compatibility_mode.md)

## Triggers

**[Something Has to Happen](plot_something_has_to_happen.md)**
Cue: a documented contract, a deadline, and a reasonable implementation of it. Closes when the parts nobody specified have come out however they came out, undocumented, unintended, not forbidden, and true on every run.

**[Somebody Depends On That](plot_somebody_depends_on_that.md)**
Cue: enough users, none of whom read the contract closely and all of whom tried something and found it worked. Closes when every observable behaviour is load-bearing for somebody, the dependency having formed by use rather than by promise, with nobody consenting to anything.

**[The Correct One Looks Broken](plot_the_correct_one_looks_broken.md)**
Cue: a second implementation, written strictly to the written contract, meeting real content built for the first. Closes when the compliant one fails, the users conclude it is the defective one, and matching the accident has become the condition of being usable.

**[The Fix Is the Outage](plot_the_fix_is_the_outage.md)**
Cue: the accident recognised as a defect, on the maintainer's own code, in plain breach of nothing. Closes when repairing it has stopped working systems belonging to people who never asked for the repair and are doing nothing wrong.

**[Reverted](plot_reverted.md)**
Cue: the breakage reported from every direction within a day. Closes when the fix is backed out, the defect is restored deliberately, and it has become a requirement without anybody deciding that it should.

**[So We Specified It](plot_so_we_specified_it.md)**
Cue: a standards effort that wants implementations to agree, faced with what the implementations already do. Closes when the document has been written by reverse-engineering the behaviour, correctly, and the specification has become a description of what happened rather than a statement of what ought to.

## Stakes

Whether a promise can govern a system when the thing people build on is everything the system does, promised or not.
Every plot moves the same way: toward reasonable implementations, users who tried it and found it worked, maintainers repairing their own defects, and standards bodies documenting reality so that implementations can agree, and away from any instrument that could separate the guarantee from the accident, because from outside they are the same observation. The production cannot make a contract narrow the thing people can see, and it cannot ask a maintainer to break working software to be technically right. What is left to fight over is not whether to write contracts, they are all anybody has, but who pays for the distance between what was promised and what was true, and whether a behaviour that everything now rests on was ever really a bug.
