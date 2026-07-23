---
updated: "2026-07-23"
---

# Held Under: Reference

The research warrant for **Held Under** (play and company not yet staged;
this warrant is drafted first, to prove the science and the distinction before authoring).
The dynamic is the metastable-failure account of overload: Bronson and colleagues' metastable-failure
framework and Huang and colleagues' field study, with Nagle's and Jacobson's congestion collapse as the
older spine and Nygard's circuit breaker as the escape, all cited below.

## Line of Work

Staging metastable failure as a **self-sustaining-overload structure**: a system that a transient
trigger, a brief blip or spike, pushes from its healthy state into a failing one, in which some requests
fail, the clients that issued them retry exactly as well-behaved clients should, and the retry load
itself now exceeds capacity, so the system stays overloaded and failing long after the trigger has
passed, held down by nothing but everyone's correct retry logic. The governing law is not that anyone
overloaded the system on purpose or that the trigger was severe, but that **a temporary trigger can tip
a system into a bad equilibrium that its own correct recovery behaviour then sustains, so the failure
outlives its cause and cannot clear itself while every client keeps rightly retrying**. The play models
the documented mechanics: the metastable failure state entered by a trigger and held by a sustaining
feedback loop after the trigger is gone (Bronson and colleagues), the amplification by which retries and
work-multiplying policies keep the load above capacity in the wild (Huang and colleagues), the classic
instance in which dropped packets provoke retransmissions that deepen the congestion until goodput
collapses toward zero (Nagle; Jacobson), and the escape, tripping a circuit breaker and backing off with
jitter so the retries stop feeding the fire, at the cost of failing fast and shedding real work (Nygard;
Jacobson), as the load-bearing vectors of the structure, not as a tale of a fragile system or a careless
client.

It is distinct from the house's The Bullwhip Effect, where a demand signal is amplified stage by stage
up a multi-echelon supply chain, each tier over-ordering against the tier below: there the amplification
travels along a chain of separate actors, here there is no chain and no upstream, a single system whose
own clients' retries feed straight back onto it, a one-loop bistability rather than a multi-stage
cascade. It is distinct from No Idle Hands, where driving one node toward full utilisation makes its
queue delay diverge by the arithmetic of variability alone: there the system is in a stable, if
congested, steady state with no memory, here the system has two states and sticks in the bad one, a
self-sustaining equilibrium that persists after the load that triggered it is gone, not a steady-state
congestion curve. And it is distinct from The Bank Run, which is likewise a bistable, self-fulfilling
collapse: there the sustaining loop runs on belief, each depositor withdrawing because others might, and
here it runs on nothing but mechanism, retries firing by correct client logic with no belief, fear, or
expectation anywhere in the loop.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                  | Key Work / Event                                                                                                             | Scope                                                                                                                                                                                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bronson, Charapko, Aghayev, and Zhu** | "Metastable Failures in Distributed Systems" (_HotOS_, 2021)                                                                 | **The spine**: the framework of a stable state, a trigger that tips the system into a metastable failure state, and a sustaining effect that holds it there after the trigger is gone. The governing law. The Trigger, The Metastable State.              |
| **Huang, Magnusson, and colleagues**    | "Metastable Failures in the Wild" (_OSDI_, 2022)                                                                             | **The field study and the amplification**: real metastable failures from large systems, and the trigger-and-amplification mechanisms, retries and work multiplication, that keep the load above capacity. The Sustaining Load.                            |
| **John Nagle; Van Jacobson**            | "Congestion Control in IP/TCP Internetworks" (RFC 896, 1984); Jacobson and Karels, "Congestion Avoidance and Control" (1988) | **The older spine and the cure**: congestion collapse, where dropped packets provoke retransmissions that deepen congestion until goodput falls toward zero, and the slow-start and exponential-backoff control that ended it. The Collapse, The Breaker. |
| **Michael Nygard**                      | _Release It! Design and Deploy Production-Ready Software_ (2007); the circuit breaker and the retry storm                    | **The pattern and the escape**: the retry storm in which repeated calls after failure exhaust the system, and the circuit breaker that fails fast to stop the retries feeding it. The Retry, The Breaker.                                                 |
| **Practitioner**                        | the service that will not recover after a brief blip because every client keeps politely retrying the calls that fail        | The trap in the field, and its cost: a system stuck failing long after the cause has gone, held under by correct retries, that cannot clear until something makes the clients stop trying.                                                                |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast a fragile
  system or a careless client, because the source finding it stages is precisely that each part is
  behaving correctly: the trigger is transient and often minor, the system is sound, and the clients
  retry exactly as well-behaved clients are designed to, a failed request being one a good client should
  try again (Nygard; Bronson and colleagues). The stuck failure is authored by no one and emerges from
  the structure, a sustaining feedback loop in which correct retries are the load that keeps the system
  down (Bronson and colleagues; Huang and colleagues), so the misfit is that a healthy system knocked
  briefly off balance is held there indefinitely by its own users doing exactly the right thing.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The move that clears
  it, tripping a circuit breaker and backing off with jitter so the retries stop feeding the overload,
  does not come free: failing fast means rejecting real requests that would have succeeded, backing off
  means giving up work the client legitimately wants done, and both ask a correctly-behaving client to
  stop doing the right thing (Nygard; Jacobson). The reckoning is recovery bought by shedding real load
  and overriding correct retry logic, not a free correction, and until something imposes it the system
  cannot lift itself, because the trying is the holding-down.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the metastable-failure framework is Bronson,
  Charapko, Aghayev, and Zhu's, the field study and amplification mechanisms are Huang, Magnusson, and
  colleagues', congestion collapse and its control are Nagle's and Jacobson's, and the retry storm and
  circuit breaker are Nygard's, and the condition the trap actually requires, a bad equilibrium sustained
  by correct recovery behaviour after its trigger is gone, is carried as carefully as the finding itself.

## Encoding

Source to constraint, per element. The play and its company are not yet authored; these are the
proposed load-bearing pieces the warrant commits the staging to carry, one per vector, no filler.

- **The Trigger**: carries the transient cause (Bronson and colleagues), the brief blip or spike that
  tips the system into the failing state and then passes, leaving the failure behind it.
- **The Retry**: carries the correct client behaviour (Nygard; Jacobson), the well-behaved reattempt of
  a failed request, each one individually right and none at fault.
- **The Sustaining Load**: carries the feedback (Bronson and colleagues; Huang and colleagues), the
  retries summing to a load above capacity that holds the system in the failing state, the loop that
  keeps it down.
- **The Metastable State**: carries the bad equilibrium (Bronson and colleagues), the self-sustaining
  failing state the system sticks in after the trigger is gone, stable enough to persist and needing
  force to leave.
- **The Collapse**: carries the visible failure (Nagle; Jacobson), goodput falling toward zero while the
  offered load stays high, the throughput that drops as the retries climb.
- **The Breaker**: carries the escape and its price (Nygard; Jacobson), the circuit breaker and
  backoff-with-jitter that stop the retries feeding the overload, bought by failing fast and shedding
  real work.
