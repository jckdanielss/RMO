/* global React, Ic */
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

/* ======================= CONTACT ======================= */
function rndCaptcha() {
  const a = 1 + Math.floor(Math.random() * 8);
  const b = 1 + Math.floor(Math.random() * 8);
  return { a, b };
}

function Contact() {
  const [form, setForm] = useStateC({ name: "", email: "", message: "", captcha: "" });
  const [touched, setTouched] = useStateC({});
  const [sum, setSum] = useStateC(rndCaptcha);
  const [sent, setSent] = useStateC(false);

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Enter a valid email address." : "",
    message: form.message.trim().length < 8 ? "Tell us a little more (min 8 characters)." : "",
    captcha: parseInt(form.captcha, 10) !== sum.a + sum.b ? "Incorrect answer." : "",
  };
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched(t => ({ ...t, [k]: true }));
  const newCaptcha = () => { setSum(rndCaptcha()); setForm(f => ({ ...f, captcha: "" })); };

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true, captcha: true });
    if (Object.values(errors).some(Boolean)) return;
    setSent(true);
  };

  const fieldCls = (k) => "field" + (touched[k] && errors[k] ? " invalid" : "");

  return (
    <section className="contact pad-y" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Looking for collaboration?</h2>
          <p className="lead">
            Whether you're starting your certification journey or chasing your next contract,
            we'd love to help. Send a note and our team will get back to you.
          </p>
          <div className="contact-list">
            <div className="row">
              <span className="ci">{Ic.mail}</span>
              <div><div className="lbl">Email</div><div className="val">info@rmollc.com</div></div>
            </div>
            <div className="row">
              <span className="ci">{Ic.clock}</span>
              <div><div className="lbl">Response time</div><div className="val">Within 1–2 business days</div></div>
            </div>
            <div className="row">
              <span className="ci">{Ic.badge}</span>
              <div><div className="lbl">Specialty</div><div className="val">Diversity certification &amp; procurement</div></div>
            </div>
          </div>
        </div>

        <div className="reveal d1">
          {sent ? (
            <div className="form-card">
              <div className="sent-banner">
                <span className="check">{Ic.check}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>Message sent — thank you!</div>
                  <div style={{ fontSize: 14, marginTop: 2 }}>We've received your note and will reply to {form.email} shortly.</div>
                </div>
              </div>
              <button className="btn btn-ghost" style={{ marginTop: 20 }}
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "", captcha: "" }); setTouched({}); newCaptcha(); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="form-card" onSubmit={submit} noValidate>
              <div className="field-row">
                <div className={fieldCls("name")}>
                  <label>Your name</label>
                  <input type="text" placeholder="Jane Doe" value={form.name} onChange={set("name")} onBlur={blur("name")} />
                  <span className="err">{errors.name}</span>
                </div>
                <div className={fieldCls("email")}>
                  <label>Email address</label>
                  <input type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} onBlur={blur("email")} />
                  <span className="err">{errors.email}</span>
                </div>
              </div>
              <div className={fieldCls("message")}>
                <label>Your message</label>
                <textarea placeholder="Tell us about your business and what you're looking for…" value={form.message} onChange={set("message")} onBlur={blur("message")} />
                <span className="err">{errors.message}</span>
              </div>
              <div className={"captcha" + (touched.captcha && errors.captcha ? " " : "")}>
                <span className="q">What is {sum.a} + {sum.b}?</span>
                <input type="text" inputMode="numeric" placeholder="Answer" value={form.captcha} onChange={set("captcha")} onBlur={blur("captcha")} />
                <button type="button" className="refresh" aria-label="New question" onClick={newCaptcha}>{Ic.refresh}</button>
              </div>
              {touched.captcha && errors.captcha && (
                <div className="form-msg bad" style={{ marginTop: -8, marginBottom: 14 }}>{errors.captcha}</div>
              )}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send email {Ic.arrow}</button>
                <span style={{ fontSize: 13.5, color: "var(--muted)" }}>We never share your details.</span>
              </div>
            </form>
          )}
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
            <div className="brand">
              <span className="brand-mark">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M20 8.5 28.6 13.3v9.5L20 27.5l-8.6-4.7v-9.5L20 8.5Z" fill="#1a9c3e"/>
                  <path d="M16 14.6h5.1c2 0 3.3 1.1 3.3 2.9 0 1.3-.7 2.2-1.9 2.6l2.2 3.6h-2.5l-1.9-3.2H18v3.2h-2V14.6Zm2 4.1h2.8c.9 0 1.4-.4 1.4-1.2s-.5-1.1-1.4-1.1H18v2.3Z" fill="#fff"/>
                </svg>
              </span>
              <span className="brand-text">
                <span className="name">RMO Global</span>
                <span className="tag">Diversity Solutions</span>
              </span>
            </div>
            <p className="f-about">
              Impacting diversity through thoughts, actions &amp; progress — the catalyst for
              diverse businesses entering the corporate and government markets.
            </p>
          </div>
          <div className="f-col">
            <h4>Contact</h4>
            <div className="f-line"><span className="lab">Collaboration</span>info@rmollc.com</div>
            <a href="#contact" onClick={(e) => go(e, "contact")}>Send a message</a>
            <a href="#about" onClick={(e) => go(e, "about")}>About us</a>
          </div>
          <div className="f-col">
            <h4>Services</h4>
            <a href="#services" onClick={(e) => go(e, "services")}>Diversity Certification</a>
            <a href="#services" onClick={(e) => go(e, "services")}>Procurement</a>
            <a href="#services" onClick={(e) => go(e, "services")}>IT Services</a>
            <a href="#services" onClick={(e) => go(e, "services")}>Start-Up Guidance</a>
          </div>
          <div className="f-col">
            <h4>Useful Links</h4>
            <a href="#top" onClick={(e) => go(e, "top")}>Home</a>
            <a href="#team" onClick={(e) => go(e, "team")}>Team</a>
            <a href="#clients" onClick={(e) => go(e, "clients")}>Clients</a>
            <a href="#certifications" onClick={(e) => go(e, "certifications")}>Certifications</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RMO Global Diversity Solutions. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">{Ic.linkedin}</a>
            <a href="#" aria-label="X">{Ic.x}</a>
            <a href="#" aria-label="Facebook">{Ic.fb}</a>
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

Object.assign(window, { Contact, Footer, ToTop });
