"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/src/constants/navigation";
import ThemeToggle from "../ui/ThemeToggle";
import { PROFILE_INFO } from "@/src/constants/profile";

export default function Navbar() {
  const pathname = usePathname();
  const { name } = PROFILE_INFO;

  if (pathname === "/" || pathname === "/immersive") return null;

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm border-b border-white/15 dark:border-white/5 transition-all duration-500">
      <div className="flex items-center justify-between p-5 max-w-5xl mx-auto w-full">
        
        {/* Logo Aunélia */}
        <Link 
          href="/" 
          className="text-3xl font-black font-serif tracking-wide transition-opacity hover:opacity-80 drop-shadow-sm
            bg-gradient-to-r bg-clip-text text-transparent
            from-white via-sky-50 to-amber-100
            dark:from-amber-400 dark:via-orange-400 dark:to-orange-500"
        >
          {name}
        </Link>
        
        {/* Liens de navigation & Bouton Thème */}
        <div className="flex gap-6 sm:gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1
                  ${isActive 
                    ? "text-white dark:text-amber-400 font-bold" 
                    : "text-white/85 hover:text-white dark:text-slate-400 dark:hover:text-amber-300"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white dark:bg-gradient-to-r dark:from-amber-400 dark:to-orange-500" />
                )}
              </Link>
            );
          })}

          <div className="h-4 w-px bg-white/25 dark:bg-blue-900/40" />

          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}
