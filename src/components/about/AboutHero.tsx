"use client";

import React from "react";
import CrsaLabel from "@/src/components/ui/CrsaLabel";
import { ABOUT_INFO } from "@/src/constants/about";

interface AboutHeroProps {
  avatarUrl: string;
  name: string;
  description: string;
}

export default function AboutHero({ avatarUrl, name, description }: AboutHeroProps) {
  const { diplomaDetails } = ABOUT_INFO;
  
  // Découpe le texte au niveau du marqueur {CRSA}
  const parts = description.split("{CRSA}");

  return (
    <div className="mt-4 space-y-8 w-full">
      
      {/* Structure du haut : Photo + Paragraphe */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start w-full">
        
        {/* L'ÉCRIN DE LA PHOTO (Totalement fixe, sans group ni zoom) */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1.5 rounded-full blur-md opacity-75 bg-white/80 dark:bg-gradient-to-r dark:from-orange-500 dark:via-amber-400 dark:to-orange-600" />
          <div className="absolute -inset-4 rounded-full blur-2xl opacity-45 bg-white/30 dark:bg-gradient-to-r dark:from-orange-600 dark:via-amber-500 dark:to-amber-700" />
          
          <img 
            src={avatarUrl} 
            alt={name} 
            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white dark:border-amber-500/80 shadow-2xl" 
          />
        </div>
        
        {/* LE TEXTE DE PRÉSENTATION (100 % blanc) */}
        <div className="text-center lg:text-left flex-1">
          <p className="text-white leading-relaxed text-base md:text-lg font-medium max-w-4xl tracking-wide drop-shadow-sm text-justify lg:text-left">
            {parts[0]}
            {" "}
            <CrsaLabel />
            {" "}
            {parts[1]}
          </p>
        </div>

      </div>

      {/* Le Bloc Focus explicatif sous la photo et la présentation */}
      <div className="glass-panel w-full text-left p-6 bg-white/5 dark:bg-slate-950/40 border border-white/10 dark:border-blue-900/30 rounded-2xl shadow-lg space-y-3">
                <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-cyan-300 dark:text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white dark:text-amber-400">
            {diplomaDetails.title}
          </h4>
        </div>

        
        <p className="text-sm md:text-base text-white leading-relaxed">
          {diplomaDetails.definition}
        </p>
        
        <p className="text-sm md:text-base text-white font-medium italic">
          {diplomaDetails.purpose}
        </p>

        <div className="pt-2">
          <a 
            href={diplomaDetails.onisepUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-sky-200 dark:text-amber-400 dark:hover:text-amber-300 underline transition-colors"
          >
            {diplomaDetails.onisepLabel}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}
