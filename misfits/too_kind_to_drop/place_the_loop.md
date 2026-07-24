---
khai: place
title: "The Loop"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Place: The Loop

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The end-to-end feedback path the congestion signal must close, from the filling buffer back to [the Sender](persona_the_sender.md) that set the rate. Hosts [The Swallowed Signal](plot_the_swallowed_signal.md).

## Owner

- Project: khai-misfits

## Shown

A connection that, from the sending end, looks clean: acknowledgments arriving, no loss reported, every probe answered. The Loop shows the sender exactly what has come back to it, nothing more.

## Holds

[The Signal](piece_the_signal.md), whenever it completes the circuit: the loss or the delay that would tell [the Sender](persona_the_sender.md) to back off (Jacobson). While [the Keeper](persona_the_keeper.md) runs [Never Drop](plan_never_drop.md), the Loop instead holds [The Concealment](piece_the_concealment.md), the same circuit carrying nothing back at all.

## Offers

The only channel [the Sender](persona_the_sender.md) has: congestion control reads no other input, so whatever the Loop returns, or fails to return, is the whole of what the sender knows about the link it is filling.

## Withheld

Direct sight of [The Buffer](piece_the_buffer.md). The Loop is round trip only, acknowledgment and timing, never a reading of queue occupancy itself, so a buffer that never drops has no way to report itself full except by finally dropping, which under [Never Drop](plan_never_drop.md) it is built not to do.
