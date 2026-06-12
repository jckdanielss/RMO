/* global React, ReactDOM, Ic */
const { useEffect: useEffectBG } = React;

function useScrollRevealBG() {
  useEffectBG(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const MRP_SESSIONS = [
  {
    label: "Session I",
    title: "Maximizing Your Certification",
    desc: "Where your certification actually opens doors and how to get in front of the buyers who hold them.",
  },
  {
    label: "Session II",
    title: "Capability Statement & Pitch Readiness",
    desc: "How to present your business so a procurement officer pays attention. We work through your capability statement and pitch together.",
  },
];

const GROWTH_PROGRAM_LIST = [
  {
    ic: Ic.rocket,
    title: "Market Ready Program",
    desc: "A hands-on program that turns your certification into a contract strategy. You'll know where to find opportunities, how to approach buyers, and how to present your business in a room that matters.",
    sub: MRP_SESSIONS,
    subType: "sessions",
  },
  {
    ic: Ic.badge,
    title: "MRP Speaker Series",
    desc: "Monthly talks with procurement officers, certifying bodies, and business owners who've been through it. Practical, direct built around what diverse business owners actually need to hear.",
    sub: null,
    subType: null,
  },
];

function BizGrowthPage() {
  useScrollRevealBG();
  const MainNav = window.Nav;
  const SiteFooter = window.Footer;
  const SiteToTop = window.ToTop;

  return (
    <React.Fragment>
      {MainNav && <MainNav />}
      <main>
        <section className="svc-page-hero">
          <div className="wrap">
            <nav className="svc-breadcrumb reveal" aria-label="Breadcrumb">
              <a href="services.html">Services</a>
              <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
              <span aria-current="page">Business Growth Programs</span>
            </nav>
            <div className="reveal d1">
              <h1>Business Growth Programs</h1>
              <p className="svc-page-lead">
                Certification opens doors. These programs help you walk through them real contracts, real buyers, real relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
            <div className="svc-card-grid svc-card-grid--2col reveal d1">
              {GROWTH_PROGRAM_LIST.map((s) => (
                <div className="svc-detail-card" key={s.title}>
                  <div className="svc-detail-icon">
                    <span className="svc-icon-wrap">{s.ic}</span>
                  </div>
                  <div className="svc-detail-body">
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>
                    {s.sub && s.subType === "sessions" && (
                      <div className="svc-sessions">
                        {s.sub.map(sess => (
                          <div key={sess.label} className="svc-session-card">
                            <span className="svc-session-label">{sess.label}</span>
                            <h4>{sess.title}</h4>
                            <p>{sess.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="prefooter-cta">
          <div className="wrap">
            <div className="prefooter-inner reveal">
              <div className="prefooter-text">
                <h2>Ready to grow?</h2>
                <p>Join the businesses we've helped turn certification into real opportunity.</p>
              </div>
              <div className="prefooter-actions">
                <a href="index.html#contact" className="btn btn-light">Contact Us {Ic.arrow}</a>
                <a href="calendar.html" className="btn btn-light">Schedule a Call</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {SiteFooter && <SiteFooter />}
      {SiteToTop && <SiteToTop />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("biz-growth-root")).render(<BizGrowthPage />);
