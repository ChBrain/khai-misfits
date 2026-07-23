---
khai: pitch
title: "The Retry Storm"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-23"
---

# Pitch: The Retry Storm

## Taxonomy

[Held Under](play_held_under.md). The default key the whole production is read in.

## Owner

- Project: khai-misfits

## Tenor

Operational, calm, correct.
A sound system running with headroom, clients that retry a failed request exactly as well-behaved clients are built to, an operator watching a board that was green a minute ago.
Nothing false in it: the service is well designed, the retry is the right behaviour, and the trigger that started it was minor and is already gone.

## Undertow

Under the calm, a failure that will not lift after its cause has passed.
Because the service carries the fresh requests plus the retries of the failed ones, and that sum is above what it can serve, the failures keep coming and the retries keep answering them, so the system sits in a failing state held down by nothing but everyone's correct recovery, a loop feeding on its own output with no outside push and no one at fault.
The behaviour that lets a system survive ordinary faults is the exact behaviour that keeps this one from clearing.

## Nerve

The feeling of watching the request count climb and the goodput fall at the same time, sure the system is being slammed by demand,
when almost all of that demand is retries of work it already failed, effort spent re-asking instead of doing,
so the harder every client tries to recover the deeper the system is held under, and nothing you can point to is doing anything wrong.

## Echo

After the run: a failing state that sustains itself indefinitely, stable and self-feeding, cleared only when someone reaches in and breaks the loop by force,
the breaker tripped so failing calls fail fast, the retries backed off with jitter, the load shed until the sum drops below capacity,
recovery bought by rejecting requests that would have succeeded and dropping real users to save the rest, the reckoning paid in the real work thrown away to drain a queue that only correct retries were filling.
