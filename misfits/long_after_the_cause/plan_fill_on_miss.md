---
khai: plan
title: "Fill on Miss"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
status: active
---

# Plan: Fill on Miss

## Taxonomy

A **standing plan**: the intent of [the cache's seat](position_cache.md), inside [Long After the Cause](play_long_after_the_cause.md).

## Owner

- Owner: [Cache](position_cache.md)

## Direction

Serve what you hold and fetch what you lack. On a miss, go through to the backend for the answer and keep it for next time, because that is the entire contract of the seat and a cache that declined to fetch would be a cache that never warms and never serves. Do not throttle your own filling on a judgement about backend health: the seat has no such judgement to make, and withholding fetches would only guarantee the coldness continues.

## Orders

([The Cache](persona_the_cache.md) sends every miss through [Missing](process_missing.md) at [the Queue](place_the_queue.md) to [the Backend](persona_the_backend.md), and holds each answer that returns.)

## Implementation

([The Queue](place_the_queue.md) is where the misses land as backend load; [Missing](process_missing.md) multiplies that load by the factor the warm cache normally divided it by, and because the backend is now too saturated to return answers in time, the fetches do not complete fast enough for the store to warm, so the coldness that generates the load is sustained by the load it generates.)

## Targets

- [ ] every miss is sent through, since the seat cannot serve what it does not hold
- [ ] each returned answer is stored, so the store warms as fast as returns allow
- [ ] no fetch is withheld on a judgement about backend health the seat cannot make
- [ ] the contract is kept exactly, whether or not keeping it is what prevents the store warming
