---
khai: plot
title: "The Brownout"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Plot: The Brownout

## Taxonomy

[Held Under](play_held_under.md).

## Owner

- Project: khai-misfits

## Cue

On [The Dashboard](place_the_dashboard.md), throughput is read against offered load. The request count is climbing. The line that should climb with it does not...

## Action

[The Collapse](piece_the_collapse.md) is what the board shows: goodput, the useful work actually completed, falling toward zero while the request count keeps rising. [The Operator](persona_the_operator.md), seated in [Operations](position_operations.md), reads it, watching a system that looks slammed by demand while it completes almost nothing.

## Stage

The Operator knows what is under the number and what is not: the demand climbing on the board is mostly [the Sustaining Load](piece_the_sustaining_load.md), retries of work [the Service](persona_the_service.md) already failed, arriving disguised as new business. The busier the board looks, the less the system is actually finishing, and the two lines, load and goodput, are pulling apart rather than tracking each other the way a merely busy system's would.

## Tension

It reads as being slammed, and it is not being slammed, it is being buried under retries of its own failures. This is the shape of a system doing less the busier it looks, and the board makes that shape visible without yet doing anything about it: no lever has been touched, no breaker thrown, only the reading taken, the number that tells the Operator exactly how deep the hold has gone before deciding what it will cost to end it.
