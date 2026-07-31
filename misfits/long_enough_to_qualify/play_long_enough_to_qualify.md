---
khai: play
title: "Long Enough to Qualify"
description: "You had to survive to be counted as treated, and the surviving gets credited to the treatment."
language: english
voice: "Careful and unremarkable on the surface: a physician treating when the moment arrives, a registrar writing down who was treated, an analyst comparing the treated with the untreated, and a number that checks out however many times it is checked. Underneath, the fact that the months a patient spent waiting to be treated are months in which they could not have died, because dying would have filed them in the other column, so those months are a survival advantage handed to the treatment by its own definition. No careless analyst and no padded study: every subject is present, every measurement is right, and every arithmetic step is exact. Held against its own limit: it needs exposure defined by an event that happens after the counting starts, it needs no confounder and survives randomisation, and it lifts where time is counted instead of people, at a price in evidence that has to be paid. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-31"
---

# Play: Long Enough to Qualify

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Long Enough to Qualify.
Most bad studies go wrong through something absent or something crooked. A variable nobody measured is doing the work; a group that never made it into the sample would have told the other story; a number has been shaded by someone who wanted an answer. These are the failures the training is built around, and the remedies are the obvious ones: measure more, sample better, check the arithmetic, audit the analyst.
And here is the case where none of that applies. Every subject is present and accounted for. Nothing is missing. No measurement is wrong. The arithmetic is exact and will be exact again for anyone who repeats it. And the finding is false.
And the mechanism is this. A cohort opens, and being counted as treated requires an event that takes time to arrive: an organ becomes available, a prescription is finally written, an award is finally won. Between entering the study and that moment, the subject cannot die. Not as a matter of luck, as a matter of construction, because a subject who died in that window would never have been recorded as treated at all and would sit in the other column entirely. The window is immortal by definition (Suissa).
And the record cannot hold this. A record carries one field per person, not one field per stretch of a person's life, so a patient who was untreated in March and treated in September is written down as treated, once, and the months of March through September travel with them into the treated column. Nobody decided that. It is what a field is.
And so the comparison runs between a group whose person-time contains a stretch in which nobody could possibly die and a group whose person-time does not, and the treated group wins by exactly that much. The advantage is the length of its own queue. Wait longer for transplants, and transplantation looks better. Give the award later in life, and winning it looks more life-extending (Sylvestre, Huszti and Hanley).
And nobody in it is careless. The physician treats when the moment arrives, which is the only time it can be done and the right time to do it. The registrar records who was treated, that being what the record is for. The analyst compares the treated with the untreated, which is the only classification the dataset offers, and computes correctly on it. The fault is in the step between a record and a denominator, and that is not a step anybody experiences as an inferential choice, which is precisely why checking the work does not find it.
And now the cruelty. The finding is legible, plausible, and useful. It says the treatment helps. It is written up, read, and acted on, and the physician who reads it is the same person whose entirely proper waiting produced it, so the loop closes with the practice changing on the strength of an artefact of its own scheduling.
And the correction costs. Count time instead of people, letting each subject contribute untreated months until the treatment and treated months after it, and the bias goes, and the analysis becomes harder to explain to the people who have to act on it. Or start the clock at a fixed date and keep whoever is alive at it, which is simple and defensible and works by throwing away every event before that date, which is the early, highest-hazard period the question most needs, and the date is arbitrary, so one picked after the curves have been seen lets the selection back in through the door it was brought to close (Lévesque, Hanley, Kezouh and Suissa).
And so the misfit is not that researchers are sloppy but that a fair comparison needs the right people and their time filed in the right place, and only the first of those is something a record is built to get right. Immortal time bias is Suissa's naming and general statement; the paired demonstration and the accounting of what each correction costs are Lévesque, Hanley, Kezouh, and Suissa's; and the reanalysis showing a famous survival advantage to be the artefact is Sylvestre, Huszti, and Hanley's. The house stages the waiting, the record, the crediting, the finding and the correction, and holds the bound in view: that it needs exposure defined by an event after entry, that it needs no confounder and would survive randomisation and perfect measurement, and that it lifts where time is counted rather than people, at a price in evidence, so the whole of it is that the months you had to survive in order to qualify get credited to the thing you qualified for.

