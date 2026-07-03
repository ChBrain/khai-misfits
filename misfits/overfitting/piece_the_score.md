---
khai: piece
title: "The Score"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Piece: The Score

## Taxonomy

[Overfitting](play_overfitting.md). The in-sample error, a true measure of the wrong thing, falling with every turn whether the fit learns or memorises.

## Owner

- Project: khai-misfits

## Place

At [the training set](place_the_training_set.md), measured on the same data the model is fit to.
The number that guides the search, dropping the whole way down.

## Load Bearing

Without it there is no signal to follow into the trap, and no reason the fitting would ever go too far.
With it the trap has its engine: the score is an honest measurement, but of the error on the sample, not the error on the world, and because noise lowers it exactly as signal does, it rewards memorising with the same fall it gives learning and never once marks the point where fitting stops being progress. The Score is load bearing because it is the guide that cannot see the cliff it leads to (Vapnik): every measure taken on the data used to fit understates the true error, and that gap is the whole of the overfitting.

## Apparent

An objective, improving measure of a model getting better.
The score is real, precise, and falling, so it looks like exactly the number to trust and to maximise, and the truth that it is measured on the very data the model has already seen, and so cannot tell learning from memorising, stays hidden behind its honesty and its steady improvement.

## Yearbook

Tabled as [Reward Every Fit](plan_reward_every_fit.md) by [the score](persona_the_score.md), measuring [fitting](process_fitting.md).
It is the true number for the wrong question: the Score falls as [the fit](piece_the_fit.md) tightens over [the signal](piece_the_signal.md) or [the noise](piece_the_noise.md) alike, and only a reading on data the model never fit, at [the holdout](place_the_holdout.md) or [the field](place_the_field.md), exposes [the gap](piece_the_gap.md) it hides.
