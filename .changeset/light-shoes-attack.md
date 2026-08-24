---
---

Move the release to changesets/action v2 with both of its breaking changes
handled at once, rather than waiting for dependabot to bump it and discover them
in production. v2 renames `version` and `publish` to `version-script` and
`publish-script`, and it refuses to run when a `GITHUB_TOKEN` env var disagrees
with its `github-token` input, which defaults to the built-in token. This
workflow carried both old patterns, so the bump would have failed the release
twice over -- and quietly, since the release runs after merge and gates nothing.

The sibling cultures house took that bump unprepared and lost four hours of
releases to it. The step here is now identical to the one that house ended up
with, which is the config its first green release run has since proven. Tooling
only; ships no package content.
