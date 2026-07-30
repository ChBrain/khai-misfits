---
updated: "2026-07-30"
---

# Long After the Cause: Reference

The research warrant for **Long After the Cause**, a staging of the phenomenon the literature calls a
**metastable failure** (Bronson, Aghayev, Charapko and Zhu): that a distributed system running near
its capacity holds two stable operating points and not one, a healthy point and a jammed point, so a
transient trigger can push it across a threshold into the second, where a sustaining feedback loop of
work amplification, retries, cold caches, and dead work in the queue, keeps it pinned after the
trigger has entirely gone, and the load at which it could recover lies far below the load that broke
it. It is held with the finding that the effect is conditional on a real amplification mechanism and
on the system already running in its vulnerable band, and that it lifts under load shedding, budgeted
retries, capped queues, or standing headroom, none of them free and none of them removing the second
state.

## Line of Work

Staging metastable failure as a **loop-outlives-its-trigger structure**: a service runs in a healthy
state with margin to spare, and the fact that goes unknown because it has never been observed is that
the same system has a second stable state beneath the first, one in which every machine is up, every
process is running hot, and almost nothing is served. Ordinary operation happens entirely in the
upper state, so the lower one is neither planned for nor tested against. When the service is running
in its vulnerable band, close enough to capacity that the margin is thin though nothing is yet wrong,
a brief and unremarkable trigger, a collection pause, a deploy that leaves a tier's cache empty, a
dependency slow for a minute, a burst of traffic, is enough to push latency past the point where
requests begin to time out (Bronson, Aghayev, Charapko and Zhu). What follows is the correct behaviour
of every part: a client retries a request that timed out, which is what every guide and every default
library configuration prescribes and what a well-written client does; a cache emptied by a restart
fetches what it lacks from the backend, which is the whole of a cache's job; and the backend accepts
the connections and works the queue in front of it rather than refusing work it has the capacity to
attempt (Beyer, Jones, Petoff and Murphy). Together these multiply the work: each timeout returns as
two requests or three, each miss lands on a backend now too saturated to answer fast enough for the
cache to refill, and much of the backend's effort goes to requests whose callers have already stopped
waiting, dead work that will be discarded on completion while crowding out the live work behind it.
The play models the documented mechanics: the bistability that gives the system a second stable
point, the vulnerable band that makes the threshold reachable, the transient trigger, the sustaining
effect that amplifies work, the hysteresis by which the recovery threshold sits far below the trip
threshold, and the load shedding that alone starves the loop, as the load-bearing vectors of the
structure, and not as a claim that any component is faulty or any engineer negligent. The ordinary
expectation is that a failure ends when its cause ends; the finding is that where the failure itself
generates enough work to cause the failure, the cause becomes unnecessary. The governing law is that
**where a system running near its vulnerable band is tipped past a threshold by a transient trigger,
and where the correct response to failure inside it amplifies the work, the resulting loop is
self-sustaining, so the system settles into a second stable state and remains there after the trigger
has gone, recoverable only at a load far below the one that broke it**.

