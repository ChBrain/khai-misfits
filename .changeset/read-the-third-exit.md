---
---

Read `workPolicy.supportingMarkers` from the config directly. The kit's
`loadWorkPolicy` normalises to `{ contrastMarkers, canon, aliases }` and drops
every other key, so the third exit declared in #670 was in the config and
nowhere else: `--compound` read an empty list and reported the unexempted count
unchanged, which is indistinguishable from no cell having declared a marker yet.
