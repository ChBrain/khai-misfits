---
khai: plan
title: "Drop Early"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Drop Early

## Taxonomy

A **standing plan**: the intent of [the manager's seat](position_manager.md), inside [Too Kind to Drop](play_too_kind_to_drop.md).

## Owner

- Owner: [Manager](position_manager.md)

## Direction

Watch how long the queue stays standing rather than how full the buffer is, and when it persists past a short interval, discard or mark a packet before the buffer fills, on purpose, to tell the sender to slow. Keep the good transient burst and shed the standing one, spending a little work early because the drop is the signal, and accept that this must be in place before the trouble comes.

## Orders

([The Manager](persona_the_manager.md) drops early through [Culling](process_culling.md), laying [the Drop](piece_the_drop.md) that restores [the Signal](piece_the_signal.md) and bounds [the Standing Queue](piece_the_standing_queue.md), distinguishing the good queue from the bad.)

## Implementation

([The Edge](place_the_edge.md) is where the discipline must already sit; the [culling](process_culling.md) process reads the standing time and drops into it, so [the Signal](piece_the_signal.md) reaches the sender in time and [the Latency](piece_the_latency.md) falls, bounding the queue rather than abolishing [the Buffer](piece_the_buffer.md), which still absorbs the genuine bursts it was always for, at the cost of foresight and a share of packets there was room to keep, Random Early Detection the antecedent found hard to tune, Nichols and Jacobson.)

## Targets

- [ ] the standing time of the queue is watched, not the fullness of the buffer
- [ ] a packet is dropped or marked early, on purpose, before the buffer fills, because the drop is the signal
- [ ] the good transient burst is kept and the standing queue is shed and bounded, not the buffer abolished
- [ ] the remedy is in place before the trouble, at the cost of foresight and work thrown away against the cheap-memory instinct
