// src/lib/projectsFetcher.ts
import { Project } from "@/src/types/project";
import { PROJECTS_DATA } from "@/src/constants/projects";

// 1. Remplacez par votre pseudo GitHub et votre lien CSV Google Sheets
const GITHUB_USERNAME = "VOTRE_PSEUDO_GITHUB";
const GOOGLE_SHEET_CSV_URL = "COLLEZ_ICI_VOTRE_LIEN_GOOGLE_SHEETS_CSV";

const CATEGORY_LABELS: Record<string, string> = {
  crsa: "CRSA / Automatisme",
  web: "Développement Web",
  design: "UI/UX & Design",
  communication: "Communication & CM",
};

// Petit parseur CSV propre qui gère les virgules à l'intérieur des descriptions
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Récupère les projets depuis Google Sheets
async function fetchSheetProjects(): Promise<Project[]> {
  if (!GOOGLE_SHEET_CSV_URL.startsWith("http")) return [];

  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL, { cache: "no-store" });
    if (!res.ok) return [];

    const csvText = await res.text();
    const lines = csvText.split(/\r?\n/).filter((l) => l.trim() !== "");

    // On ignore la ligne 0 (en-têtes)
    return lines.slice(1).map((line, index) => {
      const [title, rawCategory, description, rawTags, link] = parseCsvLine(line);
      const category = (rawCategory?.toLowerCase() || "crsa") as Project["category"];

      return {
        id: 10000 + index,
        title: title || "Projet sans titre",
        category,
        categoryLabel: CATEGORY_LABELS[category] || "Projet",
        description: description || "",
        tags: rawTags ? rawTags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        link: link || "#",
      };
    });
  } catch {
    return [];
  }
}

// Récupère les dépôts GitHub ayant le topic "portfolio"
async function fetchGithubProjects(): Promise<Project[]> {
  if (!GITHUB_USERNAME || GITHUB_USERNAME === "VOTRE_PSEUDO_GITHUB") return [];

  try {
    const res = await fetch(
      `https://github.com{GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
      {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
        cache: "no-store",
      }
    );
    if (!res.ok) return [];

    const repos = await res.json();

    return repos
      .filter((repo: any) => !repo.fork && Array.isArray(repo.topics) && repo.topics.includes("portfolio"))
      .map((repo: any) => {
        let category: Project["category"] = "web";
        if (repo.topics.includes("crsa")) category = "crsa";
        else if (repo.topics.includes("design")) category = "design";
        else if (repo.topics.includes("communication")) category = "communication";

        return {
          id: repo.id,
          title: repo.name.replace(/[-_]/g, " "),
          category,
          categoryLabel: CATEGORY_LABELS[category],
          description: repo.description || "Projet hébergé sur GitHub.",
          tags: repo.topics.filter((t: string) => t !== "portfolio"),
          link: repo.homepage || repo.html_url,
        };
      });
  } catch {
    return [];
  }
}

// Fonction principale : fusionne GitHub + Google Sheets (avec PROJECTS_DATA en secours)
export async function fetchAllProjects(): Promise<Project[]> {
  const [githubProjects, sheetProjects] = await Promise.all([
    fetchGithubProjects(),
    fetchSheetProjects(),
  ]);

  const combined = [...githubProjects, ...sheetProjects];
  return combined.length > 0 ? combined : PROJECTS_DATA;
}
