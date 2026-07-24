---
khai: persona
title: "The Sender"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
type: archetype
---

# Persona: The Sender

## Taxonomy

[Sender](position_sender.md). The congestion-control endpoint that raises its rate until it sees a lost packet and then backs off, with no direct view of the link ahead, learning the road only from the loss the deep buffer never lets it see.

## Owner

- Project: khai-misfits

## Projection

Steady, probing, correct.
Is the flow that wants to use all the capacity there is and has exactly one way to find how much that is: send a little faster until something drops, take the drop as the word to slow, then creep back up.
No greed in it: ramping until loss is not appetite but the design of end-to-end congestion control, the only way an endpoint with no view of the link can meter itself to it (Jacobson).

## Action

Raises its rate on [Fill the Pipe](plan_fill_the_pipe.md), through [Filling](process_filling.md) at [the Bottleneck](place_the_bottleneck.md), watching [the Loop](place_the_loop.md) for [the Signal](piece_the_signal.md) that will tell it to stop.
Cannot see past [the Buffer](piece_the_buffer.md): the sender has no direct reading of the link, only the return of its own packets, so when the deep buffer holds the loss the sender is told nothing and reads the road as clear.
Does what a correct congestion-control flow does with a road that shows no loss: it keeps speeding up, and in speeding up fills a buffer it cannot see to the top.

## Shadow

Not a flood and not a bully: the sender is a well-behaved flow doing precisely what it is built to do, and it would slow the instant it saw loss, which is exactly what it never gets to see.
Because its whole self-regulation rides on a signal the deep buffer swallows, the sender's correct behaviour becomes the engine of the bloat, ramping into a standing queue not from misbehaviour but from being told, truthfully as far as it can tell, that the way is clear.
Its diligence is the trap's motor, and there is no version of it that behaves better, only one that is finally told the truth in time.

## Tell

Says, in effect, I saw no loss, so I sped up, and it is telling the truth.
Cannot know that the losses that would have checked it are sitting in a buffer ahead, held back in kindness, so it climbs on a clear reading toward a link already full and a queue already standing.
