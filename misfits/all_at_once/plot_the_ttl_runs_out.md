---
khai: plot
title: "The TTL Runs Out"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: The TTL Runs Out

## Taxonomy

[All at Once](play_all_at_once.md)

## Owner

- Project: khai-misfits

## Cue

[The Key](place_the_key.md), the one entry the crowd has been reading, its countdown reaching zero.
Nothing asked for this moment; the clock set at write time simply arrives at it.

## Action

[Lapsing](process_lapsing.md): the single entry at [The Key](place_the_key.md) crosses its time to live and goes stale, marked by [The Expiry](piece_the_expiry.md), the one shared instant every concurrent reader of this key now shares without knowing it.

## Stage

There is no request in this scene, no miss yet, only the entry itself crossing the line it was given when it was written.
Because the key holds a single value and a single countdown, the crossing happens once, at one timestamp, for every reader at once rather than staggered across them.
An instant before, the entry answered every asker correctly; an instant after, it still holds the same value, only now marked stale, waiting on whichever request arrives next to notice and refresh it.

## Tension

Still nothing has gone wrong: a stale entry is an ordinary, expected state, and the very next request in line will find it and correctly recompute it.
What has changed is only that every request now converging on this key will find that same staleness at once, not that any one of them will.
