---
khai: piece
title: "The Trigger"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Piece: The Trigger

## Taxonomy

[Held Under](play_held_under.md). The transient cause: the brief spike, pause, or stall that tips the system past the threshold and is gone before the failure it opens has even peaked.

## Owner

- Project: khai-misfits

## Place

Laid down on [The Steady State](place_the_steady_state.md), the one place healthy enough to have a threshold to cross. It is not issued anywhere downstream: by the time [The Queue](place_the_queue.md) is filling with retries, the Trigger has already left, its whole contribution spent in the instant it took to pass.

## Load Bearing

It is load bearing as the entry event, not the cause of what follows: a healthy system rests in a good equilibrium with a bad one latent beneath it, separated by a threshold ordinary operation never crosses, and the Trigger is whatever crosses it once, brief and often minor, needing no severity and no duration to tip the system into the metastable failure state (Bronson, Charapko, Aghayev, and Zhu). It carries the finding that the size of the perturbation is not proportional to the size of the outage it opens: the framework's whole point is that a small, ordinary transient is sufficient, because what matters is not the push but the state the push finds waiting on the other side of the line.

## Apparent

Looks like the incident itself: the blip in the logs, the one-second latency spike, the thing a postmortem reaches for first. It reads as though finding it and fixing it would end the story.

## Yearbook

Laid down by [The Surge](persona_the_surge.md) through [Triggering](process_triggering.md), and gone by the time [Retrying](process_retrying.md) has produced [The Retry](piece_the_retry.md) even once. It hands off to nothing: what it opens, [The Metastable State](piece_the_metastable_state.md), is held from that point on entirely by [The Sustaining Load](piece_the_sustaining_load.md), so the Trigger's whole legacy is the door it left open on its way out.
