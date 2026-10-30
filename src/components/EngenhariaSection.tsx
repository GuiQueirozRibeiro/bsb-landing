"use client";

import React from "react";
import Image from "next/image";
import { Award, FileCheck2, HardHat, Compass, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Revelar } from "./animacoes";
import { Botao, linkWhatsApp } from "./shared";

export function EngenhariaSection() {
  return (
    <section id="normas" className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Authority Copy */}
          <div className="lg:col-span-7 space-y-6">
            <Revelar>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400">
                <HardHat className="h-4 w-4" />
                <span>RESPONSABILIDADE TÉCNICA ESPECIALIZADA</span>
              </div>
            </Revelar>

            <Revelar atraso={0.1}>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Mais do que um software, o respaldo de uma{" "}
                <span className="text-[#F0582C]">empresa de engenharia</span>.
              </h2>
            </Revelar>

            <Revelar atraso={0.2}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Diferente de sistemas genéricos de condomínio, o <strong>SGP Condomínios</strong>{" "}
                foi criado por engenheiros civis da <strong>BSB Engenharia Condominial</strong>,
                garantindo que cada rotina respeite as exigências rigorosas das normas técnicas da ABNT:
              </p>
            </Revelar>

            {/* List of Standards */}
            <div className="space-y-4 pt-2">
              <Revelar atraso={0.3}>
                <div className="flex items-start gap-4 rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">NBR 5674 • Manutenção Predial</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Planejamento, organização e execução de rotinas prediais com cronograma,
                      inspeções periódicas e armazenamento de histórico digital que protege o síndico.
                    </p>
                  </div>
                </div>
              </Revelar>

              <Revelar atraso={0.4}>
                <div className="flex items-start gap-4 rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">NBR 16280 • Reformas em Edificações</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Controle de autorizações de obras em unidades autônomas, checagem prévia de ART/RRT
                      e mitigação de riscos estruturais nas edificações.
                    </p>
                  </div>
                </div>
              </Revelar>

              <Revelar atraso={0.5}>
                <div className="flex items-start gap-4 rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Anotação de Responsabilidade Técnica (ART)</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Laudos periciais e vistorias conclusivas emitidos com registro ativo no
                      CREA-DF, conferindo validade jurídica plena perante seguradoras e tribunais.
                    </p>
                  </div>
                </div>
              </Revelar>
            </div>
          </div>

          {/* Right Column: Authority Credential Card */}
          <div className="lg:col-span-5 flex justify-center">
            <Revelar atraso={0.25} className="w-full max-w-md">
              <div className="rounded-[36px] bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 p-8 border border-slate-800 shadow-2xl text-center space-y-6">
                <div className="mx-auto relative h-32 w-32 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-2 border-white/20">
                  <Image
                    src="/icon-512.png"
                    alt="Novo Ícone Oficial SGP Condomínios e BSB Engenharia"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-orange-400">
                    Novo Ícone & Favicon Oficial
                  </div>
                  <h3 className="text-xl font-bold text-white">BSB Engenharia Condominial</h3>
                  <p className="text-xs text-slate-400">Projetos • Obras • Manutenção Técnica</p>
                </div>

                <div className="divide-y divide-slate-800 text-left text-xs text-slate-300">
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-slate-400">Sede Própria:</span>
                    <span className="font-semibold text-white">Taguatinga Centro • Brasília/DF</span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-slate-400">Registro Profissional:</span>
                    <span className="font-semibold text-white">CREA-DF Homologado</span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-slate-400">WhatsApp Comercial:</span>
                    <span className="font-semibold text-[#F0582C]">(61) 99698-9009</span>
                  </div>
                </div>

                <Botao href={linkWhatsApp("engenharia-card")} variante="laranja" bloco>
                  Solicitar Proposta para seu Condomínio
                </Botao>
              </div>
            </Revelar>
          </div>
        </div>
      </div>
    </section>
  );
}
