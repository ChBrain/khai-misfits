---
khai: piece
title: "The Inheritance"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Inheritance

## Taxonomy

[Outranked from Below](play_outranked_from_below.md). The remedy: the Foremost's rank lent to the Holder for the span of the critical section, so the Middle can no longer preempt it.

## Owner

- Project: khai-misfits

## Place

Laid by [Lending](process_lending.md), where [The Dispatcher](persona_the_dispatcher.md) raises [The Holder](persona_the_holder.md) to the Foremost's own rank for as long as [The Lock](piece_the_lock.md) stays held.
Applied in [The Lent Rank](plot_the_lent_rank.md), the plot where the borrowed rank is what finally keeps [The Middle](persona_the_middle.md) off [The Core](place_the_core.md).

## Load Bearing

Under priority inheritance, a task blocking a higher-priority task temporarily inherits that task's priority for the duration of the blocking, so no intermediate task can preempt it in the meantime, and the priority ceiling protocol further bounds the blocking to a single critical section and prevents deadlock (Sha, Rajkumar, and Lehoczky; the underlying idea of lending priority to a lock holder was earlier observed in the Mesa system by Lampson and Redell). The Inheritance is load bearing as the only piece in the misfit that ends The Inversion rather than merely measuring or surviving it: it does not change the Order or forbid the Middle from being ready, it changes what rank the Holder is seen to carry while it holds what the Foremost needs. Guard against reading it as a free fix: it must be designed in before the fact, it adds bookkeeping to every shared resource, and it bounds the Foremost's wait to one critical section rather than abolishing the wait altogether.

## Apparent

A courtesy, the Holder handed a rank it did not earn, as if rank could simply be given away on request.
It can look like favoritism toward the lower task or a suspension of the Order itself, when in fact the Order is exactly what is being honored: the Holder is raised only because, holding what the Foremost needs, its own progress has become the Foremost's progress, and the borrowed rank tracks that dependency precisely and only for its duration.

## Yearbook

Laid by [Lending](process_lending.md), carried out in [The Lent Rank](plot_the_lent_rank.md), the rank the Dispatcher grants [the Holder](persona_the_holder.md) drawn from [the Foremost](persona_the_foremost.md).
It is the one thing that closes [The Inversion](piece_the_inversion.md), bounding rather than erasing [The Wait](piece_the_wait.md), and the fix uploaded to the mutex behind [The Reset](piece_the_reset.md) once the flight case named the missing protection.
