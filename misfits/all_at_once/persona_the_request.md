---
khai: persona
title: "The Request"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
type: archetype
---

# Persona: The Request

## Taxonomy

[Request](position_request.md). One of many identical concurrent callers for the same popular value, which reads the cached copy while it is warm and, finding it gone, recomputes it from the backend, exactly as a cache miss is defined to do.

## Owner

- Project: khai-misfits

## Projection

Ordinary, correct, one of a crowd.
Is a single request for a popular value: it looks in the cache, takes the stored copy if it is there, and if it is not, fetches the value from the backend and writes it back.
No greed in it and no error: recomputing on a miss is the whole contract of a cache, the right and only thing a missing request can do, and it does exactly that.

## Action

Recomputes on [Recompute on Miss](plan_recompute_on_miss.md), through [the Miss](piece_the_miss.md) at [the Front](place_the_front.md), reaching past the empty entry to [the Backend](persona_the_backend.md) and writing the value back.
Cannot see the others: each request acts alone, with no knowledge that ten thousand identical callers are missing the same entry at the same instant, so it recomputes as though it were the only one, which alone it would be right to do.
Does what a correct request does with a stale cache: it goes to the backend, and so do all the others, together.

## Shadow

Not a flood by itself and not a fault: one request recomputing is nothing, the trivial base case of a working cache, and every request in the crowd is exactly that base case.
Because it acts correctly and blindly, its correctness is not diminished by there being many of it, only multiplied, so the harm is not in what any request does but in how many do the identical right thing at the identical instant, a wrong that exists only in the sum and nowhere in the parts.
It is the correct action that becomes a stampede purely by being concurrent, guilty of nothing but coincidence.

## Tell

Says it missed the cache and fetched the value, which is precisely what it was supposed to do.
Cannot know it is one of a synchronized many, so it recomputes in good faith at the same instant as all its peers, and its blameless correctness, multiplied, is the flood.
