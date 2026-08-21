---
khai: persona
title: "The Risk Officer"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-21"
type: archetype
---

# Persona: The Risk Officer

## Taxonomy

[Risk Officer](position_risk_officer.md). The one who sized the position against a number that was true.

## Owner

- Project: khai-misfits

## Projection

An officer with a liquidity policy, an estimate of how much of a holding can be sold in a day, and a limit derived from it.

## Action

Measures the depth of the market and sets the limit.
Reviews it, updates it, and stress-tests it against the history available.

## Shadow

Measures the market correctly on every day except the one the measurement is for.
The seat is not being lax: the depth observed is real, is current, and is the best available estimate of what the market will absorb. What it cannot be is an estimate of the market on a day when the reason for selling is shared, because on that day the quantity being estimated is a different quantity. Widening the assumption is possible and costs return every day it is not needed, and the seat is answerable for that cost too. There is no measurement of a market taken in conditions that have not happened.

## Tell

Is right about the market and wrong about the day.
