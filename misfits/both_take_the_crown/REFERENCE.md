---
updated: "2026-07-29"
---

# Both Take the Crown: Reference

The research warrant for **Both Take the Crown**, a staging of the phenomenon distributed-systems
practice calls **split-brain** and theory calls the **CAP theorem**: that when a network partition cuts
a cluster of replicas in two, each side faces the same locally correct choice, keep serving or stop, and
because neither side can tell a crashed peer from an unreachable one, each that keeps serving promotes
itself, so two nodes come to believe they are the sole primary and accept conflicting writes that cannot
be reconciled. It is held with the finding, proved, that under a partition a system cannot keep both
consistency and availability, so the trap is not a bug but a forced choice, and it is conditional on a
partition actually occurring and on the data needing to agree, lifting where the network holds, where a
majority rule is imposed, or where the workload tolerates reconciling later.

## Line of Work

Staging split-brain as a **both-sides-correctly-crown-themselves structure**: a set of replicas is meant
to hold one shared state and agree on it, with one primary accepting writes and the rest following. The
network is not perfectly reliable, and one day it partitions: a link fails, and one group of nodes can no
longer reach another, though every node in both groups is alive and working. Now each side must decide
what to do about a primary it can no longer hear, and here is the fundamental trouble: a node cannot tell
a crashed peer from an unreachable one, since silence on the wire means the same whether the other side
is dead or merely cut off (Fischer, Lynch, and Paterson). So it cannot simply wait to find out. It must
choose: keep serving, promoting itself so the system stays available, or stop, refusing writes so the
system stays consistent. Each side, reasoning correctly and blind to the other, makes the available
choice and promotes itself, so both become primary, and the writes that land on each fork the shared
state into two irreconcilable histories (Gilbert and Lynch). And it cannot be designed away without a
price, because the CAP theorem proves that under a partition a system must give up consistency or
availability, it cannot keep both, so the only way to prevent two heads is to let one side refuse to
serve, a quorum in which the minority stands down, buying consistency with the availability it
surrenders (Brewer; Gilbert and Lynch). The ordinary expectation is that a well-built cluster stays both
up and correct; the finding is that a partition forces a choice between them. The governing law is that
**when a partition splits a replicated system and no node can distinguish a failed peer from an
unreachable one, each side that stays available correctly promotes itself, so two primaries accept
conflicting writes and the state forks, and consistency can be preserved only by surrendering
availability on the minority side, a forced trade with no node in error**. The play models the documented
mechanics: the impossibility of distinguishing failure from delay in an asynchronous system (Fischer,
Lynch, and Paterson), the CAP trade between consistency and availability under partition (Brewer;
Gilbert and Lynch), and the quorum and fencing that resolve it by standing the minority down (Lamport),
as the load-bearing vectors of the structure, and not as a claim that distributed systems cannot work.

