---
khai: plan
title: "Answer Every Call"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Answer Every Call

## Taxonomy

A **standing plan**: the intent of [the backend's seat](position_backend.md), inside [All at Once](play_all_at_once.md).

## Owner

- Owner: [Backend](position_backend.md)

## Direction

Compute the value for each request that reaches you, and serve them all as they come, one at a time or many. Rely on the cache to keep the trickle a trickle, because that is what your capacity was sized for, and answer whatever the cache lets through, having no way to spread a burst that arrives already together.

## Orders

([The Backend](persona_the_backend.md) computes the value for each caller it is handed, and bears [the Overload](piece_the_overload.md) when [Flooding](process_flooding.md) delivers the whole synchronized crowd at once.)

## Implementation

([Flooding](process_flooding.md) hands the seat the coincident misses undamped; because it answers every call and cannot reshape a burst that arrives synchronized, its ordinary capacity, ample for the trickle the cache leaves it, gives way under [the Overload](piece_the_overload.md), hardest hit at the moment the cache stops shielding it, and hardening it only raises the crowd size needed to buckle it again.)

## Targets

- [ ] the value is computed for each request that reaches the origin, all served as they come
- [ ] the cache is relied on to keep the miss load a trickle, which the capacity is sized for
- [ ] a burst that arrives synchronized cannot be spread, so the coincident crowd is met at full width
- [ ] the origin buckles on the burst and not its average load, the simultaneity the harm and hardening no cure for it
