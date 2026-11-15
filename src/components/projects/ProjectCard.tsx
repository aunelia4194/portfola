import React from "react";
import { Project } from "@/src/types/project";
import { DOMAIN_COLORS, THEME_STYLES } from "@/src/constants/theme";
import ExternalLinkIcon from "@/src/components/svg/ExternalLinkIcon";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLink =
    project.link && project.link !== "#" && project.link.trim() !== "";
  const style =
    DOMAIN_COLORS[project.category as keyof typeof DOMAIN_COLORS] ||
    DOMAIN_COLORS.web;

  return (
    <article
      className={`${THEME_STYLES.glassCard} group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 md:p-7 ${style.hoverBorder}`}
    >
      {/* Halo au survol */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-transparent blur-2xl transition-all duration-500 ${style.glow}`}
      />

      <div className="relative space-y-3.5">
        {/* Catégorie */}
        <span
          className={`inline-block rounded-lg border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${style.badge}`}
        >
          {project.categoryLabel}
        </span>

        {/* Titre */}
        <h2 className="font-serif text-xl font-bold text-white md:text-2xl leading-snug">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white">
          {project.description}
        </p>
      </div>

      {/* Pied de carte : tags et lien */}
      <div className="relative mt-6 space-y-4 border-t border-white/15 pt-4 dark:border-blue-900/30">
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

        <div className="flex justify-end pt-1">
          {hasValidLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#ffb7c5] dark:text-amber-400 dark:hover:text-orange-400 transition-colors"
            >
              <span>Voir le projet</span>
              <ExternalLinkIcon className="h-3.5 w-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
