/* global React, ReactDOM, Ic */
const { useEffect } = React;

/* ======================= SCROLL REVEAL ======================= */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* ======================= DATA ======================= */
const PRO_SERVICES = [
  {
    ic: Ic.badge,
    t: "Diversity Certifications",
    d: "Getting certified is complicated, and most businesses don't have time to learn the process from scratch. We handle the complexity for you, from WBENC and SBA 8(a) to DBE, USPAACC, and state programs, making sure your application is accurate and submitted right the first time.",
    href: "#",
  },
  {
    ic: Ic.target,
    t: "RFP Bid Package Assistance",
    d: "A strong bid package can be the difference between landing a contract and being passed over. We help you put together professional RFP responses, shape your capability statement, and make sure everything is in order before you submit.",
    href: "#",
  },
];

const GROWTH_PROGRAMS = [
  {
    ic: Ic.rocket,
    t: "Market Ready Program",
    d: "Having a certification doesn't automatically bring in contracts. The Market Ready Program helps you present your business with confidence, understand how to activate your certification, and build real relationships with buyers, peers, and industry contacts.",
    href: "#",
  },
  {
    ic: Ic.eye,
    t: "Speaker Series",
    d: "We bring in procurement leaders, certification experts, and business owners who've been through it. Each session is practical, honest, and built around the questions diverse business owners are actually asking.",
    href: "#",
  },
  {
    ic: Ic.check,
    t: "Impact Reports",
    d: "Our Impact Reports track what's actually changing as a result of diversity certification and supplier inclusion. The data gives you a credible way to communicate your value to corporate partners and stakeholders.",
    href: "#",
  },
  {
    ic: Ic.arrow,
    t: "Startup Guidance",
    d: "Starting out is hard enough without navigating supplier diversity requirements on your own. We help early-stage businesses get structured properly, understand which certifications to pursue, and build a foundation for long-term growth.",
    href: "#",
  },
];

const WHY_R_MO = [
  {
    ic: Ic.badge,
    title: "Deep Certification Expertise",
    items: [
      "Specialists in WBENC, SBA 8(a), DBE, USPAACC, and state programs",
      "Proven track record of successful applications",
      "Ongoing recertification and renewal support",
    ],
  },
  {
    ic: Ic.rocket,
    title: "End-to-End Support",
    items: [
      "Eligibility assessment through active certification",
      "Bid package preparation and RFP coaching",
      "Market readiness programs after certification",
    ],
  },
  {
    ic: Ic.target,
    title: "Trusted Network",
    items: [
      "Access to corporate supplier diversity contacts",
      "Peer cohorts of certified diverse businesses",
      "Speaker Series with procurement leaders",
    ],
  },
  {
    ic: Ic.eye,
    title: "Measurable Impact",
    items: [
      "Documented outcomes through our Impact Reports",
      "Economic and social progress you can quantify",
      "Data you can share with corporate partners",
    ],
  },
];

/* ======================= SECTIONS ======================= */

function ServiceCard({ s }) {
  return (
    <article className="card">
      <h3>{s.t}</h3>
      <p>{s.d}</p>
      <a href={s.href} className="btn">
        Learn more {Ic.arrow}
      </a>
    </article>
  );
}

function ProfessionalServices() {
  return (
    <section className="services pad-y" id="professional-services">
      <div className="wrap">
        <div className="section-head center reveal">
          <h2>Certifications &amp; Procurement</h2>
          <p>
            Certification and procurement are full-time jobs on their own.
            We take that work off your plate so you can focus on running your business.
          </p>
        </div>
        <div className="cards reveal d1">
          {PRO_SERVICES.map(s => <ServiceCard key={s.t} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function BusinessGrowth() {
  return (
    <section className="pad-y" id="business-growth" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div className="section-head center reveal">
          <h2>Business Growth Programs</h2>
          <p>
            Getting certified is a milestone, not a finish line. Our programs help you turn
            that recognition into actual opportunities, contracts, and relationships.
          </p>
        </div>
        <div className="cards reveal d1">
          {GROWTH_PROGRAMS.map(s => <ServiceCard key={s.t} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function WhyRMo() {
  return (
    <section className="about pad-y" id="why-rmo">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Why Work With R Mo</span>
          <h2>What We Bring to Every Engagement</h2>
          <p>
            We've helped dozens of diverse businesses get certified, get ready, and get results.
          </p>
        </div>
        <div className="obj-grid reveal d1">
          {WHY_R_MO.map((item) => (
            <div className="obj-card" key={item.title}>
              <div className="obj-head">
                <span className="obj-ic">{item.ic}</span>
                <h4>{item.title}</h4>
              </div>
              <ul>
                {item.items.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="prefooter-cta" id="contact-cta">
      <div className="wrap">
        <div className="prefooter-inner reveal">
          <div className="prefooter-text">
            <h2>Ready to get started?</h2>
            <p>Send us a note and we'll figure out the best path forward together.</p>
          </div>
          <div className="prefooter-actions">
            <a href="index.html#contact" className="btn btn-light">
              Contact Us {Ic.arrow}
            </a>
            <a href="calendar.html" className="btn btn-light">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= PAGE ROOT ======================= */
function ServicesPage() {
  useScrollReveal();
  const MainNav = window.Nav;
  const SiteFooter = window.Footer;
  const SiteToTop = window.ToTop;

  return (
    <React.Fragment>
      {MainNav && <MainNav />}
      <main className="services-page">
        <ProfessionalServices />
        <BusinessGrowth />
        <WhyRMo />
        <ContactCta />
      </main>
      {SiteFooter && <SiteFooter />}
      {SiteToTop && <SiteToTop />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("services-root")).render(<ServicesPage />);
