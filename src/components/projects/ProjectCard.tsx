// components/projects/ProjectCard.tsx
import { Project } from "@/src/types/project";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

// Association automatique des couleurs selon la catégorie du projet (identique à AboutSkills)
const categoryStyles: Record<
  string,
  {
    badge: string;
    hoverBorder: string;
    glow: string;
  }
> = {
  crsa: {
    badge: "text-cyan-300 border-cyan-300/30 bg-cyan-300/10",
    hoverBorder: "hover:border-cyan-300/70",
    glow: "group-hover:bg-cyan-300/15",
  },
  web: {
    badge: "text-amber-300 border-amber-300/30 bg-amber-300/10",
    hoverBorder: "hover:border-amber-300/70",
    glow: "group-hover:bg-amber-300/15",
  },
  design: {
    badge: "text-[#ffb7c5] border-[#ffb7c5]/30 bg-[#ffb7c5]/10",
    hoverBorder: "hover:border-[#ffb7c5]/70",
    glow: "group-hover:bg-[#ffb7c5]/15",
  },
  communication: {
    badge: "text-emerald-300 border-emerald-300/30 bg-emerald-300/10",
    hoverBorder: "hover:border-emerald-300/70",
    glow: "group-hover:bg-emerald-300/15",
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLink = project.link && project.link !== "#" && project.link.trim() !== "";
  const style = categoryStyles[project.category] || categoryStyles.web;

  return (
    <article
      className={`glass-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-md transition-all duration-300 md:p-7 dark:border-blue-900/40 dark:bg-slate-950/40 ${style.hoverBorder}`}
    >
      {/* Halo subtil de la couleur de la catégorie dans l'angle au survol */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-transparent blur-2xl transition-all duration-500 ${style.glow}`}
      />

      <div className="relative space-y-3.5">
        {/* Badge catégorie coloré comme sur la page À propos */}
        <span
          className={`inline-block rounded-lg border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${style.badge}`}
        >
          {project.categoryLabel}
        </span>

        {/* Titre du projet */}
        <h2 className="font-serif text-xl font-bold text-white md:text-2xl leading-snug">
          {project.title}
        </h2>

        {/* Description en blanc pur */}
        <p className="text-sm leading-relaxed text-white">
          {project.description}
        </p>
      </div>

      {/* Bas de carte : Tags + Lien ou statut */}
      <div className="relative mt-6 space-y-4 border-t border-white/15 pt-4 dark:border-blue-900/30">
        {/* Liste de tags épurée */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white dark:border-blue-950/50 dark:bg-black/25 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton d'action aligné à droite */}
        <div className="flex justify-end pt-1">
          {hasValidLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#ffb7c5] dark:text-amber-400 dark:hover:text-orange-400 transition-colors"
            >
              <span>Voir le projet</span>
              <svg
                className="h-3.5 w-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ) : (
            <span className="text-[11px] italic text-white/75">
              Projet académique • Aperçu sur demande
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