## Arc

The bend is this: where being counted as exposed requires surviving until the exposure occurs, the waiting cannot contain a death, so crediting the waiting to the exposed group manufactures a survival advantage out of the definition, with every subject present, every number correct, and nothing for a careful reader to catch.
It runs on an exposure that has to be waited for.
The organ becomes available, the prescription is finally written, the award is finally won: being counted as treated requires arriving at a moment, and arriving requires still being alive (Suissa).
And a window that cannot contain a death. Between entry and that moment the subject cannot die, not by luck but by construction, since a death there would have filed them among the untreated.
And a record with one field per person. A life containing both states is written down under the state it ended in, so the waiting travels into the treated column with the patient, decided by nobody.
And a comparison that is therefore unfair before it begins. One group's person-time contains a stretch in which nobody could die and the other's does not, and the difference is the length of the queue.
And a finding exact in every step. Reproducible, checkable, legible and false, so auditing the arithmetic confirms it and reading more carefully does not help.
And a loop that closes on the people who made it. The practice changes on the strength of an artefact of its own scheduling, and the physician acting on the paper is the one whose proper waiting produced it.
And a correction that costs evidence. Count time and the analysis becomes harder to act on; set a landmark and it works by discarding the early, highest-hazard period, on a date with no correct value.
And the whole is held against its own limit. It needs exposure defined after entry, needs no confounder, survives randomisation and perfect measurement, and lifts only where time is counted instead of people.

## Company

**Pitch**

- [The Treated Live Longer](pitch_the_treated_live_longer.md)

**Personas**

- [The Physician](persona_the_physician.md)
- [The Registrar](persona_the_registrar.md)
- [The Analyst](persona_the_analyst.md)
- [The Reviser](persona_the_reviser.md)

**Positions**

- [Physician](position_physician.md)
- [Registrar](position_registrar.md)
- [Analyst](position_analyst.md)
- [Reviser](position_reviser.md)

**Plans**

- [Treat When the Moment Comes](plan_treat_when_the_moment_comes.md)
- [Record What Happened](plan_record_what_happened.md)
- [Compare the Treated with the Untreated](plan_compare_the_treated_with_the_untreated.md)
- [Count the Time, Not the Person](plan_count_the_time_not_the_person.md)

**Places**

- [The Ward](place_the_ward.md)
- [The Register](place_the_register.md)
- [The Table](place_the_table.md)
- [The Round](place_the_round.md)
- [The Reanalysis](place_the_reanalysis.md)

**Processes**

- [Waiting](process_waiting.md)
- [Filing](process_filing.md)
- [Crediting](process_crediting.md)
- [Adopting](process_adopting.md)
- [Revising](process_revising.md)

**Pieces**

- [The Waiting](piece_the_waiting.md)
- [The One Column](piece_the_one_column.md)
- [The Gift](piece_the_gift.md)
- [The Finding](piece_the_finding.md)
- [The Landmark](piece_the_landmark.md)
- [The Boundary](piece_the_boundary.md)

## Triggers

**[You Had to Live to Get It](plot_you_had_to_live_to_get_it.md)**
The setup, a treatment that has to be waited for. At [the Ward](place_the_ward.md), through [Waiting](process_waiting.md), [the Physician](persona_the_physician.md) on [Treat When the Moment Comes](plan_treat_when_the_moment_comes.md) sets [the Waiting](piece_the_waiting.md): the organ becomes available in month seven, and the months before it are months the patient had to survive in order to be treated at all. Closes with a window that cannot contain a death, not by luck but by construction, since a death inside it would have filed the patient among the untreated (Suissa).

