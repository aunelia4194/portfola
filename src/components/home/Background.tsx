"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite les erreurs d'hydratation Next.js au premier rendu
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Décor jour */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('/images/ville-jour.png')",
        }}
      />

      {/* Décor nuit */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/images/ville-nuit.png')",
        }}
      />
    </div>
  );
}
