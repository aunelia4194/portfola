// src/components/CrsaLabel.tsx
import React from "react";

export default function CrsaLabel() {
  return (
    <span className="font-semibold text-slate-100 dark:text-slate-300">
      {/* BTS : Rose Sakura Pur en Jour / Ambre lumineux en Nuit */}
      <span className="text-[#ffb7c5] dark:text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(255,183,197,0.4)] dark:drop-shadow-none">B</span>revet de{" "}
      <span className="text-[#ffb7c5] dark:text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(255,183,197,0.4)] dark:drop-shadow-none">T</span>echnicien{" "}
      <span className="text-[#ffb7c5] dark:text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(255,183,197,0.4)] dark:drop-shadow-none">S</span>upérieur en{" "}
      
      {/* CRSA : Rose Sakura Légèrement plus Soutenu en Jour / Orange électrique en Nuit */}
      <span className="text-[#ffacc2] dark:text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(255,172,194,0.4)] dark:drop-shadow-none">C</span>onception et{" "}
      <span className="text-[#ffacc2] dark:text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(255,172,194,0.4)] dark:drop-shadow-none">R</span>éalisation de{" "}
      <span className="text-[#ffacc2] dark:text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(255,172,194,0.4)] dark:drop-shadow-none">S</span>ystèmes{" "}
      <span className="text-[#ffacc2] dark:text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(255,172,194,0.4)] dark:drop-shadow-none">A</span>utomatiques
    </span>
  );
}
