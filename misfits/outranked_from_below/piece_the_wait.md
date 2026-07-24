---
khai: piece
title: "The Wait"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Wait

## Taxonomy

[Outranked from Below](play_outranked_from_below.md). The Foremost's blocked delay as borne, unbounded because the Middle keeps running rather than staying idle.

## Owner

- Project: khai-misfits

## Place

Opened by [Blocking](process_blocking.md) and lengthened by [Starving](process_starving.md), carried by [The Foremost](persona_the_foremost.md) on [The Ready Line](place_the_ready_line.md).
It runs out in [The Watchdog](plot_the_watchdog.md), the plot where the Wait's duration finally exceeds what the system built around the Foremost's rank can tolerate.

## Load Bearing

The wait a blocked high-priority task suffers is bounded by exactly one critical section if nothing else intervenes, and unbounded the moment an unrelated intermediate-priority task is ready to run in that section's place, since each time it preempts the holder it extends the wait by its own duration, with no ceiling on how many times or how long that can recur (Sha, Rajkumar, and Lehoczky). The Wait is load bearing as the measure that turns the abstract Inversion into a concrete cost: it is the quantity that separates a tolerable handover from a starvation, and it is the Middle's ordinary readiness, not any malice or overload, that removes its bound. Guard against treating the Wait as proportional to how much work remains in the critical section: its length is set by the Middle's schedule, not the Holder's.

## Apparent

An ordinary delay, the kind any task might suffer waiting its turn, nothing that announces itself as different in kind from a routine queue.
It looks bounded because a single critical section looks small, and that appearance is exactly what makes the difference between a brief handover and an unbounded starvation so easy to miss until the delay has already run far past what the section itself could explain.

## Yearbook

Carried through [Blocking](process_blocking.md) and [Starving](process_starving.md), borne by [the Foremost](persona_the_foremost.md), and closed only when [Lending](process_lending.md) removes the Middle's ability to extend it.
It is the quantity [The Watchdog](plot_the_watchdog.md) measures against its limit, the direct cause of [The Reset](piece_the_reset.md), and the thing [The Inheritance](piece_the_inheritance.md) bounds without ever reducing to zero.
