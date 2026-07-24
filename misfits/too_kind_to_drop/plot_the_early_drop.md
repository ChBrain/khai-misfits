---
khai: plot
title: "The Early Drop"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: The Early Drop

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md)

## Owner

- Project: khai-misfits

## Cue

[The Edge](place_the_edge.md), the gateway now watching its own queue rather than only holding it.

## Action

[Culling](process_culling.md): [The Manager](persona_the_manager.md), holding [the manager's seat](position_manager.md), on [Drop Early](plan_drop_early.md), lets fall [The Drop](piece_the_drop.md) before [The Buffer](piece_the_buffer.md) fills, restoring [The Signal](piece_the_signal.md) to [The Sender](persona_the_sender.md).

## Stage

Watching how long each packet has stood rather than how full the buffer is, the Manager marks or drops a packet the moment the queue reads standing instead of transient, distinguishing the burst worth keeping from the backlog worth cutting (Nichols and Jacobson). The Sender, given the loss it was owed, backs off; the queue shortens; the next arrival waits milliseconds, not seconds. Earlier active queue management, Random Early Detection, tried the same idea and proved too hard to tune, so it went largely unused (Floyd and Jacobson).

## Tension

The relief costs something: the gateway throws away packets it had the memory to keep, against the very instinct that stocked the deep buffer in the first place, and it must be built in ahead of time across gateways already shipped without it. The Buffer still stands and still absorbs a genuine burst; it is only no longer permitted to stand full.
