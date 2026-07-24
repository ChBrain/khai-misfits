---
khai: play
title: "Too Kind to Drop"
description: "A buffer that refuses to drop packets hides the loss that tells the sender to slow, so it fills and latency balloons."
language: english
voice: "Reasonable and well-provisioned on the surface: a network that would rather hold a packet than throw it away, buffers made deep because memory is cheap and a dropped packet looks like waste. Underneath, the loss it refuses to take is the one signal the sender needs to slow down, so the deep buffer swallows the warning, fills to the top, and stays full, and every packet crosses seconds of standing queue while the link still reads busy. No villain and no fault, only a kindness that hides the signal. No dashes: colons, ellipses, and line breaks instead."
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-24"
---

# Play: Too Kind to Drop

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Too Kind to Drop.
Put a buffer in front of a link, a little memory to hold packets that arrive faster than the link can send them, and you have done a plainly good thing: a burst that would have been lost now waits a moment and goes through, and the link stays busy instead of falling idle. Memory is cheap, and a dropped packet looks like pure waste, work already done and thrown away, so the sensible instinct is to make the buffer generous, deep enough that nothing need ever be dropped. Every engineer who sized a buffer large was doing the obvious, defensible thing, and for a burst that is exactly what a buffer is for.
But a dropped packet is not only waste. It is also a signal. End-to-end congestion control has no direct view of the link ahead; it learns the link is full the only way it can, by sending a little faster until a packet is lost, taking that loss as the word to slow down, then creeping back up. Loss is how the sender is told. And a buffer deep enough never to drop is a buffer deep enough to swallow that word: the packets that should have been lost are held instead, so the sender is told nothing, sees a clear road, and keeps speeding up.
And here is the turn that makes it a trap and not just a generous cushion. Told nothing, the sender fills the buffer, and because the buffer is deep it does not fill and drain, it fills and stays full, a standing queue rather than a passing one. Now every packet through that link, the sender's own and everyone else's sharing it, waits behind a full buffer, and the wait is not milliseconds but hundreds of them, or seconds. The link's throughput still reads full, the numbers look healthy, and yet a video call on the same link stutters, a keystroke lags, a click hangs, because responsiveness was spent to buy a fullness nobody needed. The cushion that was meant to protect the link's throughput has destroyed its latency, and defeated the very feedback that would have kept the queue short.
And none of it is a blunder. The buffer was sized large for a good reason, and the sender ramps up until it sees loss because that is precisely how congestion control is built to work, and neither is misbehaving. The bloat is authored by no one: a protective buffer and a loss-driven sender, each correct, composed into a standing queue nobody chose, on a link no one overloaded. The good queue that absorbs a burst and drains has quietly become the bad queue that fills and stays, and nothing in either party's correct behaviour will ever tell it so.
And the fix runs against the grain of the instinct that built the trap. To keep the queue short you must drop packets early, on purpose, before the buffer is full, throwing away work you had the room to keep, so the sender is told in time to slow down. Deliberately dropping to go faster is exactly the move the cheap-memory instinct rejects, and the discipline that does it, active queue management, has to be built into the bottleneck ahead of time, deployed across devices that already shipped with buffers too deep, and tuned so carefully that for years the cure was harder to turn on than the disease was to suffer (Gettys and Nichols; Nichols and Jacobson).

## Arc

