---
khai: pitch
title: "Both Still Answering"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Pitch: Both Still Answering

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md). The default key the whole production is read in.

## Owner

- Project: khai-misfits

## Tenor

Orderly and up.
A cluster of replicas serving, both halves answering, nothing down, every node doing exactly what it should and every request getting a reply.
Nothing false in it: the nodes really are up and correct in themselves, and staying available is what a healthy system should do.

## Undertow

Under the two green halves, a state quietly forked.
A partition has cut the cluster apart, and neither side can tell a crashed peer from an unreachable one, so each correctly promotes itself and two primaries accept conflicting writes, the one shared state diverging into two histories that cannot be joined (Gilbert and Lynch; Fischer, Lynch, and Paterson).
No broken node and no villain: promoting when you cannot reach the leader is right, the client writes to whoever answers, and the fork is the network and the logic, not anyone's fault.

## Nerve

The comfort of a system still answering on every side, and the catch that the answering is the split:
that under a partition consistency and availability cannot both be had, so the very availability each node secures is what forks the state, the two halves up and the one truth gone, the same partition seen twice,
and both still answering is not health but a kingdom already split into two that each think they are the whole.

## Echo

After the run: two datacentres both up and both primary, a key set to two values, an account debited on one side and not the other, a fork with no error behind it (Gilbert and Lynch).
And the remedy, at a price and never free: a quorum that lets only the majority act and stands the minority down, a fencing token that turns away a stale write, buying consistency by refusing to serve on the minority side (Brewer; Lamport).
And the bound held in view, because the trade is proved and conditional at once: it needs an actual partition and a state that must agree, and lifts where the network holds or the workload can reconcile later, so the whole of it is that when both sides correctly take the crown, the kingdom is the thing that splits.
