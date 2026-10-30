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
  Building,
} from "lucide-react";
import { Flutuar, Inclinar } from "./animacoes";

interface PhoneMockupLightProps {
  onVideoOpen?: () => void;
}

export function PhoneMockupLight({ onVideoOpen }: PhoneMockupLightProps) {
  const [activeTab, setActiveTab] = useState<"manutencao" | "cotacoes" | "laudos" | "financeiro">("manutencao");

  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
      {/* Floating Badges Orbiting the Smartphone */}
      <Flutuar distancia={8} duracao={4} className="absolute -left-6 top-[12%] z-30 hidden sm:block">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#F0582C]">
            <Wrench className="h-4.5 w-4.5" />
          </div>
          <div className="text-left text-xs">
            <p className="font-bold text-slate-900">NBR 5674 Conforme</p>
            <p className="text-[10px] text-slate-500">Manutenção periódica em dia</p>
          </div>
        </div>
      </Flutuar>

      <Flutuar distancia={10} atraso={1.5} duracao={5} className="absolute -right-6 top-[38%] z-30 hidden sm:block">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-4.5 w-4.5" />
          </div>
          <div className="text-left text-xs">
            <p className="font-bold text-slate-900">Governança Fiscal</p>
            <p className="text-[10px] text-slate-500">3 Cotações homologadas</p>
          </div>
        </div>
      </Flutuar>

      <Flutuar distancia={7} atraso={2.5} duracao={4.2} className="absolute -left-4 bottom-[14%] z-30 hidden sm:block">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-slate-900/10 backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <ShieldCheck className="h-4.5 w-4.5" />
          </div>
          <div className="text-left text-xs">
            <p className="font-bold text-slate-900">ART Emitida</p>
            <p className="text-[10px] text-slate-500">CREA-DF Registrado</p>
          </div>
        </div>
      </Flutuar>

      {/* 3D Tilt Wrapper */}
      <Inclinar intensidade={8}>
        {/* Smartphone Hardware Frame (iPhone 16 Pro Style) */}
        <div className="relative mx-auto aspect-[9/19] w-full rounded-[50px] bg-slate-900 p-[11px] shadow-[0_25px_80px_-15px_rgba(240,88,44,0.35)] ring-1 ring-slate-800">
          {/* Outer Bezel Gloss */}
          <div className="pointer-events-none absolute inset-0 rounded-[50px] border-[3px] border-slate-700/60" />

          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-4 z-40 flex h-5 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2.5">
            <div className="h-2 w-2 rounded-full bg-slate-900" />
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Smartphone Screen in LIGHT THEME */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[40px] bg-[#F8FAFC] text-slate-900">
            {/* Native Status Bar */}
            <div className="flex h-11 w-full items-center justify-between px-7 pt-2 text-[11px] font-bold text-slate-900 z-30 bg-white">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">5G</span>
                <div className="h-2.5 w-5 rounded-[3px] border border-slate-900 p-0.5">
                  <div className="h-full w-full rounded-2xs bg-slate-900" />
                </div>
              </div>
            </div>

            {/* App Header (Clean Official Theme) */}
            <div className="bg-white border-b border-slate-200/80 px-4 pt-2 pb-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-xs">
                    <Image
                      src="/icon-512.png"
                      alt="Ícone do Aplicativo SGP Condomínios"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold leading-tight text-slate-900">SGP Condomínios</h3>
                    <p className="text-[10px] text-slate-500">Residencial Solar de Brasília</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                  Síndico Ativo
                </span>
              </div>

              {/* In-App Tab Switcher */}
              <div className="mt-3 flex rounded-xl bg-slate-100 p-1 text-[10px] font-bold text-slate-600">
                <button
                  type="button"
                  onClick={() => setActiveTab("manutencao")}
                  className={`flex-1 rounded-lg py-1.5 transition-all ${
                    activeTab === "manutencao"
                      ? "bg-white text-[#F0582C] shadow-xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Manutenção
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cotacoes")}
                  className={`flex-1 rounded-lg py-1.5 transition-all ${
                    activeTab === "cotacoes"
                      ? "bg-white text-[#F0582C] shadow-xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Cotações
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("laudos")}
                  className={`flex-1 rounded-lg py-1.5 transition-all ${
                    activeTab === "laudos"
                      ? "bg-white text-[#F0582C] shadow-xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Laudos ART
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("financeiro")}
                  className={`flex-1 rounded-lg py-1.5 transition-all ${
                    activeTab === "financeiro"
                      ? "bg-white text-[#F0582C] shadow-xs"
                      : "hover:text-slate-900"
                  }`}
                >
                  Financeiro
                </button>
              </div>
            </div>

            {/* App Body Content based on active tab */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
              <AnimatePresence mode="wait">
                {activeTab === "manutencao" && (
                  <motion.div
                    key="manutencao"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2.5"
                  >
                    {/* Status card */}
                    <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-[#D44820] p-3 text-white shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-100">
                          NBR 5674 • Preventiva
                        </span>
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold">
                          98% Conforme
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-extrabold">Cronograma de Manutenção</p>
                      <p className="text-[10px] text-orange-100">24 rotinas cadastradas para este mês</p>
                    </div>

                    {/* Task Item 1 */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900">Limpeza dos Reservatórios</span>
                        <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Concluído
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-slate-500">Periodicidade Semestral • Laudo emitido</p>
                    </div>

                    {/* Task Item 2 */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900">Inspeção no Grupo Gerador</span>
                        <span className="text-[9px] font-semibold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                          Em andamento
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-slate-500">Teste de carga e bateria • Técnico BSB</p>
                    </div>

                    {/* Task Item 3 */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900">Pressurização de Incêndio</span>
                        <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                          Agendado
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-slate-500">Próxima terça-feira às 14:00</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "cotacoes" && (
                  <motion.div
                    key="cotacoes"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2.5"
                  >
                    <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                        Governança Exigida
                      </span>
                      <p className="mt-0.5 text-sm font-bold">Pintura e Impermeabilização</p>
                      <p className="text-[10px] text-blue-100">3 de 3 orçamentos comparados</p>
                    </div>

                    {/* Supplier comparison list */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span>1. Engenharia Alpha</span>
                        <span className="text-[#F0582C]">R$ 42.500</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-600">
                        <span>2. Construtora Beta</span>
                        <span>R$ 46.800</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-600">
                        <span>3. Reformas Delta</span>
                        <span>R$ 49.000</span>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-emerald-600">✓ Quórum de 3 atendido</span>
                        <span className="rounded bg-orange-500 px-2 py-0.5 text-[9px] font-bold text-white">
                          Aprovar
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "laudos" && (
                  <motion.div
                    key="laudos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2.5"
                  >
                    <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-sm">
                      <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        CREA-DF Nº 10294/D
                      </div>
                      <p className="mt-1 text-sm font-bold">Laudo Fotográfico com ART</p>
                      <p className="text-[10px] text-slate-300">Vistoria de Fachada e Pastilhas</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-slate-200 bg-white p-2 text-center">
                        <div className="h-16 rounded-lg bg-slate-200/80 flex items-center justify-center text-[10px] font-bold text-slate-500">
                          Foto: ANTES
                        </div>
                        <p className="mt-1 text-[9px] font-bold text-slate-700">Fissura detectada</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white p-2 text-center">
                        <div className="h-16 rounded-lg bg-orange-100/70 flex items-center justify-center text-[10px] font-bold text-orange-600">
                          Foto: DEPOIS
                        </div>
                        <p className="mt-1 text-[9px] font-bold text-slate-700">Recuperado com ART</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "financeiro" && (
                  <motion.div
                    key="financeiro"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2.5"
                  >
                    <div className="rounded-2xl bg-emerald-600 p-3 text-white shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                        Prestação de Contas
                      </span>
                      <p className="mt-0.5 text-sm font-bold">Balancete Mensal</p>
                      <p className="text-[10px] text-emerald-100">Extrato OFX 100% Conciliado</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600">Contas Pagas (Outubro)</span>
                        <span className="font-bold text-slate-900">R$ 38.450,00</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600">Comprovantes e NFs</span>
                        <span className="font-bold text-emerald-600">100% Anexados</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-full bg-[#F0582C]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Interactive Play Video Trigger inside the Phone */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onVideoOpen}
                  className="w-full rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 p-2.5 text-center text-xs font-bold text-white shadow-sm flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                  <span>Assistir Demonstração em Vídeo</span>
                </button>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="flex h-6 w-full items-center justify-center bg-white">
              <div className="h-1 w-28 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </Inclinar>
    </div>
  );
}

