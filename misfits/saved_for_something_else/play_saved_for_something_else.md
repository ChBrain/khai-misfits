---
khai: play
title: "Saved for Something Else"
description: "Treat a patient who died of something else as still at risk, and every cause the cure did not prevent seems to rise."
language: english
voice: "Methodical and unalarmed on the surface: an analyst censoring the subjects it stopped observing, exactly as it was taught; an oncologist reporting more cardiac events among long-term survivors, which is a true count; and a regulator asking whether the therapy caused them, which is the question a regulator exists to ask. Underneath, the fact that a patient who died of something else has not stopped being observed but stopped being at risk, so counting them as censored counts them as though they might still have the event, and since everybody dies of something, curing one cause raises the observed rate of all the rest. No careless statistician and no buried signal: the arithmetic is right at every step and the fault is a default meeting a kind of loss it was not built for. Held against its own limit: it needs an event that removes a subject from risk, it needs no collider and would appear in a randomised trial, and the correction buys a correct population answer by keeping the dead in the risk set. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-31"
---

# Play: Saved for Something Else

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Saved for Something Else.
Censoring is one of the first things taught in survival analysis, and it is taught correctly. Somebody leaves the study, or is still alive when the study closes. They have not had the event and they have not not-had it either: you simply stopped watching. So you count the time they gave you and let them go, assuming they carry on being at risk out there in the world beyond your data. That is exactly right for the case the method was built for, which is administrative loss. The calendar ran out. The family moved away. Neither of those has the faintest thing to do with whether the person was going to have the event.
And then the same default meets a different kind of loss.
A patient who dies of something else has not stopped being observed. They have stopped being at risk, permanently, for a reason that is not independent of the thing you are counting. Treat that as censoring and you have written down that they might still have the event, and they might not: they are dead. The estimated incidence of your event goes up above the truth, and it goes up by exactly the amount you refused to concede (Prentice, Kalbfleisch and colleagues).
And the second consequence is the one that gets into the newspapers. Everybody dies of something. So if a therapy removes one cause of death, the observed rate of every remaining cause rises. Cure the cancer, and the cardiac events among long-term survivors go up. Not as an artefact of anybody's sloppiness: genuinely, measurably, in the record. The people who would have died of the tumour are alive to die of something else, and the something else is now visible.
And nobody in it is doing anything wrong. The analyst censored the ones it stopped watching, which is the taught handling. The oncologist reported more cardiac events in the survivor cohort, which is a true count and which it would be concealing something not to report. The regulator asked whether the therapy caused them, which is precisely the question a regulator exists to ask, and a regulator that shrugged at a rising death rate would be failing at its job.
And so a treatment that works gets a safety signal that is real in the numbers and false about the world, and every number in it survives checking.
And now the correction, which is real and costs something unusually specific. The cumulative incidence function, and Fine and Gray's regression on the subdistribution hazard, estimate the quantity that actually answers the clinical question, and they do it by keeping in the risk set people who have already died of the competing cause (Jason Fine and Robert Gray). Those people are not at risk of anything. They are held there so the arithmetic comes out right at the level of the population, and the price is that the hazard ratio the model produces cannot be read for any individual patient at all.
And under that sits the deeper trouble. Cause-specific hazards and subdistribution hazards are both correct. They answer different questions, and on the same dataset they routinely point in different directions, and there is no experiment that settles which one you wanted (Andersen, Geskus, de Witte and Putter). The analyst has to choose, and the choice is a question about what was being asked rather than a question the data can answer.
And so the misfit is not that anyone was careless but that a default built for one kind of disappearance was applied to another, and the arithmetic did the rest. The subdistribution model is Jason Fine and Robert Gray's; the framing of cause-specific hazards, and of why a competing event is not a censoring event, is Prentice, Kalbfleisch, and colleagues'; and the finding that the two analyses answer different questions and can disagree is Andersen, Geskus, de Witte, and Putter's. The house stages the censoring, the other death, the inflation, the ghost in the risk set, and the two answers, and holds the bound in view: that it needs an event which removes a subject from risk, that it needs no collider and would appear in a randomised trial with complete follow-up, and that it lifts only where the question is stated precisely enough to name which hazard answers it, so the whole of it is that the patient your treatment saved is still going to die of something, and your analysis will hold you responsible for it.

