"use client";

import Image from "next/image";
import { Award, FileCheck2, HardHat, Compass, CheckCircle } from "lucide-react";

export function EngenhariaSection() {
  return (
    <section
      id="normas"
      className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authority Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400">
              <HardHat className="h-4 w-4" />
              <span>RESPONSABILIDADE TÉCNICA ESPECIALIZADA</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Mais do que um software, a garantia técnica de uma{" "}
              <span className="text-[#F0582C]">empresa de engenharia</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Diferente de sistemas genéricos de condomínio, o <strong>SGP Condomínios</strong>{" "}
              foi concebido e estruturado pela <strong>BSB Engenharia Condominial</strong>,
              garantindo que cada rotina respeite as exigências das normas técnicas da ABNT:
            </p>

            {/* List of Standards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60">
                <FileCheck2 className="h-6 w-6 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">NBR 5674 • Manutenção Predial</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Planejamento, organização e execução de rotinas prediais com cronograma,
                    inspeções periódicas e armazenamento de histórico que protege o síndico.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60">
                <Compass className="h-6 w-6 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">NBR 16280 • Reformas em Edificações</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Controle de autorizações de obras em unidades autônomas, checagem de ART/RRT
                    e mitigação de riscos estruturais nas edificações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60">
                <Award className="h-6 w-6 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Anotação de Responsabilidade Técnica (ART)</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Laudos periciais e vistorias conclusivas emitidos com registro ativo no
                    CREA-DF, conferindo validade jurídica irrefutável perante seguradoras e tribunais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Emblem / Stamp Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-slate-800 to-slate-850 p-8 border border-slate-700 shadow-2xl text-center space-y-6">
              <div className="mx-auto relative h-28 w-28 rounded-2xl bg-white p-4 shadow-xl flex items-center justify-center">
                <Image
                  src="/brand/logo-oficial.png"
                  alt="Símbolo Minerva BSB Engenharia"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">BSB Engenharia Condominial</h3>
                <p className="text-xs text-slate-400">Projetos • Obras • Manutenção Técnica</p>
              </div>

              <div className="divide-y divide-slate-700/80 text-left text-xs text-slate-300">
                <div className="py-2.5 flex items-center justify-between">
                  <span>Atuação:</span>
                  <span className="font-semibold text-white">Distrito Federal & Entorno</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span>Registro Técnico:</span>
                  <span className="font-semibold text-white">CREA-DF Homologado</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span>Suporte Especializado:</span>
                  <span className="font-semibold text-emerald-400">Engenheiros Dedicados</span>
                </div>
              </div>

              <a
                href="https://bsbengenhariacondominial.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-orange-600/20 py-3 text-xs font-bold text-orange-400 border border-orange-500/30 hover:bg-orange-600/30 transition-colors"
              >
                Conheça a BSB Engenharia Condominial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
