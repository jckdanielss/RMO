/* global React, ReactDOM, Ic, Nav, Footer, ToTop, contactHrefForCurrentPage */
const { useEffect: useEffectDC } = React;

function useScrollRevealDC() {
  useEffectDC(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const CERT_ROWS = [
  ["Preliminary to Certifications:", "DUNS – SAM – NAICS Codes"],
  ["MBE:", "Minority Business Enterprise"],
  ["WBE:", "Women Business Enterprise (WBENC/WOSB/WDWOSB)"],
  ["DBE:", "Disadvantaged Business Enterprise"],
  ["DVBE:", "Disabled Veteran Business Enterprise"],
  ["8(a):", "Small Business Business Development Program"],
  ["HUBZone:", "HUBZone Designated Area Certification"],
  ["GSA Schedules:", "General Services Administration"],
  ["LGBT:", "Gay, Lesbian, Bisexual, & Transgender Business Certification"],
  ["County Certifications:", "Some of the counties have their own eligibility requirement. For example Howard County in the State of Maryland have their own MBE/WBE certification requirement."],
  ["State Certifications:", "States have their own certifications to qualify for their contracts"],
  ["Specific Business Certifications:", "Certain business have their own certifications. For example, Utilities Commission of California have their own CPUC certification to qualify for their contracts."],
  ["Corporate Supplier Registrations:", "Corporations require for their supplier"],
];

function DiversityCertificationsPage() {
  useScrollRevealDC();

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
              <span aria-current="page">Diversity Certifications</span>
            </nav>
            <div className="reveal d1">
              <h1>Diversity Certifications</h1>
              <p className="svc-page-lead">
                Here are some of the business certifications that R Mo Business Solutions professionals work on.
              </p>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
            <div className="mv-card reveal" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14.5px" }}>
                  <tbody>
                    {CERT_ROWS.map(([label, value]) => (
                      <tr key={label} style={{ borderBottom: "1px solid var(--line)" }}>
                        <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--ink)", width: "34%", verticalAlign: "top", whiteSpace: "nowrap" }}>{label}</td>
                        <td style={{ padding: "16px 20px", color: "var(--body)", lineHeight: 1.65 }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reveal d1" style={{ textAlign: "center", marginTop: "clamp(28px,4vw,40px)" }}>
              <a href={contactHrefForCurrentPage()} className="btn btn-primary">
                I Want To Know What Certifications I Qualify For! {Ic.arrow}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("diversity-certifications-root")).render(<DiversityCertificationsPage />);
