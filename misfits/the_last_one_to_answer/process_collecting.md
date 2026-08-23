---
khai: process
title: "Collecting"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
---

# Process: Collecting

## Taxonomy

[The Last One to Answer](play_the_last_one_to_answer.md). A request issuing calls to every shard and waiting for all the answers.

## Owner

- Project: khai-misfits

## Initiated by

A query whose result requires every partition.
At [the wait](place_the_wait.md), with calls outstanding.

## Direction

Toward a complete result, which needs all of them.
This is not a design error and cannot be tuned away: partitioning is what buys the throughput, and a result assembled from ninety of a hundred shards is not a partial result but a wrong one.
And the rule is unforgiving in a way that is easy to state and easy to miss: **the request is finished by the last reply, not by the typical one.**

## Lever

[The fan-out](piece_the_fan_out.md), which is the count of things that must all go right.
Because it is set by how the data is partitioned rather than by how the request is written, it is not a parameter anybody tunes per query.

## Echo

A correct, complete answer, paced by whichever machine was unlucky.
Every fast reply in the set is worth nothing without the slow one.
