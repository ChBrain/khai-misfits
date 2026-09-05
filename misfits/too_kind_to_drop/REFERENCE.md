---
concept: "Bufferbloat (excessive buffering and latency collapse)"
field: "Safety, risk, and complex systems"
source: 'Gettys & Nichols, "Bufferbloat: Dark Buffers in the Internet" (ACM Queue, 2011)'
axis: buffer-slack
sign: negative # how promptly a sender learns to slow down as the buffer that would have dropped its packet deepens
updated: "2026-09-04"
---

# Too Kind to Drop: Reference

The research warrant for **Too Kind to Drop**. The title is a reading of the phenomenon the
literature calls **bufferbloat**: Gettys and Nichols's account of how oversized network buffers
conceal the loss-and-delay signal that congestion control depends on, so the buffer fills into a
persistent standing queue and latency balloons, and Nichols and Jacobson's active-queue-management
remedy that drops early to restore the signal, all cited below.

## Line of Work

Staging bufferbloat as a **the-cushion-hides-the-signal structure**: a buffer is placed in front of a
bottleneck link to absorb short bursts and avoid dropping packets, a plainly sensible thing to do since
memory is cheap and a dropped packet looks like pure waste, so buffers are made large. But the loss of a
packet, and the delay a filling buffer adds, is the exact signal that end-to-end congestion control
reads as its instruction to slow down. When the buffer is oversized it swallows that signal: the sender
sees no loss, is told nothing, keeps increasing its rate, and fills the buffer to the top, where it
stays full, a persistent standing queue rather than a transient one, and every packet crossing it now
waits behind a full buffer, so latency balloons to hundreds of milliseconds or seconds while throughput
looks fine. The governing law is not that anyone misconfigured anything or overloaded the link, but that
**a buffer sized to absorb bursts and avoid drops, made large, conceals the loss-and-delay signal that
congestion control depends on to back off, so the control loop never slows, the buffer fills into a
persistent standing queue, and latency balloons, the very mechanism meant to protect throughput
destroying responsiveness and defeating the feedback it was built to serve, and only deliberately
dropping or marking packets early, before the buffer fills, restores the signal**. The play models the
documented mechanics: the oversized buffer that fills and stays full at a congested link and loses its
intended function of absorbing bursts, the concealed congestion signal and the ballooned delay it
produces (Gettys and Nichols), and the active-queue-management remedy that keeps the standing queue
short by dropping or marking early, distinguishing a transient good queue from a standing bad one
(Nichols and Jacobson), as the load-bearing vectors of the structure, not as a tale of a careless
engineer or a greedy sender.

It is a networking-and-feedback interaction no staged misfit holds, and it is carefully distinct from
its nearest neighbours. It is distinct from the house's No Idle Hands, where a queue swells because a
resource is driven toward full utilisation and the queueing delay diverges as the utilisation ratio
approaches one: there the delay grows out of the arithmetic of load on a memoryless queue, here it grows
because an oversized buffer conceals the control signal that would have held the queue short, so a single
well-behaved flow bloats a link that is not, on average, overloaded, the fault in the hidden feedback
and not in the utilisation. It is distinct from The Bullwhip Effect, where a demand signal is amplified
into wild swings as it passes up a multi-stage chain on lagged, filtered readings: there the signal is
present and magnified, here the signal is present and concealed, swallowed by the buffer so the sender
never reads it at all, the failure a suppression rather than an amplification and running in one hop, not
along a chain. It is distinct from Held Under, the house's metastable retry storm and its congestion
collapse (Nagle, Jacobson), where correct client retries feed a self-sustaining overload that persists
after its trigger and throughput collapses toward zero: there nothing is concealed and the pathology is
a bistable overload held up by retries, here nothing retries and nothing is bistable, throughput is
largely preserved and it is latency alone that balloons, so bufferbloat and congestion collapse are
near-opposite failures of the same link, one destroying delay and the other destroying throughput,
joined only by the active-queue-management remedy that answers both.

It runs against two of the house's plays at once, **No Idle Hands** and **The Brittle Optimum**, and
the pair of oppositions is the same opposition twice: there slack is the thing being defended, spare
capacity trimmed away until the queue explodes or the first shock shatters the system, whereas here
the buffer is the thing doing the harm and draining it is the cure. What sets the sign is whether
the load is answering the queue. Slack absorbs variability that arrives regardless, so more of it is
better against a load that does not care how full you are. A buffer deep enough never to drop sits
inside a control loop, and the drop it refuses is the signal that would have slowed the sender, so
its depth destroys the feedback that regulates its own input. Spare capacity helps where the load is
exogenous and harms where the load is a reply to the queue, and the same figure of merit reads both
ways.

