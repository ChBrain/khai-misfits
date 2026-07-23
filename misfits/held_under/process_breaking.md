---
khai: process
title: "Breaking"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Process: Breaking

## Taxonomy

[Held Under](play_held_under.md). The forced interruption of [Sustaining](process_sustaining.md), run by [the Operator](persona_the_operator.md) on [Trip the Breaker](plan_trip_the_breaker.md), at [the Dashboard](place_the_dashboard.md), in [The Trip](plot_the_trip.md).

## Owner

- Project: khai-misfits

## Initiated by

[The Collapse](piece_the_collapse.md) read plainly on [the Dashboard](place_the_dashboard.md): goodput near zero, offered load still high, and no sign, across however many cycles, that the pattern is going to resolve on its own.

## Direction

Toward the loop's forcible interruption. The Operator trips [the Breaker](piece_the_breaker.md) so failing calls fail fast instead of waiting out a timeout and being retried; callers are told to back off with jitter rather than reattempt immediately; load is shed outright where the sum still runs over capacity (Nygard; Jacobson). Each measure removes demand from the total by a different route, and together they are aimed at one number: pushing requests plus retries back under what [the Service](persona_the_service.md) can actually clear.

## Lever

The only way to stop a loop made of correct behaviour is to refuse some of the behaviour, on purpose, from outside it. Failing fast rejects calls that a healthy Service would have completed; shedding load drops real requests from real users; backoff delays work that was owed promptly. None of this is free and none of it is a rescue that costs nothing: it is a deliberate loss, taken because the alternative is the loop holding indefinitely.

## Echo

The two lines on [the Dashboard](place_the_dashboard.md) beginning to separate the other way, goodput lifting as load falls, and behind that recovery, an uncounted set of requests that would have succeeded and were refused anyway, to make the recovery possible.
