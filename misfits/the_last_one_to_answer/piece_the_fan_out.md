---
khai: piece
title: "The Fan-Out"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
---

# Piece: The Fan-Out

## Taxonomy

[The Last One to Answer](play_the_last_one_to_answer.md). The count of machines a single request must hear from before it is finished.

## Owner

- Project: khai-misfits

## Place

Set at [the wait](place_the_wait.md), by how the data is partitioned.
Answered nowhere: a result assembled from most of the shards is wrong rather than partial.

## Load Bearing

Without it a slow machine delays one call and nothing else.
It is load bearing because it is **the thing that makes the system fast and the service slow by the same act**: partitioning buys throughput, and every partition added is another chance for the request to be paced by somebody having a bad millisecond.

## Apparent

A scaling decision, and a good one.
It reads as the architecture working, which it is, and its being the exponent in the arithmetic is not visible from any diagram of it.

## Yearbook

Multiplied through [collecting](process_collecting.md) and [amplifying](process_amplifying.md).
Raising it improves throughput and worsens [the tail](piece_the_tail.md), from unchanged components.
