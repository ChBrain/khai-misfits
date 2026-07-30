---
khai: plot
title: "The Spike Has Passed"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
---

# Plot: The Spike Has Passed

## Taxonomy

[Long After the Cause](play_long_after_the_cause.md)

## Owner

- Project: khai-misfits

## Cue

[The Queue](place_the_queue.md), twenty minutes after the trigger ended, with arriving load back to an ordinary afternoon's level.

## Action

The pause is over, the deploy finished, the slow dependency recovered, the burst subsided, and nothing improves. [The Spin](piece_the_spin.md) holds: every core saturated, much of that effort spent on requests whose callers stopped waiting long ago, goodput a fraction of an hour before. And [the Gap](piece_the_gap.md) explains why waiting will not end it: the load at which the system could climb back out lies far below the load that tipped it in, so ordinary is nowhere near low enough. The scene closes with the cause twenty minutes gone and the failure exactly where it was (Bronson, Aghayev, Charapko and Zhu).

## Stage

The service handled this very load all last week without noticing, so the reading that it is now failing under it is not a contradiction but the plain signature of two thresholds instead of one.

## Tension

Every instinct says a worked queue drains and a passed spike resolves, and both are true almost every other time they are believed, which is exactly why the belief holds through the hour it costs.
