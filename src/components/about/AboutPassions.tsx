import React from "react";

export default function AboutPassions() {
  const countries = [
   {
      name: "Chine",
      image: "/images/chine.jpg",
      wikiUrl: "https://fr.wikipedia.org/wiki/Chine",
    },
    {
      name: "Corée du Sud",
      image: "/images/coree.jpg",
      wikiUrl: "https://fr.wikipedia.org/wiki/Cor%C3%A9e_du_Sud",
    },
    {
      name: "Japon",
      image: "/images/japon.jpg",
      wikiUrl: "https://fr.wikipedia.org/wiki/Japon",
    },
  ];

  return (
    <div className="mt-16 space-y-6">
      <div className="border-b pb-3 border-white/20 dark:border-blue-900">
        <h2 className="text-2xl font-bold tracking-tight font-serif text-white">
         Ma Passion pour l&apos;Asie
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {countries.map((country, i) => (
          <a
            key={i}
            href={country.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-56 rounded-2xl overflow-hidden border border-white/20 dark:border-blue-900/40 shadow-lg block transition-all duration-300
              hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
              dark:hover:border-amber-400/60 dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          >
            {/* Illustration plein cadre (100 % fixe, sans zoom) */}
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover"
            />

            {/* Léger dégradé en bas pour que le nom ressorte toujours nettement */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            {/* Nom du pays + petite flèche discrète en bas de la carte */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide drop-shadow-md">
                {country.name}
              </h3>

              <span className="p-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white opacity-80 group-hover:opacity-100 group-hover:bg-white/25 transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
