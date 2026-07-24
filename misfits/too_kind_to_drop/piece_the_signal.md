---
khai: piece
title: "The Signal"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Signal

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The loss, and the delay a filling buffer adds, that end to end congestion control reads as its one instruction to slow down.

## Owner

- Project: khai-misfits

## Place

Watched for by [The Sender](persona_the_sender.md) along [The Loop](place_the_loop.md); swallowed there by [The Concealment](piece_the_concealment.md); handed back by [The Drop](piece_the_drop.md) through [Culling](process_culling.md).

## Load Bearing

End to end congestion control has no other channel: a sender additively raises its rate until it sees loss, then backs off, and that loss, with the delay accompanying it, is the entire feedback the loop runs on (Jacobson). The Signal is load bearing because the whole mechanism turns on whether it arrives: read, the sender backs off; withheld, it does not, and nothing else in the system tells it to. Guard against treating the signal as absent when the buffer is oversized; it is generated exactly as before, only concealed, present but never delivered (Gettys and Nichols).

## Apparent

It looks like an event that simply has not happened yet, an interruption still owed rather than a channel already closed. A sender still climbing reads as a sender still unobstructed, not one whose feedback has been quietly cut off.

## Yearbook

Concealed by [The Concealment](piece_the_concealment.md) at [The Loop](place_the_loop.md); its absence from [The Sender](persona_the_sender.md)'s view is what lets [Filling](process_filling.md) run unchecked into [The Standing Queue](piece_the_standing_queue.md). Restored only by [The Drop](piece_the_drop.md).
