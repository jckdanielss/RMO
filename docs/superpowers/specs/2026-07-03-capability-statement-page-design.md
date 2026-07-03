# Capability Statement Page — Design Spec

## Goal
A professional, enterprise-grade Capability Statement page serving as both a marketing page and digital capability statement, supporting business development, partnerships, and procurement outreach.

## Entry point
Add a third card to the `BRANCHES` array in `src/sections-c.jsx` (services hub grid) — "Capability Statement" — with a "Learn More" button linking to `capability-statement.html`. Verify `.branch-grid` CSS accommodates 3 cards responsively; adjust the column rule if it's hardcoded for 2.

## New files
- `capability-statement.html` — root-level static shell, same script-include pattern as `services.html` (React/ReactDOM/Babel CDN + `sections-a.jsx`, `sections-c.jsx`, `capability-statement-page.jsx`).
- `src/capability-statement-page.jsx` — new page component. Follows `professional-services-page.jsx` conventions: `Nav`, `PreFooterCta`, `Footer`, `ToTop`, a local `useScrollReveal` hook, existing `Ic` icon set.

## Page sections

1. **Hero** — `<h1>Capability Statement</h1>`, short intro paragraph, primary CTA "Download Capability Statement" (button), secondary CTA "Contact Us" (via `contactHrefForCurrentPage()`). Styled with existing `.svc-page-hero`.
2. **Organization Overview** — reuses Mission/Vision copy already defined in `About()` (`src/sections-b.jsx`), styled with existing `.mv-card`. Adds new short "Organization Overview" and "Value Proposition" copy (net-new text, written for this page).
3. **Core Competencies** — 6 cards in `.svc-card-grid`: Diversity Certifications, Supplier Diversity Support, Business Growth Programs, Market Readiness, Procurement Assistance, Strategic Business Consulting. Net-new short descriptions (1–2 sentences each), reusing existing `Ic` icons (badge, handshake, rocket, target, doc, chip).
4. **Professional Services** — short overview paragraph + 2 cards (`.svc-detail-card`) linking to `services/professional-services.html`:
   - Diversity Certifications
   - RFP Bid Package Assistance

   **Assumption:** both cards link to the same parent page since it covers both topics as sections and currently has no anchor IDs to deep-link into. If per-section anchors are added later, update these hrefs.
5. **Business Growth Programs** — short overview paragraph + 4 cards linking to `services/business-growth-programs.html`:
   - Market Ready Program
   - Speaker Series
   - Impact Reports
   - Startup Guidance

   **Assumption:** same as above — all 4 link to the parent page (no anchor IDs exist yet).
6. **Why Partner With RMO** — a highlight grid mixing a couple of stats (e.g., "400+ Clients Certified", drawn from `history-page.jsx`) with strength statements (certification breadth across 6 levels, end-to-end support from certification through contract, dedicated post-certification growth programs). Styled after the stat-strip / `.obj-card` patterns already in use.
7. **Capability Statement Download** — a visually prominent banner/card. Primary button "Download Capability Statement (PDF)", styled as a normal primary CTA (`.btn.btn-primary` or equivalent), pointing to a placeholder path: `capability-statement/RMO-Capability-Statement.pdf`.

   **Assumption / placeholder:** the PDF file does not exist yet. A code comment above the href marks this as the swap-in point — replacing the file at that path requires no code changes. Small helper text under the button ("Prefer to talk it through? Contact us.") links to Contact Us so there's no dead-end if the file is missing.
8. **Final CTA** — reuses the existing `<PreFooterCta />` component unmodified (already reads "Book a free consultation").

## Non-goals / explicitly out of scope
- No new shared components beyond the one new page.
- No new npm/JS dependencies.
- No anchor IDs added to `professional-services.html` / `business-growth-programs.html` (cards link to the parent page as a whole).
- No real PDF — placeholder path only, documented inline.

## Reused styling
`.svc-page-hero`, `.svc-card-grid`, `.svc-detail-card`, `.mv-card`, `.branch-card`, `.section-head`, `.eyebrow`, `.btn`/`.btn-primary`, existing `Ic` icon set. No new CSS classes anticipated beyond possibly a `.branch-grid` column-count tweak for 3 cards and a small download-banner treatment (built from existing tokens/classes, not a new component system).

## Testing
Manual verification: page renders via `capability-statement.html` in a browser, nav/footer intact, all card links resolve to existing pages, responsive at mobile/tablet/desktop widths, reveal-on-scroll animations fire, services hub shows 3 cards correctly.