## Arc

The bend is this: where a subject can be removed from risk by an event other than the one being counted, treating that removal as censoring counts them as though still at risk, so the studied event is overstated and every cause a working therapy does not prevent appears to rise, with no error at any step and every number correct.
It runs on a default that is right for what it was built for.
A subject who stops being observed is censored: count their time and let them go, assuming they remain at risk. Exactly correct for administrative loss, which is the case it was designed for.
And a loss of a different kind. A patient who dies of something else has not stopped being observed but has stopped being at risk, permanently, for a reason not independent of the outcome (Prentice, Kalbfleisch and colleagues).
And an incidence pushed above the truth. Counted as censored, the dead are counted as though they might still have the event, so the estimated rate of the studied event rises by exactly what was not conceded.
And a rise in everything the cure did not prevent. Everybody dies of something, so removing one cause raises the observed rate of every remaining one, truly and measurably and in the record.
And a safety signal that is real in the numbers and false about the world. The count is right, the report is honest, and the question about harm is the right question to ask.
And a correction that keeps the dead in the risk set. Subdistribution regression answers the population question by retaining subjects already dead of the competing cause, so its hazard ratio has no individual reading (Jason Fine and Robert Gray).
And two right answers that disagree. Cause-specific and subdistribution hazards answer different questions and point different ways on one dataset, with no experiment to choose between them.
And the whole is held against its own limit. It needs an event that removes a subject from risk, needs no collider, would appear in a randomised trial, and lifts where the question names which hazard answers it.

## Company

**Pitch**

- [Look What It Did to Their Hearts](pitch_look_what_it_did_to_their_hearts.md)

**Personas**

- [The Analyst](persona_the_analyst.md)
- [The Oncologist](persona_the_oncologist.md)
- [The Regulator](persona_the_regulator.md)
- [The Methodologist](persona_the_methodologist.md)

**Positions**

- [Analyst](position_analyst.md)
- [Oncologist](position_oncologist.md)
- [Regulator](position_regulator.md)
- [Methodologist](position_methodologist.md)

**Plans**

- [Count the Time They Gave You](plan_count_the_time_they_gave_you.md)
- [Report What the Cohort Shows](plan_report_what_the_cohort_shows.md)
- [Ask If the Treatment Did It](plan_ask_if_the_treatment_did_it.md)
- [Name Which Hazard You Want](plan_name_which_hazard_you_want.md)

**Places**

- [The Risk Set](place_the_risk_set.md)
- [The Follow-Up Clinic](place_the_follow_up_clinic.md)
- [The Safety Review](place_the_safety_review.md)
- [The Reanalysis](place_the_reanalysis.md)

**Processes**

- [Censoring](process_censoring.md)
- [Competing](process_competing.md)
- [Inflating](process_inflating.md)
- [Retaining](process_retaining.md)
- [Choosing](process_choosing.md)

**Pieces**

- [The Censoring](piece_the_censoring.md)
- [The Other Death](piece_the_other_death.md)
- [The Inflation](piece_the_inflation.md)
- [The Ghost](piece_the_ghost.md)
- [The Two Answers](piece_the_two_answers.md)
- [The Boundary](piece_the_boundary.md)

## Triggers

**[Count the Time and Let Them Go](plot_count_the_time_and_let_them_go.md)**
The setup, a rule that is correct for the case it was built for. At [the Risk Set](place_the_risk_set.md), through [Censoring](process_censoring.md), [the Analyst](persona_the_analyst.md) on [Count the Time They Gave You](plan_count_the_time_they_gave_you.md) sets [the Censoring](piece_the_censoring.md): a subject who stops being observed contributes the time they gave and is released, on the assumption that they carry on being at risk beyond the data. Closes with the assumption exactly right for administrative loss, which is what the method was designed for and what it is being taught against (Prentice, Kalbfleisch and colleagues).

