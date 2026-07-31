---
updated: "2026-07-31"
---

# Saved for Something Else: Reference

The research warrant for **Saved for Something Else**, a staging of the phenomenon the literature calls
**competing risks**, and of the censoring fault that follows from ignoring them (Jason Fine and Robert
Gray; Andersen and colleagues): that standard survival analysis treats a subject who dies of another
cause as **censored**, which is to say as someone who would have gone on being at risk, so the curve
overstates the studied event and any therapy that removes one cause of death mechanically inflates the
observed rate of every cause that remains. It is held with the finding that the arithmetic is correct
at every step, that the fault is a default designed for one kind of loss applied to another, and that
the correction costs an estimand nobody can interpret for a single patient.

## Line of Work

Staging competing risks as a **the-cure-convicts-itself structure**: censoring is one of the first
things taught in survival analysis and it is taught correctly. A subject who leaves the study, or who
is still alive when the study closes, has simply stopped being observed, and the honest thing to do
with them is to count the time they contributed and then let them go, assuming they carry on being at
risk in the world beyond the data. That assumption is exactly right for administrative loss, which is
the case the method was built for: the study ended, the calendar ran out, the person moved away, and
none of those has anything to do with whether they were going to have the event. Then the same default
meets a different kind of loss. A subject who dies of something else has not stopped being observed:
they have stopped being **at risk**, permanently and for a reason that is not independent of the
outcome under study. Treated as censored, they are counted as though they might still have the event,
so the estimated incidence of the studied event is pushed above the truth. And the second consequence
is the one that does the damage in public: because everybody must die of something, removing one cause
of death raises the observed rate of every other. Cure the cancer and the cardiac events in long-term
survivors go up, truly and measurably, and the oncologist reporting them is reporting a real count,
and the regulator asking whether the therapy caused them is asking the question a regulator exists to
ask. The play models the censoring that is correct for one kind of loss, the other death that is not
that kind, the inflation of every remaining cause, the ghost the correction leaves in the risk set,
and the two right answers that point opposite ways, as the load-bearing vectors of the structure, and
not as a tale of a careless analyst. The ordinary expectation is that a successful therapy shows up as
fewer deaths; the finding is that it also shows up as more of every other kind. The governing law is
that **where a subject can be removed from risk by an event other than the one being counted, treating
that removal as censoring counts them as still at risk, so the studied event is overstated and every
cause a successful therapy does not prevent appears to rise**.

It is an inference structure no staged misfit holds, and it is carefully distinct from its nearest
neighbours. It is distinct from The Survivors, Wald's survivorship bias, whose lesson is to reason
about the units that never appear: there the absent are the problem and the remedy is to count them,
whereas here the absent are **counted, and counted as though still present**, which is the opposite
error, and no amount of attention to who is missing reaches it. It is distinct from Long Enough to
Qualify, immortal time bias, which also misfiles person-time: there the fault is that a stretch of one
subject's life is credited to the wrong arm, with every subject correctly classified, whereas here no
person-time is moved at all and the fault is that a subject who has permanently left the risk set is
carried in it. It is distinct from Better in Both, the Will Rogers phenomenon, where reclassifying
patients between stages lifts both stages' averages although no one's course changed: there the
movement is between **categories of person**, whereas here nobody is reclassified and the movement is
in which deaths the denominator is willing to count. And it is distinct from The False Trade-Off,
collider and selection bias, which requires conditioning on a common effect: competing risks needs no
collider and no conditioning, and would appear in a perfectly randomised trial with complete
follow-up, because the fault is in what the risk set is taken to contain rather than in what has been
adjusted for.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                                            | Key Work / Event                                                                                                                                                    | Scope                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Jason Fine, Robert Gray**                                       | "A Proportional Hazards Model for the Subdistribution of a Competing Risk" (_Journal of the American Statistical Association_, 1999)                                | **The correction and its price**: regression on the subdistribution hazard, which estimates the quantity that actually answers the clinical question, and whose risk set retains subjects already dead of the competing cause, so the hazard ratio has no individual reading. The Ghost. |
| **Ross Prentice, John Kalbfleisch and colleagues**                | "The analysis of failure times in the presence of competing risks" (_Biometrics_, 1978)                                                                             | **The framing**: cause-specific hazards set out as the right object for aetiology, and the reasons an event that removes a subject from risk is not the same as an event that stops observing them. The Censoring, The Other Death.                                                      |
| **Per Kragh Andersen, Ronald Geskus, Theo de Witte, Hein Putter** | "Competing risks in epidemiology: possibilities and pitfalls" (_International Journal of Epidemiology_, 2012)                                                       | **The two answers**: cause-specific and subdistribution analyses answer different questions, routinely point in different directions on one dataset, and the choice between them is not settled by the data. The Two Answers, The Boundary.                                              |
| **Practitioner**                                                  | the survivor cohort whose cardiac events rise as the cancer deaths fall; the safety signal that is a real count and not a real effect; the curve that sums past one | The trap in the field, and its cost: a therapy that works, a rise in every cause it does not prevent, and a question about harm that the standard analysis answers wrongly while getting every number right.                                                                             |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast a
  statistician cutting corners or a sponsor burying a signal, because the finding it stages needs
  neither. Censoring a subject who has stopped being observed is the correct, taught handling and is
  right for the case the method was built for, which is administrative loss. The oncologist reporting
  more cardiac events among long-term survivors is reporting a true count, and would be concealing
  something if it did not. The regulator asking whether the therapy caused them is asking exactly the
  question it exists to ask, and a regulator that shrugged at a rising death rate would be failing.
  The fault is a default meeting a kind of loss it was not designed for, and nothing in the default,
  the report or the question is wrong on its own terms.
