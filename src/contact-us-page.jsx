/* global React, ReactDOM, Nav, Footer, ToTop, Contact, Ic */

function ContactUsPage() {
  return (
    <React.Fragment>
      <Nav />
      <main>

        {/* Hero */}
        <section className="svc-page-hero">
          <div className="wrap">
            <div className="reveal d1">
              <h1>Contact Us</h1>
              <p className="svc-page-lead">
                Have questions or ready to get started? Reach out and we'll get back to you shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form (reuses existing Contact component) */}
        <Contact />

        {/* Info + Map */}
        <section className="pad-y" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>

              {/* Contact details */}
              <div className="reveal">
                <span className="eyebrow eyebrow-lg" style={{ marginBottom: "20px", display: "block" }}>Find Us</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span style={{ color: "var(--green)", marginTop: "2px", flexShrink: 0 }}>{Ic.pin}</span>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "4px" }}>Office</div>
                      <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        R Mo Global Diversity Solutions<br />
                        Walnut Creek, CA
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ color: "var(--green)", flexShrink: 0 }}>{Ic.clock}</span>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "4px" }}>Business Hours</div>
                      <div style={{ color: "var(--muted)" }}>Monday – Friday, 9 AM – 5 PM PST</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ color: "var(--green)", flexShrink: 0 }}>{Ic.mail}</span>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "4px" }}>Email</div>
                      <a href="mailto:info@rmollc.com" style={{ color: "var(--green)" }}>info@rmollc.com</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ color: "var(--green)", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z"/></svg>
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "4px" }}>Phone</div>
                      <a href="tel:9252550177" style={{ color: "var(--green)" }}>925 255 0177</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map embed */}
              <div className="reveal d1" style={{ borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "0 4px 24px rgba(20,32,26,.10)", minHeight: "360px" }}>
                <iframe
                  title="R Mo Office Location"
                  src="https://maps.google.com/maps?q=R+Mo+Global+Diversity+Solutions+Walnut+Creek+CA&output=embed&z=15"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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

ReactDOM.createRoot(document.getElementById("contact-us-root")).render(React.createElement(ContactUsPage));
