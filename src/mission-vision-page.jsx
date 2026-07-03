/* global React, ReactDOM, Ic, Nav, Footer, ToTop */
const { useEffect: useEffectMV } = React;

function useScrollRevealMV() {
  useEffectMV(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const MV_OBJECTIVES = [
  {
    ic: Ic.badge,
    title: "For Diverse Businesses",
    items: [
      "Support businesses in obtaining and maintaining diversity certifications.",
      "Guide clients to design and implement measurable social and economic impact strategies.",
      "Equip suppliers with tools to showcase their strengths and compete successfully in government and corporate markets.",
    ],
  },
  {
    ic: Ic.handshake,
    title: "For Corporates & Government",
    items: [
      "Assist in certifying and developing their diverse supplier base.",
      "Strengthen corporate supplier diversity programs by aligning with impact-driven strategies.",
      "Provide insights and visibility to help corporates meet and exceed diversity spend goals.",
    ],
  },
  {
    ic: Ic.rocket,
    title: "For the R Mo Team",
    items: [
      "Invest in continuous learning and professional growth of our global team.",
      "Foster innovation and process excellence to better serve clients.",
      "Build a culture of collaboration, integrity, and social responsibility.",
    ],
  },
];

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

function MissionVisionPage() {
  useScrollRevealMV();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="svc-page-hero">
          <div className="wrap">
            <div className="reveal d1">
              <h1>Mission &amp; Vision</h1>
              <p className="svc-page-lead">
                What drives R Mo, and where we're taking it.
              </p>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
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
            <div className="section-head center reveal obj-section-head">
              <h2>Objectives</h2>
            </div>
            <div className="obj-grid reveal">
              {MV_OBJECTIVES.map((o) => (
                <div className="obj-card" key={o.title}>
                  <div className="obj-head">
                    <span className="obj-ic">{o.ic}</span>
                    <h4>{o.title}</h4>
                  </div>
                  <ul>
                    {o.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
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

        {/* Business Growth Programs */}
        <section className="pad-y">
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

        {/* Major Certifications */}
        <section className="pad-y" style={{ background: "var(--bg-soft)" }}>
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
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("mission-vision-root")).render(<MissionVisionPage />);
