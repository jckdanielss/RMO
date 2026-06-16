/* global React, ReactDOM, Nav, Footer, ToTop */
const { useState, useEffect, useRef } = React;

const FAQ_DATA = [
  {
    id: "general",
    label: "General",
    items: [
      {
        q: "What is R Mo Global Diversity Solutions?",
        a: "R Mo Global Diversity Solutions is a certified minority and women-owned consulting firm. We help organizations build inclusive supply chains, meet diversity compliance requirements, and connect with certified diverse suppliers.",
      },
      {
        q: "Who do you work with?",
        a: "We work with corporations, government agencies, and nonprofits looking to strengthen their supplier diversity programs. Our clients range from Fortune 500 companies to emerging small businesses seeking certification and growth support.",
      },
      {
        q: "Do you work with clients outside the U.S.?",
        a: "Our primary focus is domestic, but we have supported organizations with international operations that need to align their U.S. supplier diversity goals with broader global sourcing strategies.",
      },
      {
        q: "How do I get started with R Mo?",
        a: "Fill out the contact form on our website or reach out directly by email. We'll schedule an initial call to understand your goals and outline how we can help.",
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    items: [
      {
        q: "What certifications does R Mo hold?",
        a: "R Mo is certified as a Women-Owned Small Business (WOSB), a Minority Business Enterprise (MBE), and holds additional state and federal certifications that qualify us to support government and corporate supplier diversity initiatives.",
      },
      {
        q: "What does it mean to be WOSB certified?",
        a: "WOSB certification is issued by the U.S. Small Business Administration and confirms that a business is at least 51% owned and controlled by one or more women. It opens access to federal set-aside contracts reserved for women-owned firms.",
      },
      {
        q: "How do your certifications benefit my organization?",
        a: "Partnering with a certified diverse supplier like R Mo helps your organization meet supplier diversity spend goals, satisfy contract compliance requirements, and demonstrate commitment to equitable procurement practices.",
      },
    ],
  },
  {
    id: "process",
    label: "Process",
    items: [
      {
        q: "What happens after I reach out?",
        a: "We respond within one business day to schedule a discovery call. From there, we assess your needs, propose a scope of work, and move into onboarding once we're aligned.",
      },
      {
        q: "How long does an engagement typically take?",
        a: "It depends on scope. A targeted certification consultation may take a few weeks. A full supplier diversity program build-out typically runs three to six months. We outline timelines clearly before any work begins.",
      },
      {
        q: "Do you offer a free initial consultation?",
        a: "Yes. The first call is always complimentary. We use it to understand your situation and determine whether we're the right fit before any commitment is made.",
      },
      {
        q: "Can we customize the scope of work?",
        a: "Every engagement is tailored. We don't sell fixed packages — we scope based on your specific goals, capacity, and timeline.",
      },
    ],
  },
];

function FaqItem({ id, q, a }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        marginBottom: "10px",
        background: "#fff",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: open ? "var(--green)" : "var(--green-tint)",
            color: open ? "#fff" : "var(--green)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1,
            transition: "background var(--dur-base), color var(--dur-base)",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 20px 18px",
            fontSize: "15px",
            color: "var(--body)",
            lineHeight: 1.7,
            borderTop: "1px solid var(--line)",
            paddingTop: "14px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

function FaqCategory({ category, sectionRef }) {
  return (
    <section ref={sectionRef} id={category.id} style={{ marginBottom: "40px" }}>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 800,
          color: "var(--ink)",
          marginBottom: "16px",
          paddingBottom: "10px",
          borderBottom: "2px solid var(--line)",
        }}
      >
        {category.label}
      </h2>
      {category.items.map((item, i) => (
        <FaqItem key={i} id={`${category.id}-${i}`} q={item.q} a={item.a} />
      ))}
    </section>
  );
}

function FaqPage() {
  const [activeTopic, setActiveTopic] = useState("general");
  const sectionRefs = useRef({});

  FAQ_DATA.forEach((cat) => {
    if (!sectionRefs.current[cat.id]) {
      sectionRefs.current[cat.id] = React.createRef();
    }
  });

  function scrollTo(id) {
    setActiveTopic(id);
    const el = sectionRefs.current[id] && sectionRefs.current[id].current;
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  useEffect(() => {
    function onScroll() {
      let current = FAQ_DATA[0].id;
      FAQ_DATA.forEach((cat) => {
        const el = sectionRefs.current[cat.id] && sectionRefs.current[cat.id].current;
        if (el && el.getBoundingClientRect().top <= 140) {
          current = cat.id;
        }
      });
      setActiveTopic(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <Nav />

      {/* Hero header */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--line)", paddingTop: "clamp(80px,10vw,120px)", paddingBottom: "clamp(24px,4vw,48px)" }}>
        <div className="wrap">
          <span className="eyebrow eyebrow-lg" style={{ marginBottom: "14px" }}>FAQ</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--ink)", marginBottom: "12px" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.6 }}>
            Browse by topic or scroll through everything below.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <main style={{ background: "var(--bg-soft)" }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            gap: "clamp(24px,4vw,56px)",
            alignItems: "flex-start",
            paddingTop: "clamp(32px,5vw,56px)",
            paddingBottom: "clamp(48px,8vw,96px)",
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              width: "200px",
              flexShrink: 0,
              position: "sticky",
              top: "100px",
            }}
          >
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>
              Topics
            </p>
            {FAQ_DATA.map((cat) => {
              const isActive = activeTopic === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "9px 14px",
                    marginBottom: "4px",
                    background: isActive ? "var(--green-tint)" : "transparent",
                    borderLeft: isActive ? "3px solid var(--green)" : "3px solid transparent",
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                    color: isActive ? "var(--green-dark)" : "var(--muted)",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all var(--dur-base)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}

            {/* CTA card */}
            <div
              style={{
                marginTop: "28px",
                background: "var(--green)",
                borderRadius: "var(--radius-sm)",
                padding: "18px 16px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#eef7f0", marginBottom: "6px", lineHeight: 1.4 }}>
                Still have questions?
              </p>
              <a
                href="contact-us.html"
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Contact us →
              </a>
            </div>
          </aside>

          {/* FAQ content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {FAQ_DATA.map((cat) => (
              <FaqCategory
                key={cat.id}
                category={cat}
                sectionRef={sectionRefs.current[cat.id]}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("faq-root")).render(React.createElement(FaqPage));
