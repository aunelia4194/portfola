import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PROJECTS_DATA } from "../constants/projects";
import { Project } from "../types/project";
import { fetchAllProjects } from "../lib/projectsFetcher";

export function useProjects() {
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    let isCancelled = false;

    async function loadProjects() {
      const remoteProjects = await fetchAllProjects();
      if (!isCancelled) {
        setProjects(remoteProjects);
        setIsLoading(false);
      }
    }

    loadProjects();

    return () => {
      isCancelled = true;
    };
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return {
    filter,
    setFilter,
    filteredProjects,
    isLoading,
    shouldRender: mounted,
    isDark: mounted && resolvedTheme === "dark",
  };
}
