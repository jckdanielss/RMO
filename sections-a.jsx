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
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>,
  eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
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

/* ======================= NAV ======================= */
const NAV_LINKS = [
  ["Services", "services"], ["Clients", "clients"], ["Team", "team"],
  ["Certifications", "certifications"], ["About", "about"], ["Contact", "contact"],
];

function Brand({ dark }) {
  return (
    <a href="#top" className="brand">
      <span className={"brand-logo-wrap" + (dark ? " on-dark" : "")}>
        <img className="brand-logo" src="RMO_Logo.jpg" alt="R Mo Global Diversity Solutions" />
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (e, id) => { e.preventDefault(); setOpen(false); document.getElementById(id)?.scrollIntoView(); };
  return (
    <React.Fragment>
      <nav className={"nav on-dark" + (scrolled ? " scrolled" : "")}>
        <div className="wrap nav-inner">
          <Brand dark={!scrolled} />
          <div className="nav-links">
            {NAV_LINKS.map(([label, id]) => (
              <a key={id} href={"#" + id} onClick={(e) => go(e, id)}>{label}</a>
            ))}
          </div>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => go(e, "contact")}>
              Get Certified {Ic.arrow}
            </a>
            <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
              {open ? Ic.close : Ic.menu}
            </button>
          </div>
        </div>
      </nav>
      <div className={"mobile-menu" + (open ? " open" : "")}>
        {NAV_LINKS.map(([label, id]) => (
          <a key={id} href={"#" + id} onClick={(e) => go(e, id)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={(e) => go(e, "contact")}>Get Certified</a>
      </div>
    </React.Fragment>
  );
}

/* ======================= HERO ======================= */
function Hero() {
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView(); };
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <img src="hero_section_plant.jpg" alt="Young plant sprouting from soil" />
      </div>
      <div className="wrap">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="dot">{Ic.check}</span>
            Diversity &amp; procurement certified
          </span>
          <h1>Turn diversity into <span className="accent">real opportunities.</span></h1>
          <p className="sub">
            We help minority, women, and veteran-owned businesses earn the certifications
            that open doors to corporate and government contracts and we guide you through
            every step.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary" onClick={(e) => go(e, "services")}>
              Find out how {Ic.arrow}
            </a>
            <a href="#about" className="btn btn-light" onClick={(e) => go(e, "about")}>
              Our mission
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="num"><StatNum target={5} suffix="+" /></div><div className="lbl">Certifications managed</div></div>
            <div className="stat"><div className="num"><StatNum target={20} suffix="+" /></div><div className="lbl">Specialists on the team</div></div>
            <div className="stat"><div className="num"><StatNum target={100} suffix="%" /></div><div className="lbl">Focused on diversity</div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ======================= SERVICES ======================= */
const SERVICES = [
  { ic: Ic.badge, t: "Diversity Certification", d: "Guidance through MBE, WBE, 8(a), DBE and more — from eligibility to approval." },
  { ic: Ic.doc, t: "Procurement", d: "RFP, contract and bidding support so you can compete for and win opportunities." },
  { ic: Ic.chip, t: "Information Technology", d: "IT services and digital support tailored to growing, diverse businesses." },
  { ic: Ic.handshake, t: "Consulting Agreement", d: "Ongoing advisory partnerships that keep your business compliant and competitive." },
  { ic: Ic.rocket, t: "Start-Up Guidance", d: "Practical help to launch, structure and position a new business for success." },
  { ic: Ic.refresh, t: "Recertification & Renewals", d: "We track deadlines and manage renewals so your certifications never lapse." },
];

function Services() {
  return (
    <section className="services pad-y" id="services">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">What we do</span>
          <h2>Services built around your certification journey</h2>
          <p>Everything you need to get certified, stay compliant, and win work — under one roof.</p>
        </div>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <article className={"card reveal d" + ((i % 3) + 1)} key={s.t}>
              <div className="ic">{s.ic}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="card-arrow">{Ic.arrow}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= CLIENTS ======================= */
const CLIENTS = [
  { mark: "CDW" }, { mark: "CBRE" }, { mark: "Google" },
  { small: "EU-based Pharmaceutical Company" },
];

function Clients() {
  return (
    <section className="clients pad-y" id="clients">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Trusted by</span>
          <h2>Corporate clients we've supported</h2>
        </div>
        <div className="logo-row reveal d1">
          {CLIENTS.map((c, i) => (
            <div className="logo-chip" key={i}>
              {c.mark ? <span className="wordmark">{c.mark}</span> : <span className="small">{c.small}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ic, Avatar, Nav, Hero, Services, Clients });
