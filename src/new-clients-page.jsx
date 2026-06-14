/* global React, ReactDOM, CategoryPage */

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryPage title="New Clients" data={NEW_CLIENTS_DATA} />
);
