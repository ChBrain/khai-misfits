---
khai: persona
title: "The Cache"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-30"
type: archetype
---

# Persona: The Cache

## Taxonomy

[Cache](position_cache.md). The layer emptied by the trigger, sending every request through to a backend too saturated to answer fast enough for it to refill.

## Owner

- Project: khai-misfits

## Projection

The reason the system is fast, a warm layer absorbing the great majority of reads before they ever reach the backend.
Serves what it holds and fetches what it does not, which is the whole of its contract and the whole of what it was installed to do.
No fault on show: an empty cache is not a broken cache, it is a cache that has not been filled yet, and filling is what it is about to do.

## Action

Runs [Fill on Miss](plan_fill_on_miss.md): through [Missing](process_missing.md) at [the Queue](place_the_queue.md), sends every miss through to [the Backend](persona_the_backend.md) and holds the answer for next time.
Cannot fill while the backend is saturated, because the answers it needs to store are exactly the answers the backend is now too busy to return in time, so its own filling depends on the thing its missing is loading.
Does what a cache does: it cannot serve what it does not hold, and it cannot get what it does not hold except from the one place currently unable to give it.

## Shadow

Not broken: it was emptied by an ordinary restart, and going to the backend for a miss is not a malfunction but its single defined behaviour, correct on every miss taken by itself.
Because a cold cache multiplies backend load by the very factor it normally divides it by, and because that load is what prevents it warming, its correct behaviour locks in its own coldness, the layer that made the system fast now the reason it cannot recover.
It is the system's speed, and the second engine of the loop.

## Tell

Shows a hit rate near zero and a steady stream of fetches in flight, every one of them a proper request for something it legitimately lacks.
Cannot warm by waiting, since each moment it stays cold is a moment it adds the load that keeps it cold, so time alone moves it nowhere.
