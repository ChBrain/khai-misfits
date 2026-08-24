---
"@chbrain/khai-misfits": patch
---

Move the house to the current kit: `khai-tests` `^0.2.8`, `khai-guard` `^0.1.24`,
and honest ranges for `khai-language` and `khai-review`, which were declared at
`^0.1.0` while the lockfile held 0.1.23 and 0.1.4 -- a range that admitted
anything and therefore said nothing about what the house runs.

Nothing in the bump is a migration. khai-guard 0.1.24 is a `drift --json` fix on
the no-driftPolicy path, and khai-stage 0.0.24 carries the two blueprint stamps
this house already has by hand (the drift alarm and the lockfile sync). The
walls that made the sibling cultures house a content campaign, `titleCollisions`
(0.2.2) and the science keying (0.2.6), were already in force here and the house
already passes them.

`registry.json`, `docs/SCIENCE.md` and `REFERENCES.md` all rebuild byte-identical
under the new kit, so no generated artefact rides along.
