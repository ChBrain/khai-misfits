---
khai: plan
title: "Dispatch the Cheapest First"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-31"
status: active
---

# Plan: Dispatch the Cheapest First

## Taxonomy

A **standing plan**: the intent of [the operator's seat](position_operator.md), inside [Best Day for It](play_best_day_for_it.md).

## Owner

- Owner: [Operator](position_operator.md)

## Direction

Meet the demand at the lowest cost the bids allow. Stack them, take the cheapest first, and clear where the stack runs out. Accept a bid of zero from a plant with no fuel, because zero is a true statement of its marginal cost and refusing it would mean dispatching a dearer plant on purpose. Hold no view on any technology and no interest in any generator's returns, since the moment this seat starts weighing outcomes it stops being a merit order and starts being a policy. Expect the clearing price to sit at the bottom of the stack in exactly the hours the zero-cost fleet is running, and report it accurately. Do not attempt to weight when the power arrives: a merit order is a ranking by cost and contains no other term, and adding one would break the mechanism that keeps system costs down for everybody.

## Orders

([The Operator](persona_the_operator.md) clears through [Clearing](process_clearing.md) at [the Merit Order](place_the_merit_order.md), setting [the Zero Bid](piece_the_zero_bid.md).)

## Implementation

([The Merit Order](place_the_merit_order.md) is where two correct behaviours become one clearing price; [Clearing](process_clearing.md) is the arithmetic that puts the price at the bottom of the stack in the fleet's own hours.)

## Targets

- [ ] the bids are stacked by cost and the cheapest are taken first
- [ ] a zero bid from a fuel-free plant is accepted as a true marginal cost
- [ ] no view on any technology and no interest in any generator's returns enters the dispatch
- [ ] the clearing price is reported accurately, including in the hours it sits at the bottom
- [ ] no term for when the power arrives is added, since that would stop this being a merit order
