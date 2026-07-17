/* global React */
const { useState, useEffect, useRef } = React;

/* ---------------- icons (simple, minimal line icons) ---------------- */
const Ic = {
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  badge: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="m8.5 13.5-1.8 6 5.3-2.6 5.3 2.6-1.8-6"/></svg>,
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/><path d="M9 13h6M9 17h4"/></svg>,
  chip: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>,
  handshake: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/></svg>,
  rocket: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  refresh: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>,
  eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  chevDown: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  up: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 14 6-6 6 6"/></svg>,
  chevL: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  chevR: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.78H5.67v8.56h2.67zM7 8.6a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.74v-4.69c0-2.5-1.34-3.67-3.12-3.67a2.7 2.7 0 0 0-2.44 1.34V9.78H9.78v8.56h2.67v-4.5c0-1.2.22-2.36 1.71-2.36s1.5 1.37 1.5 2.43v4.43h2.68z"/></svg>,
  x: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.4 8.46L23.5 22h-7l-5.5-7.18L4.7 22H1.6l7.93-9.06L.8 2h7.18l4.98 6.58L18.9 2zm-1.23 18h1.72L7.4 3.9H5.56L17.67 20z"/></svg>,
  fb: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>,
};

function Avatar({ name, className, src, alt }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return (
    <div className={"avatar " + (className || "")}>
      {src ? <img src={src} alt={alt || name} /> : initials}
    </div>
  );
}

function StatNum({ target, suffix }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 1400;
    let start = null;
    const id = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(id);
  }, [target]);
  return React.createElement(React.Fragment, null, val, suffix);
}

function wrapOffset(value, width) {
  if (!width) return 0;
  const next = value % width;
  return next < 0 ? next + width : next;
}

