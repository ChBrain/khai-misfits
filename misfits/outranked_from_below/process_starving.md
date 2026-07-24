---
khai: process
title: "Starving"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Process: Starving

## Taxonomy

[Outranked from Below](play_outranked_from_below.md). Run by [The Foremost](persona_the_foremost.md) on [Take What I Need](plan_take_what_i_need.md), at [The Ready Line](place_the_ready_line.md), in [The Watchdog](plot_the_watchdog.md).

## Owner

- Project: khai-misfits

## Initiated by

The Foremost already blocked, and the Holder held off the core by the Middle with no scheduled end to that arrangement.
Nothing further needs to happen for starving to begin; it is simply blocking continuing for as long as whatever outranks the Holder keeps arriving.

## Direction

Toward a wait with no ceiling, the Foremost's delay set not by its own critical section but by the sum of the Middle's unrelated work.
Runs at [The Ready Line](place_the_ready_line.md) beside ordinary waiters, carrying [The Wait](piece_the_wait.md) past any bound the Foremost's own design accounted for.

## Lever

The delay is unbounded because the intervening task's runtime, not the length of the critical section, sets the duration: this is what makes the inversion unbounded rather than merely a bounded blocking (Sha, Rajkumar, and Lehoczky).
On Mars Pathfinder in 1997, an unbounded wait of exactly this kind left a high-priority bus task unrun long enough that a watchdog timer read it as failure and reset the spacecraft (Reeves).

## Echo

A highest-priority task that has done nothing wrong, arrived on time, and asked for what it needed, still not run.
Left long enough and unnoticed, the wait stops looking like scheduling and starts looking like failure, which on a system with a watchdog is exactly what it becomes.
