---
khai: plan
title: "Sort by Risk"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
status: active
---

# Plan: Sort by Risk

## Taxonomy

A **standing plan**: the intent of [the modeller's seat](position_modeller.md), inside [True of No One](play_true_of_no_one.md).

## Owner

- Owner: [Modeller](position_modeller.md)

## Direction

Stop asking what the treatment does on average and ask what it does at each level of risk. Build a model that predicts a patient's baseline risk of the outcome, then read the trial's effect within strata of that prediction, rather than testing one covariate at a time in the way that is known to produce claims which do not hold. Validate the risk model on data it was not built from, since an unvalidated model relocates the overfitting instead of curing it. And state the output honestly: a position in a distribution, not a verdict.

## Orders

([The Modeller](persona_the_modeller.md) stratifies through [Stratifying](process_stratifying.md) at [the Trial](place_the_trial.md), holding [the Boundary](piece_the_boundary.md) against [the Skew](piece_the_skew.md).)

## Implementation

([The Trial](place_the_trial.md) is reopened for a question it was not designed to answer; [Stratifying](process_stratifying.md) needs individual participant data rather than published summaries, often pooled across trials that never expected to be pooled, and returns the minority who collect the benefit as separable from the majority who do not, at the price of that data, that validation, and residual uncertainty.)

## Targets

- [ ] effect is read within strata of predicted baseline risk, not one covariate at a time
- [ ] individual participant data is obtained, and the pooling's limits are stated
- [ ] the risk model is externally validated, or the claim is withheld
- [ ] the output is reported as a probability, with the decision left where it belongs
