---
khai: plot
title: "The Stall"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: The Stall

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md)

## Owner

- Project: khai-misfits

## Cue

[The Bottleneck](place_the_bottleneck.md), the buffer full and staying full, throughput reading exactly as it should.

## Action

[Bloating](process_bloating.md): [The Interactive](persona_the_interactive.md), holding [the interactive's seat](position_interactive.md), on [Get Through](plan_get_through.md), waits behind [The Standing Queue](piece_the_standing_queue.md), carrying [The Latency](piece_the_latency.md) that keeps growing.

## Stage

The queue that once would have drained between bursts now never empties: full when the last packet arrived, full when the next one does (Gettys and Nichols). A video call sharing the link freezes and catches up in bursts; a keystroke lands seconds after it is sent; a click waits behind a queue it cannot see. Every packet the Interactive sends must cross the same standing backlog the Sender built, no matter how small or how urgent.

## Tension

The link's throughput graph shows nothing wrong, capacity fully used, nothing dropped, nothing failed. But the Interactive's flow is unusable at any timescale a person notices, the cost paid entirely in delay that the buffer, built to protect the connection, is now inflicting on it.
