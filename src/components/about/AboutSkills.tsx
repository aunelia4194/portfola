import React from "react";
import { DOMAIN_COLORS, THEME_STYLES } from "@/src/constants/theme";
import CodeIcon from "@/src/components/svg/CodeIcon";
import DesignIcon from "@/src/components/svg/DesignIcon";
import MegaphoneIcon from "@/src/components/svg/MegaphoneIcon";
import GearIcon from "../svg/GearIcon";

export default function AboutSkills() {
  const categories = [
    {
      title: "Ingénierie & CRSA",
      theme: DOMAIN_COLORS.crsa,
      icon: <GearIcon className={`w-5 h-5 ${DOMAIN_COLORS.crsa.text} shrink-0`} />,
      skills: [
        "Systèmes automatisés",
        "Logique & Automatisme",
        "Initiation CAO / 3D",
        "Rigueur technique",
      ],
    },
    {
      title: "Développement",
      theme: DOMAIN_COLORS.web,
      icon: <CodeIcon className={`w-5 h-5 ${DOMAIN_COLORS.web.text} shrink-0`} />,
      skills: [
        "React.js / Next.js",
        "Tailwind CSS",
        "JavaScript / TypeScript",
        "HTML5 / CSS3",
        "Git & GitHub",
      ],
    },
    {
      title: "UI/UX & Design",
      theme: DOMAIN_COLORS.design,
      icon: <DesignIcon className={`w-5 h-5 ${DOMAIN_COLORS.design.text} shrink-0`} />,
      skills: [
        "Figma (Maquettes)",
        "Design Systems",
        "Identité visuelle",
        "Direction artistique",
      ],
    },
    {
      title: "Communication",
      theme: DOMAIN_COLORS.communication,
      icon: <MegaphoneIcon className={`w-5 h-5 ${DOMAIN_COLORS.communication.text} shrink-0`} />,
      skills: [
        "Community Management",
        "Stratégie éditoriale",
        "Création de contenu",
        "Réseaux & Veille",
      ],
    },
  ];

  return (
    <div className="mt-16 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight border-b pb-3 border-white/25 dark:border-blue-900 font-serif text-white">
        Mes Domaines de Compétences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`${THEME_STYLES.glassCard} p-6 rounded-2xl transition-all duration-300 ${cat.theme.hoverBorder}`}
          >
            {/* En-tête du domaine */}
            <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-white/15 dark:border-blue-900/30">
              {cat.icon}
              <h3 className="font-bold text-white font-serif text-base tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Liste des compétences */}
            <ul className="space-y-2.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 text-sm text-white font-medium"
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.theme.dot}`} />
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
