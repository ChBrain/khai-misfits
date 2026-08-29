---
khai: order
title: "Rehearse the Move"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-08-29"
---

# Order: Rehearse the Move

## Direction

Step 3 of the workspace migration is the maintainer's calendar and step 4 is
blocked on a kit fix, so neither can be done from here. What can be done is
perform step 4 in full against a scratch clone and read what breaks, which is the
same instrument step 1 used and the same reason: a defect found on the day of the
move is found while eleven thousand paths are in motion.

The rehearsal was the whole of step 4. The content moved by `git mv`, the
manifests split into a private workspace root and a package, the licences copied
beside the package manifest, the one management link into the house repointed,
and then every gate the house owns run against the result.

**It comes out green**, which is the first thing worth recording, because until
now the post-move tree had two known failures. 67 of 67 tests pass, the format
check is clean, the three builders run against the package root, and the tarball
carries 11,322 files with both licences and every misfit's warrant in it. Every
instrument reads exactly what it reads flat: 2071 index rows and no shared work,
five opposed pairs and none undeclared, 81 declared surnames with none unresolved
and no unreachable form, no suffix key, 18 hidden compound works of which one is
unexempted, 67 mixed cells, and a registry of 327 at 0.327.0.

**And the move is one pull request, in lane, with no split.** Of 11,327 changed
paths, 11,322 come back `R100` and are exempt. The five that remain are the root
manifest and the register, both modified, and the package manifest and the two
licences, all three added. Every one of them is `shared` or a rider under the
config step 2 landed, so `checkBranchScope` passes the set on a governance branch
**and** on a misfit branch, and `advise` homes it to governance on the strength of
the register alone. Without step 2's `packages/*/LICENSE` and
`packages/*/package.json` those three would be unowned and rejected.

**The rehearsal found one new requirement, and it is the sharpest trap in the
migration so far.** `.prettierignore` carries `docs/SCIENCE.md`, and that pattern
is **anchored**: a slash anywhere but the end binds it to the ignore file's own
directory. The ignore file does not move and the index does, so on the day of the
move the pattern stops matching and nothing announces it. The generated index
simply becomes formattable, and the trap then closes both ways. Left alone,
`format:check` fails, which is the first step of the `khai-tests` job, so the
report reads `khai-tests` red while `npm test` is green locally. Formatted, the
drift gate fails saying the index is out of date and to run the science build,
which is a **false diagnosis**: the index is not stale, it has been reformatted,
and running the build it names changes nothing. One cause, two red lights, and
neither of them names it.

**It is fixable now and therefore is.** Both spellings, an addition exactly as
step 2's lane globs were, so the file is right before and after and step 4 does
not have to remember it.

**And the kit blocker is worse than step 2 reported.** `.husky/pre-push` runs
`npx khai-guard` and `npx khai-guard branch-check`, so the `ENOBUFS` on the
move's 1.4 MiB diff fires at `git push`, on the maintainer's own machine, before
CI is ever reached. The house's standing rule is never `--no-verify`. So the kit's
`maxBuffer` is not a CI fix that can be worked around locally; **it gates the push
itself.**

## Orders

Rehearse step 4 in full against a scratch clone rather than reasoning about it,
and run every gate the house owns against the result, because the two failures
step 1 predicted were both real and a third was waiting that no amount of reading
would have found.

Land the `.prettierignore` repair now and as an addition, on the rule step 2
established: a change that is harmless in the current layout and required in the
next belongs before the move, not in it.

Record the exact five non-exempt paths and their lane verdict, so the step 4
branch can be checked against a list rather than judged.

Record that the pre-push hook fires the kit blocker locally, since a blocker
believed to be in CI invites the reading that the move can be pushed and fixed
afterwards.

Do not fold the remaining step 4 edits into anything else. The move being a pure
`git mv` is what earns the `R100` exemption on 11,322 paths, and every edit that
rides along is a path that must be owned on its own account.

## Implementation

The rehearsal is performed in a scratch clone and discarded; nothing of it is
committed except the one repair it justifies. `.prettierignore` gains
`packages/*/docs/SCIENCE.md` beside `docs/SCIENCE.md`, with the anchoring rule and
the two-red-lights failure written into the comment beside it, since the next
person to read that file will be reading it because one of the two lights is on.

The findings are appended to the Playwright's standing slate,
[Fill the Season](../plan_fill_the_season.md), beneath step 2's entry.

## Targets

- [x] step 4 is performed in full against a scratch clone and every gate is run on the result
- [x] the post-move tree is green: 67 of 67, format clean, three builders, tarball with both licences
- [x] every instrument's count is confirmed identical to the flat canary
- [x] the five non-exempt paths are enumerated and their lane verdict recorded
- [x] the anchored `.prettierignore` pattern is repaired as an addition, before the move
- [x] the pre-push hook is recorded as the place the kit blocker actually fires
