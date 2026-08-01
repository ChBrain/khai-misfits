---
khai: plan
title: "Name It Once"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-31"
status: active
---

# Plan: Name It Once

## Taxonomy

A **standard**: what an element is called. The Playwright holds it beside
[Cut to Fit](plan_cut_to_fit.md), which sets how many elements a misfit carries;
this one sets what each is named. Shape there, names here.

## Owner

- Owner: [The Playwright](position_playwright.md)

## Direction

Two rules, and the second is the one the house keeps breaking.

**One title names one element.** An element's identity is its **kind plus its
title**, and the kind is already carried three times: in the filename, in the
`khai:` frontmatter, and in the play's section heading. So a title may not be
reused across kinds. A piece and a plot both called "The Spiral" are not one
concept shown twice: they are two elements a reader cannot tell apart in any
sentence that does not carry a link. Repetition inside one kind is a different
matter and is not what this forbids.

**A conceptual name takes no article.** Either the element is a particular and
carries a real name, or it is conceptual and goes bare. What it may not do is
both: "The Consulting Room" claims a definiteness its own content never earns,
since what it shows is a patient present now and a culture that will take days,
which is **any** consulting room where a drug is given before the organism is
known. The article promises the reader a particular room and then hands them the
type.

In this house the answer is settled: **khai-misfits is conceptual by design**, so
nothing is promoted to a particular and everything goes bare. A house whose
elements are concrete (the `khai-plays-*` line) resolves the other way, and every
other house reads it from its own shape. The rule is the same everywhere; the
answer is the house's.

And the cost of the article is not only that it is a fill word. It is filed under
T. Of 211 staged titles, **97 sort under a single letter**, so nearly half the
registry browses as one undifferentiated block and the next-largest letter holds 16. Of 7331 element files, **4828 carry `_the_`**, four dead characters between
the kind and the word that distinguishes it, so every listing, every completion
and every glob is read around the article rather than by the name. Libraries
solved this long ago by ignoring a leading article or inverting it. The house
does not need the workaround if it does not create the problem.

## Orders

Name the thing, not the-thing. When authoring, take the bare form first and add
an article only where the element is genuinely a particular and the file shows
what makes it that one and not another.

When correcting an existing name, **strip only the leading article**. An article
inside the title is part of the phrase and stays. And where the strip leaves a
title that does not read, do not ship the strip: **re-cut the title**. "The
Colour of the Bike Shed" is the case that proves it, since the triviality lives
in the shed and a mechanical strip keeps it while a clumsy rewrite loses it. That
is authoring, not tidying, and it is flagged for a decision rather than
automated.

A rename is never only a title. It moves the filename, the `title` frontmatter,
the H1, and **every inbound link**: the play's Company and Triggers, the piece's
Yearbook, the persona's Action, the process Echo, the plan's Orders and
Implementation, and the warrant's Encoding. A rename that leaves one of those
behind is a broken misfit, not a tidier one.

## Implementation

Everything under `misfits/**`, every kind: play, pitch, persona, position, plan,
place, process, piece, plot. The play and the pitch are not exempt: the registry
is the searchable index and the play title is what it sorts on, so they are where
the article costs most.

The first rule is computed, not judged: `khai-tests` gates it as
`titleCollisions` and a reused title fails conformance. The second is not gated
and is held by the reading, which is why it is written here.

Held separate, and not covered by this plan: **49 staged titles are the canonical
concept name** (`Moral Hazard`, `Rent-Seeking`, `Dutch Disease`), against the
house rule that a title hides the textbook name the way Bad Coin hides Gresham.
That is a retitling campaign and its own decision.

## Targets

- [ ] no title is shared by two kinds inside one misfit
- [ ] no title or filename opens with an article, in any kind
- [ ] an article kept mid-title is part of the phrase, not a stripped leading one
- [ ] a strip that reads badly was re-cut by hand, not shipped mechanically
- [ ] every rename moved its filename, frontmatter, H1 and every inbound link
- [ ] a particular that keeps a real name shows in its own file what makes it that one