It is a distributed-systems failure structure no staged misfit holds, and it is carefully distinct
from its nearest neighbours. It is distinct from Faster Than It Can Cool, thermal runaway, where a
generation curve rising faster than a loss curve passes a critical point past which the restoring
feedback becomes amplifying: there the defining fact is that **no equilibrium is left at all** and the
system runs away to destruction, whereas here the system does not run away and does not destroy
itself, it falls into a second equilibrium and sits in it indefinitely, fully powered and fully busy,
and could in principle be lifted back out, which is precisely what makes the hysteresis gap the
load-bearing vector rather than the runaway. It is distinct from Fixes that Fail, where a remedy
applied to a symptom relieves it now and feeds it later through a delayed loop, so the trouble
returns worse and draws more of the same remedy: there the engine is a **fix** and a **delay**, whereas
here nothing is applied as a remedy at all, the retry being ordinary correct operation rather than an
intervention, and there is no cycle of return, only one crossing into one state that then persists
continuously. It is distinct from The Brittle Optimum, where slack is trimmed away slice by slice
until a tightly coupled system shatters on the first shock it cannot absorb: there the mechanism is
the **removal of margin** and the outcome is a break, whereas here margin was present and the system
does not break, and no quantity of slack changes the trap's signature, since once the system is on
the lower floor, restoring the original load level does not restore service. It is distinct from Both
Take the Crown, the CAP trade under partition, where each half of a split cluster correctly promotes
itself and the state forks: there the trap needs an **actual network partition** and produces a
correctness violation, two irreconcilable histories, whereas here the network is fine, nothing forks,
no invariant is broken, and the entire failure is one of throughput sustained by load.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                                                     | Key Work / Event                                                                                                                                                                              | Scope                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nathan Bronson, Abutalib Aghayev, Aleksey Charapko, Timothy Zhu**        | "Metastable Failures in Distributed Systems" (_HotOS_, 2021)                                                                                                                                  | **The spine and the naming**: the stable, vulnerable, and metastable failure states; the transient trigger; the sustaining effect that keeps the system in the failure state after the trigger is gone. The Other Floor, The Trip, The Loop, The Gap.                           |
| **Lexiang Huang, Matthew Magnusson and colleagues**                        | "Metastable Failures in the Wild" (_OSDI_, 2022)                                                                                                                                              | **The field survey**: metastable failures identified across a large body of public incident reports, with the recurring sustaining effects, retry amplification, cache degradation, and queue buildup, catalogued from production outages. The Loop, The Spin, The Boundary.    |
| **Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (eds.)** | _Site Reliability Engineering_ (O'Reilly, 2016), on handling overload and addressing cascading failures                                                                                       | **The practitioner spine and the remedy**: the server death spiral, the correctness of client retry, and the finding that recovery requires shedding load below the level that caused the failure, plus retry budgets and queue caps as standing costs. The Spin, The Boundary. |
| **John Nagle; Van Jacobson, Michael Karels**                               | RFC 896 (1984), coining congestion collapse; "Congestion Avoidance and Control" (_SIGCOMM_, 1988)                                                                                             | **The ancestor, held near**: retransmission consuming the bandwidth whose scarcity caused the loss, the same shape one layer down, cited to mark that the pattern is old and that the modern account generalises it beyond the transport layer. Distinction and lineage.        |
| **Practitioner**                                                           | the service that will not recover after the burst has passed; the deploy that empties a cache and takes the tier down with it; the incident resolved only by turning traffic away at the edge | The trap in the field, and its cost: an outage with no bug to find and no component failing its own tests, ended by deliberately refusing users the machines could have served.                                                                                                 |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the
  client as reckless, the cache as broken, the backend as badly built, or the operator as slow,
  because the finding it stages is that each behaves correctly: retrying a timed-out request is
  prescribed practice and a client that gave up on first failure would be the defective one; a cache
  fetching what it lacks is performing its only function; a backend accepting work it has the capacity
  to attempt is behaving as servers behave; and an operator who watches a passed spike and a flat
  service is not failing to look, since the reading that would explain it, that the system is now
  holding itself down, is not one the graphs display (Bronson, Aghayev, Charapko and Zhu; Beyer,
  Jones, Petoff and Murphy). The loss is authored by no one: it is bistability plus a vulnerable band
  plus a work-amplifying response, so every component would pass its own tests at the very moment the
  service is down, and there is no bug to find.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The loop can be
  starved, but not for free: shedding load means deliberately refusing requests the machines could
  physically have served, and it must usually be harder and longer than feels warranted, because
  anything above the recovery threshold leaves the loop fed; and the standing alternatives, budgeted
  retries, capped queues that drop dead work, and headroom carried idle, are real bills paid on every
  quiet day against a failure that arrives rarely (Beyer, Jones, Petoff and Murphy). None of them
  removes the second stable state; they only set how hard it is to fall to it. The reckoning is that
  a system's ability to recover by itself rests on the loop being unable to feed itself, and where it
  can, waiting is not a strategy at any duration.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here,
  never claimed as the house's. The naming of metastable failure and the account of the stable,
  vulnerable, and failure states, the transient trigger, and the sustaining effect are Bronson,
  Aghayev, Charapko and Zhu's; the survey of how these appear across production incidents is Huang,
  Magnusson and colleagues'; the practitioner account of overload, the cascading-failure spiral, and
  the load shedding that alone breaks it belongs to the site reliability engineering literature; and
  the ancestral form, retransmission feeding the congestion that caused it, is Nagle's and Jacobson
  and Karels's, drawn to mark the lineage and not to claim the modern result. The scope is held to
  systems with a genuine work-amplification mechanism running near their vulnerable band, and not
  stretched into a claim that every slow recovery, every cascading outage, or every overload is a
  metastable failure, since a system that recovers when its trigger ends is by definition not in one.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Other Floor**: carries the bistability (Bronson, Aghayev, Charapko and Zhu), the second stable
  operating point beneath the healthy one in which every machine is up and almost nothing is served,
  never visited in ordinary operation and therefore neither planned for nor tested against.
- **The Trip**: carries the transient trigger (Bronson, Aghayev, Charapko and Zhu), the collection
  pause, the deploy, the slow dependency, the burst, brief and unremarkable and enough only because
  it lands while the system is in its vulnerable band.
- **The Loop**: carries the sustaining effect (Bronson, Aghayev, Charapko and Zhu; Huang, Magnusson
  and colleagues), the work amplification by which timeouts make retries, retries make load, and load
  makes timeouts, each step the correct behaviour of the component performing it.
- **The Gap**: carries the hysteresis, the distance between the load that tips the system over and the
  far lower load at which it can climb back out, so between the two thresholds both states exist and
  which one holds depends on where the system has been rather than on the load now.
- **The Spin**: carries the phenomenon whole, the system pinned at the lower floor running at full
  effort for a fraction of its goodput, much of that effort spent on dead work whose callers have
  already gone, with every component passing its own tests while the service is down.
- **The Boundary**: carries the condition and the hedge (Beyer, Jones, Petoff and Murphy; Huang,
  Magnusson and colleagues), that the trap needs work amplification and a vulnerable band, and lifts
  under load shedding, budgeted retries, capped queues, or standing headroom, each a real and
  recurring cost and none of them removing the second stable state.
