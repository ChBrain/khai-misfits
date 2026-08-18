---
concept: "The Leap Second (civil time bound to both the Earth's rotation and a uniform count)"
field: "Measurement, cognition, and inquiry"
source: "the definition of UTC (1972); Robert A Nelson et al, Metrologia (2001); CGPM Resolution 4 (2022)"
axis: civil-time-earth-coupling
sign: negative
updated: "2026-08-18"
---

# An Angle and a Count: Reference

The research warrant for An Angle and a Count.
The term is the house's; the play runs on the leap second and on the two requirements civil time is asked to
satisfy at once, all cited below.

## Line of Work

Staging civil time as **one quantity carrying two correct requirements that exclude each other**: a day is a
rotation of the Earth, which is an angle, and a second is a fixed count of caesium cycles, which is a tally.
Civil time must be both. It must track the rotation, or noon is not noon and nothing fixed to the ground can be
pointed at; and it must be a uniform, gapless count, or an interval is not a measurement and two events cannot
be put in order. The Earth does not turn in a whole number of seconds, nor in the same number twice. The play
models the documented mechanics, the two requirements neither of which is a preference, the rotation that is
irregular and unforecastable, the unit that is rigid because rigidity is its whole value, the correction that
relocates the contradiction, the software that assumed the meaning of the word, and the three remedies that
each pay in a different currency, as the load-bearing vectors of the structure, not as a tale of a dithering
committee or a careless programmer.

The governing law is that both requirements are correct and one quantity has to carry them, so every
publishable civil time breaks one of them and the only decision available is which.

**Nothing here is measured wrong, which is what puts the failure outside anybody's conduct.** The Earth's
orientation is known to far better precision than the correction it justifies, and the caesium count is the
most reproducible measurement there is. No instrument is at fault, no observation is in dispute, and improving
either measurement moves nothing: the difficulty is entirely in what the single published number is being asked
to be.

What removes any possibility of blame from the timekeeper is that both requirements arrive from outside the
seat and neither may be refused. The count must be uniform or it is not a measurement; the angle must be
tracked or the clock has stopped being about the Earth. So the seat's whole competence goes into choosing which
requirement to break, and there is no version of it that discharges both.

What removes it from the programmer is that what broke was the meaning of the unit rather than an unhandled
case. Nobody records that time moves forward, in the way nobody records that a length is not negative: it is
the definition the work rests on, and no clock any of them had ever read behaved otherwise. Review does not
surface an assumption that nothing in the world has ever contradicted, which is why the outages landed on
careful systems whose arithmetic was right and whose clock was read correctly.

And the committee closes the case against the last party, because forty years of the same agenda item is not
irresolution. The question put to it has no answer inside it: every option moves the cost to a different
constituency, so a vote is a transfer and never a repair, and a body asked to resolve an incompatibility will
look exactly like this one for as long as it is asked.

It is distinct from the house's **Exactly One Kilogram**, which is its nearest neighbour in the same family and
inverts it. There the object that defines the unit cannot by construction be wrong, so the drift is invisible
from inside the system and the failure is that nobody can tell. Here nothing drifts unseen: both quantities are
measured continuously, the difference between them is published, and the difficulty is that two requirements
are known, are both binding, and cannot both be met. One misfit is about a measurement that cannot be checked;
this one is about a measurement that is checked constantly and still cannot be right.

It is distinct from the house's **Right Apart, Wrong Together**, where two correct metals meet at one joint and
the electrochemical couple sacrifices the less noble of them: that is the closest mechanism in the house, since
both stage two correct things destroying something by being brought together. The difference is what the
remedy shows. There the metals can be insulated, and separated they are both fine, so the failure is in the
joint. Here separation is the remedy that already exists and does not work: atomic time and Earth time are
published as separate timescales, and the difficulty survives, because civil time is the one people write down
and one number has to be published. The requirements are not two objects joined; they are two demands on the
same object.

It is distinct from the house's **Both Take the Crown**, which holds the CAP result: there a system may have
any two of three properties and is forced to choose only when a partition occurs, so there is a triggering
event and the choice is contingent on it. Here there is no partition and no event. The two requirements
conflict permanently and would conflict on a planet with one computer on it, so nothing has to happen for the
choice to be live, and there is no state of the world in which the trade is not being made.

It is distinct from the house's **Bug for Bug**, where an implementation must reproduce a predecessor's defects
because behaviour rather than specification is what everything downstream depends on: there the constraint is
somebody's earlier mistake, faithfully preserved, and a clean world would not have it. Here nothing is being
preserved and nobody made a mistake. The constraint is a planet and a definition, so there is no earlier
decision that could have been taken better.

