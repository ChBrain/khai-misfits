---
khai: pitch
title: "Nothing Dropped"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Pitch: Nothing Dropped

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The default key the whole production is read in.

## Owner

- Project: khai-misfits

## Tenor

Generous, well-provisioned, reasonable.
A network that would rather hold a packet than throw it away, its buffers made deep because memory is cheap and a dropped packet looks like waste.
Nothing false in it: a buffer is exactly the right thing to absorb a burst, and making it generous is the obvious, defensible call.

## Undertow

Under the generosity, the signal the generosity hides.
Loss is how the sender is told the link is full, so a buffer deep enough never to drop is deep enough to swallow the one word the sender needs, and told nothing, the sender keeps speeding up.
The deep buffer fills to the top and stays full, a standing queue rather than a passing one, and the cushion meant to protect throughput spends the link's responsiveness instead.

## Nerve

The relief of a buffer that never has to drop, and the discovery that the drop it spared was a message:
that every packet held back from the floor was a warning kept from the sender, so the road it reads as clear is a road already full,
and the fix is not to hold more but to let go early, to throw away, on purpose, the work you had the room to keep.

## Echo

After the run: a link whose throughput reads full and whose every packet crosses seconds of standing queue, a call stuttering and a click hung while the numbers look healthy (Gettys and Nichols).
And the one correction that shortens the queue, dropping or marking packets early so the sender is told in time to slow (Nichols and Jacobson),
a discipline that runs against the cheap-memory instinct, must be built into the bottleneck before the fact, and was for years harder to turn on than the bloat was to bear.
