---
khai: plan
title: "Keep Clean"
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-11"
status: active
---

# Plan: Keep Clean

## Taxonomy

A **mandate**: a standing checklist the house Roadie holds, run continuously
rather than on a one-off cue.

## Owner

- Owner: [The Roadie](position_roadie.md)

## Direction

This house stays clean and current: nothing red, nothing stale, the stage stocked
with what the Playwright needs. The board is green so the house can produce on
solid ground.

## Orders

The Roadie runs this continuously and guards it. Findings are surfaced and the
deterministic tools are run; the Roadie never edits content to make a check pass,
and never authors. A finding the Roadie cannot clear by running a tool is raised
to the Theatre Manager, not fixed by hand.

**A gate that never fires is not a gate**, and a wall the house trusts has to be a
wall that **only** fires when something is wrong. Those are the two failures and
they pull in opposite directions: a check that has never once caught anything is
either watching a thing that cannot happen or is written so that it cannot see it,
and a check that fires on correct work teaches the house to route around it. Both
are found the same way, by reading what a wall has actually caught rather than by
reading what it was meant to catch.

**And where a defect is a judgement about what a cell means, build something that
finds it and leave the deciding to a person; where a defect is a computation, build
a wall.** That line decides whether a finding belongs to the suite or to a reader,
and it is why this house has instruments that report and gates that fail.

**A grep for a frontmatter key must be anchored to the frontmatter block.** An
unanchored search for a line beginning with a key name matches prose that happens to
wrap onto that word, and a count that returns one more category than the house has
is the cheapest possible signal that it was not anchored.

## Implementation

The gates, dependency updates, the security panel (alerts, secret scanning), the
conformance kit, and the engines deployed into this house. Deterministic tools
only; the content and the rules are out of bounds.

## Targets

- [ ] dependencies up to date: no green dependency update left unmerged
- [ ] security panel clean: no open alerts, secret scanning clear
- [ ] all instance files conform (the conformance kit)
- [ ] the gates are green on every open change
- [ ] the stage is current: each engine the house uses is at its deployed version
