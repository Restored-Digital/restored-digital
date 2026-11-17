## What this changes

## Before merging

- [ ] Voice check: run `node scripts/check-first-person.mjs` and review every hit. Any sentence that commits Restored Digital to something (ownership, access, prices, fees, refunds, cancellation, timelines, what's included or excluded) must use "we". "I" is allowed only in the About story and copy that makes no commitments.
- [ ] If `data/pricing.json` changed, rerun `node scripts/build-pricing.mjs` and commit `pricing.html` with it.
- [ ] Lines marked [KEEP VERBATIM] in the pricing copy are unchanged, or the change was approved first.
- [ ] Subcontractors: if Restored Digital now uses a subcontractor, revisit "you talk to me, not a call center" in the About card on the home page.
