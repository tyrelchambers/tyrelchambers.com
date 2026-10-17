import type { ImageMetadata } from "astro";
import rigel from "../assets/images/project-rigel.png";
import jobwatch from "../assets/images/project-jobwatch.png";
import reddex from "../assets/images/project-reddex.png";
import bigO from "../assets/images/project-big-o.png";
import linkedLists from "../assets/images/project-linked-lists.png";
import bitwise from "../assets/images/project-bitwise.png";

export interface Project {
  title: string;
  slug: string;
  kind: "product" | "lesson";
  description: string;
  image: ImageMetadata;
  url: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "rigel",
    slug: "rigel",
    kind: "product",
    description:
      "rigel lets a small team run production Kubernetes on their own servers without hiring an ops engineer. It explains failures in plain English, applies only the fixes you approve, and replaces Rancher or Lens as your dashboard.",
    image: rigel,
    url: "https://rigel.run",
    stack: ["TypeScript", "React", "Bun", "Kubernetes"],
  },
  {
    title: "jobwatchcanada",
    slug: "jobwatch-canada",
    kind: "product",
    description:
      "JobWatchCanada makes the Temporary Foreign Worker program easier to scrutinize. You can search more than 400,000 LMIA records in plain English, browse them on a map and see which employers were found non-compliant. The Toronto Star, Toronto Sun, Yahoo News and Canadian Press have all covered it.",
    image: jobwatch,
    url: "https://jobwatchcanada.com",
    stack: ["Go", "React", "PostgreSQL", "TypeScript"],
  },
  {
    title: "reddex",
    slug: "reddex",
    kind: "product",
    description:
      "Reddex helps narrators find and organize Reddit stories for their channels. They can search subreddits, message authors, collect story submissions and publish their own portfolio site.",
    image: reddex,
    url: "https://reddex.app",
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma"],
  },
  {
    title: "big-o",
    slug: "big-o",
    kind: "lesson",
    description:
      "Learn the common complexity classes with live code, race algorithms against each other and test yourself with about 70 quiz questions.",
    image: bigO,
    url: "https://big-o.tyrelchambers.com",
    stack: ["React", "Vite", "Tailwind", "Kubernetes"],
  },
  {
    title: "linked-lists",
    slug: "linked-lists",
    kind: "lesson",
    description:
      "Step through animated diagrams of the dummy head, two-pointer, reverse and merge techniques, plus Floyd's cycle detection.",
    image: linkedLists,
    url: "https://linked-lists.tyrelchambers.com",
    stack: ["React", "Vite", "Tailwind", "Kubernetes"],
  },
  {
    title: "bitwise",
    slug: "bitwise",
    kind: "lesson",
    description:
      "Try JavaScript's bitwise operators and see each result as you type. A GF(2) view shows how XOR works as addition and AND as multiplication.",
    image: bitwise,
    url: "https://bitwise.tyrelchambers.com",
    stack: ["React", "Vite", "Tailwind", "Kubernetes"],
  },
];

export const getProjects = (filter: { kind?: Project["kind"] } = {}) =>
  projects.filter((p) => !filter.kind || p.kind === filter.kind);

export const domainOf = (url: string) => new URL(url).hostname;
