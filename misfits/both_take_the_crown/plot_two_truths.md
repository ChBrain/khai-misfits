---
khai: plot
title: "Two Truths"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Plot: Two Truths

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md)

## Owner

- Project: khai-misfits

## Cue

[The Cluster](place_the_cluster.md), where the writes come in and land on both heads.

## Action

Through [Forking](process_forking.md), [The Writer](persona_the_writer.md), from [the writer's seat](position_writer.md), on [Write to the Primary](plan_write_to_the_primary.md) sends its writes to whichever primary answers, and both do, so [The Fork](piece_the_fork.md): the shared state diverges into two irreconcilable histories, a key set to two values, an account debited on one side and not the other. The scene closes with the one state become two, with no channel to join them (Gilbert and Lynch).

## Stage

Every write is correct on its side: each primary accepts and records exactly as it should, and the client writes to the leader that answers exactly as it should, so the divergence is not a bug but the sum of two valid, unshared histories.

## Tension

The data looks consistent from either side and is anything but, because the two truths cannot be merged without losing some of what each recorded, so the fork is damage that hides until the halves rejoin and outlasts the partition that made it.
