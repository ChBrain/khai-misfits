---
khai: piece
title: "The Miss"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Miss

## Taxonomy

[All at Once](play_all_at_once.md). A single request finding the value gone and recomputing it from the backend, the correct response to a cache miss.

## Owner

- Project: khai-misfits

## Place

Run by [The Request](persona_the_request.md) on [Recompute on Miss](plan_recompute_on_miss.md), the instant [The Expiry](piece_the_expiry.md) has landed. What it produces, at scale, is [The Stampede](piece_the_stampede.md).

## Load Bearing

The Miss is the piece the house refuses to fault: a request that finds the cache empty is supposed to recompute the value and put it back, and doing exactly that is right, every time, for any single request acting alone (Vattani, Chierichetti, and Lowenstein). What makes it load bearing is that this correctness does not scale down with the crowd: because [The Expiry](piece_the_expiry.md) is shared, the Miss is not committed by one request but by however many were reading the key, all recomputing the identical answer through the identical path at the identical moment. HEDGE: none of the individual recomputations is wasted or wrong, the value genuinely needed recomputing. Guard against blaming the request for the flood; the flood is many correct misses arriving together, not one miss done badly.

## Apparent

Looks like the system doing exactly what a cache is for, a clean fallback that keeps the answer available even when the shortcut fails. That reading is true one request at a time and false at scale: it counts each Miss as an isolated event and never adds up how many are happening in the same instant, so the correctness of the single act obscures the cost of the many.

## Yearbook

Produced by [The Expiry](piece_the_expiry.md); run by [The Request](persona_the_request.md) on [Recompute on Miss](plan_recompute_on_miss.md); produces [The Stampede](piece_the_stampede.md) through [Flooding](process_flooding.md) at [The Window](place_the_window.md).
