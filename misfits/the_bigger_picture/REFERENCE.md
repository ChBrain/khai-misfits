---
updated: "2026-07-03"
---

# The Bigger Picture: Reference

The research warrant for [The Bigger Picture](play_the_bigger_picture.md).
The dynamic is Simpson's paradox: Simpson's contingency-table reversal, named by Blyth, exemplified by Bickel and
colleagues, and resolved causally by Pearl, all cited below.

## Line of Work

Staging Simpson's paradox as an **aggregation-reversal structure**: a table in which a trend between two variables
holds in every subgroup yet reverses in the pooled whole, because a third variable, correlated with both the
grouping and the outcome, is spread unevenly across the groups, so pooling weights unlike things and flips the
direction, and both the aggregate and the subgroup readings are honestly correct while the data alone cannot say
which should guide a decision. The play models the documented mechanics, the confounder unevenly allocated across
the groups, the pooled total that carries the authority of the larger sample, the subgroup trends that hold within
each stratum and point the other way, the reversal that is a genuine feature of the table rather than a miscount,
the decision taken on a level the numbers cannot license, and the causal model that alone chooses the level, at
the cost of an assumption the data can neither supply nor confirm, as the load-bearing vectors of the structure,
not as a tale of a careless or dishonest analyst. The governing finding of the source is the play's governing law:
an association between two variables can reverse when a confounding variable is conditioned on versus ignored, so
the same data supports opposite conclusions at different levels of aggregation, and which conclusion is right for
action turns on the causal structure, not on the data.

The house is careful with the strength of the claim: the reversal is a real property of an unevenly confounded
table, but which level to trust is not a statistical question with a data-only answer. Whether to adjust the
grouping away as a confounder or keep it as a mediator is a causal judgement brought from outside, and the wrong
causal model adjusts the wrong way and reverses the reversal with equal confidence (Pearl); the play stages that
irresolvability honestly and does not pretend the strata are always the right level or the aggregate always the
wrong one.

It is distinct from the house's The Bounce, where an extreme measurement is followed by a less extreme one and the
reversion is misattributed to whatever was done between them: there the artefact is regression to the mean across
repeated measurement of a noisy quantity, here it is a cross-sectional reversal produced by an unevenly
distributed confounder, no repeated measurement and no mean to revert to, only two levels of one table that
disagree. And it is distinct from the house's Overfitting, where a model fit to a sample's noise fails on new
data: there one reading is genuinely wrong, the in-sample fit that does not generalise, here both readings are
correct summaries of the level they describe, and the trouble is not a failure to generalise but the absence of a
data-only rule for choosing between two honest, contradictory truths.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                         | Key Work / Event                                                                                             | Scope                                                                                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Edward H. Simpson**          | "The Interpretation of Interaction in Contingency Tables" (_JRSS Series B_, 1951)                            | **The spine**: the reversal of an association between the subgroups and the pooled table, the paradox itself. The governing law.                                           |
| **G. Udny Yule**               | "Notes on the Theory of Association of Attributes in Statistics" (1903); the Yule-Simpson effect             | **The precedent**: the earliest statement of the association reversal on aggregation. The Reversal.                                                                        |
| **Colin R. Blyth**             | "On Simpson's Paradox and the Sure-Thing Principle" (_JASA_, 1972)                                           | **The name**: the paradox named and framed, both readings honest and at odds. The Total, the Strata.                                                                       |
| **Bickel, Hammel & O'Connell** | "Sex Bias in Graduate Admissions: Data from Berkeley" (_Science_, 1975); Charig et al. (kidney stones, 1986) | **The cases in the world**: admissions and treatment data where the aggregate reverses every subgroup, and a decision hangs on the level. The Verdict, the Skew.           |
| **Judea Pearl**                | _Causality_ (2000, 2009); the causal resolution and the confounder-versus-mediator distinction               | **The resolution and its cost**: the level to trust is a causal choice the data cannot make, and the wrong model reverses the reversal. The Lurking Variable, the Diagram. |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the analyst as
  careless or dishonest, because the source finding is precisely that every count is correct: the pooled total is
  honestly computed, the subgroup trends are honestly computed, trusting the larger sample is a sound instinct,
  and acting on the clearest summary is what any careful analyst does. The reversal is authored by no one and
  emerges from the structure, a confounder spread unevenly across groups that pooling weights together, so the
  misfit is that two honest, correct readings of one table contradict, and the data that produced both cannot say
  which to believe.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The one move that chooses the
  level is to draw the causal structure and decide which variable to adjust away and which to leave, and it means
  bringing an assumption the table cannot supply or confirm, staking the answer on a cause the data will never
  settle, and adjusting the wrong way if the causal story is wrong, reversing the reversal with equal confidence.
  The reckoning is a decision grounded on a guessed cause, right only if the guess is, not a free correction, so
  the escape from a paradox the numbers cannot resolve is a commitment the numbers cannot check.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed
  as the house's. The staging is the house's; the contingency-table reversal is Simpson's and, before him,
  Yule's, the naming and the sure-thing framing are Blyth's, the Berkeley and clinical cases are Bickel and
  colleagues' and Charig and colleagues', and the causal resolution, that the level to trust is decided by a
  causal model and not by the data, is Pearl's, carried as carefully as the finding itself.

## Encoding

Source to constraint, per element.

- **[The Total](piece_the_total.md)**: carries the pooled aggregate (Simpson), the honest whole with the
  authority of size that can point against every part.
- **[The Strata](piece_the_strata.md)**: carries the subgroup trends (Simpson; Blyth), the within-group readings
  that hold in each and point the other way.
- **[The Lurking Variable](piece_the_lurking_variable.md)**: carries the confounder (Simpson; Pearl), the third
  variable spread unevenly across the groups that drives the reversal.
- **[The Reversal](piece_the_reversal.md)**: carries the paradox (Simpson; Blyth), the direction that flips
  between the aggregate and the strata, both readings true.
- **[The Verdict](piece_the_verdict.md)**: carries the decision (Bickel; Charig), the call taken on a level the
  data cannot license, the reversal turned into an action.
- **[The Bigger Picture](piece_the_bigger_picture.md)**: carries the phenomenon whole (Simpson; Blyth; Pearl),
  the aggregation reversal and its irresolvability by data alone.
