// components/Background.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Sécurité SSR : Force le composant à attendre le chargement du navigateur
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tant que Next.js n'a pas fini l'hydratation, on ne renvoie rien pour éviter le flash
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    // fixed inset-0 et z-0 forcent le décor à rester en arrière-plan total
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* VILLE JOUR */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('/images/ville-jour.png')",
        }}
      />

      {/* VILLE NUIT */}
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
