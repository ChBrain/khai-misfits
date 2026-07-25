---
khai: position
title: "Request"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Position: Request

## Taxonomy

[All at Once](play_all_at_once.md). The seat of one of many identical concurrent callers for the same popular value, which takes the cached copy while warm and recomputes it on a miss, exactly as a cache miss is defined to do.

## Owner

- Project: khai-misfits

## Has

One correct move on a miss: look in the cache, take the stored copy if it is there, and if it is not, fetch the value from the backend and write it back.
A blameless contract: recomputing a missing value is the whole and right mechanism of a cache, so the seat asks for nothing it is not entitled to and does nothing it should not.
No view of the crowd, so it holds no knowledge that its peers are missing the same entry at the same instant, and no way to act on a fact it cannot see.

## Orders

Recompute on miss.
Read the cache, serve the stored copy where it exists, and where it does not, fetch the value from the backend and repopulate the entry.
Act alone and correctly, because that is the whole contract, and do not wait on peers you cannot see or know are there.

## Loses

Nothing of its own, and everything through its multiplication.
Because the seat is entirely correct and entirely blind, it recomputes in good faith at the same instant as all its peers, so it loses nothing as one request and, summed across the crowd, becomes the flood, a wrong that lives only in the aggregate.
It keeps its correctness intact and pays, collectively, for having so much identical company.

## Drives

Toward the correct action that stampedes purely by being concurrent,
each request right alone and blind to the rest, recomputing at the shared instant with all the others,
so the seat guilty of nothing but coincidence is the one whose blameless correctness, multiplied, floods the backend.
