---
concept: "The Tail at Scale (fan-out latency amplification; the service governed by its slowest component)"
field: "Safety, risk, and complex systems"
source: "Dean & Barroso (Communications of the ACM, 2013); Vulimiri and colleagues on redundancy (CoNEXT, 2013)"
axis: fan-out-width
sign: negative
updated: "2026-08-23"
---

# The Last One to Answer: Reference

The research warrant for The Last One to Answer.
The term is the house's; the play runs on tail latency in fan-out services, and on what happens to a service whose
result requires every component to have been fast at once, all cited below.

## Line of Work

Staging the distributed service as **a whole governed by its slowest part on the occasion**: a machine answers in
about ten milliseconds and once in a hundred times takes a second, for reasons that are correct work rather than
faults; a request needs an answer from every shard and is not finished until the last one arrives; and the rare case
therefore stops being rare in exact proportion to how many machines are asked. The play models the documented
mechanics, the component that meets its target, the fan-out that buys throughput, the arithmetic that can be checked
rather than believed, the interruptions a designer chose and would choose again, the mean that is accurate and reports
none of it, and the duplicate request that covers the tail without touching what makes it, as the load-bearing vectors
of the structure, not as a tale of a slow machine or an inattentive operator.

The governing law is that a service waiting on many components is timed by the slowest of them on that occasion rather
than by the typical one, so a property that is rare per component becomes ordinary per request as the fan-out widens.

**Nobody in the sequence falls short, and that is what puts the failure outside anybody's conduct.** The server meets
its target. The request asks for no more than it needs. The reply that arrives last is correct and complete. The
interruption is necessary work. The average is honestly computed.

**And the component is good, which the play establishes before anything else.** Ninety-nine calls in a hundred
answered in ten milliseconds is a figure most systems would be pleased with. Nothing here fails a threshold, nothing
is under-provisioned, and there is no defect available to remove, which puts the failure outside anybody's competence
as well as outside their conduct.

**Then the arithmetic can be checked rather than believed.** A request is fast only if **all** hundred components are
fast, which happens at ninety-nine hundredths raised to the hundredth power, about thirty-seven per cent.
So **sixty-three per cent of user requests take more than a second**, in a fleet where every machine was fast
ninety-nine times out of a hundred. There is no model here, no fitted constant and nothing to dispute: better
engineering moves the base and never the form.

**And it runs the wrong way with success.** Every shard added buys throughput and worsens the tail, out of components
that have not changed. The architecture working is the mechanism getting worse.

**Then the slow moment is not a defect.** The interruptions enumerated are memory reclamation, log compaction, data
rebuilding, background daemons that use very little on average and take milliseconds when scheduled, contention for
shared caches, memory bandwidth and network, and power-saving states that must be left. Every one is a thing a
designer chose, would choose again and could defend in a review. **There is nothing here to fix by fixing something**,
and eliminating any of these activities would cost the system more than the pause does.

**And the independence is what makes it scale the wrong way.** Those activities run separately on each machine, so the
chance that **some** machine is busy at a given instant rises with the number of machines rather than falling with the
quality of any one of them.

**Then the number everybody watches is accurate and silent.** The mean response time is excellent, correctly computed
and dominated by the ninety-nine fast answers, because that is what a mean is. Nobody chose it in order to conceal a
tail. So an honest figure sits above a service that is slow most of the time, and seeing the difference requires
somebody to ask for a high percentile, which is a different question from the one the instrument was pointed at.

**And the remedy covers rather than cures.** Sending the request twice and taking whichever answer arrives first works,
and works in ordinary systems rather than only in one company's: replicating an operation across diverse resources and
taking the first to complete reduces mean and tail latency in name lookups, in database queries and in packet
forwarding. Issuing the copy only after a brief wait confines the duplication to the requests that need it, which is
what keeps the extra total work to a few per cent. What has been bought is the improbability of two independent
machines pausing at the same instant, which is usually a good bet and is a bet. **The variability is untouched**, so
the design goal becomes tolerating the tail rather than removing it, which is what the people who named the problem
recommend, on the ground that at this scale eliminating all latency variability is not available.

It is distinct from the house's **Ninety-Six Times Eight**, which is the nearest incumbent and stages cumulative
passage loss, where per-structure efficiency of about ninety-seven per cent multiplied across eight dams in series
leaves a run far short, with no weak structure anywhere to find. Remove that engine entirely, by stipulating no
attenuation of any kind, every stage passing everything it receives and nothing lost in series, and this misfit stands
whole: **nothing here is lost.** Every one of the hundred machines answers correctly and completely, no request fails
and no fraction is removed; the service is merely late, because it waits for the last one. The two are the same family,
excellent parts and a poor whole, and they separate on the operation: there it is a **product along a chain**, here it
is a **maximum over a set**, and a maximum destroys nothing.

It is distinct from the house's **Only as Good as the Worst**, which stages the O-ring theory, where the value of
production is the product of complementary task qualities so a single low-quality task cuts the worth of the whole.
Remove that engine, by stipulating every part is of identical and perfect quality with no complementarity in quality
at all, and this stands entire, because **it needs no difference between the parts.** A hundred identical excellent
machines produce this outcome, since what varies is not their quality but the realisation on a given occasion. That
play needs a weak link; this one has none, and the sharper statement is that **more parts of the same excellent kind
makes it worse**, which a weakest-link account cannot say.

It is distinct from the house's **No Idle Hands**, which stages the utilisation trap, where waiting time rises
steeply as a server approaches saturation and Kingman's formula sets the shape. Remove that engine, by stipulating low
utilisation, real slack and no queueing delay anywhere, and this stands, because **it needs only variability and not
load.** A fleet at ten per cent utilisation whose machines pause for garbage collection produces the identical
amplification: the mechanism is the fan-out, and queueing is one source of the per-machine variability among several
rather than the thing being staged.

