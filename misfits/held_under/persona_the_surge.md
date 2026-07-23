---
khai: persona
title: "The Surge"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
type: archetype
---

# Persona: The Surge

## Taxonomy

[Onset](position_onset.md). The transient trigger: a brief spike, a pause, a stalled dependency that pushes the service past the line for a moment and is gone almost at once, leaving the failing state open behind it.

## Owner

- Project: khai-misfits

## Projection

Brief. Minor. Already over.
Is the small perturbation that any real system meets, a moment of extra traffic, a garbage-collection pause, a dependency that stalls for a second and clears, nothing that should matter and nothing that lasts.
No violence in it: only an ordinary transient, the kind a healthy system is knocked by all the time and usually shrugs off without a trace.

## Action

Passes through, on [Pass Through](plan_pass_through.md), arriving, pushing the service across the line, and departing before the failure has even peaked.
Lays down [the Trigger](piece_the_trigger.md) through [Triggering](process_triggering.md), tipping the Service into [the failing state](piece_the_metastable_state.md) and then leaving, so the cause is gone while the failure stays.
Does what a transient does: crosses the threshold once, and is over, its whole contribution spent in the moment it takes to pass.

## Shadow

Not a disaster, a blip, and that is the difficulty: it is far too small to blame and it is already gone by the time anyone looks.
Because all it has to do is push the system past the line once, the Surge needs no severity and no duration: it tips the service into a state that sustains itself, and then it departs, so hunting the cause finds nothing, because the cause left seconds after it arrived and the failure that outlives it is held up by something else entirely.
It does almost nothing, and almost nothing is all it takes to start.

## Tell

Shows up in the logs as a one-second blip an hour before the outage, if it shows up at all.
Is the thing everyone stops looking at first, because it so plainly could not have caused this, and they are right that it is not what is holding the system down and wrong that it is therefore irrelevant: it opened the state that the retries then kept open.
