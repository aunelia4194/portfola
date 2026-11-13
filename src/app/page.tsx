"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Background from "../components/home/Background";
import Stars from "../components/home/Stars";
import Hero from "../components/home/Hero";
import ThemeToggle from "../components/ui/ThemeToggle";
import Petals from "../components/home/Petals";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