It runs against a third of the house's plays on this axis, **The Unmarked Edge**, in the same way and for
the same reason as the two above. There the operating point migrates toward a boundary of safe operation
under competitive and workload pressure, and the margin is what is being eaten, so more of it is better.
**The discriminator is unchanged**: the pressure that consumes that margin does not read it and does not
slow as it thins, because the boundary is unmarked, so nothing about approaching it feeds back to the
approach. Slack helps where the load does not answer the queue, and here it does not answer at all.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                | Key Work / Event                                                                                                                                                                           | Scope                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Jim Gettys and Kathleen Nichols**   | "Bufferbloat: Dark Buffers in the Internet" (_ACM Queue_, 2011; _Communications of the ACM_, 2012)                                                                                         | **The spine**: oversized buffers fill and stay full at congested links, losing their intended function of absorbing bursts, concealing the loss-and-delay signal congestion control needs and inflating latency into a persistent standing queue. The Buffer, The Signal, The Standing Queue, The Latency, The Concealment. |
| **Kathleen Nichols and Van Jacobson** | "Controlling Queue Delay" (_ACM Queue_, 2012), the CoDel algorithm                                                                                                                         | **The remedy**: active queue management that keeps the standing queue short by dropping or marking packets early, distinguishing a transient good queue from a standing bad one, restoring the signal that an oversized buffer hides. The Drop.                                                                             |
| **Practitioner**                      | the video call that stutters and the page that stalls the moment someone on the same link starts a large upload, the delay climbing to seconds on a link whose throughput still reads full | The trap in the field, and its cost: responsiveness destroyed by the very buffer added to protect throughput, the loss it refused to take paid back as delay everyone bears.                                                                                                                                                |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the buffer
  as a blunder, the sender as greedy, or the engineer as careless, because the source finding it stages
  is precisely that each choice is locally sound: memory is cheap and dropping a packet looks like waste,
  so making buffers large is the obvious call, and a congestion-control sender that keeps increasing its
  rate until it sees loss is doing exactly what it is designed to do (Gettys and Nichols). The bloat is
  authored by no one and emerges from the composition, a protective buffer and a loss-driven control loop
  each behaving correctly, so the standing queue and its latency arise with nothing misconfigured and no
  link, on average, overloaded, and the misfit is a cushion added in good sense that hides the one signal
  the system needed it to pass through.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The remedy exists and
  works, active queue management that keeps the queue short by dropping or marking packets early, before
  the buffer fills, so the signal reaches the sender in time (Nichols and Jacobson), but it is neither
  free nor obvious: it asks a device to deliberately drop packets it has the memory to keep, which reads
  as throwing away work to go faster and runs against the instinct that made the buffers large in the
  first place, it must be deployed across a vast heterogeneity of devices that already shipped with deep
  buffers, and earlier active queue management was notoriously hard to tune and so rarely turned on, the
  problem CoDel's no-knobs design was built to answer (Gettys and Nichols; Nichols and Jacobson). The
  reckoning is a fix that must be built into the bottleneck ahead of time and accepted against the grain
  of its own good sense, dropping early on purpose to buy back the responsiveness the hoarded buffer
  spent.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the naming and diagnosis of bufferbloat, the
  oversized buffer that fills and conceals the congestion signal and inflates latency, are Gettys and
  Nichols's, the controlled-delay active-queue-management remedy is Nichols and Jacobson's, the
  loss-and-delay congestion signal the buffer hides is the end-to-end congestion control of Jacobson's
  1988 work, and the earlier active queue management the field found hard to deploy is Random Early
  Detection (Floyd and Jacobson, 1993), credited as the antecedent. The mechanism is carried as carefully
  as the finding: that bufferbloat is a standing-queue latency phenomenon on a loss-based control loop,
  that the signal is concealed rather than absent or amplified, that throughput is largely preserved
  while delay balloons, and that active queue management bounds the queue rather than abolishing the need
  for buffers, which still absorb genuine bursts. The scope is held to packet networks with buffered
  bottlenecks and end-to-end congestion control, and not stretched into a general law of all queues.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Buffer**: carries the memory placed before the bottleneck to absorb bursts and avoid drops
  (Gettys and Nichols), locally sensible because memory is cheap and a drop looks like waste, and made
  large for exactly that reason.
- **The Signal**: carries the loss and the delay that congestion control reads as its instruction to slow
  down (Jacobson's congestion control; Gettys and Nichols), the feedback the whole system depends on and
  the thing the buffer is about to hide.
- **The Concealment**: carries the core mechanism (Gettys and Nichols), the oversized buffer swallowing
  the loss so the sender never sees it and never backs off, the signal present but withheld from the loop
  that needs it.
- **The Standing Queue**: carries the buffer filled and staying full at the congested link (Gettys and
  Nichols), a persistent backlog rather than a transient one, the good queue that absorbs a burst turned
  into the bad queue that never drains.
- **The Latency**: carries the cost (Gettys and Nichols), the delay every packet bears crossing a full
  buffer, ballooning to hundreds of milliseconds or seconds while throughput still reads full, the
  responsiveness the buffer was never meant to spend.
- **The Drop**: carries the remedy and its price (Nichols and Jacobson; antecedent Floyd and Jacobson),
  active queue management dropping or marking packets early to restore the signal, counterintuitive and
  built-in ahead of time, bounding the standing queue rather than abolishing the buffer that still
  absorbs real bursts.
