export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  stack: {
    name: string;
    color: "green" | "blue" | "orange" | "purple";
  }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "helmsman",
    slug: "helmsman",
    description:
      "AI-native admin platform for self-hosting production Kubernetes without a dedicated ops team. Diagnoses failures in plain English, applies the fixes you approve behind a guarded command gate, and replaces the Rancher/Lens dashboard with live logs, storage, RBAC, and a one-click app catalog.",
    image: "/images/project-helmsman.png",
    url: "https://helmsman.run",
    stack: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "green" },
      { name: "Bun", color: "orange" },
      { name: "Kubernetes", color: "blue" },
    ],
    featured: true,
  },
  {
    title: "jobwatchcanada",
    slug: "jobwatch-canada",
    description:
      "Community-driven platform providing transparency about Temporary Foreign Worker program usage. Features AI-powered natural language queries across 400,000+ LMIA records, interactive maps, and non-compliant employer tracking.",
    image: "/images/project-jobwatch.png",
    url: "https://jobwatchcanada.com",
    stack: [
      { name: "Go", color: "green" },
      { name: "React", color: "green" },
      { name: "PostgreSQL", color: "orange" },
      { name: "TypeScript", color: "blue" },
    ],
    featured: true,
  },
  {
    title: "reddex",
    slug: "reddex",
    description:
      "Platform for content creators to manage Reddit stories, build personal portfolio websites, and receive story submissions. Features subreddit search, author messaging, and content organization tools.",
    image: "/images/project-reddex.png",
    url: "https://reddex.app",
    stack: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "tRPC", color: "orange" },
      { name: "Prisma", color: "purple" },
    ],
    featured: true,
  },
  {
    title: "big-o",
    slug: "big-o",
    description:
      "Interactive teaching tool for understanding Big-O notation. Walk through complexity classes with live code, race algorithms head-to-head, and drill ~70 quiz questions covering O(1) operations, recursion, and amortized-cost traps across customizable difficulty tiers.",
    image: "/images/project-big-o.png",
    url: "https://big-o.tyrelchambers.com",
    stack: [
      { name: "React", color: "green" },
      { name: "Vite", color: "purple" },
      { name: "Tailwind", color: "blue" },
      { name: "Kubernetes", color: "blue" },
    ],
    featured: true,
  },
  {
    title: "linked-lists",
    slug: "linked-lists",
    description:
      "Interactive teaching tool for singly, doubly, and circular linked lists. Step through classic interview techniques — dummy head, two-pointer, reverse, merge, Floyd's cycle detection, palindrome, Nth-from-end — with animated diagrams, a free-form sandbox, and quizzes.",
    image: "/images/project-linked-lists.png",
    url: "https://linked-lists.tyrelchambers.com",
    stack: [
      { name: "React", color: "green" },
      { name: "Vite", color: "purple" },
      { name: "Tailwind", color: "blue" },
      { name: "Kubernetes", color: "blue" },
    ],
    featured: true,
  },
  {
    title: "bitwise",
    slug: "bitwise",
    description:
      "Interactive teaching tool for JavaScript bitwise operations. Walk through operators and idioms with live evaluation, then switch to the polynomial (GF(2)) view to see how bits behave as elements of a field — XOR as addition, AND as multiplication, with shift-and-XOR long division.",
    image: "/images/project-bitwise.png",
    url: "https://bitwise.tyrelchambers.com",
    stack: [
      { name: "React", color: "green" },
      { name: "Vite", color: "purple" },
      { name: "Tailwind", color: "blue" },
      { name: "Kubernetes", color: "blue" },
    ],
    featured: true,
  },
];

export const getStackColorClasses = (color: Project["stack"][0]["color"]) => {
  const colorMap = {
    green: "text-[#22C55E] bg-[#22C55E]/[0.125]",
    blue: "text-[#3B82F6] bg-[#3B82F6]/[0.125]",
    orange: "text-[#F59E0B] bg-[#F59E0B]/[0.125]",
    purple: "text-[#A855F7] bg-[#A855F7]/[0.125]",
  };
  return colorMap[color];
};

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
