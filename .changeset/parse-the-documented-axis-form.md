---
---

Make the axis parser accept the form the contract documents. The example writes
a trailing YAML comment on the sign line and the parser anchored on end-of-line,
so a misfit declared that way came back as `axis without sign` and failed the
build. Every declaration in the house happened to omit the comment, so no count
could see it.
