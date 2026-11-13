/*"use client";
import { useTheme } from "next-themes";

export default function Stars() {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme !== "dark") return null;

  return (
    <div className="stars">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 10 + "s",
          }}
        />
      ))}
      <div className="shooting-star" style={{ top: "8%", left: "70%", animationDelay: "2s" }} />
      <div className="shooting-star shooting-star-left" style={{ top: "12%", left: "15%", animationDelay: "7s" }} />
    </div>
  );
}   */
// components/Stars.tsx
"use client";

import { useThemeMode } from "../../hooks/useThemeMode";


export default function Stars() {
  // On réutilise EXACTEMENT le même cerveau que le bouton de bascule
  const { isDark, shouldRender } = useThemeMode();

  // Si pas chargé ou si on est en mode clair, on n'affiche rien
  if (!shouldRender || !isDark) return null;

  return (
    <div className="stars fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="shooting-star" style={{ top: "8%", left: "70%", animationDelay: "2s" }} />
      <div className="shooting-star shooting-star-left" style={{ top: "12%", left: "15%", animationDelay: "7s" }} />
    </div>
  );
}
