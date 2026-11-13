"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import StarIcon from "@/src/components/svg/StarIcon";
import SunIcon from "@/src/components/svg/SunIcon";
import { PROFILE_INFO } from "../../constants/profile";
import { SITE_INFO } from "../../constants/site";
// Importation de ton cerveau de données uniques


export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
<div className="relative z-10 flex min-h-screen flex-col items-center justify-start text-center max-w-5xl mx-auto px-8 hero-content-wrapper">
      
      {/* Éclipse avec ton nom centralisé */}
      <div className="eclipse">
        <h1 className="neontete">{PROFILE_INFO.name}</h1>
      </div>

      {/* Texte de présentation centralisé - mt-12 donne de l'air sous le soleil */}
      <p className="mt-12 text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] max-w-3xl leading-relaxed font-semibold">
        {SITE_INFO.homeDescription}
      </p>

      {/* Boutons d'accès vers tes pages intérieures - mt-10 espace les boutons du texte */}
      <div className="flex gap-4 mt-10">
        <Link href="/about" className="neon-button">A propos</Link>
        <Link href="/projects" className="neon-button">Mes projets</Link>
      </div>

</div>

  );
}
