# Split Hero Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current full-bleed dark-overlay hero carousel with a two-column split layout — a fixed green text/CTA panel on the left, a rotating photo (no text overlay) on the right — while leaving the certification logo loop below it untouched.

**Architecture:** Single-file changes. `Hero()` in `src/sections-a.jsx` keeps its existing state (`active`, `animKey`, `resetTimer`, `goTo`, touch handlers) and `HERO_SLIDES` data untouched — only the JSX it returns changes, from the current centered-overlay markup to a two-column split. `styles/styles.css` gets a new `.hero-split-*` rule block replacing the old `.hero-v2-*` block (confirmed via grep: `.hero-v2-*` classes are used nowhere else in the codebase, safe to fully remove).

**Tech Stack:** Plain React 18 (UMD build) + Babel standalone in-browser JSX transform, no bundler, no test framework — matches every other page in this repo. "Tests" in this plan are manual browser verification steps.

## Global Constraints

- No new npm/JS dependencies.
- No change to `HERO_SLIDES` content/copy, image assets, or slide count (`src/sections-a.jsx:355-396`).
- No change to `CERT_LOGOS`, `LogoCarousel`, or any `.hero-cert-strip*` / `.hero-cert-logo-chip*` CSS (`styles/styles.css:604-654`, `695-703`, `712-713`) — the certification loop stays exactly as it is today.
- Reuse existing state machine in `Hero()` (`resetTimer`, `goTo`, `onTouchStart`/`onTouchEnd`) as-is — no new timers or state variables.
- Reuse existing color tokens only: `var(--green)`, `var(--green-dark)`, `var(--green-deep)` (defined in `styles/styles.css:4-9`) — no new CSS custom properties.
- Mobile behavior: stack text-panel-on-top, photo-panel-below (per user decision during design).

---

### Task 1: Rewrite `Hero()` markup for the split layout

**Files:**
- Modify: `src/sections-a.jsx:457-528` (the `return (...)` block of `Hero()`)

**Interfaces:**
- Consumes: existing `HERO_SLIDES` array (`heading`, `sub`, `img`, `btnLabel`, `btnHref` fields — unchanged), existing `active`/`animKey`/`goTo`/`go`/`onTouchStart`/`onTouchEnd`/`n` (all defined above the `return` in the existing function, untouched), `Ic.arrow`/`Ic.chevL`/`Ic.chevR` (from the shared `Ic` object elsewhere in `sections-a.jsx`), `LogoCarousel`/`CERT_LOGOS` (unchanged, used identically to today).
- Produces: new markup structure using `hero-split`, `hero-split-inner`, `hero-split-text`, `hero-split-text-inner`, `hero-split-heading`, `hero-split-sub`, `hero-split-actions`, `hero-split-btn`, `hero-split-photo`, `hero-split-photo-bg`, `hero-split-nav`/`hero-split-prev`/`hero-split-next`, `hero-split-dots`, `hero-split-dot` class names — these must match exactly what Task 2's CSS defines.

- [ ] **Step 1: Replace the `return` block**

