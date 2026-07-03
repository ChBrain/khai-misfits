---
khai: play
title: "Overfitting"
description: "A model tuned to fit the sample perfectly learns its noise as signal, so it explains the past and predicts nothing."
language: english
license: CC-BY-NC-SA-4.0
voice: "Rigorous and improving on the surface: the satisfaction of a model that fits the data better with every turn, its error dropping toward zero. Underneath, the fit closing on the sample's noise as tightly as its signal, a score that keeps rewarding the wrong thing, and a model that explains every point it has seen and breaks on the first it has not. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-02"
---

# Play: Overfitting

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Overfitting.
You have a sample, and you fit a model to it, and the fit gets better: the error drops, the curve threads every point, the score climbs toward perfect. And you keep going, because every turn improves it ... but the sample is signal and noise together, and past a certain point the model stops learning the signal and starts memorising the noise, the random particular wrinkles of this data that will never appear again. It ends explaining the past exactly and predicting the future not at all, a model that has learned its sample by heart and the world not at all.

## Arc

The bend is this: fitting the data you have ever more closely stops making the model better and starts making it worse, and the score you are watching cannot tell you when.
It runs on a tradeoff between two errors.
A model too simple misses the real pattern: it is biased, wrong in the same way everywhere. A model flexible enough to catch the pattern is also flexible enough to catch the noise, and the more capacity it has the more of the sample's random particulars it can absorb as though they were law: that is variance, sensitivity to the accident of this exact data.
The trouble is that the only score you can watch is measured on the sample itself, and that score improves the whole way down, through the signal and on into the noise, so more fitting always looks like more learning. There is no point at which the in-sample error says stop, because learning the noise lowers it exactly as learning the signal did.
None of it is error or laziness. Fitting the data is precisely the job, the sample is the only evidence there is, the noise is genuinely indistinguishable from signal inside the sample, and a flexible model is an asset, not a vice. Each turn of the crank truly does lower the visible error.
Hold data back and test on what you did not fit, penalise complexity, prefer the simpler model, and the fit can be stopped where it still generalises: but holding data back means fitting on less, regularising means accepting a worse score on the data you have, the simpler model genuinely misses some real signal, which is underfitting, the symmetric error, and no rule locates the exact right complexity, because signal and noise come apart only in probability, never for certain.

## Company

**Pitch**

- [The Error Is Dropping](pitch_the_error_is_dropping.md)

**Personas**

- [The Fitter](persona_the_fitter.md)
- [The Sample](persona_the_sample.md)
- [The Noise](persona_the_noise.md)
- [The Score](persona_the_score.md)
- [The Unseen](persona_the_unseen.md)
- [The Regularizer](persona_the_regularizer.md)

**Positions**

- [Fitter](position_fitter.md)
- [Sample](position_sample.md)
- [Noise](position_noise.md)
- [Score](position_score.md)
- [Unseen](position_unseen.md)
- [Regularizer](position_regularizer.md)

**Plans**

- [Fit It Closer](plan_fit_it_closer.md)
- [Offer the Evidence](plan_offer_the_evidence.md)
- [Pass for Signal](plan_pass_for_signal.md)
- [Reward Every Fit](plan_reward_every_fit.md)
- [Break the Model](plan_break_the_model.md)
- [Hold Some Back](plan_hold_some_back.md)

**Places**

- [The Training Set](place_the_training_set.md)
- [The Field](place_the_field.md)
- [The Holdout](place_the_holdout.md)
- [The Retuning](place_the_retuning.md)

**Processes**

- [Fitting](process_fitting.md)
- [Memorising](process_memorising.md)
- [Failing](process_failing.md)
- [Regularising](process_regularising.md)

**Pieces**

- [The Signal](piece_the_signal.md)
- [The Noise](piece_the_noise.md)
- [The Fit](piece_the_fit.md)
- [The Score](piece_the_score.md)
- [The Gap](piece_the_gap.md)
- [The Underfit](piece_the_underfit.md)
- [Overfitting](piece_overfitting.md)

## Triggers

**[The Fit](plot_the_fit.md)**
A model is tuned to the sample, and the fit gets better: the error drops, the curve threads the data. The Fitter turns the crank and the Sample yields its evidence, signal and noise together, as the only data there is. Closes when the model matches the sample closely and the score is climbing toward perfect.

**[The Memorising](plot_the_memorising.md)**
Cue: the fit passes the point where signal ends. The Noise, indistinguishable from pattern inside the sample, is learned as though it were law, and the Score keeps dropping, rewarding every step down into the accident of this exact data. Closes when the model has absorbed the sample's random particulars as if they were signal, its in-sample error near zero.

**[The Breaking](plot_the_breaking.md)**
Cue: new data arrives. The Fitter's model meets the Unseen, data it did not fit, and fails on it, because the noise it learned was never going to repeat. Closes when the model that explained every point it had seen breaks on the first it has not.

**[The Gap](plot_the_gap.md)**
Cue: the two errors are set side by side. The Unseen shows a test error high where the Score showed a training error near zero, and the divergence proves the in-sample number was never a guide. Closes when the gap between fitting the past and predicting the future is laid bare, and the score exposed as no measure of what was learned.

**[The Retuning](plot_the_retuning.md)**
Cue: someone moves to stop the fit where it still generalises. The Regularizer would hold data back, penalise complexity, prefer the simpler model, against the Fitter's true point that a worse in-sample score and a simpler model give up real signal, which is underfitting. Closes when the model is set to generalise ... or the score is chased into the noise, or the fit is pruned so hard it misses the pattern too.

## Stakes

Whether a model ever learns the world, or only ever the sample it was shown.
Every plot but the last moves the same way: toward the fit, which the in-sample score rewards the whole way down, and away from the generalisation, which that score cannot see. The production cannot make the training error tell overfitting from learning, because learning the noise lowers it exactly as learning the signal did, so more fitting always looks like more truth. It can only show that no one blundered, that fitting the data is the job and the sample the only evidence and the noise a true twin of the signal within it, and that the one move that keeps the model honest, testing on held-out data and paying for simplicity, fits on less, scores worse, and risks pruning the real pattern away, with no rule to mark the exact point where fitting the past stops being learning the future.
