---
khai: play
title: "The Last One to Answer"
description: "Every component is fast and the service is slow, because one request waits on all of them and only the slowest counts."
language: english
license: CC-BY-NC-SA-4.0
voice: "Dry and instrumented, the register of a latency histogram beside a timeline: how long, how often, at which percentile. Nothing indignant, because nothing failed and every part did its job. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-23"
---

# Play: The Last One to Answer

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

The Last One to Answer.
A server answers in about ten milliseconds. Once in a hundred times it takes a second instead, for a reason that is not a fault: a background task ran, a log was compacted, memory was reclaimed, a neighbour on the same machine wanted the cache. Ninety-nine times in a hundred it is fast, which is a good server.
Then one request has to collect an answer from a hundred of them, and it is not finished until the last one comes back.

## Arc

The bend is this: a service that waits on many components is governed by the slowest of them on that occasion, not the typical one, so the rare slow case stops being rare exactly in proportion to how many components there are.
It runs on two facts, neither of them anybody's doing: a request that needs all the answers is not done until the last answer, and every component is occasionally slow for reasons that are legitimate work.
Take the arithmetic first, because it can be checked rather than believed. If one call in a hundred is slow, a request fanning out to a hundred servers is fast only if **all** hundred are fast, which happens ninety-nine hundredths raised to the hundredth power of the time. That is about thirty-seven per cent. So **sixty-three per cent** of user requests take more than a second, in a system where every single component was fast ninety-nine times out of a hundred.
Then take the cause of the slow case, because it matters that it is not a defect. The interruptions are the machine doing correct and necessary things: reclaiming memory, compacting a log, rebuilding data, a daemon that uses very little on average and takes a few milliseconds when it runs, a request on the same machine wanting the same cache line, a power-saving state that has to be left. Every one of those is work somebody designed on purpose and would design again. **There is nothing here to fix by fixing something.**
And the number everybody watches is the wrong one. The mean response time is excellent and stays excellent: it is dominated by the ninety-nine, and it is true. The service is slow most of the time and the average says it is fast, and the average is not lying.
Reach for a settlement and there is one, and it is very good, and it is not a cure. Send the request twice, to two different machines, and take whichever answers first; or send the second only after a short wait, so the duplicate is issued just for the cases that look like going long. This works, it works in ordinary systems rather than only in one company's, and it buys a large reduction in the tail for a few per cent more total work. What it does not do is remove the variability: it makes a bet that two machines will not be interrupted at the same instant. **The tail is covered rather than eliminated**, and at this scale eliminating it is not on the table, which the people who named the problem say themselves.

## Company

**Pitch**

- [Every One of Them Was Fast](pitch_every_one_of_them_was_fast.md)

**Personas**

- [The Server](persona_the_server.md)
- [The Request](persona_the_request.md)
- [The Last Reply](persona_the_last_reply.md)
- [The Average](persona_the_average.md)
- [The Compaction](persona_the_compaction.md)
- [The Hedge](persona_the_hedge.md)

**Positions**

- [Component](position_component.md)
- [Assembler](position_assembler.md)
- [Pacer](position_pacer.md)
- [Reported](position_reported.md)
- [Interruption](position_interruption.md)
- [Duplicate](position_duplicate.md)

**Plans**

- [Answer in Ten Milliseconds](plan_answer_in_ten_milliseconds.md)
- [Wait for All of Them](plan_wait_for_all_of_them.md)
- [Set the Time by Myself Alone](plan_set_the_time_by_myself_alone.md)
- [Be the Number Everybody Looks At](plan_be_the_number_everybody_looks_at.md)
- [Do the Necessary Work Now](plan_do_the_necessary_work_now.md)
- [Ask Twice and Take the First](plan_ask_twice_and_take_the_first.md)

**Places**

- [The Fleet](place_the_fleet.md)
- [The Wait](place_the_wait.md)
- [The Dashboard](place_the_dashboard.md)

**Processes**

- [Answering](process_answering.md)
- [Collecting](process_collecting.md)
- [Amplifying](process_amplifying.md)
- [Reporting](process_reporting.md)
- [Hedging](process_hedging.md)

**Pieces**

- [The Ninety-Ninth Percentile](piece_the_ninety_ninth_percentile.md)
- [The Fan-Out](piece_the_fan_out.md)
- [The Arithmetic](piece_the_arithmetic.md)
- [The Legitimate Pause](piece_the_legitimate_pause.md)
- [The Tail](piece_the_tail.md)
- [The Extra Two Per Cent](piece_the_extra_two_per_cent.md)

## Triggers

**[Ten Milliseconds, Almost Always](plot_ten_milliseconds_almost_always.md)**
A server that answers in about ten milliseconds, and once in a hundred times takes a second. Closes when the component is established as genuinely good rather than marginal, since ninety-nine times in a hundred is a figure most systems would be pleased with.

**[One in a Hundred, Every Hundred](plot_one_in_a_hundred_every_hundred.md)**
Cue: a request that must collect an answer from a hundred servers and is not finished until the last one returns. Closes when the arithmetic is done in the open: fast only if all hundred are fast, which is about thirty-seven per cent of the time, so sixty-three per cent of requests are slow.

**[Nothing Went Wrong Anywhere](plot_nothing_went_wrong_anywhere.md)**
Cue: the reason a server was slow that once. Memory reclaimed, a log compacted, data rebuilt, a daemon scheduled, a neighbour wanting the same cache, a power state left. Closes when every interruption is shown to be correct and necessary work, so there is no defect to remove and no component to replace.

**[The Average Was Fine](plot_the_average_was_fine.md)**
Cue: the dashboard. Mean response time excellent, and true. Closes when the reported number is shown to be accurate, dominated by the ninety-nine, and silent about a service that is slow most of the time.

**[Ask Twice](plot_ask_twice.md)**
Cue: the same request sent to two machines, or a second copy sent after a short wait, with whichever answers first taken. Closes when the remedy is shown to work, to work in ordinary systems and not only in one company's, to cost a few per cent of extra work, and to cover the tail rather than remove it.

## Stakes

Whether a service made of good parts can be a good service.
Every plot moves the same question forward: not whether any component is too slow, because each is fast almost always and each slow case is correct work happening at an inconvenient moment, but whether excellence per part survives being waited on all at once. The production cannot make it survive. It can only show that a request needing every answer is finished by the last one and not the typical one, that the rare case therefore stops being rare in exact proportion to the fan-out and the arithmetic can be checked rather than believed, that the interruptions are things a designer would choose again, that the mean is accurate and reports none of it, and that the remedy is to ask twice and take the first, which is cheap, which works, and which bets that two machines will not both be busy at the same instant.
