---
khai: play
title: "Held Under"
description: "A brief blip tips a sound system into failure, and its clients' own correct retries become the load that holds it under."
language: english
voice: "Operational and calm on the surface: a healthy system, a small spike that passes in seconds, clients that retry exactly as good clients should. Underneath, the failure that will not lift after its cause is gone, held down by nothing but everyone's correct recovery, the goodput falling toward zero while the offered load stays high, and the only way out a breaker thrown by hand that sheds real work to stop the retries feeding the fire. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Play: Held Under

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Held Under.
A system runs healthy: requests come in, the service answers them, latency sits low, and there is headroom to spare. Then something small happens, a brief spike in traffic, a node that pauses for a garbage collection, a dependency that stalls for a second and recovers, and for a moment some requests fail. This is nothing: the spike passes, the node comes back, the dependency clears, and the trigger is gone almost as fast as it arrived. But in that moment the clients whose requests failed do exactly what well-behaved clients are built to do: they retry. A failed request is one a good client should send again, so they send it again, and now the service is handling the fresh requests plus the retries of the failed ones, and that sum is above what it can serve, so more requests fail, so more are retried, and the retries of the retries pile onto the load. The trigger that started it is long gone, and it does not matter: the system is now held in a failing state by nothing but the retries, and the retries are simply correct clients recovering correctly from the failures the retries themselves are causing.
And it does not clear. This is the turn that makes it a misfit and not just a bad afternoon: the system has two states it can rest in, the healthy one it fell out of and the failing one it fell into, and the failing one is stable. It sustains itself. As long as every client keeps rightly retrying, the load stays above capacity, the failures keep coming, and the retries keep answering them, so the system sits in the bad equilibrium and cannot climb back out under its own correct behaviour, because its own correct behaviour is the thing holding it down. The load that pins it is not an attack and not a flood from outside: it is the sum of a thousand clients each doing exactly the right thing, and there is no one to stop and no fault to fix, because nothing is at fault. The trigger was minor and is gone. The service is sound. The clients are behaving as designed. And the failure outlives all of it, held under the surface by the very recovery meant to lift it.
The visible shape of it is the collapse: the goodput, the useful work actually completed, falls toward zero while the offered load stays high or climbs, so the system looks slammed, buried under demand, when in truth almost all of that demand is retries of work it already failed, effort spent re-asking for things instead of doing them. Watch the throughput drop as the request count climbs and it reads as overload, but it is not overload in the ordinary sense: a steadily congested system is just busy, and would recover the moment the extra load eased, while this system will not recover even when the original load is long past, because the load is now self-generated and will not ease on its own. The congestion feeds the congestion. The queue that should drain fills instead, and every retry that lands to help is one more unit of the load that keeps it from draining.
And the way out is not free, which is the second turn. The system cannot lift itself, so something must reach in and break the loop by force: trip a circuit breaker so the failing calls fail fast instead of being retried, back the retries off with jitter so they stop arriving all at once, shed load so the sum drops below capacity and the queue can finally drain. Every one of these works, and every one of these costs: failing fast means rejecting requests that would have succeeded, backing off means giving up work a client legitimately wants done, shedding load means dropping real users on the floor to save the ones left. The escape asks the correctly-behaving clients to stop doing the right thing, because their doing the right thing is the fire, and it buys recovery by throwing away real work. There is no move that clears the state and keeps every request: the reckoning is the load you shed to get out, and until something imposes it, the system stays under, held down by a room full of people each politely, correctly, asking again.
None of it is anyone's failure. The trigger is a fact of any real system and often too small to prevent. The retry is the right behaviour and the reason systems survive ordinary faults at all. The service is sound and was never overprovisioned into fragility. The collapse emerges from the sum, a sound system and correct clients and a minor trigger combining into a state that holds itself down, so the misfit is that everything working as designed is exactly what keeps the failure from clearing, and the only cure is to make something, briefly, work wrong on purpose.

## Arc

The bend is this: a transient trigger tips a healthy system into a failing state, and the clients' correct retries become the load that holds it there after the trigger is gone, so the failure sustains itself on nothing but everyone behaving correctly and cannot clear until something breaks the loop by force.
It runs on a system with two stable states.
A healthy system under load is not one step from disaster and one step from safety: it has a good equilibrium it rests in and, latent beneath it, a bad one it can be knocked into and stick, and the two are separated by a threshold that ordinary operation never crosses (Bronson, Charapko, Aghayev, and Zhu). The trigger is whatever crosses it once: a brief spike, a pause, a stall, minor and transient, gone almost as soon as it comes, and it does not need to be severe, it needs only to push the system over the line for a moment.
And the recovery is the sustaining load. Past the line, some requests fail, and the clients retry, because a failed request is one a well-behaved client should send again (Nygard; Jacobson). But now the service carries the fresh load plus the retries, and that sum exceeds capacity, so the failures continue, so the retries continue, and the retry load holds the system above capacity all by itself (Bronson and colleagues; Huang, Magnusson, and colleagues). The trigger is gone and irrelevant: the loop needs no outside push now, it feeds on its own output, correct retries generating the failures that generate the retries.
And the collapse is what shows. As the retries climb, the goodput, the work actually completed, falls toward zero while the offered load stays high, the classic congestion collapse in which dropped requests provoke reattempts that deepen the congestion until throughput drops to almost nothing (Nagle; Jacobson). It reads as overload, but the demand is mostly retries of already-failed work, so the system is buried under its own echo, doing less and less while looking busier and busier.
And the escape is bought, not given. The state is stable, so the system cannot climb out on its own correct behaviour: something must break the loop by force, tripping a circuit breaker to fail fast, backing the retries off with jitter, shedding load until the sum falls below capacity (Nygard; Jacobson). Each works and each costs: failing fast rejects requests that would have succeeded, backing off abandons work legitimately wanted, shedding load drops real users, and all of it asks correct clients to stop doing the right thing. The reckoning is the real work thrown away to drain the queue, not a free correction.
None of it is fault or attack. The trigger is an ordinary fact of real systems, the retry is the behaviour that lets systems survive faults at all, the service is sound, and the collapse emerges from the sum: a minor trigger and correct recovery and a system with two states, combining into a failure that holds itself down. No one overloaded it and nothing is broken, and that is why it will not clear on its own.
Break the loop early, trip the breaker before the queue saturates, cap and jitter the retries so they cannot sum into a storm, shed load deliberately while there is still headroom to recover into, and the system can be lifted back to health: but breaking the loop means failing fast on purpose, rejecting good requests, giving up wanted work, and dropping real users to save the rest, spending real load to buy back a system that only its own correct behaviour was holding under, so the escape is paid for in the work you shed, and the cost is owed the moment you act and every moment you wait.

