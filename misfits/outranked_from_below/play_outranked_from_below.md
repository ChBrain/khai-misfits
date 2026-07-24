---
khai: play
title: "Outranked from Below"
description: "Every scheduling call is correct, yet the highest work starves behind lower, because holding the lock carries no rank."
language: english
voice: "Orderly and correct on the surface: a system that runs the highest-priority ready work at every instant and never once breaks its own rule. Underneath, the highest-priority work waiting without bound behind ordinary lower work, because the one task that holds the resource it needs keeps being pushed aside by a task of middle rank that outranks the holder and needs nothing. No villain and no broken part, only a priority order honoured step by step and inverted in the sum. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Play: Outranked from Below

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Outranked from Below.
Set three pieces of work in a line of rank, high, middle, and low, and one machine that can do only one thing at a time, and give them a single rule everyone would agree with: whenever the machine is free, it takes up the highest-ranked work that is ready to run. Nothing about that rule is wrong. It is the rule you would write, the rule you would defend, the rule that in almost every moment does exactly what it should, serving the most important work first and the least important last. And most of the time it does, and the line of rank is honoured, and nothing goes astray.
Now let the highest and the lowest work need the same one thing to proceed, a resource only one may hold at a time, a lock. The low work reaches it first and takes it, as it is entitled to, and begins a short task with it in hand. Then the high work becomes ready and needs that same thing, and finds it held, and can do nothing but wait for it to come free, which is fine, because the low work has only a little to do before it lets go. For that moment the wait is short and bounded, and the order is only lightly bent.
And here is the turn that makes it a trap and not just a brief wait. Before the low work can finish and release, the middle work becomes ready. The middle work needs none of this, holds nothing, and wants only its own ordinary business, but it outranks the low work, so the rule, correctly, hands the machine to it. The low work is set down mid-task, still holding the thing the high work needs, and cannot run, cannot finish, cannot release, for as long as the middle work runs. And the high work, which outranks the middle work and everything else, now waits behind it, because rank is what the machine dispatches on and holding the lock confers no rank at all. The most important work in the system is served after the least, for as long as the middle work has anything to do.
And none of it is a fault. The machine kept its rule at every step. The low work did nothing but take what it was allowed and try to finish. The middle work did nothing but run its own business when its turn came, which by rank it rightly did. No decision in the whole sequence was the wrong decision, and yet the sequence starves the very work the system exists to serve, without bound, because the thing that would order it right, that the low work is standing in for the high work while it holds the lock, is exactly the thing the rank-ordered rule cannot see.
And when the wait runs long enough, something downstream that was counting on the high work gives up on it. On a real spacecraft, Mars Pathfinder, this exact sequence starved a high-priority task that managed a shared bus, a watchdog timer noticed that task had not run, and it concluded the system was broken and reset it, again and again, losing data each time (Reeves). Nothing was broken. Every scheduling decision had been correct. The order had inverted underneath a rule that never once disobeyed itself, and the fix was to lend the low work, while it held the lock, the rank of the high work waiting on it, so the middle work could no longer push it aside (Sha, Rajkumar, and Lehoczky).

## Arc

The bend is this: holding a shared resource carries no rank of its own, so a system that honours its priority order at every step can invert that order in effect, starving its highest-priority work behind lower work without bound, and only lending the holder the waiter's rank for the span it holds the resource restores the order.
It runs on a rule no one would change.
One machine does one thing at a time and always takes up the highest-ranked ready work, and this is correct, the rule you would write and defend, doing right by the order in nearly every instant (Sha, Rajkumar, and Lehoczky).
And it turns on a lock two ranks share. The lowest work takes a resource only one may hold, and the highest work needs the same one and blocks, waiting for it to come free, a wait that at this point is short and bounded, the low work nearly done with it (Sha, Rajkumar, and Lehoczky).
And the middle work makes the wait unbounded. A task of middle rank, needing nothing and holding nothing, becomes ready and preempts the lock-holder purely because it outranks it, so the holder is frozen mid-task still holding the lock, and the highest work waits behind ordinary middle work for as long as that work runs, the crucial element being that third task between the two (Sha, Rajkumar, and Lehoczky).
And the cost lands where the highest work was owed. The highest-priority work, the work the system exists to serve, is served last and without bound, and a watchdog that was counting on it can conclude the system has failed and reset it, as one did in flight on Mars Pathfinder, losing data with nothing actually broken (Reeves).
And the whole is authored by no one. Replay it and every decision was the right decision: the machine served the highest ready work each time, the middle work took its rightful turn, the lock was held as a lock must be, and still the order inverted, because rank is what the rule reads and a held resource carries none.
Lend the holder the waiter's rank, and the order comes back. While the low work holds what the high work needs, raise it to the high work's rank so the middle work can no longer push it aside, which bounds the inversion to a single stretch of held resource and, in its stronger form, heads off deadlock too (Sha, Rajkumar, and Lehoczky): but the remedy must be built in before the fact, adds its own bookkeeping to every shared lock, and bounds the wait rather than abolishing it, so the correction is foresight spent against a failure that shows only when the timing lines up, rare enough to pass every test and surface in the field.

