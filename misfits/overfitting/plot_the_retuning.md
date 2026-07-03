---
khai: plot
title: "The Retuning"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Plot: The Retuning

## Taxonomy

[Overfitting](play_overfitting.md)

## Owner

- Project: khai-misfits

## Cue

[The retuning](place_the_retuning.md), the gap read and the model pulled back to close it.
Complexity is made to pay, the crank stopped short of the noise, and the training score is worsened on purpose against the hope of a lower error on the world.

## Action

[Regularising](process_regularising.md): [The Regularizer](persona_the_regularizer.md), holding [the regularizer's seat](position_regularizer.md), penalises complexity and holds data back to test the fit, while [The Fitter](persona_the_fitter.md), holding [the fitter's seat](position_fitter.md), gives up the tightest match and takes a plainer model in its place.

## Stage

[The Regularizer](persona_the_regularizer.md) tables [Hold Some Back](plan_hold_some_back.md) and pulls the fit toward the pattern and away from the noise, closing [the gap](piece_the_gap.md) but nearing [the underfit](piece_the_underfit.md).
[The Fitter](persona_the_fitter.md), its [Fit It Closer](plan_fit_it_closer.md) overruled, accepts a worse score on the sample, and neither can say from the draw alone whether the cut stopped in the right place.

## Tension

The one real remedy, and no way to know it landed right.
The regularizing works: it drops the memorised noise and shrinks the gap, and it is the only move that answers the overfit at its root. But the same pull that cuts noise cuts nearby signal, the optimum between too tight and too loose cannot be located from one finite sample, and every step away from overfitting is a step toward underfitting, so the cure trades one error for the other, buys a better model with a worse training score, and can never be sure it did not go too far.
