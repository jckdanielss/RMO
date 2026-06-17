/* global React, ReactDOM, Nav, Footer, ToTop */
const { useState, useEffect } = React;

// ── New Clients data ──────────────────────────────────────────────────────────
const NEW_CLIENTS_DATA = [
  {
    id: 1,
    logo: "new_clients/heal_horizon.png",
    title: "Celebrating Heal Horizon's WBE Certification with WBEC-Pacific",
    brief: "Congratulations to Heal Horizon on their recent WBE certification from the Women's Business Enterprise Council – Pacific!",
    paragraphs: [
      "Congratulations to Heal Horizon on their recent WBE certification from the Women's Business Enterprise Council – Pacific!",
      "We're honored to celebrate this significant milestone with Angel Jesudass of Heal Horizon Inc. This innovative company is a trusted partner in providing compassionate home healthcare, dedicated to helping people live full and independent lives in the comfort of their own homes.",
      "A special thank you to the Women's Business Enterprise Council – Pacific (WBEC-Pacific) for their dedication to empowering women-owned businesses. This certification is vital for creating new avenues for growth and ensuring long-term success.",
      "At R Mo Global Diversity Solutions, we're dedicated to more than just the certification process; we prepare our clients to be Market Ready for the opportunities that follow.",
      "A huge shoutout to our team member Arnav Chauhan for his exceptional guidance and support in achieving this outcome!",
      "To the entire Heal Horizon Inc. team, congratulations on this well-deserved achievement! We're proud to be a part of your success story.",
      "#ClientWins #SupplierDiversity #WBE #CertifiedAndThriving #MarketReady #RMoGlobalDiversitySolutions #HomeHealthcare #TheCertificationLady",
    ],
  },
  {
    id: 2,
    logo: "new_clients/panzer_solutions.png",
    title: "Panzer Solutions LLC Achieves MBE Certification with GNEMSDC",
    brief: "Huge congratulations to Panzer Solutions LLC for their MBE certification from the Greater New England Minority Supplier Development Council.",
    paragraphs: [
      "Huge congratulations to Panzer Solutions LLC for their MBE certification from the Greater New England Minority Supplier Development Council.",
      "So proud to celebrate with Venkata Jayashri Chintalapudi and Prasad Chintalapudi, the leaders behind Panzer Solution. They help businesses with all their IT needs, from cloud and data to building the right team.",
      "A big thank you to the Greater New England Minority Supplier Development Council, Inc. (GNEMSDC) for helping businesses like this get ahead. Certifications like this open doors.",
      "At R Mo Global Diversity Solutions, our mission is to do more than just get our clients certified. We prepare them to be Market Ready for what comes next.",
      "A huge shoutout to our team member Arnav Chauhan for his expert support in making this happen!",
      "To the entire Panzer Solution team, congrats again on this well-deserved win. We're proud to be a part of your journey.",
    ],
  },
  {
    id: 3,
    logo: "new_clients/cloud_data_vision.png",
    title: "Cloud Data Vision Achieves WOSB Certification with WBCS",
    brief: "Congratulations to Cloud Data Vision on their recent WOSB certification from the Women's Business Council – Southwest!",
    paragraphs: [
      "Congratulations to Cloud Data Vision on their recent WOSB certification from the Women's Business Council – Southwest!",
      "We're proud to celebrate this significant milestone with Amruta Barot, the visionary leader behind Cloud Data Vision. This Dallas-based company is a trusted partner for the life sciences industry, dedicated to delivering advanced clinical data analytics, AI, and managed IT solutions that drive innovation and efficiency.",
      "A special thank you to the Women's Business Council – Southwest for their ongoing commitment to empowering and championing women-owned businesses. These certifications are crucial for unlocking new growth opportunities and ensuring long-term success.",
      "At R Mo Global Diversity Solutions, our mission is to do more than just facilitate the certification process; we prepare our clients to be Market Ready for the opportunities that follow.",
      "A huge shoutout to our team member Stephanie Valenzuela for her exceptional guidance and support in making this happen!",
      "To the entire Cloud Data Vision team, congratulations on this well-deserved achievement! We're honored to be a part of your success story.",
    ],
  },
  {
    id: 4,
    logo: "new_clients/anveta_inc.png",
    title: "Anveta, Inc. Secures MBE & SBE Certifications: A Milestone in Healthcare Staffing",
    brief: "Congratulations to Anveta, Inc. on their recent MBE and SBE certifications from the Dallas/Fort Worth Minority Supplier Development Council!",
    paragraphs: [
      "Congratulations to Anveta, Inc. on their recent MBE and SBE certifications from the Dallas/Fort Worth Minority Supplier Development Council!",
      "We're proud to celebrate this significant milestone with Renuka Samudrala, the visionary leader behind Anveta Health. This Dallas-based company is a trusted partner in healthcare staffing, dedicated to connecting healthcare facilities with exceptional professionals to ensure quality patient care.",
      "A special thank you to the DFW Minority Supplier Development Council for their ongoing commitment to empowering and championing minority-owned businesses. These certifications are crucial for unlocking new growth opportunities and ensuring long-term success.",
      "At R Mo Global Diversity Solutions, our mission is to do more than just facilitate the certification process; we prepare our clients to be Market Ready for the opportunities that follow.",
      "A huge shoutout to our team member Nisha Rawat for her exceptional guidance and support in achieving this outcome!",
      "To the entire Anveta Health team, congratulations on this well-deserved achievement! We're honored to be a part of your success story.",
    ],
  },
  {
    id: 5,
    logo: "new_clients/datanitiv.png",
    title: "Celebrating Datanitiv's MBE Certification: A Milestone in Growth and Innovation",
    brief: "Congratulations to Datanitiv on their recent MBE certification from the Georgia Minority Supplier Development Council!",
    paragraphs: [
      "Congratulations to Datanitiv on their recent MBE certification from the Georgia Minority Supplier Development Council!",
      "We're proud to celebrate this significant milestone with Mohit Shah, the visionary leader behind Datanitiv. This Georgia-based technology company is dedicated to empowering businesses with data and intelligent planning solutions, helping them achieve operational effectiveness and digital transformation.",
      "A special thank you to the Georgia Minority Supplier Development Council (GMSDC) for their ongoing commitment to championing minority-owned businesses. These certifications are crucial for unlocking new growth opportunities and ensuring long-term success.",
      "At R Mo Global Diversity Solutions, our mission is to do more than just facilitate the certification process; we prepare our clients to be Market Ready for the opportunities that follow.",
      "A huge shoutout to our team member Stephanie Valenzuela for her exceptional guidance and support in achieving this outcome!",
      "To the entire Datanitiv team, congratulations on this well-deserved achievement! We're honored to be a part of your success story.",
    ],
  },
  {
    id: 6,
    logo: "new_clients/fortune_minds_llc.png",
    title: "Fortune Minds Inc. Earns WBE Certification: A Milestone of Excellence",
    brief: "Congratulations to Fortune Minds Inc. and Sandhya Konda on achieving the prestigious WBE Certification!",
    paragraphs: [
      "Congratulations to Fortune Minds Inc. and Sandhya Konda on achieving the prestigious WBE Certification!",
      "This remarkable milestone reflects your dedication, resilience, and unwavering commitment to excellence. We're proud to celebrate this success with you and excited to see the doors this certification will open.",
      "A special thank you to the Women's Business Enterprise Council – Pacific (WBEC-Pacific) for your continued efforts to uplift and empower diverse businesses with greater visibility and meaningful opportunities.",
      "At R Mo Global Diversity Solutions, we're honored to stand beside bold, visionary leaders like you. Through our Market Ready Program (MRP), we equip businesses with the tools, strategies, and guidance to grow confidently, from expanding networks to mastering the certification journey.",
      "Ready to elevate your business? Let's connect and build your personalized roadmap to success.",
    ],
  },
  {
    id: 7,
    logo: "new_clients/heal_horizon_mbe.png",
    title: "Celebrating Heal Horizon's MBE Certification Milestone",
    brief: "Congratulations to Heal Horizon, Inc. on their recent MBE certification from the Southern California Minority Supplier Development Council!",
    paragraphs: [
      "Congratulations to Heal Horizon, Inc. on their recent MBE certification from the Southern California Minority Supplier Development Council!",
      "We are honored to celebrate this significant milestone with Angel Jesudass, the visionary leader behind Heal Horizon. This dedicated healthcare staffing company is committed to optimizing patient care by seamlessly connecting healthcare facilities with highly qualified professionals who share a passion for service excellence.",
      "A special thank you to the Southern California Minority Supplier Development Council (SCMSDC) for their ongoing dedication to empowering and championing minority-owned businesses. Certifications like these are essential for unlocking new opportunities and ensuring long-term success.",
      "At R Mo Global Diversity Solutions, our mission is to do more than just facilitate the certification process; we prepare our clients to be Market Ready for the opportunities that follow.",
      "A huge shoutout to our team member Arnav Chauhan for her exceptional guidance and support in achieving this outcome!",
      "To the entire Heal Horizon team, congratulations on this well-deserved achievement! We're proud to be a part of your journey.",
    ],
  },
  {
    id: 8,
    logo: "new_clients/opswerks.png",
    title: "OpsWerks Earns MBE Certification: A New Chapter of Growth",
    brief: "Congratulations to OpsWerks on becoming MBE certified by the Northwest Mountain Minority Supplier Development Council!",
    paragraphs: [
      "Congratulations to OpsWerks on becoming MBE certified by the Northwest Mountain Minority Supplier Development Council!",
      "We're thrilled to celebrate this milestone with Steve Kwan and Jodie Ann Kwan, the leaders behind OpsWerks, a company transforming infrastructure operations for some of the world's most innovative teams.",
      "Thank you to Northwest Mountain Minority Supplier Development Council for supporting and uplifting minority-owned businesses. Certifications like this help build bridges to bigger opportunities and long-term growth.",
      "At R Mo Global Diversity Solutions, we don't just guide our clients through the certification process — we help prepare them to be Market Ready for the future.",
      "Shoutout to our team member Maria Rama Iseman for her expert support throughout the journey!",
      "To the OpsWerks team, congratulations again! We're honored to be part of your story.",
    ],
  },
  {
    id: 9,
    logo: "new_clients/vinsari_llc.png",
    title: "Vinsari LLC Achieves MBE & SBE Certification with DFW MSDC",
    brief: "Congratulations to Vinsari LLC on becoming MBE and SBE certified by the Dallas/Fort Worth Minority Supplier Development Council!",
    paragraphs: [
      "Congratulations to Vinsari LLC on becoming MBE and SBE certified by the Dallas/Fort Worth Minority Supplier Development Council!",
      "We're excited to celebrate this achievement with Satish (Bob) Gogineni, the leader behind Vinsari, a Texas-based construction company delivering quality, innovation, and reliability in every project.",
      "Thank you to DFW Minority Supplier Development Council MSDC for continuing to empower and support minority-owned businesses. Certifications like these open doors to new opportunities and long-term success.",
      "At R Mo Global Diversity Solutions, we don't just guide our clients through the certification process — we help prepare them to be Market Ready for what's next.",
      "Shoutout to our team member Maria Rama Iseman for her expert support in making this happen!",
      "To the Vinsari team, congratulations once again! We're proud to be part of your journey.",
    ],
  },
];

