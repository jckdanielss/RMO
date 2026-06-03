/* global React, Ic, Avatar */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ======================= TEAM ======================= */
const LEADERS = [
  { name: "Ranjani Mohana", role: "Chief Executive Officer & President" },
  { name: "Roshini Chandran", role: "Advisor" },
];
const MEMBERS = [
  { name: "Priya Saravanan", role: "Sr. Certification Specialist" },
  { name: "Maria Rama Iseman", role: "Certification Assistant" },
  { name: "Lloura Morales", role: "Admin Assistant" },
  { name: "Marian Salino", role: "Social Media Assistant" },
  { name: "Ramnik Singh", role: "Web Maintenance" },
  { name: "Rajesh", role: "CPA" },
  { name: "Eunice Lorainne Acebuque", role: "Marketing Assistant" },
  { name: "Anjelica Espina", role: "MRP Assistant" },
  { name: "Marla Balladores", role: "Resource Admin Assistant" },
  { name: "Princess Mendez", role: "Certification Assistant" },
  { name: "Shylet Lomuntad", role: "Bookkeeper / Accounting" },
  { name: "Nikka Grajo", role: "Certification Assistant" },
  { name: "Abegael Mariano", role: "Certification Assistant" },
  { name: "Jullie Anne de la Cruz", role: "Creative Designer" },
  { name: "Nisha Rawat", role: "Certification Assistant" },
];

function Team() {
  return (
    <section className="team pad-y" id="team">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">The people</span>
          <h2>A team that knows certification inside out</h2>
          <p>Specialists across certification, procurement, finance and design — working together for you.</p>
        </div>
        <div className="leaders">
          {LEADERS.map((l, i) => (
            <div className={"leader reveal d" + (i + 1)} key={l.name}>
              <Avatar name={l.name} />
              <div>
                <span className="role-pill">{i === 0 ? "Leadership" : "Advisory"}</span>
                <h3>{l.name}</h3>
                <p>{l.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-grid">
          {MEMBERS.map((m, i) => (
            <div className={"member reveal d" + ((i % 4) + 1)} key={m.name}>
              <Avatar name={m.name} />
              <div className="m-name">{m.name}</div>
              <div className="m-role">{m.role}</div>
            </div>
          ))}
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
            <div className="a-name">{t.name}</div>
            <div className="a-role">{t.role}</div>
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
function About() {
  return (
    <section className="about pad-y" id="about">
      <div className="wrap about-grid">
        <div className="about-intro reveal">
          <span className="eyebrow">About us</span>
          <h2>Impacting diversity through thoughts, actions &amp; progress.</h2>
          <p>
            RMO Global Diversity Solutions exists to level the playing field for diverse
            businesses. We turn the complex world of certification and procurement into a
            clear path forward — so underrepresented founders can compete, win, and grow.
          </p>
          <p className="about-tag">&ldquo;Diversity isn't a checkbox. It's an opportunity.&rdquo;</p>
        </div>
        <div className="mv-stack">
          <div className="mv-card reveal d1">
            <div className="mv-head">
              <span className="mv-ic">{Ic.target}</span>
              <h3>Our Mission</h3>
            </div>
            <p>
              To empower minority-, women-, and veteran-owned businesses by simplifying the
              certification process and connecting them to real procurement opportunities —
              with the professionalism, patience and partnership every client deserves.
            </p>
          </div>
          <div className="mv-card accent reveal d2">
            <div className="mv-head">
              <span className="mv-ic">{Ic.eye}</span>
              <h3>Our Vision</h3>
            </div>
            <p>
              To be the catalyst for diversified businesses to successfully venture into the
              corporate and government markets — building a more inclusive economy where every
              qualified business has a seat at the table.
            </p>
          </div>
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
