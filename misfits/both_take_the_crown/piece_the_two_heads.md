---
khai: piece
title: "The Two Heads"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Piece: The Two Heads

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md). Both sides applying the locally correct rule to promote themselves, so two nodes each become the sole primary.

## Owner

- Project: khai-misfits

## Place

Standing in [The Cluster](place_the_cluster.md), one on each side of the break: two primaries where the design allows for one, each promoted by a node that could not reach the old leader and chose, correctly, to keep serving rather than freeze (Gilbert and Lynch).

## Load Bearing

Remove it and there is no fork: a single primary, even behind a partition, keeps the state single, so it is the second head, the far side crowning itself too, that makes divergence possible.
It bears the load by being correct on both sides. Because each node applies the same sound rule, promote when you cannot reach the leader and must not stall, both crown themselves rightly, so the two heads are not a bug or a race but the intended behaviour meeting a partition, each blind to the other.

## Apparent

A clean failover, twice: from each side it looks like the ordinary, healthy promotion of a new leader when the old one is unreachable, and it is exactly that, done in two places at once.

## Yearbook

Raised by [Promoting](process_promoting.md) in [Two Primaries](plot_two_primaries.md), [The Isolated](persona_the_isolated.md) and [The Twin](persona_the_twin.md) each crowning itself.
It is what lets [The Fork](piece_the_fork.md) form, two correct primaries where one state needs one.
