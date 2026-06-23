/* global React, Ic, Avatar, LogoCarousel */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ======================= TEAM ======================= */
const LEADERS = [
  {
    name: "Ranjani Mohana",
    role: "The Certification Lady / CEO",
    image: "rmollc_har_extracted_images/rmollc_har_extracted_images/team_images/Ranjani-300-dpi-300x212-150x150-1.jpg",
  },
  {
    name: "Roshini Chandran",
    role: "Advisor",
    image: "rmollc_har_extracted_images/rmollc_har_extracted_images/team_images/Roshini-1-300x200-1-150x150-1.jpg",
  },
];

function Team() {
  return (
    <section className="team pad-y" id="team">
      <div className="wrap">
        <div className="section-head center reveal" ps="5">
          <h2>Leadership Team</h2>
        </div>
        <div className="leaders reveal">
          {LEADERS.map((l, i) => (
            <div className="leader" key={l.name}>
              <Avatar name={l.name} src={l.image} alt={l.name} />
              <div>
                <span className="role-pill">{i === 0 ? "Leadership" : "Advisory"}</span>
                <h3>{l.name}</h3>
                <p>{l.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-cta reveal">
          <a href="team.html" className="btn btn-ghost">
            Meet the team {Ic.arrow}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================= TESTIMONIALS ======================= */
const SCRAPED_ROOT_B = "rmollc_scraped_data/rmollc_scrape/";
const TESTIMONIALS = [
  {
    quote: "Ranjani helped us get certified as MBE through WRMSDC. Her attention to detail and ability to guide us through the process was commendable. Because of her help, we were able to complete the process within three months and become a proud MBE. I highly recommend her services to any business.",
    name: "Laura Gordon",
    role: "CEO at Red Oak Technologies",
  },
  {
    quote: "Ranjani was so helpful in guiding my company through the process of getting certified as a woman-owned business. She is extremely knowledgeable about all of the steps involved. She saved me hundreds of hours that would have eaten up my time if I had tried to do it on my own. I would highly recommend her services!",
    name: "Thuy Fontelera",
    role: "Principal, Founder at Element Structural Engineers Inc",
  },
  {
    quote: "It is with great pleasure to write a statement of recommendation for Ranjani and her team at R Mo Global Diversity Solutions. They were able to support me in obtaining my 8(a) certification from the SBA. Their professionalism and patience made a very daunting process doable!",
    name: "Lark Hilliard",
    role: "President & CFO, Hilliard Architects",
  },
  {
    quote: "It is with great pleasure to write a statement of recommendation for Ranjani and her team at R Mo Global Diversity Solutions. They were able to support me in obtaining my 8(a) certification from the SBA. Their professionalism and patience made a very daunting process doable!",
    name: "Brian James",
    role: "Vice-President, James Consolidated",
  },
  {
    quote: "I had worked with Roshini while getting our business certifications. She is an excellent person to work with, very prompt in responses and reliable. An excellent communicator and team player, she comes across as a true professional. I would highly recommend her to anyone looking to get their business certifications.",
    name: "Jayashree (Jaya) Srikanthan",
    role: "Founder, Talent Junction, LLC",
  },
  {
    quote: "Ranjani has been a great support to me from the day I started my business two years ago. She has helped my company become both Certified Minority Business Enterprise and Small Business Enterprise certified. She has not only helped my company with the certifications but also continues to support us.",
    name: "Maurice Webb",
    role: "Business Advisor at SBDC Silicon Valley",
  },
  {
    quote: "Ranjani is the expert on getting certifications to compete for government and corporate contracts. She explains this complicated process, gets the work done quickly, and assists in securing the certification and, in my case, a contract.",
    name: "Ivette Santaella",
    role: "Attorney at Blackwell Santaella & Jahangiri LLP",
  },
  {
    quote: "Ranjani worked very hard to partner with KeenAlignment and get us our WBEC certification. She is diligent, persevering, and unstoppable. She models the behavior we all want in top performers. We could not have gotten certification without her!",
    name: "Margareth Graziano",
    role: "Corporate Culture Transformation Expert, Margareth Graziano",
  },
];

function Testimonials() {
  const [i, setI] = useStateB(0);
  const timer = useRefB(null);
  const n = TESTIMONIALS.length;
  const reset = () => { clearInterval(timer.current); timer.current = setInterval(() => setI(p => (p + 1) % n), 7000); };
  useEffectB(() => { reset(); return () => clearInterval(timer.current); }, []);
  const go = (idx) => { setI((idx + n) % n); reset(); };
  const t = TESTIMONIALS[i];
  return (
    <section className="testi pad-y" id="testi">
      <div className="wrap">
        <blockquote className="testi-quote" key={i}>
          <span className="mark">&ldquo;</span>{t.quote}<span className="mark">&rdquo;</span>
        </blockquote>
        <div className="testi-foot">
          <div className="testi-author">
            <Avatar name={t.name} className="testi-av" />
            <div>
              <div className="a-name">{t.name}</div>
              <div className="a-role">{t.role}</div>
            </div>
          </div>
          <div className="testi-nav">
            <button aria-label="Previous" onClick={() => go(i - 1)}>{Ic.chevL}</button>
            <button aria-label="Next" onClick={() => go(i + 1)}>{Ic.chevR}</button>
          </div>
        </div>
        <div className="testi-dots">
          {TESTIMONIALS.map((_, idx) => (
            <span key={idx} className={idx === i ? "on" : ""} onClick={() => go(idx)} aria-label={"Testimonial " + (idx + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= ABOUT (mission + vision) ======================= */
const OBJECTIVES = [
  {
    ic: Ic.badge,
    title: "For Diverse Businesses",
    items: [
      "Support businesses in obtaining and maintaining diversity certifications.",
      "Guide clients to design and implement measurable social and economic impact strategies.",
      "Equip suppliers with tools to showcase their strengths and compete successfully in government and corporate markets.",
    ],
  },
  {
    ic: Ic.handshake,
    title: "For Corporates & Government",
    items: [
      "Assist in certifying and developing their diverse supplier base.",
      "Strengthen corporate supplier diversity programs by aligning with impact-driven strategies.",
      "Provide insights and visibility to help corporates meet and exceed diversity spend goals.",
    ],
  },
  {
    ic: Ic.rocket,
    title: "For the R Mo Team",
    items: [
      "Invest in continuous learning and professional growth of our global team.",
      "Foster innovation and process excellence to better serve clients.",
      "Build a culture of collaboration, integrity, and social responsibility.",
    ],
  },
];

function About() {
  return (
    <section className="about pad-y" id="about">
      <div className="wrap">
        <div className="about-intro reveal" style={{ marginBottom: "clamp(20px,3vw,36px)" }}>
          <p className="about-tag">&ldquo;Empowering businesses to certify, impact &amp; thrive.&rdquo;</p>
        </div>
        <div className="mv-stack reveal">
          <div className="mv-card">
            <div className="mv-head">
              <span className="mv-ic">{Ic.target}</span>
              <h3>Our Mission</h3>
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
              <h3>Our Vision</h3>
            </div>
            <p>
              R Mo envisions being the trusted bridge between businesses and opportunities—empowering
              them with certifications, elevating their economic and social impact, and positioning
              them to thrive in government and corporate markets.
            </p>
          </div>
        </div>
        <div className="section-head center reveal obj-section-head">
          <span className="eyebrow eyebrow-lg">Objectives</span>
          {/* <h2>What We Strive to Achieve</h2> */}
        </div>
        <div className="obj-grid reveal">
          {OBJECTIVES.map((o, i) => (
            <div className="obj-card" key={o.title}>
              <div className="obj-head">
                <span className="obj-ic">{o.ic}</span>
                <h4>{o.title}</h4>
              </div>
              <ul>
                {o.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= CERTIFICATIONS ======================= */
const CERTS = [
  {
    name: "SBA 8(a) Certified",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/download-2-q16jpe99t657zno4ea3c2xc48r9to4vfa7slo6hm2o.png",
  },
  {
    name: "DBE Certified",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/dbe-logo-q16jpdbfmc3xo1phjropifknndeggfroy3546wj08w.png",
  },
  {
    name: "CA.Gov Certified",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/CA.Gov_.Certified-1920w-q16k8qrohemoypkef55vwjkof9wt3uoixz7ea7sw00.png",
  },
  {
    name: "WBENC Certified Women's Business Enterprise",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/certified-wbenc-womens-business-enterprise-logo-vector-q16jpg4y6u7smvle3awl7wv1fj0k3j2vyh3kmqetq8.png",
  },
  {
    name: "WRMSDC",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/jmxkKun__400x400-q16jpg4y6u7smvle3awl7wv1fj0k3j2vyh3kmqetq8.png",
  },
  {
    name: "USPAACC Certified Asian American Business",
    imageSrc: SCRAPED_ROOT_B + "images/certifications/download-1-q16jpf74006ib9mr8shynf3ku556vtz5mcg35gg7wg.png",
  },
];

function Certifications() {
  return null;
}

Object.assign(window, { Team, Testimonials, About, Certifications });
