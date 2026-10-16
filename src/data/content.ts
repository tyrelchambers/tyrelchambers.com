import type { ImageMetadata } from "astro";
import sloanHome from "../assets/images/client-sloan-home.webp";

export interface Client {
  name: string;
  category: string;
  where: string;
  summary: string;
  points: string[];
  tags: string[];
  image: ImageMetadata;
}

export const clients: Client[] = [
  {
    name: "Sloan Services",
    category: "Respite & day programs",
    where: "Peterborough, ON · 2026",
    summary:
      "Sloan Services runs day groups, trips and respite for adults with developmental disabilities across Peterborough and the Kawarthas. I designed and built their new website so families can see what's on, understand their funding and get in touch with Kim, the founder.",
    points: [
      "A monthly calendar that families can filter by program and print, with spots left or waitlist status on every event.",
      "A plain-language guide to Passport funding that walks families from DSO approval through to booking and claiming.",
      "Sign-up links that open an email to Kim already filled in with the details she needs to reply.",
      "Every page works with a keyboard alone and respects reduced-motion settings.",
    ],
    tags: ["Design", "Next.js", "React", "Tailwind CSS"],
    image: sloanHome,
  },
];

export interface Role {
  dates: string;
  duration: string;
  role: string;
  company: string;
  description: string;
  stack: string;
}

export const roles: Role[] = [
  {
    dates: "Jul 2025 – Present",
    duration: "1 yr 3 mos",
    role: "Software Engineer",
    company: "JobWatchCanada",
    description:
      "I built a web app that collects and maps hundreds of thousands of Open Government records. It drew more than 20,000 unique visitors in its first two months and was covered by the Toronto Sun, Toronto Star, Yahoo News and Canadian Press. I also added natural language search over the data using xAI's Grok.",
    stack: "Go, React, MapLibre, xAI/Grok, Pelias",
  },
  {
    dates: "Mar 2024 – Present",
    duration: "2 yrs 7 mos",
    role: "Customer Success Engineer / Software Engineer",
    company: "This Dot",
    description:
      "I ran user research calls to improve onboarding and keep customers around. Troubleshooting problems from the server logs cut support tickets by 25%, and the documentation I wrote afterward cut them by another 50%.",
    stack: "React, TypeScript, NestJS",
  },
  {
    dates: "Sep 2021 – Sep 2023",
    duration: "2 yrs",
    role: "Software Engineer",
    company: "This Dot",
    description:
      "I worked with Stripe's development team to test the Stripe Apps platform before its public release. I was also the subject matter expert on two new applications built on it.",
    stack: "React, TypeScript, NestJS",
  },
];

export const blog = {
  name: "All Systems Nominal",
  tagline: "A commonplace book for code, craft, and quiet hours.",
  url: "https://allsystemsnominal.ca",
  topics: ["Self-hosting", "Kubernetes", "AI & engineering", "Code quality", "Learning", "Mindset"],
};

export interface Article {
  title: string;
  date: string;
  topic: string;
  read: string;
  url: string;
  excerpt?: string;
  tags?: string[];
}

export const featuredArticle: Article = {
  title: "Do you care about code quality anymore?",
  date: "Sep 12, 2026",
  topic: "Code quality",
  read: "5 min read",
  url: "https://allsystemsnominal.ca/blog/do-you-care-about-code-quality-anymore/",
  excerpt:
    "Even when AI writes and reviews a lot of the code, I think programmers should still take pride in what they ship and write code for the people who'll read it next.",
  tags: ["Programming", "Code quality"],
};

export const articles: Article[] = [
  {
    title: "Who are you? Who am I?",
    date: "Sep 9, 2026",
    topic: "Identity",
    read: "5 min",
    url: "https://allsystemsnominal.ca/blog/who-are-you-who-am-i/",
  },
  {
    title: "My little adventure into game development",
    date: "Aug 9, 2026",
    topic: "Learning",
    read: "3 min",
    url: "https://allsystemsnominal.ca/blog/my-little-adventure-into-game-development/",
  },
  {
    title: "We're not losing our jobs",
    date: "Jul 28, 2026",
    topic: "AI",
    read: "3 min",
    url: "https://allsystemsnominal.ca/blog/we-re-not-losing-our-jobs/",
  },
  {
    title: "I built my own Kubernetes management app with AI as a first-class citizen.",
    date: "Jul 18, 2026",
    topic: "Kubernetes",
    read: "2 min",
    url: "https://allsystemsnominal.ca/blog/i-built-my-own-kubernetes-management-app-with-ai-as-a-first-class-citizen/",
  },
  {
    title: "I saved $150 a month by hosting my own infrastructure",
    date: "May 13, 2026",
    topic: "Self-hosting",
    read: "5 min",
    url: "https://allsystemsnominal.ca/blog/i-saved-usd150-a-month-by-hosting-my-own-infrastructure/",
  },
];

export const contact = {
  email: "hi@tyrelchambers.com",
  socials: [
    { name: "GitHub", url: "https://github.com/tyrelchambers?tab=repositories" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tyrel-chambers-8ab581214/" },
    { name: "X", url: "https://x.com/imtyrelchambers" },
  ],
};
