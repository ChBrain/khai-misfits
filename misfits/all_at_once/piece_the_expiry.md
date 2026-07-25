---
khai: piece
title: "The Expiry"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Expiry

## Taxonomy

[All at Once](play_all_at_once.md). The time to live's end, the single shared instant a popular entry goes stale for every request at once.

## Owner

- Project: khai-misfits

## Place

Produced by [Lapsing](process_lapsing.md) at [The Key](place_the_key.md), where the one time to live governs the one hot entry; the shared instant that synchronizes [The Miss](piece_the_miss.md), reached in the beat the play holds as The TTL Runs Out.

## Load Bearing

The Expiry is the engine of the coincidence, not a fault in the cache: a time to live is set once, on one entry, so its lapse is not staggered across the requests that read it but arrives as a single timestamp every one of them shares (Vattani, Chierichetti, and Lowenstein). Nothing about expiring is wrong, an entry must go stale eventually, but because the entry is popular, the instant it lapses is the instant every concurrent reader, previously served identically and cheaply, discovers the miss identically and at once. Guard against locating the trouble in the length of the TTL; a longer or shorter time to live only moves the shared instant, it does not stop it from being shared.

## Apparent

Looks like routine housekeeping, a clock ticking down on an entry the way any cache entry eventually must, unremarkable until it fires. The read that hides the danger is treating expiry as a private event for the entry, when for a popular key it is a public one: every request watching that key crosses the same line together, and nothing about the moment before it warns that the line is shared.

## Yearbook

Produced by [Lapsing](process_lapsing.md) at [The Key](place_the_key.md); ends [The Hit](piece_the_hit.md) and produces [The Miss](piece_the_miss.md), the synchrony [The Stampede](piece_the_stampede.md) inherits. What [The Jitter](piece_the_jitter.md), laid by [The Warden](persona_the_warden.md) on [Break the Sync](plan_break_the_sync.md), exists to break.
