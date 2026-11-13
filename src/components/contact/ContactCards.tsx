import React from "react";
import { PROFILE_INFO } from "@/src/constants/profile";

interface ContactCardsProps {
  emailUser: string;
  emailDomain: string;
  linkedinUrl: string;
}

export default function ContactCards({
  emailUser,
  emailDomain,
  linkedinUrl,
}: ContactCardsProps) {
  const { discordUrl } = PROFILE_INFO;

  const buttonClasses =
    "glass-panel group flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)] dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-400 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)] cursor-pointer";

  return (
    <section className="text-center space-y-5 pt-2">
      {/* Séparateur avec le libellé "Me contacter" (identique à "Me rejoindre" sur À propos) */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-white">
          Me contacter
        </span>
        <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
      </div>

      {/* Les 3 petits boutons : Email, LinkedIn, Discord */}
      <div className="flex gap-5 justify-center items-center">
        {/* 1. Email */}
        <button
          type="button"
          onClick={() => {
            window.location.href = `mailto:${emailUser}@${emailDomain}`;
          }}
          title="M'envoyer un e-mail"
          className={buttonClasses}
        >
          <span className="sr-only">Email</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </button>

        {/* 2. LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Mon profil LinkedIn"
          className={buttonClasses}
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>

        {/* 3. Discord */}
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Mon profil Discord"
          className={buttonClasses}
        >
          <span className="sr-only">Discord</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
