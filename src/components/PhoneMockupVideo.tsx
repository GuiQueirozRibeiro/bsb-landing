"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ShieldCheck } from "lucide-react";

interface PhoneMockupVideoProps {
  videoSrcVertical?: string;
  videoSrcHorizontal?: string;
}

export function PhoneMockupVideo({
  videoSrcVertical = "/video/sgp-app-demo.mp4",
  videoSrcHorizontal = "/video/sgp-app-demo-16x9.mp4",
}: PhoneMockupVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  // Auto-switch tabs to show real app features inside the phone preview
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const features = [
    {
      title: "Plano de Manutenção NBR 5674",
      tag: "Norma Técnica",
      desc: "Rotinas preventivas periódicas com alertas e histórico no celular.",
      badgeColor: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
    {
      title: "Laudo Fotográfico com ART",
      tag: "Engenharia Legal",
      desc: "Inspeção antes e depois com emissão de ART assinada por engenheiro.",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      title: "Cotações com Governança",
      tag: "Auditoria Síndico",
      desc: "Mínimo de 3 orçamentos comparados lado a lado antes de aprovar.",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      title: "Transparência Financeira",
      tag: "Prestação de Contas",
      desc: "Balancetes, contas a pagar e comprovantes digitais na palma da mão.",
      badgeColor: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
  ];

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Decorative Glow */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-600/20 blur-3xl opacity-70" />

      {/* iPhone Frame */}
      <div className="relative w-[300px] sm:w-[330px] md:w-[350px] aspect-[9/19.5] rounded-[48px] bg-slate-950 p-3.5 shadow-2xl ring-1 ring-slate-800/80 drop-shadow-[0_25px_35px_rgba(240,88,44,0.18)]">
        {/* Outer Bezel Border highlight */}
        <div className="absolute inset-0 rounded-[48px] border-2 border-slate-700/40 pointer-events-none" />

        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 h-5 w-24 rounded-full bg-black flex items-center justify-between px-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-900 border border-slate-800" />
          <div className="h-2 w-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Inner Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-slate-900 flex flex-col">
          {/* Status Bar */}
          <div className="flex h-11 w-full items-center justify-between px-6 pt-2 text-[11px] font-semibold text-white/90 z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="h-2.5 w-5 rounded-sm border border-white/60 p-0.5">
                <div className="h-full w-full rounded-2xs bg-white" />
              </div>
            </div>
          </div>

          {/* App Simulation or Video Element */}
          <div className="relative flex-1 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
            {/* Video layer (if video file is loaded) */}
            <video
              ref={videoRef}
              src={videoSrcVertical}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 h-full w-full object-cover z-10 opacity-90 transition-opacity duration-500"
              onError={(e) => {
                // If mp4 is not yet present, gracefully fall back to the live animated UI preview
                (e.target as HTMLElement).style.display = "none";
              }}
            />

            {/* Native App UI Preview Fallback / Showcase */}
            <div className="relative z-0 flex h-full flex-col justify-between p-4 text-white">
              {/* App Header */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#F0582C] to-[#D44820] flex items-center justify-center font-bold text-white shadow-md text-xs">
                      BSB
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">SGP Condomínios</p>
                      <p className="text-[10px] text-slate-400">BSB Engenharia</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-medium text-orange-400 border border-orange-500/30">
                    Online
                  </span>
                </div>

                {/* Condo Switcher Card */}
                <div className="rounded-2xl bg-slate-800/80 p-3 border border-slate-700/50 backdrop-blur-sm">
                  <p className="text-[10px] text-slate-400 font-medium">Condomínio Selecionado</p>
                  <p className="text-xs font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                    Residencial Jardim das Oliveiras
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-300 border-t border-slate-700/50 pt-1.5">
                    <span>Manutenção NBR 5674</span>
                    <span className="text-emerald-400 font-semibold">98% Conforme</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Feature Carousel Card */}
              <div className="space-y-2 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-3.5 border border-slate-700/60 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold border ${features[activeTab].badgeColor}`}>
                    {features[activeTab].tag}
                  </span>
                  <div className="flex gap-1">
                    {features.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeTab ? "w-4 bg-orange-500" : "w-1.5 bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="text-xs font-bold text-white transition-all">
                  {features[activeTab].title}
                </h4>
                <p className="text-[10px] text-slate-300 leading-relaxed">
                  {features[activeTab].desc}
                </p>
              </div>

              {/* Quick Actions Bar */}
              <div className="grid grid-cols-3 gap-2 pb-2">
                <div className="rounded-xl bg-slate-800/60 p-2 text-center border border-slate-700/40">
                  <p className="text-xs font-bold text-orange-400">12</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Manutenções</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-2 text-center border border-slate-700/40">
                  <p className="text-xs font-bold text-emerald-400">3</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Cotações</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-2 text-center border border-slate-700/40">
                  <p className="text-xs font-bold text-blue-400">ART</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Laudos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Home Indicator */}
          <div className="flex h-6 w-full items-center justify-center z-20">
            <div className="h-1 w-28 rounded-full bg-slate-600/60" />
          </div>
        </div>

        {/* Video Control Overlays */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-slate-900/90 px-3.5 py-1.5 border border-slate-700 shadow-xl backdrop-blur-md">
          <button
            onClick={togglePlay}
            className="text-slate-300 hover:text-white transition-colors"
            title={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <div className="h-3 w-px bg-slate-700" />
          <button
            onClick={toggleMute}
            className="text-slate-300 hover:text-white transition-colors"
            title={isMuted ? "Ativar som" : "Mudo"}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
