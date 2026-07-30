---
khai: position
title: "Caller"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
---

# Position: Caller

## Taxonomy

[Long After the Cause](play_long_after_the_cause.md). The seat of the client that reissues what timed out, correct on every single request and, across the fleet, the engine of the loop.

## Owner

- Project: khai-misfits

## Has

A request that timed out and a documented, default-configured instruction to try it again.
A view of exactly one request at a time, and no model of the fleet issuing the identical retry at the identical moment.
No standing to judge whether the service can bear the attempt, since that is not knowledge a client is given.

## Orders

Try it again: reissue what timed out, since a failed request may well succeed on a second attempt and abandoning the user's work on one timeout is the defective behaviour.
Follow the guidance as written, because the guidance is right about the single request in front of the seat, which is the only thing the seat can see.
Accept what the seat does: that correctness here is defined per request, and that the seat has no vantage from which the sum could be visible.

## Loses

Nothing it can perceive, and that is the shape of it.
Because the cost of the retry falls on a shared backend and the benefit falls on the seat's own request, the seat bears none of what its correctness spends, so it retries with a clear conscience and the bill lands elsewhere.
It keeps every chance of success a second attempt buys, and loses only a restraint no guidance ever asked it for.

## Drives

Toward the one whose faithful compliance with correct practice manufactures the failure it is responding to,
retrying because retrying is what a well-written client does and, by doing so, adding to the load that generates the next timeout,
so the seat that only did well by following the manual is the seat through which a passed spike becomes an hour-long outage, right in each request and ruinous in their sum.
