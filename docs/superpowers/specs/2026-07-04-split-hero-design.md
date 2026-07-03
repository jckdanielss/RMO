# Hero Split Layout — Design Spec

## Goal
Replace the current full-bleed dark-overlay hero carousel (`Hero()` in `src/sections-a.jsx`) with a two-column split layout: a fixed green text/CTA panel on the left, a rotating photo (no text overlay) on the right. The certification logo loop below the hero (`hero-cert-strip` / `LogoCarousel`) is unchanged.

## Chosen direction
Option A from the visual mockup pass: "Split — fixed text + rotating framed photo." Rejected: Option B (compact banner, brand-tint overlay) and Option C (editorial framed photo stack on light panel).

## Scope
- `src/sections-a.jsx` — rewrite `Hero()` markup only. `HERO_SLIDES` data array, `CERT_LOGOS`, `LogoCarousel`, and everything from `Services()` down is untouched.
- `styles/styles.css` — replace the `.hero-v2-*` rule block (lines ~416–718) with new split-layout rules. `.hero-cert-strip*` rules (~605–712 overlap) stay as-is.
- No changes to any other page/component.

## Behavior (reused, not rebuilt)
Keep the existing state machine as-is: `active`/`animKey` state, `resetTimer` 8s auto-advance `useEffect`, `goTo(idx)`, and the `onTouchStart`/`onTouchEnd` swipe handlers. Only the JSX returned by `Hero()` and its CSS change — no new state, no new timers.

## Layout — desktop/tablet
- `<header className="hero hero-split" id="top">` containing two children:
  - `.hero-split-text` (left column, fixed width ~45%, background `var(--green-deep)`, full hero height): eyebrow, `<h1>`, sub paragraph, CTA button — sourced from `HERO_SLIDES[active]` same as today. Text updates directly on slide change (no per-slide fade wrapper/`animKey` remount, since the panel itself doesn't change position).
  - `.hero-split-photo` (right column, remaining width, full hero height): stacked `<div className="hero-split-photo-bg">` per slide, crossfaded via the same active/opacity-transition technique currently used by `.hero-v2-slide-bg` / `.hero-v2-slide-bg.active`.
- Prev/next arrows (`Ic.chevL`/`Ic.chevR`) sit on the photo panel (overlaid, left/right edges of the photo only, not spanning the text panel).
- Slide indicator dots move to the bottom-right corner of the photo panel (small, matching the mockup), replacing the current bottom-center dot row under the whole hero.

## Layout — mobile
Single column, stacked: `.hero-split-text` on top (full width), `.hero-split-photo` below it (fixed height, e.g. `40vh`). This reuses `.hero-split-text`/`.hero-split-photo` with a `flex-direction: column` media-query override rather than separate mobile-only markup. Arrows hide on mobile (existing `.hero-v2-nav { display: none }` behavior at the small breakpoint carries over); dots stay on the photo panel.

## CSS approach
Introduce a new `hero-split` class family (`.hero-split`, `.hero-split-text`, `.hero-split-photo`, `.hero-split-photo-bg`, `.hero-split-dots`, `.hero-split-dot`, `.hero-split-nav`) modeled on the current `.hero-v2-*` structure (same crossfade technique, same dot active-state pattern, same responsive breakpoints at the existing widths). Remove now-unused rules: `.hero-v2-overlay` (no more dark scrim over photo) and the content-fade/remount-on-slide-change styling, since the text panel is now static positioning with direct text swap.

## Non-goals
- No new npm/JS dependencies.
- No change to `HERO_SLIDES` content/copy, image assets, or slide count.
- No change to the certification logo strip/loop.
- No new global CSS variables — reuse `--green`, `--green-dark`, `--green-deep` already defined in `:root`.

## Testing
Manual verification in the browser: desktop split renders with fixed text panel and crossfading photo, arrows/dots work on the photo panel, auto-advance still fires every 8s, mobile viewport stacks text-above-photo correctly, touch swipe still advances slides, cert logo loop directly below still scrolls continuously unaffected.
