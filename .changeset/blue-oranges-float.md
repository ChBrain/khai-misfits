---
---

Sync the kit: khai-guard and khai-language to current.

**khai-guard `^0.1.24` -> `^0.3.0`.** Two minors behind, and a caret does not
cross a minor on 0.x, so the range could never have caught up on its own. 0.2.1
is the release that stopped a renamed play reading as a new play, which this
house has no campaign for today but would have met the moment it renamed
anything; 0.3.0 carries the rest.

**khai-language `^0.1.23` -> `^0.1.25`, where the tree already held 0.1.25.**
The declared range was BEHIND what was installed, which is the drift running the
other way and is worth naming for that reason: an install had quietly satisfied
the house with a newer package than its manifest asked for, so the manifest was
wrong and nothing was broken, and a clean install on a fresh machine would have
silently stepped the house back two patches -- including out of the chapter-set
fix that decides how much of a misfit's prose the language gate reads at all.

khai-tests is already at `^0.3.3` from the support-vocabulary pass.

`npm test` 21 passed, `npm run format:check` clean, the shared-work wall holds at
zero. Ships nothing.
