---
"@chbrain/khai-misfits": minor
---

Add the misfit All at Once: a staging of the cache stampede, where a popular value is cached with a time to live so the expensive backend is spared while it is warm, but because the value is popular its expiry is a single shared instant, so every concurrent request misses at once and each correctly recomputes it from the backend, and the very popularity that made caching worthwhile concentrates all the misses into one synchronized spike that overwhelms the backend the cache was there to protect, no request out of line and nothing misconfigured, so the fix is to de-synchronize or collapse the recomputations, refreshing before the shared cliff or letting one recompute while the rest wait, not to compute less.
