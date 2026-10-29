
export type FinalShowcaseTheme =
  | "build"
  | "analyze"
  | "create";

export interface FinalShowcaseItem {
  id: string;
  number: string;
  category: string;
  title: string;
  caption: string;
  theme: FinalShowcaseTheme;
  tags: string[];
  concept: boolean;
}

export const finalShowcaseItems: FinalShowcaseItem[] = [
  {
    id: "al-falah-school",
    number: "01",
    category: "SCHOOL MANAGEMENT / FULL-STACK",
    title: "Al Falah",
    caption:
      "Building an integrated school management system with academic administration, student records, attendance, examinations and fee management.",
    theme: "build",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    concept: false,
  },

  {
    id: "devrescue-ai",
    number: "02",
    category: "DEVELOPER TOOLS / CODE ANALYSIS",
    title: "DevRescue AI",
    caption:
      "Developing a codebase analysis platform that helps developers inspect repositories, investigate issues and understand technical findings.",
    theme: "analyze",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "BullMQ",
    ],
    concept: false,
  },

  {
    id: "tourism-recommendation",
    number: "03",
    category: "FINAL YEAR PROJECT / MERN STACK",
    title: "Tourism System",
    caption:
      "A data-mining tourism platform that uses traveller preferences, reviews and ratings to support personalised destination recommendations.",
    theme: "create",
    tags: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Data Mining",
    ],
    concept: false,
  },
];
