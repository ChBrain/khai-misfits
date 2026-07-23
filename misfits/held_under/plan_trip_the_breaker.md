---
khai: plan
title: "Trip the Breaker"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
status: active
---

# Plan: Trip the Breaker

## Taxonomy

A **standing plan**: the intent of [the operations seat](position_operations.md), inside [Held Under](play_held_under.md).

## Owner

- Owner: [Operations](position_operations.md)

## Direction

Break the loop the system cannot break itself: trip the breaker so failing calls fail fast instead of feeding the queue, jitter the retries so they stop arriving together, and shed load until the sum falls below capacity and the queue can drain. Do it knowing every setting throws away real work, because the load holding the service under is correct retries and the only way to stop them is to refuse the work they carry.

## Orders

([The Operator](persona_the_operator.md) throws [the Breaker](piece_the_breaker.md), failing fast and shedding load until the sum drops below capacity, at the price of the real requests it rejects.)

## Implementation

([The Dashboard](place_the_dashboard.md) shows [the Collapse](piece_the_collapse.md); the [breaking](process_breaking.md) process trips the breaker and backs the retries off; the loop opens and [the Metastable State](piece_the_metastable_state.md) is left, bought by the load shed, so recovery comes at the cost of the work thrown on the floor.)

## Targets

- [ ] the breaker is tripped so failing calls fail fast instead of feeding the queue
- [ ] the retries are backed off with jitter so they stop arriving together
- [ ] load is shed until the sum drops below capacity and the queue drains
- [ ] the recovery is paid for in real requests rejected, the bill owed the moment it acts and every moment it waits
