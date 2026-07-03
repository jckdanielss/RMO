# Capability Statement Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new Capability Statement page (marketing + digital capability statement) at `capability-statement.html`, reachable from a new "Learn More" card on the services hub.

**Architecture:** Static HTML shell (`capability-statement.html`) at repo root, mirroring `services.html`'s script-include pattern (React/ReactDOM/Babel UMD + `sections-a.jsx` + `sections-c.jsx` + new `capability-statement-page.jsx`). The page component is a single React function component rendered into `#capability-root`, reusing existing shared components (`Nav`, `PreFooterCta`, `Footer`, `ToTop`, `Ic` icon set) and existing CSS classes (`svc-page-hero`, `svc-card-grid`, `svc-detail-card`, `mv-card`, `section-head`, `eyebrow`, `btn`/`btn-primary`).

**Tech Stack:** Plain React 18 (UMD build) + Babel standalone in-browser JSX transform, no bundler, no test framework — matches every other page in this repo. There is no `package.json` / test runner in this project; "tests" in this plan are manual browser verification steps, consistent with how every other page here was built and verified.

## Global Constraints

- No new npm/JS dependencies (repo has none — CDN UMD scripts only).
- No new shared components beyond the one new page file.
- Reuse existing `Ic` icons; do not add new icons to the shared `Ic` object.
- Both Professional Services and Business Growth Programs cards link to their respective parent pages as a whole (`services/professional-services.html`, `services/business-growth-programs.html`) — those pages have no section anchor IDs yet, so no per-card deep links.
- The download button points to placeholder path `capability-statement/RMO-Capability-Statement.pdf` (file does not exist yet) — mark with a code comment as the swap-in point, and include a "Contact Us" fallback link next to it so the section isn't a dead end today.
- Follow existing file conventions: `/* global React, ReactDOM, ... */` header comment, local `useScrollReveal` hook per page (see `professional-services-page.jsx:4-14`), `ReactDOM.createRoot(...).render(...)` at file bottom.

---

### Task 1: Widen the services-hub branch grid to support 3 cards

**Files:**
- Modify: `styles/styles.css:2083-2087` (`.branch-grid` rule), `styles/styles.css:2205-2208` (mobile breakpoint block)

**Interfaces:**
- Produces: `.branch-grid` CSS class that lays out 3 `.branch-card` children as 3 columns on wide screens, 2 on tablet, 1 on mobile (existing card markup/classes unchanged).

- [ ] **Step 1: Change the base grid to 3 columns**

In `styles/styles.css`, replace:
```css
.branch-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: clamp(36px, 5vw, 60px);
}
```
with:
```css
.branch-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: clamp(36px, 5vw, 60px);
}
```

- [ ] **Step 2: Add a tablet breakpoint that drops to 2 columns**

Immediately above the existing `@media (max-width: 700px)` block for `.branch-grid` (around line 2205), add:
```css
@media (max-width: 1000px) {
  .branch-grid { grid-template-columns: repeat(2, 1fr); }
}
```
Leave the existing `@media (max-width: 700px) { .branch-grid { grid-template-columns: 1fr; } ... }` block as-is — it still wins at narrower widths since it comes after.

- [ ] **Step 3: Manual check**

