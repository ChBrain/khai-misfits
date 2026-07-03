---
khai: position
title: "Score"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Position: Score

## Taxonomy

[Overfitting](play_overfitting.md). The seat of the in-sample error, dropping the whole way down and rewarding every step.

## Owner

- Project: khai-misfits

## Has

A measure of how well the model fits the sample.
A value that falls with every turn of the crank.
No sight of any data but the sample it is measured on.

## Orders

Reward every fit.
Fall as the model fits the signal, and fall the same as it fits the noise.
Say nothing at the point where fitting stops being learning.

## Loses

Its usefulness at the exact moment it matters most.
It is measured on the same sample the model is fit to, so it improves through the noise as smoothly as through the signal, and it is a true measure of the wrong thing, the past matched rather than the future met.
The lower it falls past the optimum, the worse the model it is praising.

## Drives

Toward zero,
measured on the data being fit,
so the number that guides the whole search is blind to the only place it should have said stop.
