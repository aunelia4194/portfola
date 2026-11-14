import { Project } from "../types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Système de Tri Automatisé",
    category: "crsa",
    categoryLabel: "CRSA / Automatisme",
    description:
      "Conception et programmation d'une cellule de tri robotisée avec automate programmable. Modélisation 3D complète des pièces et simulation des cycles.",
    tags: ["Automatisme", "SolidWorks", "PLC", "Simulation"],
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Immersif Jour/Nuit",
    category: "web",
    categoryLabel: "Développement Web",
    description:
      "Développement de ce portfolio sous Next.js et Tailwind CSS. Intégration d'un système de thèmes avancés basé sur deux univers visuels distincts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Design System — Univers Cosmique",
    category: "design",
    categoryLabel: "UI/UX & Design",
    description:
      "Création complète de l'identité visuelle, des chartes graphiques et des composants d'interface sur Figma pour des ambiances de jour et de nuit.",
    tags: ["Figma", "UI/UX", "Branding", "Wireframing"],
    link: "#",
  },
  {
    id: 4,
    title: "Stratégie Éditoriale & Réseaux",
    category: "communication",
    categoryLabel: "Communication & CM",
    description:
      "Création d'un calendrier éditorial complet, conception de visuels engageants et animation d'une communauté en ligne autour d'une identité de marque.",
    tags: ["Community Management", "Stratégie", "Contenu", "Veille"],
    link: "#",
  },
];
