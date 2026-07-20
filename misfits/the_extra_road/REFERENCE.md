---
updated: "2026-07-01"
---

# The Extra Road: Reference

The research warrant for [The Extra Road](play_the_extra_road.md). The title names the intervention;
the play runs on Braess's paradox and the theory of selfish routing, from its original statement through
the modern price-of-anarchy account of how far self-interest can drag a network, all cited below.

## Line of Work

Staging Braess's paradox as a **systemic system**: when a route that is faster for each driver alone is
added to a congested network, self-interested routing loads it, and the settled equilibrium can be slower
for everyone than before the route existed. The play models the documented mechanics, the network of
load-dependent links, the individual choosing the minimum-time path, the shared stretch whose cost climbs
with use, the equilibrium no one can beat by switching, the whole run measured slower than before, and the
toll that alone restores the optimum, as the load-bearing vectors of the structure, not as a tale of bad
planning. The governing finding of the source literature is the play's governing law: adding capacity to a
network under selfish routing can raise the travel time of every user, because the gap between the cost one
driver bears and the cost one driver imposes is exactly what a free shared link leaves unpriced.

## Origin

The phenomenon in theory, and the research spine beneath it.

| Source                          | Key Work / Event                                                                                                                                                                 | Scope                                                                                                                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Braess**                      | "Über ein Paradoxon aus der Verkehrsplanung", _Unternehmensforschung_ (1968); English translation, Braess, Nagurney & Wakolbinger, _Transportation Science_ (2005)               | **The paradox**: adding a road to a network can increase the travel time of every driver. The Extra Road, the Slowdown.                                                                    |
| **Wardrop**                     | "Some Theoretical Aspects of Road Traffic Research", _Proceedings of the Institution of Civil Engineers_ (1952)                                                                  | **The condition**: user equilibrium (each minimises their own time) diverges from system optimum (least total time). The load-bearing selfish routing. The Selfish Route, the Equilibrium. |
| **Pigou**                       | _The Economics of Welfare_ (1920)                                                                                                                                                | **The mechanism**: congestion is an unpriced externality, the cost each user imposes on the rest; a toll on the shared road aligns private and social cost. The Congestion, the Toll.      |
| **Koutsoupias & Papadimitriou** | "Worst-case Equilibria", _STACS_ (1999); the coordination ratio, later named the price of anarchy by Papadimitriou (_STOC_, 2001)                                                | **The measure**: how far a selfish equilibrium can fall short of the optimum, made a quantity. The Braess, the gap put to a number.                                                        |
| **Roughgarden & Tardos**        | "How Bad Is Selfish Routing?", _Journal of the ACM_ (2002)                                                                                                                       | **The bound**: the price of anarchy of selfish routing is bounded, and Braess configurations are where it bites; pricing recovers the optimum. The remedy carried with the law.            |
| **Practitioner**                | road removals that sped traffic (Seoul's Cheonggyecheon, 2005; 42nd Street, New York, 1990); congestion charging (London, 2003; Singapore); induced demand, cited to distinguish | The paradox in practice: closing or pricing a link that raised the average, and the "just add a lane" intuition it refutes. The New Link, the Toll Plaza, the Pricing.                     |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast any seat as
  reckless or greedy, because the source finding is precisely that neither is needed: the Planner adds the
  road in good faith to relieve a real jam, the Commuter takes the route that is genuinely quickest for them,
  the Dispatcher routes by the honest shortest path, and every reroute is the sensible one. The misfit is that
  a link priced at zero lets each driver load a shared stretch whose cost they never carry, so many right
  choices settle into a wrong whole.
- **No hero**: the play refuses to resolve the misfit into the network simply healing. A toll or a closure can
  bring the optimum back, but only by charging for a road that used to be free, or taking away a road that was
  built to help, so the reckoning is a paid or pruned network traded for a fast one, not a jam that cleared on
  its own. Braess is not undone by better driving; it is undone by pricing the thing the free road left out.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the paradox, the equilibrium theory, and the externality
  account are theirs, and the condition Braess's result actually requires, selfish routing on shared, load-dependent
  links, is carried as carefully as the paradox itself.

## Encoding

Source to constraint, per element.

- **[The Network](piece_the_network.md)**: carries the graph of load-dependent links (Wardrop; Braess), the shared
  field of routes whose times depend on how many use them.
- **[The Jam](piece_the_jam.md)**: carries the congestion the road is meant to relieve (Pigou), travel time rising
  with load on a shared stretch.
- **[The Extra Road](piece_the_extra_road.md)**: carries the added link (Braess), faster for one driver alone and
  built in good faith to help.
- **[The Selfish Route](piece_the_selfish_route.md)**: carries the minimum-time choice (Wardrop), each driver taking
  what is quickest for them, not for all.
- **[The Equilibrium](piece_the_equilibrium.md)**: carries the settled state (Wardrop; Koutsoupias & Papadimitriou),
  the routing no one can beat by switching, and worse for all.
- **[The Slowdown](piece_the_slowdown.md)**: carries the raised travel time (Braess), the whole run slower than before
  the road was built.
- **[The Toll](piece_the_toll.md)**: carries the pricing that restores the optimum (Pigou; Roughgarden & Tardos), the
  cost of the shared stretch put back on the driver who loads it.
- **[The Braess](piece_the_braess.md)**: carries the phenomenon whole (Braess; Wardrop), and its remedy in pricing
  (Pigou; Roughgarden & Tardos), the gap between one driver's saving and everyone's cost.
