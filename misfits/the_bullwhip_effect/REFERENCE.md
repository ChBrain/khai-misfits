---
updated: "2026-07-03"
---

# The Bullwhip Effect: Reference

The research warrant for [The Bullwhip Effect](play_the_bullwhip_effect.md).
The term is the supply-chain literature's; the play runs on the theory of demand amplification and information
distortion, from Forrester's industrial dynamics through Lee, Padmanabhan and Whang's naming and Sterman's
beer game, all cited below.

## Line of Work

Staging the bullwhip effect as a **flow system**: a supply chain in which each link orders from the one above
on the only signal it has, its own customer's orders, so that a small change in end demand is amplified stage
by stage into ever wilder swings, because every link, to cover a stockout and refill its pipeline, orders more
than the change it saw and passes that larger order up as if it were demand. The play models the documented
mechanics, the small real wobble in end demand, the local cover of safety stock and pipeline that makes each
order larger than its cause, the lagged and filtered signal that shows each link only the stage below, the
amplification that compounds the distortion at every stage, the whipsaw of glut and shortage at the top from a
wobble already gone, and the shared demand and shortened lag that alone still the swing, as the load-bearing
vectors of the structure, not as a tale of panic or gaming. The governing finding of the source literature is
the play's governing law: when each stage of a chain reorders on locally observed demand plus a buffer, under
lead-time delay and without sight of true consumption, the variance of orders grows as it moves upstream, so
rational local replenishment amplifies a demand signal into oscillation. It is distinct from the house's
Metric Fixation, where a proxy is gamed until it stops tracking the goal: here nothing is gamed, an honest
order placed on an honest but distorted signal simply swells as it climbs. And it is distinct from the house's
The Bounce, where a single extreme reading is mistaken for a durable effect and reverts: there one noisy
measurement is misread, where here a real signal is amplified through a chain of prudent buffers and delays.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                         | Key Work / Event                                                                                                | Scope                                                                                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forrester**                  | "Industrial Dynamics: A Major Breakthrough for Decision Makers" (_HBR_, 1958); _Industrial Dynamics_ (1961)     | **The founding**: demand amplification in production-distribution systems, the system-dynamics account of how a small change swells upstream. The Whip.                   |
| **Lee, Padmanabhan and Whang** | "Information Distortion in a Supply Chain: The Bullwhip Effect" (_Management Science_, 1997)                    | **The naming and the causes**: demand-signal processing, order batching, price fluctuation, and shortage gaming, and the remedies against them. The Cover, the Open Book. |
| **Sterman**                    | "Modeling Managerial Behavior" and the Beer Distribution Game (_Management Science_, 1989)                      | **The experiment**: players generate the bullwhip even with steady demand, from misperception of feedback and delays. The Lag.                                            |
| **Simon; Forrester**           | feedback control and delay; the overshoot of a lagged controller                                                | **The control root**: a system correcting on delayed information overshoots and oscillates, the shower-tap that answers a beat late. The Whipping.                        |
| **Procter & Gamble**           | the Pampers case behind Lee, Padmanabhan and Whang (1997): steady diaper demand, wildly swinging factory orders | **The motivating case**: near-constant consumption at the shelf and violent orders at the plant, the effect measured in a real chain. The Wobble.                         |
| **Practitioner**               | the beer game; retail promotions and forward-buying; the 2020 to 2021 supply shocks                             | The trap in the field, and its cost: gluts and shortages, excess inventory and stockouts, from a demand that barely moved.                                                |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the links as
  panicked or gaming, because the source finding is precisely that each move is right: keeping the shelf
  stocked is the job, covering against a stockout is prudent, and reordering on your customer's orders is the
  only signal any link has. The swing is authored by no error and emerges from the structure, a chain in which
  each stage sees only the stage below and adds a cover of its own, so the misfit is that a line of links each
  managing prudently turns a wobble at the till into a wave at the plant.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The one move that stills the
  whip is to share the shopper's true demand up the whole chain, shorten the lags, and smooth the orders, and
  it asks independent firms to open their books to one another, to trust a partner's data over their own
  shelves, and to give up the local cover that felt like prudence, holding to it when the next wobble tempts
  each back to protecting itself. The reckoning is a chain calmed by shared sight and surrendered buffers, not
  a free correction, so the cure for a swing made of local caution is the loss of that caution to a common
  view.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the bullwhip effect, industrial dynamics, information
  distortion in supply chains, and the beer game are theirs, and the condition the trap actually requires,
  each stage reordering on locally observed demand plus a buffer under lead-time delay without sight of true
  consumption, is carried as carefully as the finding itself.

## Encoding

Source to constraint, per element.

- **[The Wobble](piece_the_wobble.md)**: carries the small real change in end demand (Forrester; P&G), the
  wobble at the till that starts the swing and is soon gone.
- **[The Cover](piece_the_cover.md)**: carries the local buffer (Lee, Padmanabhan and Whang), the safety stock
  and pipeline each link adds, making its order larger than the demand it saw.
- **[The Lag](piece_the_lag.md)**: carries the delayed, filtered signal (Sterman), the stage-below orders each
  link acts on late and without their cause, so corrections overshoot.
- **[The Whip](piece_the_whip.md)**: carries the amplified swing (Forrester), the variance grown at each stage
  into the glut and shortage at the top.
- **[The Open Book](piece_the_open_book.md)**: carries the remedy (Lee, Padmanabhan and Whang), the shared true
  demand and shortened lag that let each stage react to the wobble and not to the stage below.
- **[The Bullwhip Effect](piece_the_bullwhip_effect.md)**: carries the phenomenon whole (Forrester; Lee,
  Padmanabhan and Whang), a chain of prudent orders amplifying a wobble into a wave, and its remedy in a shared
  signal at the cost of local cover.
