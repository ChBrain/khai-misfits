---
khai: process
title: "Culling"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Process: Culling

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). Run by [the Manager](persona_the_manager.md) on [Drop Early](plan_drop_early.md), at [The Edge](place_the_edge.md) and [The Bottleneck](place_the_bottleneck.md), inside [The Early Drop](plot_the_early_drop.md) and [The Good Queue](plot_the_good_queue.md).

## Owner

- Project: khai-misfits

## Initiated by

A queue that has stood, not merely passed through: [the Manager](persona_the_manager.md) tracks how long a packet has waited at the head of [The Buffer](piece_the_buffer.md), and once that delay holds above a set target for a sustained interval, acts, rather than waiting for the buffer to run out of room the way [the Keeper](persona_the_keeper.md) does.

## Direction

Toward packets dropped or marked before the buffer fills, not after: active queue management deliberately sacrifices a packet it has room to keep, restoring on purpose the [Signal](piece_the_signal.md) that [Hiding](process_hiding.md) was withholding, so it reaches [the Sender](persona_the_sender.md) while there is still queue left to react in.

## Lever

Controlled-delay active queue management, dropping or marking early to keep the standing queue short (Nichols and Jacobson; antecedent Floyd and Jacobson's Random Early Detection). HEDGE: the drop or mark is chosen to fall on a queue that has stood past the target interval, distinguishing [The Good Queue](plot_the_good_queue.md), a burst still draining, from a standing one, so a genuine burst is left to absorb rather than culled on sight.

## Echo

[The Drop](piece_the_drop.md) taken early, on purpose, against the instinct that built [The Buffer](piece_the_buffer.md) deep in the first place: the queue stays bounded, [the Sender](persona_the_sender.md) reads loss in time to back off, and the buffer that remains still absorbs the burst it was always meant to, nothing abolished, only kept short.
