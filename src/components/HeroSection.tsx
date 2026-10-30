"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, QrCode, Play, ShieldCheck, ArrowDown } from "lucide-react";
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
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0582c0d_1px,transparent_1px),linear-gradient(to_bottom,#f0582c0d_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-5">
              {/* Badge Launch */}
              <Revelar>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 bg-orange-100/70 px-3.5 py-1.5 text-xs font-black tracking-wide text-[#F0582C] shadow-2xs backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0582C] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F0582C]" />
                  </span>
                  <span>NOVO APLICATIVO OFICIAL • SGP CONDOMÍNIOS</span>
                </div>
              </Revelar>

              {/* Kinetic Animated Headline */}
              <TituloPalavras
                texto="A engenharia e a gestão do seu condomínio"
                destaque="na palma da mão."
                className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.08]"
              />

              {/* Subheadline */}
              <Revelar atraso={0.15}>
                <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mx-auto lg:mx-0">
                  O aplicativo definitivo da <strong>BSB Engenharia Condominial</strong>.
                  Acompanhe manutenções obrigatórias pela <strong>NBR 5674</strong>,
                  aprove orçamentos com governança de 3 cotações, acesse laudos com ART
                  e consulte a prestação de contas do seu condomínio em tempo real.
                </p>
              </Revelar>

              {/* Direct Indicators */}
              <Revelar atraso={0.25}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Norma NBR 5674</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Laudos com ART</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>3 Cotações Obrigatórias</span>
                  </div>
                </div>
              </Revelar>

              {/* Store Badges and Mobile Shortcut to Video */}
              <Revelar atraso={0.35}>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <StoreBadges />

                  {/* No celular leva até o celular onde o play pisca; no desktop abre o modal direto */}
                  <div className="lg:hidden">
                    <a
                      href="#video"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:border-[#F0582C] hover:text-[#F0582C] transition-all"
                    >
                      <Play className="h-3.5 w-3.5 fill-[#F0582C] text-[#F0582C]" />
                      <span>Ver Demonstração</span>
                      <ArrowDown className="h-3.5 w-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              </Revelar>
            </div>

            {/* Right Content: Sleek Compact Smartphone in Light Theme with High-Impact Play Button */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PhoneMockupLight onVideoOpen={() => setIsVideoModalOpen(true)} />
            </div>
          </div>
        </div>

        {/* Marquee Banner of Technical Standards */}
        <div className="mt-16 border-y border-slate-200/80 bg-white/80 py-3.5 backdrop-blur-sm">
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
