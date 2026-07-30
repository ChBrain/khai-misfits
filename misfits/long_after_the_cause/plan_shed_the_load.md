---
khai: plan
title: "Shed the Load"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
status: active
---

# Plan: Shed the Load

## Taxonomy

A **standing plan**: the intent of [the operator's seat](position_operator.md), inside [Long After the Cause](play_long_after_the_cause.md).

## Owner

- Owner: [Operator](position_operator.md)

## Direction

Starve the loop. Refuse a large share of arriving requests at the edge, drain the queues of work whose callers have gone, and turn the retries off, holding all of it until the arriving load falls below the recovery threshold and the system climbs back. Go harder and hold longer than the situation appears to warrant, because the recovery threshold sits far below the load that caused the failure and is displayed nowhere, so anything short of far enough leaves the loop fed and reads, wrongly, as the shedding having failed. Accept the price plainly: this denies service the machines are physically able to provide, and no cheaper lever reaches the loop.

## Orders

([The Operator](persona_the_operator.md) sheds through [Shedding](process_shedding.md) at [the Console](place_the_console.md), holding [the Boundary](piece_the_boundary.md) against [the Spin](piece_the_spin.md).)

## Implementation

([The Console](place_the_console.md) is where the edge levers are pulled; [Shedding](process_shedding.md) removes enough arriving load that the amplified work falls under what the capacity can clear, at which point [the Loop](piece_the_loop.md) starves and the system returns to the upper state, the standing alternatives, budgeted retries, capped queues, and carried headroom, each a recurring bill against a rare day and none of them removing the lower state.)

## Targets

- [ ] arriving load is cut below the recovery threshold, not merely below the trip threshold
- [ ] dead work is drained rather than served, and retries are disabled while shedding holds
- [ ] the shedding is held longer than instinct suggests, since partial shedding leaves the loop fed
- [ ] the price is named and not hidden: users the machines could have served are refused
