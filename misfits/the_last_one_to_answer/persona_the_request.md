---
khai: persona
title: "The Request"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
type: archetype
---

# Persona: The Request

## Taxonomy

[Assembler](position_assembler.md). The single user request that must collect an answer from all of them and is finished only when the last arrives.

## Owner

- Project: khai-misfits

## Projection

Ordinary, and structurally unavoidable in a system that partitions its data.
Needs every shard's answer to produce a complete result, so it cannot take the first ninety and go.
Not greedy and not badly designed: fanning out is what makes the system fast in the first place.

## Action

Sends a hundred calls, in parallel.
Waits.
Assembles, once the last reply is in, and returns.

## Shadow

Nothing, and the seat is the amplifier: it converts a per-machine rate into a service rate by requiring every machine at once, so a property that was rare in each becomes common in the whole.
Because partitioning is what buys the throughput, the seat cannot be narrowed without giving up the design that made the system viable.
It ends correct, complete, and paced by whichever machine was unlucky.

## Tell

Says nothing while it waits, which is most of what it does.
Then returns a correct answer, late.
