---
updated: "2026-07-24"
---

# All at Once: Reference

The research warrant for **All at Once**. The title is a reading of the phenomenon the literature
calls the **cache stampede**, the dogpile, a caching instance of the classic thundering herd: when a
popular cached value expires, every concurrent request misses at the same instant and recomputes it
at once, a synchronized spike that overwhelms the backend the cache was there to spare, and the fix
is to de-synchronize or collapse the recomputations, all cited below.

## Line of Work

Staging the cache stampede as a **synchronized-coincidence-of-correct-actions structure**: a value
expensive to compute is stored in a cache with a time to live, so while it is warm every request is
served the cheap cached copy and the expensive backend is spared. The value is popular, which is why
caching it is worthwhile, and its time to live expires at a single shared instant, so at that instant
every concurrent request misses at once, and each, correctly and independently, does what a cache miss
is supposed to do: recompute the value from the backend and repopulate the cache. There is no wrong
action anywhere: a single miss recomputing is exactly right. But because the value was popular, the
misses are many, and because the expiry was a shared instant, they are simultaneous, so the recomputation
that would be trivial one at a time arrives as one synchronized flood that hits the backend all at once
and can overwhelm the very resource the cache existed to protect. The governing law is not that any
request misbehaves or that the cache is misconfigured, but that **a cached value spares the shared
backend right until it expires, and because the value is popular its expiry is a single shared instant,
so every concurrent request misses at once and independently recomputes it, and the very popularity that
made caching worthwhile concentrates all the misses into one synchronized spike that overwhelms the
backend the cache was there to protect, so the fix is to de-synchronize or collapse the recomputations,
not to compute less**. The play models the documented mechanics: the shared expiry that synchronizes the
misses, the flood of simultaneous recomputations, and the remedies that break the synchronization,
probabilistic early recomputation that refreshes before the cliff (Vattani, Chierichetti, and
Lowenstein) and leases that let only one request recompute while the rest wait (Nishtala and colleagues),
as the load-bearing vectors of the structure, not as a tale of a greedy client or a broken cache.

