---
khai: place
title: "The Front"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Place: The Front

## Taxonomy

[All at Once](play_all_at_once.md). The threshold every request crosses, hit or miss, alone. Hosts [Warm](plot_warm.md), [Everyone Misses](plot_everyone_misses.md).

## Owner

- Project: khai-misfits

## Shown

Two outcomes only, to every comer: [The Hit](piece_the_hit.md), the cached value handed back at once, or [The Miss](piece_the_miss.md), the value gone and recomputation due.
Which one a given request draws is shown to that request alone; the front does not show any request how many others crossed the same threshold in the same instant.

## Holds

The boundary between served and unserved, redrawn the moment [The Key](place_the_key.md) lapses.
Before [The Expiry](piece_the_expiry.md), the front holds a line on which every request is a hit; after, it holds a line on which every concurrent request is a miss, the same threshold, a different side.

## Offers

Speed while warm: [The Cache](persona_the_cache.md) answers from here in a fraction of what [The Backend](persona_the_backend.md) would cost, and offers it to any number of concurrent requests at once without them interfering.
That same evenhandedness, one answer replicated to all comers, is what later lets a miss be replicated to all comers too.

## Withheld

Any memory of who else is asking. The front processes each request as if it were the only one, so on the hit side that costs nothing, but on the miss side it withholds the one fact that would change the outcome: that hundreds of others just took the identical miss and are about to recompute the identical answer.
