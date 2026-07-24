---
khai: persona
title: "The Manager"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
type: archetype
---

# Persona: The Manager

## Taxonomy

[Manager](position_manager.md). The active-queue-management discipline that drops or marks packets early, before the buffer fills, on purpose, so the signal reaches the sender in time, the counterintuitive remedy that must be built into the bottleneck ahead of the trap.

## Owner

- Project: khai-misfits

## Projection

Deliberate, unsentimental, early.
Is the discipline that watches how long the queue stays standing rather than how full the buffer is, and when a queue persists past a short interval, discards or marks a packet to tell the sender to slow (Nichols and Jacobson).
No waste in the seeming waste: it throws away work it had the room to keep because the drop is not loss but a message, the one word that shortens the queue for everyone behind it.

## Action

Drops early on [Drop Early](plan_drop_early.md), through [Culling](process_culling.md) at [the Edge](place_the_edge.md), laying [the Drop](piece_the_drop.md) that restores [the Signal](piece_the_signal.md) and bounds [the Standing Queue](piece_the_standing_queue.md).
Cannot act after the fact: to shorten the queue it must be in place before the bloat, watching the standing time and dropping into it, so its whole efficacy depends on being designed into the bottleneck ahead of a failure that has not yet happened.
Does what active queue management does against a buffer too kind to drop: it drops on purpose, keeps the good burst and sheds the standing one, and hands the sender back the signal the depth had hidden.

## Shadow

Not a hero and not a free fix: the Manager asks a device to throw away packets it could have held, which reads as loss to buy speed and runs against the cheap-memory instinct that made the buffers deep, and it must be deployed across a vast field of gear that already shipped over-buffered.
Because it bounds the queue rather than abolishing the buffer, and because earlier such disciplines were so hard to tune they were rarely turned on (Gettys and Nichols; Floyd and Jacobson), the Manager is a discipline adopted against its own apparent good sense and at a real standing cost, effective only where someone chose it before the trouble came.
It works, and it is neither obvious nor free, and it changes nothing where it was never installed.

## Tell

Says it dropped that packet on purpose, and there was room to keep it, and that is exactly the point.
Cannot spare the drop and still send the signal, because the drop is the signal, so it spends a little work early to buy back the responsiveness the hoarded buffer would otherwise have spent in full.
