/* global React, ReactDOM, Nav, Footer, ToTop */

function BlogPage() {
  return (
    <React.Fragment>
      <Nav />
      <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(80px,12vw,160px) 24px" }}>
        <span className="eyebrow eyebrow-lg" style={{ marginBottom: "18px" }}>Blog</span>
        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, textAlign: "center", marginBottom: "18px" }}>Coming Soon</h1>
        <p style={{ color: "var(--muted)", fontSize: "18px", textAlign: "center", maxWidth: "480px" }}>
          Insights, stories, and updates from our team are on the way. Stay tuned.
        </p>
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("blog-root")).render(React.createElement(BlogPage));
