"use client";

import { SplitTitle } from "./SplitTitle";
import { StoreBadges } from "./StoreBadges";
import { PhoneMockupVideo } from "./PhoneMockupVideo";
import { CheckCircle2, QrCode, Sparkles, Building2, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="download"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50"
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0582c0a_1px,transparent_1px),linear-gradient(to_bottom,#f0582c0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-100/60 px-4 py-1.5 text-xs font-bold text-[#F0582C] shadow-2xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              <span>NOVO APP OFICIAL • SGP CONDOMÍNIOS</span>
            </div>

            {/* Kinetic Typography Title */}
            <SplitTitle
              text="A engenharia e a gestão do seu condomínio na palma da mão."
              highlightWords={["engenharia", "gestão", "palma", "mão"]}
              highlightClass="text-[#F0582C]"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            />

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mx-auto lg:mx-0">
              O aplicativo definitivo da <strong>BSB Engenharia Condominial</strong>.
              Acompanhe manutenções obrigatórias sob a <strong>NBR 5674</strong>,
              aprove orçamentos com governança de 3 cotações, acesse laudos com ART
              e consulte a prestação de contas do seu condomínio em tempo real.
            </p>

            {/* Core Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Norma NBR 5674 Integrada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Laudos com ART / CREA-DF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Governança Anti-Fraude</span>
              </div>
            </div>

            {/* Store Badges & QR Code */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <StoreBadges />

              {/* QR Code Quick Scan for Desktop */}
              <div className="hidden xl:flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-md border border-slate-200/90 backdrop-blur-md">
                <div className="rounded-xl bg-orange-50 p-2 text-orange-600">
                  <QrCode className="h-8 w-8" />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-slate-900">Aponte a câmera</p>
                  <p className="text-[11px] text-slate-500">Baixe direto no celular</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup with App Demonstration Video */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockupVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
