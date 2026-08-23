---
khai: position
title: "Assembler"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
---

# Position: Assembler

## Taxonomy

[The Last One to Answer](play_the_last_one_to_answer.md). The seat that needs every answer and is finished only by the last of them.

## Owner

- Project: khai-misfits

## Has

A hundred calls issued in parallel.
A requirement for all the answers, since a partial result is not the result.
No means of finishing early.

## Orders

Fan out.
Wait.
Assemble, and return.

## Loses

Nothing of its own, and the seat is the amplifier: it converts a per-machine rate into a service rate by requiring every machine at once, so a property rare in each becomes common in the whole.
Because partitioning is what buys the system's throughput in the first place, narrowing the fan-out means giving up the design that made it viable.
It ends correct, complete and paced by whichever machine was unlucky.

## Drives

Toward a complete answer,
never once asking for more than it needs,
so the seat that makes the system fast is the seat that makes the service slow.
