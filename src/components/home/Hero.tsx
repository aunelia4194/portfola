"use client";

import Link from "next/link";
import CrsaLabel from "@/src/components/ui/CrsaLabel";
import { PROFILE_INFO } from "../../constants/profile";
import { SITE_INFO } from "../../constants/site";

export default function Hero() {
  const descriptionParts = SITE_INFO.homeDescription.split("{CRSA}");

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start text-center max-w-5xl mx-auto px-8 hero-content-wrapper">
      {/* Éclipse et titre principal */}
      <div className="eclipse">
        <h1 className="neontete">{PROFILE_INFO.name}</h1>
      </div>

      {/* Phrase d'accroche */}
      <p className="mt-10 text-lg md:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] max-w-3xl leading-relaxed font-semibold">
        {descriptionParts[0]}
        <CrsaLabel />
        {descriptionParts[1]}
      </p>

      {/* Navigation principale */}
      <div className="flex gap-4 mt-8">
        <Link href="/about" className="neon-button">
          À propos
        </Link>
        <Link href="/projects" className="neon-button">
          Mes projets
        </Link>
      </div>
    </div>
  );
}
