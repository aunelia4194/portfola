import React from "react";
import SunIcon from "../svg/SunIcon";
import StarIcon from "../svg/StarIcon";

export default function LayoutSeparator() {
  return (
    /* On garde le justify-center d'origine pour que ce soit un vrai séparateur centré et symétrique */
    <div className="flex items-center justify-center gap-4 my-8 select-none cursor-default w-full">
      
      {/* Ligne gauche : Rose en clair / Orange en sombre */}
      <div className="h-px w-20 transition-colors duration-500 bg-rose-300/40 dark:bg-[#ea580c]/30" />
      
      {/* Zone centrale de l'icône */}
      <div className="group">
        
        {/* --- LE JOUR : Uniquement le Soleil Rose --- */}
        <div className="block dark:hidden text-rose-300">
          <SunIcon className="transition-all duration-500 group-hover:scale-115 group-hover:rotate-45" />
        </div>

        {/* --- LA NUIT : Uniquement l'Étoile Violette d'origine --- */}
        <div className="hidden dark:block text-purple-200">
          <StarIcon className="transition-all duration-500 group-hover:scale-115 group-hover:rotate-12" />
        </div>

      </div>
      
      {/* Ligne droite : Rose en clair / Orange en sombre */}
      <div className="h-px w-20 transition-colors duration-500 bg-rose-300/40 dark:bg-[#ea580c]/30" />
      
    </div>
  );
}
