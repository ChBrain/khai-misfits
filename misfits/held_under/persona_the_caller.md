---
khai: persona
title: "The Caller"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
type: archetype
---

# Persona: The Caller

## Taxonomy

[Calling](position_calling.md). The well-behaved client that resends a failed request exactly as a good client should, whose correct recovery, summed across thousands like it, is the load that holds the service under.

## Owner

- Project: khai-misfits

## Projection

Correct. Resilient. Trying again.
Is the client built the right way, the one that does not give up on a failed call but reattempts it, because a request that failed on a transient fault is exactly the kind that should be sent again.
No malice in it and no fault: only a client recovering from a failure the way every robust client is designed to, one reattempt that is plainly the right move.

## Action

Retries the failed request, on [Keep Retrying](plan_keep_retrying.md), sending it again because a good client does not abandon a call that failed on a passing fault.
Issues [the Retry](piece_the_retry.md) through [Retrying](process_retrying.md), and its retry, summed with every other client's, becomes [the Sustaining Load](piece_the_sustaining_load.md) that holds the service failing.
Does what a well-behaved client does when a call fails: sends it again, and again, each attempt individually right and none of them the fault.

## Shadow

Not a client hammering the system, a client recovering correctly, and that is the difficulty: no single retry is wrong, and the sum of them is the whole disaster.
Because the right response to a failed request is to retry it, and the service is failing requests, the Caller retries, and its correct recovery joins a thousand others into a load above capacity that causes the failures it is recovering from, so the more faithfully it does the right thing the more surely the service stays down.
It recovers exactly as designed, and recovering exactly as designed is the load.

## Tell

Says, in effect, "the call failed, so I will try it again," which is correct.
Cannot see, from where it sits, that its single reasonable reattempt is one unit of a storm, that the failure it is politely recovering from is the failure its recovery is feeding, and that the right thing done by everyone at once is what holds the service under.
