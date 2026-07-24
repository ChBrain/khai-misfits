---
khai: plan
title: "Hold and Release"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
status: active
---

# Plan: Hold and Release

## Taxonomy

A **standing plan**: the intent of [the holder's seat](position_holder.md), inside [Outranked from Below](play_outranked_from_below.md).

## Owner

- Owner: [Holder](position_holder.md)

## Direction

Take the lock when it is free, do the short work that needs it, and release as fast as the work allows, wanting nothing but to finish and free the resource. Yield the machine the instant a higher task is ready, because the order requires it, and accept that yielding mid-task leaves the lock still in your hand until the machine comes back.

## Orders

([The Holder](persona_the_holder.md) takes [the Lock](piece_the_lock.md) inside [the Critical Section](place_the_critical_section.md), and is set down by [Preempting](process_preempting.md) still holding it, unable to reach the release.)

## Implementation

([The Critical Section](place_the_critical_section.md) grants exclusive hold and confers no rank; the [preempting](process_preempting.md) process sets the lowest work down the moment a higher task is ready, so the lock stays held while the holder cannot run, and the release the highest work waits on is suspended by the order applied correctly.)

## Targets

- [ ] the lock is taken rightfully when free and meant to be released as fast as the short work allows
- [ ] the machine is yielded the instant a higher task is ready, as the order requires
- [ ] the yield leaves the lock still held, the holder frozen mid-section and unable to release
- [ ] no fault attaches to the freeze, the lowest work standing in for the highest and stopped by a correct rule
