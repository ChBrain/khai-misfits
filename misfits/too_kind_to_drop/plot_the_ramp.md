---
khai: plot
title: "The Ramp"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: The Ramp

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md)

## Owner

- Project: khai-misfits

## Cue

[The Bottleneck](place_the_bottleneck.md), the congested link, its capacity being claimed step by step by a single well-behaved flow.

## Action

[Filling](process_filling.md): [The Sender](persona_the_sender.md), holding [the sender's seat](position_sender.md), on [Fill the Pipe](plan_fill_the_pipe.md), raises its rate window by window, carrying [The Signal](piece_the_signal.md) as the one reading it is waiting on.

## Stage

The Sender adds to its rate a little at a time, taking whatever capacity the link will give, exactly as end-to-end congestion control is built to do (Jacobson). It listens for one instruction only: a packet lost, the sign that the link is full and it should back off. None has come. The link fills toward capacity, the Sender still climbing, still correct by its own design, doing nothing that a well-run flow should not.

## Tension

Nothing has failed yet: the Sender is behaving exactly as intended, and a link taken to full use is the outcome congestion control is meant to produce. But the climb has no brake except the one signal it is owed, and that signal has not arrived, so the ramp keeps going past the point where the buffer beneath it starts to matter.
