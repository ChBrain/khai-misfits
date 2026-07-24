---
khai: position
title: "Sender"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Position: Sender

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The seat of the congestion-control endpoint, which meters itself to a link it cannot see by raising its rate until a packet is lost, and is told nothing while the deep buffer holds the loss.

## Owner

- Project: khai-misfits

## Has

One instrument and no direct view: the ability to raise or lower its sending rate, and a single reading of the link ahead, the loss of its own packets.
An honest method: with no sight of the link, probing upward until loss and backing off is the only way an endpoint can find the capacity, and it is exactly how congestion control is built (Jacobson).
No reading at all when the loss is withheld, so the seat that regulates on loss is blind precisely when a deep buffer refuses to produce one.

## Orders

Fill the pipe.
Raise the rate to use all the capacity there is, watching for the loss that marks the ceiling, and back off when it comes, then probe upward again.
Trust the road you can read: if no loss returns, take the way as clear and keep speeding up, because that is the only signal the design gives you to obey.

## Loses

The one signal it steers by, swallowed before it arrives.
Because its whole self-regulation rides on loss and the deep buffer holds the loss back, the seat reads a clear road that is already full, and keeps ramping into a buffer it cannot see until that buffer stands full to the top.
It behaves correctly throughout and is misled throughout, losing not its discipline but the truth its discipline needed.

## Drives

Toward a well-behaved flow ramping into a standing queue,
told nothing because the losses that would check it are held back in kindness,
so the seat built to meter itself to the link becomes the engine that fills it, correct in every step and blind in the one that counts.
