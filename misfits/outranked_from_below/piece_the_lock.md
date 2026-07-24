---
khai: piece
title: "The Lock"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Lock

## Taxonomy

[Outranked from Below](play_outranked_from_below.md). The shared resource, held atomically and by exactly one task at a time, that the Foremost's work requires.

## Owner

- Project: khai-misfits

## Place

Taken by [The Holder](persona_the_holder.md) inside [The Critical Section](place_the_critical_section.md), on [Hold and Release](plan_hold_and_release.md).
Needed by [The Foremost](persona_the_foremost.md), whose reach for it and refusal is [The Handover](plot_the_handover.md); its exclusivity is what [Blocking](process_blocking.md) runs on.

## Load Bearing

Mutual exclusion on a shared resource means no task, however highly ranked, may take it from whoever holds it while a use is in progress (Sha, Rajkumar, and Lehoczky). That single correctness requirement is the whole reason the Foremost must wait rather than seize: the lock does not consult rank, only occupancy, so its exclusivity is the fixed point the entire inversion pivots on, the one place where being highest counts for nothing. Guard against reading the lock as the fault: it is doing exactly what a lock must, hold one owner and admit no other, and every downstream distortion is built from that correctness, not from any failure in it.

## Apparent

A small technical gate, open or shut, the kind of device too minor to matter next to the ranks contending over it.
It reads as incidental machinery, the plumbing beneath the real drama of who outranks whom, and that smallness is exactly what hides how much the whole misfit depends on it holding firm.

## Yearbook

Guarded by [the Holder](persona_the_holder.md) on [Hold and Release](plan_hold_and_release.md), reached for by [the Foremost](persona_the_foremost.md) on [Take What I Need](plan_take_what_i_need.md), the object [The Handover](plot_the_handover.md) turns on.
It grounds [Blocking](process_blocking.md) and stands underneath [The Inversion](piece_the_inversion.md): without its exclusivity there is no wait for [The Middle](persona_the_middle.md) to lengthen, and [The Inheritance](piece_the_inheritance.md) works only because the lock, and nothing else, marks where the borrowed rank must apply.
