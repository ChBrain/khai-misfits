---
"@chbrain/khai-misfits": patch
---

Sync the lockfile at the end of the version run, and stamp the management
README. The lockfile had fallen three releases behind the manifest (0.305.0
against 0.308.0) because nothing rewrites it after the version moves -- and in
a house the version moves twice, since `khai-tests registry build` sets it from
the play count after `changeset version` has already bumped it. The sync
therefore runs last, after every writer of the version.