In `src/sections-a.jsx`, replace the entire `return (...)` statement of `Hero()` (currently lines 457-528, from `return (` through the closing `);` right before the function's closing `}`) with:

```jsx
  return (
    <React.Fragment>
    <header className="hero hero-split" id="top">
      <div className="hero-split-inner" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="hero-split-text">
          <div className="hero-split-text-inner" key={animKey}>
            <h1 className="hero-split-heading">{HERO_SLIDES[active].heading}</h1>
            <p className="hero-split-sub">{HERO_SLIDES[active].sub}</p>
            <div className="hero-split-actions">
              <a
                href={HERO_SLIDES[active].btnHref}
                className="hero-split-btn"
                onClick={(e) => go(e, HERO_SLIDES[active].btnHref)}
              >
                {HERO_SLIDES[active].btnLabel} {Ic.arrow}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-split-photo">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className={"hero-split-photo-bg" + (i === active ? " active" : "")}
              style={{ backgroundImage: "url('" + s.img + "')" }}
            />
          ))}

          <button className="hero-split-nav hero-split-prev" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
            {Ic.chevL}
          </button>
          <button className="hero-split-nav hero-split-next" aria-label="Next slide" onClick={() => goTo(active + 1)}>
            {Ic.chevR}
          </button>

          <div className="hero-split-dots" role="tablist">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-label={"Slide " + (i + 1)}
                aria-selected={i === active}
                className={"hero-split-dot" + (i === active ? " active" : "")}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
    <div className="hero-cert-strip">
      <div className="hero-cert-strip-fade hero-cert-strip-fade-l" aria-hidden="true" />
      <div className="hero-cert-strip-fade hero-cert-strip-fade-r" aria-hidden="true" />
      <LogoCarousel
        items={CERT_LOGOS}
        className="hero-cert-carousel"
        speed={40}
        renderItem={(logo) => (
          <div className="hero-cert-logo-chip">
            <img src={logo.src} alt={logo.name} draggable="false" loading="lazy" />
          </div>
        )}
      />
    </div>
    </React.Fragment>
  );
```

Note: the `key={animKey}` on `.hero-split-text-inner` is kept so the text still gets a fresh mount per slide change (useful for a future fade-in tweak) but no animation is attached to it in this plan — it's inert until Task 2 CSS decides otherwise. The cert-strip block is copied verbatim from the current file — do not alter it.

- [ ] **Step 2: Commit**

```bash
git add src/sections-a.jsx
git commit -m "Rewrite Hero markup for split text/photo layout"
```

---

### Task 2: Replace `.hero-v2-*` CSS with `.hero-split-*` CSS

**Files:**
- Modify: `styles/styles.css:413-719` (the full `HERO V2` block, from the `/* HERO V2 ... */` comment through the `@media (prefers-reduced-motion: reduce)` block that ends with `.hero-v2-content { animation: none; }`)

**Interfaces:**
- Produces: `.hero-split`, `.hero-split-inner`, `.hero-split-text`, `.hero-split-text-inner`, `.hero-split-heading`, `.hero-split-sub`, `.hero-split-actions`, `.hero-split-btn`, `.hero-split-photo`, `.hero-split-photo-bg`/`.active`, `.hero-split-nav`/`.hero-split-prev`/`.hero-split-next`, `.hero-split-dots`, `.hero-split-dot`/`.active` — must match the class names Task 1 uses exactly.
- Leaves untouched: `.hero-cert-strip*`, `.hero-cert-logo-chip*` rules (`styles/styles.css:604-654` in the pre-edit file — they sit immediately after the block being replaced, so stop the replacement exactly at the `/* Certification logo strip */` comment).

- [ ] **Step 1: Replace the CSS block**

In `styles/styles.css`, find the block starting at:

```css
/* ============================================================
   HERO V2 — redesigned carousel with cert logo strip
   ============================================================ */
.hero-v2 {
```

and ending at (inclusive):

```css
@media (prefers-reduced-motion: reduce) {
  .hero-v2-slide-bg { transition: none; }
  .hero-v2-content { animation: none; }
}
```

(This is everything between the `HERO V2` section comment and the `/* Certification logo strip */` comment, **plus** the two mobile media-query blocks and the reduced-motion block further down that reference `.hero-v2-*` — i.e. delete every rule whose selector starts with `.hero-v2` across the whole file, including inside the two `@media (max-width: 760px)` / `@media (max-width: 480px)` blocks that mix `.hero-v2-*` and `.hero-cert-*` rules together. Keep every `.hero-cert-*` rule in those same media blocks — do not delete those.)

Replace with:

```css
/* ============================================================
   HERO SPLIT — fixed text panel + rotating photo, cert logo strip
   ============================================================ */
.hero-split {
  position: relative;
  overflow: hidden;
  background: var(--green-deep);
}

.hero-split-inner {
  display: flex;
  min-height: 82vh;
}

.hero-split-text {
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  padding: clamp(48px, 6vw, 80px) clamp(28px, 5vw, 64px);
}

.hero-split-text-inner { max-width: 480px; }

.hero-split-heading {
  color: #fff;
  font-size: clamp(30px, 3.4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 18px;
}

.hero-split-sub {
  color: rgba(255,255,255,.85);
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.6;
  margin: 0 0 28px;
  max-width: 440px;
}

.hero-split-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-split-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: transform var(--dur-fast) ease, box-shadow var(--dur-fast) ease, background var(--dur-fast) ease;
  background: var(--green);
  color: #fff;
  border: 2px solid transparent;
}
.hero-split-btn:hover {
  background: var(--green-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26,156,62,.32);
}

.hero-split-photo {
  position: relative;
  flex: 1;
  overflow: hidden;
  background: #0a1a10;
}

@keyframes heroSplitZoom {
  from { transform: scale(1); }
  to   { transform: scale(1.07); }
}

.hero-split-photo-bg {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s ease;
  will-change: opacity, transform;
}
.hero-split-photo-bg.active {
  opacity: 1;
  animation: heroSplitZoom 8s ease-out forwards;
}

/* Nav arrows — confined to the photo panel */
.hero-split-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  border: 1.5px solid rgba(255,255,255,.35);
  color: #fff;
  display: grid; place-items: center;
  cursor: pointer;
  transition: background .18s ease, transform .22s ease;
  outline: none;
  backdrop-filter: blur(6px);
}
.hero-split-nav:hover {
  background: rgba(255,255,255,.28);
  transform: translateY(calc(-50% - 2px));
}
.hero-split-nav:focus-visible { box-shadow: 0 0 0 2px rgba(26,156,62,.7); }
.hero-split-nav svg { width: 20px; height: 20px; }
.hero-split-prev { left: clamp(10px, 2vw, 24px); }
.hero-split-next { right: clamp(10px, 2vw, 24px); }

/* Dots — bottom-right of the photo panel */
.hero-split-dots {
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 4;
  display: flex;
  gap: 8px;
  align-items: center;
}
.hero-split-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.4);
  border: none; cursor: pointer; padding: 0;
  transition: width .28s ease, background .28s ease, border-radius .28s ease;
}
.hero-split-dot.active {
  width: 22px;
  border-radius: 4px;
  background: #7ff0a0;
}

@media (max-width: 760px) {
  .hero-split-inner { flex-direction: column; min-height: 0; }
  .hero-split-text { flex: none; width: 100%; padding: 40px clamp(20px, 6vw, 32px); }
  .hero-split-heading { font-size: clamp(26px, 7.5vw, 38px); }
  .hero-split-sub { font-size: 15px; margin-bottom: 22px; }
  .hero-split-photo { flex: none; width: 100%; height: 42vh; min-height: 280px; }
  .hero-split-nav { display: none; }
  .hero-split-dots { bottom: 14px; right: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-split-photo-bg { transition: none; animation: none; }
}
```

- [ ] **Step 2: Manual check**

Serve the site locally from the repo root (any static file server, e.g. `npx --yes serve . -l 5500`) and open `http://localhost:5500/index.html`. Confirm:
- [ ] Left panel shows dark-green background with heading, sub-paragraph, and one CTA button matching `HERO_SLIDES[0]`.
- [ ] Right panel shows the first slide's photo full-bleed, no dark overlay/text on top of it.
- [ ] Prev/next arrow buttons appear on the left/right edges of the photo panel only (not spanning the text panel).
- [ ] Small dots appear bottom-right of the photo panel; clicking a dot jumps to that slide and updates both the photo and the text panel.
- [ ] Waiting ~8s advances to the next slide automatically (photo crossfades, text updates).
- [ ] Resize to a mobile width (~375px): text panel stacks on top, photo panel stacks below it at roughly 42% viewport height; arrows are hidden; swiping left/right on the photo still changes slides.
- [ ] Certification logo strip directly below the hero still scrolls continuously, unaffected.

- [ ] **Step 3: Commit**

```bash
git add styles/styles.css
git commit -m "Replace hero-v2 CSS with split-layout hero-split CSS"
```

---

## Post-plan note (not a task — informational)

Pre-existing working-tree modifications to `src/team-page.jsx` and the untracked `assets/team/01-28-26_RMo_OrgChart-_Landscape_Border.png` file are unrelated to this plan. Don't touch them as part of this work.
