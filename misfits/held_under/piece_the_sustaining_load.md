---
khai: piece
title: "The Sustaining Load"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Piece: The Sustaining Load

## Taxonomy

[Held Under](play_held_under.md). The feedback itself: the sum of retries and fresh traffic sitting above capacity, the loop that needs no outside push because it now feeds on its own output.

## Owner

- Project: khai-misfits

## Place

Accumulates in [The Queue](place_the_queue.md), where fresh requests and retries of already-failed requests arrive together and are no longer separable. It is what makes the Queue never drain: every unit that leaves it failed returns to it retried.

## Load Bearing

It is load bearing as the mechanism of the hold, not merely its evidence: past the threshold, failed requests are retried as correct clients should, but the service now carries the fresh load plus the retries, and that sum exceeds capacity, so the failures continue and the retries continue, the retry load alone sufficient to hold the system above capacity (Bronson, Charapko, Aghayev, and Zhu). Field study of real metastable incidents confirms this is not a theoretical concern: retries and other work-multiplying policies are the concrete amplification mechanisms observed keeping load above capacity long after a trigger has cleared (Huang, Magnusson, and colleagues). The Sustaining Load is the piece that makes the trigger irrelevant: once it exists, nothing outside the loop is required to keep the system down.

## Apparent

Reads as ordinary high demand, a busy system under a heavy day. The apparent story is that more capacity or more patience would clear it, when in fact the load is not external and will not ease on its own.

## Yearbook

Produced by [Sustaining](process_sustaining.md) out of many instances of [The Retry](piece_the_retry.md), summed past any one Caller's view. It is what holds [The Metastable State](piece_the_metastable_state.md) open, and its visible face on [The Dashboard](place_the_dashboard.md) is [The Collapse](piece_the_collapse.md): the load this piece carries is what [The Breaker](piece_the_breaker.md) exists to break.
