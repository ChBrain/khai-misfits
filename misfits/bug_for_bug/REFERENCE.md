---
concept: "Hyrum's Law (implicit interfaces; observable behaviour as the real contract)"
field: "Organisations, hierarchy, and management"
source: "Hyrum's law, after Hyrum Wright"
updated: "2026-08-09"
---

# Bug for Bug: Reference

The research warrant for Bug for Bug.
The term is the house's; the play runs on the observable-behaviour problem in interface design, stated as
Hyrum's law, and on the specification of error handling by reverse-engineering existing implementations,
all cited below.

## Line of Work

Staging bug-for-bug compatibility as **a promise overtaken by everything else the system does**: an
interface publishes a contract, an implementation of it necessarily behaves in the cases the contract does
not mention, and callers build against what they observe rather than against what was promised. The play
models the documented mechanics, the accident that is a necessary residue rather than a lapse, the
dependency that forms by use without anybody consenting to it, the compliant implementation that presents
as the broken one, the repair that stops working software belonging to people at fault for nothing, the
revert that converts a defect into a requirement, and the standard eventually rewritten to describe what
happened, as the load-bearing vectors of the structure, not as a tale of sloppy engineers or careless
integrators.

The governing law is that what is depended upon is what is observable, and what was promised is only a
subset of that. Stated formally: with a sufficient number of users of an interface, it does not matter what
is promised in the contract, since all observable behaviours will be depended on by somebody. Nothing at
the running surface marks which behaviours are guaranteed and which merely occur, so the distinction exists
only in a document, and the document is not the thing anybody executes.

What removes the easy reading is that no participant has a decision available to get wrong. Every contract
reserves more than it promises, which is correct practice, and a running system cannot decline to behave in
the cases the document omits: something must happen, so something does. The callers were warned of nothing
and could not have separated promise from accident by any experiment open to them. The maintainer who
repairs the defect is acting on their own code, within a contract that reserved the behaviour explicitly.

What makes it structural is the asymmetry of the remedy. Correctness is punished at the point it matters:
an implementation written strictly to the contract fails against content built for the other one, and users
apportion blame by observation rather than by document, which is reasonable of them. So compliance
presents as the defect, and reproducing the accident deliberately becomes the condition of being usable.

And the resolution inverts the instrument. When HTML was specified so that independent implementations
could interoperate, the parsing and error handling were written by studying what browsers already did, so
that behaviours existing documents depended on would carry forward. That is the right call, since a
specification nobody implements is worth nothing. It also converts the document from a statement of what
ought to be into a description of what happened.

It is distinct from the house's **The New Normal**, where each small deviation is tolerated once and becomes
the standard so the line of acceptable creeps until it fails: there a judgement is made repeatedly, and
something that should have been refused is let pass, so the standard degrades by permissiveness. Here
nobody tolerates anything and nothing degrades. The behaviour is not accepted as good enough, it is simply
depended upon, and it becomes binding through accumulated reliance rather than through any decision to
allow it.

It is distinct from the house's **Path Dependence**, where a lead won by accident compounds as each adopter
picks what others picked until a worse standard locks in: there the lock is economic, built from network
effects and switching costs, and adoption is a choice each adopter makes. Here the better behaviour may be
free, available and obviously superior, nothing is being adopted or chosen, and the lock is that other
people's working code observes the current behaviour.

It is distinct from the house's **The Hollow Word**, where a word keeps circulating after the practice it
named has gone, so the field speaks the old language and does the new: there the form is empty and the
substance has moved on. Here the document is not hollow but simply narrower than the system, and the
mismatch is not between language and practice but between what was promised and what was visible.

It is distinct from the house's **Over a Barrel**, where the most valuable deal needs a specific investment
and the investor can be squeezed once it is sunk, so the deal is never made: there the vulnerability is
anticipated and prevents the transaction. Here nobody anticipates anything, the investment is made
constantly and cheaply, and the party who ends up constrained is not the one who sank the cost.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                                     | Key Work / Event                                                                              | Scope                                                                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hyrum Wright**                           | Hyrum's law, after Hyrum Wright                                                               | **The statement**: with a sufficient number of users of an API, it does not matter what you promise in the contract, since all observable behaviours of your system will be depended on by somebody.                        |
| **Why the contract cannot help**           | the distinction between the documented interface and the implicit interface captured by usage | **The mechanism**: consumers collectively depending on every aspect of the implementation, intentionally or not, so that changes are constrained by both interfaces at once and only one of them is written down.           |
| **The compliant implementation's problem** | bug-for-bug compatibility as a deliberate engineering goal in second implementations          | **The inversion**: strict conformance failing against real content, and the accidents reproduced on purpose because matching them is the condition of being usable.                                                         |
| **The specification rewritten to reality** | the specification of HTML parsing and error handling to match what browsers already did       | **The resolution**: error recovery defined explicitly rather than left to each implementation, developed by reverse-engineering deployed behaviour so that the aspects existing documents depended on were carried forward. |
| **The permanent second road**              | compatibility modes and document type switching                                               | **The correction, and its price**: old and new behaviour maintained together so existing content continues and new content is correct, for as long as anybody remains on the old one.                                       |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the original
  implementer as sloppy or the integrator as reckless, because nobody in the sequence has a decision to get
  wrong: every contract reserves more than it promises, and an implementation must do something in the
  cases the contract omits, so the accidents are a necessary residue rather than a lapse; the callers wrote
  ordinary code, tested it against the running system and found that it worked, having been warned of
  nothing and being unable to distinguish promise from accident by any available test; the second
  implementer who reproduces the accidents is making their software usable; and the maintainer who repairs
  the defect is doing the responsible thing on their own code within a contract that permitted it. The
  failure is authored by nobody and emerges from the structure, so the misfit is that a repair and an
  outage are the same event seen from two sides.
- **No hero**: the play refuses to resolve the misfit into a costless correction. Specifying the behaviour
  lets implementations agree at last, which is the whole point, and turns the document into a description
  of what happened rather than a statement of what ought to. A compatibility mode serves both parties and
  maintains two behaviours indefinitely, since nobody whose system is working has a reason to move.
  Version negotiation works and multiplies the combinations that must be tested. A deprecation window works
  and is paid by everybody who must migrate, including those whose dependency was never on anything
  promised.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never
  claimed as the house's. The staging is the house's; the law, the engineering practice and the standards
  history are theirs. The bounds are carried with them: Hyrum's law is an observation of practice rather
  than a proved theorem, and how binding it is depends heavily on the number of users, the cost of
  migration and whether the interface has a mechanism for versioning; well-run interfaces do successfully
  change observable behaviour, using deprecation, fuzzing of unspecified outputs and explicit tolerance
  windows, so the account here stages the mechanism at full strength rather than describing every case; the
  HTML history is one prominent instance and its lessons do not transfer unexamined to every interface,
  since the web's inability to coordinate updates across authors is unusually severe; and characterising a
  behaviour as an accident rather than an intended guarantee is often contested after the fact by the
  parties relying on it. **The play makes no claim that contracts are useless**, they are the only
  instrument anybody has, only that they govern a narrower thing than the one people build on.
