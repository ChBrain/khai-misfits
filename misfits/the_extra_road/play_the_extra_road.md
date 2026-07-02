---
khai: play
title: "The Extra Road"
description: "A road added to ease the jam draws everyone onto it, and the whole network slows: more capacity, less flow."
language: english
license: CC-BY-NC-SA-4.0
voice: "Confident and common-sense on the surface: more road, less jam, of course it helps. Underneath, every driver rerouting onto the new link exactly as they should, and the whole run settling slower than before it was built. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-01"
---

# Play: The Extra Road

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

The Extra Road.
A network is jammed, so a new link is opened to relieve it ... and because the link is faster for each driver alone, every driver takes it, the flows pile onto the same shared stretch, and the whole run settles slower than it was before the road was built.

## Arc

The bend is this: give the network more capacity, and the network can carry less.
It runs on a split between the time one driver saves and the time all drivers cost each other.
Each driver picks the route that is quickest for them right now, which is exactly what a sensible driver does, and the new link is quickest, so the traffic reroutes onto it. But the link they all take is a shared stretch whose time climbs with the load, and by all taking it they load it, so the settled state, the one no one can beat by switching, is one where everyone drives longer than they did on the old, slower-looking roads.
Nothing was mismeasured and no one drove foolishly: the equilibrium of many good local choices is a worse global outcome, and the extra road is the thing that let it form.
Price the link, or close it, and the network speeds up: what you add for each is paid for by all, and the road that helped one at a time cost everyone at once.

## Company

**Pitch**

- [Just Add a Road](pitch_just_add_a_road.md)

**Personas**

- [The Planner](persona_the_planner.md)
- [The Commuter](persona_the_commuter.md)
- [The Dispatcher](persona_the_dispatcher.md)
- [The Mayor](persona_the_mayor.md)
- [The Tollkeeper](persona_the_tollkeeper.md)

**Positions**

- [Planner](position_planner.md)
- [Router](position_router.md)
- [Dispatcher](position_dispatcher.md)
- [Steward](position_steward.md)
- [Pricer](position_pricer.md)

**Plans**

- [Add the Road](plan_add_the_road.md)
- [Take the Shortcut](plan_take_the_shortcut.md)
- [Route the Fleet](plan_route_the_fleet.md)
- [Keep the City Moving](plan_keep_the_city_moving.md)
- [Price the Road](plan_price_the_road.md)

**Places**

- [The Junction](place_the_junction.md)
- [The Old Route](place_the_old_route.md)
- [The New Link](place_the_new_link.md)
- [The Commute](place_the_commute.md)
- [The Map](place_the_map.md)
- [The Toll Plaza](place_the_toll_plaza.md)

**Processes**

- [Routing](process_routing.md)
- [Rerouting](process_rerouting.md)
- [Congestion](process_congestion.md)
- [Equilibration](process_equilibration.md)
- [Measurement](process_measurement.md)
- [Pricing](process_pricing.md)

**Pieces**

- [The Network](piece_the_network.md)
- [The Jam](piece_the_jam.md)
- [The Extra Road](piece_the_extra_road.md)
- [The Selfish Route](piece_the_selfish_route.md)
- [The Equilibrium](piece_the_equilibrium.md)
- [The Slowdown](piece_the_slowdown.md)
- [The Toll](piece_the_toll.md)
- [The Braess](piece_the_braess.md)

## Triggers

**[The Jam](plot_the_jam.md)**
The network is congested and the pressure is to add capacity. The Planner opens a new link to relieve the old roads. Closes when the extra road is built and open, offered as pure relief.

**[The Shortcut](plot_the_shortcut.md)**
Cue: the new link is faster for any single driver who takes it. The Commuter reroutes onto it, rationally, and the traffic left on the old road begins to lose. Closes when the new link is the quickest choice for each and the traffic begins to pile onto it.

**[The Rush](plot_the_rush.md)**
Cue: on equal terms the shortcut wins, and the Dispatcher routes the whole fleet by shortest path. The last drivers on the old road drop onto the link to keep up. Closes when nearly everyone is on the shortcut and the old balance is gone.

**[The Slowdown](plot_the_slowdown.md)**
Cue: the run is now slower than before the road was built. The Mayor measures the average and finds every driver worse off, though each drove well. Closes when the slowdown is named as the cost of the added link ... or blamed on demand, and another road is called for.

**[The Toll](plot_the_toll.md)**
Cue: someone prices the link instead of leaving it free, or closes it outright. The Tollkeeper puts the cost of the shared stretch back on the driver who loads it, and the network speeds up. Closes when private cost meets social cost and the flow recovers ... or the toll is judged unfair and pulled, and the slowdown returns.

## Stakes

Whether a network is ever measured whole, or only ever one driver at a time.
Every plot moves the same way: toward the link that is quickest for each, and away from the balance that was quickest for all. The production cannot make a driver take the slower road for the good of a whole they cannot see. It can only show that no one was foolish and no one drove badly, that every reroute was the sensible one, and that the single thing that would have kept the network fast, a price on the shared stretch that each driver loads and none of them pays, was the thing a free road was built to leave out.
