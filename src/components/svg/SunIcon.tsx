import React from "react";

interface SvgProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export default function SunIcon({ className, ...props }: SvgProps) {
  return (
    <svg
      // w-6 h-6 et text-pink-400 sont appliqués par défaut.
      // shrink-0 empêche le composant parent (comme un flexbox) d'écraser l'icône.
      className={`w-6 h-6 text-pink-400 shrink-0 ${className || ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5c0-2 1.5-4 3.5-4S19 7.5 19 9.5s-1.5 4-3.5 4" />
      <path d="M12 9.5c0-2-1.5-4-3.5-4S5 7.5 5 9.5s1.5 4 3.5 4" />
      <path d="M9.5 12c-2 0-4 1.5-4 3.5s1.5 3.5 3.5 3.5 4-1.5 4-3.5" />
      <path d="M14.5 12c2 0 4 1.5 4 3.5s-1.5 3.5-3.5 3.5-4-1.5-4-3.5" />
    </svg>
  );
}
