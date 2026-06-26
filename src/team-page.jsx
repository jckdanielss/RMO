/* global React, ReactDOM, Nav */

const { useEffect, useState, useRef, useCallback, useLayoutEffect } = React;

/* ─── Data ──────────────────────────────────────────────────────────────── */

const TEAM_ASSET_ROOT = "rmollc_har_extracted_images/rmollc_har_extracted_images";

const TEAM_IMAGE_BY_NAME = {
  "Ranjani Mohana": `${TEAM_ASSET_ROOT}/team_images/Ranjani-300-dpi-300x212-150x150-1.jpg`,
  "Roshini Chandran": `${TEAM_ASSET_ROOT}/team_images/Roshini-1-300x200-1-150x150-1.jpg`,
  "Priya Saravanan": `${TEAM_ASSET_ROOT}/team_images/Priya-S-half-1-1-150x150-1.jpg`,
  "Maria Rama Iseman": `${TEAM_ASSET_ROOT}/other_images/rmo2.jpg`,
  "Lloura Morales": `${TEAM_ASSET_ROOT}/team_images/unnamed-18.png`,
  "Marian Salino": `${TEAM_ASSET_ROOT}/other_images/Photo-Marian-Salino-1.png`,
  "Ramnik Singh": `${TEAM_ASSET_ROOT}/team_images/1643562015053.jpg`,
  Rajesh: `${TEAM_ASSET_ROOT}/team_images/Rajesh-Half-1-150x150-1.jpg`,
  "Eunice Lorainne Acebuque": `${TEAM_ASSET_ROOT}/team_images/unnamed-12.jpg`,
  "Anjelica Espina": `${TEAM_ASSET_ROOT}/other_images/Photo-Anjelica-Espina-1-e1706703331948.png`,
  "Marla Balladores": `${TEAM_ASSET_ROOT}/team_images/Balladores-Marla-1-2048x1991.jpg`,
  "Shylet Lomuntad": `${TEAM_ASSET_ROOT}/team_images/49dd6e32-9993-4a26-be02-fbe29a50ffa6.jpg`,
  "Nikka Grajo": `${TEAM_ASSET_ROOT}/team_images/Picture2766.jpg`,
  "Abegael Mariano": `${TEAM_ASSET_ROOT}/team_images/unnamed4.png`,
  "Chidire Chukwudi": `${TEAM_ASSET_ROOT}/other_images/rmo3.jpg`,
  "Nisha Rawat": `${TEAM_ASSET_ROOT}/team_images/unnamed-2-1.png`,
  "Febie Jean Cañetan": `${TEAM_ASSET_ROOT}/team_images/Febie.jpeg`,
  "Carla Mahinay": `${TEAM_ASSET_ROOT}/team_images/Picture1.png`,
  "Leona Gabrielle Dayo": "assets/team/WhatsApp_Image_2026-06-25_at_11.02.43_PM.png",
  "Rachelle Sorronda": `${TEAM_ASSET_ROOT}/team_images/Picture1.jpg`,
  "Jullie Anne de la Cruz": `${TEAM_ASSET_ROOT}/team_images/d2d64c64-3821-4074-9f39-db308619a5b7.jpg`,
  "Shenie Canama": "assets/team/shenie.png",
};

