---
khai: plan
title: "Fill the Pipe"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Fill the Pipe

## Taxonomy

A **standing plan**: the intent of [the sender's seat](position_sender.md), inside [Too Kind to Drop](play_too_kind_to_drop.md).

## Owner

- Owner: [Sender](position_sender.md)

## Direction

Use all the capacity there is by raising the rate until a packet is lost, taking that loss as the ceiling and backing off, then probing upward again. With no direct view of the link, trust the only reading the design gives you: if no loss returns, the road is clear, so keep speeding up, and let loss, when it comes, be the word to slow.

## Orders

([The Sender](persona_the_sender.md) raises its rate through [Filling](process_filling.md), watching [the Loop](place_the_loop.md) for [the Signal](piece_the_signal.md), and finding none, keeps climbing and fills [the Buffer](piece_the_buffer.md) it cannot see.)

## Implementation

([The Bottleneck](place_the_bottleneck.md) is where the rate meets the link's limit; the [filling](process_filling.md) process climbs while no loss returns, so a sender correctly metering itself on loss ramps on a clear reading straight into [the Buffer](piece_the_buffer.md), which the deep queue holds full rather than dropping, hiding the ceiling the sender was probing for.)

## Targets

- [ ] the rate is raised to use all available capacity, exactly as congestion control is built to do
- [ ] loss is watched for as the one signal that marks the ceiling and calls for backing off
- [ ] with no loss returned, the road is read as clear and the rate keeps climbing
- [ ] the climb fills a buffer the sender cannot see, correct in every step and misled by the silence
