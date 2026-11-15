import Background from "@/src/components/home/Background";
import Stars from "@/src/components/home/Stars";
import Petals from "@/src/components/home/Petals";
import Hero from "@/src/components/home/Hero";
import ThemeToggle from "@/src/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <Stars />
      <Petals />

      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <Hero />
    </main>
  );
}