It is distinct from the house's **All at Once**, which stages the cache stampede, where a shared expiry synchronises
many independent requests into one flood against the backend the cache existed to spare. Remove that engine, by
stipulating that nothing ever synchronises and demand arrives perfectly smoothly, and this stands, because **nothing
here is synchronised and nothing is overwhelmed.** There many requests converge on one resource; here one request
depends on many resources, and the harm falls on the requester rather than on anything shared.

## Origin

The spine, the arithmetic, where the variability comes from, why it cannot be removed at source, the remedy shown
outside one company, and the argument that is still open.

| Source                                    | Key Work / Event                                                                                                                                                                                                                                                                                                     | Scope                                                                                                                                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Jeffrey Dean & Luiz André Barroso**     | "The Tail at Scale" (Communications of the ACM, 56(2), 2013, 74 to 80): the worked case of a server answering in ten milliseconds with a one-second ninety-ninth percentile, against a request that must collect responses from a hundred servers in parallel                                                        | **The spine, and it is a worked example rather than a claim**: one call in a hundred being slow leaves sixty-three per cent of user requests taking more than a second, in a fleet whose every machine meets its target.                                 |
| **Why the arithmetic binds**              | the rule that a request needing every answer is finished by the last one, so it is fast only if all of them are: ninety-nine hundredths raised to the hundredth power, about thirty-seven per cent                                                                                                                   | **The constraint, and it is checkable**: there is no model, no fitted constant and nothing to dispute, so engineering can move the base and never the form, and widening the fan-out worsens the tail from unchanged components.                         |
| **Where the variability comes from**      | the enumerated causes: contention for shared CPU, caches, memory bandwidth and network; background daemons; contention for global resources such as switches and shared file systems; maintenance including rebuilds, log compaction and garbage collection; queueing at several layers; and power-management states | **Why there is nothing to fix**: every item is correct work a designer chose and would choose again, and the activities run independently per machine, so the chance some machine is busy rises with the fleet rather than falling with its quality.     |
| **Why it cannot be removed at source**    | the authors' own position that the scale and complexity of such services make eliminating all latency variability infeasible, so the design goal is tail tolerance rather than tail elimination                                                                                                                      | **The bound, stated by the people who named it**: the play does not assert that the variability is irreducible in principle, only that the practitioners who characterised it treat removing it as unavailable at this scale.                            |
| **Ashish Vulimiri and colleagues**        | "Low Latency via Redundancy" (CoNEXT, 2013): initiating redundant operations across diverse resources and using the first result to complete, measured on name lookups, database servers and packet forwarding                                                                                                       | **The remedy, and it is general**: replication reduces mean and tail latency in ordinary systems rather than only in one company's, which is what makes the mechanism and its answer a property of fan-out rather than of any particular infrastructure. |
| **Whether tolerance is the right answer** | the standing argument over hedging and replication against reducing variability at source, and over what duplication costs when a system is already loaded                                                                                                                                                           | **The live dispute, cited to hold the line**: whether to tolerate the tail or attack its causes, and what hedging costs under load, are genuinely contested, the play stages the amplification and adjudicates none of it. Distinction only.             |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast any machine as too slow
  or any operator as inattentive, because nothing in the sequence has a decision to get wrong: the server meets its
  target ninety-nine times in a hundred and returns a correct answer on the hundredth; the request asks every shard
  because a result assembled from most of them is wrong rather than partial, and fanning out is what makes the system
  fast in the first place; the reply that arrives last is correct, complete, no worse than any other and belongs to a
  different machine each time, so there is nothing to identify or replace; the interruption is memory being reclaimed
  or a log compacted or a shared cache yielded, which is work an engineer chose and would defend; and the average is
  honestly computed and is the natural summary of a response-time distribution. The failure is authored by nobody and
  emerges from the structure, so the misfit is that a whole waiting on many parts is timed by the worst of them.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Faster machines lower the base and
  leave the exponent, so the same arithmetic returns at a larger fan-out. Narrowing the fan-out means giving up the
  partitioning that bought the throughput. Removing the background activities costs more than the pauses do, since
  each is maintenance, contention or power management rather than a fault. Watching the mean more closely recovers
  nothing, because the harm is in the shape rather than the centre. And hedging, which is cheap and genuinely works,
  buys the improbability of two independent machines pausing at the same instant and changes none of the causes, so
  what it delivers is tolerance rather than a cure.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed as the
  house's. The staging is the house's; the characterisation of tail latency at scale, the worked example and the
  enumeration of causes are Dean and Barroso's, and the general result on redundancy is Vulimiri and colleagues'. The
  bounds are carried with them: **whether to tolerate the tail or to attack its causes is genuinely contested**, and
  the play carries that argument rather than settling it; the worked figures are one illustration at one fan-out and
  are offered as the shape of the amplification rather than as constants, and a real service's components are not
  perfectly independent, which the arithmetic assumes and which makes it a bound rather than a measurement; the
  enumeration of causes is the authors' and is not claimed to be exhaustive; the account treats a fan-out as
  homogeneous where real systems are not, which is its own simplification; and the mechanism is stated for a request
  requiring every response, which is not every request. **The play makes no claim about any system, any service or any
  operator, and gives no engineering, operational or architectural advice of any kind**, only that a request finished
  by its last reply is timed by the unluckiest of its parts, and that the rare case stops being rare in proportion to
  how many parts there are.
