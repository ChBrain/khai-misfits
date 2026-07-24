---
khai: place
title: "The Bottleneck"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Place: The Bottleneck

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The congested link where capacity is least and the queue physically forms, the choke point every packet in the flow must cross. Hosts [The Ramp](plot_the_ramp.md), [The Stall](plot_the_stall.md), and [The Good Queue](plot_the_good_queue.md).

## Owner

- Project: khai-misfits

## Shown

A link carrying traffic at its rated capacity, throughput readings full and steady: on the meter the connection looks fine, saturated but not broken. Nothing on that meter distinguishes a burst passing through from a queue that has stopped draining.

## Holds

[The Buffer](piece_the_buffer.md), placed here to absorb short bursts, holding whatever [the Sender](persona_the_sender.md) has put in flight: while it drains between bursts, [The Good Queue](plot_the_good_queue.md) that [Filling](process_filling.md) produces; once it stops draining, [The Standing Queue](piece_the_standing_queue.md) that [Bloating](process_bloating.md) produces, the same memory, only no longer emptying.

## Offers

Bandwidth, spent in full: every packet that crosses eventually gets through, and the throughput counter never confesses what queuing delay a packet paid to get there. The Bottleneck offers capacity, not timing.

## Withheld

Any sign, at the link itself, of how full the buffer is or how long a packet has waited inside it. The Bottleneck shows what has crossed, not what is queued, so the same "link healthy" reading covers both [The Ramp](plot_the_ramp.md) draining cleanly and [The Stall](plot_the_stall.md) sitting full. What changed sits in [Hiding](process_hiding.md), on the return path to [the Sender](persona_the_sender.md), not in anything visible here.
