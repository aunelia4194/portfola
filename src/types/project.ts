export type ProjectCategory = "crsa" | "web" | "design" | "communication";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}