function LogoCarousel({ items, renderItem, className, speed = 28 }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const frameRef = useRef(0);
  const setWidthRef = useRef(0);
  const rawOffsetRef = useRef(0);
  const dragRef = useRef(null);
  const suppressClickRef = useRef(false);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const renderTrack = () => {
    if (!trackRef.current) return;
    const width = setWidthRef.current;
    const visualOffset = width ? wrapOffset(rawOffsetRef.current, width) : rawOffsetRef.current;
    trackRef.current.style.transform = "translate3d(" + (-visualOffset) + "px, 0, 0)";
  };

  const setRawOffset = (value) => {
    rawOffsetRef.current = value;
    renderTrack();
  };

  useEffect(() => {
    const measure = () => {
      if (!groupRef.current) return;
      setWidthRef.current = groupRef.current.offsetWidth;
      renderTrack();
    };

    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    const timeout = window.setTimeout(measure, 120);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(timeout);
    };
  }, [items.length]);

  useEffect(() => {
    let lastTs = null;

    const tick = (ts) => {
      if (lastTs == null) lastTs = ts;
      const dt = ts - lastTs;

      if (!hovered && !dragging && setWidthRef.current) {
        setRawOffset(rawOffsetRef.current + (speed * dt) / 1000);
      }

      lastTs = ts;
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dragging, hovered, speed, items.length]);

  const finishDrag = (pointerId) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== pointerId) return;
    if (drag.moved) suppressClickRef.current = true;
    dragRef.current = null;
    setDragging(false);
    viewportRef.current?.releasePointerCapture?.(pointerId);
  };

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startOffset: rawOffsetRef.current,
      moved: false,
    };
    suppressClickRef.current = false;
    viewportRef.current?.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    const delta = e.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) > 4) {
      drag.moved = true;
      setDragging(true);
    }

    if (drag.moved) {
      setRawOffset(drag.startOffset - delta);
    }
  };

  const onClickCapture = (e) => {
    if (!suppressClickRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    suppressClickRef.current = false;
  };

  if (!items.length) return null;

  return (
    <div className={"logo-carousel " + (className || "") + (dragging ? " dragging" : "")}>
      <div
        className="logo-carousel-viewport"
        ref={viewportRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => finishDrag(e.pointerId)}
        onPointerCancel={(e) => finishDrag(e.pointerId)}
        onClickCapture={onClickCapture}
      >
        <div className="logo-carousel-track" ref={trackRef}>
          <div className="logo-carousel-group" ref={groupRef}>
            {items.map((item, i) => (
              <div className="logo-carousel-item" key={item.name + "-base-" + i}>
                {renderItem(item, i)}
              </div>
            ))}
          </div>
          {[1, 2, 3].map((cloneIdx) => (
            <div className="logo-carousel-group" aria-hidden="true" key={"clone-group-" + cloneIdx}>
              {items.map((item, i) => (
                <div className="logo-carousel-item" key={item.name + "-clone" + cloneIdx + "-" + i}>
                  {renderItem(item, i)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ======================= NAV ======================= */
const ABOUT_LINKS = [
  ["Mission & Vision", "mission-vision.html"],
  ["History", "history.html"],
  ["Team", "team.html"],
];
const PROFESSIONAL_SERVICES_LINKS = [
  ["Professional Services", "services/professional-services.html"],
  ["Business Growth Programs", "services/business-growth-programs.html"],
];

function contactHrefForCurrentPage() {
  const page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  return page === "index.html" || page === "contact-us.html" ? "#contact" : "contact-us.html#contact";
}

function goToContact(e) {
  const href = contactHrefForCurrentPage();
  if (href !== "#contact") return;
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const SCRAPED_ROOT = "rmollc_scraped_data/rmollc_scrape/";
const CLIENTS = [
  { name: "Meta", alt: "Meta logo", imageSrc: SCRAPED_ROOT + "images/clients/meta-1-1.png" },
  { name: "CDW", alt: "CDW logo", imageSrc: SCRAPED_ROOT + "images/clients/logo-1-3.png" },
  { name: "CBRE", alt: "CBRE logo", imageSrc: SCRAPED_ROOT + "images/clients/unnamed-1.png" },
  { name: "Google", alt: "Google logo", imageSrc: SCRAPED_ROOT + "images/clients/google-1.png" },
  { name: "EU based Pharmaceutical Company", alt: "EU based Pharmaceutical Company logo", imageSrc: SCRAPED_ROOT + "images/clients/eu-based-1.jpg" },
  { name: "FHLBank San Francisco", alt: "FHLBank San Francisco logo", imageSrc: SCRAPED_ROOT + "images/clients/bank-1-1.png" },
  { name: "California Water Service", alt: "California Water Service logo", imageSrc: SCRAPED_ROOT + "images/clients/water-1.png" },
  { name: "San Jose Water Company", alt: "San Jose Water Company logo", imageSrc: SCRAPED_ROOT + "images/clients/San_Jose_Water_Company-logo.png" },
];

function Brand() {
  return (
    <a href="index.html" className="brand">
      <span className="brand-logo-wrap">
        <img className="brand-logo" src="assets/brand/RMO_Logo-removebg-preview.png" alt="R Mo Global Diversity Solutions" />
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileServOpen, setMobileServOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    if (!href || href === "#") return;
    if (href === "#contact") {
      setOpen(false);
      setDropdown(null);
      return goToContact(e);
    }
    if (!href.startsWith("#")) { setOpen(false); setDropdown(null); return; }
    e.preventDefault();
    setOpen(false);
    setDropdown(null);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const renderNavDdItems = (links) => links.map((item, i) => {
    if (item.type === "group") return <span key={"g" + i} className="nav-dd-group-label">{item.label}</span>;
    if (item.type === "divider") return <hr key={"d" + i} className="nav-dd-divider" />;
    const [lbl, href] = item;
    return <a key={lbl} href={href} onClick={(e) => go(e, href)}>{lbl}</a>;
  });

  const NavDropdown = ({ id, label, href, links }) => (
    <div
      className={"nav-dd" + (dropdown === id ? " open" : "")}
      onMouseEnter={() => setDropdown(id)}
      onMouseLeave={() => setDropdown(null)}
    >
      {href
        ? <a href={href} className="nav-dd-trigger" onClick={(e) => go(e, href)}>{label} {Ic.chevDown}</a>
        : <button className="nav-dd-trigger">{label} {Ic.chevDown}</button>
      }
      <div className="nav-dd-menu">
        <div className="nav-dd-menu-inner">
          {renderNavDdItems(links)}
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="wrap nav-inner">
          <Brand />
          <div className="nav-links">
            <NavDropdown id="about" label="About Us" links={ABOUT_LINKS} />
            <NavDropdown id="pro-services" label="Services" href="services.html" links={PROFESSIONAL_SERVICES_LINKS} />
            <a href="capability-statement.html">Capability Statement</a>
            <a href="faq.html">FAQ</a>
            <a href="blog.html">Blog</a>
            <a href="calendar.html">Calendar</a>
          </div>
          <div className="nav-cta">
            <a href={contactHrefForCurrentPage()} className="btn btn-primary" onClick={(e) => go(e, "#contact")}>
              GET IN TOUCH
            </a>
            <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
              {open ? Ic.close : Ic.menu}
            </button>
          </div>
        </div>
      </nav>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        <div className="mobile-dd-group">
          <span className="mobile-dd-label">About Us</span>
          {ABOUT_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="mobile-dd-item" onClick={(e) => go(e, href)}>{label}</a>
          ))}
        </div>
        <div className="mobile-dd-group">
          <div className="mobile-acc-row">
            <a href="services.html" className="mobile-dd-label mobile-dd-label-link">Services</a>
            <button
              className={"mobile-acc-btn" + (mobileServOpen ? " open" : "")}
              aria-label="Toggle services sub-menu"
              onClick={() => setMobileServOpen(o => !o)}
            >{Ic.chevDown}</button>
          </div>
          {mobileServOpen && PROFESSIONAL_SERVICES_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="mobile-dd-item">{label}</a>
          ))}
        </div>
        <a href="capability-statement.html">Capability Statement</a>
        <a href="faq.html">FAQ</a>
        <a href="blog.html">Blog</a>
        <a href="calendar.html">Calendar</a>
        <a href={contactHrefForCurrentPage()} onClick={(e) => go(e, "#contact")}>Contact Us</a>
        <a href={contactHrefForCurrentPage()} className="btn btn-primary" onClick={(e) => go(e, "#contact")}>GET IN TOUCH</a>
      </div>
    </React.Fragment>
  );
}

/* ======================= HERO ======================= */
const HERO_SLIDES = [
  {
    img: "carousel/diversity.jpg",
    alt: "Diverse business professionals in a meeting",
    heading: "Diversity Certifications",
    sub: "We handle the complexity. You focus on winning contracts.",
    btnLabel: "Explore Services",
    btnHref: "#services",
  },
  {
    img: "carousel/market_ready_program.jpg",
    alt: "Market ready business professionals",
    heading: "Become Market-Ready",
    sub: "Build confidence, sharpen your pitch, and stand out.",
    btnLabel: "Get Started",
    btnHref: "/services/business-growth-programs.html",
  },
  {
    img: "carousel/driving-impact.png",
    alt: "Community impact and empowerment",
    heading: "Driving Impact",
    sub: "Empowering businesses, strengthening communities.",
    btnLabel: "Get Started",
    btnHref: "#contact",
  },
  {
    img: "carousel/startup_guidance.jpg",
    alt: "Startup Guidance",
    heading: "Startup Guidance",
    sub: "Strategic mentorship from your first idea to your first contract.",
    btnLabel: "Get Guidance",
    btnHref: "#contact",
  },
  {
    img: "carousel/rfd_bid_package.jpg",
    alt: "RFD Bidding",
    heading: "RFD Bidding",
    sub: "From proposal writing to submission — expert bid support at every step.",
    btnLabel: "Get Bid Support",
    btnHref: "#contact",
  },
];

const CERT_LOGOS = [
  { name: "Cert 1",  src: "https://i.postimg.cc/1nkjNQyD/1.png" },
  { name: "Cert 2",  src: "https://i.postimg.cc/xNV613PR/10.png" },
  { name: "Cert 3",  src: "https://i.postimg.cc/30jn40SH/11.png" },
  { name: "Cert 4",  src: "https://i.postimg.cc/XX5h6pgL/2.png" },
  { name: "Cert 5",  src: "https://i.postimg.cc/HrYPM31v/3.png" },
  { name: "Cert 6",  src: "https://i.postimg.cc/56Mr4b7V/4.png" },
  { name: "Cert 7",  src: "https://i.postimg.cc/XpczXmmy/5.png" },
  { name: "Cert 8",  src: "https://i.postimg.cc/LJxQ3fH9/6.png" },
  { name: "Cert 9",  src: "https://i.postimg.cc/bGdCCJJQ/7.png" },
  { name: "Cert 10", src: "https://i.postimg.cc/njDdxPqr/8.png" },
  { name: "Cert 11", src: "https://i.postimg.cc/cKjDVSgP/9.png" },
];

function Hero() {
  const [active, setActive] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const timerRef = React.useRef(null);
  const touchStartX = React.useRef(null);
  const n = HERO_SLIDES.length;

  const resetTimer = React.useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % n);
      setAnimKey(k => k + 1);
    }, 8000);
  }, [n]);

  React.useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = (idx) => {
    setActive((idx + n) % n);
    setAnimKey(k => k + 1);
    resetTimer();
  };

  const go = (e, href) => {
    if (!href || href === "#") return;
    if (!href.startsWith("#")) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    goTo(delta < 0 ? active + 1 : active - 1);
  };

  return (
    <React.Fragment>
    <header className="hero-ed" id="top">
      <div className="hero-ed-inner" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="hero-ed-text">
          <div className="hero-ed-text-inner" key={animKey}>
            <h1 className="hero-ed-heading"><span>{HERO_SLIDES[active].heading}</span></h1>
            <div className="hero-ed-actions">
              <a
                href={HERO_SLIDES[active].btnHref}
                className="hero-ed-btn"
                onClick={(e) => go(e, HERO_SLIDES[active].btnHref)}
              >
                {HERO_SLIDES[active].btnLabel} {Ic.arrow}
              </a>
            </div>
            <div className="hero-ed-controls">
              <button className="hero-ed-nav" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
                {Ic.chevL}
              </button>
              <div className="hero-ed-dots" role="tablist">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-label={"Slide " + (i + 1)}
                    aria-selected={i === active}
                    className={"hero-ed-dot" + (i === active ? " active" : "")}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <button className="hero-ed-nav" aria-label="Next slide" onClick={() => goTo(active + 1)}>
                {Ic.chevR}
              </button>
            </div>
          </div>
        </div>

        <div className="hero-ed-media">
          <span className="hero-ed-blob hero-ed-blob-1" aria-hidden="true" />
          <span className="hero-ed-blob hero-ed-blob-2" aria-hidden="true" />
          <span className="hero-ed-blob hero-ed-blob-3" aria-hidden="true" />
          <div className="hero-ed-photo-frame">
            {HERO_SLIDES.map((s, i) => (
              <div
                key={i}
                className={"hero-ed-photo-bg" + (i === active ? " active" : "")}
                style={{ backgroundImage: "url('" + s.img + "')" }}
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
}

/* ======================= SERVICES ======================= */
const SERVICES = [
  {
    ic: Ic.badge,
    t: "Get Certified",
    d: "We guide you through complex certification requirements and ensure complete, accurate applications so you earn certifications faster and open doors to new opportunities.",
    href: "services/professional-services.html",
  },
  {
    ic: Ic.rocket,
    t: "Get Market Ready",
    d: "Our Market Ready Program equips you with tools, connections, and confidence to present your business effectively, leverage your certification, and turn recognition into real results.",
    href: "services/business-growth-programs.html",
  },
  {
    ic: Ic.handshake,
    t: "Driving Impact",
    d: "We create lasting economic and social impact by empowering diverse businesses, strengthening supplier diversity, and fostering inclusive growth across communities and supply chains.",
    href: "services.html",
  },
  {
    ic: Ic.target,
    t: "Startup Guidance",
    d: "From idea to execution — strategic mentorship and resources to navigate startup challenges and build a strong foundation for lasting business success.",
    href: "services.html",
  },
  {
    ic: Ic.doc,
    t: "RFD Bid Package",
    d: "Expert support for your RFD bid submissions — well-crafted, fully compliant proposals that maximize your chances of securing valuable government and corporate contracts.",
    href: "services.html",
  },
];

function Services() {
  return (
    <section className="services pad-y" id="services">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">What We Do</span>
          <h2>Our Services</h2>
          <p>From your first certification to your first government contract — we guide you at every step.</p>
        </div>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <article className={"card reveal d" + (i + 1)} key={s.t}>
              <span className="card-ic">{s.ic}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a className="btn card-cta" href={s.href}>
                Learn More {Ic.arrow}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="clients pad-y" id="clients">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Who We Serve</span>
          <h2>Our Clients</h2>
          <p>Working with leading organizations across government and corporate sectors.</p>
        </div>
        <div className="reveal d1">
          <LogoCarousel
            items={CLIENTS}
            className="clients-carousel"
            speed={34}
            renderItem={(client) => (
              <article className="logo-chip client-chip" title={client.name}>
                <img src={client.imageSrc} alt={client.alt || client.name} draggable="false" loading="lazy" />
                <span className="logo-caption">{client.name}</span>
              </article>
            )}
          />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ic, Avatar, Nav, Hero, Services, Clients, LogoCarousel });
