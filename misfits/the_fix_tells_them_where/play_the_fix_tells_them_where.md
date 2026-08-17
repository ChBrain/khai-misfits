---
khai: play
title: "The Fix Tells Them Where"
description: "Shipping the fix states exactly what was wrong, so protecting the fleet arms the attack on everyone not yet updated."
language: english
license: CC-BY-NC-SA-4.0
voice: "Operational and level, the register of a release Tuesday rather than an incident: a maintainer with a fix ready, an advisory to write, an estate that updates on its own schedule. Underneath, the fact that the repair and the description of the flaw are the same object. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-17"
---

# Play: The Fix Tells Them Where

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

The Fix Tells Them Where.
A maintainer has a fix ready for a flaw nobody outside has reported, and shipping it is plainly right and plainly urgent. So it ships, with an advisory saying enough for operators to know whether they are affected. Anybody can now take the old build and the new one and read the difference, and the difference states the flaw exactly: not that something was wrong somewhere, but which check was missing, on which path, in which version. On the day of publication almost nobody has applied it.

## Arc

The bend is this: the repair and the description of the flaw are the same object, so protecting the estate publishes the way in.
It runs on a fix that must ship and must ship fast.
[The Maintainer](persona_the_maintainer.md) has no version of this in which waiting is safer. The flaw is there whether or not it is patched, somebody else may already have it, and every day unshipped is a day the estate is open with nobody able to close it.
And the difference between two builds is a specification.
[The Two Builds](piece_the_two_builds.md) can be compared by anybody who has both, and both are public by construction, since one is what everybody is running and the other is what they are being asked to run. [The Diff](persona_the_diff.md) is not a hint: it locates the check that was missing, which is most of the work of using it.
Then [Most of the Fleet Is Still Open](plot_most_of_the_fleet_is_still_open.md).
[The Fleet](persona_the_fleet.md) does not update on the day. It updates over weeks and months, across maintenance windows, change freezes, embedded devices and things nobody knows they run, so [the update curve](piece_the_update_curve.md) is long and shallow and the publication lands at its start.
And every way of saying less costs the defenders more than it costs anybody else.
[The Advisory](piece_the_advisory.md) is how an operator decides whether this one is worth an emergency window, so a vague one leaves the careful reader unable to prioritise and the diff readable regardless: the information withheld is withheld from the only party that needs to act on it.
And the window is not the maintainer's to close. [The Window](persona_the_window.md) shuts when the last machine updates, which is a fact about other people's estates, so the party who bears the exposure and the party who can end it are not the same party.
So the fix is right, the advisory is right, the timing is right, and the day after publication is the most dangerous day the flaw has ever had.

## Company

**Pitch**

- [Here Is What Was Wrong](pitch_here_is_what_was_wrong.md)

**Personas**

- [The Maintainer](persona_the_maintainer.md)
- [The Diff](persona_the_diff.md)
- [The Fleet](persona_the_fleet.md)
- [The Window](persona_the_window.md)
- [The Flaw](persona_the_flaw.md)

**Positions**

- [Maintainer](position_maintainer.md)
- [Diff](position_diff.md)
- [Fleet](position_fleet.md)
- [Window](position_window.md)
- [Flaw](position_flaw.md)

**Plans**

- [Close the Hole](plan_close_the_hole.md)
- [Know What to Patch](plan_know_what_to_patch.md)
- [Be Shut Before It Is Read](plan_be_shut_before_it_is_read.md)

**Places**

- [The Release](place_the_release.md)
- [The Day After](place_the_day_after.md)

**Processes**

- [Finding It](process_finding_it.md)
- [Shipping It](process_shipping_it.md)
- [Reading the Difference](process_reading_the_difference.md)
- [Applying It](process_applying_it.md)

**Pieces**

- [The Two Builds](piece_the_two_builds.md)
- [The Advisory](piece_the_advisory.md)
- [The Update Curve](piece_the_update_curve.md)

## Triggers

**[Ship It Today](plot_ship_it_today.md)**
Cue: a fix ready for a flaw nobody outside has reported, and a maintainer deciding when to release. Closes when waiting has been shown to be worse on its own terms, since the flaw is there either way and every unshipped day is a day nobody can close it.

**[The Difference Is a Specification](plot_the_difference_is_a_specification.md)**
Cue: the old build and the new one, both public because one is what everybody runs and the other is what they must run. Closes when the comparison has been shown to locate the missing check rather than hint at it, which is most of the work of using it.

**[Most of the Fleet Is Still Open](plot_most_of_the_fleet_is_still_open.md)**
Cue: publication day, and an estate that updates on its own schedule. Closes when the update curve has been found to be long and shallow and the publication to land at its start, so the specification is public while almost nothing has applied it.

**[Saying Less Slows the Defenders More](plot_saying_less_slows_the_defenders_more.md)**
Cue: the obvious remedy, which is to publish a vaguer advisory. Closes when the vagueness has been shown to disarm the operator deciding whether to open an emergency window, while leaving the difference between the builds exactly as readable.

**[Waiting Leaves the Hole](plot_waiting_leaves_the_hole.md)**
Cue: the other obvious remedy, which is to hold the fix until the estate is ready. Closes when holding has been found to keep the flaw open for everybody, including whoever already has it, with no date at which the estate is ready.

**[And the Window Is Not Yours to Close](plot_and_the_window_is_not_yours_to_close.md)**
Cue: everything understood, the fix out, and the exposure running. Closes when the window has been shown to shut on other people's schedules, so the party who caused the exposure by repairing the flaw is not the party who can end it.

## Stakes

Whether a repair can be delivered without describing what it repairs.
Every plot moves the same way: toward a fix that must ship, a difference that specifies the flaw, an estate that applies it slowly, an advisory whose vagueness costs the careful reader most, a delay that keeps the hole open, and a window that closes on somebody else's schedule, and away from any account in which the maintainer was careless with a release. The production cannot ask for the repair to be withheld, since the flaw does not wait, and it cannot ask for it to be delivered silently, since the difference between two public builds is not a thing anybody can keep. What is left to fight over is not whether the fix was right, everybody agrees it was, but what to call a defence that arrives as an announcement.
