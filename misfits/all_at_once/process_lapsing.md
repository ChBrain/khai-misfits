---
khai: process
title: "Lapsing"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Process: Lapsing

## Taxonomy

[All at Once](play_all_at_once.md). Run by [The Cache](persona_the_cache.md) on [Serve and Expire](plan_serve_and_expire.md), at [The Key](place_the_key.md), in [The TTL Runs Out](plot_the_ttl_runs_out.md).

## Owner

- Project: khai-misfits

## Initiated by

The time to live set when the value was last cached, run out.
No request triggers it and no request can delay it; lapsing fires on the clock alone, whether or not anyone is asking at that instant.

## Direction

Toward one entry, valid, becoming one entry, stale, at a single timestamp shared by every reader.
Lapsing does not stagger; it flips the entire key from servable to unservable in one step, so every request arriving from that step onward, however many, finds the same thing gone.

## Lever

The time to live itself (Vattani, Chierichetti, and Lowenstein), a single deadline set once and applied uniformly.
A shorter time to live only moves the instant earlier; it does not make the instant less shared, which is why lapsing alone, without a deliberate remedy, guarantees a synchronized crowd on the other side of it.

## Echo

[The Expiry](piece_the_expiry.md): the fact, now true for everyone, that the key is stale.
What lapsing leaves behind is not damage but a vacancy, one entry that used to answer and no longer does, and every request that meets that vacancy will do the identical correct thing next.
