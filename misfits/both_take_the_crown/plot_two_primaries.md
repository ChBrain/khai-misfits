---
khai: plot
title: "Two Primaries"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Plot: Two Primaries

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md)

## Owner

- Project: khai-misfits

## Cue

[The Cluster](place_the_cluster.md), where each side must act on the little it can see.

## Action

Through [Promoting](process_promoting.md), [The Isolated](persona_the_isolated.md) on [Keep Serving](plan_keep_serving.md) crowns itself to stay available, and [The Twin](persona_the_twin.md), facing the same silence, reasons identically and does the same, so [The Two Heads](piece_the_two_heads.md): two primaries stand where one should, each correct and each blind to the other. The scene closes with both wearing the crown, neither in error (Gilbert and Lynch).

## Stage

This is the heart of it: not one node erring but two nodes correct. Promoting when the leader is unreachable is the right move, and both sides make it, so the two heads are the intended behaviour meeting a partition, a clean failover happening in two places at once.

## Tension

The very correctness of each promotion is what makes the disaster: because both do exactly the right thing and neither can see the other, the rule that keeps a system available under failure produces two primaries where the state can hold only one.
