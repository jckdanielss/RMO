/* global React, ReactDOM */

const TEAM_GROUPS = [
  {
    title: "Leadership",
    description: "The strategic leaders guiding RMO's direction, relationships, and long-term growth.",
    featured: true,
    members: [
      { name: "Ranjani Mohana", role: "Chief Executive Officer & President", image: "CEO.jpg" },
      { name: "Roshini Chandran", role: "Advisor", image: "ADVISOR.jpg" },
    ],
  },
  {
    title: "Senior Certification & Program Leads",
    description: "Senior specialists who lead certification delivery and core client program support.",
    members: [
      { name: "Priya Saravanan", role: "Sr. Certification Specialist" },
      { name: "Nesselle Fatalvero", role: "Sr. Certification Specialist" },
      { name: "Chrismelle Adrias", role: "GSA/SAM Lead" },
    ],
  },
  {
    title: "Finance, Operations & Administration",
    description: "Operational, financial, and executive support roles that keep delivery organized and dependable.",
    members: [
      { name: "Rajesh", role: "CPA" },
      { name: "Czarina Novera", role: "Bookkeeper/Accounting Assistant" },
      { name: "Shenie Canama", role: "Accounting Assistant" },
      { name: "Shylet Lomuntad", role: "Bookkeeper/Accounting Assistant" },
      { name: "Arnav Chauhan", role: "Executive Administrator" },
      { name: "Rachelle Sorronda", role: "Executive Assistant" },
      { name: "Marla Balladores", role: "Executive Assistant" },
      { name: "Lloura Morales", role: "Admin Assistant" },
      { name: "Zeda Dagodog", role: "Database Assistant" },
      { name: "Ramnik Singh", role: "Web Maintenance" },
    ],
  },
  {
    title: "Certification Team",
    description: "Certification-focused staff supporting documentation, coordination, and day-to-day client progress.",
    members: [
      { name: "Princess Mendez", role: "Certification Assistant" },
      { name: "Aditi Gupta", role: "Certification Assistant" },
      { name: "Stephanie Valenzuela", role: "Certification Assistant" },
      { name: "Nisha Rawat", role: "Certification Assistant" },
      { name: "Nikka Grajo", role: "Certification Assistant" },
      { name: "Abegael Mariano", role: "Certification Assistant" },
    ],
  },
  {
    title: "Client Growth & Program Support",
    description: "Support roles focused on client services, pipeline growth, and market-readiness initiatives.",
    members: [
      { name: "Valerie Anne Dela Cruz", role: "Client Services Assistant" },
      { name: "Paul John Pilapil", role: "MRP Assistant" },
      { name: "Anjelica Espina", role: "MRP Assistant" },
      { name: "Carla Mahinay", role: "Prospect Assistant" },
    ],
  },
  {
    title: "Marketing & Communications",
    description: "Team members supporting brand communication, outreach, and social media presence.",
    members: [
      { name: "Jullie Anne de la Cruz", role: "Creative Designer" },
      { name: "Marian Salino", role: "Social Media Assistant" },
      { name: "Christian Deang", role: "Social Media Assistant" },
      { name: "Eunice Lorainne Acebuque", role: "Marketing Assistant" },
    ],
  },
];

function Avatar({ name, src }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="avatar">
      {src ? <img src={src} alt={name} /> : initials}
    </div>
  );
}

function TeamDirectory() {
  return (
    <div className="team-directory-page">
      <header className="team-directory-hero">
        <div className="team-directory-overlay" />
        <div className="wrap team-directory-shell">
          <div className="team-directory-topbar">
            <a href="index.html" className="brand team-directory-brand">
              <span className="brand-logo-wrap">
                <img className="brand-logo" src="RMO_Logo.jpg" alt="R Mo Global Diversity Solutions" />
              </span>
            </a>
            <a href="index.html#team" className="btn btn-light">Back to home</a>
          </div>

          <div className="team-directory-intro">
            <span className="hero-badge">
              <span className="dot">1</span>
              Team directory
            </span>
            <h1>Meet the full RMO team.</h1>
            <p>
              Leadership first, followed by the specialists, operations staff, and support teams
              who help clients move from certification planning to real opportunity.
            </p>
          </div>
        </div>
      </header>

      <main className="team-directory-main">
        <div className="wrap">
          {TEAM_GROUPS.map((group) => (
            <section className="team-directory-section" key={group.title}>
              <div className="team-directory-section-head">
                <span className="eyebrow">{group.title}</span>
                <p>{group.description}</p>
              </div>

              <div className={group.featured ? "team-directory-leadership" : "team-directory-grid"}>
                {group.members.map((member) => (
                  <article className={group.featured ? "leader" : "member team-directory-member"} key={member.name}>
                    <Avatar name={member.name} src={member.image} />
                    <div>
                      {group.featured ? <span className="role-pill">Featured</span> : null}
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("team-root")).render(<TeamDirectory />);
