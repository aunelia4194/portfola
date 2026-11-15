import React from "react";
import { DOMAIN_COLORS, THEME_STYLES } from "@/src/constants/theme";

interface Filter {
  id: string;
  label: string;
}

interface ProjectFiltersProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export default function ProjectFilters({
  filters,
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <nav
      aria-label="Filtrer les projets"
      className={`${THEME_STYLES.glassCard} inline-flex flex-wrap gap-2 rounded-2xl p-1.5 mt-8`}
    >
      {filters.map((tab) => {
        const isActive = activeFilter === tab.id;
        const domain =
          DOMAIN_COLORS[tab.id as keyof typeof DOMAIN_COLORS];

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onFilterChange(tab.id)}
            aria-pressed={isActive}
            className={`cursor-pointer inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#7c83ff] via-[#b875d1] to-[#e58a79] text-white shadow-md dark:from-amber-400 dark:to-orange-500 dark:text-slate-950"
                : "text-white hover:bg-white/15 dark:text-white dark:hover:bg-white/10"
            }`}
          >
            {/* Pastille de couleur du domaine */}
            {domain && (
              <span
                className={`h-2 w-2 rounded-full shrink-0 ${
                  isActive ? "bg-white dark:bg-slate-950" : domain.dot
                }`}
              />
            )}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
