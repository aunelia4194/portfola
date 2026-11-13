import Link from "next/link";
import Script from "next/script";

// Ce fichier est un Server Component par défaut, parfait pour la page not-found de Next.js
export default function NotFound() {
  return (
    <main className="min-h-screen relative transition-colors duration-500 bg-gradient-to-b from-[#1765C0] via-[#258FE5] to-[#43BDF3] text-white dark:from-[#050D1B] dark:via-[#10213B] dark:to-[#263B5C] flex flex-col justify-center items-center p-6 text-center">
      
      {/* Script d'intégration Tenor optimisé par Next.js basé sur votre extrait */}
      <Script 
        src="https://tenor.com/embed.js" 
        strategy="afterInteractive" 
      />

      <div className="max-w-md w-full space-y-6 relative z-10">
        
        {/* 1. Le GIF Pingu en HAUT (Grand format avec votre code embed exact) */}
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 shadow-xl max-w-md w-full mx-auto transition-transform duration-300 hover:scale-[1.02]">
          <div 
            className="tenor-gif-embed" 
            data-postid="23566853" 
            data-share-method="host" 
            data-aspect-ratio="1.30612" 
            data-width="100%"
          >
            <a href="https://tenor.com/view/pingu-search-where-are-you-looking-where-gif-23566853">
              Pingu Search GIF
            </a>
            from <a href="https://tenor.com/search/pingu-gifs">Pingu GIFs</a>
          </div>
        </div>

        {/* 2. Le type d'erreur et le titre en BAS du GIF */}
        <div className="space-y-2">
          <h1 className="font-serif text-7xl font-extrabold tracking-tight text-white select-none drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-wide text-sky-100 dark:text-amber-200">
            Oups ! Page introuvable<span className="text-sky-300 dark:text-amber-400">.</span>
          </h2>
        </div>

        {/* 4. Bouton de retour sécurisé */}
        <div className="pt-4">
          <PinguButton />
        </div>

      </div>
    </main>
  );
}

function PinguButton() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-white text-[#1765C0] hover:bg-sky-100 hover:scale-105 active:scale-95 shadow-lg dark:bg-amber-400 dark:text-[#050D1B] dark:hover:bg-amber-300 font-serif group"
    >
      ← Retourner à l'univers 
      <span className="inline-block transition-transform group-hover:animate-bounce">🐧</span>
    </Link>
  );
}
