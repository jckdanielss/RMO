/* global React, ReactDOM, Nav, Footer, ToTop */

const MILESTONES = [
  {
    year: "2014",
    items: [
      "Won the WBE Who Rocks award from MBE Magazine (June), one of 11 recipients",
      "Nominated for the East Bay Innovation Award",
    ],
  },
  {
    year: "2015",
    items: [
      "Won the MBE Who Rocks award from MBE Magazine (October), one of 12 recipients",
    ],
  },
  {
    year: "2016",
    items: [
      "Founded the NAWBO-Tri-Valley Professional Development Forum (January)",
    ],
  },
  {
    year: "Today",
    items: [
      "400+ clients certified across multiple certification types",
      "Active government contract bidding with several contracts approved",
      "Board seats on MBEIC, ICSBD, and San Ramon Arts Foundation",
    ],
  },
];

const BOARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    org: "MBEIC, WRMSDC",
    role: "Vice Chair",
    desc: "Minority Business Enterprise Input Committee, elected by the Western Regional Minority Supplier Diversity Council.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2M12 12v4M10 14h4" />
      </svg>
    ),
    org: "ICSBD",
    role: "Board Member",
    desc: "Industry Council of Small Business Development.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 3c-4.97 0-9 3.58-9 8a8.67 8.67 0 0 0 2.06 5.6c.63.78 1.1 1.7 1.29 2.77L6.47 21h11.06l.12-1.63c.19-1.07.66-1.99 1.29-2.77A8.67 8.67 0 0 0 21 11c0-4.42-4.03-8-9-8z" />
        <path d="M9 21h6" />
      </svg>
    ),
    org: "San Ramon Arts Foundation",
    role: "Board Member",
    desc: "City of San Ramon. Supports local arts and culture.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    org: "NAWBO, SF Bay Area",
    role: "VP, Corporate Partner Relations",
    desc: "National Association of Women Business Owners, San Francisco Bay Area chapter.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    org: "Astra Women's Business Alliance",
    role: "East Bay Lieutenant",
    desc: "West Coast affiliate of WBENC. Served in the Leadership Forum.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    org: "SBDC Silicon Valley & San Mateo",
    role: "Business Advisor",
    desc: "Advised SBDC clients on government certifications and contract bidding.",
  },
];

const DEGREES = [
  {
    field: "Marketing / Journalism",
    school: "University of North Texas",
    degree: "Master's",
  },
  {
    field: "Executive MBA",
    school: "Southern Methodist University",
    degree: "Master's",
  },
  {
    field: "Management Information Systems",
    school: "University of Texas at Dallas",
    degree: "Master's",
  },
];

