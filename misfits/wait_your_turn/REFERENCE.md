---
concept: "Head-of-Line Blocking (first-come queueing; the ready item held behind a stalled one)"
field: "Safety, risk, and complex systems"
source: "Karol, Hluchyj & Morgan (IEEE Trans. Communications, 1987)"
axis: shared-ordering
sign: negative
updated: "2026-08-24"
---

# Wait Your Turn: Reference

The research warrant for Wait Your Turn.
The term is the switch architects'; the play runs on head-of-line blocking in first-come queueing, and on what
happens to a system whose items must be served in the order they arrived, all cited below.

## Line of Work

Staging the single ordered queue as **a discipline whose fairness and whose blocking are one property**: arrivals are
served in the order they joined, which is the rule a designer would choose and would choose again; the item at the
front stalls on something legitimate that has nothing to do with anybody behind it; and every item behind, ready to be
served and wanted by a destination that is standing free, does not move. The play models the documented mechanics, the
first-come rule that needs no supervision and cannot be worked by the confident, the stall that is real work
proceeding normally, the ready item held by sequence alone, the destination that is idle rather than contended, the
occupancy figure that reports the room as underused and is correct, and the two settlements that recover the loss at a
price, as the load-bearing vectors of the structure, not as a tale of a slow customer or a badly run counter.

The governing law is that a shared first-come queue transmits the front item's delay to every item behind it
regardless of whether those items are in competition for anything, so the ordering that makes a queue fair between
any two members is the ordering that makes it blocking across all of them.

**Nobody in the room falls short, and that is what puts the failure outside anybody's conduct.** The rule is the fair
one and is being kept. The item at the front is waiting on work that is genuinely proceeding. The item behind keeps
the order without being asked. The free destination is staffed and willing. The occupancy figure is honestly computed.

**And the discipline is good, which the play establishes before anything else.** First come, first served needs no
referee, cannot be gamed by the confident, treats the timid exactly as it treats the pushy, and costs almost nothing
to run, which is why it is everywhere. A queue that abandons it becomes a queue where the loudest are served first.
**Nothing in this production improves by relaxing it**, and the production never asks for that, which is what keeps
the misfit from resolving into a complaint about the rule.

**Then the harm is at its purest when there is nothing to do.** This is the property that separates it from every
account of congestion. Stipulate an almost empty system: one stalled item at the front, one ready item behind, and
every destination in the building free. The ready item still waits, and the whole of its wait is sequence.
**The resource it is waiting for is not in use by anybody**, so emptying the system of all other demand relieves none
of it, and the defect is one of **ordering** rather than of capacity.

**Then the arithmetic can be checked rather than believed.** Under saturation, with uniform destinations and a single
first-come queue per entrance, the fraction of the capacity such a system can use approaches **two minus the square
root of two**, about **fifty-eight and a half per cent**. So more than two fifths of the capacity is lost to the
ordering alone, with the destinations those items want standing free. There is no fitted constant here and nothing to
dispute: better equipment raises the rate and leaves the fraction exactly where it is.

**And the instrument points away from it.** Occupancy is the obvious thing to measure about a bank of servers, it is
honestly computed, and it reports a room whose servers are idle as underused, which is true. An operator who reads
spare capacity off that figure has reasoned correctly from an accurate number to a true conclusion, and the queue has
still not moved. Because the harm's whole nature is that the servers are free, **the figure that would raise the alarm
in almost any other failure is here the signature of this one**, read as its opposite, and measuring more often or
more precisely reports the same thing more often.

**And the two settlements pay in different currencies.** Giving each destination its own queue and choosing a pairing
of queues to destinations at every tick recovers the lost capacity in full, and buys a **decision that never
completes**: an office that did not exist before, that must run for as long as the system does, and whose quality the
system's performance now depends on, where the single queue had no choice available to get wrong. Cutting the single
ordered stream into independent ones removes the blocking outright, and spends **the guarantee that things arrive in
the order they were sent**, which was not an oversight but the reason a single ordered stream was chosen and the
assumption everything built on top of it made. **Neither is a way to keep one fair queue and also not wait.**

It is distinct from the house's **No Idle Hands**, which is the nearest incumbent and stages the utilisation trap,
where waiting time climbs steeply as a server approaches saturation. Remove that engine entirely, by stipulating real
slack, a system idle almost all of the time and no queueing delay from load anywhere, and this misfit stands whole and
is in fact at its sharpest: **the blocked item is not waiting for a busy server, it is waiting for a free one it is
not permitted to reach.** The two are opposite in their relation to load, which is the cleanest separation available:
there the harm arrives with utilisation and vanishes with slack, here the harm is unchanged by slack and is displayed
in its pure form at the lowest demand the system ever sees.

It is distinct from the house's **Outranked from Below**, which stages priority inversion, where a low-priority holder
of a resource lets a middle-priority task effectively outrank a high-priority one. Remove that engine, by stipulating
a single priority for everything in the system and no ranking of any kind, and this stands entire, because **nothing
here turns on rank.** That play needs at least three priority levels and a shared resource to invert them; this one
has no priorities, no inheritance and no resource held by the item at the front, which is waiting on something outside
the system altogether.

It is distinct from the house's **The Last One to Answer**, which stages the tail at scale, where a request fanning out
to many components is finished by the slowest of them and the rare slow case stops being rare in proportion to the
fan-out. Remove that engine, by setting the fan-out to one, so that no request ever waits on more than a single
component, and this stands untouched: **one queue, one stalled head, and no maximum over a set anywhere in it.** There
one item waits on many servers; here many items wait on one position, and the harm falls on everybody except the one
whose delay it is.

