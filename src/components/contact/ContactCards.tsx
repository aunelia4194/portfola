import React from "react";
import { THEME_STYLES } from "@/src/constants/theme";
import { ContactCardsProps } from "@/src/types/contact";
import MailIcon from "@/src/components/svg/MailIcon";
import LinkedinIcon from "@/src/components/svg/LinkedinIcon";
import DiscordCopyButton from "@/src/components/ui/DiscordCopyButton";

export default function ContactCards({
  emailUser,
  emailDomain,
  linkedinUrl,
  discordUsername,
}: ContactCardsProps) {
  return (
    <section className="text-center space-y-5 pt-2">
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-white">
          Me contacter
        </span>
        <div className="h-px w-16 bg-white/25 dark:bg-blue-900/30" />
      </div>

      <div className="flex gap-5 justify-center items-center">
        <a
          href={`mailto:${emailUser}@${emailDomain}`}
          title="M'envoyer un e-mail"
          className={THEME_STYLES.iconButton}
        >
          <span className="sr-only">Email</span>
          <MailIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Mon profil LinkedIn"
          className={THEME_STYLES.iconButton}
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>

        <DiscordCopyButton username={discordUsername} />
      </div>
    </section>
  );
}
