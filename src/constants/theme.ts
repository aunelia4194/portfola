// src/constants/theme.ts

export const THEME_STYLES = {
  // 1. Couleurs d'accentuation principales (Sakura le jour, Doré/Orange la nuit)
  accentText: "text-[#ffb7c5] dark:text-amber-400",
  accentDot: "text-[#ffb7c5] dark:text-orange-500",
  accentLink:
    "text-[#ffb7c5] hover:text-white dark:text-amber-400 dark:hover:text-amber-300 underline transition-colors",

  // 2. Matière vitrée unifiée pour toutes les cartes (À propos, Projets, Contact)
  glassCard:
    "glass-panel bg-white/5 dark:bg-slate-950/40 border border-white/20 dark:border-blue-900/40 shadow-xl backdrop-blur-md",

  // 3. Petits boutons carrés vitrés (Réseaux sociaux, Contact rapide)
  iconButton:
    "glass-panel group flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.35)] dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-white dark:hover:border-orange-400/50 dark:hover:text-orange-400 dark:hover:shadow-[0_0_16px_rgba(249,115,22,0.3)] cursor-pointer",

  // 4. Champs de saisie du formulaire Contact
  formInput:
    "w-full px-4 py-3 rounded-xl bg-slate-900/20 dark:bg-black/30 border border-white/20 dark:border-blue-900/40 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white/70 dark:focus:border-amber-400/70 transition-colors",
};

// 5. Code couleur unique par domaine (partagé entre À propos et Projets)
export const DOMAIN_COLORS = {
  crsa: {
    text: "text-cyan-300",
    dot: "bg-cyan-300",
    badge: "text-cyan-300 border-cyan-300/30 bg-cyan-300/10",
    hoverBorder: "hover:border-cyan-300/70",
    glow: "group-hover:bg-cyan-300/15",
  },
  web: {
    text: "text-amber-300",
    dot: "bg-amber-300",
    badge: "text-amber-300 border-amber-300/30 bg-amber-300/10",
    hoverBorder: "hover:border-amber-300/70",
    glow: "group-hover:bg-amber-300/15",
  },
  design: {
    text: "text-[#ffb7c5]",
    dot: "bg-[#ffb7c5]",
    badge: "text-[#ffb7c5] border-[#ffb7c5]/30 bg-[#ffb7c5]/10",
    hoverBorder: "hover:border-[#ffb7c5]/70",
    glow: "group-hover:bg-[#ffb7c5]/15",
  },
  communication: {
    text: "text-emerald-300",
    dot: "bg-emerald-300",
    badge: "text-emerald-300 border-emerald-300/30 bg-emerald-300/10",
    hoverBorder: "hover:border-emerald-300/70",
    glow: "group-hover:bg-emerald-300/15",
  },
};
