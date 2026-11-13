import React from "react";

interface Filter {
  id: string;
  label: string;
}

interface ProjectFiltersProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export default function ProjectFilters({ filters, activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <nav aria-label="Filtrer les projets" className="flex max-w-max flex-wrap gap-2 rounded-2xl border border-white/20 bg-white/10 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 mt-8">
      {filters.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onFilterChange(tab.id)}
          aria-pressed={activeFilter === tab.id}
          className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
            activeFilter === tab.id
              ? "bg-gradient-to-r from-[#43BDF3] to-[#1765C0] text-white shadow-md dark:from-amber-500 dark:to-orange-500 dark:text-slate-950"
              : "text-white/80 hover:bg-white/10 hover:text-white dark:text-slate-400 dark:hover:text-amber-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
