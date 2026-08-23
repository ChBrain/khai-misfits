---
khai: plot
title: "One in a Hundred, Every Hundred"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
---

# Plot: One in a Hundred, Every Hundred

## Taxonomy

[The Last One to Answer](play_the_last_one_to_answer.md)

## Owner

- Project: khai-misfits

## Cue

A user request whose result needs every shard, issuing a hundred calls in parallel.
[The Fan-Out](piece_the_fan_out.md), set by how the data is partitioned.

## Action

[Collecting](process_collecting.md) and [amplifying](process_amplifying.md): [The Request](persona_the_request.md), in [the assembler seat](position_assembler.md), waits at [the wait](place_the_wait.md) until [The Last Reply](persona_the_last_reply.md) arrives.

## Stage

[The Request](persona_the_request.md), on [Wait for All of Them](plan_wait_for_all_of_them.md), cannot take the first ninety and go, because a result assembled from most of the shards is wrong rather than partial.
[The Last Reply](persona_the_last_reply.md), on [Set the Time by Myself Alone](plan_set_the_time_by_myself_alone.md), arrives correct and complete and alone decides the response time.

## Tension

Do the multiplication in the open, because it can be checked rather than believed.
The request is fast only if **all** hundred are fast. That is ninety-nine hundredths raised to the hundredth power, which is about thirty-seven per cent. So **sixty-three per cent of user requests are slow**, in a fleet where every machine was fast ninety-nine times out of a hundred. There is no model here, no fitted constant and nothing to dispute: engineering can move the base and never the form. And it runs the wrong way with success, since every shard added buys throughput and worsens the tail from unchanged components.
