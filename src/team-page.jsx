/* global React, ReactDOM, Nav */

const { useEffect, useState } = React;

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
  // "Ioena Gabrielle Dayo": `${TEAM_ASSET_ROOT}/team_images/unnamed-2-1.png`,
  "Rachelle Sorronda": `${TEAM_ASSET_ROOT}/team_images/Picture1.jpg`,
  "Jullie Anne de la Cruz": `${TEAM_ASSET_ROOT}/team_images/d2d64c64-3821-4074-9f39-db308619a5b7.jpg`,
  "Shenie Canama": "assets/team/shenie.png",
};

const TEAM_MEMBERS = [
  {
    name: "Ranjani Mohana",
    role: "The Certification Lady / CEO",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Roshini Chandran",
    role: "Advisor",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Priya Saravanan",
    role: "Sr. Certification Specialist",
    linkedin: "#",
    bio: [
      "Spending two decades in Education and Publication field, Priya has an extensive and rich experience in Teaching, Editing and Writing Food & Health Articles in Fitness Magazines. She has curated and published a health book named Mellinam.",
      "Proud Moment - Connect with my Readers: Even after quitting my Editor job, she was offered an opportunity to stay connected with the 90,000 readers of Mellinam by contributing an article per month for the monthly magazine.",
      "Fun facts: Loves watching animated movies with her kids.",
      "Passionate about cooking, exploring healthy and traditional Indian recipes, and working out in the gym.",
    ],
  },
  {
    name: "Maria Rama Iseman",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [
      "I am a dedicated and detail-oriented person with extensive experience as a training specialist in customer service. In this role, I honed my skills in improving customer experience, effective time management, and fostering strong people and communication skills. My expertise extends to complaint resolution, ensuring customer satisfaction, and driving impactful results.",
      "Recognized for my contributions, I am proud to have been honored as a Game Changer awardee, reflecting my ability to innovate and exceed expectations.",
      "My professional goal is to provide excellent service to my clients, contribute meaningfully to my team, and drive productivity for the company. I am committed to continuous improvement and delivering exceptional outcomes that align with organizational objectives.",
    ],
  },
  {
    name: "Lloura Morales",
    role: "Admin Assistant",
    linkedin: "#",
    bio: [
      "For years, I've thrived in fast-paced environments where quick thinking and calm under pressure were part of the daily grind. From handling teams to handling tasks, I've learned that being reliable, organized, and adaptable isn't just helpful — it's essential.",
      "Now, I'm channelling all that energy and experience into the virtual world. I'm stepping into the VA space with a mind-set that's all about getting things done — smoothly, efficiently, and with a touch of calm in the chaos.",
      "I'm a big believer in growth, professionalism, and the power of making someone's day easier. Behind the scenes, I'm the one making sure no detail is missed and everything runs like clockwork.",
      "So if you're looking for someone who's got the drive, the discipline, and the heart to help you stay on top of your game — I'm ready when you are.",
    ],
  },
  {
    name: "Marian Salino",
    role: "Social Media Assistant",
    linkedin: "#",
    bio: [
      "Marian is a creative individual with a passion for art, playing games, and interior design. She loves to plan and is organized in her approach to life.",
      "She also has a soft spot for dogs and cats and enjoys spending time with them.",
      "Above all, Marian is devoted to her faith and loves God. Her strong belief in God is evident in the way she lives her life, and it brings her a sense of purpose and direction.",
    ],
  },
  {
    name: "Ramnik Singh",
    role: "Web Maintenance",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Rajesh",
    role: "CPA",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Eunice Lorainne Acebuque",
    role: "Marketing Assistant",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Anjelica Espina",
    role: "MRP Lead",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Marla Balladores",
    role: "Resource Admin Assistant",
    linkedin: "#",
    bio: [
      "For the past 13 years, I've been rocking the BPO world, and let me tell you, it's been a rollercoaster of awesome! Each year feels like a chapter in the adventure book of my life. Along the way, I've not only mastered the art of customer service but also stumbled upon the secrets of becoming the superhero version of myself.",
      "Balancing headsets and capes aside, my true passion lies in helping folks navigate the maze of challenges. I'm like a problem-solving wizard — minus the pointy hat.",
      "And when I'm not donning my professional cape, you'll catch me globe-trotting, soaking up the wonders of this world. But let me spill the real tea — my heart belongs to my ride-or-die crew, my friends, and my family.",
      "They're not just important; they're my world. When they're in the picture, I'm convinced that everything, yes, everything, is possible.",
    ],
  },
  {
    name: "Shylet Lomuntad",
    role: "Bookkeeper / Accounting Assistant",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Nikka Grajo",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [
      "Nikka spent eight years in the education industry and is now ready to take on new challenges by pursuing another career. She finds great fulfillment in working as a Virtual Assistant where she can stay organized, engage with colleagues, and contribute to team goals. She truly enjoys cooking and baking as her favorite ways to express her love for her family and friends.",
    ],
  },
  {
    name: "Abegael Mariano",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [
      "With over a decade of versatile experience across multiple industries, I have cultivated and refined my expertise in digital marketing, administrative support, sales, and customer relations. My passion for continuous learning drives me to embrace challenges, recognizing that the journey of improvement is boundless and perpetual.",
      "Outside my professional pursuits, I identify myself as a thalassophile and selenophile. Additionally, my leisure activities include indulging in the joy of reading books, enjoying Korean series or movies, and creating the best memories with my loved ones.",
    ],
  },
  {
    name: "Chidire Chukwudi",
    role: "Admin Assistant",
    linkedin: "#",
    bio: [
      "Chidire is a dedicated and resourceful Executive Virtual Assistant with a passion for providing high-level administrative support. She thrives on organizing and managing tasks that allow executives to focus on what matters most.",
      "Outside of her professional work, Chidire enjoys exploring new technologies, reading about personal development, and honing her skills in culinary arts.",
      "She is driven by a commitment to deliver exceptional service and always seeks to bring out the best in herself and her clients.",
      "With a strong work ethic and attention to detail, Chidire approaches every project with enthusiasm and precision, ensuring top-quality results in everything she does.",
    ],
  },
  {
    name: "Nisha Rawat",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [
      "Nisha is a self-starter, an avid reader and an enthusiastic learner — a girl who \"DARES TO DREAM\".",
      "Nisha loves learning new things and is spontaneous and has an enthusiasm for adventure.",
      "She has good presentation skills and knows how to get the task done in the given time. Allowing the caravan of her thoughts to flow through her resplendent imagination, she loves writing.",
      "She is a highly motivated legal consultant with a keen interest in corporate law, who is proactive in gaining expertise in the same. She has an experience of 2 years in legal consulting and corporate jobs.",
      "Nisha's major section of achievements can be seen in debates, declamations, and various other public speaking events.",
      "Beyond this she is disciplined, punctual, and ever creative — always believing in seeing beyond the horizon.",
    ],
  },
  {
    name: "Febie Jean Cañetan",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Ioena Gabrielle Dayo",
    role: "Certification Assistant",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Carla Mahinay",
    role: "Prospect Assistant",
    linkedin: "#",
    bio: [
      "I have been a committed and enthusiastic virtual assistant for more than three years, and I truly love what I do! Over the years, my broad experience, diverse skill set, and expertise have all helped me to become a proficient and effective virtual assistant.",
      "I take great delight in knowing that the job I've done for someone has assisted them in reaching their goals and objectives.",
      "I love the outdoors and enjoy exploring new places with my family. It's a fantastic way to disconnect from technology, establish genuine connections with others, and strengthen family ties. It's wonderful to experience nature and take in breathtaking views.",
    ],
  },
  {
    name: "Rachelle Sorronda",
    role: "Executive Assistant",
    linkedin: "#",
    bio: [
      "Rachelle is a dedicated professional with over 7 years of experience in the BPO industry, specializing in customer service, lead generation, client management, and operations leadership.",
    ],
  },
  {
    name: "Shenie Canama",
    role: "Accounting Assistant",
    linkedin: "#",
    bio: [],
  },
  {
    name: "Jullie Anne de la Cruz",
    role: "Creative Designer",
    linkedin: "#",
    bio: [],
  },
].map((member) => ({
  ...member,
  image: TEAM_IMAGE_BY_NAME[member.name] || "",
  hasBio: member.bio.length > 0,
}));

