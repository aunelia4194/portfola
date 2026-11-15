import React from "react";
import { PROFILE_INFO } from "@/src/constants/profile";
import { SITE_INFO } from "@/src/constants/site";
import { THEME_STYLES } from "@/src/constants/theme";
import SunIcon from "@/src/components/svg/SunIcon";
import StarIcon from "@/src/components/svg/StarIcon";
import GithubIcon from "@/src/components/svg/GithubIcon";
import LinkedinIcon from "@/src/components/svg/LinkedinIcon";
import ExternalLinkIcon from "@/src/components/svg/ExternalLinkIcon";
import DownloadIcon from "@/src/components/svg/DownloadIcon";
import DiscordCopyButton from "@/src/components/ui/DiscordCopyButton";

export default function AboutActions() {
  const { cvUrl, githubUrl, linkedinUrl, discordUsername } = PROFILE_INFO;

  return (
    <div className="mt-20 space-y-12 max-w-4xl mx-auto w-full">
      {/* Encadré CV */}
      <section
        className={`${THEME_STYLES.glassCard} relative overflow-hidden p-8 md:p-12 rounded-3xl text-center space-y-8`}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rose-300/10 dark:bg-amber-500/5 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-sky-300/10 dark:bg-blue-500/5 blur-2xl" />

        {/* Icône jour / nuit */}
        <div className="flex justify-center animate-pulse">
          <div className="dark:hidden">
            <SunIcon className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          </div>
          <div className="hidden dark:block">
            <StarIcon className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        {/* Titre et texte */}
        <div className="space-y-2">
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white">
            {SITE_INFO.cvSectionTitle}
          </h2>
          <p className="text-sm md:text-base text-white max-w-md mx-auto">
            {SITE_INFO.cvCallToAction}
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button flex items-center justify-center gap-2 text-sm min-w-[170px]"
          >
            <span>Voir mon CV</span>
            <ExternalLinkIcon className="w-4 h-4 shrink-0" />
          </a>

          <a
            href={cvUrl}
            download
            className={`${THEME_STYLES.glassCard} px-7 py-3 font-semibold rounded-full text-white text-sm cursor-pointer min-w-[170px] flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)] active:scale-95 dark:hover:border-orange-400/50 dark:hover:text-orange-300 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)]`}
          >
            <span>Télécharger</span>
            <DownloadIcon className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </section>

      {/* Réseaux sociaux */}
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
            className={THEME_STYLES.iconButton}
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={THEME_STYLES.iconButton}
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>

          <DiscordCopyButton username={discordUsername} />
        </div>
      </section>
    </div>
  );
}
