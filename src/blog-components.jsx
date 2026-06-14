/* global React, Nav, Footer, ToTop */
/* Shared blog UI components — used by all category pages */
const { useState, useEffect } = React;

const PER_PAGE = 6;

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
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button
            onClick={onClose}
            style={{
              background: "var(--bg-soft)", border: "none", borderRadius: "50%",
              width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--muted)",
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div style={{ overflowY: "auto", padding: "0 32px 36px" }}>
          <img
            src={post.logo}
            alt={post.title}
            style={{ width: "100%", display: "block", borderRadius: "var(--radius)", marginBottom: "24px" }}
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
            width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block",
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

  const btn = {
    border: "1.5px solid var(--line)", background: "#fff",
    cursor: "pointer", fontWeight: 600, fontSize: "14px",
    fontFamily: "var(--font-body)", transition: "background 0.18s, color 0.18s, border-color 0.18s",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginTop: "48px", flexWrap: "wrap" }}>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        style={{ ...btn, padding: "8px 18px", borderRadius: "var(--radius-sm)", color: page === 0 ? "var(--muted)" : "var(--ink)", opacity: page === 0 ? 0.5 : 1, cursor: page === 0 ? "not-allowed" : "pointer" }}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          style={{ ...btn, width: 38, height: 38, borderRadius: "var(--radius-sm)", background: i === page ? "var(--green)" : "#fff", borderColor: i === page ? "var(--green)" : "var(--line)", color: i === page ? "#fff" : "var(--ink)" }}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages - 1}
        style={{ ...btn, padding: "8px 18px", borderRadius: "var(--radius-sm)", color: page >= totalPages - 1 ? "var(--muted)" : "var(--ink)", opacity: page >= totalPages - 1 ? 0.5 : 1, cursor: page >= totalPages - 1 ? "not-allowed" : "pointer" }}
      >
        Next
      </button>
    </div>
  );
}

// ── CategoryPage — full page wrapper used by each category ────────────────────
// Props: title (string), data (array of posts), accent (css color string)
function CategoryPage({ title, data, accent }) {
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(null);

  const color = accent || "var(--green)";
  const start = page * PER_PAGE;
  const visible = (data || []).slice(start, start + PER_PAGE);
  const hasData = data && data.length > 0;

  function changePage(p) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <Nav />
      <main>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(150deg, var(--green-deep) 0%, var(--green) 100%)",
          color: "#fff",
          padding: "clamp(90px,14vw,150px) var(--pad) clamp(56px,8vw,88px)",
          textAlign: "center",
        }}>
          <a
            href="blog.html"
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              color: "rgba(255,255,255,0.8)", fontSize: "13.5px", fontWeight: 600,
              marginBottom: "20px", textDecoration: "none",
            }}
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back to Blog
          </a>
          <h1 style={{ fontSize: "clamp(34px,5vw,56px)", fontWeight: 800, color: "#fff", marginBottom: "14px", lineHeight: 1.06, display: "block" }}>
            {title}
          </h1>
          {hasData && (
            <p style={{ opacity: 0.75, fontSize: "15px" }}>
              {data.length} {data.length === 1 ? "post" : "posts"}
            </p>
          )}
        </div>

        {/* Posts or coming soon */}
        <section style={{ padding: "clamp(52px,8vw,88px) 0 clamp(64px,10vw,100px)" }}>
          <div className="wrap">
            {hasData ? (
              <>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "28px",
                }}>
                  {visible.map((post) => (
                    <BlogCard key={post.id} post={post} onClick={setModal} />
                  ))}
                </div>
                <Pagination page={page} total={data.length} onChange={changePage} />
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <p style={{ fontSize: "18px", color: "var(--muted)" }}>Posts coming soon — check back shortly.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      {modal && <BlogModal post={modal} onClose={() => setModal(null)} />}
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}
