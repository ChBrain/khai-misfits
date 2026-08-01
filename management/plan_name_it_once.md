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

Three rules. The first two are computed; the third is judged, and it is the one
the house keeps breaking.

**One title names one element.** An element's identity is its **kind plus its
title**, and the kind is already carried three times: in the filename, in the
`khai:` frontmatter, and in the play's section heading. So a title may not be
reused across kinds. A piece and a plot both called "The Spiral" are not one
concept shown twice: they are two elements a reader cannot tell apart in any
sentence that does not carry a link. Repetition inside one kind is a different
matter and is not what this forbids.

**The file is filed, not named.** A registry entry carries two fields, `id` and
`title`, and only the `id` is ever sorted: `buildItems` reads the directory
names, orders them by `localeCompare`, and writes them out in that order, while
nothing sorts on `title` at all. So the house already has both a card and a
spine, and has been writing the same string on each. Take the **leading** article
off the `id` and the filename; leave the `title` and the H1 holding the name
whole. This is the older practice and it is exactly this narrow: the article that
drops is the leading one, never one inside the title, and the path to a book runs
genre, then author, then title without its article, which is the path the house
browses as kind, then misfit, then title.

The cost of not doing it is measured. Of 211 staged ids, **97 sort under a single
letter** while the next-largest holds 16, so nearly half the registry browses as
one undifferentiated block. Of 7331 element files, **4828 carry `_the_`**, four
dead characters between the kind and the word that distinguishes it, so every
listing, every completion and every glob is read around the article rather than
by the name.

What the split costs is derivability: a filename no longer guessable from its
title, across 4828 files. A library pays that price and calls it worth paying.
This house need not pay it at all, because the strip is a function: an `id` is
its `title`, slugified, with a leading article removed. Gate that and the
filename is computed from the title rather than maintained beside it, which is
the house's own standard turned on itself. The gate is khai-tests' and it is not
written yet, so until it is, the two are held by hand.

**A conceptual name takes no article.** Either the element is a particular and
carries a real name, or it is conceptual and goes bare. What it may not do is
both: "The Consulting Room" claims a definiteness its own content never earns,
since what it shows is a patient present now and a culture that will take days,
which is **any** consulting room where a drug is given before the organism is
known. The article promises the reader a particular room and then hands them the
type.

The filing split does not reach this one. Filing decides where the name sorts;
this decides whether the name is honest, and the reader meets it in the `title`,
which the split leaves alone. So the two are independent: a name may file
correctly and still promise a particular it does not hold.

In this house the answer is settled: **khai-misfits is conceptual by design**, so
nothing is promoted to a particular and everything goes bare. A house whose
elements are concrete (the `khai-plays-*` line) resolves the other way, and every
other house reads it from its own shape. The rule is the same everywhere; the
answer is the house's.

The two rules run as two campaigns, and they are safe to run apart. The filing
strip is mechanical and reversible in judgement: nothing a reader reads changes,
so it can land before the naming question is anywhere near settled.

## Orders

Name the thing, not the-thing. When authoring, take the bare form first and add
an article only where the element is genuinely a particular and the file shows
what makes it that one and not another. Then file it bare regardless: an `id` is
its `title` slugified with any leading article removed, whichever way the naming
went.

**Filing is a strip and only a strip.** Take off the leading article; an article
inside stays, because it belongs to the phrase. "The Colour of the Bike Shed"
files as `colour_of_the_bike_shed` and keeps its title whole, so nothing has to
be re-cut to be filed and no title is ever damaged in the name of sorting. Where
a strip once looked awkward it was because the strip was reaching the reader; it
no longer does.

**Renaming is authoring.** Changing what the reader reads is a decision about
that element, taken one at a time against its own file, and it is flagged rather
than automated. A title that does not read once bare is re-cut by hand or left
alone; it is never mechanically shortened.

A rename is never only a title. Filing moves the directory, the filename and
**every inbound link**: the play's Company and Triggers, the piece's Yearbook,
the persona's Action, the process Echo, the plan's Orders and Implementation, and
the warrant's Encoding. Renaming moves the `title` frontmatter, the H1 and the
registry entry. Either one that leaves a limb behind is a broken misfit, not a
tidier one.

## Implementation

Everything under `misfits/**`, every kind: play, pitch, persona, position, plan,
place, process, piece, plot. The play and the pitch are not exempt: the misfit
directory is the registry `id`, so a play is precisely where the article costs
most.

Two of the three rules are computed. `khai-tests` gates the first as
`titleCollisions`, and a reused title fails conformance. The filing rule is
computable and not yet computed: the check is that an `id` equals its `title`
slugified with a leading article removed, and it belongs in khai-tests as its own
change. Until it lands the filing is held by hand, which is the weaker state and
is why the strip runs as one sweep rather than drifting in per misfit. The third
rule is not computable at all and is held by the reading.

Held separate, and not covered by this plan: **49 staged titles are the canonical
concept name** (`Moral Hazard`, `Rent-Seeking`, `Dutch Disease`), against the
house rule that a title hides the textbook name the way Bad Coin hides Gresham.
That is a retitling campaign and its own decision.

## Targets

- [ ] no title is shared by two kinds inside one misfit
- [ ] no `id` or filename opens with an article, in any kind
- [ ] every `id` equals its `title` slugified with a leading article removed
- [ ] an article kept mid-`id` is part of the phrase, not a stripped leading one
- [ ] no title was re-cut to make it file: filing strips, it never rewrites
- [ ] every filing move carried its directory, filename and every inbound link
- [ ] khai-tests computes the filing rule rather than the house holding it by hand
- [ ] a particular that keeps a real name shows in its own file what makes it that one
