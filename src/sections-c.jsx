/* global React, Ic */
const { useState: useStateC, useEffect: useEffectC } = React;

/* ======================= CONTACT ======================= */
function rndCaptcha() {
  const a = 1 + Math.floor(Math.random() * 8);
  const b = 1 + Math.floor(Math.random() * 8);
  return { a, b };
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "District of Columbia",
];

function ContactForm() {
  const [form, setForm] = useStateC({ name: "", email: "", companyName: "", message: "", captcha: "" });
  const [touched, setTouched] = useStateC({});
  const [sum, setSum] = useStateC(rndCaptcha);
  const [sent, setSent] = useStateC(false);

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Enter a valid email address." : "",
    companyName: form.companyName.trim().length < 2 ? "Please enter your company name." : "",
    message: form.message.trim().length < 8 ? "Tell us a little more (min 8 characters)." : "",
    captcha: parseInt(form.captcha, 10) !== sum.a + sum.b ? "Incorrect answer." : "",
  };

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched(t => ({ ...t, [k]: true }));
  const newCaptcha = () => {
    setSum(rndCaptcha());
    setForm(f => ({ ...f, captcha: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, companyName: true, message: true, captcha: true });
    if (Object.values(errors).some(Boolean)) return;
    setSent(true);
  };

  const fieldCls = (k) => "field" + (touched[k] && errors[k] ? " invalid" : "");

  return (
    <div className="contact-form-shell">
      {sent ? (
        <div className="form-card">
          <div className="sent-banner">
            <span className="check">{Ic.check}</span>
            <div>
              <div className="sent-banner-title">Message sent - thank you!</div>
              <div className="sent-banner-subtitle">We've received your note and will reply to {form.email} shortly.</div>
            </div>
          </div>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setSent(false);
              setForm({ name: "", email: "", companyName: "", message: "", captcha: "" });
              setTouched({});
              newCaptcha();
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="form-card" onSubmit={submit} noValidate>
          <div className="field-row">
            <div className={fieldCls("name")}>
              <label>Your name</label>
              <input type="text" name="name" autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={set("name")} onBlur={blur("name")} />
              <span className="err">{errors.name}</span>
            </div>
            <div className={fieldCls("email")}>
              <label>Email address</label>
              <input type="email" name="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} onBlur={blur("email")} />
              <span className="err">{errors.email}</span>
            </div>
          </div>
          <div className={fieldCls("companyName")}>
            <label>Company name</label>
            <input type="text" name="companyName" autoComplete="organization" placeholder="Acme Co." value={form.companyName} onChange={set("companyName")} onBlur={blur("companyName")} />
            <span className="err">{errors.companyName}</span>
          </div>
          <div className={fieldCls("message")}>
            <label>Your message</label>
            <textarea name="message" autoComplete="off" placeholder="Tell us about your business and what you're looking for..." value={form.message} onChange={set("message")} onBlur={blur("message")} />
            <span className="err">{errors.message}</span>
          </div>
          <div className={"captcha" + (touched.captcha && errors.captcha ? " " : "")}>
            <span className="q">What is {sum.a} + {sum.b}?</span>
            <input type="text" inputMode="numeric" placeholder="Answer" value={form.captcha} onChange={set("captcha")} onBlur={blur("captcha")} />
            <button type="button" className="refresh" aria-label="New question" onClick={newCaptcha}>{Ic.refresh}</button>
          </div>
          {touched.captcha && errors.captcha && (
            <div className="form-msg bad">{errors.captcha}</div>
          )}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Send message {Ic.arrow}</button>
            <span className="form-disclaimer">We never share your details.</span>
          </div>
        </form>
      )}
    </div>
  );
}

function Contact() {
  return (
    <section className="contact pad-y" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2>Ready to get certified?</h2>
          <p className="lead">
            Join the diverse businesses we've helped earn certifications and win opportunities.
          </p>
          <div className="contact-list">
            <div className="row">
              <span className="ci">{Ic.mail}</span>
              <div>
                <span className="lbl">Email</span>
                <a href="mailto:info@rmollc.com" className="val">info@rmollc.com</a>
              </div>
            </div>
            <div className="row">
              <span className="ci">{Ic.phone}</span>
              <div>
                <span className="lbl">Phone</span>
                <a href="tel:9252550177" className="val">925 255 0177</a>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal d1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ======================= PRE-FOOTER CTA ======================= */
function footerContactHref() {
  const page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  return page === "index.html" || page === "contact-us.html" ? "#contact" : "contact-us.html#contact";
}

function goToFooterContact(e) {
  const href = footerContactHref();
  if (href !== "#contact") return;
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function PreFooterCta() {
  return (
    <section className="prefooter-cta">
      <div className="wrap">
        <div className="prefooter-inner reveal">
          <div className="prefooter-text">
            <h2>Not sure where to start?</h2>
            <p>Book a free consultation — we'll map out the right certification path for your business, no commitment required.</p>
          </div>
          <a href={footerContactHref()} className="btn btn-light" onClick={goToFooterContact}>
            Book a Free Consultation {Ic.arrow}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================= FOOTER ======================= */
function Footer() {
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView(); };
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <p className="f-about">
              Our vision is to be the catalyst for diversified businesses to successfully venture into the Government &amp; Corporate Sectors
            </p>
          </div>
          <div className="f-col">
            <h4>Contact</h4>
            <div className="f-line"><span className="lab">Phone</span><a href="tel:9252550177" className="footer-muted-text">925 255 0177</a></div>
            <div className="f-line"><span className="lab">Email</span><a href="mailto:info@rmollc.com" className="footer-muted-text">info@rmollc.com</a></div>
            <a href={footerContactHref()} onClick={goToFooterContact}>Send a message</a>
          </div>
          <div className="f-col">
            <h4>Services</h4>
            <a href="services/professional-services.html">Professional Services</a>
            <a href="services/business-growth-programs.html">Business Growth Programs</a>

          </div>
          <div className="f-col">
            <h4>Useful Links</h4>
            <a href="team.html">Team</a>
            <a href="blog.html">Blog</a>
            <a href="faq.html">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} R Mo Global Diversity Solutions. All rights reserved.</span>
          <div className="socials">
            <a href="https://www.linkedin.com/company/r-mo-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{Ic.linkedin}</a>
            <a href="https://twitter.com/rmollc" target="_blank" rel="noopener noreferrer" aria-label="X">{Ic.x}</a>
            <a href="https://www.facebook.com/rmollc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">{Ic.fb}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ToTop() {
  const [show, setShow] = useStateC(false);
  useEffectC(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={"to-top" + (show ? " show" : "")} aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{Ic.up}</button>
  );
}

Object.assign(window, { Contact, ContactForm, Footer, ToTop, PreFooterCta });
