/* global React, ReactDOM, Nav, Footer, ToTop */
const { useState, useEffect, useRef } = React;

const FAQ_DATA = [
  {
    id: "general",
    label: "General",
    items: [
      {
        q: "What is R Mo Global Diversity Solutions?",
        a: "R Mo Global Diversity Solutions is a certified minority and women-owned consulting firm specializing in diversity certifications and supplier development. We help diverse businesses obtain certifications, build market readiness, and connect with government and corporate procurement opportunities.",
      },
      {
        q: "Who do you work with?",
        a: "We work with small and diverse businesses — including minority-owned, women-owned, veteran-owned, and disadvantaged business enterprises — seeking certifications, market access, or procurement support. We also support corporations and government agencies looking to strengthen their supplier diversity programs.",
      },
      {
        q: "How do I get started with R Mo?",
        a: "Fill out the contact form on our website or reach out directly by email. We'll schedule a complimentary discovery call to understand your goals and determine the best path forward — no commitment required.",
      },
      {
        q: "Do you offer a free initial consultation?",
        a: "Yes. The first call is always complimentary. We use it to understand your situation and identify which certifications or programs are the right fit before any commitment is made.",
      },
      {
        q: "How long does an engagement typically take?",
        a: "It depends on the service. Certification support timelines vary by certifying body — typically one to six months. The Market Ready Program runs eight to twelve weeks. We outline timelines clearly before any work begins.",
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    items: [
      {
        q: "What types of certifications can R Mo help me obtain?",
        a: "We assist with a wide range of diversity certifications including MBE (Minority Business Enterprise), WBE (Women's Business Enterprise), WOSB (Women-Owned Small Business), DBE (Disadvantaged Business Enterprise), SBA 8(a), SDVOB (Service-Disabled Veteran-Owned Business), LGBTBE, and various state and local certifications. During your consultation, we'll identify which certifications best align with your target markets.",
      },
      {
        q: "Am I eligible to apply for a diversity certification?",
        a: "Eligibility depends on the certification type. Generally, your business must be at least 51% owned and actively managed by individuals from a qualifying group — such as women, minorities, or veterans. We conduct a full eligibility assessment during your initial consultation so you pursue only the certifications you qualify for.",
      },
      {
        q: "What documents do I need to prepare?",
        a: "Requirements vary by certification, but commonly needed documents include business formation records (articles of incorporation or operating agreement), proof of ownership, federal tax returns, financial statements, government-issued ID, and a biography or resume for the principal owner. We provide a personalized document checklist during onboarding so nothing is missed.",
      },
      {
        q: "How long does the certification process take?",
        a: "Timelines vary by certifying body and how complete your application is. Some state-level certifications can be approved in 30 to 60 days. Federal certifications such as SBA 8(a) may take three to six months or longer. Our team works to streamline your application and minimize delays at every stage.",
      },
      {
        q: "Can R Mo manage the entire certification process on my behalf?",
        a: "Yes. Our team handles everything from eligibility assessment and document preparation to application submission and follow-up with the certifying body. You focus on running your business — we manage the paperwork and process from start to finish.",
      },
      {
        q: "What are the benefits of becoming certified?",
        a: "Certification unlocks access to set-aside contracts at the federal, state, and corporate levels; eligibility for supplier diversity programs; increased visibility in procurement databases; and a competitive advantage when responding to RFPs that require diverse supplier participation. Many of our clients secure their first government or corporate contract directly as a result of their certification.",
      },
      {
        q: "What if my application is denied?",
        a: "Denials are often due to incomplete documentation or technical deficiencies — not ineligibility. We review the denial notice, identify the specific issues, and work with you to address them before resubmitting. We have successfully appealed and resubmitted on behalf of many clients.",
      },
      {
        q: "How much does certification support cost?",
        a: "Fees vary based on the number and complexity of certifications you are pursuing. We provide a clear, flat-fee proposal before any work begins. Your initial consultation is always free. Contact us to get a quote tailored to your situation.",
      },
    ],
  },
  {
    id: "market-ready",
    label: "Market Ready Program",
    items: [
      {
        q: "What is the Market Ready Program?",
        a: "The Market Ready Program is a structured readiness initiative designed to help diverse suppliers position themselves competitively in corporate and government supply chains. It covers business assessment, capability development, pitch preparation, and procurement matchmaking.",
      },
      {
        q: "Who is the Market Ready Program for?",
        a: "The program is designed for small and diverse businesses — including MBE, WBE, WOSB, and SDVOB certified firms — that want to break into new markets, respond to larger RFPs, or strengthen their supplier profile. You do not need to already be certified to apply.",
      },
      {
        q: "What does the program include?",
        a: "Participants receive a business readiness assessment, one-on-one coaching sessions, help building capability statements and pitch materials, guidance on certification pathways, and introductions to relevant procurement opportunities and decision-makers.",
      },
      {
        q: "What outcomes can I expect?",
        a: "By the end of the program, you will have a polished capability statement, a clear understanding of which procurement channels to target, a stronger grasp of how to respond to RFPs, and direct connections to buyers and supplier diversity managers at corporations and government agencies.",
      },
      {
        q: "How long does the Market Ready Program take?",
        a: "The core program runs eight to twelve weeks, depending on where your business is starting from. An accelerated track is available for businesses that are already partially market-ready.",
      },
      {
        q: "What do I need to apply?",
        a: "You need to be an active business with at least one diversity certification or be actively pursuing one. During intake, we'll ask for a brief overview of your business, your target markets, and your current challenges.",
      },
      {
        q: "Is there a cost to participate?",
        a: "Program fees vary based on scope and business size. Some cohorts are offered at reduced or no cost through partnerships with corporate sponsors and government agencies. Contact us to find out what options are currently available.",
      },
      {
        q: "Will this program guarantee contracts?",
        a: "No program can guarantee contracts, and we won't claim otherwise. What we do guarantee is that participants leave with stronger positioning, better materials, and real connections to procurement decision-makers.",
      },
    ],
  },
  {
    id: "speaker-series",
    label: "Speaker Series",
    items: [
      {
        q: "What is the R Mo Speaker Series?",
        a: "The R Mo Speaker Series is a recurring educational program featuring procurement leaders, certified diverse business owners, and subject-matter experts. Each session delivers practical insights on navigating government and corporate supply chains, understanding certification pathways, and building a competitive business profile.",
      },
      {
        q: "Who should attend?",
        a: "The Speaker Series is designed for diverse business owners, entrepreneurs, and professionals looking to break into government and corporate procurement markets. It is especially valuable for businesses that are newly certified, actively pursuing certification, or seeking their first major contract.",
      },
      {
        q: "What topics are covered?",
        a: "Topics rotate each session but regularly include: how to leverage your certification to win contracts, navigating federal and state RFP processes, building a winning capability statement, supplier diversity trends, and real-world success stories from certified business owners.",
      },
      {
        q: "How often does the Speaker Series run?",
        a: "Sessions are held periodically throughout the year. Visit our Calendar page or follow us on LinkedIn to stay informed about upcoming events and registration openings.",
      },
      {
        q: "How do I register for an event?",
        a: "Registration details are listed on our Calendar page. Most events require advance sign-up as spaces are limited to ensure an interactive experience. We recommend registering early.",
      },
      {
        q: "Is there a cost to attend?",
        a: "Many sessions are offered at no cost or for a nominal fee. Pricing details are listed on each event's registration page. Some events are sponsored and offered free to qualifying diverse business owners.",
      },
      {
        q: "Can I speak at or sponsor a Speaker Series event?",
        a: "We welcome speakers and sponsors who align with our mission of empowering diverse businesses. If you're interested in presenting, partnering, or sponsoring an upcoming session, reach out through our Contact page and we'll be in touch.",
      },
    ],
  },
];

function FaqItem({ id, q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        marginBottom: "10px",
        background: "#fff",
        transition: "border-color 0.2s ease",
        ...(open ? { borderColor: "var(--green)" } : {}),
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
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
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "14px 20px 18px",
            fontSize: "15px",
            color: "var(--body)",
            lineHeight: 1.7,
            borderTop: "1px solid var(--line)",
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
    <section ref={sectionRef} id={category.id} style={{ marginBottom: "48px" }}>
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
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
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
            {/* <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {FAQ_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "9px 12px",
                    background: activeTopic === cat.id ? "var(--green-tint)" : "transparent",
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: activeTopic === cat.id ? 600 : 400,
                    color: activeTopic === cat.id ? "var(--green)" : "var(--body)",
                    transition: "background 0.15s ease, color 0.15s ease",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </nav> */}

            {/* CTA card */}
            <div
              style={{
                marginTop: "24px",
                background: "var(--green)",
                borderRadius: "var(--radius-sm)",
                padding: "18px 16px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#eef7f0", marginBottom: "8px", lineHeight: 1.4 }}>
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
