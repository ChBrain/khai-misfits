---
khai: plan
title: "Recompute on Miss"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Recompute on Miss

## Taxonomy

A **standing plan**: the intent of [the request's seat](position_request.md), inside [All at Once](play_all_at_once.md).

## Owner

- Owner: [Request](position_request.md)

## Direction

Read the cache, serve the stored copy where it exists, and where it does not, fetch the value from the backend and write it back. Act alone and correctly, because recomputing a missing value is the whole contract of a cache, and do not wait on peers you cannot see or know are there.

## Orders

([The Request](persona_the_request.md) takes [the Miss](piece_the_miss.md) at [the Front](place_the_front.md) and reaches past the empty entry to [the Backend](persona_the_backend.md), one of the many identical callers doing the same at the same instant through [Flooding](process_flooding.md).)

## Implementation

([The Front](place_the_front.md) treats each request as if it were alone, so the [flooding](process_flooding.md) that follows a miss is nothing for one request and a spike for the crowd, the seat correct and blind, recomputing in good faith at the same instant as all its peers and, summed, becoming [the Stampede](piece_the_stampede.md).)

## Targets

- [ ] the cache is read and the stored copy served wherever it is warm
- [ ] on a miss the value is fetched from the backend and the entry repopulated, the whole correct contract of a cache
- [ ] the request acts alone and blind, with no view of the crowd missing the same entry at the same instant
- [ ] the correctness is entire in each request and the harm entire only in the sum, a flood of blameless recomputations coinciding