It is a synchronization interaction no staged misfit holds, and it is carefully distinct from its
nearest neighbours. It is distinct from the house's Held Under, the metastable retry storm, where
well-behaved clients' correct retries feed a self-sustaining overload that persists long after its
trigger is gone, a bistable bad equilibrium held up by the retry loop: here nothing retries into a loop
and nothing persists of itself, the stampede is a one-shot spike synchronized by a shared expiry that
subsides the instant the value is recomputed and re-cached, so the engine is the coincidence of many
correct independent actions on a shared clock, not a self-sustaining loop, and where a severe stampede
can tip a system into a Held Under state that is the two mechanisms composing, not the same one. It is
distinct from The Bank Run, the self-fulfilling panic, where each depositor withdraws because they fear
the others will and the synchrony is manufactured by belief, each act conditioned on what everyone else
is expected to do: here no request believes anything or watches any other, the synchrony is mechanical,
imposed by a shared expiry timestamp, and each request would act identically alone, so one is a
coordination by fear and the other a coincidence by clock, with no belief anywhere in the loop.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                                     | Key Work / Event                                                                                                                                    | Scope                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Andrea Vattani, Flavio Chierichetti, Keegan Lowenstein** | "Optimal Probabilistic Cache Stampede Prevention" (_Proceedings of the VLDB Endowment_, 2015)                                                       | **The spine**: a formal treatment of the stampede, and probabilistic early recomputation (XFetch), in which each request independently refreshes the value slightly before expiry with a probability that climbs as expiry nears, so the refresh happens off the cliff and the misses never all coincide. The Cache, The Expiry, The Miss, The Jitter. |
| **Rajesh Nishtala and colleagues (Facebook)**              | "Scaling Memcache at Facebook" (_NSDI_, 2013)                                                                                                       | **The practitioner spine**: thundering herds on hot keys, and the lease mechanism that hands the recomputation to a single client while the rest briefly wait, collapsing the flood to one. The Backend, The Stampede, The Jitter.                                                                                                                     |
| **Practitioner**                                           | the popular page served instantly from cache for an hour that, the instant its entry expires, sends every visitor's request to the database at once | The trap in the field, and its cost: the resource the cache was added to spare struck hardest at the one moment the cache stops shielding it, all at once.                                                                                                                                                                                             |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the request
  as greedy, the client as thoughtless, or the cache as broken, because the source finding it stages is
  precisely that every action is correct: a request that misses the cache is supposed to recompute the
  value and repopulate it, and that is exactly what each one does (Vattani, Chierichetti, and Lowenstein).
  The stampede is authored by no one and emerges from the composition, a popular value and a shared expiry
  turning many individually-right recomputations into one simultaneous flood, so the overload arises with
  no request out of line and nothing misconfigured, and the misfit is that the very popularity that made
  caching worthwhile is what concentrates the misses into a spike.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The remedies exist and
  work, probabilistic early recomputation that refreshes the value before the shared cliff so the misses
  scatter (Vattani, Chierichetti, and Lowenstein), and leases or request coalescing that let a single
  request recompute while the others wait on it (Nishtala and colleagues), and jittered expiries or serving
  the stale value while one refresh runs behind it, but none is free: each must be designed into the cache
  ahead of time, each adds coordination or bookkeeping to what was a simple lookup, and each buys the
  de-synchronisation by giving something up, a value served a little stale, a request made to wait on
  another, a refresh done before it was strictly needed. The reckoning is a guard built in early against a
  spike that appears only when a hot key and a shared expiry fall into step, and paid for in the ordinary
  case that never stampedes.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the formal treatment of the cache stampede and the
  probabilistic early-recomputation remedy are Vattani, Chierichetti, and Lowenstein's, the lease
  mechanism that coalesces the recomputation is Nishtala and colleagues', and the general thundering herd,
  of which the cache stampede is the caching instance, is the older operating-systems term, credited as
  the family and not claimed as this staging's own. The mechanism is carried as carefully as the finding:
  that the stampede is a synchronization phenomenon driven by a shared expiry, that it is a transient spike
  and not a persistent state, that each request's recomputation is individually correct, and that the
  remedies work by de-synchronising or collapsing the recomputations rather than by making the value
  cheaper to compute. The scope is held to caches with expiring entries under concurrent load, and not
  stretched into a general theory of overload or a claim that caching is unwise.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Cache**: carries the stored copy that spares the backend while it is warm (Vattani, Chierichetti,
  and Lowenstein), serving a popular value cheaply and hiding the cost of computing it, right up until it
  expires.
- **The Expiry**: carries the time to live and the single shared instant the value goes stale (Vattani,
  Chierichetti, and Lowenstein), the one clock that turns many independent requests into a synchronized
  crowd by making them all miss at once.
- **The Miss**: carries a single request finding the value gone and recomputing it (Vattani, Chierichetti,
  and Lowenstein), the individually-correct act that is right alone and ruinous in concert.
- **The Stampede**: carries the emergent spike (the dogpile; the thundering herd), the flood of
  simultaneous recomputations that arrives all at once because the misses coincided, harmful only for
  being synchronized.
- **The Backend**: carries the expensive origin the cache existed to protect (Nishtala and colleagues),
  the database or computation struck by every coincident miss at once, hardest at the moment the cache
  stops shielding it.
- **The Jitter**: carries the remedy and its price (Vattani, Chierichetti, and Lowenstein; Nishtala and
  colleagues), the de-synchronisation, probabilistic early recomputation, leases and request coalescing,
  jittered expiries, serving stale while revalidating, that scatters or collapses the recomputations, each
  built in ahead of time and bought by serving a little stale, waiting, or refreshing early.
