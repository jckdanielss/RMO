/* global React, ReactDOM, Ic, Nav, Footer, ToTop */
const { useEffect: useEffectSvc } = React;

function useScrollRevealSvc() {
  useEffectSvc(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const BRANCHES = [
  {
    ic: Ic.badge,
    num: "01",
    title: "Professional Services",
    desc: "Certifications, capability statements, bid packages. The documentation side of running a diverse business, done right.",
    href: "services/professional-services.html",
    tags: ["Diversity Certifications", "Capability Statement", "RFP Assistance"],
    accent: false,
  },
  {
    ic: Ic.rocket,
    num: "02",
    title: "Business Growth Programs",
    desc: "You have the certification. These programs help you use it. We connect you with real buyers, sharpen your pitch, and build the relationships that lead to contracts.",
    href: "services/business-growth-programs.html",
    tags: ["Market Ready Program", "Speaker Series", "Impact Reports", "Start-Up Guidance"],
    accent: true,
  },
  {
    ic: Ic.doc,
    num: "03",
    title: "Capability Statement",
    desc: "One document that puts our certifications, competencies, and track record in front of the people who make procurement decisions.",
    href: "capability-statement.html",
    tags: ["Organization Overview", "Core Competencies", "Downloadable PDF"],
    accent: false,
  },
];

function ServicesLanding() {
  return (
    <section className="svc-landing pad-y">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Our Services</span>
          <h1 className="branch-main-heading">How We Help You Grow</h1>
          <p className="branch-subtitle">
            Certification and documentation on one side. Turning that recognition into real opportunities on the other.
          </p>
        </div>
        <div className="branch-grid reveal d1">
          {BRANCHES.map(b => (
            <div key={b.title} className={"branch-card" + (b.accent ? " accent" : "")}>
              <div className="branch-card-top">
                <div className="branch-icon">{b.ic}</div>
                <span className="branch-num">{b.num}</span>
              </div>
              <h2>{b.title}</h2>
              <p>{b.desc}</p>
              <div className="branch-tags">
                {b.tags.map(t => <span key={t} className="branch-tag">{t}</span>)}
              </div>
              <a href={b.href} className="branch-learn-btn">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  useScrollRevealSvc();

  return (
    <React.Fragment>
      <Nav />
      <main className="services-page">
        <ServicesLanding />
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("services-root")).render(<ServicesPage />);
