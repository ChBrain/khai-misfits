---
khai: piece
title: "The Jitter"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Jitter

## Taxonomy

[All at Once](play_all_at_once.md). The remedy that de-synchronizes or collapses the recomputations, laid in ahead of the crowd it will meet.

## Owner

- Project: khai-misfits

## Place

Laid by [The Warden](persona_the_warden.md) on [Break the Sync](plan_break_the_sync.md) through [Scattering](process_scattering.md), the beat the play holds as Scatter the Herd, the one thing that ends [The Stampede](piece_the_stampede.md).

## Load Bearing

The Jitter is the family of remedies that treat the true cause: because the mechanism is synchrony and not excess computation, none of them make the value cheaper to compute, they make the misses stop coinciding. Probabilistic early recomputation refreshes the value before the shared cliff, with a probability rising as expiry nears, so a few requests pay the recompute early and scatter the rest off the instant (Vattani, Chierichetti, and Lowenstein); leases and request coalescing let one request recompute while the others briefly wait on it, collapsing many misses to one (Nishtala and colleagues); jittered expiries and serving a stale value while a single refresh runs behind do the same by other means. HEDGE: none is costless. Guard against reading the Jitter as a fix that removes the trade rather than one that relocates it: every version buys its de-synchronization with a stale value served, a wait imposed, or work spent early.

## Apparent

Looks, described plainly, like slack introduced on purpose, an early refresh nobody strictly asked for, a wait imposed on a request that could in principle have recomputed for itself, a value known to be a little out of date served anyway. Each looks like a small concession against the clean correctness of recomputing on a miss. What that reading misses is that the concession is exactly what buys the ordinary case its safety: bought once, ahead of the spike, and spent every time so that it is never spent all at once.

## Yearbook

Laid by [The Warden](persona_the_warden.md) on [Break the Sync](plan_break_the_sync.md) through [Scattering](process_scattering.md). Answers [The Stampede](piece_the_stampede.md) before it forms, breaking the synchrony [The Expiry](piece_the_expiry.md) imposes on [The Miss](piece_the_miss.md), so [The Overload](piece_the_overload.md) never lands on [The Backend](persona_the_backend.md).
