---
khai: plan
title: "Hold Some Back"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
status: active
---

# Plan: Hold Some Back

## Taxonomy

A **standing plan**: the intent of [the regularizer's seat](position_regularizer.md), inside [Overfitting](play_overfitting.md).

## Owner

- Owner: [Regularizer](position_regularizer.md)

## Direction

Set data aside, unfitted, and test on it to catch the overfit the training score hides. Penalise complexity, so the model pays for every parameter, and prefer the simplest fit that works. Stop the crank before the noise, taking a worse score on the sample for a lower error on the world. Prune gently, for the plainest model misses some real signal.

## Orders

([The Regularizer](persona_the_regularizer.md) holds data back and penalises complexity, saving the model from memorising, and, pressed too hard, keeping it from learning.)

## Implementation

([The Holdout](place_the_holdout.md) and [the retuning](place_the_retuning.md); the [regularising](process_regularising.md) process; testing on held-back data reveals [the gap](piece_the_gap.md), and answering [overfitting](piece_overfitting.md) risks [the underfit](piece_the_underfit.md) when the pruning cuts real signal.)

## Targets

- [ ] data is held back, unfitted, and used to test the model honestly
- [ ] complexity is penalised and the simplest working fit preferred
- [ ] a worse score on the sample is taken for a lower error on the world
- [ ] the pruning is kept from cutting past the noise into the real signal
