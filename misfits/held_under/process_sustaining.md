---
khai: process
title: "Sustaining"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Process: Sustaining

## Taxonomy

[Held Under](play_held_under.md). The feedback loop that keeps [the Service](persona_the_service.md) in its failing state after [the Trigger](piece_the_trigger.md) is gone: no persona owns it, since it is what [Retrying](process_retrying.md) becomes once its sum outruns capacity, at [the Queue](place_the_queue.md).

## Owner

- Project: khai-misfits

## Initiated by

[The Trigger](piece_the_trigger.md), already spent, having tipped [the Service](persona_the_service.md) past its threshold once. What starts here is not a new push but the first return: retries from calls the trigger caused to fail, arriving back at [the Queue](place_the_queue.md) as fresh load.

## Direction

Toward a total that will not fall. Fresh requests plus retries exceed capacity, so a share of both fail; those failures are retried in turn, adding to the next round's total, which again exceeds capacity, which fails again (Bronson, Charapko, Aghayev, and Zhu; Huang, Magnusson, and colleagues). The sum stops depending on anything the Surge did and starts depending only on itself: [the Sustaining Load](piece_the_sustaining_load.md) generates the failures that generate the load, a closed circuit with the trigger no longer in it. The visible result is [the Collapse](piece_the_collapse.md): goodput falls toward zero while offered load, mostly retries now, stays high, and the pairing of those two lines on [the Dashboard](place_the_dashboard.md) is the signature of [the Metastable State](piece_the_metastable_state.md) holding.

## Lever

The loop feeds on its own output. Correct retries, each one individually reasonable, generate exactly the failures that generate more correct retries, so the mechanism needs no outside push once it is running, and no participant needs to do anything wrong to keep it running. This is the stable bad equilibrium at the center of the misfit: not a system breaking down further, but a system holding, precisely, at the wrong level.

## Echo

A queue that will not drain no matter how long it is watched, because every unit of help arriving to drain it is a unit of the reason it cannot. The failure outlives its cause by exactly as long as nothing external intervenes.
