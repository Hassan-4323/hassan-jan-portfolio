
import type { PortfolioProject } from "../types/project";

export const featuredProjects: PortfolioProject[] = [
  {
    id: "school-management",
    number: "01",
    eyebrow: "EDUCATION PLATFORM",
    title: "AL FALAH",
    subtitle: "School Management System",

    description:
      "A full-stack school management application covering academics, student records, attendance, examinations and fee workflows.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],

    theme: "school",
    status: "project",
    developmentStatus: "in-development",

    image: "",
    video: "",
    poster: "",
    liveUrl: "",
    repositoryUrl: "",
  },

  {
    id: "devrescue-ai",
    number: "02",
    eyebrow: "DEVELOPER TOOLS",
    title: "DEVRESCUE AI",
    subtitle: "Repository Analysis Platform",

    description:
      "A developer-focused application for analyzing repositories, examining code issues and exploring technical findings.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
    ],

    theme: "devrescue",
    status: "project",
    developmentStatus: "in-development",

    image: "",
    video: "",
    poster: "",
    liveUrl: "",
    repositoryUrl: "",
  },

  {
    id: "tourism-recommendation",
    number: "03",
    eyebrow: "FINAL YEAR PROJECT",
    title: "TOURISM SYSTEM",
    subtitle: "Favourite & Safe Places Prediction",

    description:
      "A MERN Stack tourism platform using traveller preferences, ratings and review sentiment to recommend favourite and potentially safer destinations, with booking and administration features.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Data Mining",
    ],

    // Retains the existing brown card styling.
    theme: "concept",

    // This is a real project, not a placeholder.
    status: "project",
    developmentStatus: "completed",

    // Keep the animated React/CSS previews.
    image: "",
    video: "",
    poster: "",

    // Add verified destinations later.
    liveUrl: "",
    repositoryUrl: "",
  },
];
