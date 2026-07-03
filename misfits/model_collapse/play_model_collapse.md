---
khai: play
title: "Model Collapse"
description: "Each model trained on the last one's output loses the rare cases first, drifting to a bland self-referential mean."
language: english
license: CC-BY-NC-SA-4.0
voice: "Sensible and efficient on the surface: train the next model on the abundant data at hand, more of it machine-made each year, because it is cheap and plentiful and looks just fine. Underneath, each generation learning from the last one's output loses the rare and the true first, the tails thinning, the distribution narrowing, until the models forget the world and echo only themselves. No dashes: colons, ellipses, and line breaks instead."
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-03"
---

# Play: Model Collapse

## Estate

[khai-misfits](https://github.com/ChBrain/khai-misfits): the house that holds this production and answers for the whole run.

## Name

Model Collapse.
You need data to train the next model, and there it is, an ocean of it, cheap and clean-looking and endless, and more of it every day. That much of it is now machine-made is no worry: it reads well, it is plentiful, it costs nothing to gather, and using what is at hand is only sensible ... and so the model learns from the output of the models before it. But a model learns the middle of the world far better than its edges: the common case it sees a thousand times, the rare case once or never, so what it generates is the world with its tails shaved off, a fraction blander than what it learned. Feed that back as training data and the next model learns from a world already narrowed, and shaves it again, and the next again, and the rare becomes the unseen becomes the forgotten. Nobody poisoned the well. Everyone drew from it and poured back something a little flatter than they took, each draught reasonable, and generation by generation the models lose the world and come to echo only themselves, until what they know is a bland average of an average of an average, and the truth in the tails is gone past recovering.

## Arc

The bend is this: training each new model on the output of the last is the cheap and sensible thing for one builder, and done down the generations it thins the rare cases to nothing, so the models forget the world and converge on a self-referential mean.
It runs on a learner that undersamples the tails feeding a pool that cannot tell the made from the real.
A model fits the distribution it is shown, and fits its dense middle far better than its sparse edges: the rare event is seen too seldom to be learned, so every generation of samples it produces is a little poorer in the tails than the data it trained on. That is no defect to fix, it is what learning from finite samples is. For one model it is harmless, a shade of lost variance no one would notice.
And the shade compounds, because the samples go back into the pool. The open commons of data fills with model output, unmarked, mixed indistinguishably with the real, and the next builder, drawing the abundant cheap data at hand, trains on a corpus already thinned, and produces samples thinner still, and pours them back. So the loss feeds the loss: each generation learns from a world narrowed by the last and narrows it again, the tails going first, then the variance, then the shape itself, the distribution creeping toward a low, flat average that resembles the world less with every turn. Multiply that across every model drinking from and pouring into one shared pool, and the commons of real data is not depleted but contaminated, its fidelity recursed away.
None of it is malice or folly. Training on the data at hand is what every builder sensibly does, machine-made text reads as well as any and costs far less to gather, and no one publishes model output meaning to wreck the well: the collapse is authored by no poisoner and emerges from the sum, a learner that must undersample the rare and a pool that cannot mark the made from the real. What is efficient for each builder and each generation is, in aggregate, the forgetting of the world.
Keep the well: hold back a store of genuine human data, mark provenance so the real can be told from the made, blend real data into every training run and never train on output alone, and the tails can be held open: but real data is finite and slow and dear where synthetic is endless and instant and free, marking provenance asks every publisher to label what they need not, and any one builder gains by drinking the cheap pool while others pay to keep it clean, so the well is kept only against the price of every builder and the abundance of the made at once, and the store of true data, once the commons is fouled, is a fixed and dwindling thing.

## Company

**Pitch**

- [Data at Hand](pitch_data_at_hand.md)

**Personas**

- [The Model](persona_the_model.md)
- [The Trainer](persona_the_trainer.md)
- [The Pool](persona_the_pool.md)
- [The Wellkeeper](persona_the_wellkeeper.md)

**Positions**

- [Model](position_model.md)
- [Trainer](position_trainer.md)
- [Pool](position_pool.md)
- [Wellkeeper](position_wellkeeper.md)

**Plans**

- [Generate the Likely](plan_generate_the_likely.md)
- [Train on What's There](plan_train_on_whats_there.md)
- [Take It All In](plan_take_it_all_in.md)
- [Keep the Well](plan_keep_the_well.md)

**Places**

- [The Corpus](place_the_corpus.md)
- [The Common](place_the_common.md)
- [The Vault](place_the_vault.md)

**Processes**

- [Generating](process_generating.md)
- [Recursing](process_recursing.md)
- [Collapsing](process_collapsing.md)
- [Preserving](process_preserving.md)

**Pieces**

- [The Distribution](piece_the_distribution.md)
- [The Tail](piece_the_tail.md)
- [The Made](piece_the_made.md)
- [The Real Well](piece_the_real_well.md)
- [Model Collapse](piece_model_collapse.md)

## Triggers

**[The Draw](plot_the_draw.md)**
A builder trains a new model on the corpus at hand, and the model learns the distribution, its dense middle far better than its sparse tails. The Trainer feeds it the abundant data, and the Model fits the world it is shown and misses the rare. Closes when the model has learned the common well and the rare barely, ready to generate a world a shade narrower than the one it saw.

**[The Give-Back](plot_the_give_back.md)**
Cue: the model's output flows back into the open pool. The Model generates the likely and drops the rare, and the Pool takes it all in, the made mixed unmarked with the real. Closes when the commons of data holds a growing share of model output, indistinguishable from the genuine and poorer in the tails.

**[The Draught](plot_the_draught.md)**
Cue: the next builder needs data, and the cheap abundant pool is right there. The Trainer draws again, sensibly, from a common now part synthetic, and trains the next model on a corpus already thinned. Closes when a new generation has learned from a world narrowed by the last, and is set to narrow it again.

**[The Forgetting](plot_the_forgetting.md)**
Cue: the loss feeds the loss, generation over generation. The Model and the Pool turn each other downward, the tails gone first, then the variance, then the shape, the distribution creeping toward a flat self-referential mean. Closes when the rare is forgotten past recovering and the models resemble the world less than they resemble each other.

**[The Well](plot_the_well.md)**
Cue: someone moves to keep the well. The Wellkeeper would hold back real data, mark provenance, and blend the genuine into every run, against the Trainer's pull to the cheap abundant pool, the free-rider's gain in drinking it, and a store of true data finite and already fouled. Closes when the well is kept and the tails held open ... or the cheap pool is drunk once more, and the collapse runs on.

## Stakes

Whether a field can train on its own abundant output and still remember the world.
Every plot but the last moves the same way: toward the cheap pool, which each builder is right to draw and all are narrowed by drawing, and away from the kept well, which would hold the tails open and which asks real data where synthetic is free and provenance where none is required. The production cannot make training on model output preserve the rare, because a learner fits the dense middle and misses the sparse edges, so each generation of samples is poorer in the tails than its training data, and the loss compounds as the output feeds the next run: the narrowing is the learning working on finite samples, not failing. It can only show that no one poisoned the well, that drawing the data at hand is sensible and machine-made data reads fine and no one pours back output meaning harm, and that the one move that keeps the world in the models, holding back and blending real human data, costs the dear and finite against the free and endless and is undone by any builder who drinks the cheap pool while others keep it clean, so the efficiency is real and the forgetting is real and the more the models feed on themselves the less of the world they hold.
