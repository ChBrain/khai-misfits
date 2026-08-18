---
khai: persona
title: "The Scheduler"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-18"
type: archetype
---

# Persona: The Scheduler

## Taxonomy

[Scheduler](position_scheduler.md). The one who subtracts two timestamps and expects a duration.

## Owner

- Project: khai-misfits

## Projection

A log, a queue, a lock with a timeout on it, and two events that must be put in order.

## Action

Takes the difference of two times and treats it as an interval.
Assumes the count only ever goes up.

## Shadow

Assumed the thing the word means, and that is the whole of the mistake.
A second is a unit of duration, a count of them is a measurement, and a measurement that can run backwards is not one. Nobody wrote this down as an assumption because nobody had met a clock that did otherwise, and no amount of care would have surfaced it: it is not a corner case of the design, it is the definition the design was built on.

## Tell

Breaks on a minute that has an extra second in it, having done nothing wrong.
