---
khai: place
title: "The Fleet"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
---

# Place: The Fleet

## Taxonomy

[Long After the Cause](play_long_after_the_cause.md). The client side, where many callers independently and correctly reissue what timed out. Hosts [Everyone Tries Again](plot_everyone_tries_again.md).

## Owner

- Project: khai-misfits

## Shown

Many clients, each holding its own request, each following the same documented guidance about what to do when one fails.

## Holds

The retry policy, shipped on by default and correct per request, out of which [The Loop](piece_the_loop.md) is half made.

## Offers

To each caller, another chance at the request its user is waiting on, at a cost that falls on no caller in particular.

## Withheld

Any view of the fleet from inside it, so no caller can see that its correct response is being made simultaneously by every other caller against the same service.
