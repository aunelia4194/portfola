"use client";

import { useProjects } from "@/src/hooks/useProjects";
import ProjectCard from "@/src/components/projects/ProjectCard";
import ProjectFilters from "@/src/components/projects/ProjectFilters";
import BackLink from "@/src/components/ui/BackLink";
import { SITE_INFO } from "@/src/constants/site";
import { PROJECT_FILTERS } from "@/src/constants/projects";

export default function ProjectsPage() {
  const { filter, setFilter, filteredProjects, shouldRender } = useProjects();

  if (!shouldRender) return null;

  return (
    <main className="min-h-screen relative">
      <div className="page-container relative z-10">
        <BackLink />

        <header className="mt-6 space-y-3">
          <h1 className="font-serif text-4xl font-black text-white md:text-5xl tracking-tight">
            {SITE_INFO.projectsHeaderTitle}
            <span className="text-[#ffb7c5] dark:text-orange-500">.</span>
          </h1>
          <p className="text-base md:text-lg text-white leading-relaxed">
            {SITE_INFO.projectsHeaderDesc}
          </p>
        </header>

        {/* Barre de filtres */}
        <ProjectFilters
          filters={PROJECT_FILTERS}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        {/* Grille des projets */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
