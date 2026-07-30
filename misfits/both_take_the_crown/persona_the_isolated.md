---
khai: persona
title: "The Isolated"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
type: archetype
---

# Persona: The Isolated

## Taxonomy

[Isolated](position_isolated.md). A node cut off from the primary that, unable to tell a crash from an unreachable peer, correctly promotes itself to keep serving.

## Owner

- Project: khai-misfits

## Projection

Healthy, ready, doing its job.
A live node that took its writes, followed its leader, and asks for nothing but to keep the service up, sensible and correct in everything it does.
No ambition in it: it does not want the crown, it only means to keep serving when the leader it followed goes quiet.

## Action

Runs [Keep Serving](plan_keep_serving.md), and through [Promoting](process_promoting.md) at [the Cluster](place_the_cluster.md), unable to reach the primary and unwilling to freeze, crowns itself so the system stays available.
Cannot tell whether the primary crashed or is merely unreachable, since [the Silence](piece_the_silence.md) reads the same either way, so it acts on the partial information the partition leaves it.
Does exactly the right thing: it promotes rather than stall, because a system that freezes on every network hiccup has failed too.

## Shadow

Not broken and not rash: promoting when the leader is unreachable is the correct move, and it makes it soundly on the information it has.
Because it cannot see past the silence, it crowns itself certain it is the only primary, when the far side, alive and reasoning the same, has done the same, so its very correctness is one half of two heads.
It is the node that did the right thing, and the node that cannot know it did it in two places at once.

## Tell

Reports itself healthy and primary, and means it.
Cannot see the second crown, because the partition hides it, so it serves on confident it is alone on the throne, right in everything but the one thing it cannot check.
