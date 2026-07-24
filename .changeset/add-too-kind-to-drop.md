---
"@chbrain/khai-misfits": minor
---

Add the misfit Too Kind to Drop: a staging of bufferbloat, where a buffer placed before a bottleneck link to absorb bursts and avoid dropping packets, made deep because memory is cheap and a dropped packet looks like waste, conceals the loss-and-delay signal that congestion control depends on to back off, so the sender never slows, the buffer fills into a persistent standing queue, and latency balloons while throughput still reads full, the very cushion meant to protect throughput destroying responsiveness, until active queue management drops or marks packets early to restore the signal.
