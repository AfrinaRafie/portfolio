// Each project becomes a card on the home page and a case-study page at /projects/<slug>.

export type Status = "Live" | "In progress" | "Completed";
export type Category = "Work" | "University" | "Programme";
export type Art = "segments" | "bars" | "scatter" | "flow" | "line" | "matrix" | "chain";
export type Accent = "blue" | "violet" | "amber" | "green" | "pink" | "cyan";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  label: string;
  org: string;
  period: string;
  role: string;
  status: Status;
  featured?: boolean;
  summary: string;
  problem: string;
  built: string[];
  results: { value: string; label: string }[];
  learned: string;
  stack: string[];
  links?: { label: string; href: string }[];
  note?: string;
  art: Art;
  accent: Accent;
};

export const projects: Project[] = [
  {
    slug: "yutp-ai-donor-dashboard",
    title: "AI-Powered Donor Management Dashboard",
    category: "University",
    label: "Final Year Project",
    org: "Universiti Teknologi PETRONAS · for YUTP",
    period: "Sep 2025 – Mar 2026 · rebuilt Nov 2026",
    role: "Sole developer",
    status: "In progress",
    featured: true,
    summary:
      "A Streamlit dashboard that helps the YUTP foundation’s fundraising team see which donors are likely to give in the next 12 months, how much, and why.",
    problem:
      "Fundraising teams usually contact everyone the same way, so effort goes to donors who were never going to give while loyal supporters drift away. After submitting my FYP, I rebuilt it into a genuine machine-learning system with an honest, time-based evaluation.",
    built: [
      "Role-based Streamlit app with five pages: executive overview, donor engagement, AI insights, donor portal and database management, backed by SQLite.",
      "Likelihood model that predicts who will donate in the next 12 months. I compared Logistic Regression, Random Forest and Gradient Boosting against a simple “gave in the last 12 months” rule, and kept Random Forest.",
      "Time-based split: trained on history up to Oct 2024 and tested on the following year, so the model never sees the future it predicts.",
      "SHAP explanations that show the top three reasons behind every donor’s score, plus K-Means segments: Loyal Champions, Regular Supporters, New & Growing, and Lapsed.",
      "A value model that estimates how much each donor is likely to give, on realistic simulated data for about 3,000 donors to protect real donor privacy.",
    ],
    results: [
      { value: "0.851", label: "ROC-AUC (Random Forest)" },
      { value: "0.788", label: "F1 score, vs 0.775 for the simple rule" },
      { value: "4", label: "Donor segments from K-Means" },
      { value: "0.835", label: "R² of the donation-value model" },
    ],
    learned:
      "A simple rule is a strong baseline. The models only beat “gave last year” by a small margin on F1, but they rank every donor by probability and explain why, which a rule can’t do. Next step: a Google Gemini assistant that answers questions about the data in plain language.",
    stack: ["Python", "Streamlit", "SQLite", "scikit-learn", "SHAP", "pandas", "Plotly", "Google Gemini (next)"],
    links: [{ label: "View code on GitHub", href: "https://github.com/AfrinaRafie/YUTP_FYP" }],
    art: "segments",
    accent: "violet",
  },
  {
    slug: "daily-generation-dashboard",
    title: "Daily Generation Dashboard",
    category: "Work",
    label: "Cypark Resources · O&M",
    org: "Cypark Resources Berhad",
    period: "Oct 2026 – present",
    role: "Business Analyst · designed and built it",
    status: "In progress",
    summary:
      "A live dashboard that reads every solar plant’s daily report from SharePoint and shows energy, revenue and performance ratio on one page, replacing PDF reports passed around WhatsApp and email.",
    problem:
      "Each site sent its daily report as a PDF in WhatsApp groups or by email. The files were heavy to download, hard to compare across sites, and impossible to search when someone needed last week’s numbers.",
    built: [
      "Built with Claude as an AI-assisted development partner: I set the requirements, tested every version against the source reports and directed each change.",
      "Reads the daily report files straight from SharePoint, so nobody has to upload or retype anything.",
      "Shows energy delivered, revenue, performance ratio and irradiation for every site, compared with daily budget and expected output.",
      "Opens on the latest day, with previous and next day, week and month views and a daily performance grid.",
      "Tracks issues and rectifications reported by the sites, and exports a summary as a PDF or image for sharing.",
      "Fills days missing from the daily reports using the OP-01 report, so figures stay complete.",
    ],
    results: [
      { value: "7", label: "Solar plants on one page" },
      { value: "13", label: "Generating units covered" },
      { value: "214 MWac", label: "Combined capacity" },
      { value: "0", label: "Manual uploads needed" },
    ],
    learned:
      "AI tools speed up building, but the analyst still owns the logic: every figure had to match the source report before I trusted it. The dashboard is being moved to Cypark’s company account so staff can keep using it after my placement.",
    stack: ["Claude (AI-assisted build)", "SharePoint", "JavaScript", "HTML / CSS", "Data cleaning"],
    note: "Internal Cypark tool with company data, so it’s shown as a case study with no public link.",
    art: "bars",
    accent: "amber",
  },
  {
    slug: "merchang-scada-analysis",
    title: "Merchang SCADA Anomaly Dashboard",
    category: "Work",
    label: "Cypark Resources · O&M",
    org: "Cypark Resources Berhad",
    period: "Sep 2026 – Oct 2026",
    role: "Business Analyst · analysis & dashboard",
    status: "Completed",
    summary:
      "An interactive dashboard explaining why the 100 MWac Merchang solar plant seemed to lose power at certain sunlight levels, built from 350K+ rows of SCADA data.",
    problem:
      "Mean export power dropped at specific irradiance bands at Merchang while other sites trended normally. The O&M team needed to know which drops were real underperformance and which were measurement noise.",
    built: [
      "Cleaned and combined 350K+ rows of 30-second SCADA data, repairing date bugs and sensor gaps in the source workbook.",
      "Found that the plant’s power meter updates only every 10 minutes while irradiance updates constantly, creating false “drops”.",
      "Identified one chronically faulty irradiance sensor (of 10) and ruled out temperature derating: anomaly hours were cooler, not hotter.",
      "Built an interactive web dashboard comparing power anomalies with irradiance trends for the HOD and O&M team.",
    ],
    results: [
      { value: "350K+", label: "SCADA rows processed" },
      { value: "138", label: "Power anomalies flagged" },
      { value: "10", label: "Irradiance sensors checked" },
    ],
    learned:
      "Report what the data can and can’t explain. The faulty sensor explained only about 8% of events, so I said so plainly and recommended checking inverter fault logs next, rather than overclaiming.",
    stack: ["Python", "Excel", "HTML / CSS / JavaScript", "Chart.js"],
    note: "Built on proprietary plant data, so it’s shown as a case study with no public link.",
    art: "scatter",
    accent: "cyan",
  },
  {
    slug: "ev-charging-optimisation",
    title: "EV Charging Optimisation Dashboard",
    category: "University",
    label: "Data Visualisation group project",
    org: "Universiti Teknologi PETRONAS · TFB3133 Data Visualisation",
    period: "Sep 2025 semester",
    role: "Dataset & charts, in a team of 6 (The Delta)",
    status: "Completed",
    summary:
      "A Streamlit dashboard that shows when Malaysian EV owners charge, how much it costs, and when they should charge instead to cut costs and ease pressure on the grid.",
    problem:
      "More EVs in Malaysia means more charging after work, mostly between 6 PM and 10 PM. That evening peak strains the national grid, costs drivers more, and crowds charging stations. There’s little open Malaysian EV charging data to study it.",
    built: [
      "My part: built the synthetic dataset, modelled on the Kaggle EV Charging Sessions dataset, TNB electricity tariffs and ChargeEV / SEDA station locations, and cleaned it with pandas and NumPy.",
      "My part: built the interactive charts in Plotly and Altair: charging sessions by hour, fast vs normal charger use, and a day-by-hour energy heatmap.",
      "With the team: KPI cards for peak hour, average cost per session and the busiest location.",
      "With the team: a charging-hour slider that flags peak hours (RM0.60/kWh) and recommends off-peak charging (RM0.40/kWh) between 10 PM and 5 AM.",
      "With the team: a what-if cost simulator and a 24-hour tariff chart that show how much shifting the charging time saves.",
    ],
    results: [
      { value: "8 PM", label: "Peak charging hour, inside the 7–10 PM evening peak" },
      { value: "RM14.65", label: "Average cost per charging session" },
      { value: "15–25%", label: "Projected cost saving from off-peak charging" },
      { value: "Selangor", label: "Most active charging location" },
    ],
    learned:
      "When real data is scarce, a well-documented synthetic dataset built from real references can still answer the question, as long as you say clearly that it’s simulated.",
    stack: ["Python", "Streamlit", "pandas", "NumPy", "Plotly", "Altair"],
    art: "line",
    accent: "green",
  },
  {
    slug: "petronas-opna-web-app",
    title: "OPNA Web App & OE/HSSE Dashboard",
    category: "Work",
    label: "PETRONAS internship",
    org: "PETRONAS · DBE / ATEx",
    period: "Jan 2025 – Aug 2025",
    role: "Intern Data Analyst",
    status: "Completed",
    summary:
      "A low-code web application that replaced a manual Excel workflow, plus a Power BI dashboard tracking major safety incidents.",
    problem:
      "Operating units tracked OPNA records in spreadsheets passed between teams, and incident trends were hard to see in management reviews.",
    built: [
      "Designed and structured the OPNA web application in OutSystems, replacing the manual Excel workflow across PETRONAS operating units.",
      "Developed the Downstream OE & HSSE Major Incidents dashboard for pattern recognition and trend monitoring.",
      "Delivered in an Agile team using Scrum and Kanban.",
    ],
    results: [
      { value: "1", label: "Excel workflow replaced by a web app" },
      { value: "8 mo", label: "Internship in an Agile team" },
    ],
    learned:
      "Low-code tools are fast, but the real work is agreeing on the data structure with every team that will use it.",
    stack: ["OutSystems", "Power BI", "SharePoint", "Agile"],
    note: "Internal PETRONAS systems, so they’re shown as a case study with no public link.",
    art: "flow",
    accent: "blue",
  },
  {
    slug: "ai-automation-capstones",
    title: "AI Automation Capstones",
    category: "Programme",
    label: "K-Youth × Pepper Labs",
    org: "Pepper Labs AI programme",
    period: "2026",
    role: "Participant",
    status: "Completed",
    summary:
      "Four AI workflows that chain tools like Perplexity, Claude, NotebookLM and Genspark to automate repetitive office tasks, each with a human check at every step.",
    problem:
      "Reports like monthly newsletters, campaign briefs and lessons-learned reviews take days of manual research and writing.",
    built: [
      "Spreadsheet-to-insight dashboard workflow.",
      "Monthly client market-update newsletter: Perplexity research, GPT writing, Make.com delivery.",
      "Competitor research to campaign brief: Perplexity, Genspark, Claude.",
      "Post-transformation lessons-learned review: Fireflies, NotebookLM, Genspark.",
    ],
    results: [
      { value: "4", label: "Workflows designed and presented" },
      { value: "100%", label: "Outputs checked by a human" },
    ],
    learned:
      "AI is a co-pilot. The value is in designing the chain and checking every output, not in any single prompt.",
    stack: ["Perplexity", "Claude", "NotebookLM", "Genspark", "Make.com"],
    art: "chain",
    accent: "violet",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
