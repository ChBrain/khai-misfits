---
khai: persona
title: "The Backend"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
type: archetype
---

# Persona: The Backend

## Taxonomy

[Backend](position_backend.md). The expensive origin the cache was placed to shield, which computes the value from scratch and answers every request handed to it, struck by every coincident recompute at once the instant the cache stops shielding it.

## Owner

- Project: khai-misfits

## Projection

Capable, patient, answering.
Is the source of truth behind the cache: a database or a computation that produces the value at real cost, and serves whatever requests reach it, one at a time or many, as they come.
No weakness in it as a fault: it handles its ordinary trickle of misses without strain, and the whole point of the cache was to keep that trickle a trickle.

## Action

Answers on [Answer Every Call](plan_answer_every_call.md), computing the value for each request that reaches it, and bears [the Overload](piece_the_overload.md) when [Flooding](process_flooding.md) delivers the whole synchronized crowd at once.
Cannot refuse the coincident load: it answers every call as it is built to, so when the misses arrive together it tries to serve them all at once, and the load the cache had been absorbing lands on it undamped.
Does what an origin does when the shield in front of it blinks: it takes the full crowd, and buckles under a burst its average capacity could easily have carried spread out.

## Shadow

Not underprovisioned and not the culprit: the Backend is sized for its real load, which the cache kept low, and it is wronged by no request and no decision, only struck by all of them in the same instant.
Because the harm is the simultaneity and not the volume, hardening the Backend does not cure it, only raises the crowd size needed to buckle it, so the resource the cache was meant to protect is exactly the resource the cache's expiry exposes, hardest hit where it was most shielded.
It is the spared origin that the sparing itself delivers, all at once, to the spike.

## Tell

Says it answered every request it was given, which is what it is for, and shows an average load that never looked dangerous.
Cannot spread a burst that arrives already synchronized, so it meets the coincident flood at full width and gives way, at the one moment the cache handed it everything it had been holding back.
