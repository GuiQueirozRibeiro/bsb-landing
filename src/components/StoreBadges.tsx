"use client";

import confetti from "canvas-confetti";
import { Apple } from "lucide-react";

interface StoreBadgesProps {
  className?: string;
}

export function StoreBadges({ className = "" }: StoreBadgesProps) {
  const handleBadgeClick = (store: string) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F0582C", "#1E293B", "#FFA07A"],
    });
  };

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {/* Apple App Store */}
      <a
        href="https://apps.apple.com/app/id6744043956"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleBadgeClick("apple")}
        className="group relative flex items-center gap-3 rounded-2xl bg-slate-900/90 px-5 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:shadow-orange-500/10 border border-slate-700/60"
      >
        <Apple className="h-7 w-7 transition-transform group-hover:scale-110" />
        <div className="text-left leading-tight">
          <p className="text-[11px] font-medium tracking-wide text-slate-300 uppercase">
            Disponível na
          </p>
          <p className="text-[16px] font-bold tracking-tight text-white">
            App Store
          </p>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href="https://play.google.com/store/apps/details?id=br.com.bsbengenhariacondominial.sgp"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleBadgeClick("google")}
        className="group relative flex items-center gap-3 rounded-2xl bg-slate-900/90 px-5 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:shadow-orange-500/10 border border-slate-700/60"
      >
        <svg
          className="h-7 w-7 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.609 1.814L13.793 12 3.61 22.185A2.327 2.327 0 0 1 3 20.538V3.462c0-.648.225-1.242.609-1.648z"
            fill="#00D2FF"
          />
          <path
            d="M17.186 8.607L13.793 12l3.393 3.393 3.82-2.193c.803-.46.803-1.939 0-2.4L17.186 8.607z"
            fill="#FFD200"
          />
          <path
            d="M13.793 12L3.609 1.814c.26-.277.62-.449 1.026-.449.49 0 .963.243 1.343.461l11.215 6.441L13.793 12z"
            fill="#00F076"
          />
          <path
            d="M13.793 12l3.393 3.393-11.215 6.441c-.38.218-.853.461-1.343.461-.406 0-.766-.172-1.026-.449L13.793 12z"
            fill="#FF3A44"
          />
        </svg>
        <div className="text-left leading-tight">
          <p className="text-[11px] font-medium tracking-wide text-slate-300 uppercase">
            Disponível no
          </p>
          <p className="text-[16px] font-bold tracking-tight text-white">
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
}
