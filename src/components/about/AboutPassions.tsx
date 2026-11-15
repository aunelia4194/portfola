import ExternalLinkIcon from "@/src/components/svg/ExternalLinkIcon";
import { ABOUT_INFO } from "@/src/constants/about";

export default function AboutPassions() {
  const { passionsTitle, asianCountries } = ABOUT_INFO;

  return (
    <div className="mt-16 space-y-6">
      <div className="border-b pb-3 border-white/20 dark:border-blue-900">
        <h2 className="text-2xl font-bold tracking-tight font-serif text-white">
          {passionsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {asianCountries.map((country) => (
          <a
            key={country.name}
            href={country.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-56 rounded-2xl overflow-hidden border border-white/20 dark:border-blue-900/40 shadow-lg block transition-all duration-300
              hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
              dark:hover:border-amber-400/60 dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          >
            {/* Image de fond */}
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover"
            />

            {/* Dégradé de lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            {/* Nom du pays et lien externe */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide drop-shadow-md">
                {country.name}
              </h3>

              <span className="p-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white opacity-80 group-hover:opacity-100 group-hover:bg-white/25 transition-all">
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
