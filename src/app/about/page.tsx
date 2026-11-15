import AboutHero from "@/src/components/about/AboutHero";
import AboutSkills from "@/src/components/about/AboutSkills";
import AboutPassions from "@/src/components/about/AboutPassions";
import AboutActions from "@/src/components/about/AboutActions";
import BackLink from "@/src/components/ui/BackLink";
import { ABOUT_INFO } from "@/src/constants/about";
import { PROFILE_INFO } from "@/src/constants/profile";

export default function About() {
  return (
    <main className="min-h-screen relative transition-colors duration-500 bg-gradient-to-b from-[#1765C0] via-[#258FE5] to-[#43BDF3] text-white dark:from-[#050D1B] dark:via-[#10213B] dark:to-[#263B5C]">
      <div className="page-container relative z-10 p-6 md:p-8 max-w-5xl mx-auto space-y-12">
        {/* Bouton retour */}
        <BackLink />

        {/* Titre et citation */}
        <header className="text-left flex flex-col items-start space-y-3">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl select-none">
            <span>À propos</span>
            <span className="text-[#ffb7c5] dark:text-amber-500">.</span>
          </h1>

          <p className="text-lg md:text-xl font-serif italic text-white tracking-wide pt-1">
            {ABOUT_INFO.quote}
          </p>
        </header>

        {/* Présentation et diplôme BTS CRSA */}
        <AboutHero
          avatarUrl={PROFILE_INFO.avatarUrl}
          name={PROFILE_INFO.name}
          description={ABOUT_INFO.description}
        />

        {/* Domaines de compétences */}
        <AboutSkills />

        {/* Passion pour l'Asie */}
        <AboutPassions />

        {/* CV et réseaux sociaux */}
        <AboutActions />
      </div>
    </main>
  );
}
