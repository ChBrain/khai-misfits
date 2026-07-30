---
khai: piece
title: "The Trade"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Piece: The Trade

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md). The CAP law, the proved choice under partition between consistency and availability, that a system cannot keep both.

## Owner

- Project: khai-misfits

## Place

Standing over [The Cluster](place_the_cluster.md) as a theorem, not a setting: under a partition, a system may stay consistent or stay available, and not both while the split lasts, so every design is a choice of which to give up (Brewer; Gilbert and Lynch).

## Load Bearing

Remove it and the fork looks like a fixable bug: it is the trade, the proof that consistency and availability cannot both hold under a partition, that makes the fork a forced choice and not an error.
It bears the load as the law beneath the mechanism. Because keeping the state single requires that at most one side act, and staying available requires that both do, the two cannot be had together while partitioned, so the fork is simply the availability horn of a proved trade, taken when the nodes chose to keep serving.

## Apparent

A design knob: from outside it can look like a tunable preference, more consistency or more uptime, when it is a hard theorem that under partition one must be surrendered.

## Yearbook

Named in [Pick Two, Get One](plot_pick_two_get_one.md), the choice behind [The Fork](piece_the_fork.md).
It is what [The Boundary](piece_the_boundary.md) resolves by taking the consistency horn, standing the minority down to keep the state single.
