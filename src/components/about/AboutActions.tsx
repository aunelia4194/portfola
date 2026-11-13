import React from "react";
import { PROFILE_INFO } from "@/src/constants/profile";
import SunIcon from "../svg/SunIcon";
import StarIcon from "../svg/StarIcon";
import { SITE_INFO } from "@/src/constants/site";
import GithubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/LinkedinIcon";
import DiscordIcon from "../svg/DiscordIcon";

export default function AboutActions() {
  const { cvUrl, githubUrl, linkedinUrl , discordUrl } = PROFILE_INFO;

  return (
    <div className="mt-20 space-y-12 max-w-4xl mx-auto w-full">
      {/* 1. LA BOÎTE VITRÉE : Dédiée exclusivement au parcours et au CV */}
      <section className="glass-panel relative overflow-hidden p-8 md:p-12 bg-white/5 dark:bg-slate-950/40 rounded-3xl border border-white/15 dark:border-blue-900/30 shadow-lg text-center space-y-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rose-300/10 dark:bg-amber-500/5 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-sky-300/10 dark:bg-blue-500/5 blur-2xl" />

        {/* Alternance dynamique : Icône Soleil (Jour) / Étoile dorée (Nuit) */}
        <div className="flex justify-center animate-pulse">
          <div className="dark:hidden">
            <SunIcon className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          </div>
          <div className="hidden dark:block">
            <StarIcon className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        {/* Titres accrocheurs (100 % blancs) */}
        <div className="space-y-2">
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white">
            {SITE_INFO.cvSectionTitle}
          </h2>
          <p className="text-sm md:text-base text-white max-w-md mx-auto">
            {SITE_INFO.cvCallToAction}
          </p>
        </div>

        {/* Hiérarchie des boutons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
          <a 
            href={cvUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button flex items-center justify-center gap-2 text-sm min-w-[170px]"
          >
            <span>Voir mon CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          
          <a
            href={cvUrl}
            download
            className="glass-panel px-7 py-3 font-semibold rounded-full border border-white/20 text-white text-sm cursor-pointer min-w-[170px] flex items-center justify-center gap-2 bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)] active:scale-95
              dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-300 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)]"
          >
            <span>Télécharger</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* 2. Section réseaux sociaux */}
      <section className="text-center space-y-5 pt-4">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-white">
            Me rejoindre
          </span>
          <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
        </div>

        <div className="flex gap-5 justify-center items-center">
          <a 
            href={githubUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-panel group/social flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]
              dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-400 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)]"
            title="Mon profil GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="w-5 h-5 transition-transform group-hover/social:scale-110" />
          </a>

          <a 
            href={linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-panel group/social flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]
              dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-400 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)]"
            title="Mon profil LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="w-5 h-5 transition-transform group-hover/social:scale-110" />
          </a>

            <a 
            href={discordUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-panel group/social flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]
              dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-400 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)]"
            title="Mon profil Discord"
          >
            <span className="sr-only">Discord</span>
            <DiscordIcon className="w-5 h-5 transition-transform group-hover/social:scale-110" />
          </a>
        </div>
      </section>
    </div>
  );
}