## Company

**Pitch**

- [The Retry Storm](pitch_the_retry_storm.md)

**Personas**

- [The Service](persona_the_service.md)
- [The Caller](persona_the_caller.md)
- [The Operator](persona_the_operator.md)
- [The Surge](persona_the_surge.md)

**Positions**

- [Under](position_under.md)
- [Calling](position_calling.md)
- [Operations](position_operations.md)
- [Onset](position_onset.md)

**Plans**

- [Serve What Comes](plan_serve_what_comes.md)
- [Keep Retrying](plan_keep_retrying.md)
- [Trip the Breaker](plan_trip_the_breaker.md)
- [Pass Through](plan_pass_through.md)

**Places**

- [The Steady State](place_the_steady_state.md)
- [The Queue](place_the_queue.md)
- [The Dashboard](place_the_dashboard.md)

**Processes**

- [Triggering](process_triggering.md)
- [Retrying](process_retrying.md)
- [Sustaining](process_sustaining.md)
- [Breaking](process_breaking.md)

**Pieces**

- [The Trigger](piece_the_trigger.md)
- [The Retry](piece_the_retry.md)
- [The Sustaining Load](piece_the_sustaining_load.md)
- [The Metastable State](piece_the_metastable_state.md)
- [The Collapse](piece_the_collapse.md)
- [The Breaker](piece_the_breaker.md)

## Triggers

**[The Spike](plot_the_spike.md)**
The onset. A healthy system running with headroom, and a brief transient, a traffic spike, a pause, a stalled dependency, that pushes it past the line for a moment and is gone. The Surge arrives, tips the service into failing, and departs almost at once, leaving the failure behind it. Closes when the trigger has passed and the first requests have failed, the cause already gone and the state it opened still open.

**[The Storm](plot_the_storm.md)**
Cue: requests are failing and the clients retry. The Caller resends each failed request exactly as a good client should, and the retries sum onto the fresh load until the total sits above capacity. Closes when the retry load alone holds the service above what it can serve, the loop now feeding on its own output, no outside push required.

**[The Hold](plot_the_hold.md)**
Cue: the trigger is long gone and the system is still failing. The service sits in the bad equilibrium, held under by nothing but correct retries, unable to climb back to health on its own correct behaviour because that behaviour is the load. Closes when the failing state has proved it will sustain itself indefinitely, stable, self-feeding, and clearing for no one.

**[The Brownout](plot_the_brownout.md)**
Cue: the throughput is read against the offered load. The goodput has fallen toward zero while the request count climbs, the system buried under retries of work it already failed, looking slammed while completing almost nothing. Closes when the collapse is plain on the board, useful work at the floor and load at the ceiling, the shape of a system doing less the busier it looks.

**[The Trip](plot_the_trip.md)**
Cue: someone reaches in to break the loop. The Operator trips the breaker so failing calls fail fast, backs the retries off with jitter, and sheds load until the sum drops below capacity and the queue can drain. Closes when the loop is broken and the system lifts back toward health at the price of the real work shed ... or the breaker is not thrown, and the hold continues, the system waiting under for a load it cannot itself refuse.

## Stakes

Whether a sound system can be lifted back to health, when nothing is holding it under but everyone doing exactly the right thing.
Every plot but the last moves the same way: deeper into the failing state that sustains itself, the retries summing into the load that pins it, the goodput falling while the offered load climbs, and further from the healthy equilibrium the system cannot return to under its own correct behaviour. The production cannot make the retries lift the system, because the retries are the load that holds it down, and it cannot fault the clients, because retrying a failed request is exactly what a well-behaved client should do: the collapse is the sum of a minor trigger and correct recovery and a system with two states, not any failure of design or care. It can only show that no one overloaded the system and nothing is broken, that the trigger was real and gone and the retries are right, and that the one move that clears the state, breaking the loop by force, must be made by failing fast on purpose, rejecting requests that would have succeeded, giving up work legitimately wanted, and dropping real users to save the rest, so the recovery is real and the retries are correct and the load that had to be shed to get out was real work the system would rather have done.
