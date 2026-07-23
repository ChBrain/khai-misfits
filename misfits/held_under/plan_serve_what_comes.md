---
khai: plan
title: "Serve What Comes"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
status: active
---

# Plan: Serve What Comes

## Taxonomy

A **standing plan**: the intent of [the service's seat](position_under.md), inside [Held Under](play_held_under.md).

## Owner

- Owner: [Under](position_under.md)

## Direction

Accept every request that arrives and answer as many as capacity allows, failing only the overflow, because that is the whole and correct duty of a service. Make no distinction between a fresh request and a retry of a failed one, since the seat has no standing to refuse either, and so serve into the failing state exactly as into the healthy one, holding the queue full and the failures coming.

## Orders

([The Service](persona_the_service.md) serves what comes up to its limit and fails the excess, then serves the retries of that excess too, holding in [the failing state](piece_the_metastable_state.md) because it may turn nothing away.)

## Implementation

([The Queue](place_the_queue.md) fills as the retries land; the [sustaining](process_sustaining.md) process holds the load above capacity; the seat answers what it can and fails the rest, so [the Collapse](piece_the_collapse.md) deepens while [the Metastable State](piece_the_metastable_state.md) is kept, the service unable to drop below capacity by serving correctly.)

## Targets

- [ ] every request that arrives is accepted, fresh or retry alike
- [ ] as many as capacity allows are answered and the overflow is failed
- [ ] the retries of the failed overflow are served too, keeping the queue full
- [ ] the service holds in the failing state, unable to recover by its own correct service, until the loop is broken from outside
