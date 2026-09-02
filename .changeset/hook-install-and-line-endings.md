---
---

The pre-push hook was stamped and never installed: `package.json` had no
`prepare` script, so `npm ci` wired nothing and the last gate before a push ran
only where somebody had run husky by hand. `prepare: husky` installs it. Beside
it, `.gitattributes` normalises line endings to LF with prettier set to match,
and `.claude/` is ignored as tooling state. Ships nothing.
