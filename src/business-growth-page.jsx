/* global React, ReactDOM, Ic, Nav, Footer, ToTop */
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

/* ponytail: Market Ready + Start-Up Guidance reuse the homepage's images
   (same concept) — Speaker Series + Impact Reports are new generations */
const GROWTH_PROGRAM_LIST = [
  {
    img: "assets/services/get-market-ready.png",
    imgPos: "center 30%",
    title: "Market Ready Program",
    desc: "A hands-on program that turns your certification into a contract strategy. You'll know where to find opportunities, how to approach buyers, and how to present your business in a room that matters.",
    // sub: MRP_SESSIONS,
    subType: "sessions",
  },
  {
    img: "assets/growth-images/speaker-series.png",
    title: "Speaker Series",
    desc: "Monthly talks with procurement officers, certifying bodies, and business owners who've been through it. Practical, direct built around what diverse business owners actually need to hear.",
    sub: null,
    subType: null,
  },
  {
    img: "assets/growth-images/impact-reports.png",
    title: "Impact Reports",
    desc: "We put numbers to what you do economic impact, social outcomes, community reach documented in a format that wins over corporate partners and government buyers.",
    sub: null,
    subType: null,
  },
];
/* ponytail: Start-Up Guidance moved to the Professional Services page —
   it belongs there, not here (see professional-services-page.jsx) */

function BizGrowthPage() {
  useScrollRevealBG();

  return (
    <React.Fragment>
      <Nav />
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
            <div className="svc-card-grid reveal d1">
              {GROWTH_PROGRAM_LIST.map((s) => (
                <div className="svc-detail-card has-banner" key={s.title}>
                  <img className="svc-banner" src={s.img} alt="" loading="lazy" style={s.imgPos ? { objectPosition: s.imgPos } : undefined} />
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
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("biz-growth-root")).render(<BizGrowthPage />);
