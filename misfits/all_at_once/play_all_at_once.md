---
khai: play
title: "All at Once"
description: "A cached value spares the backend until it expires, when every request misses at once and floods the thing it spared."
language: english
voice: "Efficient and unremarkable on the surface: a cache serving a popular value cheaply, sparing the backend, everything fast and fine. Underneath, one shared expiry instant that turns a crowd of independent requests into a synchronized flood, each doing exactly the right thing on a miss, recomputing the value, and all doing it at the same instant, so the recomputation that is nothing one at a time arrives as a spike that overwhelms the very resource the cache was there to protect. No villain and no misbehaving client, only correct actions coinciding on a shared clock. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Play: All at Once

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

All at Once.
Some values are expensive to produce: a query that takes a database real work, a computation that costs real time. So you cache the result, store it with a time to live, and for as long as it is warm every request that wants it is handed the cheap stored copy and the expensive backend behind it is never touched. This is one of the plainest wins there is: the more popular the value, the more requests the cache absorbs, the more the backend is spared. A cache earns its keep exactly in proportion to how many callers converge on the same hot value.
And that convergence is the catch. The stored copy has one time to live, and it expires at one instant, the same instant for every caller, because they are all reading the same entry. So the moment it goes stale, every request in flight for that value misses the cache at once, together, and each of them does precisely what a cache miss is defined to do: go to the backend, recompute the value, and write it back. Not one of them is wrong to. A single miss recomputing is the whole correct mechanism of a cache. But there is not one miss. There are as many as the value was popular, and they are not spread out, they are simultaneous, fired by the same expiry clock.
And here is the turn that makes it a trap and not just a refresh. The recomputation that costs nothing when one request does it costs everything when ten thousand do it in the same instant, because they all hit the backend at once, and the backend the cache was protecting is struck by the whole undamped load the cache existed to absorb, precisely at the moment the cache stops absorbing it. The popularity that made the cache worth having is exactly what makes the stampede large, and the shared expiry that made the cache simple is exactly what makes the stampede synchronized. Nothing is overloaded on average, no request is out of line, and the resource still buckles, because the harm is not in any action but in their coincidence.
And none of it is misbehaviour. Every request read a valid stored copy while it was there and recomputed a missing one when it was gone, which is the entire contract of a cache and exactly right. The cache served and expired as a cache does. The stampede is authored by no one: it is a crowd of correct, independent actions that happen to fall on the same instant, and there is no villain in it and no fool, only a shared clock that turned many right answers into one wrong sum.
And the fixes all work by breaking the coincidence rather than the correctness. Let each request refresh the value a little before the shared cliff, with a chance that climbs as expiry nears, and the refreshes scatter off the instant instead of landing on it (Vattani, Chierichetti, and Lowenstein). Or let just one request recompute while the rest briefly wait on it, and the flood collapses to a trickle (Nishtala and colleagues). Or jitter the expiries so the keys do not fall due together, or serve the stale value a moment longer while one refresh runs behind it. Each de-synchronises or collapses the stampede, and each is bought with something, a value served a little stale, a request made to wait, a refresh done before it was strictly needed, and each must be built into the cache before the hot key and the shared expiry ever fall into step.

## Arc

The bend is this: a cached value spares the shared backend right until it expires, and because the value is popular its expiry is a single shared instant, so every concurrent request misses at once and independently recomputes it, and the very popularity that made caching worthwhile concentrates all the misses into one synchronized spike that overwhelms the backend the cache was there to protect, so the fix is to de-synchronize or collapse the recomputations, not to compute less.
It runs on a cache that earns its keep.
An expensive value is stored with a time to live, so while it is warm every request is served the cheap copy and the backend is spared, and the more popular the value the more the cache absorbs (Vattani, Chierichetti, and Lowenstein).
And it turns on one shared expiry. The stored copy has a single time to live and goes stale at one instant for every caller, because they all read the same entry, so at that instant every concurrent request misses the cache at once (Vattani, Chierichetti, and Lowenstein).
And every miss does the right thing. Each missing request recomputes the value from the backend and writes it back, which is exactly the correct mechanism of a cache, so there is no wrong action anywhere in the crowd (Vattani, Chierichetti, and Lowenstein).
And the right things sum to a flood. Because the value was popular the misses are many and because the expiry was shared they are simultaneous, so the recomputation trivial one at a time arrives as one synchronized spike that strikes the backend the cache existed to protect (Nishtala and colleagues).
And the whole is authored by no one. Every request kept the cache's contract exactly and the cache served and expired as it should, so the overload is a coincidence of correct independent actions on a shared clock, not a coordination and not a fault.
Break the coincidence, and the stampede goes. Refresh a little before the shared cliff so the misses scatter, or let one request recompute while the rest wait so the flood collapses, or jitter the expiries, or serve stale while one refresh runs behind (Vattani, Chierichetti, and Lowenstein; Nishtala and colleagues): but each de-synchronises or collapses rather than computing less, each is bought with a value served a little stale or a request made to wait or a refresh done early, and each must be built in before the hot key and the shared expiry fall into step, so the guard is paid for in every ordinary case that never stampedes, against the one that does.

