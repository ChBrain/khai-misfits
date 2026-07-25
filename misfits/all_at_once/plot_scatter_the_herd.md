---
khai: plot
title: "Scatter the Herd"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Plot: Scatter the Herd

## Taxonomy

[All at Once](play_all_at_once.md)

## Owner

- Project: khai-misfits

## Cue

[The Key](place_the_key.md), before [The Expiry](piece_the_expiry.md) rather than after, the countdown still running and still shared.
This time something has been placed on the clock ahead of the instant it would otherwise fire alone.

## Action

[Scattering](process_scattering.md): [The Warden](persona_the_warden.md), holding [the warden's seat](position_warden.md) on [Break the Sync](plan_break_the_sync.md), lays [The Jitter](piece_the_jitter.md) over [The Key](place_the_key.md), so the single shared instant that once produced [The Stampede](piece_the_stampede.md) is no longer read the same way by every request.

## Stage

Probabilistic early recomputation, credited to Vattani, Chierichetti, and Lowenstein, has each request weigh the nearing expiry and refresh a little early with a probability that climbs as the cliff approaches, so a few peel off before the shared instant instead of all arriving on it together.
Or a lease, credited to Nishtala and colleagues, lets the first request past the expiry recompute alone while every other concurrent request briefly waits on that one answer instead of striking [The Backend](persona_the_backend.md) itself.
Jittered expiries spread the countdown itself across many timestamps instead of one, and serving the stale value while a single refresh runs behind it keeps every asker answered without any of them missing at all.

## Tension

None of it is free: a value handed out is sometimes a little stale, a request sometimes waits on another's refresh, a recomputation sometimes runs earlier than strictly needed, and all of it must be built into [The Key](place_the_key.md) ahead of time, paid for on every ordinary pass that would never have stampeded at all, against the one popular key and shared clock that would.
