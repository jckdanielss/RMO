/* global React, ReactDOM */

const { useEffect, useState } = React;

const TEAM_ASSET_ROOT = "rmollc_har_extracted_images/rmollc_har_extracted_images";

const TEAM_IMAGE_BY_NAME = {
  "Ranjani Mohana": `${TEAM_ASSET_ROOT}/team_images/Ranjani-300-dpi-300x212-150x150-1.jpg`,
  "Roshini Chandran": `${TEAM_ASSET_ROOT}/team_images/Roshini-1-300x200-1-150x150-1.jpg`,
  "Priya Saravanan": `${TEAM_ASSET_ROOT}/team_images/Priya-S-half-1-1-150x150-1.jpg`,
  "Maria Rama Iseman": `${TEAM_ASSET_ROOT}/other_images/rmo2.png`,
  "Lloura Morales": `${TEAM_ASSET_ROOT}/team_images/unnamed-18.png`,
  "Marian Salino": `${TEAM_ASSET_ROOT}/other_images/Photo-Marian-Salino-1.png`,
  "Ramnik Singh": `${TEAM_ASSET_ROOT}/team_images/1643562015053.jpg`,
  Rajesh: `${TEAM_ASSET_ROOT}/team_images/Rajesh-Half-1-150x150-1.jpg`,
  "Eunice Lorainne Acebuque": `${TEAM_ASSET_ROOT}/team_images/unnamed-12.jpg`,
  "Anjelica Espina": `${TEAM_ASSET_ROOT}/other_images/Photo-Anjelica-Espina-1-e1706703331948.png`,
  "Marla Balladores": `${TEAM_ASSET_ROOT}/team_images/Balladores-Marla-1-2048x1991.jpg`,
  "Princess Mendez": `${TEAM_ASSET_ROOT}/team_images/Princess-Mendez-1-scaled-e1693197924594.jpg`,
  "Shylet Lomuntad": `${TEAM_ASSET_ROOT}/team_images/Shylet-Lomuntad-1-scaled-1.jpg`,
  "Nikka Grajo": `${TEAM_ASSET_ROOT}/team_images/Picture2766.jpg`,
  "Abegael Mariano": `${TEAM_ASSET_ROOT}/team_images/unnamed4.png`,
  "Chidire Chukwudi": `${TEAM_ASSET_ROOT}/other_images/rmo3.png`,
  "Nisha Rawat": `${TEAM_ASSET_ROOT}/team_images/unnamed-2-1.png`,
  "Carla Mahinay": `${TEAM_ASSET_ROOT}/team_images/Picture1.png`,
  "Rachelle Sorronda": `${TEAM_ASSET_ROOT}/team_images/Picture1.jpg`,
  "Jullie Anne de la Cruz": `${TEAM_ASSET_ROOT}/team_images/30f441a7-95a3-480e-8a4e-3bf57ba4255b.png`,
  "Shenie Canama": "assets/team/shenie.png",
};