function HistoryPage() {
  return (
    <React.Fragment>
      <Nav />
      <main>

        {/* Hero */}
        <div style={{
          background: "linear-gradient(150deg, var(--green-deep) 0%, var(--green) 100%)",
          color: "#fff",
          padding: "clamp(100px,14vw,160px) var(--pad) clamp(64px,8vw,96px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <span style={{
            display: "block", fontWeight: 600, fontSize: "12.5px",
            letterSpacing: "0.16em", textTransform: "uppercase",
            opacity: 0.75, marginBottom: "14px",
          }}>
            R Mo Global Diversity Solutions
          </span>
          <h1 style={{
            fontSize: "clamp(38px,5.5vw,64px)", fontWeight: 800,
            color: "#fff", marginBottom: "20px", lineHeight: 1.04,
          }}>
            Our History
          </h1>
          <p style={{
            maxWidth: "540px", margin: "0 auto",
            opacity: 0.85, fontSize: "17px", lineHeight: 1.7,
          }}>
            Ranjani Mohana left corporate America to help businesses get certified. She has since certified over 400 clients.
          </p>
        </div>

        {/* Origin Story */}
        <section style={{ padding: "clamp(64px,9vw,104px) 0" }}>
          <div className="wrap">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(40px,6vw,80px)",
              alignItems: "center",
            }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>The Beginning</span>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", marginBottom: "24px" }}>
                  She Left Corporate to Build Her Own
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <p style={{ fontSize: "16.5px", lineHeight: 1.8, color: "var(--body)" }}>
                    Ranjani Mohana spent years at large corporations like Texas Instruments and a string of start-ups before founding R Mo Business Solutions. Her goal was the same work she had been doing throughout her career: helping companies get certified and bid on government contracts.
                  </p>
                  <p style={{ fontSize: "16.5px", lineHeight: 1.8, color: "var(--body)" }}>
                    After 13 years in Texas, she moved to California and certified two of the companies she worked for, Karna Global and Heartwood Studios, with Minority, Small Business, and Local Certifications and Federal GSA Solicitations. Getting them bidding on government contracts was what set her business in motion.
                  </p>
                </div>
              </div>

              {/* Pull-quote card */}
              <div style={{
                background: "var(--green-tint)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(32px,4vw,48px)",
                borderLeft: "4px solid var(--green)",
              }}>
                <svg viewBox="0 0 40 30" fill="var(--green)" style={{ opacity: 0.25, marginBottom: "16px" }} width="40" height="30">
                  <path d="M0 30V18C0 11.333 2.667 6.333 8 3L11 6C8.333 7.667 6.667 10.333 6 14H12V30H0ZM22 30V18C22 11.333 24.667 6.333 30 3L33 6C30.333 7.667 28.667 10.333 28 14H34V30H22Z"/>
                </svg>
                <p style={{
                  fontSize: "clamp(17px,2vw,21px)", lineHeight: 1.65,
                  color: "var(--green-deep)", fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  margin: "0 0 20px",
                }}>
                  "Government paperwork doesn't excite most people. For Ranjani, it's a chance to explore new industries, meet people, and stay creative."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--green)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: "15px",
                    fontFamily: "var(--font-display)",
                    flexShrink: 0,
                  }}>RM</div>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "15px" }}>Ranjani Mohana</p>
                    <p style={{ color: "var(--muted)", fontSize: "13.5px" }}>Founder & CEO, R Mo Business Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <div style={{
          background: "var(--green-deep)",
          padding: "clamp(48px,6vw,72px) var(--pad)",
        }}>
          <div style={{
            maxWidth: "var(--maxw)", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "clamp(32px,4vw,48px)",
            textAlign: "center",
          }}>
            {[
              { num: "400+", label: "Clients Certified" },
              { num: "4+", label: "Years in Operation" },
              { num: "3", label: "Master's Degrees" },
              { num: "6+", label: "Boards & Committees" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 800, color: "#fff", margin: "0 0 8px", fontFamily: "var(--font-display)", lineHeight: 1 }}>{num}</p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth section */}
        <section style={{ padding: "clamp(64px,9vw,104px) 0", background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block", justifyContent: "center" }}>Growth</span>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,40px)", marginBottom: "28px" }}>
                Four Years of Impact
              </h2>
              <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "var(--body)", marginBottom: "20px" }}>
                Ranjani Mohana has run R Mo Business Solutions for over four years and certified more than 400 clients. In the past nine months, she has been bidding on government contracts and secured several approvals.
              </p>
              <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "var(--body)" }}>
                She also led a project with San Jose Evergreen Community College District (SJEECD), managing a team of Business Advisors who identified and certified 120 construction vendors for the district's building projects.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "clamp(64px,9vw,104px) 0" }}>
          <div className="wrap">
            <div className="section-head center" style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
              <span className="eyebrow">Milestones</span>
              <h2 style={{ marginTop: "14px" }}>Key Milestones</h2>
            </div>

            <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: "clamp(22px,4vw,32px)", top: 0, bottom: 0,
                width: "2px", background: "var(--line)", borderRadius: "2px",
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,40px)" }}>
                {MILESTONES.map(({ year, items }) => (
                  <div key={year} style={{ display: "flex", gap: "clamp(24px,4vw,40px)", alignItems: "flex-start" }}>
                    {/* Dot + year */}
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", width: "clamp(44px,8vw,64px)", position: "relative", zIndex: 1 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "var(--green)", color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 800, fontSize: "13px",
                        fontFamily: "var(--font-display)",
                        flexShrink: 0,
                        boxShadow: "0 0 0 4px var(--bg), 0 0 0 6px var(--green-tint)",
                      }}>
                        {year === "Today" ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        ) : year}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      background: "#fff",
                      border: "1.5px solid var(--line)",
                      borderRadius: "var(--radius)",
                      padding: "clamp(18px,3vw,28px)",
                      flex: 1,
                      boxShadow: "var(--shadow)",
                    }}>
                      <p style={{ fontWeight: 700, color: "var(--green-dark)", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{year}</p>
                      <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {items.map((item, i) => (
                          <li key={i} style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--body)" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Boards & Leadership */}
        <section style={{ padding: "clamp(64px,9vw,104px) 0", background: "var(--bg-soft)" }}>
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: "clamp(36px,5vw,52px)" }}>
              <span className="eyebrow">Leadership</span>
              <h2 style={{ marginTop: "14px" }}>Boards & Community Roles</h2>
              <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--muted)" }}>
                Ranjani holds board seats in supplier diversity, small business development, the arts, and women's entrepreneurship.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}>
              {BOARDS.map(({ icon, org, role, desc }) => (
                <div key={org} style={{
                  background: "#fff",
                  borderRadius: "var(--radius)",
                  padding: "clamp(20px,3vw,28px)",
                  border: "1.5px solid var(--line)",
                  boxShadow: "var(--shadow)",
                  display: "flex",
                  gap: "16px",
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: 44, height: 44,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--green-tint)",
                    color: "var(--green)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "15px", marginBottom: "4px" }}>{org}</p>
                    <p style={{ fontSize: "13px", color: "var(--green-dark)", fontWeight: 600, marginBottom: "8px" }}>{role}</p>
                    <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section style={{ padding: "clamp(64px,9vw,104px) 0" }}>
          <div className="wrap">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(40px,6vw,80px)",
              alignItems: "start",
            }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>Education</span>
                <h2 style={{ fontSize: "clamp(26px,3vw,38px)", marginBottom: "20px" }}>
                  Three Graduate Degrees Across Three Fields
                </h2>
                <p style={{ fontSize: "16.5px", lineHeight: 1.8, color: "var(--body)", marginBottom: "16px" }}>
                  Ranjani holds three master's degrees spanning marketing, business, and information systems. That breadth shows in how she approaches client work.
                </p>
                <p style={{ fontSize: "16.5px", lineHeight: 1.8, color: "var(--body)" }}>
                  She writes grants for nonprofits as a volunteer and serves as a Stephen Minister at her church in Danville. She also leads the Annual Job Connections Summit.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {DEGREES.map(({ field, school, degree }, i) => (
                  <div key={i} style={{
                    background: "var(--bg-soft)",
                    borderRadius: "var(--radius)",
                    padding: "clamp(18px,3vw,26px)",
                    border: "1.5px solid var(--line)",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: 40, height: 40,
                      borderRadius: "var(--radius-sm)",
                      background: "var(--green)",
                      color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "14px",
                    }}>
                      M{i + 1}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "15.5px", marginBottom: "4px" }}>{field}</p>
                      <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>{degree} · {school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Business */}
        <section style={{
          padding: "clamp(64px,9vw,104px) 0",
          background: "linear-gradient(150deg, var(--green-deep) 0%, var(--green-dark) 100%)",
          color: "#fff",
        }}>
          <div className="wrap">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(32px,5vw,60px)",
              alignItems: "center",
            }}>
              <div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontWeight: 600, fontSize: "13px", letterSpacing: "0.14em",
                  textTransform: "uppercase", opacity: 0.7, marginBottom: "16px",
                }}>
                  <span style={{ width: 22, height: 2, background: "rgba(255,255,255,0.6)", display: "inline-block", borderRadius: "2px" }} />
                  Beyond Business
                </span>
                <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", color: "#fff", marginBottom: "20px" }}>
                  Art, Family & Community
                </h2>
                <p style={{ fontSize: "16.5px", lineHeight: 1.85, opacity: 0.85, marginBottom: "16px" }}>
                  Ranjani paints and shows her work across Northern California, collaborating with several arts organizations in the region.
                </p>
                <p style={{ fontSize: "16.5px", lineHeight: 1.85, opacity: 0.85 }}>
                  Her daughter Roshini is a software engineer at Amazon in Seattle.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Painting & Art Shows", detail: "Paints and shows work with Northern California arts organizations" },
                  { label: "Grant Writing", detail: "Writes grants for nonprofits as a volunteer" },
                  { label: "Stephen Minister", detail: "Serves as a Stephen Minister at her church in Danville" },
                  { label: "Job Connections Summit", detail: "Leads the Annual Job Connections Summit" },
                ].map(({ label, detail }) => (
                  <div key={label} style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "var(--radius-sm)",
                    padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: "14px",
                  }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: "rgba(255,255,255,0.5)", flexShrink: 0,
                    }} />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: "3px" }}>{label}</p>
                      <p style={{ fontSize: "13.5px", opacity: 0.65 }}>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ToTop />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("history-root")).render(<HistoryPage />);
