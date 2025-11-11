import type { ReactNode } from "react";

export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export type TimelineItem = {
  year: string;
  role: string;
  company?: string;
  subtitle: string;
  description: ReactNode;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
};

export type CommunityItem = {
  title: string;
  role: string;
  organization: string;
  timeframe: string;
  summary: string;
  highlights?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ATL Food Resources",
    description:
      "Contributing to an Atlanta website supporting access to free food resources after the end of SNAP benefits, adding new listings and improving data validation and UI flows.",
    link: "https://allisonmh.github.io/food-search-2025/",
    tags: ["React", "Vite", "SCSS"],
  },
  {
    title: "Spotflow",
    description:
      "Helping global merchants accept local payments via a single integration by optimizing the Vue.js SDK with a promise-based CDN loader and performance tuning.",
    link: "https://github.com/Spotflow-One/vue-spotflow-checkout/pull/30",
    tags: ["Vue.js"],
  },
  {
    title: "MORE TO COME!",
    description: "In the lab...",
    link: "https://github.com/aishajackson",
    tags: [],
  },
];

export const community: CommunityItem[] = [
  {
    title: "Colorwave Fellowship",
    role: "Fellow",
    organization: "Colorwave",
    timeframe: "2025 — Present",
    summary:
      "Closing the racial wealth gap by connecting underrepresented talent with opportunities across the innovation economy.",
    link: "https://www.thecolorwave.org/",
  },
  {
    title: "Black Girls Code",
    role: "Technical Volunteer",
    organization: "Black Girls Code",
    timeframe: "2024 — Present",
    summary:
      "Inspiring future technologists through playful storytelling workshops grounded in art, music, and code.",
    link: "https://www.blackgirlscode.com/",
  },
  {
    title: "Cool Girls",
    role: "Club Volunteer & Cool Sister",
    organization: "Cool Girls, Inc.",
    timeframe: "2022 — Present",
    summary:
      "Supporting middle school girls through mentorship, workshop facilitation, and confidence-building activities.",
    link: "https://thecoolgirls.org/",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2021 - Present",
    role: "Senior Software Engineer",
    company: "Warner Bros. Discovery",
    subtitle: "Media Supply Chain - HBO Max & Max",
    description: (
      <>
        Developing a new <strong>Ad Content Tracking System</strong> using{" "}
        <strong>React</strong>, <strong>Redux</strong>, and{" "}
        <strong>Python</strong> to streamline the receipt, management, and
        fulfillment of ads for linear play-out across all brands.
      </>
    ),
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Nike",
    subtitle: "Global Pricing - Promos & Markdowns",
    description: (
      <>
        Developed a <strong>React</strong> and <strong>Redux</strong> markdown
        price optimization UI enabling global retail planners to make
        data-driven in-season pricing decisions that maximize revenue and
        optimize inventory flow.
      </>
    ),
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Oregon Labs",
    subtitle: "Freelance",
    description: (
      <>
        Contributed to multiple innovation projects using{" "}
        <strong>Vue.js</strong> and <strong>JavaScript</strong>, developing
        interactive interfaces and prototypes that enhanced user experience and
        supported rapid product experimentation.
      </>
    ),
  },
  {
    year: "2018 - 2020",
    role: "Software Engineer",
    company: "Nike",
    subtitle: "Early in Career Rotation Program",
    description: (
      <>
        Completed three Nike rotations building full-stack and data solutions
        using <strong>AngularJS</strong>, <strong>NodeJS</strong>,{" "}
        <strong>Python</strong>, and <strong>AWS</strong> — spanning deployment
        automation, ML-powered forecasting tools, and backend integrations with
        ServiceNow and Snowflake.
      </>
    ),
  },
  {
    year: "2017",
    role: "Software Engineer Intern",
    company: "Nike",
    subtitle: "Nike Zero - Employee Hub",
    description: (
      <>
        Developed a <strong>Python</strong>-based environment duplicator for
        Nike Zero databases, built UI enhancements with{" "}
        <strong>Bootstrap</strong> for a women’s coaching site, and created a
        SharePoint site with 15 internal architecture diagrams.
      </>
    ),
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Experience Design",
    items: ["Design Systems", "Story-driven UX", "Rapid Prototyping"],
  },
  {
    title: "Creative Engineering",
    items: ["React + TypeScript", "Vite", "Framer Motion", "Three.js"],
  },
  {
    title: "Ways of Working",
    items: ["Inclusive Collaboration", "Mentoring", "Workshop Facilitation"],
  },
];

export const socials: SocialLink[] = [
  {
    label: "Email",
    value: "let's connect!",
    href: "mailto:ajackson7148@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aishajackson",
    href: "https://www.linkedin.com/in/aishaajackson",
  },
  {
    label: "GitHub",
    value: "github.com/aishajackson",
    href: "https://github.com/aishajackson",
  },
];
