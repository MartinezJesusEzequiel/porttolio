"use client";

import { useState } from "react";
import type { StackItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface StackIconProps {
  item: StackItem;
}

export default function StackIcon({ item }: StackIconProps) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] transition-all duration-300 cursor-default"
      style={{
        borderColor: isHovered ? `${item.color}50` : undefined,
        backgroundColor: isHovered ? `${item.color}15` : undefined,
        boxShadow: isHovered ? `0 0 20px ${item.color}20` : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-8 h-8 flex items-center justify-center relative">
        <img
          src={`/icons/${item.icon}.svg`}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-contain filter grayscale transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-60'}`}
        />
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
          style={{
            backgroundColor: item.color || '#ffffff',
            WebkitMaskImage: `url(/icons/${item.icon}.svg)`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(/icons/${item.icon}.svg)`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
      
      <div className="text-center z-10">
        <p 
          className="text-[11px] font-medium transition-colors duration-300"
          style={{ color: isHovered ? item.color : '#a1a1aa' }}
        >
          {item.name}
        </p>
        {item.status === "learning" && (
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1">
            {lang === "es" ? "Aprendiendo" : "Learning"}
          </p>
        )}
      </div>
    </div>
  );
}
