---
updated: "2026-07-03"
---

# Model Collapse: Reference

The research warrant for [Model Collapse](play_model_collapse.md).
The finding is Shumailov and colleagues'; the play runs on their account of recursive training, through the
self-consuming-model literature and the statistics of learning from finite samples, all cited below.

## Line of Work

Staging model collapse as a **learning system**: a generative model that fits the dense middle of a
distribution far better than its sparse tails, so each generation of its samples is poorer in the rare cases
than the data it trained on, feeding an open data pool that cannot mark the synthetic from the real, so the
next model trains on a corpus already thinned and narrows it again, until, down the generations, the tails are
forgotten, the variance shrinks, and the distribution converges on a low, flat, self-referential mean. The play
models the documented mechanics, the learner that undersamples the rare because it is seen too seldom, the
synthetic output flowing back into the shared commons unmarked, the builder rationally drawing the abundant
cheap data at hand, the compounding loss as output feeds the next run, the irreversible forgetting of the
distribution's tails, and the store of genuine human data that alone holds the tails open, at a cost, as the
load-bearing vectors of the structure, not as a tale of a careless engineer or a poisoned well. The governing
finding of the source is the play's governing law: when generative models are trained recursively on
data produced by earlier models, they progressively lose information about the true distribution, the tails
first, and degenerate toward a narrow approximation that resembles reality ever less. It is distinct from the
house's The Commons, where a rivalrous resource is depleted by extraction: there a finite stock is used up,
here the data commons is not consumed but contaminated, its fidelity recursed away as output re-enters, the
resource degraded rather than drained. It is distinct from the house's Overfitting, where a model fits one
sample's noise and fails on new reality: there the fault is within a single fit on a fixed sample, here it is a
multi-generation degeneration in which each model's honest output becomes the next one's training data. And it
is distinct from the house's Bad Coin, where good money is hoarded and shoddy circulates at one bar: there the
good is withdrawn by choice, here the real is drowned by recursion, no one hoarding and nothing withdrawn.

## Origin

The phenomenon in practice, and the research spine beneath it.

| Source                          | Key Work / Event                                                                                                | Scope                                                                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Shumailov et al.**            | "The Curse of Recursion: Training on Generated Data Makes Models Forget" (arXiv, 2023); _Nature_ (2024)         | **The spine**: recursive training on model output degrades the distribution, the tails vanishing first, converging on a degenerate mean. The play's governing law. |
| **Alemohammad et al.**          | "Self-Consuming Generative Models Go MAD" (2023): model autophagy disorder                                      | **The autophagy**: the self-consuming loop across generations, quality and diversity falling without a fresh supply of real data. The Forgetting.                  |
| **Statistical-learning theory** | the bias-variance and finite-sample account of learning; estimation of distribution tails                       | **The mechanism**: a learner fits the dense middle from finite samples and undersamples the sparse tails, so its samples are poorer in the rare. The Model.        |
| **Provenance / data ecology**   | data-provenance and watermarking work; the "low-background steel" analogy for pre-model human data              | **The remedy and its cost**: telling the real from the made, and the finite, dwindling store of genuine human data once the commons is fouled. The Real Well.      |
| **Practitioner**                | the open web filling with generative output; frontier-model training on scraped, increasingly synthetic corpora | The trap in the field, and its cost: a shared data commons contaminated by its own output, held open only by preserving and blending real human data.              |

## Restrictions

What the house refuses to model, and how it credits what it stages.

- **No villains**: the elements are reduced to load-bearing vectors. The play refuses to cast the builder as
  careless or any party as poisoning the well, because the source finding is precisely that each move is sound:
  training on the abundant data at hand is what every builder sensibly does, machine-made data reads as well as
  any and costs far less to gather, and no one publishes model output meaning to wreck the commons. The collapse
  is authored by no poisoner and emerges from the structure, a learner that must undersample the rare and a pool
  that cannot mark the made from the real, so the misfit is that a field training on its own efficient, abundant
  output forgets the world it was meant to model.
- **No hero**: the play refuses to resolve the misfit into a costless correction. The one move that holds the
  tails open is to keep the well, to hold back genuine human data, mark provenance, and blend the real into
  every run, and it asks the dear and finite where synthetic is free and endless, asks every publisher to label
  what they need not, and is undone by any one builder who drinks the cheap pool while others pay to keep it
  clean. The reckoning is a commons kept against the price of each builder and the abundance of the made at
  once, and a store of true data that, once the pool is fouled, only dwindles, so the cure for a field
  forgetting the world is a real-data well finite, dear, and easily free-ridden away.
- **Credit, not claim**: the research above is other people's work, packaged and attributed here, never claimed
  as the house's. The staging is the house's; the model-collapse finding is Shumailov and colleagues', the
  self-consuming-model framing is Alemohammad and colleagues', and the finite-sample account of tail loss is the
  statistical-learning literature's, and the condition the trap actually requires, recursive training on model
  output through a pool that cannot mark the synthetic from the real, is carried as carefully as the finding
  itself.

## Encoding

Source to constraint, per element.

- **[The Distribution](piece_the_distribution.md)**: carries the true shape of the data (statistical-learning
  theory), its sparse tails the diversity of the real that the learner undersamples.
- **[The Tail](piece_the_tail.md)**: carries the rare cases (Shumailov et al.), lost first and then past
  recovering as the recursion runs.
- **[The Made](piece_the_made.md)**: carries the synthetic output (Shumailov et al.; Alemohammad et al.), the
  model-generated data flowing back into the pool unmarked.
- **[The Real Well](piece_the_real_well.md)**: carries the remedy and its scarcity (provenance and data-ecology
  work), the finite store of genuine human data that alone holds the tails open.
- **[Model Collapse](piece_model_collapse.md)**: carries the phenomenon whole (Shumailov et al.), a field
  training on its own output until it forgets the world and echoes only itself.
