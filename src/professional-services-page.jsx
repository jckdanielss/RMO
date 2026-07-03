/* global React, ReactDOM, Ic, Nav, Footer, ToTop, PreFooterCta */
const { useEffect: useEffectPS } = React;

function useScrollRevealPS() {
  useEffectPS(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const CERT_LEVELS = ["Local", "County", "State", "National", "Federal", "Global"];

const PRO_SERVICE_LIST = [
  {
    ic: Ic.badge,
    title: "Diversity Certification",
    desc: "We walk you through the full application eligibility check, required documents, submission. We cover every certifying body across all six levels.",
    sub: CERT_LEVELS,
    subLabel: "Levels we cover:",
    subType: "tags",
  },
  {
    ic: Ic.doc,
    title: "Capability Statement",
    desc: "We write and design the document procurement officers actually read built around your specific strengths, past performance, and differentiators.",
    sub: null,
    subType: null,
    href: "capability-statement.html",
  },
  {
    ic: Ic.target,
    title: "RFP / Bid Package Assistance",
    desc: "Most bids are lost in the writing, not the work. We build RFP responses that are accurate, tight, and ready to submit.",
    sub: null,
    subType: null,
  },
];

function ProServicesPage() {
  useScrollRevealPS();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="svc-page-hero">
          <div className="wrap">
            <nav className="svc-breadcrumb reveal" aria-label="Breadcrumb">
              <a href="services.html">Services</a>
              <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
              <span aria-current="page">Professional Services</span>
            </nav>
            <div className="reveal d1">
              <h1>Professional Services</h1>
              <p className="svc-page-lead">
                Certifications, documentation, bid packages. The paperwork-heavy side of growing a diverse business. We handle it.
              </p>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
            <div className="svc-card-grid reveal d1">
              {PRO_SERVICE_LIST.map((s) => (
                <div className="svc-detail-card" key={s.title}>
                  <div className="svc-detail-icon">
                    <span className="svc-icon-wrap">{s.ic}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>
                    {s.sub && s.subType === "tags" && (
                      <div className="svc-sub-group">
                        {s.subLabel && <span className="svc-sub-label">{s.subLabel}</span>}
                        <div className="svc-sub-tags">
                          {s.sub.map(tag => <span key={tag} className="svc-sub-tag">{tag}</span>)}
                        </div>
                      </div>
                    )}
                    {s.href && (
                      <a href={s.href} className="branch-learn-btn" style={{ marginTop: "16px", display: "inline-flex" }}>
                        Learn More {Ic.arrow}
                      </a>
                    )}
                  </div>
                </div>
              ))}
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

ReactDOM.createRoot(document.getElementById("pro-services-root")).render(<ProServicesPage />);
