"use client";

import React, { useState } from "react";
import { THEME_STYLES } from "@/src/constants/theme";
import DiscordIcon from "@/src/components/svg/DiscordIcon";

interface DiscordCopyButtonProps {
  username?: string;
}

export default function DiscordCopyButton({ username }: DiscordCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!username) return;
    navigator.clipboard.writeText(username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        title={username ? `Copier le pseudo Discord (${username})` : "Discord"}
        className={THEME_STYLES.iconButton}
      >
        <span className="sr-only">Discord</span>
        <DiscordIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
      </button>

      {copied && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900/90 border border-white/20 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">
          Pseudo copié !
        </span>
      )}
    </div>
  );
}
