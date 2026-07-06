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
  // {
  //   id: "certifications",
  //   label: "Certifications",
  //   items: [],
  // },
  {
    id: "market-ready",
    label: "Market Ready Program",
    items: [
      {
        q: "What is the Market Ready Program (MRP)?",
        a: "The Market Ready Program (MRP) is designed exclusively for R Mo certified clients to help them move beyond certification and become procurement-ready. The program equips businesses with practical tools, strategies, and confidence to effectively market themselves to corporate buyers and government agencies.",
      },
      {
        q: "Why was the Market Ready Program created?",
        a: "Many businesses successfully obtain certifications but are unsure how to leverage them. The Market Ready Program bridges that gap by helping certified businesses understand how to maximize the value of their certifications and prepare for meaningful business opportunities.",
      },
      {
        q: "Who can participate in the Market Ready Program?",
        a: "The program is offered to R Mo certified clients who are committed to growing their business and actively pursuing corporate and government contracting opportunities.",
      },
      {
        q: "What is covered in MRP – Session I?",
        a: "Session I: Maximizing Your Certification focuses on helping businesses understand how to effectively use their certifications. Topics include:",
        bullets: [
          "Understanding supplier diversity programs",
          "Using certifications strategically",
          "Building visibility with corporate buyers",
          "Networking effectively",
          "Creating a post-certification action plan",
          "Avoiding common mistakes after certification",
        ],
        outro: "Participants leave with practical steps they can immediately implement to increase their visibility and readiness.",
      },
      {
        q: "What is covered in MRP – Session II?",
        a: "Session II: Capability Statement & Supplier Presentation Readiness helps businesses prepare to professionally introduce themselves to procurement professionals. Participants receive guidance on:",
        bullets: [
          "Developing or refining their capability statement",
          "Creating a compelling elevator pitch",
          "Presenting their business with confidence",
          "Highlighting their differentiators and certifications",
        ],
      },
      {
        q: "What makes Session II unique?",
        a: "One of the most valuable aspects of Session II is the opportunity for participants to present their capability statement and elevator pitch live during a Zoom session attended by invited corporate representatives and procurement professionals. These corporate guests provide constructive feedback, helping businesses strengthen their presentation and better understand what buyers look for when evaluating suppliers.",
      },
      {
        q: "Is the Market Ready Program included with R Mo certification services?",
        a: "Yes. The Market Ready Program is one of the ways R Mo continues to support certified clients beyond the certification process by helping them become procurement-ready.",
      },
      {
        q: "What are the benefits of participating in the Market Ready Program?",
        a: "Participants gain:",
        bullets: [
          "Greater confidence when meeting with buyers",
          "A stronger understanding of procurement expectations",
          "Improved marketing materials",
          "Enhanced presentation skills",
          "Practical strategies for leveraging their certifications",
          "Valuable feedback from corporate professionals",
        ],
      },
    ],
  },
  {
    id: "speaker-series",
    label: "Speaker Series",
    items: [
      {
        q: "What is the MRP Speaker Series?",
        a: "The MRP Speaker Series is a complimentary educational initiative hosted by R Mo Global Diversity Solutions. The series features industry experts, procurement professionals, corporate leaders, and business specialists who share practical knowledge to help businesses grow and succeed.",
      },
      {
        q: "Who can attend the Speaker Series?",
        a: "The sessions are open to business owners, entrepreneurs, certified suppliers, and businesses interested in learning about supplier diversity, procurement, and business growth.",
      },
      {
        q: "What topics are covered?",
        a: "Topics vary throughout the year and may include:",
        bullets: [
          "Procurement readiness",
          "Government contracting",
          "RFP and bid preparation",
          "Capability statements",
          "Cybersecurity",
          "Marketing and branding",
          "Financial management",
          "Business certifications",
          "Supplier diversity trends",
          "Corporate procurement expectations",
        ],
      },
      {
        q: "Why should I attend the Speaker Series?",
        a: "The Speaker Series provides practical insights from experienced professionals and offers attendees the opportunity to stay informed about current trends, best practices, and business opportunities.",
      },
      {
        q: "Is there a cost to attend?",
        a: "No. The MRP Speaker Series is provided as a complimentary educational resource to support the growth and success of the small business community.",
      },
      {
        q: "How often are Speaker Series sessions held?",
        a: "Sessions are scheduled throughout the year and feature a variety of speakers and topics relevant to business growth and supplier development.",
      },
      {
        q: "Can I suggest a topic or become a speaker?",
        a: "Yes. R Mo welcomes suggestions for future topics and speakers. We are always looking to bring valuable, relevant content to our business community.",
      },
      {
        q: "How do I register for upcoming sessions?",
        a: "Upcoming Speaker Series sessions are listed on our website's Calendar page. Businesses may register online to reserve their spot and receive event details.",
      },
    ],
  },
  {
    id: "diversity-certification",
    label: "Diversity Certification",
    items: [
      {
        q: "Why is diversity certification important?",
        a: "Many corporations and government agencies actively seek certified suppliers as part of their supplier diversity and inclusion initiatives. Certification can help businesses:",
        bullets: [
          "Gain visibility with corporate buyers",
          "Access supplier diversity opportunities",
          "Compete for contracts and bids",
          "Build credibility and trust",
          "Participate in networking and development programs",
        ],
      },
      {
        q: "Who should get certified?",
        a: "Any qualifying business that wants to grow through corporate, government, or supplier diversity opportunities should consider certification. This includes:",
        bullets: [
          "Small businesses",
          "Consultants",
          "Service providers",
          "Manufacturers",
          "Technology firms",
          "Construction companies",
          "Professional service firms",
          "Global suppliers entering the U.S. market",
        ],
      },
      {
        q: "What types of diversity certifications are available?",
        a: "There are many certification programs available depending on your business ownership and goals. Common certifications include:",
        bullets: [
          "Minority-Owned Business (MBE)",
          "Women-Owned Business (WBE/WOSB)",
          "Disadvantaged Business Enterprise (DBE)",
          "Veteran-Owned Business (VOSB/SDVOSB)",
          "LGBTQ+ Certification",
          "Disability-Owned Business Certification",
          "Small Business Certifications (SBE/LBE)",
          "8(a) and HUBZone Certifications",
          "Global Certifications through WEConnect International and MSDUK",
        ],
      },
      {
        q: "How long does the certification process take?",
        a: "The timeline depends on the certification agency and the readiness of your documentation. On average:",
        bullets: [
          "Some certifications may take 30–60 days",
          "Others may take 3–6 months",
          "Government certifications can sometimes take longer",
        ],
        outro: "Proper preparation and accurate documentation can significantly speed up the process.",
      },
      {
        q: "Do certifications need to be renewed?",
        a: "Yes. Most certifications require annual renewal to maintain active status. Renewals help certification agencies confirm that the business still meets eligibility requirements and remains operational.",
      },
      {
        q: "What documents are typically required?",
        a: "Requirements vary by certification, but common documents include:",
        bullets: [
          "Business licenses",
          "Tax returns",
          "Operating agreements or bylaws",
          "Ownership documents",
          "Financial statements",
          "Resumes of owners",
          "Proof of citizenship or ethnicity (if applicable)",
        ],
      },
      {
        q: "Will certification guarantee contracts?",
        a: "Certification does not guarantee contracts or business awards. However, it increases visibility and access to opportunities that may not otherwise be available. Businesses that actively market themselves and build relationships typically gain the most value from certification.",
      },
      {
        q: "Who looks at diversity certifications?",
        a: "Certified businesses are often reviewed by:",
        bullets: [
          "Corporate supplier diversity teams",
          "Procurement departments",
          "Government agencies",
          "Prime contractors",
          "Purchasing managers",
          "Diversity councils and industry partners",
        ],
      },
      {
        q: "Can a business have more than one certification?",
        a: "Yes. Many businesses qualify for multiple certifications depending on ownership structure, size, location, and industry. For example, a business may simultaneously hold:",
        bullets: ["WBE", "MBE", "Small Business", "DBE", "Local or state certifications"],
      },
      {
        q: "Are certifications available internationally?",
        a: "Yes. Some certifications are recognized globally and help businesses connect with international corporate buyers and supplier diversity programs. R Mo supports both U.S. and global certification initiatives.",
      },
      {
        q: "How can R Mo Global Diversity Solutions help?",
        a: "R Mo Global Diversity Solutions provides end-to-end support throughout the certification journey, including:",
        bullets: [
          "Certification eligibility assessment",
          "Documentation preparation",
          "Application submission support",
          "Renewal assistance",
          "Corporate supplier certification programs",
          "Procurement readiness guidance",
          "Market Ready training and mentoring",
        ],
      },
      {
        q: "What happens after certification?",
        a: "Certification is only the beginning. Businesses should continue to:",
        bullets: [
          "Build relationships with buyers",
          "Improve capability statements",
          "Attend networking and procurement events",
          "Respond to opportunities",
          "Participate in supplier development programs",
        ],
        outro: "R Mo helps businesses become \"market ready\" after certification to maximize opportunities and growth.",
      },
    ],
  },
];

function FaqItem({ id, q, a, bullets, outro }) {
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
          maxHeight: open ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "14px 20px 18px",
            borderTop: "1px solid var(--line)",
          }}
        >
          <p style={{ margin: 0, fontSize: "15px", color: "var(--body)", lineHeight: 1.7 }}>
            {a}
          </p>
          {bullets && bullets.length > 0 && (
            <ul
              style={{
                margin: "10px 0 0",
                paddingLeft: "20px",
                fontSize: "15px",
                color: "var(--body)",
                lineHeight: 1.7,
              }}
            >
              {bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: "4px" }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {outro && (
            <p style={{ margin: "10px 0 0", fontSize: "15px", color: "var(--body)", lineHeight: 1.7 }}>
              {outro}
            </p>
          )}
        </div>
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
        <FaqItem
          key={i}
          id={`${category.id}-${i}`}
          q={item.q}
          a={item.a}
          bullets={item.bullets}
          outro={item.outro}
        />
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
