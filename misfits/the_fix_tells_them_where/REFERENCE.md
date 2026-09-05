---
concept: "Patch-Based Exploit Generation (the disclosure window; the repair that specifies the flaw)"
field: "Safety, risk, and complex systems"
source: "Brumley, Poosankam, Song & Zheng, IEEE S&P (2008); Bilge & Dumitraş, CCS (2012); Arbaugh, Fithen & McHugh (2000)"
axis: disclosure-detail
sign: negative # how long a defender has before the flaw is usable, as the repair specifies it more precisely
updated: "2026-09-04"
---

# The Fix Tells Them Where: Reference

The research warrant for The Fix Tells Them Where.
The term is the house's; the play runs on patch-based exploit generation and the disclosure window it opens,
all cited below.

## Line of Work

Staging the security patch as **a repair that is identical to a description of what it repairs**: a maintainer
with a fix must ship it and must ship it quickly, because the flaw is present in every deployed copy whether or
not anybody has written a fix and somebody else may already hold it quietly. Shipping means publishing a build,
and the estate is already running the previous one, so the pair exists the moment the repair is available.
Comparing them locates the check that was missing, on the path where it was missing, in the version where it
was missing, which is most of the work of using it. On the day of publication almost nothing has applied it. The
play models the documented mechanics, the fix that must go out, the comparison that is constituted rather than
leaked, the estate that updates on its own obligations, the advisory whose vagueness costs the defender alone,
the delay that protects nobody, and the window nobody who opens it can close, as the load-bearing vectors of
the structure, not as a tale of a vendor being careless with a release.

The governing law is that a repair delivered as an artefact carries its own specification, because the
specification is the difference between the artefact and the one it replaces. That difference cannot be
withheld without withholding the repair, and no policy about the wording of an advisory reaches it, since the
readable object is a comparison rather than a statement.

What removes any possibility of blame from the maintainer is that every alternative is worse on its own terms.
Holding the fix keeps the flaw open for everybody, including whoever found it independently and said nothing,
and there is no date at which the estate is ready, since the update tail is measured in years and is made
partly of machines whose operators do not know they run the software. They were under no obligation to look
and looked.

What removes it from the estate is that its slowness is the shape of running things. An operator balances
availability against risk under obligations the maintainer cannot see, so every point on the curve is
defensible, and beneath the servers sit appliances, embedded devices and dependencies nobody has inventoried.
The curve is at its lowest on the day the specification becomes public.

**The play declines to cast the reader of the difference as a party with a decision.** The trap is complete
against an entirely automated scanner and depends on nothing about anybody's character, so an adversary here is
an environmental constant in the way weather is, not an actor whose wrongdoing authors the failure. A version
of this production that turned on somebody being wicked would be describing a crime rather than a structure,
and would lose the thing that makes it a misfit: that the defender's most responsible available act is what
publishes the way in.

And the one adjustable lever points the wrong way. The advisory is the input an operator uses to decide whether
this justifies an unscheduled outage, and somebody comparing builds does not need it, so every degree of
vagueness is taken from the only party whose behaviour it changes and refunded to nobody.

It is distinct from the house's **Bug for Bug**, where a behaviour nobody specified gets depended on so
matching the bug becomes required and fixing it is the thing that breaks: there the binding constraint is
implicit, emerged from use, and was never written anywhere, and the difficulty is that a repair breaks
somebody. Here the constraint is a deliberate publication the defender authored, the repair breaks nothing, and
what it costs is not compatibility but concealment.

It is distinct from the house's **Alarm Fatigue**, where alarms set to miss no danger flood the responder until
the true one is ignored: there a signal is degraded by its own frequency and the responder stops attending.
Here nothing is degraded and nobody stops attending. The signal is rare, accurate and acted on by everyone who
receives it, and the difficulty is that it is legible to more parties than the ones it was addressed to.

It is distinct from the house's **Known Too Late**, where a technology can be steered while its harms are
unknown and has set too hard to steer once they show: there knowledge and leverage are separated in time and
arrive in the wrong order. Here they arrive together and are separated by **party**: the knowledge is complete
and public on day one, the leverage sits with thousands of operators, and the actor who has the timing has none
of the duration.

It is distinct from the house's **Loudest When Hushed**, where the attempt to suppress a thing is the surest
sign it matters so hiding it spreads it wider: there the amplification is caused by an act of concealment and
the remedy is to leave the thing alone. Here concealment is not attempted and leaving it alone is the one
option that helps nobody, since the amplification is caused by the repair rather than by any effort to hide
anything.