const TEAM_MEMBERS = [
  {
    name: "Ranjani Mohana",
    role: "Chief Executive Officer(CEO) President",
    bio: [],
  },
  {
    name: "Roshini Chandran",
    role: "Advisor",
    bio: [],
  },
  {
    name: "Priya Saravanan",
    role: "Sr. Certification Specialist",
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
    bio: [
      "I am a dedicated and detail-oriented person with extensive experience as a training specialist in customer service. In this role, I honed my skills in improving customer experience, effective time management, and fostering strong people and communication skills. My expertise extends to complaint resolution, ensuring customer satisfaction, and driving impactful results.",
      "Recognized for my contributions, I am proud to have been honored as a Game Changer awardee, reflecting my ability to innovate and exceed expectations.",
      "My professional goal is to provide excellent service to my clients, contribute meaningfully to my team, and drive productivity for the company. I am committed to continuous improvement and delivering exceptional outcomes that align with organizational objectives.",
    ],
  },
  {
    name: "Lloura Morales",
    role: "Admin Assistant",
    bio: [
      "For years, I've thrived in fast-paced environments where quick thinking and calm under pressure were part of the daily grind. From handling teams to handling tasks, I've learned that being reliable, organized, and adaptable isn't just helpful - it's essential.",
      "Now, I'm channelling all that energy and experience into the virtual world. I'm stepping into the VA space with a mind-set that's all about getting things done - smoothly, efficiently, and with a touch of calm in the chaos.",
      "I'm a big believer in growth, professionalism, and the power of making someone's day easier. Behind the scenes, I'm the one making sure no detail is missed and everything runs like clockwork.",
      "So if you're looking for someone who's got the drive, the discipline, and the heart to help you stay on top of your game - I'm ready when you are.",
    ],
  },
  {
    name: "Marian Salino",
    role: "Social Media Assistant",
    bio: [
      "Marian is a creative individual with a passion for art, playing games, and interior design. She loves to plan and is organized in her approach to life.",
      "She also has a soft spot for dogs and cats and enjoys spending time with them.",
      "Above all, Marian is devoted to her faith and loves God. Her strong belief in God is evident in the way she lives her life, and it brings her a sense of purpose and direction.",
    ],
  },
  {
    name: "Ramnik Singh",
    role: "Web Maintenance",
    bio: [],
  },
  {
    name: "Rajesh",
    role: "CPA",
    bio: [],
  },
  {
    name: "Eunice Lorainne Acebuque",
    role: "Marketing Assistant",
    bio: [],
  },
  {
    name: "Anjelica Espina",
    role: "MRP Assistant",
    bio: [],
  },
  {
    name: "Marla Balladores",
    role: "Resource Admin Assistant",
    bio: [
      "For the past 13 years, I've been rocking the BPO world, and let me tell you, it's been a rollercoaster of awesome! Each year feels like a chapter in the adventure book of my life. Along the way, I've not only mastered the art of customer service but also stumbled upon the secrets of becoming the superhero version of myself.",
      "Balancing headsets and capes aside, my true passion lies in helping folks navigate the maze of challenges. I'm like a problem-solving wizard - minus the pointy hat.",
      "And when I'm not donning my professional cape, you'll catch me globe-trotting, soaking up the wonders of this world. But let me spill the real tea - my heart belongs to my ride-or-die crew, my friends, and my family.",
      "They're not just important; they're my world. When they're in the picture, I'm convinced that everything, yes, everything, is possible.",
    ],
  },
  {
    name: "Princess Mendez",
    role: "Certification Assistant",
    bio: [],
  },
  {
    name: "Shylet Lomuntad",
    role: "Bookkeeper/Accounting Assistant",
    bio: [],
  },
  {
    name: "Nikka Grajo",
    role: "Certification Assistant",
    bio: [
      "Nikka spent eight years in the education industry and is now ready to take on new challenges by pursuing another career. She finds great fulfillment in working as a Virtual Assistant where she can stay organized, engage with colleagues, and contribute to team goals. She truly enjoys cooking and baking as her favorite ways to express her love for her family and friends.",
    ],
  },
  {
    name: "Abegael Mariano",
    role: "Certification Assistant",
    bio: [
      "With over a decade of versatile experience across multiple industries, I have cultivated and refined my expertise in digital marketing, administrative support, sales, and customer relations. My passion for continuous learning drives me to embrace challenges, recognizing that the journey of improvement is boundless and perpetual.",
      "Outside my professional pursuits, I identify myself as a thalassophile and selenophile. Additionally, my leisure activities include indulging in the joy of reading books, enjoying Korean series or movies, and creating the best memories with my loved ones.",
    ],
  },
  {
    name: "Chidire Chukwudi",
    role: "Admin Assistant",
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
    bio: [
      "Nisha is a self-starter, an avid reader and an enthusiastic learner, a girl who \"DARES TO DREAM\".",
      "1. NISHA loves learning new things and is spontaneous and has an enthusiasm for adventure.",
      "3. She has good presentation skills and knows how to get the task done in the given time. Allowing the caravan of her thoughts to flow through her resplendent imagination she loves writing.",
      "4. She is a highly motivated legal consultant with a keen interest in corporate, who is proactive in gaining expertise in the same. She has an experience of 2 years in legal consulting and corporate jobs.",
      "5. NISHA's major section of achievements can be seen in debates, declamations, and various other public speaking events!",
      "6. Beyond this she is disciplined, punctual and ever creative.",
      "7. For this lucky seven NISHA shares the BEST; she believes in seeing beyond the horizon.",
    ],
  },
  {
    name: "Carla Mahinay",
    role: "Prospect Assistant",
    bio: [
      "I have been a committed and enthusiastic virtual assistant for more than three years, and I truly love what I do! Over the years, my broad experience, diverse skill set, and expertise have all helped me to become a proficient and effective virtual assistant.",
      "I take great delight in knowing that the job I've done for someone has assisted them in reaching their goals and objectives.",
      "I love the outdoors and enjoy exploring new places with my family. It's a fantastic way to disconnect from technology, establish genuine connections with others, and strengthen family ties. It's wonderful to experience nature and take in breathtaking views.",
    ],
  },
  {
    name: "Rachelle Sorronda",
    role: "Executive Assistant",
    bio: [
      "Rachelle is a dedicated professional with over 7 years of experience in the BPO industry, specializing in customer service, lead generation, client management, and operations leadership.",
    ],
  },
  {
    name: "Shenie Canama",
    role: "Accounting Assistant",
    bio: [],
  },
  {
    name: "Jullie Anne de la Cruz",
    role: "Creative Designer",
    bio: [],
  },
].map((member) => ({
  ...member,
  role: member.role.replace(/([A-Za-z])\(/g, "$1 (").replace(/\s+/g, " ").trim(),
  image: TEAM_IMAGE_BY_NAME[member.name] || "",
  hasBio: member.bio.length > 0,
}));

const TEAM_GROUPS = [
  {
    title: "Leadership",
    description: "The strategic leaders guiding RMO's direction, relationships, and long-term growth.",
    layout: "leadership",
    members: ["Ranjani Mohana", "Roshini Chandran"],
  },
  {
    title: "Certification Team",
    description: "Certification-focused staff supporting documentation, coordination, and day-to-day client progress.",
    members: [
      "Priya Saravanan",
      "Maria Rama Iseman",
      "Princess Mendez",
      "Nikka Grajo",
      "Abegael Mariano",
      "Nisha Rawat",
    ],
  },
  {
    title: "Finance, Operations & Administration",
    description: "Operational, financial, and executive support roles that keep delivery organized and dependable.",
    members: [
      "Rajesh",
      "Shylet Lomuntad",
      "Shenie Canama",
      "Lloura Morales",
      "Chidire Chukwudi",
      "Rachelle Sorronda",
      "Marla Balladores",
      "Ramnik Singh",
    ],
  },
  {
    title: "Client Growth & Program Support",
    description: "Support roles focused on client services, pipeline growth, and market-readiness initiatives.",
    members: ["Anjelica Espina", "Carla Mahinay"],
  },
  {
    title: "Marketing & Communications",
    description: "Team members supporting brand communication, outreach, and social media presence.",
    members: ["Marian Salino", "Eunice Lorainne Acebuque", "Jullie Anne de la Cruz"],
  },
];

const MEMBERS_BY_NAME = Object.fromEntries(TEAM_MEMBERS.map((member) => [member.name, member]));
const TEAM_BIO_COUNT = TEAM_MEMBERS.filter((member) => member.hasBio).length;

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

function TeamMemberCard({ member, onOpen }) {
  const content = (
    <React.Fragment>
      <Avatar member={member} />
      <div className="team-member-copy">
        <h3 className="team-member-name">{member.name}</h3>
        <p className="team-member-role">{member.role}</p>
        {member.hasBio ? <span className="team-member-bio-tag">View bio</span> : null}
      </div>
    </React.Fragment>
  );

  if (member.hasBio) {
    return (
      <button
        type="button"
        className="team-member-card is-clickable"
        onClick={() => onOpen(member)}
        aria-haspopup="dialog"
        aria-label={`Open bio for ${member.name}`}
      >
        {content}
      </button>
    );
  }

  return <article className="team-member-card">{content}</article>;
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
          x
        </button>

        <div className="team-modal-head">
          <Avatar member={member} className="team-member-avatar-lg" />
          <div className="team-modal-copy">
            <span className="role-pill">Team bio</span>
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
      <header className="team-directory-hero">
        <div className="team-directory-overlay" />
        <div className="wrap team-directory-shell">
          <div className="team-directory-topbar">
            <a href="index.html" className="brand team-directory-brand">
              <span className="brand-logo-wrap">
                <img className="brand-logo" src="assets/brand/RMO_Logo.jpg" alt="R Mo Global Diversity Solutions" />
              </span>
            </a>
            <a href="index.html#team" className="btn btn-light">Back to home</a>
          </div>

          <div className="team-directory-intro">
            <span className="hero-badge">
              <span className="dot">1</span>
              Team directory
            </span>
            <h1>Team Members</h1>
            <p>
              Browse the approved RMO roster below. Members with biographies open in a modal
              instead of sending visitors to a separate profile page.
            </p>
          </div>
        </div>
      </header>

      <main className="team-directory-main">
        <div className="wrap">
          <section className="team-directory-roster-shell">
            <div className="section-head center team-directory-roster-head">
              <span className="eyebrow">Our team</span>
              <h2>Approved team hierarchy</h2>
              <p>
                {TEAM_MEMBERS.length} approved team members are listed here, and {TEAM_BIO_COUNT} of
                them currently include a bio.
              </p>
            </div>

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
