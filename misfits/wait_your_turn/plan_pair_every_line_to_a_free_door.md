---
khai: plan
title: "Pair Every Line to a Free Door"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-24"
status: active
---

# Plan: Pair Every Line to a Free Door

## Taxonomy

A **mandate**: the intent of [the matched seat](position_matched.md), inside [Wait Your Turn](play_wait_your_turn.md).

## Owner

- Owner: [Matched](position_matched.md)

## Direction

Split the one line into a line per destination, choose a pairing of lines to doors every tick, and choose it again at the next tick, for as long as the system runs. Recover the throughput; keep the office open permanently.

## Orders

([The Matcher](persona_the_matcher.md) gives each destination its own line at [the doors](place_the_doors.md) and decides, every tick, which line goes to which.)

## Implementation

([The Doors](place_the_doors.md), repartitioned; the [matching](process_matching.md) process without end; [the fifty-eight per cent](piece_the_fifty_eight_per_cent.md) as the measure of what is recovered.)

## Targets

- [ ] each destination has its own line, so a ready customer can reach an open counter
- [ ] the capacity lost to ordering alone is recovered
- [ ] the pairing is chosen again at every tick and never stays made
- [ ] the system's performance now depends on the quality of a choice that did not previously exist