// ── Category config ───────────────────────────────────────────────────────────
// To replace a placeholder icon with a real photo, set `image` to a file path.
const CATEGORIES = [
  {
    id: "new_clients",
    label: "New Clients",
    data: NEW_CLIENTS_DATA,
    image: "blogs/new_clients_white_background.jpeg",
    accent: "#1a9c3e",
    bg: "linear-gradient(150deg,#0c4f20 0%,#1a9c3e 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="20" r="8" />
        <path d="M6 52c0-8.8 7.2-16 16-16" />
        <circle cx="42" cy="20" r="8" />
        <path d="M58 52c0-8.8-7.2-16-16-16" />
        <path d="M28 38l4 5 4-5" />
        <path d="M26 43h12" />
        <path d="M32 48v-5" />
      </svg>
    ),
  },
  {
    id: "renewal_clients",
    label: "Renewal Clients",
    data: [],
    image: "blogs/renewal_clients_on_white_background.jpeg",
    accent: "#2563eb",
    bg: "linear-gradient(150deg,#1e3a8a 0%,#3b82f6 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 32a20 20 0 0 1 33.7-14.6L50 22" />
        <path d="M52 32a20 20 0 0 1-33.7 14.6L14 42" />
        <path d="M44 12l6 10-10 2" />
        <path d="M20 52l-6-10 10-2" />
      </svg>
    ),
  },
  {
    id: "networking_events",
    label: "Networking Events",
    data: [],
    image: "blogs/networking_events.jpeg",
    accent: "#7c3aed",
    bg: "linear-gradient(150deg,#4c1d95 0%,#8b5cf6 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="12" r="5" />
        <circle cx="12" cy="48" r="5" />
        <circle cx="52" cy="48" r="5" />
        <circle cx="32" cy="36" r="5" />
        <line x1="32" y1="17" x2="32" y2="31" />
        <line x1="32" y1="41" x2="15" y2="45" />
        <line x1="32" y1="41" x2="49" y2="45" />
        <line x1="32" y1="17" x2="15" y2="44" />
        <line x1="32" y1="17" x2="49" y2="44" />
      </svg>
    ),
  },
  {
    id: "motivational_quotes",
    label: "Motivational Quotes",
    data: [],
    image: "blogs/motivational_quotes.jpeg",
    accent: "#b45309",
    bg: "linear-gradient(150deg,#78350f 0%,#d97706 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h10v10l-4 8H12V20z" />
        <path d="M32 20h10v10l-4 8H32V20z" />
        <path d="M16 44h6M36 44h6" />
      </svg>
    ),
  },
];

