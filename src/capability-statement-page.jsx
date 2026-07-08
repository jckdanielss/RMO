/* global React, ReactDOM, Ic, Nav, Footer, ToTop, PreFooterCta, contactHrefForCurrentPage */
const { useEffect: useEffectCS, useState: useStateCS } = React;

const CS_IMAGE = "capability-statement/RMO-Capability-Statement-June-2026.png";
const CS_QR_IMAGE = "assets/qr-contact-us.png";

function CsImageLightbox({ onClose }) {
  useEffectCS(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cs-lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Capability statement full-size image viewer">
      <button className="cs-lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <img
        src={CS_IMAGE}
        alt="R Mo Global Diversity Solutions capability statement — full size"
        className="cs-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function useScrollRevealCS() {
  useEffectCS(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const ORG_FACTS = [
  { label: "Established", value: "2011" },
  { label: "CAGE", value: "6WA27" },
  { label: "DUNS", value: "048316894" },
  { label: "UEI", value: "ZRK1KH84YCJ3" },
  { label: "NAICS", value: "541611, 541612, 541613, 541618, 561410" },
];

const WHY_PARTNER = [
  { stat: "400+", label: "Clients Certified" },
  { stat: "6", label: "Certification Levels Covered — Local to Federal" },
  { stat: "2", label: "Dedicated Service Lines — Certification & Growth" },
  { stat: "1", label: "Point of Contact From Application to Contract" },
];

const CORPORATE_CLIENTS = [
  "Meta", "CBRE", "Republic Services", "CDW", "Promethean Builders", "Google",
  "California Water Service", "Autodesk", "FHLBank San Francisco", "San Jose Water Company",
];

function CapabilityStatementPage() {
  useScrollRevealCS();
  const [lightboxOpen, setLightboxOpen] = useStateCS(false);

  return (
    <React.Fragment>
      <Nav />
      <main>
        {/* 1. Hero */}
        <section className="svc-page-hero">
          <div className="wrap cs-hero-inner">
            <div className="reveal d1 cs-hero-text">
              <h1>Capability Statement</h1>
              <p className="svc-page-lead">
                A single, procurement-ready overview of who R Mo is, what we do, and the certifications and programs behind our track record.
              </p>
              <div className="prefooter-actions" style={{ marginTop: "24px" }}>
                <a href="#cs-download" className="btn btn-primary">Download Capability Statement {Ic.arrow}</a>
                <a href={contactHrefForCurrentPage()} className="btn btn-light">Contact Us</a>
              </div>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "10px 28px",
                marginTop: "28px", fontSize: "13.5px", color: "rgba(255,255,255,0.75)",
              }}>
                {ORG_FACTS.map((f) => (
                  <span key={f.label}><strong style={{ color: "#fff" }}>{f.label}:</strong> {f.value}</span>
                ))}
              </div>
            </div>
            <div className="cs-viewer-wrap reveal d2">
              <button
                type="button"
                className="cs-viewer"
                onClick={() => setLightboxOpen(true)}
                aria-label="Open full-size capability statement in image viewer"
              >
                <div className="cs-viewer-bar">
                  <span className="cs-viewer-dot" />
                  <span className="cs-viewer-dot" />
                  <span className="cs-viewer-dot" />
                  <span className="cs-viewer-label">RMO-Capability-Statement.png</span>
                </div>
                <div className="cs-viewer-body">
                  <img src={CS_IMAGE} alt="R Mo Global Diversity Solutions capability statement preview" loading="lazy" />
                </div>
              </button>
              <button type="button" className="btn btn-primary cs-viewer-cta" onClick={() => setLightboxOpen(true)}>
                View Full Image {Ic.arrow}
              </button>
            </div>
          </div>
        </section>

        {lightboxOpen && <CsImageLightbox onClose={() => setLightboxOpen(false)} />}

        {/* 2. Who We Are */}
        <section className="pad-y" id="about">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Organization Overview</span>
              <h2>Who We Are</h2>
              <p>
                R Mo Global Diversity Solutions equips diverse businesses with the certifications, strategies, and visibility they need to compete for — and win — government and corporate contracts. We work on both sides of the table: certifying and preparing suppliers, and helping corporate and government partners build and meet their supplier diversity goals.
              </p>
            </div>
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
            <p className="reveal" style={{ textAlign: "center", marginTop: "clamp(24px,3vw,32px)", fontSize: "14.5px", color: "var(--muted)" }}>
              See our full core competencies, growth programs, and certifications on the{" "}
              <a href="mission-vision.html" style={{ color: "var(--green)", fontWeight: 600 }}>Mission &amp; Vision page</a>.
            </p>
            <div className="mv-card reveal" style={{ marginTop: "clamp(24px,3vw,36px)", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <img
                src="rmollc_har_extracted_images/rmollc_har_extracted_images/team_images/Ranjani-300-dpi-300x212-150x150-1.jpg"
                alt="Ranjani Mohana"
                style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <div>
                <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "16px", marginBottom: "4px" }}>
                  Ranjani Mohana — <span style={{ color: "var(--green)" }}>"The Certification Lady"</span>
                </p>
                <p style={{ color: "var(--body)", fontSize: "15px", lineHeight: 1.7 }}>
                  In 2011, Ranjani identified how arduous the certification process was for diverse businesses and founded R Mo to fix it. She has since led the certification of over 400 clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Partner With RMO */}
        <section className="pad-y" style={{ background: "var(--green-deep)", color: "#fff" }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow" style={{ color: "#7ff0a0" }}>Why Partner With RMO</span>
              <h2 style={{ color: "#fff" }}>A Track Record You Can Verify</h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "clamp(24px,4vw,40px)",
              textAlign: "center",
              marginTop: "clamp(32px,4vw,48px)",
            }} className="reveal d1">
              {WHY_PARTNER.map(({ stat, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "clamp(32px,4.5vw,48px)", fontWeight: 800, color: "#fff", margin: "0 0 8px", fontFamily: "var(--font-display)", lineHeight: 1 }}>{stat}</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Corporate Clients */}
        <section className="pad-y">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Corporate Clients</span>
              <h2>Businesses We've Worked With</h2>
            </div>
            <div className="reveal d1" style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center",
              gap: "12px 20px", marginTop: "clamp(24px,3vw,36px)",
            }}>
              {CORPORATE_CLIENTS.map((name) => (
                <span key={name} style={{
                  padding: "8px 18px", borderRadius: "999px", border: "1px solid var(--line)",
                  fontSize: "14px", fontWeight: 600, color: "var(--ink)", background: "#fff",
                }}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Download */}
        <section className="pad-y" id="cs-download">
          <div className="wrap">
            <div className="mv-card accent reveal cs-download-card" style={{ padding: "clamp(36px,5vw,56px)" }}>
              <div style={{ textAlign: "center", flex: "1 1 360px" }}>
                <div className="mv-head" style={{ justifyContent: "center" }}>
                  <span className="mv-ic">{Ic.doc}</span>
                  <h3>Get the Full Capability Statement</h3>
                </div>
                <p style={{ maxWidth: "560px", margin: "0 auto 24px" }}>
                  Download the official R Mo capability statement — certifications, competencies, past performance, and contact details in one procurement-ready PDF.
                </p>
                <a href="capability-statement/RMO-Capability-Statement.pdf" className="btn btn-light" download>
                  Download Capability Statement (PDF) {Ic.arrow}
                </a>
                <p style={{ marginTop: "16px", fontSize: "13.5px", opacity: 0.85 }}>
                  Don't have it yet? <a href={contactHrefForCurrentPage()} style={{ color: "inherit", textDecoration: "underline" }}>Contact us</a> and we'll send it directly.
                </p>
              </div>
              <a href={contactHrefForCurrentPage()} className="cs-qr-block" aria-label="Scan the QR code to open the Contact Us page">
                <img src={CS_QR_IMAGE} alt="QR code linking to the R Mo Contact Us page" width="128" height="128" />
                <span>Scan to contact us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <PreFooterCta />
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("capability-root")).render(<CapabilityStatementPage />);
