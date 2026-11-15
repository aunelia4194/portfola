import { BackLinkProps } from "@/src/types/ui";
import Link from "next/link";


export default function BackLink({
  href = "/",
  label = "Retour à l'accueil",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className="glass-panel group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide
        bg-white/5 border border-white/15 text-white/90
        hover:bg-white/15 hover:border-white/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
        dark:bg-slate-950/40 dark:border-blue-900/40 dark:text-slate-300
        dark:hover:border-orange-400/50 dark:hover:text-orange-300 dark:hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]
        transition-all duration-300"
    >
      <svg
        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span>{label}</span>
    </Link>
  );
}
