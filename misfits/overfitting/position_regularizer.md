---
khai: position
title: "Regularizer"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Position: Regularizer

## Taxonomy

[Overfitting](play_overfitting.md). The seat that holds data back, penalises complexity, and prefers the simpler model.

## Owner

- Project: khai-misfits

## Has

Data set aside, unfitted, to test the model honestly.
A penalty on complexity, so the model pays for every parameter.
A preference for the plainest fit that works, over the perfect one that will not.

## Orders

Hold some back.
Test on data you did not fit, penalise complexity, and stop the crank while the fit still generalises.
Take a worse score on the sample for a better one on the world.

## Loses

Some of its evidence, some of its fit, and, pressed too hard, some of the signal.
Its cure is the only honest one and it costs: fitting on less data, scoring worse on the sample, and risking a plainer model that underfits, and it cannot locate the exact right complexity, since signal and noise part only in probability.
The hand that stops the model memorising can, held too tight, stop it learning.

## Drives

Toward a model that generalises,
by fitting on less and scoring worse to get there,
so the honest cure for overfitting shades, past its own optimum, into underfitting.
