---
khai: process
title: "Filling"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Process: Filling

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). Run by [the Sender](persona_the_sender.md) on [Fill the Pipe](plan_fill_the_pipe.md), at [The Bottleneck](place_the_bottleneck.md), inside [The Ramp](plot_the_ramp.md).

## Owner

- Project: khai-misfits

## Initiated by

Any headroom the last loss signal left unclaimed: congestion control raises its rate additively as long as none is reported (Jacobson), so Filling starts the moment [the Loop](place_the_loop.md) last reported clear and does not stop on its own.

## Direction

Upward, one increment at a time, for as long as [Hiding](process_hiding.md) keeps the Loop reporting clear: each round trip without loss licenses another increase, so the rate keeps climbing past what the link can drain and into what [The Buffer](piece_the_buffer.md) must absorb instead.

## Lever

The additive-increase rule of end-to-end congestion control, raise until told to stop (Jacobson, 1988): a sender behaving exactly as designed, reading silence as permission, with no way to tell a queue that is draining from one filling toward the top.

## Echo

Pressure that does not stop at the buffer's mouth: once [The Buffer](piece_the_buffer.md) has no more room to give, the same climbing rate that Filling sustained becomes [The Standing Queue](piece_the_standing_queue.md), the object [Bloating](process_bloating.md) carries forward.
