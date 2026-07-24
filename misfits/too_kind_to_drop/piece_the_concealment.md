---
khai: piece
title: "The Concealment"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Concealment

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The core mechanism: an oversized buffer swallowing the loss signal so the sender never sees it and never backs off.

## Owner

- Project: khai-misfits

## Place

Produced by [Hiding](process_hiding.md), worked by [The Keeper](persona_the_keeper.md), at [The Loop](place_the_loop.md), where sender and bottleneck are joined by a single feedback path.

## Load Bearing

This is the hinge the staging turns on: the same depth that lets the buffer absorb a burst also lets it absorb the loss the sender is waiting for, so a packet that would have been dropped, and read, is instead queued, and unread (Gettys and Nichols). Nothing is broken and nothing malfunctions; the signal is generated and then sits behind a full buffer, present but withheld from the loop that needs it, which is why the sender keeps ramping into a link that, from where it stands, still reads clear. Guard against calling this a loss of the signal: it is a concealment of a signal that still exists, produced but undelivered, and that distinction is what the whole misfit rests on.

## Apparent

It looks like the buffer working exactly as designed, no drop, no complaint, a link that appears to be handling everything asked of it. The very absence of loss, the thing the buffer was built to deliver, is what makes the concealment invisible from either end.

## Yearbook

Made of [The Buffer](piece_the_buffer.md) grown too deep, produced through [Hiding](process_hiding.md) by [The Keeper](persona_the_keeper.md) on [Never Drop](plan_never_drop.md); it withholds [The Signal](piece_the_signal.md) from [The Sender](persona_the_sender.md), and its only undoing is [The Drop](piece_the_drop.md).
