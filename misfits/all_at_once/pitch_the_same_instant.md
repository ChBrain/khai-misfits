---
khai: pitch
title: "The Same Instant"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Pitch: The Same Instant

## Taxonomy

[All at Once](play_all_at_once.md). The default key the whole production is read in.

## Owner

- Project: khai-misfits

## Tenor

Efficient, unremarkable, fast.
A cache serving a popular value cheaply, the expensive backend behind it spared, every request answered in an instant and nothing to remark on.
Nothing false in it: the cache is doing exactly the good it was added for, and it does it better the more callers converge on the one hot value.

## Undertow

Under the efficiency, one shared expiry instant.
The stored copy has a single time to live, so it goes stale at the same instant for every caller, and at that instant every request misses at once and each, correctly, recomputes from the backend.
The recomputation that is nothing when one request does it is a flood when the whole popular crowd does it in the same instant, and it strikes the resource the cache was there to protect.

## Nerve

The plainness of a request doing exactly the right thing on a miss, and the discovery that ten thousand of them doing exactly the right thing at exactly the same instant is a spike:
that the harm is in no action and no misconfiguration, only in their coincidence, the popularity that fills the cache and the shared clock that empties it building the stampede between them,
and the resource buckling at the one moment its average load is nothing.

## Echo

After the run: a backend struck hardest at the instant the cache stopped shielding it, and no one in the crowd who did anything wrong (Vattani, Chierichetti, and Lowenstein).
And the fixes that work by breaking the coincidence and not the correctness: scatter the refreshes off the cliff, or collapse them to a single recompute (Nishtala and colleagues),
each bought with a value served a little stale or a request made to wait, and each built in before the hot key and the shared expiry ever fall into step.
