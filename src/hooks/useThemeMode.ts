// hooks/useThemeMode.ts
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Sécurité d'hydratation Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return {
    isDark,
    toggleTheme,
    shouldRender: mounted,
    ariaLabel: isDark ? "Activer le mode jour" : "Activer le mode nuit",
    titleText: isDark ? "Mode jour" : "Mode nuit",
  };
}
