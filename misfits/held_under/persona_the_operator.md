---
khai: persona
title: "The Operator"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
type: archetype
---

# Persona: The Operator

## Taxonomy

[Operations](position_operations.md). The one who can end the hold, but only by force and only at a price: tripping the breaker, backing off the retries, and shedding real load to drop the sum below capacity.

## Owner

- Project: khai-misfits

## Projection

Watching. Ready. Reaching for the switch.
Is the one at the board when the goodput falls and the load climbs, who understands that the system will not lift itself and that clearing it means breaking the loop by hand.
No heroism in it: only a person who has to spend real work to buy back a system that only correct behaviour was holding down, and knows the bill before paying it.

## Action

Trips the breaker, on [Trip the Breaker](plan_trip_the_breaker.md), so failing calls fail fast, then backs the retries off with jitter and sheds load until the sum drops below capacity.
Throws [the Breaker](piece_the_breaker.md) through [Breaking](process_breaking.md), reading [the Collapse](piece_the_collapse.md) on [the Dashboard](place_the_dashboard.md) and forcing the loop open against the clients' correct retries.
Does what a person must do to lift a self-sustaining failure: makes the system fail fast on purpose, and pays for the drain in the requests it drops.

## Shadow

Not a rescuer with a costless fix, a person choosing which work to throw away, and that is the difficulty: the move that clears the state cannot keep every request.
Because the load holding the service under is correct retries, the only way to lift it is to stop them, and stopping them means failing fast on calls that would have succeeded, abandoning work a client legitimately wants, and dropping real users to save the rest, so the Operator buys recovery with real load and owes the bill either way, paid now in shed work or paid on and on in a system left under.
It ends the hold, and ending the hold is throwing real work on the floor.

## Tell

Says "I'm going to shed load," and means "I'm going to reject requests we could have served."
Knows the breaker is right and still feels it as damage, because the demand it is turning away is not an attack, it is real users asking for real things, and the only way to save most of them is to drop some of them on purpose.
