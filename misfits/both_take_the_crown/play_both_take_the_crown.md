---
khai: play
title: "Both Take the Crown"
description: "A network split leaves each half unable to reach the other, so both correctly promote themselves and the state forks."
language: english
voice: "Orderly and up on the surface: a cluster of replicas serving, both halves answering, nothing down, every node doing exactly what it should. Underneath, the fact that a partition has cut the two halves apart and neither can tell a crashed peer from an unreachable one, so each correctly promotes itself to keep serving and two primaries accept conflicting writes, the shared state forking into two histories that cannot be joined. No broken node and no villain: promoting when you cannot reach the leader is the right move, the client writes to whoever answers, and the loss is a partition plus the impossibility of telling failure from delay. Held against its own limit: it is a proved trade, consistency or availability under a partition and never both, and it lifts where the network holds, a majority rule stands the minority down, or the workload can reconcile later. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Play: Both Take the Crown

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Both Take the Crown.
A cluster of replicas holds one shared state and agrees on it: one primary takes the writes, the rest follow, and the system stays both up and correct. Then the network, which was never perfectly reliable, partitions. A link fails, and one group of nodes can no longer reach another, though every node on both sides is alive and working and doing its job. Nothing has crashed. The wire has simply gone quiet between them.
And here is the trouble that quiet brings. A node on one side can no longer hear the primary, and it cannot tell why. A crashed peer and an unreachable one sound exactly alike: silence, either way. So it cannot wait to find out, because waiting is itself a choice, and a system that freezes every time the network hiccups has failed too (Fischer, Lynch, and Paterson). It must decide, now, on partial information: keep serving, and promote itself so the system stays available, or stand down, and refuse writes so the system stays correct.
And each side, reasoning correctly and blind to the other, makes the same sound choice. Unable to reach the primary and unwilling to freeze, it promotes itself and keeps serving. The far side, facing the identical silence, does the identical right thing. So both take the crown, and the cluster that was meant to have one primary now has two, each certain it is the only one, each correct given what it can see (Gilbert and Lynch).
And now the state forks. The client writes to whichever primary answers it, and both answer, so writes land on both heads, and the two histories diverge: an account debited on one side and not the other, a key set to two values, an order shipped twice. Neither primary is wrong to accept its writes, and there is no shared clock or channel to reconcile them, so the one state the cluster was built to keep has quietly become two, and they cannot be joined without losing some of what each recorded (Gilbert and Lynch).
And it cannot be designed away for free, because the trade is a theorem. Under a partition, a system can be consistent or available but not both: to guarantee it never forks, you must let one side refuse to serve. So the standard fix is a quorum, only the majority side may act, and the minority, correctly, stands down, and a fencing token that turns away a stale primary's writes does the same at the write path (Brewer; Gilbert and Lynch; Lamport). The fork is gone, and the price is paid: the moment a partition leaves you in the minority, the right behaviour is to stop serving.
And the loss is authored by no one. The isolated node was right to promote, its twin across the partition was right to do the same, the client was right to write to whoever answered, and the architect who fences one side is not timid but correct. It is a partition plus the impossibility of telling failure from delay, so two correct nodes crown themselves and the state forks, a divergence produced by the network and the logic and not by anyone's mistake.
And so the misfit is not that clusters are unreliable but that a partition forces a choice between staying up and staying single. The proof that you cannot have consistency, availability, and partition tolerance all at once is Gilbert and Lynch's, the conjecture and its reading are Brewer's, the silence that cannot be told from death is Fischer, Lynch, and Paterson's, and the quorum that stands the minority down is Lamport's. The house stages the forced trade and holds the bound in view: that it needs an actual partition and a state that must agree, that the promoting is correct on both sides, and that it lifts where the network holds, a majority rule is imposed, or the workload can reconcile later, so the trap is real and common and bounded, and the whole of it is that when both sides correctly take the crown, the kingdom is the thing that splits.

## Arc

The bend is this: when a partition splits a replicated system and no node can distinguish a failed peer from an unreachable one, each side that stays available correctly promotes itself, so two primaries accept conflicting writes and the state forks, and consistency can be preserved only by surrendering availability on the minority side, a forced trade with no node in error.
It runs on a replicated system meant to agree.
A cluster holds one shared state, one primary taking writes and the rest following, built to stay both up and correct (Gilbert and Lynch).
And the network partitions. A link fails and one group of nodes can no longer reach another, though every node is alive and working, the wire gone quiet between them (Gilbert and Lynch).
And silence cannot be read. A node cannot tell a crashed peer from an unreachable one, so it cannot wait to find out, since silence means the same either way and freezing is itself a failure (Fischer, Lynch, and Paterson).
And each side correctly promotes itself. Unable to reach the primary and unwilling to freeze, each makes the available choice and crowns itself, reasoning rightly and blind to the other, so two primaries stand where one should (Gilbert and Lynch).
And the state forks. The client writes to whichever primary answers, both do, and the writes diverge into two irreconcilable histories, the one state become two with no channel to join them (Gilbert and Lynch).
And the trade is forced and proved. Under a partition a system can be consistent or available but not both, so preventing the fork means letting one side refuse, a choice between staying single and staying up (Brewer; Gilbert and Lynch).
And the loss is authored by no one. Both nodes promoted correctly, the client wrote correctly, and the architect who fences is correct, so the fork is a harm with no error behind it.
And the whole is held against its own limit. The trap needs a partition and a shared state and lifts where the network holds, a majority quorum stands the minority down, or the workload tolerates reconciling divergent writes later (Brewer; Gilbert and Lynch; Lamport).