The bend is this: a buffer sized to absorb bursts and avoid drops, made large, conceals the loss-and-delay signal that congestion control depends on to back off, so the control loop never slows, the buffer fills into a persistent standing queue, and latency balloons, the very mechanism meant to protect throughput destroying responsiveness and defeating the feedback it was built to serve, and only deliberately dropping or marking packets early, before the buffer fills, restores the signal.
It runs on a cushion added in good sense.
A buffer holds packets that arrive faster than the link can send them, absorbing a burst that would otherwise be lost, and because memory is cheap and a dropped packet looks like waste, buffers are made deep, a plainly sensible thing to do (Gettys and Nichols).
And it turns on a signal the cushion hides. Loss is how end-to-end congestion control is told the link is full: the sender speeds up until a packet drops, then backs off, so a buffer deep enough never to drop swallows the one word the sender needs and tells it nothing (Jacobson's congestion control; Gettys and Nichols).
And told nothing, the sender fills the buffer. The rate climbs with no loss to check it, and because the buffer is deep it fills to the top and stays full, a persistent standing queue rather than a transient one that drains (Gettys and Nichols).
And the standing queue is borne as delay. Every packet now crosses a full buffer, so latency balloons to hundreds of milliseconds or seconds while throughput still reads full, and a call or a click on the same link stutters and stalls, responsiveness spent to buy a fullness no one needed (Gettys and Nichols).
And the whole is authored by no one. The buffer was sized large for good reason and the sender ramps because that is how congestion control works, each correct, composed into a bloat on a link no one overloaded, the good queue that absorbs a burst quietly become the bad one that never drains.
Drop early, on purpose, and the signal comes back. Active queue management keeps the queue short by dropping or marking packets before the buffer fills, so the sender is told in time to slow, distinguishing a good transient queue from a bad standing one (Nichols and Jacobson): but it means throwing away work there was room to keep, it runs against the cheap-memory instinct that made the buffers deep, it must be built into the bottleneck ahead of time and deployed across devices already shipped over-buffered, and earlier active queue management was so hard to tune it was rarely turned on (Gettys and Nichols; Floyd and Jacobson), so the cure is a discipline adopted against its own good sense and bounds the queue rather than abolishing the buffer, which still absorbs the genuine bursts it was always for.

## Company

**Pitch**

- [Nothing Dropped](pitch_nothing_dropped.md)

**Personas**

- [The Sender](persona_the_sender.md)
- [The Keeper](persona_the_keeper.md)
- [The Interactive](persona_the_interactive.md)
- [The Manager](persona_the_manager.md)

**Positions**

- [Sender](position_sender.md)
- [Keeper](position_keeper.md)
- [Interactive](position_interactive.md)
- [Manager](position_manager.md)

**Plans**

- [Fill the Pipe](plan_fill_the_pipe.md)
- [Never Drop](plan_never_drop.md)
- [Get Through](plan_get_through.md)
- [Drop Early](plan_drop_early.md)

**Places**

- [The Bottleneck](place_the_bottleneck.md)
- [The Edge](place_the_edge.md)
- [The Loop](place_the_loop.md)

**Processes**

- [Filling](process_filling.md)
- [Hiding](process_hiding.md)
- [Bloating](process_bloating.md)
- [Culling](process_culling.md)

**Pieces**

- [The Buffer](piece_the_buffer.md)
- [The Signal](piece_the_signal.md)
- [The Concealment](piece_the_concealment.md)
- [The Standing Queue](piece_the_standing_queue.md)
- [The Latency](piece_the_latency.md)
- [The Drop](piece_the_drop.md)

## Triggers

**[The Cheap Memory](plot_the_cheap_memory.md)**
The setup, nothing yet wrong. At [the Edge](place_the_edge.md), [the Keeper](persona_the_keeper.md) is given a deep [Buffer](piece_the_buffer.md) because memory is cheap and a dropped packet looks like waste, and holds every packet rather than discard one. Closes with a generous buffer in place, a plainly sensible thing that a burst is exactly what a buffer is for.

**[The Ramp](plot_the_ramp.md)**
Cue: the sender looks for the road ahead. At [the Bottleneck](place_the_bottleneck.md), [the Sender](persona_the_sender.md) on [Fill the Pipe](plan_fill_the_pipe.md) raises its rate through [Filling](process_filling.md), taking all the capacity offered and watching only for [the Signal](piece_the_signal.md), a lost packet, to tell it to stop. Closes with the rate still climbing, no loss yet seen, the sender doing exactly what congestion control is built to do.

**[The Swallowed Signal](plot_the_swallowed_signal.md)**
Cue: the packets that should be dropped arrive at a buffer too deep to drop them. On [the Loop](place_the_loop.md), [the Keeper](persona_the_keeper.md) through [Hiding](process_hiding.md) absorbs them, so [the Signal](piece_the_signal.md) never completes the loop back to the Sender, [the Concealment](piece_the_concealment.md) leaving it told nothing. Closes with the sender still ramping on a road it believes clear, the deep buffer filling to the top.

**[The Stall](plot_the_stall.md)**
Cue: the buffer is full and stays full. At [the Bottleneck](place_the_bottleneck.md), [Bloating](process_bloating.md) turns the full buffer into [the Standing Queue](piece_the_standing_queue.md) and [the Latency](piece_the_latency.md) balloons, so [the Interactive](persona_the_interactive.md) on [Get Through](plan_get_through.md) stutters and stalls behind seconds of delay. Closes with responsiveness gone while throughput still reads full, a call and a click hung on a link whose numbers look healthy.

**[The Good Queue](plot_the_good_queue.md)**
Cue: someone looks for the fault. Nothing is broken, no link is on-average overloaded, no one misconfigured anything: the buffer did its job of absorbing bursts too well, so the good queue that should have drained became a bad standing one (Gettys and Nichols; Nichols and Jacobson). Closes with no villain found: the bloat authored by no one, a protective buffer and a loss-driven sender each behaving correctly.

**[The Early Drop](plot_the_early_drop.md)**
Cue: the fix is built into the bottleneck ahead of time. At [the Edge](place_the_edge.md), [the Manager](persona_the_manager.md) on [Drop Early](plan_drop_early.md) through [Culling](process_culling.md) discards or marks packets before the buffer fills, [the Drop](piece_the_drop.md) restoring [the Signal](piece_the_signal.md) so the Sender backs off. Closes with the queue bounded and latency down, bought by throwing away work there was room to keep, against the instinct that made the buffers deep.

## Stakes

Whether a link can keep its responsiveness and not only its throughput, when the buffer that protects the one hides the signal that would hold the other short.
Every plot but the last two moves the same way: toward the buffer generously deep and the sender ramping into it, and away from the loss that would tell the sender to slow, because dropping a packet looks like waste and memory is cheap. The production cannot make the cushion pass the signal it is deep enough to swallow, because being deep enough never to drop is exactly what makes it hide the loss: the good queue that absorbs a burst and the bad queue that never drains are the same buffer, told apart only by whether the signal gets through. The one solvent is to drop early and on purpose, and that runs against the instinct that built the trap, must be designed into the bottleneck before the fact, and was for years harder to turn on than the bloat was to endure. It can only show that nothing is broken and no one is at fault, that the buffer was sized in good sense and the sender ramps as it must, and that the move which would right the queue, throwing away work there was room to keep so the sender is told in time, is a discipline a network built to hoard its packets is built not to choose.