const PER_PAGE = 6;

// ── Close icon ────────────────────────────────────────────────────────────────
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// ── BlogModal ─────────────────────────────────────────────────────────────────
function BlogModal({ post, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(12,26,18,0.70)",
        backdropFilter: "blur(5px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(12px,4vw,28px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "var(--radius-lg)",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 8px 40px rgba(12,79,32,.18), 0 2px 8px rgba(0,0,0,.08)",
        }}
      >
        {/* Top bar */}
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button
            onClick={onClose}
            style={{
              background: "var(--bg-soft)", border: "none", borderRadius: "50%",
              width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--muted)",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", padding: "0 32px 36px" }}>
          <img
            src={post.logo}
            alt={post.title}
            style={{
              width: "100%", display: "block",
              borderRadius: "var(--radius)",
              marginBottom: "24px",
            }}
          />
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.25 }}>
            {post.title}
          </h2>
          {post.paragraphs.map((p, i) => (
            <p key={i} style={{ color: "var(--body)", lineHeight: 1.75, marginBottom: "14px", fontSize: "15px" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── BlogCard ──────────────────────────────────────────────────────────────────
function BlogCard({ post, onClick }) {
  const [hov, setHov] = useState(false);
  const preview = post.brief.length > 130 ? post.brief.slice(0, 130) + "…" : post.brief;

  return (
    <div
      onClick={() => onClick(post)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: "var(--radius)",
        boxShadow: hov ? "var(--shadow-lg)" : "var(--shadow)",
        cursor: "pointer",
        overflow: "hidden",
        transition: "box-shadow 0.22s, transform 0.22s",
        transform: hov ? "translateY(-5px)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ overflow: "hidden", flexShrink: 0 }}>
        <img
          src={post.logo}
          alt={post.title}
          style={{
            width: "100%",
            aspectRatio: "4/3",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.38s",
            transform: hov ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3 style={{ fontSize: "15.5px", fontWeight: 700, lineHeight: 1.35, color: "var(--ink)", margin: 0 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, flex: 1, margin: 0 }}>
          {preview}
        </p>
        <span style={{
          fontSize: "13.5px", color: "var(--green)", fontWeight: 600,
          display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "4px",
        }}>
          Read more
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────
function Pagination({ page, total, onChange }) {
  const totalPages = Math.ceil(total / PER_PAGE);
  if (totalPages <= 1) return null;

  const btnBase = {
    border: "1.5px solid var(--line)", background: "#fff",
    cursor: "pointer", fontWeight: 600, fontSize: "14px",
    fontFamily: "var(--font-body)", transition: "background 0.18s, color 0.18s, border-color 0.18s",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginTop: "48px", flexWrap: "wrap" }}>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        style={{
          ...btnBase,
          padding: "8px 18px",
          borderRadius: "var(--radius-sm)",
          color: page === 0 ? "var(--muted)" : "var(--ink)",
          cursor: page === 0 ? "not-allowed" : "pointer",
          opacity: page === 0 ? 0.5 : 1,
        }}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          style={{
            ...btnBase,
            width: 38, height: 38, borderRadius: "var(--radius-sm)",
            background: i === page ? "var(--green)" : "#fff",
            borderColor: i === page ? "var(--green)" : "var(--line)",
            color: i === page ? "#fff" : "var(--ink)",
          }}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages - 1}
        style={{
          ...btnBase,
          padding: "8px 18px",
          borderRadius: "var(--radius-sm)",
          color: page >= totalPages - 1 ? "var(--muted)" : "var(--ink)",
          cursor: page >= totalPages - 1 ? "not-allowed" : "pointer",
          opacity: page >= totalPages - 1 ? 0.5 : 1,
        }}
      >
        Next
      </button>
    </div>
  );
}

// ── CategoryCard ──────────────────────────────────────────────────────────────
function CategoryCard({ cat, onClick }) {
  const [hov, setHov] = useState(false);
  const empty = cat.data.length === 0;

  return (
    <div
      onClick={() => !empty && onClick(cat)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: "var(--radius)",
        overflow: "hidden",
        cursor: empty ? "default" : "pointer",
        boxShadow: hov && !empty ? "var(--shadow-lg)" : "var(--shadow)",
        transform: hov && !empty ? "translateY(-5px)" : "none",
        transition: "box-shadow 0.22s, transform 0.22s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image / gradient placeholder */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0 }}>
        {cat.image ? (
          <img
            src={cat.image}
            alt={cat.label}
            style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transition: "transform 0.38s",
              transform: hov ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: cat.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {cat.icon}
          </div>
        )}
        {empty && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.32)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", opacity: 0.9 }}>
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Label */}
      <div style={{ padding: "16px 14px 18px", background: "#fff", textAlign: "center" }}>
        <span style={{
          fontSize: "17.5px", fontWeight: 800, color: "var(--ink)",
          fontFamily: "var(--font-display)", display: "block",
        }}>
          {cat.label}
        </span>
        {!empty && (
          <span style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px", display: "block" }}>
            {cat.data.length} {cat.data.length === 1 ? "post" : "posts"}
          </span>
        )}
      </div>
    </div>
  );
}

// ── CategoryView ──────────────────────────────────────────────────────────────
function CategoryView({ cat, onBack }) {
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(null);

  const start = page * PER_PAGE;
  const visible = cat.data.slice(start, start + PER_PAGE);

  function changePage(p) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {modal && <BlogModal post={modal} onClose={() => setModal(null)} />}

      <section style={{ padding: "clamp(52px,8vw,88px) 0 clamp(64px,10vw,100px)" }}>
        <div className="wrap">
          {/* Back + heading */}
          <div style={{ marginBottom: "40px" }}>
            <button
              onClick={onBack}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--green)", fontWeight: 700, fontSize: "14px",
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: 0, marginBottom: "20px", fontFamily: "var(--font-body)",
              }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Back to Categories
            </button>

            <span className="eyebrow" style={{ display: "block", marginBottom: "10px" }}>Blog</span>
            <h2 style={{ fontSize: "clamp(26px,4vw,40px)" }}>{cat.label}</h2>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "15px" }}>
              {cat.data.length} {cat.data.length === 1 ? "post" : "posts"}
            </p>
          </div>

          {/* Cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "28px",
          }}>
            {visible.map((post) => (
              <BlogCard key={post.id} post={post} onClick={setModal} />
            ))}
          </div>

          <Pagination page={page} total={cat.data.length} onChange={changePage} />
        </div>
      </section>
    </>
  );
}

// ── CategoriesView ────────────────────────────────────────────────────────────
function CategoriesView({ onSelect }) {
  return (
    <section style={{ padding: "clamp(52px,8vw,88px) 0 clamp(64px,10vw,100px)" }}>
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: "40px" }}>
          <span className="eyebrow">Blog</span>
          <h2 style={{ marginTop: "14px" }}>Categories</h2>
          <p style={{ marginTop: "14px" }}>
            Browse our stories by topic  from client wins to networking events and beyond.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "24px",
        }}>
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} onClick={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BlogPage ──────────────────────────────────────────────────────────────────
function BlogPage() {
  const [active, setActive] = useState(null);

  return (
    <React.Fragment>
      <Nav />
      <main>
        {/* Hero banner */}
        <div style={{
          background: "linear-gradient(150deg, var(--green-deep) 0%, var(--green) 100%)",
          color: "#fff",
          padding: "clamp(90px,14vw,150px) var(--pad) clamp(56px,8vw,88px)",
          textAlign: "center",
        }}>
          <span style={{
            display: "block", fontWeight: 600, fontSize: "12.5px",
            letterSpacing: "0.16em", textTransform: "uppercase",
            opacity: 0.75, marginBottom: "14px",
          }}>
            R Mo Global Diversity Solutions
          </span>
          <h1 style={{
            fontSize: "clamp(34px,5vw,58px)", fontWeight: 800,
            color: "#fff", marginBottom: "18px", lineHeight: 1.06,
          }}>
            Our Blog
          </h1>
          <p style={{
            maxWidth: "500px", margin: "0 auto",
            opacity: 0.85, fontSize: "17px", lineHeight: 1.65,
          }}>
            Stories, milestones, and insights celebrating the businesses we serve and the progress we make together.
          </p>
        </div>

        {/* Categories or posts */}
        {active
          ? <CategoryView cat={active} onBack={() => setActive(null)} />
          : <CategoriesView onSelect={setActive} />
        }
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("blog-root")).render(<BlogPage />);
