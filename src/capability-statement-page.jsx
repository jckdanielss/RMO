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

const ORG_FACTS = [
  { label: "Established", value: "2011" },
  { label: "CAGE", value: "6WA27" },
  { label: "DUNS", value: "048316894" },
  { label: "UEI", value: "ZRK1KH84YCJ3" },
  { label: "NAICS", value: "541611, 541612, 541613, 541618, 561410" },
];

const CERT_CATEGORIES = [
  {
    label: "National Certifications",
    items: [
      { abbr: "MBE", name: "National Minority Business Certification (NMSDC)" },
      { abbr: "WBE", name: "National Women Business Certification (WBENC)" },
      { abbr: "VBE", name: "National Veteran Business Certification (NVBDC)" },
      { abbr: "LGBTQ", name: "National LGBTQ Business Certification (NGLCC)" },
      { abbr: "Disable", name: "National Disabled Business Certification (Disability:IN)" },
      { abbr: "USPAACC", name: "US Pan Asian American Chamber of Commerce" },
    ],
  },
  {
    label: "State & California Certifications",
    items: [
      { abbr: "SBE", name: "Small Business Enterprise (all US states)" },
      { abbr: "MBE/WBE", name: "State-qualified certifications" },
      { abbr: "DVBE", name: "Disabled Veteran Business Enterprise (CA)" },
      { abbr: "LBE", name: "Local Business Enterprise (San Francisco)" },
      { abbr: "DGS-MSA / CA-CMAS", name: "California state contracting certifications" },
      { abbr: "CPUC", name: "California Public Utilities Commission" },
      { abbr: "SLEB", name: "Small Local Emerging Business (Alameda)" },
    ],
  },
  {
    label: "Federal Certifications",
    items: [
      { abbr: "DBE", name: "Disadvantaged Business Enterprise (DOT)" },
      { abbr: "8(a)", name: "Small Disadvantaged Business (SDB)" },
      { abbr: "GSA", name: "General Service Administration Schedules" },
      { abbr: "SAM", name: "System for Award Management" },
      { abbr: "WOSB", name: "Federal Women-Owned Small Business" },
      { abbr: "HUBZone", name: "Federal Underutilized Zone" },
    ],
  },
  {
    label: "Global Certifications",
    items: [
      { abbr: "WBE", name: "WEConnect International Certification" },
      { abbr: "Disability:IN", name: "Disabled Business Enterprise (Global)" },
      { abbr: "MBE", name: "Australia, Canada, China, South Africa, UK" },
    ],
  },
];

const CORPORATE_CLIENTS = [
  "Meta", "CBRE", "Republic Services", "CDW", "Promethean Builders", "Google",
  "California Water Service", "Autodesk", "FHLBank San Francisco", "San Jose Water Company",
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
              <a href="services/professional-services.html">Professional Services</a>
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
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "10px 28px",
                marginTop: "28px", fontSize: "13.5px", color: "rgba(255,255,255,0.75)",
              }}>
                {ORG_FACTS.map((f) => (
                  <span key={f.label}><strong style={{ color: "#fff" }}>{f.label}:</strong> {f.value}</span>
                ))}
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
            <div className="mv-card reveal" style={{ marginTop: "clamp(24px,3vw,36px)", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <img
                src="rmollc_har_extracted_images/rmollc_har_extracted_images/team_images/Ranjani-300-dpi-300x212-150x150-1.jpg"
                alt="Ranjani Mohana"
                style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <div>
                <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "16px", marginBottom: "4px" }}>
                  Ranjani Mohana — <span style={{ color: "var(--green)" }}>"The Certification Lady"</span>
                </p>
                <p style={{ color: "var(--body)", fontSize: "15px", lineHeight: 1.7 }}>
                  In 2011, Ranjani identified how arduous the certification process was for diverse businesses and founded R Mo to fix it. She has since led the certification of over 400 clients.
                </p>
              </div>
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

        {/* 6b. Certifications We Support */}
        <section className="pad-y">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Major Certifications</span>
              <h2>300+ Certifications, All Over the Globe</h2>
            </div>
            <div className="svc-card-grid svc-card-grid--2col reveal d1">
              {CERT_CATEGORIES.map((cat) => (
                <div className="svc-detail-card" key={cat.label} style={{ display: "block" }}>
                  <div className="svc-detail-body">
                    <h2>{cat.label}</h2>
                    <ul style={{ marginTop: "10px", paddingLeft: "18px", fontSize: "14.5px", color: "var(--body)", lineHeight: 1.8 }}>
                      {cat.items.map((it) => (
                        <li key={it.abbr + it.name}><strong style={{ color: "var(--ink)" }}>{it.abbr}</strong> — {it.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6c. Corporate Clients */}
        <section className="pad-y" style={{ background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Corporate Clients</span>
              <h2>Businesses We've Worked With</h2>
            </div>
            <div className="reveal d1" style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center",
              gap: "12px 20px", marginTop: "clamp(24px,3vw,36px)",
            }}>
              {CORPORATE_CLIENTS.map((name) => (
                <span key={name} style={{
                  padding: "8px 18px", borderRadius: "999px", border: "1px solid var(--line)",
                  fontSize: "14px", fontWeight: 600, color: "var(--ink)", background: "#fff",
                }}>{name}</span>
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
