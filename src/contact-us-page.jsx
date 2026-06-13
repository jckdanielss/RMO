/* global React, ReactDOM, Nav, Footer, ToTop, ContactForm, Ic */
const { useEffect: useEffectContactPage } = React;

function useScrollRevealContactPage() {
  useEffectContactPage(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function ContactUsPage() {
  useScrollRevealContactPage();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="contact-page-shell pad-y" id="contact">
          <div className="wrap">
            <div className="contact-page-head reveal">
              <span className="eyebrow">We'd love to hear from you</span>
              <h1>Stay Connected</h1>
              <p>
                Reach out with questions, project details, or partnership ideas and we'll get back to you shortly.
              </p>
            </div>

            <div className="contact-page-layout">
              <section className="contact-page-map-card reveal">
                <div className="contact-page-map-frame">
                  <iframe
                    title="RM Worthy Virtual Assistants Location"
                    src="https://maps.google.com/maps?q=RM%20Worthy%20Virtual%20Assistants%2C%20Manuella%20Ville%20Subdivision%2C%20California%20St%2C%20San%20Agustin%20II%2C%20Dasmarinas%2C%204114%20Cavite&ll=14.3236013,120.9485632&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-page-copy">
                  <p className="contact-page-summary">
                    We are here to answer any question you may have. Feel free to reach us through the contact form or using the details below.
                  </p>
                  <div className="contact-page-detail-list">
                    <div className="contact-page-detail">
                      <span className="contact-page-detail-ic">{Ic.pin}</span>
                      <div>
                        <div className="contact-page-detail-label">Office</div>
                        <div className="contact-page-detail-value">
                          RM Worthy Virtual Assistants<br />
                          Manuella Ville Subdivision, California St<br />
                          San Agustin II, Dasmarinas, 4114 Cavite
                        </div>
                      </div>
                    </div>
                    <div className="contact-page-detail">
                      <span className="contact-page-detail-ic">{Ic.clock}</span>
                      <div>
                        <div className="contact-page-detail-label">Business Hours</div>
                        <div className="contact-page-detail-value">Monday - Friday, 9 AM - 5 PM PST</div>
                      </div>
                    </div>
                    <div className="contact-page-detail">
                      <span className="contact-page-detail-ic">{Ic.mail}</span>
                      <div>
                        <div className="contact-page-detail-label">Email</div>
                        <a href="mailto:info@rmollc.com" className="contact-page-detail-link">info@rmollc.com</a>
                      </div>
                    </div>
                    <div className="contact-page-detail">
                      <span className="contact-page-detail-ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z"/></svg>
                      </span>
                      <div>
                        <div className="contact-page-detail-label">Phone</div>
                        <a href="tel:9252550177" className="contact-page-detail-link">925 255 0177</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contact-page-form reveal d1">
                <ContactForm />
              </section>
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
