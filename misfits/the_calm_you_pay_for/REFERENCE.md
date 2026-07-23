---
updated: "2026-07-23"
---

# The Calm You Pay For: Reference

The research warrant for **The Calm You Pay For** (play and company not yet staged;
this warrant is drafted first, to prove the science and the distinction before authoring).
The dynamic is the feedback-limitation account of control: Bode's sensitivity integral and the waterbed
effect, extended by Freudenberg and Looze's constraints from unstable poles, non-minimum-phase zeros, and
delays, all cited below.

## Line of Work

Staging Bode's sensitivity integral as a **conservation structure**: a feedback loop whose sensitivity
to disturbance, the gain from a disturbance to the error it leaves, can be pushed down in the band the
designer cares about, buying real disturbance rejection where it matters, but only at the cost of a
sensitivity that rises above one somewhere else in the spectrum, because the integral of the log of the
sensitivity over all frequencies is conserved, fixed by the loop and not by the design. The governing
law is not that a margin was trimmed or a repertoire cut too far, but that **feedback can move the
sensitivity around the frequency axis but never remove it, so the calm bought in one band is paid for as
amplification in another**, the payment mandatory and the total fixed. The play models the documented
mechanics: the sensitivity function and its attenuation below one and amplification above it, the
conservation of the log-sensitivity integral to zero for a stable loop with at least two more poles than
zeros (Bode), the positive value of that integral when the open loop has right-half-plane poles, so an
unstable plant pays more amplification than it buys attenuation, and the hard limits on where the rise
can be banished to set by non-minimum-phase zeros, delays, and finite bandwidth (Freudenberg and Looze),
as the load-bearing vectors of the structure, not as a tale of a clumsy controller or a design mistake.

It is distinct from the house's The Balloon Effect, where a banned trade squeezed on one patch bulges to
the next, a behavioural displacement of an activity by the people who carry it: there an agent relocates
a trade to evade a ban, here no one relocates anything and there is no agent inside the mechanism, the
amplification a mathematical certainty of feedback, not a displaced behaviour, the two sharing a squeeze
and-bulge picture but no spine. It is distinct from The False Trade-Off, where conditioning on the sum of
two unrelated things makes them look opposed among the selected, a trade-off the world never had: here
the trade-off is exactly one the world does have, a conserved quantity imposed by a theorem, real and
unavoidable rather than an artefact of selection. It is distinct from The Simpler Lever, where trimming a
regulator's repertoire leaves it too few responses to hold the outcome: there more variety would restore
control, here no amount of variety removes the constraint, the integral conserved however rich the
controller, so the limit is a conservation law and not a shortfall of means. And it is distinct from The
Spent Margin, where a driver behaviourally spends back a safety margin as risk: here nothing is spent
back by anyone, the amplification arriving by theorem the instant the attenuation is bought, with no
behaviour in between.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                    | Key Work / Event                                                                                                        | Scope                                                                                                                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hendrik W. Bode**       | _Network Analysis and Feedback Amplifier Design_ (1945); the sensitivity integral                                       | **The spine**: the sensitivity function measures the gain from disturbance to error, and for a stable loop with at least two more poles than zeros the integral of its log over all frequencies is zero, so attenuation in one band forces amplification in another. The governing law. |
| **The waterbed effect**   | the standard reading of Bode's constraint in feedback design                                                            | **The image**: push the sensitivity down at one frequency and it rises at another, as a waterbed pressed here bulges there, the conserved total making the trade unavoidable. The Bought Calm, The Paid Rise.                                                                           |
| **Freudenberg and Looze** | "Right Half Plane Poles and Zeros and Design Tradeoffs in Feedback Systems" (_IEEE TAC_, 1985); the 1987–88 constraints | **The surcharge and the wall**: right-half-plane (unstable) open-loop poles make the integral positive, so more is paid than bought, and non-minimum-phase zeros and delays cap the bandwidth over which the rise can be spread. The Unstable Surcharge, The Far Wall.                  |
| **Practitioner**          | the autopilot, amplifier, or loop tuned for rejection in band that grows peaky, noisy, or fragile out of band           | The trap in the field, and its cost: a loop tuned to reject disturbance where it matters, sound and well-designed, that amplifies noise and nears instability at frequencies no one was watching, the rise the price of the calm and not a fault.                                       |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast a clumsy
  controller or a careless designer, because the source finding is precisely that each move is sound:
  pushing the sensitivity down in the working band is exactly the right thing to do where the
  disturbances are, and the amplification elsewhere is not an error but a theorem, the conserved integral
  of the log-sensitivity (Bode). The rise is authored by no one and emerges from the structure, a
  conservation law that binds every attenuation to an equal amplification, so the misfit is that a loop
  designed correctly for the band that matters is, by the same design, made more sensitive somewhere
  else, and cannot be otherwise.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The moves that manage
  the trade, spreading the rise over a wide band so it stays shallow, or placing it where no disturbance
  or noise lives, do not remove it: the integral is conserved, and non-minimum-phase zeros, delays, and
  finite bandwidth cap how far and how thin the rise can be spread (Freudenberg and Looze), and an
  unstable plant must pay more than it buys. The reckoning is a rise placed as harmlessly as the loop
  allows, never a rise abolished, and where the plant is unstable or the bandwidth walled, the calm in
  band is bought dear.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the sensitivity integral and its conservation are
  Bode's, and the constraints from right-half-plane poles, non-minimum-phase zeros, and delays are
  Freudenberg's and Looze's, and the condition the trap actually requires, a conserved log-sensitivity
  that binds attenuation to amplification across frequency, is carried as carefully as the finding itself.

## Encoding

Source to constraint, per element. The play and its company are not yet authored; these are the
proposed load-bearing pieces the warrant commits the staging to carry, one per vector, no filler.

- **The Sensitivity**: carries the gain from disturbance to error across frequency (Bode), below one
  where the loop rejects and above one where it amplifies, the quantity the design shapes.
- **The Bought Calm**: carries the in-band attenuation (Bode), the real and correct disturbance
  rejection the designer wins where it matters.
- **The Paid Rise**: carries the out-of-band amplification (Bode; the waterbed), the sensitivity forced
  above one somewhere else, the mandatory payment for the calm.
- **The Conserved Sum**: carries the integral held fixed (Bode), the log-sensitivity summing to a
  constant over all frequencies, the law that binds every calm to an equal rise.
- **The Unstable Surcharge**: carries the positive integral of the unstable loop (Freudenberg and
  Looze), the right-half-plane poles that make the total paid exceed the calm bought.
- **The Far Wall**: carries the bandwidth limit (Freudenberg and Looze), the non-minimum-phase zeros,
  delays, and finite bandwidth that cap how far and how thin the rise can be spread, so it cannot be
  banished, only placed.
