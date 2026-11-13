// components/about/AboutSkills.tsx
import React from "react";

export default function AboutSkills() {
  const categories = [
    {
      title: "Ingénierie & CRSA",
      dotColor: "bg-cyan-300",
      icon: (
        <svg className="w-5 h-5 text-cyan-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      skills: ["Systèmes automatisés", "Logique & Automatisme", "Initiation CAO / 3D", "Rigueur technique"],
      hoverBorder: "hover:border-cyan-300/70"
    },
    {
      title: "Développement",
      dotColor: "bg-amber-300",
      icon: (
        <svg className="w-5 h-5 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      skills: ["React.js / Next.js", "Tailwind CSS", "JavaScript / TypeScript", "HTML5 / CSS3", "Git & GitHub"],
      hoverBorder: "hover:border-amber-300/70"
    },
    {
      title: "UI/UX & Design",
      dotColor: "bg-[#ffb7c5]",
      icon: (
        <svg className="w-5 h-5 text-[#ffb7c5] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.373-9.374a2.25 2.25 0 113.182 3.182l-9.373 9.373a4.5 4.5 0 01-2.25 1.254l-3.16.79a.75.75 0 01-.906-.906l.79-3.16a4.5 4.5 0 011.254-2.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.14 7.86l3 3" />
        </svg>
      ),
      skills: ["Figma (Maquettes)", "Design Systems", "Identité visuelle", "Direction artistique"],
      hoverBorder: "hover:border-[#ffb7c5]/70"
    },
    {
      title: "Communication",
      dotColor: "bg-emerald-300",
      icon: (
        <svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>
      ),
      skills: ["Community Management", "Stratégie éditoriale", "Création de contenu", "Réseaux & Veille"],
      hoverBorder: "hover:border-emerald-300/70"
    }
  ];

  return (
    <div className="mt-16 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight border-b pb-3 border-white/25 dark:border-blue-900 font-serif text-white">
        Mes Domaines de Compétences
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className={`glass-panel p-6 bg-white/5 dark:bg-slate-950/40 rounded-2xl border border-white/25 dark:border-blue-900/40 shadow-lg backdrop-blur-md transition-all duration-300 ${cat.hoverBorder}`}
          >
            {/* En-tête épuré sans boîte autour de l'icône */}
            <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-white/15 dark:border-blue-900/30">
              {cat.icon}
              <h3 className="font-bold text-white font-serif text-base tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Liste fluide sans bulles encadrées */}
            <ul className="space-y-2.5">
              {cat.skills.map((skill, j) => (
                <li 
                  key={j} 
                  className="flex items-center gap-2.5 text-sm text-white font-medium"
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.dotColor}`} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