## Company

**Pitch**

- [No Wrong Move](pitch_no_wrong_move.md)

**Personas**

- [The Foremost](persona_the_foremost.md)
- [The Holder](persona_the_holder.md)
- [The Middle](persona_the_middle.md)
- [The Dispatcher](persona_the_dispatcher.md)

**Positions**

- [Foremost](position_foremost.md)
- [Holder](position_holder.md)
- [Middle](position_middle.md)
- [Dispatcher](position_dispatcher.md)

**Plans**

- [Take What I Need](plan_take_what_i_need.md)
- [Hold and Release](plan_hold_and_release.md)
- [Take My Turn](plan_take_my_turn.md)
- [Serve the Highest Ready](plan_serve_the_highest_ready.md)

**Places**

- [The Core](place_the_core.md)
- [The Critical Section](place_the_critical_section.md)
- [The Ready Line](place_the_ready_line.md)

**Processes**

- [Blocking](process_blocking.md)
- [Preempting](process_preempting.md)
- [Starving](process_starving.md)
- [Lending](process_lending.md)

**Pieces**

- [The Lock](piece_the_lock.md)
- [The Order](piece_the_order.md)
- [The Inversion](piece_the_inversion.md)
- [The Wait](piece_the_wait.md)
- [The Reset](piece_the_reset.md)
- [The Inheritance](piece_the_inheritance.md)

## Triggers

**[The Handover](plot_the_handover.md)**
The setup, nothing yet wrong. At [the Critical Section](place_the_critical_section.md), [the Holder](persona_the_holder.md) takes [the Lock](piece_the_lock.md) and begins a short task with it, entitled to it and quick with it, the highest work not yet arrived. Closes with the lock held by the lowest-ranked work, correctly, and a short bounded wait the only thing it could cost.

**[The Block](plot_the_block.md)**
Cue: the highest work becomes ready and needs the lock. At [the Core](place_the_core.md), [the Foremost](persona_the_foremost.md) reaches for [the Lock](piece_the_lock.md), finds it held, and blocks on it, carrying [the Wait](piece_the_wait.md). Closes with the highest work stopped behind the lowest, the wait still short and bounded, the order only lightly bent.

**[The Cut-In](plot_the_cut_in.md)**
Cue: a task of middle rank becomes ready. At [the Core](place_the_core.md), [the Middle](persona_the_middle.md), needing nothing and holding nothing, preempts [the Holder](persona_the_holder.md) purely by rank, and the Holder is set down mid-task still holding [the Lock](piece_the_lock.md). Closes with [the Inversion](piece_the_inversion.md) open and the Foremost starving, the wait now running as long as the middle work does.

**[The Watchdog](plot_the_watchdog.md)**
Cue: the wait outlasts what something downstream will allow. [The Wait](piece_the_wait.md) runs past a limit, a watchdog concludes the highest work has failed, and [the Reset](piece_the_reset.md) follows, the work lost, as it was in flight on Mars Pathfinder (Reeves). Closes with the cost paid by the very work the system was built to serve, and nothing actually broken to find.

**[The Right Call](plot_the_right_call.md)**
Cue: someone replays the sequence to find the fault. Every dispatch is checked against [the Order](piece_the_order.md) and every one was correct, the machine having served the highest ready work each time and the middle work having taken its rightful turn. Closes with no villain found: the inversion authored by no one, emergent from a rule that never once disobeyed itself.

**[The Lent Rank](plot_the_lent_rank.md)**
Cue: the fix is designed in. Through [Lending](process_lending.md), while [the Holder](persona_the_holder.md) holds what [the Foremost](persona_the_foremost.md) needs it is raised to the Foremost's rank, so [the Middle](persona_the_middle.md) can no longer cut in, [the Inheritance](piece_the_inheritance.md) restoring the order. Closes with the wait bounded rather than abolished, bought with foresight and complexity against a failure that shows only when the timing lines up.

## Stakes

Whether a priority order can be kept in effect and not merely in every step, when holding a resource carries no rank and a middle task's rightful turn can starve the highest work without bound.
Every plot but the last two moves the same way: toward the order honoured decision by decision, and away from the one fact the rule cannot read, that the lowest work, while it holds the lock, is standing in for the highest. The production cannot make the rule correct its own inversion, because the rule is correct, at every step, and that is precisely the trouble: no wrong decision is available to catch, and the wait grows out of a sequence of right ones. The one solvent is to lend the holder the waiter's rank, and that must be foreseen and built in before the timing ever lines up. It can only show that no part is broken and no one is at fault, that the machine kept its rule and the middle work took its turn and the lock was held as a lock must be, and that the move which would set the order right, raising the holder to the rank of the work it blocks, is a piece of foresight spent against a failure rare enough to pass every test and appear, without warning and with nothing broken to find, in the field.
