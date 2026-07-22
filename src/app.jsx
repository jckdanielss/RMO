/* global React, ReactDOM, Nav, Hero, Services, Clients, Team, Testimonials, About, Certifications, Contact, PreFooterCta, Footer, ToTop */
const { useEffect: useEffectApp } = React;

function useScrollReveal() {
  useEffectApp(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px 0px 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function useHashScroll() {
  useEffectApp(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);
}

function App() {
  useScrollReveal();
  useHashScroll();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Team />
        <Testimonials />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
