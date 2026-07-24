---
khai: piece
title: "The Standing Queue"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Piece: The Standing Queue

## Taxonomy

[Too Kind to Drop](play_too_kind_to_drop.md). The buffer filled and staying full at the congested link, a persistent backlog rather than a transient one.

## Owner

- Project: khai-misfits

## Place

Produced by [Bloating](process_bloating.md) at [The Bottleneck](place_the_bottleneck.md); borne behind by [The Interactive](persona_the_interactive.md); bounded, when it is bounded, by [The Drop](piece_the_drop.md).

## Load Bearing

A burst that fills a buffer and drains is doing exactly the job the buffer was built for, a good queue (Nichols and Jacobson). What The Concealment produces is different in kind, not degree: the buffer fills, the sender never backs off, and the queue stays full, a bad queue that never drains because nothing tells the source to stop feeding it (Gettys and Nichols). The Standing Queue is load bearing as the visible shape of the failure, the moment a burst absorbed becomes a backlog that persists, the object every later packet has to cross. Guard against reading depth alone as the problem; a deep buffer that empties is still doing its job, it is the queue's refusal to drain that marks it standing.

## Apparent

It looks the same as a healthy queue at a glance, memory in use at a busy link, exactly what the buffer was provisioned for. Nothing about a full buffer announces on its own whether it is draining or stuck.

## Yearbook

Grown from [The Buffer](piece_the_buffer.md) through [Filling](process_filling.md) and [Bloating](process_bloating.md), it hides behind [The Concealment](piece_the_concealment.md); it produces [The Latency](piece_the_latency.md), is borne by [The Interactive](persona_the_interactive.md), and is bounded only by [The Drop](piece_the_drop.md).
