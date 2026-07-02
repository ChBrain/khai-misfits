# CLAUDE.md, the Misfits house

This is the Misfits production house (`khai-misfits`), raised by
khai-stage. The misfits are written separately, in khai-playwright mode.

**Voice first.** Operate under the
[management instructions](management/management_instructions.md): the khai
**voice and mechanics** (who speaks, the company, management orders). _Then_ this
file is the **coding contract** for the house. Voice and mechanics there; coding
rules here. The order matters: management voice first, coding second.

## Branching

Computed, not chosen. Let the guard pick the lane:

```
npx khai-guard branch <topic>
```

- `misfit/<topic>` owns `misfits/**` (the productions).
- `governance/<topic>` owns the gates and config (`.github/**`, `.husky/**`,
  `khai-guard.config.json`, `tests/**`, `CLAUDE.md`, `README.md`, `REFERENCE.md`, `REFERENCES.md`, `management/**`).
- `changeset-release/*` is a bot-controlled general lane for version releases.

A **management order** (`management/orders/**`) is a **rider**: an order directs
work in any lane, so it rides the lane of the change it drives. Write the order
beside that change and the guard folds both onto one branch (an order that
restages a misfit lands as one `misfit/` PR); committed alone, an order homes to
`governance/`. So an order and the change it commands are one PR, never two.

Never `--no-verify`. Never merge; open the PR and stop.

## Authoring

Cut to fit, computed not copied. A misfit is one **play**, and the play is the
only fixed element; the pitch is the single hook. Every element below them
(personas, positions, plans, places, processes, pieces, plots) is cast to the
concept's own load-bearing vectors, one per vector and no filler, never a uniform
mould stamped from a sibling misfit. Fluid is not loose: wire what you name, hold
the floor. The standard is the Playwright's standing plan,
[Cut to Fit](management/plan_cut_to_fit.md); read it before authoring or
restaging a misfit.

## Versioning

The minor version IS the misfit count, computed not chosen. The `version` script
runs `khai-tests registry build`, which sets the version from the misfit count:
`0.<count>.0` (the minor is the count, the patch resets to 0), reconciling both
`package.json` and `registry.json`. The build is the single writer of the
version; never hand-edit it.

- **Adding a misfit** -> no changeset. The misfit PR runs `khai-tests registry build`,
  which moves the minor to the new misfit count and resets the patch to 0
  (`0.<count>.0`); `changeset publish` ships it. A per-misfit changeset would
  re-bump the patch on top of the minor the build already moved, the
  `0.<count>.1` drift to avoid.
- **A non-misfit change** (governance, formatting, a fix to existing content) ->
  a `patch` changeset; it ships at the same misfit count.

A non-zero major resets the minor while the count keeps climbing, so a house
stays `0.x`; the numbering guard rejects a major bump.

## Protection

Content is CC-BY-NC-SA, code is MIT (see `LICENSE` and `LICENSE-CODE`); the
source is credited where it is in the public domain, never claimed. `main` is
protected: pull requests and the gate checks are required before merge.
