---
khai: plot
title: "The Watchdog"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: The Watchdog

## Taxonomy

[Outranked from Below](play_outranked_from_below.md)

## Owner

- Project: khai-misfits

## Cue

[The Ready Line](place_the_ready_line.md), where the Foremost has now waited long enough that its wait has crossed the limit the system's own design assumed for it.
Nothing on the line distinguishes this wait from an ordinary one; only its length has changed.

## Action

[Starving](process_starving.md): [The Foremost](persona_the_foremost.md), still on [Take What I Need](plan_take_what_i_need.md) at [the Foremost's seat](position_foremost.md), carries [The Wait](piece_the_wait.md) past its bound, and the system answers with [The Reset](piece_the_reset.md).

## Stage

The Wait has no ceiling written into it, only the Middle's runtime and whatever runs after it, and that sum outlasts the interval the highest-priority task was ever meant to go unrun. A watchdog, built to catch failure, cannot see a lock or a rank; it sees only that the Foremost has not executed in longer than the design allows, and reads that absence as a fault. It fires, and the remedy the watchdog knows is the only one it has: reset. On Mars Pathfinder in 1997, this sequence ran in a real spacecraft: a high-priority bus-management task starved when a low-priority meteorological task holding a shared mutex was preempted by a medium-priority communications task, and a watchdog timer, finding the bus task had not run, reset the system, losing data already gathered (Reeves).

## Tension

Nothing was broken in any single decision, and the highest-ranked work is lost anyway, paid for by a task that never once ran incorrectly.
The reset restores the system, not the work it discarded, and the same composition that produced this wait is still standing, unexplained and unaddressed.
