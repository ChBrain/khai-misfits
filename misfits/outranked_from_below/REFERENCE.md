---
updated: "2026-07-24"
---

# Outranked from Below: Reference

The research warrant for **Outranked from Below**. The title is a human-scale reading of the
phenomenon the literature calls **priority inversion**: Sha, Rajkumar, and Lehoczky's account of how
a high-priority task can be starved by a low-priority one through a shared lock, made unbounded by
an unrelated task of middle rank, and the priority-inheritance protocols that bound it, with the
Mars Pathfinder resets as the flight case, all cited below.

## Line of Work

Staging priority inversion as a **rank-does-not-pass-through-a-held-resource structure**: three tasks
ranked high, medium, and low, sharing one resource that only one may hold at a time. The low task takes
the resource, the high task needs it and blocks, and now an unrelated middle task, needing nothing from
either and holding nothing, preempts the low task simply because it outranks it, so the low task cannot
run, cannot finish, cannot release, and the high task, which outranks everyone, waits behind ordinary
middle work for as long as the middle work runs. Every single scheduling decision is individually
correct: the scheduler always runs the highest-priority task that is ready, the middle task is genuinely
ready and genuinely outranks the low one, and the resource is genuinely held atomically so it cannot be
snatched mid-use. The governing law is not a bug in any decision but that **holding a shared resource
carries no rank of its own, so a system that honours its priority order at every step can invert that
order in effect, starving its highest-priority work behind lower work without bound, and only lending
the holder the waiter's rank for the span it holds the resource restores the order the schedule was
built to keep**. The play models the documented mechanics: the blocking of a high task by a low task
through a shared resource, the unbounded delay an intermediate task introduces by preempting the holder,
and the priority-inheritance and priority-ceiling protocols that cap it (Sha, Rajkumar, and Lehoczky),
with the Pathfinder flight resets as the case where the structure ran in a real system (Reeves), as the
load-bearing vectors of the structure, not as a tale of a slow worker or a greedy one.

