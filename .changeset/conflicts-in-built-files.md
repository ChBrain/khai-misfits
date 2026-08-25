---
---

Say what a conflict in a built file is. The rebuild-not-merge rule already covers which
branches owe a rebuild; it did not say what to do when git actually reports a conflict
in one of the generated artefacts, and the instinct there is to resolve it, which is
right everywhere else in the repository and wrong here.

Both sides of such a conflict are outputs. Neither is a source, so choosing between them
or splicing them produces a file no build would emit: it fails the drift gate when the
difference is large and passes quietly when it is small, which is worse. Discard both
and rebuild.

The occasion was a misfit pull request whose index conflicted after a homonym
declaration landed first. Copilot was asked to clear it, hand-edited docs/SCIENCE.md,
and reported the branch clean while it was still based on the commit before the one it
conflicted with. Transcribing two changed keys happens to land on the right characters,
which is exactly why the method survives being used.
