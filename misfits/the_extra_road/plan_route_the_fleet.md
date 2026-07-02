---
khai: plan
title: "Route the Fleet"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-01"
status: active
---

# Plan: Route the Fleet

## Taxonomy

A **standing plan**: the intent of [the dispatcher's seat](position_dispatcher.md), inside [The Extra Road](play_the_extra_road.md).

## Owner

- Owner: [Dispatcher](position_dispatcher.md)

## Direction

Send every driver by the shortest path the model names. Optimise each trip in isolation and trust the sum to itself, at whatever scale the fleet reaches.

## Orders

(The Dispatcher routes the whole fleet down the new link at once, turning a million private choices into one coordinated rush.)

## Implementation

([The Map](place_the_map.md); the [rerouting](process_rerouting.md) process; one shortest-path rule applied to every trip, blind to the load it creates.)

## Targets

- [ ] every trip is routed by the model's shortest path
- [ ] the same link is named quickest for all at once
- [ ] the load the routing pours onto that link is not modelled
- [ ] the selfish route is scaled into an instruction
