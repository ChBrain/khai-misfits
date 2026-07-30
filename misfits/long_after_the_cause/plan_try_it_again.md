---
khai: plan
title: "Try It Again"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
status: active
---

# Plan: Try It Again

## Taxonomy

A **standing plan**: the intent of [the caller's seat](position_caller.md), inside [Long After the Cause](play_long_after_the_cause.md).

## Owner

- Owner: [Caller](position_caller.md)

## Direction

Reissue what timed out. A request that failed may well succeed on a second attempt, since timeouts are often transient and the cost of one more try is small against dropping the user's work entirely. Follow the guidance as written and the default configuration as shipped, because both are right about the single request in front of you, which is the only thing you can see. Judge nothing about the service's capacity to bear the attempt: that is not knowledge this seat is given, and no correct client withholds a retry on a guess about it.

## Orders

([The Caller](persona_the_caller.md) reissues through [Retrying](process_retrying.md) at [the Fleet](place_the_fleet.md), each attempt adding to the load arriving at [the Queue](place_the_queue.md).)

## Implementation

([The Fleet](place_the_fleet.md) is where the retries originate, one per timed-out request per caller, with no caller aware of the others; the reissued requests arrive at [the Queue](place_the_queue.md) as fresh load indistinguishable from first attempts, so each failure returns as two or three and [the Loop](piece_the_loop.md) is fed.)

## Targets

- [ ] every timed-out request is reissued, since abandoning it on one failure is the defective behaviour
- [ ] the documented guidance and shipped defaults are followed as written
- [ ] no retry is withheld on a guess about the service's capacity, which this seat cannot see
- [ ] correctness is held per request, the only unit this seat is able to hold it in
