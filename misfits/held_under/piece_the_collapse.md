---
khai: piece
title: "The Collapse"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Piece: The Collapse

## Taxonomy

[Held Under](play_held_under.md). The visible failure: goodput falling toward zero while offered load stays high, the throughput that drops as the retries climb.

## Owner

- Project: khai-misfits

## Place

Read on [The Dashboard](place_the_dashboard.md), where the request count and the completed-work count are plotted against each other and diverge: load at the ceiling, goodput at the floor. It is the only piece of the six visible from outside [The Queue](place_the_queue.md) without instrumenting the retries themselves.

## Load Bearing

It is load bearing as the empirical shape, the pattern that lets the state be recognized from its symptom before its cause is understood: this is the classic congestion collapse, in which dropped requests provoke reattempts that deepen the congestion until throughput falls to almost nothing even as offered load remains high (Nagle; Jacobson and Karels). The precise reading matters and must not be overclaimed: the Collapse looks exactly like ordinary overload on a graph, request volume up, useful work down, but the demand producing that shape is mostly retries of work already failed, effort spent re-asking rather than doing, which is why capacity alone does not fix it the way it would fix ordinary overload.

## Apparent

Reads as the system being slammed, buried under demand, the natural conclusion anyone glancing at rising request counts and falling completions would draw. This is the piece most likely to mislead its own operators, because it looks like too much traffic when it is mostly the same traffic, failed and resent.

## Yearbook

Produced as the readable trace of [The Sustaining Load](piece_the_sustaining_load.md) holding [The Metastable State](piece_the_metastable_state.md) open, surfaced by [Sustaining](process_sustaining.md) onto [The Dashboard](place_the_dashboard.md). It is what [The Operator](persona_the_operator.md) reads before reaching for [The Breaker](piece_the_breaker.md) through [Breaking](process_breaking.md): the Collapse is the evidence, the Breaker is the response to it.
