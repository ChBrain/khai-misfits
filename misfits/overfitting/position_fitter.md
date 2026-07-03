---
khai: position
title: "Fitter"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Position: Fitter

## Taxonomy

[Overfitting](play_overfitting.md). The seat that tunes the model to match the sample ever more closely.

## Owner

- Project: khai-misfits

## Has

A flexible model, and the capacity to fit the data as tightly as it likes.
The in-sample error to steer by, falling with every turn.
No view of the world beyond the sample it is fitting.

## Orders

Fit the sample closer.
Add capacity, tune the model, drive the error down.
Read a lower score as a better model, every time.

## Loses

The generalisation, exactly by pursuing the fit.
Fitting the data is its job, so it cannot see where the job turns from learning the signal into memorising the noise, and the score improves the whole way down, so nothing tells it to stop.
The more diligently it fits the sample, the more of the sample's accidents it takes for law.

## Drives

Toward a closer fit,
rewarded at every step by a falling error,
so the diligence that learns the signal carries straight on into memorising the noise.
