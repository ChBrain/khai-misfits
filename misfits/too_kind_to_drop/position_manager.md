---
khai: position
title: "Manager"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Position: Manager

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The seat of the active-queue-management discipline, which drops or marks packets early and on purpose so the sender is told in time, the counterintuitive remedy that must be in place before the bloat.

## Owner

- Project: khai-misfits

## Has

A watch and a lever: a reading of how long the queue stays standing rather than how full the buffer is, and the will to discard a packet before the buffer fills.
A costly discipline: it must be built into the bottleneck ahead of the trouble and deployed across gear already shipped over-buffered, and it drops work it had the room to keep.
No power where it was never installed, because it can only shorten a queue it is present to watch, and only if it was chosen before the failure came.

## Orders

Drop early.
Watch the standing time of the queue, and when it persists past a short interval, discard or mark a packet to tell the sender to slow, keeping the good transient burst and shedding the standing one (Nichols and Jacobson).
Spend a little work early on purpose, because the drop is the signal, so throw a packet away before the buffer fills rather than hold it and hide the road.

## Loses

The look of thrift, and a share of packets it could have kept.
Because it drops on purpose against the cheap-memory instinct, the seat pays a standing cost and reads, to that instinct, as wasteful, bounding the queue rather than abolishing the buffer and doing nothing at all where no one installed it.
It gives up the appearance of sparing every packet to buy back the responsiveness the hoarded buffer would have spent in full.

## Drives

Toward the remedy that is neither obvious nor free,
dropping early to hand the sender back the signal the depth had hidden,
so the seat that throws work away on purpose is the one that shortens the queue, effective only where it was foreseen and chosen against its own apparent good sense.
