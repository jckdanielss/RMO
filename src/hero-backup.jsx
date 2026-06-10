/*
 * HERO BACKUP — snapshot of the original Hero section before the carousel redesign.
 * To restore: copy HERO_SLIDES and the Hero function back into sections-a.jsx,
 * replacing the current versions.
 *
 * This file is never imported or executed — it is purely a reference.
 */

const HERO_SLIDES_BACKUP = [
  {
    img: "carousel/diversity.jpg",
    alt: "Diverse business professionals in a meeting",
    heading: "Earn Your Diversity Certification",
    accent: "Open Corporate & Government Doors.",
    sub: "Certification paperwork is complicated. We handle the application, documentation, and certifying body communication so you get approved faster.",
    learnHref: "#services",
    contactHref: "#contact",
  },
  {
    img: "carousel/business_growth.jpg",
    alt: "Business growth strategy session",
    heading: "Programs Built for",
    accent: "Sustainable Growth.",
    sub: "Certification opens the door. Our programs show you what to do once you're inside — from landing your first contract to building a pipeline.",
    learnHref: "#services",
    contactHref: "#contact",
  },
  {
    img: "carousel/market_ready_program.jpg",
    alt: "Workshop participants preparing for market entry",
    heading: "Get Market-Ready",
    accent: "With the MRP.",
    sub: "A certification without a pitch is just paper. MRP teaches you how to present your business, connect with buyers, and turn your certification into contracts.",
    learnHref: "#services",
    contactHref: "#contact",
  },
  {
    img: "carousel/impact_reports.jpg",
    alt: "Impact report data and visualizations",
    heading: "Measurable Impact,",
    accent: "Documented Results.",
    sub: "Corporations ask for impact data. We help you collect it, format it, and build the reports that corporate and government clients actually request.",
    learnHref: "#about",
    contactHref: "#contact",
  },
  {
    img: "carousel/rfd_bid_package.jpg",
    alt: "RFP documents and bid preparation",
    heading: "Win More Contracts With",
    accent: "Expert Bid Support.",
    sub: "Most bids lose on compliance and formatting, not capability. We review the requirements, flag the risks, and help you put together a package that makes the cut.",
    learnHref: "#services",
    contactHref: "#contact",
  },
  {
    img: "carousel/startup_guidance.jpg",
    alt: "Entrepreneurs collaborating at a workspace",
    heading: "Launch With Confidence —",
    accent: "Startup Guidance.",
    sub: "Starting a business that qualifies for certifications requires a different kind of setup. We walk you through entity structure, documentation, and first steps toward eligibility.",
    learnHref: "#services",
    contactHref: "#contact",
  },
];

function HeroBackup() {
  const [active, setActive] = React.useState(0);
  const timerRef = React.useRef(null);
  const n = HERO_SLIDES_BACKUP.length;

  const resetTimer = React.useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % n), 10000);
  }, [n]);

  React.useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = (idx) => { setActive((idx + n) % n); resetTimer(); };
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView(); };

  return (
    <header className="hero" id="top">
      <div className="hero-carousel-bg" aria-hidden="true">
        {HERO_SLIDES_BACKUP.map((s, i) => (
          <div
            key={i}
            className={"hero-slide-bg" + (i === active ? " active" : "")}
            style={{ backgroundImage: "url('" + s.img + "')" }}
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-content hero-carousel-content" key={active}>
          <h1>
            {HERO_SLIDES_BACKUP[active].heading}{" "}
            <span className="accent">{HERO_SLIDES_BACKUP[active].accent}</span>
          </h1>
          <p className="sub">{HERO_SLIDES_BACKUP[active].sub}</p>
          <div className="hero-actions">
            <a
              href={HERO_SLIDES_BACKUP[active].learnHref}
              className="btn btn-primary"
              onClick={(e) => go(e, HERO_SLIDES_BACKUP[active].learnHref.replace("#", ""))}
            >
              Learn More
            </a>
            <a
              href={HERO_SLIDES_BACKUP[active].contactHref}
              className="btn btn-light"
              onClick={(e) => go(e, HERO_SLIDES_BACKUP[active].contactHref.replace("#", ""))}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <button className="hero-nav hero-nav-prev" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
        &#8249;
      </button>
      <button className="hero-nav hero-nav-next" aria-label="Next slide" onClick={() => goTo(active + 1)}>
        &#8250;
      </button>
      <div className="hero-dots" role="tablist">
        {HERO_SLIDES_BACKUP.map((_, i) => (
          <span
            key={i}
            role="tab"
            aria-selected={i === active}
            className={i === active ? "on" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </header>
  );
}
