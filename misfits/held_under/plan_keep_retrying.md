---
khai: plan
title: "Keep Retrying"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
status: active
---

# Plan: Keep Retrying

## Taxonomy

A **standing plan**: the intent of [the caller's seat](position_calling.md), inside [Held Under](play_held_under.md).

## Owner

- Owner: [Calling](position_calling.md)

## Direction

When a call fails on a transient fault, send it again, and if it fails again, send it again, because a robust client does not abandon a request that failed on a passing condition. Run the rule from every seat at once, each on its own correct logic, so the reattempts arrive together and sum, though no single seat can see the total or means to add to it.

## Orders

([The Caller](persona_the_caller.md) resends each failed request as a good client should, issuing [the Retry](piece_the_retry.md), and the retries of thousands of seats sum into [the Sustaining Load](piece_the_sustaining_load.md).)

## Implementation

([The Queue](place_the_queue.md) receives every reattempt; the [retrying](process_retrying.md) process fires on each failure; the correct rule, run everywhere at once, feeds [the Sustaining Load](piece_the_sustaining_load.md) that holds [the Metastable State](piece_the_metastable_state.md), each retry right and the sum the whole trouble.)

## Targets

- [ ] every failed call is reattempted, because a good client does not give up on a transient fault
- [ ] the rule runs from every seat at once, each on its own correct logic
- [ ] the reattempts arrive together and sum into a load above capacity
- [ ] no single seat sees or intends the sum, and the sum is what holds the service under