## Company

**Pitch**

- [The Same Instant](pitch_the_same_instant.md)

**Personas**

- [The Request](persona_the_request.md)
- [The Cache](persona_the_cache.md)
- [The Backend](persona_the_backend.md)
- [The Warden](persona_the_warden.md)

**Positions**

- [Request](position_request.md)
- [Cache](position_cache.md)
- [Backend](position_backend.md)
- [Warden](position_warden.md)

**Plans**

- [Recompute on Miss](plan_recompute_on_miss.md)
- [Serve and Expire](plan_serve_and_expire.md)
- [Answer Every Call](plan_answer_every_call.md)
- [Break the Sync](plan_break_the_sync.md)

**Places**

- [The Key](place_the_key.md)
- [The Front](place_the_front.md)
- [The Window](place_the_window.md)

**Processes**

- [Serving](process_serving.md)
- [Lapsing](process_lapsing.md)
- [Flooding](process_flooding.md)
- [Scattering](process_scattering.md)

**Pieces**

- [The Hit](piece_the_hit.md)
- [The Expiry](piece_the_expiry.md)
- [The Miss](piece_the_miss.md)
- [The Stampede](piece_the_stampede.md)
- [The Overload](piece_the_overload.md)
- [The Jitter](piece_the_jitter.md)

## Triggers

**[Warm](plot_warm.md)**
The setup, the cache doing exactly its good. At [the Front](place_the_front.md), [the Cache](persona_the_cache.md) on [Serve and Expire](plan_serve_and_expire.md) hands [the Hit](piece_the_hit.md) cheaply to every request through [Serving](process_serving.md), and [the Backend](persona_the_backend.md) sits spared. Closes with a popular value served fast from cache and the expensive origin behind it never touched, the win a cache is for.

**[The TTL Runs Out](plot_the_ttl_runs_out.md)**
Cue: the entry reaches its time to live. At [the Key](place_the_key.md), through [Lapsing](process_lapsing.md), the single stored copy goes stale at one shared instant, laying [the Expiry](piece_the_expiry.md). Closes with nothing failed, only a stale entry that the very next request will refresh, the trigger set and still harmless.

**[Everyone Misses](plot_everyone_misses.md)**
Cue: the shared instant arrives. In [the Window](place_the_window.md), every concurrent [Request](persona_the_request.md) on [Recompute on Miss](plan_recompute_on_miss.md) takes [the Miss](piece_the_miss.md) at once and each correctly recomputes, so through [Flooding](process_flooding.md) the many right recomputations arrive as one [Stampede](piece_the_stampede.md). Closes with the flood in flight, every request in it doing exactly the right thing and all doing it together.

**[The Backend Buckles](plot_the_backend_buckles.md)**
Cue: the flood lands. [The Backend](persona_the_backend.md) on [Answer Every Call](plan_answer_every_call.md) is struck by every coincident recompute at once, [the Overload](piece_the_overload.md) hitting the resource the cache was protecting at the one moment it stopped shielding it. Closes with the origin buckling though its average load is nothing, and if it slows enough for requests to pile behind, the spike tipping toward Held Under, that mechanism composing with this one, not this one alone.

**[No One Cut the Line](plot_no_one_cut_the_line.md)**
Cue: look for the fault and find none. No request misbehaved, the cache did its job, nothing was misconfigured: the harm was pure simultaneity, correct independent actions coinciding on a shared clock (Vattani, Chierichetti, and Lowenstein). Closes with no villain found, the overload a coincidence by clock and not, as in a bank run, a coordination by fear.

**[Scatter the Herd](plot_scatter_the_herd.md)**
Cue: the guard is built in ahead of time. At [the Key](place_the_key.md), [the Warden](persona_the_warden.md) on [Break the Sync](plan_break_the_sync.md) through [Scattering](process_scattering.md) lays [the Jitter](piece_the_jitter.md): refresh before the cliff, or lease the recompute to one, or jitter the expiries, or serve stale while one refresh runs. Closes with the flood scattered or collapsed, bought by a value served a little stale, a request made to wait, or a refresh done early, and paid for in every case that never stampedes.

## Stakes

Whether a cache can spare the backend without, at the one moment it stops, striking it with the whole load it spared, when the popularity that fills the cache and the shared expiry that empties it are the same two things that build the stampede.
Every plot but the last moves the same way: toward more callers converging on the same hot value with the same shared expiry, because that convergence is exactly what makes the cache worth having. The production cannot make the misses harmless by making each request more correct, because each is already entirely correct: recomputing on a miss is the whole mechanism, and the flood is not a fault in any request but the coincidence of many right ones on a single clock. The one solvent is to break the coincidence, to scatter the refreshes off the shared instant or collapse them to a single recompute, and that must be designed in before the hot key and the shared expiry ever meet, and paid for in every ordinary hour that never stampedes. It can only show that no request is greedy and nothing is misconfigured, that the cache served and expired exactly as it should and every miss recomputed exactly as it should, and that the move which would spare the backend, de-synchronising the correct actions so they no longer land together, is a guard against a spike that appears only when popularity and a shared clock fall into step, all at once.