const TEAM_MEMBERS = [
  { name: "Ranjani Mohana",         role: "The Certification Lady / CEO",       linkedin: "#", bio: [] },
  { name: "Roshini Chandran",        role: "Advisor",                            linkedin: "#", bio: [] },
  { name: "Priya Saravanan",         role: "Sr. Certification Specialist",       linkedin: "#", bio: [] },
  { name: "Maria Rama Iseman",       role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Lloura Morales",          role: "Admin Assistant",                    linkedin: "#", bio: [] },
  { name: "Marian Salino",           role: "Social Media Assistant",             linkedin: "#", bio: [] },
  { name: "Ramnik Singh",            role: "Web Maintenance",                    linkedin: "#", bio: [] },
  { name: "Rajesh",                  role: "CPA",                                linkedin: "#", bio: [] },
  { name: "Eunice Lorainne Acebuque",role: "Marketing Assistant",                linkedin: "#", bio: [] },
  { name: "Anjelica Espina",         role: "MRP Lead",                           linkedin: "#", bio: [] },
  { name: "Marla Balladores",        role: "Resource Admin Assistant",           linkedin: "#", bio: [] },
  { name: "Shylet Lomuntad",         role: "Bookkeeper / Accounting Assistant",  linkedin: "#", bio: [] },
  { name: "Nikka Grajo",             role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Abegael Mariano",         role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Chidire Chukwudi",        role: "Admin Assistant",                    linkedin: "#", bio: [] },
  { name: "Nisha Rawat",             role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Febie Jean Cañetan",      role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Leona Gabrielle Dayo",    role: "Certification Assistant",            linkedin: "#", bio: [] },
  { name: "Carla Mahinay",           role: "Admin Lead",                 linkedin: "#", bio: [] },
  { name: "Rachelle Sorronda",       role: "Executive Assistant",                linkedin: "#", bio: [] },
  { name: "Shenie Canama",           role: "Accounting Assistant",               linkedin: "#", bio: [] },
  { name: "Jullie Anne de la Cruz",  role: "Creative Designer",                  linkedin: "#", bio: [] },
].map((member) => ({
  ...member,
  image: TEAM_IMAGE_BY_NAME[member.name] || "",
}));

const TEAM_GROUPS = [
  {
    title: "Leadership",
    members: ["Ranjani Mohana", "Roshini Chandran"],
  },
  {
    title: "Certification",
    members: ["Priya Saravanan", "Maria Rama Iseman", "Nikka Grajo", "Abegael Mariano", "Nisha Rawat", "Febie Jean Cañetan", "Leona Gabrielle Dayo"],
  },
  {
    title: "Administration",
    members: ["Rachelle Sorronda", "Rajesh", "Shylet Lomuntad", "Shenie Canama", "Lloura Morales", "Chidire Chukwudi", "Marla Balladores", "Ramnik Singh"],
  },
  {
    title: "Marketing",
    members: ["Eunice Lorainne Acebuque", "Anjelica Espina", "Carla Mahinay"],
  },
  {
    title: "Social Media & Design",
    members: ["Marian Salino", "Jullie Anne de la Cruz"],
  },
];

const MEMBERS_BY_NAME = Object.fromEntries(TEAM_MEMBERS.map((m) => [m.name, m]));

const BRANCHES = ["All", ...TEAM_GROUPS.map((g) => g.title)];

function getFilteredMembers(branch) {
  if (branch === "All") return TEAM_MEMBERS;
  const group = TEAM_GROUPS.find((g) => g.title === branch);
  if (!group) return TEAM_MEMBERS;
  return group.members.map((name) => MEMBERS_BY_NAME[name]).filter(Boolean);
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */

const LINKEDIN_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.984 1.984 0 1 1 0-3.968 1.984 1.984 0 0 1 0 3.968zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);


/* ─── OrgChart (unchanged) ───────────────────────────────────────────────── */

function OrgChart() {
  return (
    <section className="org-chart-section">
      <div className="org-chart-section-head">
        <span className="eyebrow">Structure</span>
        <h2>Organizational Chart</h2>
      </div>
      <div className="org-chart-wrap org-chart-image-wrap">
        <img
          src="assets/team/Organizational_Chart_1.png"
          alt="R Mo Global Diversity Solutions Organizational Chart"
          className="org-chart-image"
        />
      </div>
    </section>
  );
}

/* ─── BranchFilter ───────────────────────────────────────────────────────── */

function BranchFilter({ active, onChange }) {
  return (
    <div className="branch-filter" role="group" aria-label="Filter by department">
      {BRANCHES.map((branch) => (
        <button
          key={branch}
          type="button"
          className={["branch-filter__btn", active === branch ? "branch-filter__btn--active" : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(branch)}
          aria-pressed={active === branch}
        >
          {branch}
        </button>
      ))}
    </div>
  );
}

/* ─── TeamCarousel ───────────────────────────────────────────────────────── */

const CARD_W  = 280;
const CARD_H  = 380;
const GAP     = 24;
const STRIDE  = CARD_W + GAP;
const SNAP    = "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)";
const BUFFER  = 3; // cloned cards on each side for infinite loop

function TeamCarousel({ members }) {
  const total    = members.length;
  /* extended track: [last BUFFER] + [all] + [first BUFFER] */
  const extended = [
    ...members.slice(-BUFFER),
    ...members,
    ...members.slice(0, BUFFER),
  ];

  /* start at the first real card (after the left clones) */
  const [currentIndex, setCurrentIndex] = useState(BUFFER);

  const containerRef  = useRef(null);
  const trackRef      = useRef(null);
  const animateNext   = useRef(false); // controls whether the next index-change animates

  const drag = useRef({
    active:      false,
    didMove:     false,
    startX:      0,
    containerW:  0,
    currentIdx:  BUFFER,
    isAnimating: false,
  });
  drag.current.currentIdx = currentIndex;

  const moveTrack = (idx, delta, animated) => {
    if (!trackRef.current || !drag.current.containerW) return;
    const x = drag.current.containerW / 2 - CARD_W / 2 - idx * STRIDE + delta;
    trackRef.current.style.transition = animated ? SNAP : "none";
    trackRef.current.style.transform  = `translateX(${x}px)`;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      drag.current.containerW = el.offsetWidth;
      moveTrack(drag.current.currentIdx, 0, false);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* animate (or silently jump) whenever index changes — useLayoutEffect fires
     before the browser paints, so card styles and track position are always in
     sync in the same frame (prevents the flicker on infinite-loop wrap) */
  useLayoutEffect(() => {
    moveTrack(currentIndex, 0, animateNext.current);
    animateNext.current = true;
  }, [currentIndex]);

  /* after an animated move, silently teleport from clone zone to real zone */
  const wrapIfNeeded = useCallback((idx) => {
    if (idx < BUFFER) {
      const real = idx + total;
      animateNext.current = false;
      drag.current.currentIdx = real;
      setCurrentIndex(real);
    } else if (idx >= total + BUFFER) {
      const real = idx - total;
      animateNext.current = false;
      drag.current.currentIdx = real;
      setCurrentIndex(real);
    }
  }, [total]);

  const navigate = useCallback((newIndex) => {
    const d = drag.current;
    if (d.isAnimating) return;
    d.isAnimating  = true;
    animateNext.current = true;
    setCurrentIndex(newIndex);
    setTimeout(() => {
      d.isAnimating = false;
      wrapIfNeeded(newIndex);
    }, 600);
  }, [wrapIfNeeded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cx  = (e) => e.touches        ? e.touches[0].clientX        : e.clientX;
    const ecx = (e) => e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

    const onDown = (e) => {
      const d = drag.current;
      if (d.isAnimating) return;
      if (e.target.closest(".tc-arrow,.tc-dot,.tc-dots,.btn-linkedin")) return;
      if (e.type === "mousedown") e.preventDefault();
      d.active  = true;
      d.didMove = false;
      d.startX  = cx(e);
    };

    const onMove = (e) => {
      const d = drag.current;
      if (!d.active) return;
      const delta = cx(e) - d.startX;
      if (Math.abs(delta) > 4) d.didMove = true;
      moveTrack(d.currentIdx, delta, false);
    };

    const onUp = (e) => {
      const d = drag.current;
      if (!d.active) return;
      d.active = false;
      const diff = d.startX - ecx(e);
      if (Math.abs(diff) > 50) {
        const steps  = Math.max(1, Math.round(Math.abs(diff) / STRIDE));
        navigate(d.currentIdx + (diff > 0 ? steps : -steps));
      } else {
        moveTrack(d.currentIdx, 0, true);
      }
    };

    const onKey = (e) => {
      if (e.key === "ArrowLeft")  navigate(drag.current.currentIdx - 1);
      if (e.key === "ArrowRight") navigate(drag.current.currentIdx + 1);
    };

    container.addEventListener("mousedown",  onDown);
    container.addEventListener("touchstart", onDown, { passive: false });
    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("touchmove",  onMove, { passive: true });
    window.addEventListener("touchend",   onUp);
    window.addEventListener("keydown",    onKey);
    return () => {
      container.removeEventListener("mousedown",  onDown);
      container.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("touchmove",  onMove);
      window.removeEventListener("touchend",   onUp);
      window.removeEventListener("keydown",    onKey);
    };
  }, [navigate]);

  const cardStyle = (i) => {
    const d = Math.abs(i - currentIndex);
    return {
      transform:  `scale(${d === 0 ? 1.1 : d === 1 ? 0.92 : d === 2 ? 0.82 : 0.74})`,
      opacity:    d === 0 ? 1 : d === 1 ? 0.85 : d === 2 ? 0.65 : 0.4,
      filter:     d === 0 ? "none" : `grayscale(${Math.min(d * 45, 100)}%)`,
      zIndex:     10 - Math.min(d, 10),
      transition: `${SNAP}, opacity 0.55s ease, filter 0.55s ease`,
    };
  };

  const handleCardClick = (i) => {
    if (drag.current.didMove) { drag.current.didMove = false; return; }
    navigate(i);
  };

  /* map extended index back to real member */
  const realIndex = ((currentIndex - BUFFER) % total + total) % total;
  const current   = members[realIndex];

  return (
    <div className="team-carousel-wrap">
      <h1 className="tc-title" aria-hidden="true">OUR TEAM</h1>

      <div className="tc-container" ref={containerRef}>
        <button type="button" className="tc-arrow tc-arrow--left"  onClick={() => navigate(currentIndex - 1)} aria-label="Previous member">&#8249;</button>

        <div className="tc-track" ref={trackRef}>
          {extended.map((member, i) => {
            const initials = member.name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
            return (
              <div key={`${i}-${member.name}`} className="tc-card" style={cardStyle(i)} onClick={() => handleCardClick(i)}>
                {member.image
                  ? <img src={member.image} alt={member.name} draggable="false" />
                  : <div className="tc-initials">{initials}</div>
                }
              </div>
            );
          })}
        </div>

        <button type="button" className="tc-arrow tc-arrow--right" onClick={() => navigate(currentIndex + 1)} aria-label="Next member">&#8250;</button>
      </div>

      <div className="tc-info tc-info--visible">
        <h2 className="tc-name">{current.name}</h2>
        <p className="tc-role">{current.role}</p>
        <a
          href={current.linkedin}
          target={current.linkedin !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="btn-linkedin tc-linkedin"
          aria-label={`Connect with ${current.name} on LinkedIn`}
        >
          {LINKEDIN_ICON}
          LinkedIn
        </a>
      </div>

      <div className="tc-dots" role="tablist" aria-label="Team members">
        {members.map((m, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            className={["tc-dot", i === realIndex ? "tc-dot--active" : ""].filter(Boolean).join(" ")}
            onClick={() => navigate(i + BUFFER)}
            aria-label={m.name}
            aria-selected={i === realIndex}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── TeamDirectory ──────────────────────────────────────────────────────── */

function TeamDirectory() {
  const [activeBranch, setActiveBranch] = useState("All");
  const members = getFilteredMembers(activeBranch);

  return (
    <div className="team-directory-page">
      <Nav />
      <main className="team-directory-main">
        <div className="wrap">
          <OrgChart />

          <section className="team-roster-section">
            <div className="team-roster-head">
              <span className="eyebrow">The Team</span>
              <h2>Meet Everyone</h2>
            </div>

            <BranchFilter active={activeBranch} onChange={setActiveBranch} />

            <TeamCarousel key={activeBranch} members={members} />
          </section>
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("team-root")).render(<TeamDirectory />);
