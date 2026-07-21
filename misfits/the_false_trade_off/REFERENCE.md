---
updated: "2026-07-21"
---

# The False Trade-Off: Reference

The research warrant for [The False Trade-Off](play_the_false_trade_off.md).
The dynamic is Berkson's paradox, or collider bias: Berkson's hospital case, the causal-diagram account of the
collider, the recasting of selection bias as conditioning on a common effect, the general statement of endogenous
selection, and the empirical footprint of admission-rate bias, all cited below.

## Line of Work

Staging Berkson's paradox as a **condition-on-a-common-effect structure**: two qualities that are independent in
the population both raise a unit's chance of clearing a selection gate, so the gate is a common effect of both, and
conditioning on it, looking only at the units that passed, induces a spurious association between the two, typically
negative, because a unit low on one quality is in the sample only if it was high on the other. The play models the
documented mechanics, the two independent causes, the gate set on their sum, the collider conditioned on when the
sample is kept, the anti-correlation induced among the selected, and the analyst who reads the trade-off straight and
the decider who acts on it, as the load-bearing vectors of the structure, not as a tale of a fraud or a fallacy. The
governing finding of the source is the play's governing law: where a sample is selected on a common effect of two
independent causes, an association appears between the causes that is real in the sample and absent in the world, a
trade-off manufactured by the selection and gone the moment the excluded units are counted.

It is distinct from the house's The Bigger Picture, and the distinction is the whole point of the cut, an exact
causal mirror: The Bigger Picture stages Simpson's paradox, where a **confounder**, a common cause of two variables,
makes a pooled trend reverse when the strata are combined, and the remedy is to stratify, to control for the
confounder; here the gate is a **collider**, a common effect, and controlling for it is precisely the error,
conditioning on a common effect manufacturing an association that stratifying on a common cause would have removed,
so the two paradoxes point opposite ways, one saying adjust and the other saying never adjust, and mistaking the
collider for the confounder is the very move that casts the ghost. It is distinct too from The Survivors, where
survivorship bias reasons from the units that persisted and a hazard removed the rest, biasing the estimate of a
single quantity by attrition: here nothing is lost to a hazard and no single average is skewed, an active selection
on a shared effect ties two independent qualities together, the artefact a manufactured relationship between two
things, not a thinned estimate of one.

## Origin

The phenomenon in theory, and the research spine beneath it.

| Source                              | Key Work / Event                                                                                                     | Scope                                                                                                                                                                                                                                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Joseph Berkson**                  | "Limitations of the Application of Fourfold Table Analysis to Hospital Data" (_Biometrics Bulletin_, 1946)           | **The origin and the name**: among hospital patients, two unrelated diseases appear associated because each raises the chance of admission, so a case-control study drawn from the admitted reads a relationship that the general population does not hold. The play's governing law. |
| **Judea Pearl**                     | _Causality: Models, Reasoning, and Inference_ (Cambridge University Press, 2000; 2nd ed. 2009)                       | **The formal spine**: the collider, a variable that is a common effect of two others; conditioning on it opens a spurious path between its causes ("explaining away"), the mirror of the confounder one adjusts for. The Collider.                                                    |
| **Hernán, Hernández-Díaz & Robins** | "A Structural Approach to Selection Bias" (_Epidemiology_, 2004)                                                     | **Selection as collider**: selection bias recast as collider-stratification bias, the act of selecting or conditioning on a common effect of exposure and outcome biasing the association between them. The Sample.                                                                   |
| **Elwert & Winship**                | "Endogenous Selection Bias: The Problem of Conditioning on a Collider Variable" (_Annual Review of Sociology_, 2014) | **The general statement**: across the social sciences, conditioning on a collider, including selecting a sample on an outcome the variables jointly cause, manufactures association where none exists, a hazard as general as confounding and less recognised. The Reading.           |
| **David Sackett**                   | "Bias in Analytic Research" (_Journal of Chronic Diseases_, 1979)                                                    | **The empirical footprint**: a catalogue of the biases of observational research, admission-rate (Berkson) bias among them, documenting that the artefact is not a curiosity but a recurring corruption of real findings acted on in practice. The World.                             |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the selector, the
  analyst, or the decider as a cheat or a fool, because the source finding is precisely that no cheating and no
  blunder is needed: selecting on the sum of two qualities is the sensible way to take the best, reading a
  correlation off a clean sample is what sound analysis does, and acting on a peer-reviewed finding is what a
  decider is supposed to do. The false trade-off is authored by no fraud and no fallacy and emerges from a sensible
  selection met by a sound reading, so the misfit is that a field of careful people, each doing the correct thing,
  reads a relationship off the shape of its own selection and spends real value on it, no faked data and no error
  of logic required.
- **No hero**: the play refuses to resolve the misfit into the analysis catching its own artefact. The one move that
  would break it is to reason about the selection that built the sample, to picture the units the gate excluded and
  ask what conditioning on the gate did, but the excluded units are invisible, a correlation in hand needs no
  defending, and a collider reads exactly like the confounder an analyst is trained to control for, so the same
  instinct that rightly adjusts for a common cause wrongly conditions on a common effect and casts the ghost. The
  reckoning is a finding undone only by imagining the sample one cannot see, not a pattern that flags itself as an
  artefact, so the cure for a manufactured trade-off is the one act the data can never prompt.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed as
  the house's, and its reach is not overstated. The staging is the house's; the hospital-data paradox is Berkson's,
  the formal account of the collider and of conditioning that opens its path is Pearl's, the recasting of selection
  bias as collider-stratification bias is Hernán, Hernández-Díaz and Robins's, the general statement of endogenous
  selection is Elwert and Winship's, and the empirical catalogue that shows admission-rate bias corrupting real
  research is Sackett's, each carried as carefully as the finding itself: the misfit stages the collider that ties
  two independent causes together and credits that the trade-off is real in the sample and false only in the world
  the sample was drawn from.

## Encoding

Source to constraint, per element.

- **[The Traits](piece_the_traits.md)**: carries the two qualities that are independent in the population (Berkson),
  the causes that share nothing but the gate they both feed.
- **[The Cutoff](piece_the_cutoff.md)**: carries the selection on the sum (Berkson; Sackett), the bar set on the two
  qualities together that makes the gate a common effect.
- **[The Trade-Off](piece_the_trade_off.md)**: carries the induced spurious association (Pearl; Hernán,
  Hernández-Díaz and Robins), the anti-correlation among the selected that is absent in the world.
- **[The Independence](piece_the_independence.md)**: carries the true population fact (Berkson), that the two
  qualities are unrelated, hidden by the selection and visible only in the whole.
- **[The Collider](piece_the_collider.md)**: carries the phenomenon whole (Pearl; Elwert and Winship), the common
  effect conditioned on and the association it manufactures between its causes.