It is distinct from the house's **Only as Good as the Worst**, where output multiplies its tasks' qualities so
one weak link cuts the whole: there the loss is a product of simultaneous quality and the remedy is to raise
the weakest task. Here the unpatched machines do not degrade anybody else's security, each is exposed on its
own account, and the difficulty is not that the estate is only as strong as its slowest member but that the
slowest member's exposure was created by the act that protected the fastest.

## Origin

The mechanism, the measurement, and the policy argument that is still open.

| Source                                                        | Key Work / Event                                                                                                                   | Scope                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **David Brumley, Pongsin Poosankam, Dawn Song & Jiang Zheng** | "Automatic Patch-Based Exploit Generation is Possible: Techniques and Implications" (IEEE Symposium on Security and Privacy, 2008) | **The spine**: working exploits generated automatically from the difference between a patched and an unpatched binary, in minutes, which establishes the comparison as a specification rather than a hint.                         |
| **Leyla Bilge & Tudor Dumitraş**                              | "Before We Knew It: An Empirical Study of Zero-Day Attacks in the Real World" (ACM CCS, 2012)                                      | **The measurement**: attack volume against a vulnerability rising by orders of magnitude after public disclosure, which is the shape of the day after and is observed in the field rather than argued.                             |
| **William A. Arbaugh, William L. Fithen & John McHugh**       | "Windows of Vulnerability: A Case Study Analysis" (IEEE Computer, 2000)                                                            | **The interval**: the vulnerability lifecycle from discovery through disclosure to remediation, establishing the window as a structural feature with a long tail rather than an artefact of any one incident.                      |
| **Ashish Arora, Rahul Telang & Hao Xu**                       | "Optimal Policy for Software Vulnerability Disclosure" (Management Science, 2008)                                                  | **The trade, modelled**: disclosure timing analysed as a policy problem in which both immediate and indefinite non-disclosure are dominated, which is why the play stages a choice with no correct side rather than a mistake.     |
| **Eric Rescorla**                                             | "Is Finding Security Holes a Good Idea?" (IEEE Security & Privacy, 2005)                                                           | **The dissent, cited to hold the line**: the argument that disclosure and repair may deliver less than they cost, which the play carries as a live objection and does not adopt. Distinction only.                                 |
| **The remediation record**                                    | the interval between a patch and its application at scale, including flaws exploited at scale months after a fix was available     | **The live case, and the bound**: repeated evidence that estates remain unpatched long after a fix exists, with the causes disputed and varying by sector, which the play carries as a documented tendency rather than a constant. |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the maintainer as
  careless and, more importantly, **refuses to cast the reader of the difference as a party with a decision**,
  because the trap is complete against an automated scanner and depends on nothing about anybody's character.
  Nobody in the sequence has a decision to get wrong: shipping is right and waiting is worse, since the flaw is
  there either way and somebody else may already hold it; the comparison is constituted by the release rather
  than leaked from it, so no wording policy reaches it; the estate's slowness is a defensible balance of
  availability against risk under obligations the maintainer cannot see; and the advisory is the one adjustable
  lever and every setting of it costs the defender more than anybody else. The failure is authored by nobody
  and emerges from the structure, so the misfit is that a repair delivered as an artefact carries its own
  specification.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Publishing a vaguer advisory
  disarms the operator and leaves the difference exactly as readable. Holding the fix protects nobody and waits
  for a readiness date that does not arrive. Staggering release to privileged customers first picks who is
  exposed and leaks through the customers. Obfuscating the build slows the defenders' own analysis and is
  routinely defeated. And knowing the mechanism completely, which everybody in the play does, changes none of
  the inputs to the next release.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed
  as the house's. The staging is the house's; the automatic generation result, the post-disclosure measurement,
  the vulnerability lifecycle, the disclosure-policy model and the dissent are theirs. The bounds are carried
  with them: the automatic-generation result is strongest for the class of flaws and patch styles studied and
  does **not** establish that every patch yields an exploit, so the play stages the comparison as a large
  reduction in difficulty and not as a guarantee; the size of the post-disclosure rise varies by vulnerability,
  by sector and by era, and the play carries the direction rather than a magnitude; coordinated disclosure,
  embargoes and staged rollouts are real practices that shift the timing and are not staged here, so nothing in
  this production is an argument against them; and whether disclosure is net positive is genuinely contested,
  with the dissent cited above holding that it may not be, which the play declines to settle. **The play makes
  no claim that the fix should have been withheld**, only that the repair and the description of the flaw are
  one object, and that the party who opens the exposure by closing the hole cannot close the exposure.
