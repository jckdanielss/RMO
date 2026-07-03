/* global React, ReactDOM, Ic, Nav, Footer, ToTop */

const CS_IMAGE = "capability-statement/RMO-Capability-Statement-June-2026.png";

const downloadIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px" }}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

function CapabilityStatementPage() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="cs-only">
          <div className="wrap">
            <div className="cs-only-inner">
              <img
                className="cs-flyer"
                src={CS_IMAGE}
                alt="R Mo Global Diversity Solutions capability statement — company facts, certifications, differentiators, and corporate clients"
              />
              <div className="cs-only-actions">
                <a href={CS_IMAGE} className="btn btn-primary" download="RMO-Capability-Statement.png">
                  {downloadIcon} Download Capability Statement
                </a>
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

ReactDOM.createRoot(document.getElementById("capability-root")).render(<CapabilityStatementPage />);
