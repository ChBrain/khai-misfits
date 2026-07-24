---
khai: piece
title: "The Reset"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Reset

## Taxonomy

[Outranked from Below](play_outranked_from_below.md). The concrete failure the Wait finally produces: a watchdog fires on unmet time, and the system restarts with the Foremost's work lost.

## Owner

- Project: khai-misfits

## Place

Triggered in [The Watchdog](plot_the_watchdog.md), where [The Wait](piece_the_wait.md) crosses the limit the watchdog was set to enforce.
It is the cost the whole misfit was building toward: not a corrected mistake but a system concluding, correctly by its own separate rule, that the Foremost's silence means failure.

## Load Bearing

On the 1997 Mars Pathfinder mission, a high-priority bus-management task was starved when a low-priority meteorological task holding a shared mutex was preempted by a medium-priority communications task, and a watchdog timer, detecting that the bus task had not run, reset the spacecraft, losing the data in progress (Reeves). The Reset is load bearing as the one piece that proves the Inversion is not merely a modeling curiosity: it is the point where an internally sound scheduling and locking system produces an external, costly failure, diagnosed after the fact and traced back to a mutex without inheritance enabled. HEDGE: the Reset stands for one attested case, not a claim that unbounded inversion always ends in a hardware reset. Guard against reading the watchdog as the culprit: it, too, is doing exactly its job, catching a symptom it has no way to trace to its cause.

## Apparent

A hardware fault, a glitch, the spacecraft simply misbehaving for reasons the reset itself gives no clue to.
From inside the reset it looks causeless, an anomaly to be logged and watched for recurrence, and it took tracing the timing back through the Wait, the Inversion, and the held lock to find that the fault was scheduling, not hardware, at all.

## Yearbook

Fired by [The Watchdog](plot_the_watchdog.md) once [The Wait](piece_the_wait.md) runs past its limit, the loss borne by [the Foremost](persona_the_foremost.md).
It is the outcome [The Inheritance](piece_the_inheritance.md) exists to prevent, applied afterward as the in-flight fix that enabled it on the mutex the Reset traced back to.
