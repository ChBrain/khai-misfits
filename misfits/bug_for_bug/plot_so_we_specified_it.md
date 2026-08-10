---
khai: plot
title: "So We Specified It"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-09"
---

# Plot: So We Specified It

## Taxonomy

[Bug for Bug](play_bug_for_bug.md)

## Owner

- Project: khai-misfits

## Cue

A standards effort that wants independent implementations to agree at last, faced with what the implementations already do and what the existing content already needs.

## Action

[Write down what happens](plan_write_down_what_happens.md): the behaviour is reverse-engineered and published as the specification, with [the compatibility mode](piece_the_compatibility_mode.md) offered where old and new must coexist.

## Stage

When HTML was finally specified so that browsers could interoperate, the error handling was documented by studying what browsers already did, so that the behaviours existing documents depended on would carry forward.

## Tension

It is the right call, and it converts the specification from a statement of what ought to be into a description of what happened.
A standard nobody implements is worth nothing, so writing down reality is the only route to implementations that agree. The cost is that the document stops leading and starts following, the compatibility mode maintains two behaviours for as long as anybody remains on the old one, which is indefinitely, and the deprecation window is paid by everybody who has to migrate, including those whose dependency was never on anything that was promised.
