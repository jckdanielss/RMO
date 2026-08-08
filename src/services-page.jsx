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

/* ponytail: reusing existing service images for these two broad category
   cards — closest concept match, no new generation needed */
const BRANCHES = [
  {
    img: "assets/services/get-certified.png",
    num: "01",
    title: "Professional Services",
    desc: "Certifications, capability statements, bid packages. The documentation side of running a diverse business, done right.",
    href: "services/professional-services.html",
    tags: ["Diversity Certifications", "Capability Statement", "RFP Assistance", "Startup Guidance"],
    accent: false,
  },
  {
    img: "assets/services/get-market-ready.png",
    imgPos: "center 30%",
    num: "02",
    title: "Business Growth Programs",
    desc: "You have the certification. These programs help you use it. We connect you with real buyers, sharpen your pitch, and build the relationships that lead to contracts.",
    href: "services/business-growth-programs.html",
    tags: ["Market Ready Program", "Speaker Series", "Impact Reports"],
    accent: true,
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
            <div key={b.title} className={"branch-card has-banner" + (b.accent ? " accent" : "")}>
              <img
                className="branch-banner"
                src={b.img}
                alt=""
                loading="lazy"
                style={b.imgPos ? { objectPosition: b.imgPos } : undefined}
              />
              <span className="branch-num">{b.num}</span>
              <div className="branch-body">
                <h2>{b.title}</h2>
                <p>{b.desc}</p>
                <div className="branch-tags">
                  {b.tags.map(t => <span key={t} className="branch-tag">{t}</span>)}
                </div>
                <a href={b.href} className="branch-learn-btn">Learn More</a>
              </div>
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
