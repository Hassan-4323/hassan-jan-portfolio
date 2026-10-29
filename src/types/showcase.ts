
export type ShowcaseTheme =
  | "academics"
  | "analysis"
  | "frontend"
  | "architecture";

export interface ShowcaseItem {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  theme: ShowcaseTheme;
  isConcept: boolean;
}