const ORG_CHART_TIERS = [
  {
    label: "Leadership",
    type: "leadership",
    roles: [
      { title: "The Certification Lady / CEO" },
      { title: "Advisor" },
    ],
  },
  {
    label: "Department Leads",
    type: "lead",
    roles: [
      { title: "Sr. Certification Specialist", dept: "Certification" },
      { title: "CPA", dept: "Finance & Operations" },
      { title: "Marketing Assistant", dept: "Marketing" },
    ],
  },
];

const TEAM_GROUPS = [
  {
    title: "Leadership",
    layout: "leadership",
    members: ["Ranjani Mohana", "Roshini Chandran"],
  },
  {
    title: "Certification",
    lead: "Priya Saravanan",
    members: ["Priya Saravanan", "Maria Rama Iseman", "Nikka Grajo", "Abegael Mariano", "Nisha Rawat","Febie Jean Cañetan","Ioena Gabrielle Dayo"],
  },
  {
    title: "Administration",
    lead: "Rajesh",
    members: [ "Rachelle Sorronda","Rajesh", "Shylet Lomuntad", "Shenie Canama", "Lloura Morales", "Chidire Chukwudi", "Marla Balladores", "Ramnik Singh"],
  },
  {
    title: "Marketing",
    lead: "Eunice Lorainne Acebuque",
    members: ["Eunice Lorainne Acebuque", "Anjelica Espina", "Carla Mahinay"],
  },
  {
    title: "Social Media & Design",
    members: ["Marian Salino", "Jullie Anne de la Cruz"],
  },
];

