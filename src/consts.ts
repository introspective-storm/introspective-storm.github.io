import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Anikaith Bhardwaj",
  EMAIL: "anikaithbhardwaj@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal site outlying my projects, works, and blog posts.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on stuff I am working on or find interesting",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where and what I've done previously.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of projects I can share, with links so you can go check them out.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/introspective-storm"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/anikaith-bhardwaj",
  }
];
