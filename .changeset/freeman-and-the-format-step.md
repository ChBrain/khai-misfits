---
---

Declare Freeman's third person, and write the format step into the rebase procedure.

`Freeman` was already declared at `["J Leiper", "Jo"]`, Jo Freeman carrying The
Tyranny of Structurelessness in No One in Charge, and the organizational-ecology
Freeman the slate wants for structural inertia is John, a third person. That is the
namesake table's bottom row, where the declaration goes first: the moment that Origin
row lands the occurrence would be unresolved and `npm test` would fail. The form is
safe in any order here, since the prefix arm requires a trailing space and `Jo` does
not absorb `John`, but it is written longest-first by the house convention. It owes no
cells: the wall reports zero unresolved and zero unreachable with it in.

The second half is the reading of a CI failure this house just had. `npm test` is not
the `khai-tests` job: that job runs `format:check` first and exits on failure, so a
formatting fault fails CI having never reached the suite, and `khai-tests` reads red
while `npm test` is green locally. The source is single and the reason it is missed is
that the other two builders do not share it: the registry and science builds emit
Prettier-clean output, and `--build-refs` writes its Origin tables compact where
Prettier wants them aligned, so a rebuilt `REFERENCES.md` is unformatted every time and
a pass that formats the misfit directory never reaches it. The rebase procedure now
carries the format step and asks for both gates before pushing.

Governance only; ships no package content.
