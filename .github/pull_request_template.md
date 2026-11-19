## What this changes

## Before merging

- [ ] Voice check: run `node scripts/check-first-person.mjs` and review every hit. Any sentence that commits Restored Digital to something (ownership, access, prices, fees, refunds, cancellation, timelines, what's included or excluded) must use "we". "I" is allowed only in the About story and copy that makes no commitments.
- [ ] If `data/pricing.json` changed, rerun `node scripts/build-pricing.mjs` and commit `pricing.html` with it.
- [ ] Lines marked [KEEP VERBATIM] in the pricing copy are unchanged, or the change was approved first.
- [ ] Subcontractors: if Restored Digital now uses a subcontractor, revisit "you talk to me, not a call center" in the About card on the home page.
- [ ] Care for your existing site (pricing page): text matches Care for Your Existing Website SOW v1.1. The two [KEEP VERBATIM] lines (pre-existing problems, and the hosting company line) are unchanged and sit with the prices they qualify. The $150 and $100/month figures come from `data/pricing.json`.
- [ ] Quick fixes (pricing page): text matches Single Services SOW v2.1. Email Health Check ($125) and Google Business Profile Cleanup ($150) come from `data/pricing.json`. The payment line says "plus sales tax where required".
- [ ] Not offered: search the whole site for each term in `notOffered` in `data/pricing.json` (currently "rescue"), and for any account-recovery wording. There should be no hits.
- [ ] Home page: the line under the hero ("Already have a website?...") links to `pricing.html#existing-site` and says "we".
- [ ] Source of truth: every changed price, promise, time frame, inclusion, or service appears in the "Site source of truth" tab of the pricing copy doc, or is listed there as approved wording. Anything else was asked about first.
