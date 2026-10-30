"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, QrCode, Play, ShieldCheck, ArrowRight } from "lucide-react";
import { TituloPalavras, Faixa, Revelar } from "./animacoes";
import { PhoneMockupLight } from "./PhoneMockupLight";
import { StoreBadges } from "./StoreBadges";
import { VideoModal } from "./VideoModal";
import { Botao, LINK_APP_STORE, LINK_GOOGLE_PLAY, linkWhatsApp } from "./shared";

const NORMAS_FAIXA = [
  "ABNT NBR 5674 • Manutenção Predial",
  "ABNT NBR 16280 • Reformas em Edificações",
  "ART Oficial • CREA-DF Homologado",
  "Governança Rígida • 3 Cotações Comparadas",
  "Balancete Digital • Transparência Fiscal",
  "Brasília & Distrito Federal",
];

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section
        id="download"
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0582c0d_1px,transparent_1px),linear-gradient(to_bottom,#f0582c0d_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge Launch */}
              <Revelar>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-300/80 bg-orange-100/70 px-4 py-2 text-xs font-black tracking-wide text-[#F0582C] shadow-2xs backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0582C] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F0582C]" />
                  </span>
                  <span>NOVO APLICATIVO OFICIAL • SGP CONDOMÍNIOS</span>
                </div>
              </Revelar>

              {/* Kinetic Animated Headline */}
              <TituloPalavras
                texto="A engenharia e a gestão do seu condomínio"
                destaque="na palma da mão."
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]"
              />

              {/* Subheadline */}
              <Revelar atraso={0.2}>
                <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mx-auto lg:mx-0">
                  O aplicativo definitivo da <strong>BSB Engenharia Condominial</strong>.
                  Acompanhe manutenções obrigatórias pela <strong>NBR 5674</strong>,
                  aprove orçamentos com governança de 3 cotações, acesse laudos com ART
                  e consulte a prestação de contas do seu condomínio em tempo real.
                </p>
              </Revelar>

              {/* Direct Indicators */}
              <Revelar atraso={0.3}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-1 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Norma NBR 5674 Integrada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Laudos com ART no CREA-DF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>3 Cotações Obrigatórias</span>
                  </div>
                </div>
              </Revelar>

              {/* Store Badges and Video Button */}
              <Revelar atraso={0.4}>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <StoreBadges />

                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#F0582C] transition-colors py-2"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-800 shadow-xs">
                      <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                    </div>
                    <span>Ver vídeo demonstrativo</span>
                  </button>
                </div>
              </Revelar>
            </div>

            {/* Right Content: Realistic Smartphone in Light Theme */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PhoneMockupLight onVideoOpen={() => setIsVideoModalOpen(true)} />
            </div>
          </div>
        </div>

        {/* Marquee Banner of Technical Standards */}
        <div className="mt-20 border-y border-slate-200/80 bg-white/80 py-4 backdrop-blur-sm">
          <Faixa itens={NORMAS_FAIXA} />
        </div>
      </section>

      {/* Video Demonstration Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