## Company

**Pitch**

- [Both Still Answering](pitch_both_still_answering.md)

**Personas**

- [The Isolated](persona_the_isolated.md)
- [The Twin](persona_the_twin.md)
- [The Writer](persona_the_writer.md)
- [The Architect](persona_the_architect.md)

**Positions**

- [Isolated](position_isolated.md)
- [Twin](position_twin.md)
- [Writer](position_writer.md)
- [Architect](position_architect.md)

**Plans**

- [Keep Serving](plan_keep_serving.md)
- [Write to the Primary](plan_write_to_the_primary.md)
- [Fence the Minority](plan_fence_the_minority.md)

**Places**

- [The Cluster](place_the_cluster.md)
- [The Link](place_the_link.md)
- [The Blueprint](place_the_blueprint.md)

**Processes**

- [Partitioning](process_partitioning.md)
- [Promoting](process_promoting.md)
- [Forking](process_forking.md)
- [Fencing](process_fencing.md)

**Pieces**

- [The Partition](piece_the_partition.md)
- [The Silence](piece_the_silence.md)
- [The Two Heads](piece_the_two_heads.md)
- [The Fork](piece_the_fork.md)
- [The Trade](piece_the_trade.md)
- [The Boundary](piece_the_boundary.md)

## Triggers

**[The Wire Goes Quiet](plot_the_wire_goes_quiet.md)**
The setup, a partition and the silence it brings. At [the Link](place_the_link.md), through [Partitioning](process_partitioning.md), [the Partition](piece_the_partition.md) cuts the cluster in two, and [the Silence](piece_the_silence.md) falls: [the Isolated](persona_the_isolated.md) can no longer hear its peer and cannot tell a crashed one from an unreachable one. Closes with the cluster split, each side alive and blind to the other, silence meaning both things at once (Fischer, Lynch, and Paterson).

**[Two Primaries](plot_two_primaries.md)**
Cue: each side must act on what it can see. Through [Promoting](process_promoting.md), [the Isolated](persona_the_isolated.md) on [Keep Serving](plan_keep_serving.md) crowns itself to stay available, and [the Twin](persona_the_twin.md), facing the same silence, reasons identically and does the same, so [the Two Heads](piece_the_two_heads.md): two primaries stand where one should, each correct and each blind to the other. Closes with both wearing the crown, neither in error (Gilbert and Lynch).

**[Two Truths](plot_two_truths.md)**
Cue: the writes come in and land on both heads. Through [Forking](process_forking.md), [the Writer](persona_the_writer.md) on [Write to the Primary](plan_write_to_the_primary.md) sends its writes to whichever primary answers, and both do, so [the Fork](piece_the_fork.md): the shared state diverges into two irreconcilable histories, a key set to two values, an account debited on one side and not the other. Closes with the one state become two, with no channel to join them (Gilbert and Lynch).

**[Pick Two, Get One](plot_pick_two_get_one.md)**
Cue: the trade behind the fork is named. At [the Cluster](place_the_cluster.md), [the Trade](piece_the_trade.md): under a partition a system can be consistent or available but not both, so the fork was not a bug but the available horn of a forced choice, and preventing it means letting one side refuse to serve. Closes with the choice shown proved and inescapable, consistency and availability not both to be had while the partition lasts (Brewer; Gilbert and Lynch).

**[Fence It Off](plot_fence_it_off.md)**
Cue: someone imposes the rule that prevents two heads. At [the Blueprint](place_the_blueprint.md), [the Architect](persona_the_architect.md) on [Fence the Minority](plan_fence_the_minority.md) through [Fencing](process_fencing.md) holds [the Boundary](piece_the_boundary.md): a quorum lets only the majority act and stands the minority down, and a fencing token turns away a stale primary's writes, buying consistency by surrendering availability on the minority side, and the trap lifts where the network holds or the workload can reconcile later. Closes with the fork prevented at the price of availability, the trap bounded (Brewer; Gilbert and Lynch; Lamport).

## Stakes

Whether a replicated system can stay both single and up, when a partition forces a choice between them.
Every plot but the last moves the same way: toward a system that keeps serving, which each node correctly tries to do, and toward a system that stays one, which the fork destroys, because a partition plus the impossibility of telling failure from delay makes the available choice on each side the very thing that splits the state. The production cannot make the cluster both consistent and available under the partition, because the CAP theorem proves it cannot be done: keeping the state single costs the ability to serve on every side, so the availability each node secures and the fork it produces are the one partition seen twice. The remedy, a quorum that stands the minority down or a fencing token that turns away a stale write, spends real availability and does not vanish the trade, only chooses its horn, so on the minority side the correct behaviour becomes to refuse. It can only show that no node is broken and no one is at fault, that the isolated and its twin both promoted correctly, that the client wrote to whoever answered, that the architect who fences is right, and that the fork is a divergence produced by the network and the logic and not by anyone's error. And it holds the bound in view, because the trade is proved and conditional at once: it needs an actual partition and a state that must agree, and lifts where the network holds, a majority rule is imposed, or the workload tolerates reconciling later (Brewer; Gilbert and Lynch; Lamport), so the whole of the misfit is that when both sides correctly take the crown, the kingdom is the thing that splits.
