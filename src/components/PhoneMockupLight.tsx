"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Wrench,
  FileCheck2,
  FileSpreadsheet,
  Coins,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Flutuar, Inclinar } from "./animacoes";

interface PhoneMockupLightProps {
  onVideoOpen?: () => void;
}

export function PhoneMockupLight({ onVideoOpen }: PhoneMockupLightProps) {
  const [activeTab, setActiveTab] = useState<"manutencao" | "cotacoes" | "laudos" | "financeiro">("manutencao");

  return (
    <div id="video" className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[325px] scroll-mt-32">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-orange-600/15 blur-3xl opacity-80" />

      {/* Floating Badges Orbiting the Smartphone (compact and positioned nicely) */}
      <Flutuar distancia={6} duracao={4} className="absolute -left-10 top-[10%] z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-lg ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-orange-100 text-[#F0582C]">
            <Wrench className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-900 leading-tight">NBR 5674</p>
            <p className="text-[9px] text-slate-500">Preventiva em dia</p>
          </div>
        </div>
      </Flutuar>

      <Flutuar distancia={8} atraso={1.2} duracao={4.8} className="absolute -right-8 top-[36%] z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-lg ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-900 leading-tight">3 Cotações</p>
            <p className="text-[9px] text-slate-500">Quórum Aprovado</p>
          </div>
        </div>
      </Flutuar>

      <Flutuar distancia={6} atraso={2.2} duracao={4} className="absolute -left-8 bottom-[12%] z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-lg ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <ShieldCheck className="h-3.5 w-3.5" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-900 leading-tight">Laudo ART</p>
            <p className="text-[9px] text-slate-500">CREA-DF Homologado</p>
          </div>
        </div>
      </Flutuar>

      {/* 3D Tilt Wrapper */}
      <Inclinar intensidade={7}>
        {/* Smartphone Hardware Frame (iPhone 16 Pro Style - Slimmer & Sleeker) */}
        <div className="relative mx-auto aspect-[9/19.2] w-full rounded-[44px] bg-slate-950 p-[9px] shadow-[0_25px_70px_-15px_rgba(240,88,44,0.3)] ring-1 ring-slate-800">
          {/* Outer Bezel Gloss */}
          <div className="pointer-events-none absolute inset-0 rounded-[44px] border-[2.5px] border-slate-700/60" />

          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3.5 z-40 flex h-4.5 w-20 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Smartphone Screen in LIGHT THEME */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px] bg-[#F8FAFC] text-slate-900">
            {/* Native Status Bar */}
            <div className="flex h-10 w-full items-center justify-between px-6 pt-1 text-[10px] font-bold text-slate-900 z-30 bg-white">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px]">5G</span>
                <div className="h-2 w-4 rounded-[2px] border border-slate-900 p-0.5">
                  <div className="h-full w-full rounded-2xs bg-slate-900" />
                </div>
              </div>
            </div>

            {/* App Header (Clean Official Theme) */}
            <div className="bg-white border-b border-slate-200/80 px-3 pt-1 pb-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-7 w-7 overflow-hidden rounded-lg shadow-xs">
                    <Image
                      src="/icon-512.png"
                      alt="Ícone SGP"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold leading-tight text-slate-900">SGP Condomínios</h3>
                    <p className="text-[9px] text-slate-500">Residencial Solar de Brasília</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-200">
                  Online
                </span>
              </div>

              {/* In-App Tab Switcher */}
              <div className="mt-2 flex rounded-lg bg-slate-100 p-0.5 text-[9px] font-bold text-slate-600">
                <button
                  type="button"
                  onClick={() => setActiveTab("manutencao")}
                  className={`flex-1 rounded-md py-1 transition-all ${
                    activeTab === "manutencao"
                      ? "bg-white text-[#F0582C] shadow-2xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Manutenção
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cotacoes")}
                  className={`flex-1 rounded-md py-1 transition-all ${
                    activeTab === "cotacoes"
                      ? "bg-white text-[#F0582C] shadow-2xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Cotações
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("laudos")}
                  className={`flex-1 rounded-md py-1 transition-all ${
                    activeTab === "laudos"
                      ? "bg-white text-[#F0582C] shadow-2xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Laudos ART
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("financeiro")}
                  className={`flex-1 rounded-md py-1 transition-all ${
                    activeTab === "financeiro"
                      ? "bg-white text-[#F0582C] shadow-2xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Financeiro
                </button>
              </div>
            </div>

            {/* App Body Content with Central Pulsating Play Button */}
            <div className="relative flex-1 overflow-hidden p-3 space-y-2.5">
              <AnimatePresence mode="wait">
                {activeTab === "manutencao" && (
                  <motion.div
                    key="manutencao"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="rounded-xl bg-gradient-to-br from-orange-500 to-[#D44820] p-2.5 text-white shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-orange-100">
                          NBR 5674
                        </span>
                        <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[8px] font-bold">
                          98% Conforme
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-black">Cronograma Preventivo</p>
                      <p className="text-[9px] text-orange-100">24 rotinas cadastradas</p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900">Limpeza dos Reservatórios</span>
                        <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">
                          Concluído
                        </span>
                      </div>
                      <p className="text-[8px] text-slate-500 mt-0.5">Semestral • Laudo emitido</p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900">Grupo Gerador</span>
                        <span className="text-[8px] font-bold text-orange-600 bg-orange-50 px-1 py-0.5 rounded">
                          Em andamento
                        </span>
                      </div>
                      <p className="text-[8px] text-slate-500 mt-0.5">Teste de carga e bateria</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "cotacoes" && (
                  <motion.div
                    key="cotacoes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="rounded-xl bg-blue-600 p-2.5 text-white shadow-xs">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200">
                        Governança 3 Cotações
                      </span>
                      <p className="text-xs font-bold mt-0.5">Pintura da Fachada</p>
                      <p className="text-[9px] text-blue-100">3 de 3 orçamentos comparados</p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-2 space-y-1 text-[10px]">
                      <div className="flex justify-between font-bold">
                        <span>1. Engenharia Alpha</span>
                        <span className="text-[#F0582C]">R$ 42.500</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[9px]">
                        <span>2. Construtora Beta</span>
                        <span>R$ 46.800</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[9px]">
                        <span>3. Reformas Delta</span>
                        <span>R$ 49.000</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "laudos" && (
                  <motion.div
                    key="laudos"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="rounded-xl bg-slate-900 p-2.5 text-white shadow-xs">
                      <p className="text-[9px] font-bold text-emerald-400">CREA-DF Nº 10294/D</p>
                      <p className="text-xs font-bold mt-0.5">Laudo com ART</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-center">
                      <div className="rounded-lg bg-slate-100 p-1.5 text-[9px] font-bold text-slate-600">
                        Foto: ANTES
                      </div>
                      <div className="rounded-lg bg-orange-100 p-1.5 text-[9px] font-bold text-orange-600">
                        Foto: DEPOIS
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "financeiro" && (
                  <motion.div
                    key="financeiro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="rounded-xl bg-emerald-600 p-2.5 text-white shadow-xs">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-200">
                        Prestação de Contas
                      </span>
                      <p className="text-xs font-bold mt-0.5">Balancete Mensal</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-2 text-[10px] space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contas Pagas</span>
                        <span className="font-bold">R$ 38.450</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 font-bold">
                        <span>Comprovantes</span>
                        <span>100% Anexados</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Central Pulsating Play Button Overlay (Identical High-Impact Pattern as Sisters Organizador) */}
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/20 backdrop-blur-[1.5px] transition-all">
                <button
                  type="button"
                  onClick={onVideoOpen}
                  aria-label="Assistir demonstração do aplicativo"
                  className="group relative flex flex-col items-center justify-center focus:outline-none"
                >
                  {/* Outer Pulsating Ring Wave */}
                  <span className="absolute h-20 w-20 sm:h-24 sm:w-24 animate-ping rounded-full bg-[#F0582C]/50 opacity-75 duration-1000" />

                  {/* Multi-color Vibrant Radial Glow */}
                  <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#F0582C] via-amber-400 to-[#D44820] opacity-80 blur-md transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />

                  {/* Circular White Button with Orange Play Arrow */}
                  <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white text-[#F0582C] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#F0582C] ml-1" />
                  </div>

                  {/* Frosted Label Pill Underneath */}
                  <div className="mt-3 rounded-full bg-slate-950/85 px-3 py-1 shadow-lg border border-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                    <span className="text-[10px] sm:text-[11px] font-black tracking-wide text-white flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-amber-300" />
                      Assistir Vídeo (45s)
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="flex h-5 w-full items-center justify-center bg-white z-30">
              <div className="h-1 w-24 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </Inclinar>
    </div>
  );
}
