// types/project.ts
export interface Project {
  id: number;
  title: string;
  category: "crsa" | "web" | "design";
  categoryLabel: string;
  description: string;
  tags: string[];
  link: string;
}
