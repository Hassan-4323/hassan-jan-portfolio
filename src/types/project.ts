
export type ProjectTheme =
  | "school"
  | "devrescue"
  | "concept";

export type ProjectStatus =
  | "in-development"
  | "completed"
  | "concept";

export interface PortfolioProject {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  theme: ProjectTheme;

  // Current project classification
  status: "project" | "concept";
  developmentStatus: ProjectStatus;

  // Real project assets
  image?: string;
  video?: string;
  poster?: string;

  // Verified links only
  liveUrl?: string;
  repositoryUrl?: string;
}
