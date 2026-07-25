---
khai: plan
title: "Serve and Expire"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Serve and Expire

## Taxonomy

A **standing plan**: the intent of [the cache's seat](position_cache.md), inside [All at Once](play_all_at_once.md).

## Owner

- Owner: [Cache](position_cache.md)

## Direction

Hand every request the stored copy while it is warm, sparing the backend, and drop the entry when its time to live is up. Keep the entry shared and the expiry simple, because that is what makes caching cheap and effective, even though it means expiring for every caller at one shared instant.

## Orders

([The Cache](persona_the_cache.md) hands [the Hit](piece_the_hit.md) through [Serving](process_serving.md) at [the Front](place_the_front.md) while warm, and drops the entry through [Lapsing](process_lapsing.md) at [the Key](place_the_key.md), laying [the Expiry](piece_the_expiry.md) for all callers at once.)

## Implementation

([The Front](place_the_front.md) serves the shared copy cheaply and [the Key](place_the_key.md) carries the one time to live; the [serving](process_serving.md) process spares the backend while warm and the [lapsing](process_lapsing.md) process drops the entry for everyone at a single instant, so the economy that absorbs a popular load is the same design that synchronizes the misses it later releases.)

## Targets

- [ ] every request is handed the stored copy while the value is warm, the backend spared
- [ ] the entry is dropped when its time to live is up, on the clock and for all callers at once
- [ ] the entry is kept shared and the expiry simple, the source of the cache's cheapness and of the synchronized miss alike
- [ ] the one expiry hands the backend the whole crowd at the instant the shielding stops, no per-caller stagger available without ceasing to be the simple shared store
