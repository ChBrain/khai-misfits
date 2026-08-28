---
---

Adopt the kit's support vocabulary and retire the local one.

khai-tests 0.3.3 gives `roleOf` a `supportingMarkers` fallback symmetric with
`contrastMarkers`, returns it from `loadWorkPolicy`, and honours it in the
shared-work wall. So this house's two workarounds go:

- `loadPolicy` re-read `supportingMarkers` from the config itself, because the
  kit's loader normalised to `{ contrastMarkers, canon, aliases }` and dropped
  every other key. It now returns `loadWorkPolicy(root)` and nothing else.
- `findCompoundWorks` decided the exemption with its own `isContrast(row,
supporting)` call. It now asks `roleOf(row, policy) === "support"`, so one
  reading of a role serves this instrument and the wall alike.

**The reason the override goes rather than merely becoming redundant** is that
while it stood, a declared background exempted `--compound` and did not exempt
`npm test`. That was recorded as an accepted limit on the grounds that the wall
holds at zero shared works, which was true about today and wrong about the shape:
two checks reading one policy and disagreeing only becomes visible on the first
real collision, where an author declares a row background, watches one instrument
clear it, and gets a red build with no explanation.

`--compound` reports identically before and after -- 10 background, 3 canon,
2 contrast -- which is the point: the behaviour was already right here, and what
changes is that the wall now agrees with it.

Ships nothing.