Open `services.html` in a browser (e.g. `npx serve .` or any static server from the repo root, then visit `/services.html`). Resize the viewport: confirm 3 columns above ~1000px, 2 columns between ~700–1000px, 1 column below ~700px. (There will only be 2 cards until Task 2 — just confirm the grid math/columns look right with 2 cards spanning a 3-col grid; it'll auto-correct once the 3rd card is added in Task 2.)

- [ ] **Step 4: Commit**

```bash
git add styles/styles.css
git commit -m "Widen services branch grid to support a third card"
```

---

### Task 2: Add the Capability Statement card to the services hub

**Files:**
- Modify: `src/sections-c.jsx:16-35` (`BRANCHES` array)

**Interfaces:**
- Consumes: existing `Ic.doc` icon, existing `.branch-card` / `.branch-learn-btn` markup structure already used by the other two entries in `BRANCHES`.
- Produces: a third `BRANCHES` entry that renders identically to the existing two (no new markup needed — `ServicesLanding()` already maps over `BRANCHES`).

- [ ] **Step 1: Add the third branch entry**

In `src/sections-c.jsx`, in the `BRANCHES` array (after the "Business Growth Programs" entry, before the closing `];`), add:
```js
  {
    ic: Ic.doc,
    num: "03",
    title: "Capability Statement",
    desc: "One document that puts our certifications, competencies, and track record in front of the people who make procurement decisions.",
    href: "capability-statement.html",
    tags: ["Organization Overview", "Core Competencies", "Downloadable PDF"],
    accent: false,
  },
```

- [ ] **Step 2: Manual check**

Reload `services.html`. Confirm 3 cards render in the grid, the new "Capability Statement" card shows the doc icon, "03", the description, 3 tags, and a "Learn More" button. The button will 404 until Task 3/4 create the target page — that's expected at this point.

- [ ] **Step 3: Commit**

```bash
git add src/sections-c.jsx
git commit -m "Add Capability Statement card to services hub"
```

---

### Task 3: Build the Capability Statement page component

**Files:**
- Create: `src/capability-statement-page.jsx`

**Interfaces:**
- Consumes: `Nav`, `Footer`, `ToTop`, `PreFooterCta` (from `sections-a.jsx` / `sections-c.jsx`), `Ic` icon set (from `sections-a.jsx`), `contactHrefForCurrentPage()` (from `sections-a.jsx`), global `React`/`ReactDOM`.
- Produces: `CapabilityStatementPage` component rendered into `#capability-root` — no other file depends on this one.

- [ ] **Step 1: Write the file**

```jsx
/* global React, ReactDOM, Ic, Nav, Footer, ToTop, PreFooterCta, contactHrefForCurrentPage */
const { useEffect: useEffectCS } = React;

function useScrollRevealCS() {
  useEffectCS(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const CORE_COMPETENCIES = [
  {
    ic: Ic.badge,
    title: "Diversity Certifications",
    desc: "End-to-end support for MBE, WBE, DBE, and other certifications across local, state, and federal levels.",
  },
  {
    ic: Ic.handshake,
    title: "Supplier Diversity Support",
    desc: "Helping corporate and government supplier diversity programs certify and develop their diverse supplier base.",
  },
  {
    ic: Ic.rocket,
    title: "Business Growth Programs",
    desc: "Market readiness, speaker series, and startup guidance that turn a certification into a contract strategy.",
  },
  {
    ic: Ic.target,
    title: "Market Readiness",
    desc: "Sharpening your pitch and positioning so you're ready the moment a buyer takes a meeting.",
  },
  {
    ic: Ic.doc,
    title: "Procurement Assistance",
    desc: "Capability statements and RFP/bid packages written the way procurement officers actually read them.",
  },
  {
    ic: Ic.chip,
    title: "Strategic Business Consulting",
    desc: "Direct, practical guidance on the certifications, partnerships, and next steps worth pursuing.",
  },
];

const PRO_SERVICES_CARDS = [
  {
    ic: Ic.badge,
    title: "Diversity Certifications",
    desc: "Full application eligibility checks, required documents, and submission support across all six certifying levels.",
  },
  {
    ic: Ic.target,
    title: "RFP Bid Package Assistance",
    desc: "RFP responses built to be accurate, tight, and ready to submit — most bids are lost in the writing, not the work.",
  },
];

const GROWTH_PROGRAM_CARDS = [
  {
    ic: Ic.rocket,
    title: "Market Ready Program",
    desc: "A hands-on program that turns your certification into a contract strategy.",
  },
  {
    ic: Ic.badge,
    title: "Speaker Series",
    desc: "Monthly talks with procurement officers, certifying bodies, and business owners who've been through it.",
  },
  {
    ic: Ic.eye,
    title: "Impact Reports",
    desc: "Economic impact, social outcomes, and community reach, documented for corporate and government partners.",
  },
  {
    ic: Ic.rocket,
    title: "Startup Guidance",
    desc: "Getting the structure right and choosing the certifications worth pursuing first.",
  },
];

const WHY_PARTNER = [
  { stat: "400+", label: "Clients Certified" },
  { stat: "6", label: "Certification Levels Covered — Local to Federal" },
  { stat: "2", label: "Dedicated Service Lines — Certification & Growth" },
  { stat: "1", label: "Point of Contact From Application to Contract" },
];

function CapabilityStatementPage() {
  useScrollRevealCS();

  return (
    <React.Fragment>
      <Nav />
      <main>
        {/* 1. Hero */}
        <section className="svc-page-hero">
          <div className="wrap">
            <nav className="svc-breadcrumb reveal" aria-label="Breadcrumb">
              <a href="services.html">Services</a>
              <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
              <span aria-current="page">Capability Statement</span>
            </nav>
            <div className="reveal d1">
              <h1>Capability Statement</h1>
              <p className="svc-page-lead">
                A single, procurement-ready overview of who R Mo is, what we do, and the certifications and programs behind our track record.
              </p>
              <div className="prefooter-actions" style={{ marginTop: "24px" }}>
                <a href="#cs-download" className="btn btn-primary">Download Capability Statement {Ic.arrow}</a>
                <a href={contactHrefForCurrentPage()} className="btn btn-light">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Organization Overview */}
        <section className="pad-y" id="about">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Organization Overview</span>
              <h2>Who We Are</h2>
              <p>
                R Mo Global Diversity Solutions equips diverse businesses with the certifications, strategies, and visibility they need to compete for — and win — government and corporate contracts. We work on both sides of the table: certifying and preparing suppliers, and helping corporate and government partners build and meet their supplier diversity goals.
              </p>
            </div>
            <div className="mv-stack reveal">
              <div className="mv-card">
                <div className="mv-head">
                  <span className="mv-ic">{Ic.target}</span>
                  <h3>Mission</h3>
                </div>
                <p>
                  R Mo equips diverse businesses with the certifications, strategies, and
                  visibility they need to succeed. We guide them in building social and economic
                  impact, and connect them to government and corporate opportunities that drive growth.
                </p>
              </div>
              <div className="mv-card accent">
                <div className="mv-head">
                  <span className="mv-ic">{Ic.eye}</span>
                  <h3>Vision</h3>
                </div>
                <p>
                  R Mo envisions being the trusted bridge between businesses and opportunities—empowering
                  them with certifications, elevating their economic and social impact, and positioning
                  them to thrive in government and corporate markets.
                </p>
              </div>
            </div>
            <div className="section-head center reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
              <span className="eyebrow">Value Proposition</span>
              <p>
                One team handles both the paperwork and the follow-through — certification, capability statements, bid packages, and the growth programs that turn a certification into an actual contract pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Core Competencies */}
        <section className="pad-y" style={{ background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Core Competencies</span>
              <h2>Where We Help</h2>
            </div>
            <div className="svc-card-grid reveal d1">
              {CORE_COMPETENCIES.map((c) => (
                <div className="svc-detail-card" key={c.title}>
                  <div className="svc-detail-icon">
                    <span className="svc-icon-wrap">{c.ic}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h2>{c.title}</h2>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Professional Services */}
        <section className="pad-y">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Professional Services</span>
              <h2>Certification &amp; Documentation</h2>
              <p>The paperwork-heavy side of growing a diverse business, handled end to end.</p>
            </div>
            <div className="svc-card-grid reveal d1">
              {PRO_SERVICES_CARDS.map((c) => (
                <a className="svc-detail-card" href="services/professional-services.html" key={c.title} style={{ display: "flex", textDecoration: "none", color: "inherit" }}>
                  <div className="svc-detail-icon">
                    <span className="svc-icon-wrap">{c.ic}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h2>{c.title}</h2>
                    <p>{c.desc}</p>
                    <span className="branch-learn-btn" style={{ marginTop: "12px", display: "inline-flex" }}>Learn More {Ic.arrow}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Business Growth Programs */}
        <section className="pad-y" style={{ background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Business Growth Programs</span>
              <h2>Turning Certification Into Contracts</h2>
              <p>Real buyers, sharper pitches, and the relationships that lead to contracts.</p>
            </div>
            <div className="svc-card-grid svc-card-grid--2col reveal d1">
              {GROWTH_PROGRAM_CARDS.map((c) => (
                <a className="svc-detail-card" href="services/business-growth-programs.html" key={c.title} style={{ display: "flex", textDecoration: "none", color: "inherit" }}>
                  <div className="svc-detail-icon">
                    <span className="svc-icon-wrap">{c.ic}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h2>{c.title}</h2>
                    <p>{c.desc}</p>
                    <span className="branch-learn-btn" style={{ marginTop: "12px", display: "inline-flex" }}>Learn More {Ic.arrow}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Partner With RMO */}
        <section className="pad-y" style={{ background: "var(--green-deep)", color: "#fff" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow" style={{ color: "#7ff0a0" }}>Why Partner With RMO</span>
              <h2 style={{ color: "#fff" }}>A Track Record You Can Verify</h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "clamp(24px,4vw,40px)",
              textAlign: "center",
              marginTop: "clamp(32px,4vw,48px)",
            }} className="reveal d1">
              {WHY_PARTNER.map(({ stat, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "clamp(32px,4.5vw,48px)", fontWeight: 800, color: "#fff", margin: "0 0 8px", fontFamily: "var(--font-display)", lineHeight: 1 }}>{stat}</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Capability Statement Download */}
        <section className="pad-y" id="cs-download">
          <div className="wrap">
            <div className="mv-card accent reveal" style={{ textAlign: "center", padding: "clamp(36px,5vw,56px)" }}>
              <div className="mv-head" style={{ justifyContent: "center" }}>
                <span className="mv-ic">{Ic.doc}</span>
                <h3>Get the Full Capability Statement</h3>
              </div>
              <p style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
                Download the official R Mo capability statement — certifications, competencies, past performance, and contact details in one procurement-ready PDF.
              </p>
              {/* ponytail: placeholder path — no PDF has been supplied yet. Drop the real file
                  at this path and this button works with no code changes. */}
              <a href="capability-statement/RMO-Capability-Statement.pdf" className="btn btn-light" download>
                Download Capability Statement (PDF) {Ic.arrow}
              </a>
              <p style={{ marginTop: "16px", fontSize: "13.5px", opacity: 0.85 }}>
                Don't have it yet? <a href={contactHrefForCurrentPage()} style={{ color: "inherit", textDecoration: "underline" }}>Contact us</a> and we'll send it directly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <PreFooterCta />
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("capability-root")).render(<CapabilityStatementPage />);
```

- [ ] **Step 2: Manual check (syntax only, page not wired yet)**

Run a quick Babel-syntax sanity check without a browser:
```bash
node -e "require('@babel/core')" 2>/dev/null && echo "babel available" || echo "no local babel — will verify in-browser in Task 4"
```
This is optional; the real verification happens in Task 4 once the HTML shell exists. Don't block on this step if no local Babel/node toolchain is present — the in-browser Babel-standalone transform in Task 4 is the actual verification.

- [ ] **Step 3: Commit**

```bash
git add src/capability-statement-page.jsx
git commit -m "Add Capability Statement page component"
```

---

### Task 4: Wire up the HTML shell and verify end-to-end

**Files:**
- Create: `capability-statement.html`

**Interfaces:**
- Consumes: `src/sections-a.jsx`, `src/sections-c.jsx`, `src/capability-statement-page.jsx` (all via `<script type="text/babel" src="...">`), root element `#capability-root`.

- [ ] **Step 1: Write the HTML shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Capability Statement — R Mo Global Diversity Solutions</title>
  <link rel="icon" href="logo/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@500;600;700;800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles/styles.css" />
</head>
<body>
  <div id="capability-root"></div>

  <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script type="text/babel" src="src/sections-a.jsx"></script>
  <script type="text/babel" src="src/sections-c.jsx"></script>
  <script type="text/babel" src="src/capability-statement-page.jsx"></script>
</body>
</html>
```

- [ ] **Step 2: Serve the site locally**

From the repo root:
```bash
npx --yes serve . -l 5500
```
(Any static file server works — this repo has no dev-server script of its own since there's no `package.json`.)

- [ ] **Step 3: Manual verification checklist**

Visit `http://localhost:5500/services.html`:
- [ ] 3 cards render in the branch grid, including "Capability Statement" with a working "Learn More" link.

Visit `http://localhost:5500/capability-statement.html`:
- [ ] Nav and Footer render correctly, matching other pages.
- [ ] Hero shows title, intro, "Download Capability Statement" button (scrolls to section 7), and "Contact Us" button (goes to contact page/section).
- [ ] Organization Overview shows Mission and Vision cards plus overview/value-prop text.
- [ ] Core Competencies shows 6 cards in a responsive grid.
- [ ] Professional Services shows 2 cards; clicking either navigates to `services/professional-services.html`.
- [ ] Business Growth Programs shows 4 cards; clicking any navigates to `services/business-growth-programs.html`.
- [ ] Why Partner With RMO shows the 4-stat highlight strip on a dark background.
- [ ] Capability Statement Download section is visually prominent, download button present (will 404 — expected, PDF is a placeholder), "Contact us" fallback link works.
- [ ] Final CTA (`PreFooterCta`) renders "Book a free consultation."
- [ ] Resize to mobile width (~375px): all sections stack cleanly, no horizontal scroll, nav collapses to the mobile menu.
- [ ] Scroll-reveal animations fire on each section as they enter the viewport.

- [ ] **Step 4: Commit**

```bash
git add capability-statement.html
git commit -m "Wire up Capability Statement page (capability-statement.html)"
```

---

## Post-plan note (not a task — informational)

The `certification_images/` directory shown as untracked in `git status` and the pre-existing modifications to `business-growth-page.jsx`, `faq-page.jsx`, `professional-services-page.jsx`, `services-page.jsx` are pre-existing working-tree state unrelated to this plan. Don't touch them as part of this work.