It is a scheduling-and-locking interaction no staged misfit holds, and it is carefully distinct from its
nearest neighbours. It is distinct from the house's The Tyranny of the Urgent, where the important but
unhurried work is deferred because urgency is salient and captures attention, a misjudgement in which
the ranking itself is wrong, the loud task wrongly treated as the important one: here the ranking is
never wrong, the highest-priority work is correctly known to be highest and starves anyway, and the
middle task that starves it is not urgent, not loud, not mistaken for important, only legitimately higher
in rank than the holder and ready to run, so in one the ranking is misjudged and in the other the
ranking is exactly right and the composition defeats it. It is distinct from The Anticommons and
Vetocracy, where gridlock comes from many parties each holding a standing right to block and the block
holds until all consent: here there is one resource, one holder at a time, no right to veto anything and
no permanent stall, only an unbounded delay produced when an unrelated third party preempts the single
holder, the low task certain to release the moment it is allowed to run. It is distinct from No Idle
Hands, where a queue swells because a resource is driven toward full utilisation and the slack that
absorbed variability is gone: here the wait owes nothing to load or utilisation, the highest-priority
work can starve in an all-but-idle system, blocked not by a busy queue but by a single held lock and a
single ill-timed preemption. And it is not deadlock: no two tasks wait on each other in a cycle, nothing
is permanently stuck, the low task will release the resource as soon as it runs, and the middle task
that does the damage wants nothing the others hold, the pathology being unbounded delay of correctly
ranked work, not mutual blockage.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                          | Key Work / Event                                                                                                                                      | Scope                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lui Sha, Ragunathan Rajkumar, John Lehoczky** | "Priority Inheritance Protocols: An Approach to Real-Time Synchronization" (_IEEE Transactions on Computers_, 1990)                                   | **The spine**: a high-priority task blocked on a resource held by a low-priority task can be delayed without bound by intermediate-priority tasks that preempt the holder, and the priority-inheritance and priority-ceiling protocols bound that blocking, the ceiling protocol to a single critical section and free of deadlock. The Lock, The Order, The Inversion, The Middle, The Inheritance. |
| **Mars Pathfinder / Glenn Reeves (JPL)**        | The July 1997 recurring system resets and their diagnosis; Reeves' account, "What Really Happened on Mars?" (widely circulated via Michael B. Jones)  | **The flight case**: a real spacecraft whose high-priority bus-management task starved when a low-priority meteorological task holding a shared mutex was preempted by a medium-priority communications task, tripping a watchdog that reset the system, fixed in flight by enabling the mutex's priority inheritance. The Starvation.                                                               |
| **Practitioner**                                | the top-ranked job that waits behind ordinary middle work because the junior who holds the one thing it needs keeps being pulled off onto other tasks | The trap in the field, and its cost: the highest-priority work stalled indefinitely while lower work proceeds, every dispatch correct and the whole inverted.                                                                                                                                                                                                                                        |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the low
  task as a laggard, the middle task as a queue-jumper, or the scheduler as broken, because the source
  finding it stages is precisely that no decision is wrong: the scheduler correctly runs the highest
  ready task at every instant, the middle task genuinely outranks the holder and is genuinely ready, and
  the resource is correctly held atomically so it cannot be taken mid-use (Sha, Rajkumar, and Lehoczky).
  The inversion is authored by no one and emerges from the composition, a priority order honoured step by
  step that nonetheless starves its own highest-priority work, because holding a resource confers no rank
  and the schedule has no way to see that the middle task's ordinary progress is buying the high task's
  indefinite delay, so the misfit is a system doing exactly as designed and defeating its own purpose.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The remedy exists and
  works, priority inheritance lending the holder the waiter's rank for the span of the critical section
  so the middle task can no longer preempt it, and the ceiling protocol bounding the blocking to a single
  section and heading off deadlock (Sha, Rajkumar, and Lehoczky), but it is not free: it must be built in
  before the fact, it adds bookkeeping and protocol complexity to every shared resource, it bounds the
  inversion rather than abolishing it, since even under inheritance the high task still waits out one
  critical section, and in the flight case the protection existed in the platform yet shipped switched
  off, so the fix was a diagnosis under pressure and an in-flight change and not a thing the running
  system could have corrected for itself (Reeves). The reckoning is a guard designed in early against a
  failure that appears only under a timing coincidence rare enough to pass every test and surface in the
  field.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the formal account of unbounded priority inversion
  through a shared resource and the inheritance and ceiling protocols that bound it are Sha, Rajkumar, and
  Lehoczky's, and the earlier observation of the phenomenon and of priority inheritance in the Mesa
  system is Lampson and Redell's ("Experience with Processes and Monitors in Mesa", 1980), credited as the
  antecedent and not folded into the spine; the flight case, its diagnosis, and the in-flight fix are the
  Mars Pathfinder team's as recounted by Glenn Reeves. The mechanism is carried as carefully as the
  finding: that the inversion is a real-time scheduling phenomenon on a preemptive priority scheduler
  with locked shared resources, that the unboundedness specifically requires the intermediate task, that
  it is delay and not deadlock, and that inheritance bounds the blocking rather than removing it. The
  human-scale staging is the house's metaphor for the register and is held as a metaphor, the flight and
  systems record credited as the science it dramatises and never dressed up as more general than it is.

## Encoding

Source to constraint, per element, one per load-bearing vector, no filler.

- **The Lock**: carries the shared resource that only one may hold at a time and that the top-ranked
  work needs (Sha, Rajkumar, and Lehoczky), held atomically so it cannot be taken mid-use, the one thing
  that stands between the highest task and its work.
- **The Order**: carries the priority ranking honoured at every dispatch (Sha, Rajkumar, and Lehoczky),
  the scheduler always running the highest ready task, the rule that is never once broken and yet is
  inverted in effect.
- **The Inversion**: carries the state itself (Sha, Rajkumar, and Lehoczky), a lower-ranked task running
  while the highest-ranked waits on it, the order intact at every step and reversed in the sum.
- **The Middle**: carries the unrelated intermediate task (Sha, Rajkumar, and Lehoczky), needing nothing
  from either and holding nothing, that preempts the holder purely by rank and turns a bounded wait into
  an unbounded one, the element that makes the inversion more than a brief handover.
- **The Starvation**: carries the cost (Sha, Rajkumar, and Lehoczky; Reeves), the highest-priority work
  delayed without bound while lower work proceeds, and in the flight case a watchdog reset losing data,
  the correctly ranked work the system exists to serve served last.
- **The Inheritance**: carries the remedy and its price (Sha, Rajkumar, and Lehoczky), the holder lent
  the waiter's rank for the span of the critical section so the middle can no longer preempt it, bounding
  the blocking to one section and, in the ceiling form, heading off deadlock, at the cost of foresight,
  protocol complexity, and a bound that is not an abolition.
