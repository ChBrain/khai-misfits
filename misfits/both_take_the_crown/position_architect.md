---
khai: position
title: "Architect"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-29"
---

# Position: Architect

## Taxonomy

[Both Take the Crown](play_both_take_the_crown.md). The seat of the one who designs the rule that prevents two heads, and pays for it in availability.

## Owner

- Project: khai-misfits

## Has

The choice of how the cluster behaves under partition, and the levers of quorum and fencing.
The power to keep the state single, by letting only a majority act and standing the minority down.
No way to keep both consistency and availability under a partition, since the trade is a theorem, so it can only choose which horn to take.

## Orders

Fence the minority: let only the majority act, and turn away the stale primary's writes.
Impose a quorum so at most one side proceeds, and accept that on the minority side the correct behaviour becomes to refuse, since keeping the state single costs the ability to serve everywhere.
Accept what the seat cannot dodge: that preventing the fork is not free, it is the consistency horn of a proved trade, paid for in the availability it surrenders.

## Loses

Availability on the minority side, by choice, to keep the state single.
Because the theorem forbids both under partition, fencing buys consistency with the service it refuses, so what the seat loses is uptime on the isolated minority, and it loses it deliberately, as the price of never forking.
It keeps one correct state and loses the promise of serving everywhere, the trade taken with open eyes.

## Drives

Toward the one who prevents the fork by surrendering availability,
standing the minority down so at most one primary acts and, by refusing to serve there, keeping the state single,
so the seat that fixes the split is the seat that proves it cannot be fixed for free, consistency bought with the availability the theorem makes it spend.
