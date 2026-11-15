"use client";

import { usePathname } from "next/navigation";
import { PROFILE_INFO } from "@/src/constants/profile";
import { SITE_INFO } from "@/src/constants/site";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isHome = pathname === "/";

  return (
    <footer
      className={`w-full py-8 z-20 select-none bg-transparent text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] ${
        isHome ? "absolute bottom-0 left-0" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-widest uppercase font-semibold">
        {/* Copyright */}
        <div className="text-center sm:text-left text-white">
          © {currentYear}{" "}
          <span className="text-[#ffb7c5] dark:text-amber-400 font-bold">
            {PROFILE_INFO.name}
          </span>
          . Tous droits réservés.
        </div>

        {/* Citation */}
        <div className="text-center sm:text-right font-serif italic lowercase tracking-normal text-xs text-white/90">
          {SITE_INFO.footerQuote}
        </div>
      </div>
    </footer>
  );
}
