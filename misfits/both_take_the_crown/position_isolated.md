---
khai: position
title: "Isolated"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Position: Isolated

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md). The seat of a node cut off from the primary that, unable to tell a crash from an unreachable peer, correctly promotes itself to keep serving.

## Owner

- Project: khai-misfits

## Has

A live node, working and ready, that can no longer reach the leader.
A silence it cannot read: no way to tell whether the primary crashed or is merely on the far side of a break.
No option to wait it out, since freezing until the truth arrives is itself a failure and the truth may never arrive.

## Orders

Keep serving: when you cannot reach the leader and cannot wait, promote yourself.
Take the available choice, since a system that stalls on every network hiccup has failed, and act on the partial information the partition leaves you.
Accept what the seat cannot know: that the peer you took for dead may be alive and doing exactly the same, so your correct promotion may be one of two.

## Loses

The knowledge that it is the only primary.
Because it cannot see past the silence, it crowns itself without knowing the far side has too, so what it loses is the certainty of being alone on the throne, and it loses it by doing the right thing on the information it has.
It keeps its correctness and loses its singularity, right to promote and wrong only about being the only one.

## Drives

Toward the node that correctly crowns itself and cannot know it is not alone,
promoting to stay available and, by promoting, standing up a second head it cannot see,
so the seat that does exactly the right thing under the partition is the seat that helps split the state, correct and one of two at once.
