---
khai: plan
title: "Write Down What Happens"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-09"
status: active
---

# Plan: Write Down What Happens

## Taxonomy

A **correction**: the intent of [The One Who Fixes It](persona_the_one_who_fixes_it.md), inside [Bug for Bug](play_bug_for_bug.md), once the revert has settled.

## Owner

- Owner: [The One Who Fixes It](persona_the_one_who_fixes_it.md)

## Direction

Stop pretending the document governs. Specify what the implementations actually do, so that everybody can agree and a second implementation can be written that works on real content.

## Orders

(Reverse-engineer the behaviour, including the error handling; publish it as the specification; offer [the compatibility mode](piece_the_compatibility_mode.md) where the old and new must coexist; deprecate on a published schedule.)

## Implementation

([The Issue Tracker](place_the_issue_tracker.md), where the revert already established what may not be touched; and [the code written against it](piece_the_code_written_against_it.md), which is the real specification and cannot be consulted.)

## Targets

- [ ] implementations can now agree, which is the whole point and is achieved
- [ ] the price is accepted: the specification becomes a description of what happened rather than a statement of what ought to
- [ ] the price is accepted: a compatibility mode maintains two behaviours for as long as anybody is left on the old one, which is indefinitely
- [ ] the price is accepted: a deprecation window is paid by everybody who must migrate, including those whose dependency was never on anything promised
