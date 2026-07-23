---
khai: position
title: "Calling"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Position: Calling

## Taxonomy

[Held Under](play_held_under.md). The seat of the well-behaved client, whose single correct reattempt of a failed request is right every time and, summed across thousands, is the load that holds the service under.

## Owner

- Project: khai-misfits

## Has

A correct recovery rule and the standing to run it: when a call fails on a transient fault, send it again, because a robust client does not abandon work on the first failure.
A clear case: each reattempt is individually sound, the right response to a failed request taken in isolation, so the seat is doing exactly what good client design demands.
No view of the sum, only of its own call, and so the seat cannot see that its correct recovery, joined to every other seat's, is the very load causing the failures it recovers from.

## Orders

Keep retrying.
When the call fails, send it again, and if it fails again, send it again, because a failed request on a passing fault is one a good client should not give up on.
Do it as every other client does it, each on its own correct rule, so the reattempts arrive together and sum, unseen from any single seat, into the load that keeps the calls failing.

## Loses

Nothing it can see, and everything in the aggregate.
Because no single retry is at fault and the seat only ever holds one, it gives up no correctness and breaks no rule, and yet what the sum surrenders is the service's recovery: the correct reattempts, together, are the load that pins it, so the seat wins every local case and loses the system.
It keeps its own behaviour perfectly right and loses, in the total it cannot see, the very thing the retry was meant to secure.

## Drives

Toward a storm made of nothing but correct behaviour,
each client rightly retrying and the retries summing above capacity,
so the seat that does exactly the right thing, multiplied, is what holds the service failing and cannot stop, because stopping is the one thing its correct rule will not let it do.
