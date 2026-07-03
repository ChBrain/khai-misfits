---
updated: "2026-07-02"
---

# Overfitting: Reference

The research warrant for [Overfitting](play_overfitting.md).
The term is statistics' and machine learning's; the play runs on the bias-variance account of generalisation
error, from Geman, Bienenstock and Doursat through Vapnik's learning theory and the regularisation
literature, all cited below.

## Line of Work

Staging overfitting as a **learning system**: a model with capacity to spare, fit to a finite sample under a
score measured on that same sample, learns the sample's noise as though it were signal, so the more tightly
it matches the data in hand the worse it predicts the world it was built for. The play models the documented
mechanics, the signal that generalises and is worth learning, the noise that is the accident of one draw and
false to the next, the fit that catches one and then the other with no change of feel, the in-sample score
that falls for both alike and so cannot mark the crossing, the generalisation gap that new data finally
reads, and the underfit that waits on the far side of the remedy, as the load-bearing vectors of the
structure, not as a tale of carelessness or a bad model. The governing finding of the source literature is
the play's governing law: expected error decomposes into bias and variance, and past a point extra capacity
lowers bias only by raising variance, so a fit driven to minimise error on the training sample overshoots the
signal into the noise and generalises worse. It is distinct from the house's Metric Fixation, where a proxy
is optimised until it stops tracking the goal because people game it: here nothing is gamed, an honest
measurement of the wrong sample simply cannot see the world. It is distinct from the house's The Survivors,
where a conclusion is drawn from a filtered sample that hides its failures: here the sample is honest and
whole, and the trouble is fitting its noise, not missing its absences. It is distinct, too, from the house's
The Bounce, where an extreme reading is mistaken for a durable effect and reverts: kin in spirit, but that is
one noisy measurement read as signal, where this is a whole model built to match a draw's noise.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                              | Key Work / Event                                                                                                                                                        | Scope                                                                                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Geman, Bienenstock and Doursat**  | "Neural Networks and the Bias/Variance Dilemma" (_Neural Computation_, 1992)                                                                                            | **The spine**: expected error as bias plus variance, and the dilemma that more capacity trades one for the other. The play's governing law, the Signal and Noise. |
| **Vapnik**                          | _The Nature of Statistical Learning Theory_ (1995); VC dimension, structural risk minimisation                                                                          | **The generalisation gap**: why in-sample error understates true error, and how capacity bounds the gap. The Score, the Gap.                                      |
| **Hastie, Tibshirani and Friedman** | _The Elements of Statistical Learning_ (2001), training vs test error                                                                                                   | **The fitting curve**: training error falling monotonically while test error turns back up. The Fit, the Holdout.                                                 |
| **Tikhonov; Akaike**                | Tikhonov regularisation (1943); Akaike Information Criterion (1974)                                                                                                     | **The penalty on complexity**: a cost added for capacity to pull the fit back toward the signal. The Regularising, the Retuning.                                  |
| **Stone**                           | "Cross-Validatory Choice and Assessment of Statistical Predictions" (_JRSS B_, 1974)                                                                                    | **The held-back test**: data set aside to read the gap before deployment. The Holdout.                                                                            |
| **von Neumann; Box**                | "With four parameters I can fit an elephant" (via Dyson); "All models are wrong, but some are useful" (Box, 1976)                                                       | **The warning and the humility**: enough parameters fit anything, and no model is the truth. The distinctness of fit from learning.                               |
| **Practitioner**                    | a backtested trading rule tuned to past prices that loses live; a model that aces its benchmark and fails in the field; a curriculum drilled to a past exam's questions | The trap in the field, and its cost: a model that explains the sample perfectly and predicts the world not at all.                                                |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the fitter as
  careless or the model as bad, because the source finding is precisely that each move is right: fitting the
  data is the whole job, the sample is honest evidence, the score is a true measurement, and the noise cannot
  be told from the signal inside the sample. The overfit is authored by no error and emerges from the
  structure, a finite draw and a score that cannot see past it, so the misfit is that a model built exactly
  as it should be, learning as hard as it can, learns the wrong thing.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The one move that answers
  the overfit is to pull the fit back, penalise complexity, and test on data never fitted, and it scores
  worse on the sample, cannot locate the true optimum from a finite draw, and pressed too far becomes the
  underfit, missing real signal for want of capacity. The reckoning is a fit deliberately made worse in hand
  to be better in the world, a bet on how much the sample can afford, not a free correction, so the cure for
  a fit too tight is the standing risk of one too loose.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; overfitting, the bias-variance decomposition,
  statistical learning theory, regularisation, and cross-validation are theirs, and the condition the trap
  actually requires, a finite sample of signal mixed with noise and a score measured on the data used to fit,
  is carried as carefully as the finding itself.

## Encoding

Source to constraint, per element.

- **[The Signal](piece_the_signal.md)**: carries the true generalising pattern (Vapnik), the part worth learning and the
  thing the fit should stop at.
- **[The Noise](piece_the_noise.md)**: carries the accident of the one draw (Geman, Bienenstock and Doursat), real in the
  sample and false to the world, learned once capacity outruns the signal.
- **[The Fit](piece_the_fit.md)**: carries the model's match to the sample (Hastie, Tibshirani and Friedman), one continuous
  act that is learning first and memorising after, with no seam between.
- **[The Score](piece_the_score.md)**: carries the in-sample error (Vapnik), an honest measure of the wrong thing, falling for
  noise exactly as for signal.
- **[The Gap](piece_the_gap.md)**: carries the generalisation gap (Geman, Bienenstock and Doursat; Vapnik), the overfitting
  quantified, legible only where new data arrives.
- **[The Underfit](piece_the_underfit.md)**: carries the far arm of the tradeoff (Geman, Bienenstock and Doursat), the real
  signal missed when the remedy is pressed too hard.
- **[Overfitting](piece_overfitting.md)**: carries the phenomenon whole (Geman, Bienenstock and Doursat; Vapnik), a fit that
  learns the sample's noise as signal, and its remedy in a pulled-back fit at a symmetric cost.
