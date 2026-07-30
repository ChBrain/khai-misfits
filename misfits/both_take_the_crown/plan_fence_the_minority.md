---
khai: plan
title: "Fence the Minority"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
status: active
---

# Plan: Fence the Minority

## Taxonomy

A **standing plan**: the intent of [the architect's seat](position_architect.md), inside [Both Take the Crown](play_both_take_the_crown.md).

## Owner

- Owner: [Architect](position_architect.md)

## Direction

Prevent two heads by letting only a majority act: impose a quorum so at most one side proceeds, and add a fencing token that turns away a stale primary's writes. Accept that this takes the consistency horn of the trade, so on the minority side the correct behaviour becomes to refuse to serve, and the state stays single at the cost of that availability. Do not imagine an escape: the theorem forbids both under a partition, so choose the horn deliberately and pay its price.

## Orders

([The Architect](persona_the_architect.md) imposes the quorum and the fencing through [Fencing](process_fencing.md) at [the Blueprint](place_the_blueprint.md), holding [the Boundary](piece_the_boundary.md) between where a majority holds and where no guard is needed.)

## Implementation

([The Blueprint](place_the_blueprint.md) is where the rule is set; [Fencing](process_fencing.md) lets only the majority act and rejects the stale primary's writes, so at most one head serves and the state stays single, at the cost of availability on the isolated minority.)

## Targets

- [ ] a quorum is imposed so only the majority may act
- [ ] a fencing token turns away the stale primary's writes
- [ ] the minority side correctly refuses to serve while partitioned
- [ ] the state stays single, bought with the availability the theorem makes it spend
