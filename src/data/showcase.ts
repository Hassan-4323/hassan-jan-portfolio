
import type { ShowcaseItem } from "../types/showcase";

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "academic-operations",
    number: "01",
    label: "AL FALAH / SCHOOL MANAGEMENT",
    title: "School Administration",
    description:
      "A full-stack school platform for managing students, parents, teachers, academic records, attendance, examinations and fees.",
    theme: "academics",
    isConcept: false,
  },

  {
    id: "repository-intelligence",
    number: "02",
    label: "DEVRESCUE AI / DEVELOPER TOOLS",
    title: "Repository Analysis",
    description:
      "A developer platform for examining codebases, identifying issues, exploring technical findings and supporting code-repair workflows.",
    theme: "analysis",
    isConcept: false,
  },

  {
    id: "tourism-recommendations",
    number: "03",
    label: "FINAL YEAR PROJECT / MERN STACK",
    title: "Tourism Recommendations",
    description:
      "A tourism platform using traveller preferences, ratings and review sentiment to recommend favourite and potentially safer destinations.",
    theme: "frontend",
    isConcept: false,
  },

  {
    id: "application-architecture",
    number: "04",
    label: "FULL-STACK DEVELOPMENT",
    title: "Connected Systems",
    description:
      "Architecture and integration patterns used across React interfaces, Node.js APIs, databases and background-processing services.",
    theme: "architecture",
    isConcept: true,
  },
];
