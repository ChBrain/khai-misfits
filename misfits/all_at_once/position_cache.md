---
khai: position
title: "Cache"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Position: Cache

## Taxonomy

[All at Once](play_all_at_once.md). The seat of the store that serves the popular value cheaply while warm and expires it at a single shared instant, sparing the backend and, in the same design, synchronizing the misses.

## Owner

- Project: khai-misfits

## Has

One shared entry and one shared clock: a stored copy every caller reads, and a single time to live after which it is dropped.
A real economy: while the value is warm it hands every request the cheap copy and the expensive origin is never touched, and it earns more the more callers converge on the one hot value.
No per-caller expiry, because the entry is shared, so its one time to live is everyone's, the simplicity that makes it cheap the same simplicity that makes the crowd miss together.

## Orders

Serve and expire.
Hand every request the stored copy while it is warm, spare the backend, and drop the entry when its time to live is up.
Keep the entry shared and the expiry simple, because that is what makes caching cheap and effective, even though it means expiring for all callers at one instant.

## Loses

Nothing in its own working, and the staggering that would have spared the backend the spike.
Because a single shared entry with a single expiry is exactly what makes it efficient, the seat cannot give each caller its own cliff without ceasing to be the simple shared store worth having, so its efficiency is what times the misses together.
It keeps its economy whole and hands the backend a synchronized crowd in the same stroke it stops shielding it.

## Drives

Toward the store that earns its keep by convergence and stampedes for the same reason,
its shared entry and shared expiry the source of both the sparing and the synchronization,
so the seat admired for absorbing a popular load is the seat whose one expiry delivers that load, all at once, to the origin behind it.
