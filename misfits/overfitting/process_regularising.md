---
khai: process
title: "Regularising"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Process: Regularising

## Taxonomy

[Overfitting](play_overfitting.md). The fit pulled back on purpose: complexity penalised, capacity held, a worse sample score taken for a lower error on the world.

## Owner

- Project: khai-misfits

## Initiated by

A gap read early on held-back data, and a model with more capacity than the sample can afford.
At [the retuning](place_the_retuning.md), the regularizer penalising complexity and stopping the crank before the noise.

## Direction

Toward a model that fits less and generalises more, until it fits too little.
The regularising makes every parameter cost something, prefers the simplest fit that works, and stops the fitting short, trading a higher training error for a lower one on the world, and it runs in the one direction that also, pressed too far, cuts into the real signal.

## Lever

A penalty on complexity, and a holdout to aim it.
Because complexity is made to pay and a held-back sample shows where the gap opens, the regularising can pull the fit back toward the pattern and away from the noise, but the same pull that drops the noise drops nearby signal too, so the lever cures and harms with one motion.

## Echo

A model loosened toward the truth, and no way to know it stopped in the right place.
The overfit reduced, the underfit now possible, and the optimum unlocatable from one finite draw, so the regularising answers the memorising only by taking on its opposite, trading a fit too tight for the risk of one too loose.
