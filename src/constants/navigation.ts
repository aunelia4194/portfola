// src/constants/navigation.ts
export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" }
];