It is a distributed-systems structure no staged misfit holds, and it is carefully distinct from its
nearest neighbours. It is distinct from The Bank Run, a self-fulfilling panic where each saver withdraws
because he fears the others will: there the engine is a belief cascade about what others will do,
whereas here no one panics and no one predicts anyone, each side acting correctly on the partial
information a partition leaves it, the failure a matter of network topology and protocol and not of fear.
It is distinct from Accidental Adversaries, where two cooperators each make a locally defensive move that
harms the other and spiral into rivalry over repeated rounds: there the harm builds through a feedback
loop of reactions over time, whereas here it is a single-shot consistency failure forced by one
partition, a proved impossibility rather than an escalating misread. It is distinct from The Price
Neither Will Name, the bilateral-trading impossibility, which also proves you cannot have every good
property at once: there the barrier is two-sided private information in a bargain, whereas here it is a
network partition in a replicated system, a different domain and a different impossibility, the one about
what a mechanism can reveal and the other about what a system can guarantee.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                             | Key Work / Event                                                                                                                                                                                   | Scope                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Seth Gilbert, Nancy Lynch**                      | "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services" (_ACM SIGACT News_, 2002)                                                                      | **The spine**: the formal proof that no distributed system can be at once consistent, available, and partition-tolerant, so under a partition it must give up one of consistency or availability. The Trade, The Fork.                                  |
| **Eric Brewer**                                    | "Towards Robust Distributed Systems" (PODC keynote, 2000); "CAP Twelve Years Later" (_Computer_, 2012)                                                                                             | **The conjecture and its reading**: the CAP conjecture that consistency, availability, and partition tolerance cannot all be had, and the later clarification that the real choice is C versus A only while a partition lasts. The Trade, The Boundary. |
| **Michael Fischer, Nancy Lynch, Michael Paterson** | "Impossibility of Distributed Consensus with One Faulty Process" (_Journal of the ACM_, 1985)                                                                                                      | **The deeper impossibility**: in an asynchronous system a node cannot distinguish a crashed peer from a slow one, so consensus cannot be guaranteed to terminate, the silence that forces the choice. The Silence.                                      |
| **Leslie Lamport**                                 | "The Part-Time Parliament" (Paxos, _ACM TOCS_, 1998); "Time, Clocks, and the Ordering of Events" (1978)                                                                                            | **The resolution**: quorum consensus, in which only a majority may act and the minority stands down, so at most one side proceeds, buying consistency by surrendering availability on the other. The Boundary.                                          |
| **Practitioner**                                   | the two-datacentre split where each half promotes its own primary; the Jepsen analyses of real databases losing writes under partition; the quorum and fencing tokens of Raft, ZooKeeper, and etcd | The trap in the field, and its cost: a link fails, both sides stay up and answering, and the data quietly forks, so the price of never forking is a system that sometimes, correctly, refuses to serve.                                                 |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast either
  side as the broken one, because the finding it stages is that both act correctly: a node cut off from
  the primary and unable to tell whether it crashed or is merely unreachable is right to promote itself
  and keep serving, since a system that stalls whenever the network hiccups is a failure too, and the
  peer on the far side reasons the same way with the same correctness (Gilbert and Lynch; Fischer, Lynch,
  and Paterson). The client that writes to whichever primary answers is not at fault, and the architect
  who fences one side is not timid. The loss is authored by no one: it is a partition plus the
  impossibility of telling failure from delay, so two correct nodes crown themselves and the state forks,
  a divergence produced by the network and the logic and not by anyone's error.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Split-brain can be
  prevented, but only by paying availability: a quorum that lets only the majority side act forces the
  minority to stand down, so the system stays consistent and, on the minority side, stops serving; a
  fencing token that rejects a stale primary's writes does the same at the write path; and either way,
  the moment a partition isolates you in the minority, correct behaviour is to refuse (Brewer; Gilbert
  and Lynch; Lamport). The reckoning is that the CAP theorem is a theorem: under a partition, keeping the
  state single and correct costs the ability to serve on every side, and no design escapes the trade, it
  only chooses which horn to take.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the CAP proof is Gilbert and Lynch's, the
  conjecture and its twelve-years-later reading are Brewer's, the impossibility of distinguishing a
  crashed process from a slow one is Fischer, Lynch, and Paterson's, and quorum consensus is Lamport's.
  The mechanism is carried as carefully as the finding: that the trap needs an actual partition and a
  shared state that must agree, that the promoting is correct on both sides and not a fault, that the
  fork follows from two primaries and not from a bug, and above all that it is conditional, since a
  network that holds, a majority rule that stands the minority down, or a workload that tolerates
  reconciling divergent writes later each changes the case. The scope is held to consistency and
  availability under partition, and not stretched into a claim that distributed systems are unreliable or
  that replication does not work.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Partition**: carries the network split (Gilbert and Lynch), one group of nodes unable to reach
  another though every node is alive and working, the fact that precipitates the whole trap.
- **The Silence**: carries the fundamental ambiguity (Fischer, Lynch, and Paterson), a node's inability
  to tell a crashed peer from an unreachable one, so silence on the wire forces a choice and waiting to
  find out is no escape.
- **The Two Heads**: carries the mechanism (Gilbert and Lynch), each side applying the locally correct
  rule of promoting itself to keep serving, so two nodes each become the sole primary, each right and
  each blind to the other.
- **The Fork**: carries the phenomenon whole (Gilbert and Lynch), two primaries accepting conflicting
  writes so the shared state diverges into two irreconcilable histories, the split-brain itself.
- **The Trade**: carries the CAP law (Brewer; Gilbert and Lynch), the proved choice under partition
  between consistency and availability, that a system cannot keep both while the partition lasts.
- **The Boundary**: carries the remedy and the condition (Brewer; Gilbert and Lynch; Lamport), that a
  quorum or a fencing token buys consistency by standing the minority down and surrendering its
  availability, and that the trap needs a partition and a shared state and lifts where the network holds,
  a majority rule is imposed, or the workload tolerates reconciling later.
