/* global React, ReactDOM, Ic, Nav, Footer, ToTop */
const { useEffect: useEffectRFP } = React;

function useScrollRevealRFP() {
  useEffectRFP(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const RFP_LEAD_PARAGRAPHS = [
  "U.S. government agencies acquire more goods and services than any other group in the world. Similarly, state and local government agencies spend billions of dollars on products and services each year.",
  "Government agencies often need to purchase goods and services with public resources and for public purposes to fulfill their functions. Such purchases are generally referred to as government/public procurement.",
  "Government related purchasing activity in the United States is often highly regulated. A substantial number of businesses find it profitable to cater almost exclusively to government procurement needs as it presents tremendous business opportunities.",
  "We at R Mo Diversity Solutions value the time of our clients. We research on RFPs and contracts that are pertaining to our clients and assist in compiling the bid package, finding a JV partner or teaming partner to be able to collectively procure larger contracts.",
];

const OPEN_OPPORTUNITIES = [
  { due: "June 27th", title: "County of Sacramento", link: "Fentanyl Public Awareness Campaign" },
];

function RfpBidAssistancePage() {
  useScrollRevealRFP();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="svc-page-hero">
          <div className="wrap">
            <nav className="svc-breadcrumb reveal" aria-label="Breadcrumb">
              <a href="services.html">Services</a>
              <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
              <a href="services/professional-services.html">Professional Services</a>
              <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
              <span aria-current="page">RFP / Bid Package Assistance</span>
            </nav>
            <div className="reveal d1">
              <h1>RFP / Bid Package Assistance</h1>
              <p className="svc-page-lead">
                Most bids are lost in the writing, not the work. We build RFP responses that are accurate, tight, and ready to submit.
              </p>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap" style={{ maxWidth: "760px" }}>
            {RFP_LEAD_PARAGRAPHS.map((p, i) => (
              <p key={i} className="reveal" style={{ color: "var(--body)", lineHeight: 1.75, marginBottom: "18px", fontSize: "15.5px" }}>{p}</p>
            ))}
            <p className="reveal" style={{ color: "var(--body)", lineHeight: 1.75, fontSize: "15.5px" }}>
              If you'd like to learn more about RFPs and contracts bidding, please email us at{" "}
              <a href="mailto:info@rmollc.com" style={{ color: "var(--green)", fontWeight: 600 }}>info@rmollc.com</a>.
            </p>
          </div>
        </section>

        <section className="pad-y" style={{ background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Open Opportunities</span>
              <h2>Current RFPs &amp; Bids</h2>
            </div>
            <div className="mv-card reveal d1" style={{ padding: 0, overflow: "hidden", marginTop: "clamp(24px,3vw,32px)" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14.5px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--line)" }}>
                      <th style={{ padding: "14px 20px", textAlign: "left", color: "var(--ink)" }}>Due Date</th>
                      <th style={{ padding: "14px 20px", textAlign: "left", color: "var(--ink)" }}>Title</th>
                      <th style={{ padding: "14px 20px", textAlign: "left", color: "var(--ink)" }}>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPEN_OPPORTUNITIES.map((o) => (
                      <tr key={o.title} style={{ borderBottom: "1px solid var(--line)" }}>
                        <td style={{ padding: "16px 20px", color: "var(--body)" }}>{o.due}</td>
                        <td style={{ padding: "16px 20px", color: "var(--body)" }}>{o.title}</td>
                        <td style={{ padding: "16px 20px", color: "var(--body)" }}>{o.link}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("rfp-bid-assistance-root")).render(<RfpBidAssistancePage />);
