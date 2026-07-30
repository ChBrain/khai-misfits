---
khai: persona
title: "The Operator"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
type: archetype
---

# Persona: The Operator

## Taxonomy

[Operator](position_operator.md). The one who must starve the loop by refusing traffic the machines could have served, the only move that lifts the system back to the upper floor.

## Owner

- Project: khai-misfits

## Projection

Calm and methodical, working an incident by the book: check the trigger, confirm it has passed, watch for recovery.
Reads as the right person in the chair, since the discipline of not acting hastily on a system that is already recovering is a real and hard-won discipline.
No error on show: waiting for a passed spike to drain is exactly the correct response to almost every incident that looks like this one.

## Action

Runs [Shed the Load](plan_shed_the_load.md): through [Shedding](process_shedding.md) at [the Console](place_the_console.md), refuses a large share of arriving requests at the edge, drains the dead work, and turns the retries off, holding [the Boundary](piece_the_boundary.md) until the loop starves.
Cannot solve it by finding the fault, since there is no fault, and every component would pass its own tests at the moment it is looking at them.
Does the one thing that works, and does it against instinct: denying service the machines are physically capable of providing, harder and for longer than the situation appears to warrant.

## Shadow

Not slow: the reading that would explain the outage, that the system is now holding itself down, is not one the graphs display, and the belief that a queue being worked will drain is correct almost every other time it is held.
Because the correct move looks exactly like giving up, refusing users that could be served while the machines sit ready, its right action is the one hardest to justify at the moment it must be taken, and hesitation costs the whole of the delay.
It is the only remedy the play allows, and it is bounded on every side.

## Tell

Reaches for the cause first and finds it already gone, then reaches for the broken component and finds none, before reaching last for the lever that actually moves the system.
Cannot know in advance how hard to shed, since the recovery threshold is not displayed anywhere, so anything short of far enough leaves the loop fed and reads as the shedding having failed.
