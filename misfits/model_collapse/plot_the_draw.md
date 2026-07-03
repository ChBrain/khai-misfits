---
khai: plot
title: "The Draw"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-03"
---

# Plot: The Draw

## Taxonomy

[Model Collapse](play_model_collapse.md)

## Owner

- Project: khai-misfits

## Cue

[The Corpus](place_the_corpus.md), a builder training a new model on the data at hand.
The distribution laid out in the corpus, its middle dense and its tails sparse, ready to be learned.

## Action

[Generating](process_generating.md): [The Trainer](persona_the_trainer.md), holding [the trainer's seat](position_trainer.md), feeds the model the abundant data, while [The Model](persona_the_model.md), holding [the model's seat](position_model.md), fits the world it is shown and misses the rare.

## Stage

[The Trainer](persona_the_trainer.md), on [Train on What's There](plan_train_on_whats_there.md), assembles the abundant corpus and hands it to the model, taking the data at hand as the world.
[The Model](persona_the_model.md), on [Generate the Likely](plan_generate_the_likely.md), learns the dense middle in full and the sparse tails barely, ready to give back a world a shade narrower than it saw.

## Tension

The faithful learner is the one that quietly drops the rare.
There is nothing to fault: training on the data at hand is sensible, and a model can only learn the rare as often as it appears, which is seldom. But fitting finite samples means mastering the middle and missing the edges, so the plot closes with the model faithful to its training and already a fraction poorer in the tails, set to generate a world narrower than the one it learned.