const MEMBERS_BY_NAME = Object.fromEntries(TEAM_MEMBERS.map((member) => [member.name, member]));

const LINKEDIN_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.984 1.984 0 1 1 0-3.968 1.984 1.984 0 0 1 0 3.968zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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

function Avatar({ member, className = "" }) {
  const initials = member.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className={["avatar", "team-member-avatar", className].filter(Boolean).join(" ")}>
      {member.image ? <img src={member.image} alt={member.name} /> : <span>{initials}</span>}
    </div>
  );
}

function TeamMemberCard({ member, onOpen, isLead }) {
  const handleCardClick = member.hasBio ? () => onOpen(member) : undefined;
  const handleKeyDown = member.hasBio
    ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(member); } }
    : undefined;

  return (
    <article
      className={["team-member-card", isLead ? "is-lead" : "", member.hasBio ? "has-bio" : ""].filter(Boolean).join(" ")}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={member.hasBio ? 0 : undefined}
      role={member.hasBio ? "button" : undefined}
      aria-haspopup={member.hasBio ? "dialog" : undefined}
      aria-label={member.hasBio ? `Read ${member.name}'s bio` : undefined}
    >
      {/* {isLead && (
        <span className="team-lead-badge" aria-label="Department Lead">
          Department Lead
        </span>
      )} */}
      <Avatar member={member} />
      <div className="team-member-copy">
        <h3 className="team-member-name">{member.name}</h3>
        <p className="team-member-role">{member.role}</p>
      </div>
      <div className="team-member-actions">
        <a
          href={member.linkedin}
          target={member.linkedin !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="btn-linkedin"
          aria-label={`Connect with ${member.name} on LinkedIn`}
          onClick={(e) => e.stopPropagation()}
        >
          {LINKEDIN_ICON}
          LinkedIn
        </a>
      </div>
    </article>
  );
}

function BioModal({ member, onClose }) {
  if (!member) {
    return null;
  }

  return (
    <div className="team-modal-backdrop" onClick={onClose}>
      <div
        className="team-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
        aria-describedby="team-modal-body"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="team-modal-close" onClick={onClose} aria-label="Close bio modal">
          ×
        </button>

        <div className="team-modal-head">
          <Avatar member={member} className="team-member-avatar-lg" />
          <div className="team-modal-copy">
            <span className="role-pill">About</span>
            <h2 id="team-modal-title">{member.name}</h2>
            <p>{member.role}</p>
          </div>
        </div>

        <div className="team-modal-body" id="team-modal-body">
          {member.bio.map((paragraph, index) => (
            <p key={`${member.name}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamDirectory() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!selectedMember) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedMember]);

  return (
    <div className="team-directory-page">
      <Nav />
      <main className="team-directory-main">
        <div className="wrap">
          <OrgChart />

          <section className="team-directory-roster-shell">
            {TEAM_GROUPS.map((group) => (
              <section className="team-directory-section" key={group.title}>
                <div className="team-directory-section-head">
                  <span className="eyebrow">{group.title}</span>
                  <p>{group.description}</p>
                </div>

                <div
                  className={
                    group.layout === "leadership"
                      ? "team-directory-member-grid team-directory-member-grid-leadership"
                      : "team-directory-member-grid"
                  }
                >
                  {group.members.map((memberName) => (
                    <TeamMemberCard
                      key={memberName}
                      member={MEMBERS_BY_NAME[memberName]}
                      onOpen={setSelectedMember}
                      isLead={group.lead === memberName}
                    />
                  ))}
                </div>
              </section>
            ))}
          </section>
        </div>
      </main>

      <BioModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("team-root")).render(<TeamDirectory />);
