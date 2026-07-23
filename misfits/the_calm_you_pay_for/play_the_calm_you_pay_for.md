---
khai: play
title: "The Calm You Pay For"
description: "A loop pushes its sensitivity down in band, but a conservation law forces it up elsewhere: calm paid for as a rise."
language: english
license: CC-BY-NC-SA-4.0
voice: "Confident and well-rejected on the surface: a feedback loop tuned to reject disturbance beautifully in the band that matters, smooth and quiet where anyone is looking. Underneath, a sensitivity forced above one somewhere out of band, amplifying noise and creeping toward the edge at frequencies no one watched, the calm bought in the working band paid for as a rise in the far one, the total fixed by a law and not by the design, and where the plant is unstable, more paid than bought. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Play: The Calm You Pay For

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

The Calm You Pay For.
The loop is well designed. In the band that matters, where the disturbances actually live, it rejects them beautifully: the sensitivity pushed down below one, the error small, the output smooth and quiet exactly where anyone would look. And this is not luck and not a trick, it is the right thing done well, the designer shaping the loop to be least sensitive precisely where the trouble is, and it works, and the loop is calm. And yet the sensitivity that was pushed down here does not vanish: it moves. Somewhere else along the frequency axis, out past the working band where no disturbance was expected and no one was watching, the sensitivity rises above one, and there the loop does not reject disturbance, it amplifies it, taking the small noise that lives at those frequencies and making it larger, and creeping, cycle by cycle of the fast stuff, toward the edge of stability. And the terrible thing is that this rise is not a flaw in the design, it is a law of it: the integral of the log of the sensitivity over all frequencies is a conserved quantity, fixed by the loop, so every scrap of calm bought below one in the working band must be paid for by an equal measure of sensitivity above one somewhere else, the area pressed down here bulging up there, and no cleverness removes it, because it is not a mistake to be corrected but a total to be balanced. The designer can spread the rise wide so it stays shallow, or place it where the noise is quietest and it will hurt least, but never abolish it, and if the plant is unstable, if the loop is holding up something that would fall on its own, the conserved total is not even zero but positive, and then the loop pays out more amplification than it ever bought in calm. So the quiet in the band that matters is real, and it is bought, and the bill comes due at the frequencies no one was watching, and the better the rejection where you looked, the sharper the rise where you did not.

## Arc

The bend is this: feedback can move the sensitivity around the frequency axis but never remove it, so the calm bought in one band is paid for as amplification in another, the payment mandatory and the total fixed by a law.
It runs on a conserved sensitivity.
A loop's sensitivity is its gain from a disturbance to the error the disturbance leaves, and below one it rejects and above one it amplifies, so a designer shapes it down in the band where the disturbances live, buying real rejection where it matters (Bode). This is sound: the calm is genuine and correctly placed.
And the calm is bound to a rise. The integral of the log of the sensitivity over all frequencies is conserved, fixed for a stable loop at zero, so the area pushed below one in the working band must be matched by an equal area pushed above one elsewhere, the sensitivity not removed but relocated, every scrap of attenuation paid for by an equal measure of amplification (Bode). The trade is not chosen and not a fault, it is a conservation law.
And the rise bites where it lands. Out past the working band the sensitivity above one amplifies the noise that lives there and creeps the loop toward instability, so the payment falls at the frequencies no one was watching, the cost real and merely displaced from the band that was inspected to the band that was not.
And the escape only places the cost. The designer can spread the rise wide so it stays shallow or set it where the noise is quietest, but the integral is conserved and cannot be spent to zero, and non-minimum-phase zeros, delays, and finite bandwidth cap how far and how thin the rise can be spread (Freudenberg and Looze), so the rise can be placed but never abolished.
And an unstable plant pays a surcharge. When the open loop has right-half-plane poles the conserved total is not zero but positive, set by the sum of those poles, so a loop holding up something that would fall on its own pays out more amplification than it buys in calm, the trade turned against it by the very instability it corrects (Freudenberg and Looze).
None of it is clumsiness or a design mistake. Pushing the sensitivity down where the disturbances are is exactly right, and the rise elsewhere is not an error but a theorem: no one designs the amplification in, and it emerges from the structure, a conserved integral that binds every attenuation to an equal amplification. What is tuned correctly for the band that matters is, by the same tuning, made more sensitive somewhere else, and cannot be otherwise.
Spread the rise wide, place it where the noise is quietest, and accept a shallow cost far from the disturbances, and the loop can be as calm as the law allows: but the rise is conserved and cannot be abolished, the bandwidth is walled by the plant's own zeros and delays, and an unstable plant pays more than it buys, so the escape is bought by choosing where to be sensitive rather than whether, and living with a rise that the better rejection only makes sharper.

