---
---

The pre-push hook ran the guard alone. It now runs every wall the house
declares, after a lockfile sync check, and drops the git environment first
so a suite run from the hook sees what a shell gives it. Taken from the kit's
blueprint as stamped. Ships nothing.