It is distinct from the house's **Too Kind to Drop**, which stages bufferbloat, where excessive buffering converts
loss into latency and collapses the feedback that would have controlled the flow. Remove that engine, by stipulating
the shallowest queue that can hold two items at once, and this stands entire, because **a queue of depth two already
carries the whole defect**: one stalled at the front and one ready behind it is the complete mechanism. That play needs
a deep buffer and gets worse as the buffer grows; this one needs no depth at all and is not improved by removing any.

## Origin

The spine and its arithmetic, why the limit binds, the remedy that recovers the capacity, the remedy that gives up the
order, and the argument that is still open.

| Source                                                                 | Key Work / Event                                                                                                                                                                                                                                                | Scope                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mark J Karol, Michael G Hluchyj & Samuel P Morgan**                  | "Input Versus Output Queueing on a Space-Division Packet Switch" (IEEE Transactions on Communications, COM-35(12), 1987): saturation throughput for a space-division switch with a single first-come queue per input, under uniform destination traffic         | **The spine, and it is derived rather than surveyed**: the achievable fraction of capacity approaches two minus the square root of two, about fifty-eight and a half per cent, so more than two fifths is lost to the ordering alone while the wanted destinations stand free.    |
| **Why the ordering blocks**                                            | the rule that a first-come queue is served only from its front, so an item whose destination is idle cannot be reached while the item ahead of it is stalled on something unrelated                                                                             | **The constraint, and it is checkable**: the loss requires no contention, no shortage and no competing demand, so it survives at any level of load and is displayed in its purest form at the lowest, which is the opposite of a congestion account.                              |
| **Nick McKeown, Adisak Mekkittikul, Venkat Anantharam & Jean Walrand** | "Achieving 100% Throughput in an Input-Queued Switch" (IEEE Transactions on Communications, 47(8), 1999), with McKeown's iSLIP scheduling (IEEE/ACM Transactions on Networking, 7(2), 1999): a separate queue per destination, and a matching chosen each cycle | **The remedy, and its price**: the capacity is recoverable in full, and what it costs is a scheduling decision that must be made again every cycle for the life of the system, so the performance now depends on the quality of a choice that did not previously exist.           |
| **Adam Langley and colleagues**                                        | "The QUIC Transport Protocol: Design and Internet-Scale Deployment" (SIGCOMM, 2017): independent streams within one connection, so a stall in one does not hold the others, against a single ordered byte stream that does                                      | **The other remedy, and what it spends**: the blocking is removed by giving up a single delivery order across the connection, which was not an oversight but the property everything above it had assumed, so the answer trades one guarantee for another rather than adding one. |
| **Whether the limit binds in practice**                                | the standing engineering argument over internal speedup, combined input and output queueing, and how much of the ordered-stream benefit a split-stream design gives back under loss                                                                             | **The live dispute, cited to hold the line**: how far the saturation figure constrains a particular built system, and what stream independence is worth in the field, are genuinely contested. The play stages the ordering defect and adjudicates none of it. Distinction only.  |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast any customer as slow, any
  counter as badly run or any operator as inattentive, because nothing in the room has a decision to get wrong: the
  first-come rule is the fair one, is the cheap one, needs no supervision and is being kept by everybody; the item at
  the front is waiting on work that is genuinely proceeding and that it did not choose and cannot shorten; the item
  behind is ready, keeps the order without being asked, and is protected by the very rule that holds it; the free
  destination is staffed, willing and in competition with nobody; and the occupancy figure is the obvious statistic,
  honestly computed, from which spare capacity is a correct inference. The failure is authored by nobody and emerges
  from the structure, so the misfit is that an order which is just between any two members is blocking across all of
  them at once.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Relaxing the discipline produces a
  queue where the confident go first, which is a worse rule and is never asked for here. Adding capacity leaves the
  harm exactly where it was, because the capacity was never spent: the destinations are idle. Making the front faster
  lowers the duration of each stall and leaves the structure intact, so the same account returns at the next stall.
  Watching the instrument more closely recovers nothing, since a measure of occupancy cannot report a harm whose
  nature is that occupancy is low. A queue per destination recovers the capacity in full and installs a decision that
  never completes and can itself be done badly. And independent streams remove the blocking outright by giving up the
  single delivery order, which is a real property that real things depended on.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed as the
  house's. The staging is the house's; the saturation analysis of first-come input queueing is Karol, Hluchyj and
  Morgan's, the recovery of full throughput by per-destination queueing and matching is McKeown, Mekkittikul,
  Anantharam and Walrand's with McKeown's scheduling work, and the deployed split-stream transport is Langley and
  colleagues'. The bounds are carried with them: **the saturation figure is derived under stated assumptions**,
  uniform destination traffic and a particular switch model, and is offered as the shape of the ordering loss rather
  than as a constant of any built system; how far it constrains real equipment, given internal speedup and combined
  queueing, is genuinely contested and the play carries that argument rather than settling it; what stream
  independence is worth in the field is likewise disputed; and the account is stated for items whose destinations
  differ, which is not every queue. **The play makes no claim about any system, any service or any operator, and
  gives no engineering, operational or architectural advice of any kind**, only that a queue served from its front
  passes the front item's delay to everything behind it, whether or not anything behind it wanted the same thing.