## Company

**Pitch**

- [Quiet Where It Matters](pitch_quiet_where_it_matters.md)

**Personas**

- [The Designer](persona_the_designer.md)
- [The Disturbance](persona_the_disturbance.md)
- [The Loop](persona_the_loop.md)
- [The Noise](persona_the_noise.md)

**Positions**

- [Designer](position_designer.md)
- [Disturbance](position_disturbance.md)
- [Loop](position_loop.md)
- [Noise](position_noise.md)

**Plans**

- [Shape the Sensitivity](plan_shape_the_sensitivity.md)
- [Press In Band](plan_press_in_band.md)
- [Conserve the Sum](plan_conserve_the_sum.md)
- [Ride the Rise](plan_ride_the_rise.md)

**Places**

- [The Spectrum](place_the_spectrum.md)
- [The Working Band](place_the_working_band.md)
- [The Far Band](place_the_far_band.md)

**Processes**

- [Suppressing](process_suppressing.md)
- [Conserving](process_conserving.md)
- [Amplifying](process_amplifying.md)
- [Placing](process_placing.md)

**Pieces**

- [The Sensitivity](piece_the_sensitivity.md)
- [The Bought Calm](piece_the_bought_calm.md)
- [The Paid Rise](piece_the_paid_rise.md)
- [The Conserved Sum](piece_the_conserved_sum.md)
- [The Unstable Surcharge](piece_the_unstable_surcharge.md)
- [The Far Wall](piece_the_far_wall.md)

## Triggers

**[The Suppression](plot_the_suppression.md)**
The Designer shapes the loop to reject the disturbance where it lives. In the working band the sensitivity is pushed below one, the error made small, the output quiet exactly where anyone would look, the right move done well. Closes when the calm is bought in the band that matters, the rejection real and correctly placed, the loop smooth where it is inspected.

**[The Conservation](plot_the_conservation.md)**
Cue: the calm is bought. The Loop conserves the integral of the log-sensitivity, so the area pushed below one must be matched above one elsewhere, and a rise appears out past the working band, not designed and not a fault. Closes when the sensitivity has risen above one somewhere off-band, the calm bound to an equal rise by the law, the total unchanged.

**[The Bite](plot_the_bite.md)**
Cue: the sensitivity is above one in the far band. There the Loop amplifies the Noise that lives at those frequencies and creeps toward the edge of stability, the payment falling where no one was watching. Closes when the off-band noise is amplified and the margin eroded, the cost of the calm landing at the frequencies no one inspected.

**[The Surcharge](plot_the_surcharge.md)**
Cue: the plant would fall on its own. When the open loop has right-half-plane poles the conserved total is positive, not zero, so the loop that holds up an unstable plant pays out more amplification than it bought in calm. Closes when the unstable loop has paid its surcharge, more sensitivity raised than lowered, the trade turned against it by the instability it corrects.

**[The Placing](plot_the_placing.md)**
Cue: the Designer would banish the rise. Spreading it wide to stay shallow or setting it where the noise is quietest, the Designer places the cost as harmlessly as the loop allows, against the conserved sum and the Far Wall of zeros, delays, and finite bandwidth. Closes when the rise is placed where it hurts least ... but not abolished, the calm still paid for and, where the plant is unstable, paid for dear.

## Stakes

Whether a loop can be made calm, when the calm bought in one band must be paid for in another.
Every plot but the last moves the same way: toward the calm, bought correctly in the band that matters, and toward the rise it is bound to, forced above one at the frequencies no one watched. The production cannot make the loop calm everywhere at once, because the integral of the log-sensitivity is conserved and fixed by the loop, so the amplification is the lawful counterpart of the attenuation, not a mistake in placing it: the loop is not made sensitive by clumsiness, it is made sensitive by the same theorem that let it be calm. It can only show that the rejection in band is real and correctly designed and the rise elsewhere a conservation law and not an error, and that the one move that manages the trade, spreading the rise wide and placing it where the noise is quietest, must be made against a conserved total that cannot be spent to zero, a bandwidth walled by the plant's own zeros and delays, and, where the plant is unstable, a surcharge that pays out more than it buys, so the calm in the band that matters is real and the rise in the band that does not is lawful and the better the rejection where you looked, the sharper the price where you did not.
