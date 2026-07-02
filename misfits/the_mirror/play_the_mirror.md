---
khai: play
title: "The Mirror"
description: "Teams ship a system shaped like their own org chart, so the software's seams fall exactly where the teams don't talk."
language: english
license: CC-BY-NC-SA-4.0
voice: "Fluent and architectural on the surface: here is the clean design, here are the modules, here are the interfaces. Underneath, the system quietly taking the shape of the org that built it, the seams settling on the lines between teams that never talk. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-01"
---

# Play: The Mirror

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

The Mirror.
A clean architecture is drawn, the work is split across the teams that happen to exist ... and the system that ships is a copy of the org chart, its seams falling exactly on the lines between teams who never quite talked.

## Arc

The bend is this: a system takes the shape of the organisation that builds it, so the design you can actually ship is the one your org is already shaped like.
It runs on a split between the architecture intended and the communication that exists.
The design is drawn clean, modules and interfaces, as though the teams were interchangeable. But each team builds the part it owns, densely inside and thinly across, so the real contracts are strong where a team talks to itself and weak where two teams meet. The seams of the software settle onto the seams of the org, and the integration bugs live exactly there, on the boundaries nobody was assigned to.
Coordinate harder and the seams do not move: they are set by who reports to whom, not by who met last Tuesday. Only when the org is reshaped to the architecture do the seams move with it, at the cost of a reorganisation nobody wanted: the structure you ship is the structure you are.

## Company

**Pitch**

- [Just Coordinate Better](pitch_just_coordinate_better.md)

**Personas**

- [The Drafter](persona_the_drafter.md)
- [The Lead](persona_the_lead.md)
- [The Neighbor](persona_the_neighbor.md)
- [The Liaison](persona_the_liaison.md)
- [The Splicer](persona_the_splicer.md)
- [The Maintainer](persona_the_maintainer.md)
- [The Reorganizer](persona_the_reorganizer.md)

**Positions**

- [Architect](position_architect.md)
- [Team Lead](position_team_lead.md)
- [Sibling](position_sibling.md)
- [Coordinator](position_coordinator.md)
- [Integrator](position_integrator.md)
- [On-Call](position_on_call.md)
- [Reorganizer](position_reorganizer.md)

**Plans**

- [Draw the Architecture](plan_draw_the_architecture.md)
- [Own the Module](plan_own_the_module.md)
- [Ship Our Half](plan_ship_our_half.md)
- [Sync at the Boundary](plan_sync_at_the_boundary.md)
- [Make It Meet](plan_make_it_meet.md)
- [Hold the Seam](plan_hold_the_seam.md)
- [Reshape the Org](plan_reshape_the_org.md)

**Places**

- [The Whiteboard](place_the_whiteboard.md)
- [The Two Rooms](place_the_two_rooms.md)
- [The Standup](place_the_standup.md)
- [The Sync](place_the_sync.md)
- [The Integration](place_the_integration.md)
- [The Reorg Room](place_the_reorg_room.md)

**Processes**

- [Designing](process_designing.md)
- [Building](process_building.md)
- [Coordinating](process_coordinating.md)
- [Integrating](process_integrating.md)
- [Mirroring](process_mirroring.md)
- [Reorganizing](process_reorganizing.md)

**Pieces**

- [The Architecture](piece_the_architecture.md)
- [The Org Chart](piece_the_org_chart.md)
- [The Boundary](piece_the_boundary.md)
- [The Interface](piece_the_interface.md)
- [The Seam](piece_the_seam.md)
- [The Handoff](piece_the_handoff.md)
- [The Reorg](piece_the_reorg.md)
- [The Mirror](piece_the_mirror.md)

## Triggers

**[The Draft](plot_the_draft.md)**
A clean architecture is drawn: modules, interfaces, a design that would work if the teams were interchangeable. The Drafter specifies it as though the org chart were not in the room. Closes when the intended design is set, its seams drawn where the architecture wants them.

**[The Split](plot_the_split.md)**
Cue: the work must be handed to the teams that exist. The Lead takes the module nearest their team and the Neighbor takes the next, split along the org chart rather than the architecture. Closes when each team owns a part that matches who reports to whom, not the design.

**[The Seam](plot_the_seam.md)**
Cue: the parts are each built well and do not quite meet. The Splicer forces them together while the Liaison syncs across the boundary. Closes when the integration bugs settle onto the lines between teams and the seam is where two owners aren't.

**[The Mirror](plot_the_mirror.md)**
Cue: the shipped system is a copy of the org chart. The Maintainer, holding the seam together on call, sees that the architecture never had a chance the org was not shaped for. Closes when the mirroring is named ... or blamed on weak engineering, and more coordination is demanded.

**[The Reorg](plot_the_reorg.md)**
Cue: someone moves the team boundaries instead of the code. The Reorganizer reshapes the org to match the intended architecture, and the seams move with it. Closes when the org is drawn to the design and the seams follow ... or the reorganisation is judged too costly and the org's shape wins again.

## Stakes

Whether a system is ever shaped by its design, or only ever by its builders.
Every plot but the last moves the same way: toward the org chart, whose boundaries the software will inherit, and away from the architecture, which drew its seams somewhere else. The production cannot make a set of teams ship a shape they are not built like. It can only show that every team built its part well, that every seam fell on a boundary no one was assigned to hold, and that the one thing that would have delivered the clean design, an org shaped like the architecture it meant to build, is the reorganisation the org was too settled to make.
