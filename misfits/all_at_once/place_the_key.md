---
khai: place
title: "The Key"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Place: The Key

## Taxonomy

[All at Once](play_all_at_once.md). The one entry the crowd wants, and the one clock it shares. Hosts [The TTL Runs Out](plot_the_ttl_runs_out.md), [Scatter the Herd](plot_scatter_the_herd.md).

## Owner

- Project: khai-misfits

## Shown

The key's current value, served to anyone who asks while it is warm, and a single time to live counting down beside it.
Nothing about how many are asking, or how close that count has run, is shown to any one asker; each reads the same entry as if alone.

## Holds

One value and one expiry, shared by every request that names this key.
Because the value is popular, the traffic converging on it is large, and because the expiry is a single timestamp, that traffic is bound to a single instant: the key holds the coincidence before it happens.

## Offers

A cheap, correct answer to every request while the time to live has not run out, sparing [The Backend](persona_the_backend.md) the cost each ask would otherwise carry.
The saving scales with popularity: the more requests the key serves, the more it spares, right up to the instant it stops.

## Withheld

Any staggering among the requests it serves. The key gives every asker the identical expiry, so none arrives early or late relative to the others, and it withholds the one thing that would keep the crowd from converging: a reason for any single request to recompute before or after the rest. That gap is exactly what [The Jitter](piece_the_jitter.md), added deliberately, supplies.
