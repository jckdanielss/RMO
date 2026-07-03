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
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("mission-vision-root")).render(<MissionVisionPage />);
