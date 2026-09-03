---
khai: play
title: "Wherever You Draw It"
description: "A statistic computed over areas moves when the areas are redrawn, and no drawing is the correct one."
language: english
license: CC-BY-NC-SA-4.0
voice: "A quantitative geographer presenting a finding to a committee that wants the number: exact about what was computed, unwilling to call any zoning the right one, and refusing to pretend the spread is a confidence interval. No dashes: colons, full stops, and the coefficient quoted where the coefficient is the point."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-09-02"
---

# Play: Wherever You Draw It

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Wherever You Draw It.
A relationship between two things is measured across a territory: deprivation against illness, density against emissions, income against turnout.
The territory arrives already cut into areas, by a census bureau or a boundary commission or an act a century old, for reasons that had nothing to do with the question.
The coefficient is computed. It is correct. Redraw the areas, at a different size or in a different shape, and it is a different coefficient, and that one is correct too.

## Arc

The bend is this: the analysis requires a partition, the phenomenon does not supply one, and every partition that is available was drawn for something else.

It runs on one relation from method and one from the ground. **A statistic computed over aggregates is a statistic about the aggregates**, so grouping is not a step before the analysis but part of it; and on the ground, **the areas exist already**, drawn by somebody for administration, and the analyst inherits them the way they inherit the weather.

Take the units first, because the play has to establish that nothing was done wrongly. Nobody chose these boundaries to get a result. A census tract is sized for enumeration, a ward for representation, a postcode for delivery; each was drawn well for its own purpose and none was drawn against the question being asked. And an analyst who wanted different ones usually cannot have them, because the data are published at the units and not below them.

Then the fact that inverts it. **The effect has two limbs and both are live.** Change the size of the areas and the coefficient moves, which is the scale effect and is at least monotone enough to reason about. Change only the shape, holding the number of areas fixed, and it moves again, which is the zonation effect and is not: the same territory cut into the same number of pieces a different way gives a different answer, and there is no ordering of those answers to prefer.

Then the sharper half, which is why the usual remedies do not reach it. **The number is not uncertain, it is conditional on a choice nobody can defend.** A confidence interval says how much the estimate would move if the sample were drawn again; nothing here was sampled again. Pre-registering the zoning fixes the analyst's honesty and not the problem, because declaring in advance which arbitrary partition will be used does not make it the right one. And it is worse in more dimensions rather than better: with several variables the direction of the movement is not predictable at all.

And nobody has done anything wrong. The boundary commission drew for representation. The bureau published at the units it enumerates. The analyst used the data that exist, computed the standard model, and reported the coefficient it returned. The reader took a number from a table.

Reach for a settlement and each one gives back the thing that was wanted. Run every zoning you can construct and report the spread, and you have replaced one number with a range that is not a confidence interval and that no committee can act on. Model at the individual level and you have left the question, since the question was about areas. Use a single natural unit and there usually is not one. And publish one coefficient with a note about its units, which is what almost everybody does, and the note is read as a caveat rather than as the whole of it.

## Company

**Pitch**

- [Nobody Drew It Against You](pitch_nobody_drew_it_against_you.md)

**Personas**

- [The Analyst](persona_the_analyst.md)
- [The Boundary](persona_the_boundary.md)
- [The Estimate](persona_the_estimate.md)
- [The Reader](persona_the_reader.md)
- [The Sensitivity Run](persona_the_sensitivity_run.md)

**Positions**

- [Partition](position_partition.md)
- [Computation](position_computation.md)
- [Publication](position_publication.md)
- [Reading](position_reading.md)
- [Recourse](position_recourse.md)

**Plans**

- [Use the Units You Have](plan_use_the_units_you_have.md)
- [Compute the Coefficient](plan_compute_the_coefficient.md)
- [Publish One Number](plan_publish_one_number.md)
- [Read It as a Fact](plan_read_it_as_a_fact.md)
- [Show the Spread](plan_show_the_spread.md)

**Places**

- [The Map](place_the_map.md)
- [The Table](place_the_table.md)
- [The Boundary File](place_the_boundary_file.md)

**Processes**

- [Drawing](process_drawing.md)
- [Aggregating](process_aggregating.md)
- [Estimating](process_estimating.md)
- [Reporting](process_reporting.md)
- [Re-cutting](process_re_cutting.md)

**Pieces**

- [Drawn for Something Else](piece_drawn_for_something_else.md)
- [Two Effects, Not One](piece_two_effects_not_one.md)
- [Declaring It Does Not Fix It](piece_declaring_it_does_not_fix_it.md)
- [Worse in More Dimensions](piece_worse_in_more_dimensions.md)
- [Not a Frequentist Problem](piece_not_a_frequentist_problem.md)

## Triggers

**[The Units Arrive Already Drawn](plot_the_units_arrive_already_drawn.md)**
The partition established as inherited rather than chosen: tracts sized for enumeration, wards for representation, postcodes for delivery, each drawn well for its own purpose and none against this question. Closes when it is clear the analyst did not pick these and mostly cannot have others.

**[The Number Comes Out](plot_the_number_comes_out.md)**
Cue: the model, correctly specified and correctly run. Closes when the coefficient exists, is right, and is about the areas rather than about the people in them, so the aggregation is inside the estimate and not before it.

**[Cut It Again](plot_cut_it_again.md)**
Cue: the same territory, the same data, a different set of boundaries. Closes when both limbs are visible: a different size moves the estimate, and a different shape at the same size moves it again, with no ordering of the answers to prefer.

**[The Reader Cannot Tell](plot_the_reader_cannot_tell.md)**
Cue: the published table. Closes when it is shown that nothing in the number marks it as partition-dependent, that the confidence interval beside it answers a different question, and that declaring the zoning in advance would have changed the analyst's standing and not the estimate.

**[And Somebody Has to Publish One](plot_and_somebody_has_to_publish_one.md)**
Cue: the settlements. Closes when each is found to give back what it was for: a spread across zonings that is not an interval and that no committee can act on, an individual-level model that has left the question, a natural unit that mostly does not exist, and a caveat that is read as a caveat.

## Stakes

Whether a number computed over areas can be reported as a fact about anything but the areas.
Every plot moves the same question forward: not whether the boundaries are bad, because each was drawn well for its own purpose, and not whether the model is wrong, because it is right, but whether an estimate whose value depends on a partition nobody can justify is a measurement of the world. The production cannot settle it. It can only show that the units were inherited, that the aggregation is part of the estimate, that both scale and shape move it, that nothing in the report marks the dependence, and that every escape either abandons the question or returns a range instead of an answer.