**[They Did Not Stop Being Watched](plot_they_did_not_stop_being_watched.md)**
Cue: a different kind of loss arrives at the same rule. At [the Risk Set](place_the_risk_set.md), through [Competing](process_competing.md), [the Analyst](persona_the_analyst.md) on [Count the Time They Gave You](plan_count_the_time_they_gave_you.md) meets [the Other Death](piece_the_other_death.md): the patient who died of something else has not stopped being observed but has stopped being at risk, permanently, for a reason not independent of the outcome. Closes with them counted as though they might still have the event, and the estimated incidence pushed above the truth by exactly that much.

**[Cure One, and the Rest Come Forward](plot_cure_one_and_the_rest_come_forward.md)**
Cue: the therapy works. At [the Follow-Up Clinic](place_the_follow_up_clinic.md), through [Inflating](process_inflating.md), [the Oncologist](persona_the_oncologist.md) on [Report What the Cohort Shows](plan_report_what_the_cohort_shows.md) sets [the Inflation](piece_the_inflation.md): everybody dies of something, so removing one cause raises the observed rate of every cause remaining, and the cardiac events among long-term survivors rise, truly and measurably. Closes with an honest report of a real count, which it would be concealing something not to make.

**[Did the Treatment Do This](plot_did_the_treatment_do_this.md)**
Cue: a rising death rate reaches the people whose job is to notice. At [the Safety Review](place_the_safety_review.md), through [Inflating](process_inflating.md), [the Regulator](persona_the_regulator.md) on [Ask If the Treatment Did It](plan_ask_if_the_treatment_did_it.md) reads [the Inflation](piece_the_inflation.md) as a signal: the question is whether the therapy caused the deaths, which is exactly the question a regulator exists to ask. Closes with a safety signal that is real in the numbers and false about the world, and with every figure in it surviving every check.

**[Keep the Dead in the Risk Set](plot_keep_the_dead_in_the_risk_set.md)**
Cue: somebody asks what the correct analysis would be. At [the Reanalysis](place_the_reanalysis.md), through [Retaining](process_retaining.md), [the Methodologist](persona_the_methodologist.md) on [Name Which Hazard You Want](plan_name_which_hazard_you_want.md) produces [the Ghost](piece_the_ghost.md): the cumulative incidence function and the subdistribution regression answer the clinical question, and they do it by retaining in the risk set subjects who have already died of the competing cause. Closes with a correct population answer bought by a hazard ratio that cannot be read for any individual patient (Jason Fine and Robert Gray).

**[Both Answers Are Right](plot_both_answers_are_right.md)**
Cue: the two analyses are run on the same data. At [the Reanalysis](place_the_reanalysis.md), through [Choosing](process_choosing.md), [the Methodologist](persona_the_methodologist.md) on [Name Which Hazard You Want](plan_name_which_hazard_you_want.md) holds [the Two Answers](piece_the_two_answers.md) and [the Boundary](piece_the_boundary.md): cause-specific and subdistribution hazards are both correct, answer different questions, and point in different directions here. Closes with the analyst obliged to choose, the choice being a question about what was asked rather than one the data can settle (Andersen, Geskus, de Witte and Putter).

## Stakes

Whether an analysis can tell a patient saved from one thing apart from a patient killed by another.
Every plot but the last moves the same way: toward a step that is correct on its own terms, which each is, and toward a working therapy accumulating a safety signal it did not earn, because a default built for a subject who stopped being watched was applied to a subject who stopped being at risk. The production cannot let a careful reader catch it in the usual way, since no subject is missing, no measurement is wrong and no number is shaded: the count of cardiac events is exact, the report of it is honest, and the question about harm is the right question. It can only show that nobody is careless, that censoring the unobserved is the taught and correct handling for the case it was built for, that an oncologist who suppressed a rise in deaths would be concealing something, that a regulator who shrugged at one would be failing, and that the fault lives in a default meeting a kind of loss it was never designed for. And it holds the bound in view, because the trap is conditional and not universal: it needs an event able to remove a subject from risk other than the one being counted, it needs no collider and no confounder and would appear in a randomised trial with complete follow-up, and it lifts only where the question is stated precisely enough to name which hazard answers it, at the price of a correction whose risk set keeps the dead in it and whose hazard ratio no clinician can read for one patient (Jason Fine and Robert Gray; Andersen, Geskus, de Witte and Putter), so the whole of the misfit is that the patient your treatment saved is still going to die of something, and your analysis will hold you responsible for it.
