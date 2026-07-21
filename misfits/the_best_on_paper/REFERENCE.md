---
updated: "2026-07-21"
---

# The Best on Paper: Reference

The research warrant for [The Best on Paper](play_the_best_on_paper.md).
The dynamic is the optimiser's curse: Smith and Winkler's naming of it, the postdecision surprise it formalises, the
regression to the mean beneath it, the shrinkage that corrects it, and the winner's curse it mirrors, all cited below.

## Line of Work

Staging the optimiser's curse as a **maximum-of-noisy-estimates structure**: a decider values each of many options
with an estimate that is noisy but individually unbiased, then chooses the option with the highest estimate, and
because the highest estimate is likeliest to belong to the option whose true worth and whose upward error summed
largest, the act of taking the maximum conditions on upward error, so the chosen option's estimate is biased above its
truth and its realised value disappoints. The play models the documented mechanics, the unbiased valuation of each
option, the mean-zero error inside it, the overstatement that selection creates for the winner alone, and the
regression by which the realised value returns toward the truth, as the load-bearing vectors of the structure, not as
a tale of a biased analyst or a rigged choice. The governing finding of the source is the play's governing law:
selecting the maximum of noisy but individually unbiased estimates yields a chosen estimate that is biased high and a
realised value that disappoints, a postdecision surprise owed to the selection and not to any error, so the letdown
grows with the number of options ranked and the noise in the read, and is corrected only by shrinking the estimates
toward the prior before choosing.

It is distinct from the house's The Winning Bid, where the winner's curse falls on the highest bidder in a
common-value auction: there many rivals bid on one shared value and winning means having overestimated it most, the
curse a property of competition, while here a single decider chooses among many options of independent worth, with no
rival and no auction, the same selection-of-the-largest-error working through one chooser's own ranking rather than a
field of bidders. It is distinct too from Overfitting, where a model is fit so closely to a sample that it captures
its noise and fails on new data: there the trap is a fitted model tuned to in-sample noise, while here nothing is
fitted, the decider simply selects the top of a list of discrete estimates, the bias entering through the maximum
rather than through a model bent to the data.

## Origin

The phenomenon in theory, and the research spine beneath it.

| Source                      | Key Work / Event                                                                                                    | Scope                                                                                                                                                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Smith & Winkler**         | "The Optimizer's Curse: Skepticism and Postdecision Surprise in Decision Analysis" (_Management Science_, 2006)     | **The origin and the name**: choosing the option with the highest of noisy but unbiased estimates biases the chosen estimate high, so the realised value disappoints, and the Bayesian remedy is to shrink estimates toward the prior. The play's governing law. The Letdown. |
| **Harrison & March**        | "Decision Making and Postdecision Surprises" (_Administrative Science Quarterly_, 1984)                             | **The surprise**: choosing the best-estimated alternative yields a systematic postdecision disappointment, the realised value falling below the estimate that selected it, named before the Bayesian correction. The Overstatement.                                           |
| **Francis Galton**          | "Regression towards Mediocrity in Hereditary Stature" (_Journal of the Anthropological Institute_, 1886)            | **The regression**: a selected extreme value regresses toward the mean on realisation, the statistical law by which the flattered estimate's outcome returns toward the truth it departed from. The Error.                                                                    |
| **Stein; James & Stein**    | "Inadmissibility of the Usual Estimator..." (Stein, 1956); "Estimation with Quadratic Loss" (James and Stein, 1961) | **The shrinkage**: pulling many estimates toward a common mean dominates taking them at face value, the statistical form of the remedy that shrinks the boldest reading back toward the prior. The Valuation.                                                                 |
| **Capen, Clapp & Campbell** | "Competitive Bidding in High-Risk Situations" (_Journal of Petroleum Technology_, 1971)                             | **The winner's curse**: in a common-value auction the winner is the bidder who most overestimated the prize, the competitive mirror of the same selection-of-the-largest-error, distinguished here as the auction cousin of the single decider's curse. The Letdown.          |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the analyst as biased or
  the choice as rigged, because the source finding is precisely that no bias and no error is needed: each option is
  valued as fairly as it can be, the estimate as likely to fall short as to overshoot, and the decider does the rational
  thing in taking the highest. No single estimate is wrong on average, and the overstatement is created by the selection
  itself, so the misfit is that choosing the maximum of honest, unbiased estimates biases the winner high and
  disappoints on realisation, no thumb on the scale and no mistake required. The letdown is a property of the maximum,
  not a fault in the reading, and the analyst who valued every option straight is as beyond reproach as the decider who
  optimised.
- **No hero**: the play refuses to resolve the misfit into a choice made right by more care. The one move that would
  correct it is to shrink the estimates toward the prior before choosing, discounting each reading by how noisy it is,
  but that pulls the boldest number back hardest and so trusts the dazzling projection least where it dazzles most,
  passing, on average, on the very option that looked best. The reckoning is a chooser who discounts their own best
  estimate and forgoes the top of the list, or a chooser who takes it and is, on average, let down, not a way to keep
  the highest estimate and its promised value too, so the cure for the curse is a deliberate distrust of one's own best
  number, paid in the bold bets it declines.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed as the
  house's, and its reach is not overstated. The staging is the house's; the optimiser's curse and its Bayesian remedy
  are Smith and Winkler's, the postdecision surprise is Harrison and March's, the regression of a selected extreme is
  Galton's, the shrinkage that dominates the raw estimate is Stein's and James and Stein's, and the winner's curse it
  mirrors is Capen, Clapp and Campbell's, each carried as carefully as the finding itself: the misfit stages an honest
  valuation flattered by selection and credits that no estimate was biased and the disappointment belongs to the
  maximum.

## Encoding

Source to constraint, per element.

- **[The Valuation](piece_the_valuation.md)**: carries the noisy but unbiased estimate of an option (Smith and Winkler;
  Stein), the honest reading that shrinkage would pull toward the prior.
- **[The Error](piece_the_error.md)**: carries the mean-zero noise inside each valuation (Galton), the blameless,
  symmetric gap between the reading and the truth that selection turns against the winner.
- **[The Overstatement](piece_the_overstatement.md)**: carries the upward bias selection creates for the chosen option
  (Smith and Winkler; Harrison and March), the conditional fact that the winner's estimate stands above its worth
  because it was chosen.
- **[The Letdown](piece_the_letdown.md)**: carries the phenomenon whole (Smith and Winkler; Capen, Clapp and Campbell),
  the postdecision surprise by which the maximum of noisy estimates overstates the winner and its realised value
  disappoints.
