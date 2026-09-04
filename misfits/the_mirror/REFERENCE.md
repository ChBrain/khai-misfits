---
concept: "Conway's Law"
field: "Organisations, hierarchy, and management"
source: 'Conway, "How Do Committees Invent?" (Datamation, 1968)'
updated: "2026-07-01"
---

# The Mirror: Reference

The research warrant for [The Mirror](play_the_mirror.md). The title names the effect;
the play runs on Conway's Law and the mirroring hypothesis, from the original statement
through the empirical tests and the reorganisation remedy, all cited below.

## Line of Work

Staging Conway's Law as a **systemic system**: an organisation that designs a system
produces a design whose structure copies the organisation's own communication structure,
so the software's module boundaries settle onto the organisation's team boundaries and the
integration faults fall exactly there. The play models the documented mechanics, the
intended modular architecture, the communication structure that actually exists, the team
boundary where communication thins, the interface that is strong within a team and weak
across two, the seam where the faults collect, and the reorganisation that alone moves the
seams, as the load-bearing vectors of the structure, not as a tale of weak engineering. The
governing finding of the source literature is the play's governing law: the shape of the
system mirrors the shape of the org, so you ship the architecture your communication
structure is built for, not the one you drew.

**And the copy answers back, which is the vector the play was missing and the reason its
remedy is a last resort.** Once the architecture exists it constrains the communication that
can happen next: the boundary drawn where two teams did not talk is now the reason they do
not need to, because the contract is written, the queue is in place and the escalation path
runs through the interface rather than through a person. **What began as a record of a
silence becomes the cause of it**, and the seam is then load-bearing in both structures at
once. The mirroring work reports a **duality** rather than a copy, and the modularity
literature says why the return arrow is the stronger one: people move and reporting lines are
redrawn in an afternoon, while a module boundary sits in the build, the deploy, the on-call
rota and every line written against it, and outlasts everybody who agreed to it. So the
reorganiser is never moving a boundary onto an empty field.

It is distinct from the house's **The Decision Travels**, where a correct decision crosses every
station of the chain and no one measures it against the person who must live with it: there the
chain carries a decision and the loss is felt at the far end by somebody outside the organisation,
whereas here the organisation's own communication structure is copied into the artefact, so the
seams of the built thing fall exactly where its builders do not talk.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                           | Key Work / Event                                                                                                             | Scope                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Conway**                       | "How Do Committees Invent?", _Datamation_ (1968)                                                                             | **The law**: any organisation that designs a system produces a design whose structure copies the organisation's communication structure. The Org Chart, the Mirror.                                                                                                                                                                                                           |
| **Parnas**                       | "On the Criteria To Be Used in Decomposing Systems into Modules", _CACM_ (1972)                                              | **The intent**: information hiding and clean modular decomposition, the architecture one means to build, drawn as though teams were interchangeable. The Architecture, the Interface.                                                                                                                                                                                         |
| **Herbsleb & Grinter**           | "Splitting the Organization and Integrating the Code: Conway's Law Revisited", _ICSE_ (1999)                                 | **The cost**: coordination across an organisational boundary is thin and expensive, so integration is hardest exactly where two teams meet. The Boundary, the Handoff.                                                                                                                                                                                                        |
| **MacCormack, Rusnak & Baldwin** | "Exploring the Duality between Product and Organizational Architectures", _Research Policy_ (2012)                           | **The evidence, and it is a duality**: the mirroring hypothesis tested, products built by loosely coupled organisations are themselves more modular and the faults track the org, reported as a correspondence between product and organisational architecture rather than as one copying the other, which is what licenses the return arrow. The Seam, Now It Is the Reason. |
| **Carliss Baldwin & Kim Clark**  | _Design Rules: The Power of Modularity_ (2000)                                                                               | **The return arrow**: an architecture treated as a set of design rules that creates options and then bounds them, so the split, once made, decides which organisational arrangements are available afterwards and how long they last. Now It Is the Reason.                                                                                                                   |
| **Skelton & Pais**               | "Team Topologies" (2019); the "inverse Conway maneuver" (after Conway, popularised by Fowler and ThoughtWorks)               | **The remedy**: reshape the teams to match the architecture you want, so the communication structure produces the design instead of fighting it. The Reorg, the Reorganizing.                                                                                                                                                                                                 |
| **Practitioner**                 | microservices drawn to team boundaries, the "two-pizza team", monolith-to-services reorgs, integration bugs on the team seam | The law in delivery: seams that fall between owners, and the reorganisation that moves them. The Two Rooms, the Integration.                                                                                                                                                                                                                                                  |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast
  any team as sloppy, because the source finding is precisely that neither team is: each builds
  the part it owns well, densely coordinated inside and thinly across, exactly as an org rewards.
  The misfit is that the boundary where two teams barely talk becomes the seam where the system
  barely holds, and holding it was no one's module.
- **No hero**: the play refuses to resolve the misfit into rescue by better coordination. No amount
  of syncing moves a seam set by the reporting lines; the one move that works is structural, a
  reorganisation that reshapes the teams to the architecture, and it costs the settled org that
  every team's habits were built around. The design does not win on its merits; the org is redrawn,
  at a price. And the price is set by the artefact rather than by the people: the boundary being
  moved is held in place by the build, the deploy, the on-call rota and everything written against
  it, so a reorganisation that changes who reports to whom in an afternoon is still arguing with a
  seam that has three years of code behind it.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here,
  never claimed as the house's. The staging is the house's; the law, the mirroring evidence, and
  the reorganisation remedy are theirs, and the condition Conway's Law actually requires, that
  communication structure shapes design structure, is carried as carefully as the law itself.

## Encoding

Source to constraint, per element.

- **[The Architecture](piece_the_architecture.md)**: carries clean modular decomposition and information
  hiding (Parnas), the design intended as though teams were interchangeable.
- **[The Org Chart](piece_the_org_chart.md)**: carries the communication structure (Conway), the real graph
  of who talks to whom that the system will come to copy.
- **[The Boundary](piece_the_boundary.md)**: carries the coordination cost across an org line (Herbsleb &
  Grinter), the team edge where communication thins.
- **[The Interface](piece_the_interface.md)**: carries the intended contract (Parnas), strong within a team
  and underspecified where two teams must agree on it.
- **[The Seam](piece_the_seam.md)**: carries the mirroring evidence (MacCormack, Rusnak & Baldwin), the fault
  line where the system's boundaries settle onto the org's and the integration bugs collect.
- **[The Handoff](piece_the_handoff.md)**: carries cross-boundary coordination (Herbsleb & Grinter), the thin,
  expensive communication that stands in for a shared owner and never quite does.
- **[The Reorg](piece_the_reorg.md)**: carries the inverse Conway maneuver (Skelton & Pais), reshaping the teams
  to the architecture so the communication structure produces the design.
- **[Now It Is the Reason](piece_now_it_is_the_reason.md)**: carries the return arrow (MacCormack, Rusnak &
  Baldwin's duality; Baldwin & Clark), the architecture constraining the communication that can happen next,
  so the seam is held up by both structures and the reorganiser is never moving it onto an empty field.
- **[The Reflection](piece_the_reflection.md)**: carries the phenomenon whole (Conway; MacCormack, Rusnak & Baldwin),
  and its remedy in reorganisation (Skelton & Pais), the system wearing the shape of the org that built it.