- **No hero**: the play refuses to resolve the misfit into a costless correction, and here the price is
  unusually exact. The cumulative incidence function and Fine and Gray's subdistribution regression
  estimate the quantity that answers the clinical question, and the subdistribution risk set does it by
  **retaining subjects who have already died of the competing cause**, so the hazard ratio it produces
  has no interpretation for any individual patient: a correct population answer is bought by giving up
  the ability to say what the model means for the person in front of you. And the deeper cost is that
  cause-specific and subdistribution analyses are both right, answer different questions, and routinely
  point in different directions on the same data, so the analyst must choose, and the choice is a
  question about what is being asked rather than one the data can settle.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The subdistribution hazard model is Jason Fine and Robert Gray's; the framing
  of cause-specific hazards and of why a competing event is not a censoring event is Prentice,
  Kalbfleisch and colleagues'; and the statement that the two analyses answer different questions and
  can disagree on one dataset is Andersen, Geskus, de Witte and Putter's. Both leading authors here
  share a surname with a scholar the house already cites, Paul Fine on herd immunity in Borrowed
  Immunity and J. A. Muir Gray on screening in It Saved My Life, and they are different people; the
  house's `scholarPolicy.homonyms` declares both surnames so the index separates them, and the given
  names are carried in every affected source cell for that reason. The scope is held to analyses in
  which a subject can be removed from risk by an event other than the one being counted, and is not
  stretched into a claim that survival analysis is unreliable, that the reported safety signals were
  fabricated, or that the therapies concerned do not work.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Censoring**: carries the default (Prentice, Kalbfleisch and colleagues), the taught and correct
  handling of a subject who has stopped being observed, built for administrative loss and right for it,
  which is why it is applied without a second thought to a loss of a different kind.
- **The Other Death**: carries the competing event, a removal from risk rather than a pause in
  observation, permanent and not independent of the outcome under study, so the one assumption
  censoring rests on is the one thing that does not hold.
- **The Inflation**: carries the public consequence, that everybody dies of something, so removing one
  cause raises the observed rate of every cause remaining, and a therapy that works produces a true
  rise in the deaths it did not prevent.
- **The Ghost**: carries the price of the correction (Jason Fine and Robert Gray), the subdistribution
  risk set retaining subjects already dead of the competing cause, so the hazard ratio that answers the
  population question cannot be read for any individual patient.
- **The Two Answers**: carries the deeper cost (Andersen, Geskus, de Witte and Putter), cause-specific
  and subdistribution analyses both correct, answering different questions, and pointing in different
  directions on one dataset, so the analyst must choose and the data does not choose for them.
- **The Boundary**: carries the condition and the hedge, that the trap needs an event able to remove a
  subject from risk other than the one being counted, that it needs no collider, no confounder and no
  missing data and would appear in a randomised trial with complete follow-up, and that it lifts where
  the question is stated precisely enough to name which of the two hazards answers it.
