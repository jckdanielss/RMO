/* global React, Ic, Avatar */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ======================= TEAM ======================= */
const LEADERS = [
  { name: "Ranjani Mohana", role: "Chief Executive Officer & President", image: "CEO.jpg" },
  { name: "Roshini Chandran", role: "Advisor", image: "ADVISOR.jpg" },
];

function Team() {
  return (
    <section className="team pad-y" id="team">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">The people</span>
          <h2>A team that knows certification inside out</h2>
          <p>Meet the leadership behind RMO Global Diversity Solutions.</p>
        </div>
        <div className="leaders">
          {LEADERS.map((l, i) => (
            <div className={"leader reveal d" + (i + 1)} key={l.name}>
              <Avatar name={l.name} src={l.image} alt={l.name} />
              <div>
                <span className="role-pill">{i === 0 ? "Leadership" : "Advisory"}</span>
                <h3>{l.name}</h3>
                <p>{l.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-cta reveal">
          <a href="team.html" className="btn btn-ghost">
            Meet the team {Ic.arrow}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================= TESTIMONIALS ======================= */
const TESTIMONIALS = [
  {
    quote: "It is with great pleasure to write a statement of recommendation for Ranjani and her team at R Mo Business Solution. They were able to support me in obtaining my 8(a) certification from the SBA. Their professionalism and patience made a very daunting process \u201cdoable!\u201d",
    name: "Lark Hilliard",
    role: "President & CFO, Hilliard Architects",
  },
  {
    quote: "RMO guided us through every form, deadline and requirement. What looked impossible on our own became a clear, manageable path \u2014 and we came out the other side fully certified.",
    name: "Brian James",
    role: "Vice-President, James Consolidated",
  },
];

function Testimonials() {
  const [i, setI] = useStateB(0);
  const timer = useRefB(null);
  const n = TESTIMONIALS.length;
  const reset = () => { clearInterval(timer.current); timer.current = setInterval(() => setI(p => (p + 1) % n), 7000); };
  useEffectB(() => { reset(); return () => clearInterval(timer.current); }, []);
  const go = (idx) => { setI((idx + n) % n); reset(); };
  const t = TESTIMONIALS[i];
  return (
    <section className="testi pad-y">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">In their words</span>
        </div>
        <blockquote className="testi-quote reveal d1" key={i}>
          <span className="mark">&ldquo;</span>{t.quote}<span className="mark">&rdquo;</span>
        </blockquote>
        <div className="testi-foot reveal d1">
          <div className="testi-author">
            <Avatar name={t.name} className="testi-av" />
            <div>
              <div className="a-name">{t.name}</div>
              <div className="a-role">{t.role}</div>
            </div>
          </div>
          <div className="testi-nav">
            <button aria-label="Previous" onClick={() => go(i - 1)}>{Ic.chevL}</button>
            <button aria-label="Next" onClick={() => go(i + 1)}>{Ic.chevR}</button>
          </div>
        </div>
        <div className="testi-dots">
          {TESTIMONIALS.map((_, d) => (
            <span key={d} className={d === i ? "on" : ""} onClick={() => go(d)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= ABOUT (mission + vision) ======================= */
const OBJECTIVES = [
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
    title: "For R Mo Team",
    items: [
      "Invest in continuous learning and professional growth of our global team.",
      "Foster innovation and process excellence to better serve clients.",
      "Build a culture of collaboration, integrity, and social responsibility.",
    ],
  },
];

function About() {
  return (
    <section className="about pad-y" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-intro reveal">
            <span className="eyebrow">About us</span>
            <h2>Impacting diversity through thoughts, actions &amp; progress.</h2>
            <p>
              RMO Global Diversity Solutions exists to level the playing field for diverse
              businesses. We turn the complex world of certification and procurement into a
              clear path forward — so underrepresented founders can compete, win, and grow.
            </p>
            <p className="about-tag">&ldquo;Empowering businesses to certify, impact &amp; thrive.&rdquo;</p>
          </div>
          <div className="mv-stack">
            <div className="mv-card reveal d1">
              <div className="mv-head">
                <span className="mv-ic">{Ic.target}</span>
                <h3>Our Mission</h3>
              </div>
              <p>
                R Mo equips diverse businesses with the certifications, strategies, and
                visibility they need to succeed. We guide them in building social and economic
                impact, and connect them to government and corporate opportunities that drive growth.
              </p>
            </div>
            <div className="mv-card accent reveal d2">
              <div className="mv-head">
                <span className="mv-ic">{Ic.eye}</span>
                <h3>Our Vision</h3>
              </div>
              <p>
                R Mo envisions being the trusted bridge between businesses and opportunities—empowering
                them with certifications, elevating their economic and social impact, and positioning
                them to thrive in government and corporate markets.
              </p>
            </div>
          </div>
        </div>
        <div className="obj-grid">
          {OBJECTIVES.map((o, i) => (
            <div className={"obj-card reveal d" + (i + 1)} key={o.title}>
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
  );
}

/* ======================= CERTIFICATIONS ======================= */
const CERTS = [
  { mark: "WRMSDC", name: "Minority Supplier Development" },
  { mark: "USPAACC", name: "Certified Asian American Business" },
  { mark: "SBA 8(a)", name: "8(a) Business Development" },
  { mark: "DBE", name: "Disadvantaged Business Enterprise" },
  { mark: "CA.GOV", name: "CA Small Business Certified" },
];

function Certifications() {
  return (
    <section className="certs pad-y" id="certifications">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Recognized &amp; certified</span>
          <h2>Our certifications</h2>
          <p>We hold — and help you obtain — the certifications that matter most to buyers.</p>
        </div>
        <div className="logo-row reveal d1">
          {CERTS.map((c) => (
            <div className="logo-chip cert-chip" key={c.mark}>
              <span className="ct-mark">{c.mark}</span>
              <span className="ct-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Team, Testimonials, About, Certifications });
