// Everything a recruiter reads on the home page lives in this file.
// Edit the text here; the components only handle layout.

export const site = {
  name: "Nor Afrina Rafie",
  shortName: "Afrina",
  initials: "NA",
  role: "Data Analyst · IT Graduate (Big Data Analytics)",
  headline: "I turn messy operational data into dashboards people actually use.",
  intro:
    "Fresh IT graduate in Big Data Analytics from Universiti Teknologi PETRONAS. I’m currently a Business Analyst at Cypark Resources, building performance dashboards for solar plants, and I’m looking for a graduate data analyst role.",
  availability: "Open to graduate data analyst roles",
  location: "Sungai Buloh, Selangor, Malaysia",
  email: "afrinarafie@gmail.com",
  linkedin: "https://www.linkedin.com/in/norafrinarafie/",
  github: "https://github.com/AfrinaRafie",
  githubHandle: "AfrinaRafie",
};

export const stats = [
  { value: "0.851", label: "ROC-AUC of my FYP donor model" },
  { value: "350K+", label: "SCADA rows analysed at one solar plant" },
  { value: "8 mo", label: "Data analyst internship at PETRONAS" },
  { value: "214 MWac", label: "Solar capacity in my Daily Generation Dashboard" },
];

export const about = {
  paragraphs: [
    "I like the part of data work most people skip: finding out why the numbers look wrong. At Cypark, that meant discovering that a plant’s power meter only updated every ten minutes, which made healthy hours look like failures.",
    "My degree gave me statistics, predictive modelling and machine learning. My work placements taught me the rest: a dashboard only matters if the people it’s built for open it every morning. I build in small steps, check against real data, and keep the language plain.",
  ],
  strengths: ["Attention to detail", "Fast learner", "User-first thinking", "Honest reporting"],
};

export const experience = [
  {
    period: "Jul 2026 – present",
    title: "Business Analyst · K-Youth Development Programme",
    org: "Cypark Resources Berhad",
    team: "O&M Department · placement via Pepper Labs",
    points: [
      "Designed and delivered the Daily Generation Dashboard, turning SharePoint reports into one source of truth for energy output, revenue and performance ratio across 7 solar plants (13 generating units, 214 MWac).",
      "Cleaned and analysed 350,000+ rows of SCADA data from the Merchang solar plant in Python, and built an interactive anomaly dashboard (HTML, CSS, JavaScript, Chart.js) for the O&M team.",
      "Ran User Acceptance Testing for the Microsoft Intune and Defender for Endpoint rollout, and supported monthly performance reporting for an O&M site.",
    ],
  },
  {
    period: "Jan 2025 – Aug 2025",
    title: "Intern Data Analyst",
    org: "PETRONAS",
    team: "Downstream Business Excellence · Asset Technology (DBE/ATEx)",
    points: [
      "Designed and structured the OPNA web application in OutSystems Web Reactive within an Agile/Scrum team, replacing manual Excel data collection across PETRONAS operating units.",
      "Developed the Downstream OE & HSSE Major Incidents dashboard in Power BI, cleaning and transforming SharePoint and Excel data to show incident trends for management review.",
    ],
  },
];

export const education = [
  {
    period: "Jan 2023 – May 2026",
    title: "Bachelor of Information Technology (Hons), Big Data Analytics",
    org: "Universiti Teknologi PETRONAS (UTP)",
    detail: "Statistics & Probability · Linear Algebra · Predictive Modelling · Data Structures & Algorithms",
  },
  {
    period: "Jul 2020 – Jun 2022",
    title: "Matriculation Programme",
    org: "Kolej Matrikulasi Johor",
    detail: "",
  },
];

export const skills = [
  { group: "Analysis & BI", items: ["Python", "SQL", "Power BI", "Advanced Excel", "pandas", "Data modelling"] },
  { group: "Machine learning", items: ["scikit-learn", "Predictive analytics", "SHAP", "K-Means clustering"] },
  { group: "Build", items: ["Streamlit", "OutSystems", "JavaScript", "HTML / CSS", "Java", "C++", "R", "Git & GitHub"] },
  { group: "Ways of working", items: ["Agile · Scrum · Kanban", "UAT testing", "Data storytelling", "Stakeholder communication", "AI-assisted development"] },
];

export const certifications = [
  { name: "Claude Code 101", issuer: "Anthropic" },
  { name: "Google AI Fundamentals", issuer: "Google · Coursera" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google · Coursera" },
];

export const leadership = [
  "Supervisor, Pesta Merdeka UTP 2024 · coordinated 32 committees",
  "Treasurer, Village Wide Raya 2024 · managed finances for a 20-member committee",
  "Head of Department, Media & Publication, RCSU · led a team of 6",
];
