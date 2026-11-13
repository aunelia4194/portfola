import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import "../styles/globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Aunélia — Portfolio | Recherche Alternance BTS CRSA",
    template: "%s | Aunélia",
  },
  description:
    "Portfolio d'Aunélia, future étudiante en BTS CRSA (Conception et Réalisation de Systèmes Automatiques) à la recherche d'une alternance ou d'un stage.",
  openGraph: {
    title: "Aunélia — Portfolio BTS CRSA & Développement",
    description: "Découvrez mon parcours, mes compétences en automatisme et mes projets web et design.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
