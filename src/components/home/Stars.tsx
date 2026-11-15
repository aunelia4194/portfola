"use client";

import { useThemeMode } from "../../hooks/useThemeMode";

export default function Stars() {
  const { isDark, shouldRender } = useThemeMode();

  // Affiché uniquement en mode sombre une fois le client monté
  if (!shouldRender || !isDark) return null;

  return (
    <div className="stars fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="shooting-star"
        style={{ top: "8%", left: "70%", animationDelay: "2s" }}
      />
      <div
        className="shooting-star shooting-star-left"
        style={{ top: "12%", left: "15%", animationDelay: "7s" }}
      />
    </div>
  );
}

