---
khai: plan
title: "Wait for All of Them"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
status: active
---

# Plan: Wait for All of Them

## Taxonomy

A **mandate**: the intent of [the assembler seat](position_assembler.md), inside [The Last One to Answer](play_the_last_one_to_answer.md).

## Owner

- Owner: [Assembler](position_assembler.md)

## Direction

Fan out to every shard, because a partial result is not the result, and wait. Do not finish early, since there is no early to finish at.

## Orders

([The Request](persona_the_request.md) sends a hundred calls in parallel, waits, and assembles once the last reply is in.)

## Implementation

([The Wait](place_the_wait.md), which is most of what it does; the [collecting](process_collecting.md) process across [the fan-out](piece_the_fan_out.md); the outcome computed by [the arithmetic](piece_the_arithmetic.md).)

## Targets

- [ ] every shard's answer is needed, so the first ninety are not enough
- [ ] fanning out is what makes the system fast in the first place
- [ ] the request is finished by the last reply and not the typical one
- [ ] narrowing the fan-out means giving up the design that made the system viable
