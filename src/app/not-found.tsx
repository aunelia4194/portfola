import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex flex-col justify-center items-center p-6 text-center text-white">
      <div className="max-w-md w-full space-y-6 relative z-10">
        {/* GIF Pingu via iframe directe */}
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-xl mx-auto transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "76.56%" }}>
            <iframe
              src="https://tenor.com"
              title="Pingu qui cherche"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              allowFullScreen
            />
          </div>
        </div>

        {/* Code erreur et message */}
        <div className="space-y-2">
          <h1 className="font-serif text-7xl font-extrabold tracking-tight text-white select-none drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-wide text-white">
            Oups ! Page introuvable
            <span className="text-[#ffb7c5] dark:text-orange-500">.</span>
          </h2>
        </div>

        {/* Bouton de retour */}
        <div className="pt-4">
          <Link
            href="/"
            className="neon-button inline-flex items-center gap-2 text-sm group"
          >
            <span>← Retourner à l&apos;accueil</span>
            <span className="inline-block transition-transform group-hover:animate-bounce">
              🐧
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
