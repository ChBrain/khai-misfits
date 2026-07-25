---
khai: plan
title: "Break the Sync"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Break the Sync

## Taxonomy

A **standing plan**: the intent of [the warden's seat](position_warden.md), inside [All at Once](play_all_at_once.md).

## Owner

- Owner: [Warden](position_warden.md)

## Direction

Scatter the refreshes off the shared cliff, letting one caller refresh early with a chance that climbs as expiry nears, or collapse the misses by letting a single request recompute while the rest briefly wait. Break the coincidence and not the correctness, because the flood is made of correct actions and only their timing is left to change, and build it in before the hot key and the shared expiry meet.

## Orders

([The Warden](persona_the_warden.md) lays [the Jitter](piece_the_jitter.md) through [Scattering](process_scattering.md) at [the Key](place_the_key.md), de-synchronizing or collapsing the misses before they become [the Stampede](piece_the_stampede.md).)

## Implementation

([The Key](place_the_key.md) is where the shared expiry must be broken; the [scattering](process_scattering.md) process refreshes before the cliff so the misses spread, or leases the recompute to one so the flood collapses, or jitters the expiries, or serves stale while one refresh runs, each de-synchronizing rather than computing less and each bought with a value served a little stale, a request made to wait, or a refresh done early, and only where it was built in ahead of time.)

## Targets

- [ ] the refreshes are scattered off the shared cliff, or collapsed to a single recompute the rest wait on
- [ ] the coincidence is broken and not the correctness, only the timing of correct actions changed
- [ ] the guard is built into the cache before the hot key and the shared expiry meet, a coincidence prevented in advance
- [ ] the de-synchronization is bought with staleness, waiting, or an early refresh, a standing cost paid against the rare spike and nil where it was never installed
