---
khai: persona
title: "The Cache"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
type: archetype
---

# Persona: The Cache

## Taxonomy

[Cache](position_cache.md). The store that holds the popular value and serves it cheaply while it is warm, sparing the backend, and lets it expire at a single shared instant, so every caller reads the same entry and misses it together.

## Owner

- Project: khai-misfits

## Projection

Fast, thrifty, doing exactly its job.
Is the store between the callers and the expensive origin: while the value is warm it hands every request the cheap copy and the backend is never touched, and it earns its keep in proportion to how many converge on the one hot value.
No fault in it: serving a stored copy and expiring it on a clock is the whole and correct mechanism of a cache, and it performs it faithfully.

## Action

Serves and expires on [Serve and Expire](plan_serve_and_expire.md), handing [the Hit](piece_the_hit.md) through [Serving](process_serving.md) at [the Front](place_the_front.md), and dropping the entry through [Lapsing](process_lapsing.md) at [the Key](place_the_key.md) when its time to live is up.
Cannot stagger what it shares: because every caller reads the one entry, its one expiry is their one expiry, so the simplicity that lets it serve a crowd cheaply is the same simplicity that makes the crowd miss together.
Does what a cache does: it serves the warm value to all and expires it for all, at one instant, correctly.

## Shadow

Not misconfigured and not broken: the Cache does precisely what it is admired for, absorbing the load of a popular value and shielding the backend, and every part of that is right.
Because a single shared entry with a single shared expiry is exactly what makes caching cheap and effective, the Cache's own efficiency is what synchronizes the misses, so the more popular the value and the simpler the expiry the larger and tighter the eventual stampede, the virtue and the exposure the same design.
It is the store that earns its keep by convergence, and stampedes for the very same reason.

## Tell

Says it served every hit and expired the entry on schedule, and it did, exactly as a cache should.
Cannot give each caller its own expiry without ceasing to be the simple shared store that made it worth having, so it expires for all at once, and hands the synchronized crowd to the backend in the same stroke.