**[One Line Per Patient](plot_one_line_per_patient.md)**
Cue: what happened has to be written down. At [the Register](place_the_register.md), through [Filing](process_filing.md), [the Registrar](persona_the_registrar.md) on [Record What Happened](plan_record_what_happened.md) sets [the One Column](piece_the_one_column.md): the record carries one field per person and not one per stretch of a person's life, so a patient untreated in March and treated in September is written down as treated, once. Closes with the waiting travelling into the treated column alongside the patient, by a decision nobody made.

**[The Months That Could Not Kill](plot_the_months_that_could_not_kill.md)**
Cue: the comparison everyone came for. At [the Table](place_the_table.md), through [Crediting](process_crediting.md), [the Analyst](persona_the_analyst.md) on [Compare the Treated with the Untreated](plan_compare_the_treated_with_the_untreated.md) hands over [the Gift](piece_the_gift.md) and produces [the Finding](piece_the_finding.md): one group's person-time contains a stretch in which nobody could die and the other's does not, so the treated survive better by the length of their own queue. Closes with a result exact in every step, reproducible by anyone who repeats it, and false (Sylvestre, Huszti and Hanley).

**[It Changes What We Do](plot_it_changes_what_we_do.md)**
Cue: the paper is read by the people it is about. At [the Round](place_the_round.md), through [Adopting](process_adopting.md), [the Physician](persona_the_physician.md) on [Treat When the Moment Comes](plan_treat_when_the_moment_comes.md) meets [the Finding](piece_the_finding.md) again from the other side: it is legible, plausible, useful, and it says the treatment helps, so practice moves. Closes with the loop shut, the physician acting on an artefact of his own scheduling and having no way, from inside the paper, to see it.

**[Count the Time Instead](plot_count_the_time_instead.md)**
Cue: someone asks what the denominator is made of. At [the Reanalysis](place_the_reanalysis.md), through [Revising](process_revising.md), [the Reviser](persona_the_reviser.md) on [Count the Time, Not the Person](plan_count_the_time_not_the_person.md) breaks each subject into untreated months and treated months, and the advantage goes; then holds [the Landmark](piece_the_landmark.md) and [the Boundary](piece_the_boundary.md): the simpler fix starts a clock at a fixed date and works by discarding every event before it, which is the early, highest-hazard period, on a date with no correct value. Closes with the bias removed and the evidence dearer, the correct analysis being the harder one to act on (Lévesque, Hanley, Kezouh and Suissa).

## Stakes

Whether a comparison can be fair when everybody in it is counted and their time is not.
Every plot but the last moves the same way: toward a step that is correct on its own terms, which it is, and toward a survival advantage that belongs to the definition rather than the treatment, because being counted as treated required surviving to be treated. The production cannot let a careful reader catch it, because there is nothing of the usual kind to catch: no subject is missing, no measurement is wrong, no number is shaded, and the arithmetic is exact and will be exact again for anyone who checks, so auditing the work confirms the result and reading more closely does not help. It can only show that nobody is careless, that the physician treats when the moment arrives because that is the only time it can be done, that the registrar records who was treated because that is what the record is for, that the analyst compares the treated with the untreated because that is the only classification the data offers, and that the fault lives in the step between a record and a denominator, which nobody experiences as an inferential choice at all. And it holds the bound in view, because the trap is conditional and not universal: it needs exposure defined by an event occurring after entry, it needs no confounder and no collider and would survive randomisation and perfect measurement, and it lifts where time is counted instead of people, at a real price, since the time-varying analysis is harder to act on and the landmark buys its correctness by discarding the early, highest-hazard period on a date nobody can set correctly (Suissa; Lévesque, Hanley, Kezouh and Suissa), so the whole of the misfit is that the months you had to survive in order to qualify are credited to the thing you qualified for.
