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