## Origin

The compromise, the history, the quantity that will not cooperate, the cost on the other side, the remedy in
practice, and the decision that is still being argued over.

| Source                                | Key Work / Event                                                                                                                                             | Scope                                                                                                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The definition of UTC**             | the timescale in force since 1972: SI seconds counted uniformly, with leap seconds inserted to hold the difference from the Earth's rotation under 0.9 s     | **The spine**: the compromise itself, which meets both requirements by meeting one of them continuously and the other in discrete corrections, so the incompatibility is given a place to happen rather than removed.                                         |
| **Robert A Nelson et al**             | "The leap second: its history and possible future" (Metrologia, 2001)                                                                                        | **The history and the options**: how the arrangement was arrived at, what was considered instead, and the case for and against each successor, set out before the dispute became urgent.                                                                      |
| **The Earth's rotation record**       | the orientation series held by the IERS: tidal slowing, core-mantle coupling, glacial rebound, and the recent speeding-up that raises a negative leap second | **The quantity that will not cooperate**: the drift is real, uneven, runs in both directions and is not forecastable, so a correction can be announced about six months ahead and can never be scheduled.                                                     |
| **Poul-Henning Kamp**                 | "The One-Second War (What Time Will You Die?)" (ACM Queue, 2011)                                                                                             | **The cost on the other side**: what a discontinuity does to systems built on a monotonic count, argued from the practitioner's side by somebody who wanted the arrangement changed.                                                                          |
| **The smear as practised**            | the leap smear adopted by Google from 2011 and later standardised to a 24 hour window, and the comparable schemes at Amazon and Meta                         | **The remedy in practice, and its price**: spreading the correction removes the discontinuity by making the second briefly not a second, and because each estate chooses its own window, smeared clocks disagree with the published time and with each other. |
| **The 2022 decision and the dispute** | CGPM Resolution 4 (2022), to raise the tolerated difference by or before 2035, and the standing argument over what replaces the correction                   | **The live dispute, and the bound**: whether abandoning the correction resolves the conflict or defers it into a larger one later is contested, as is what the successor should be, which the play carries rather than settling.                              |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the standards
  body as dithering or the programmer as careless, because nobody in the sequence has a decision to get wrong:
  both requirements arrive from outside every seat and neither is a preference; the rotation is irregular for
  reasons no party controls and cannot be forecast by any instrument; the second is rigid because rigidity is
  what makes duration measurable, so the obvious repair would take every measurement ever made with it; the
  correction is the cheapest available place to put a contradiction and is timed by a planet; what broke
  downstream was the meaning of the unit rather than an unhandled case, so review could not have found it; and
  the committee returning to the same item for forty years is what a body looks like when it is asked to
  resolve something that does not resolve. The failure is authored by nobody and emerges from the structure, so
  the misfit is that one quantity is carrying two correct requirements that exclude each other.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Abandoning the correction is
  the decision that has been taken, gives a clean count forever, and lets civil noon walk away from the sun at
  roughly a minute a century and faster as the rotation slows, which defers a larger correction rather than
  removing the need for one. Smearing works, is what the largest estates actually do, and buys uniformity with
  accuracy: during the smear a second is not a second, and estates that choose different windows stop agreeing
  with each other. Keeping two timescales is correct, already exists, and does not reach the difficulty,
  because civil time is the one written down and the conversion between them needs a table of future
  corrections that cannot be written. Better clocks make no difference, since neither measurement is in doubt.
  And knowing the whole structure, which every party does, still leaves the seat choosing which requirement to
  break.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed
  as the house's. The staging is the house's; the timescale, the history, the orientation record, the
  practitioner argument, the smearing schemes and the resolutions are theirs. The bounds are carried with them:
  **what should replace the correction is genuinely contested** and the argument is live in the standards
  bodies, so the play stages the structure and takes no side on any resolution; the rate at which civil noon
  would drift is an estimate that depends on the rotation, which is the quantity that is not forecastable, so
  the figures here are approximate and are carried as such; the account treats civil time as one published
  number, which is the play's own simplification of a system that also publishes separate timescales for
  separate purposes; the outages are cited as instances of a class rather than as a measure of how much
  disruption the correction causes, which varies with what is built on it; and the negative leap second is
  carried as a case the arrangement has not yet had to perform rather than as a prediction. **The play makes no
  claim that the correction should be kept or abandoned, or that any body decided wrongly**, only that two
  correct requirements are riding one quantity, and that every answer available breaks one of them.
