"use client";

import React from "react";
import { Check, X, ShieldCheck, AlertTriangle } from "lucide-react";
import { Revelar } from "./animacoes";
import { Kicker, Botao, linkWhatsApp } from "./shared";

const COMPARATIVO_ITEMS = [
  {
    criterio: "Plano de Manutenção Preventiva",
    semBsb: "Improviso, manutenções reativas após quebras e sem cronograma técnico.",
    comBsb: "Norma ABNT NBR 5674 com rotinas periódicas, checklist e alertas no celular.",
  },
  {
    criterio: "Contratação de Obras & Compras",
    semBsb: "Orçamentos soltos no WhatsApp, risco de questionamento no conselho fiscal.",
    comBsb: "Governança obrigatória com 3 cotações comparadas lado a lado.",
  },
  {
    criterio: "Laudos e Relatórios Técnicos",
    semBsb: "Sem validade jurídica, sem ART do CREA e fotos desorganizadas.",
    comBsb: "Laudo fotográfico antes e depois com emissão de ART assinada por engenheiro.",
  },
  {
    criterio: "Prestação de Contas & Finanças",
    semBsb: "Comprovantes perdidos, notas fiscais físicas e conciliação demorada.",
    comBsb: "Balancetes digitais, múltiplos anexos e conciliação bancária em 1 clique.",
  },
  {
    criterio: "Segurança Jurídica do Síndico",
    semBsb: "Risco de responsabilização civil e criminal por omissão predial.",
    comBsb: "Blindagem jurídica plena com respaldo de empresa de engenharia credenciada.",
  },
];

export function ComparativoSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Revelar className="text-center max-w-3xl mx-auto space-y-4">
          <Kicker>Transparência & Governança</Kicker>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Por que condomínios exigentes escolhem a BSB Engenharia?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Veja a diferença entre a gestão condominial amadora e o padrão de engenharia profissional.
          </p>
        </Revelar>

        <Revelar atraso={0.15} className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Coluna 1: Gestão Comum */}
            <div className="p-8 sm:p-12 bg-slate-50/70">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Gestão Convencional</h3>
                  <p className="text-xs text-slate-500">Planilhas, improviso e risco civil</p>
                </div>
              </div>

              <div className="space-y-6">
                {COMPARATIVO_ITEMS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs font-bold uppercase text-slate-400">{item.criterio}</p>
                    <div className="flex items-start gap-2.5 text-sm text-slate-600">
                      <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item.semBsb}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2: Padrão BSB Engenharia */}
            <div className="p-8 sm:p-12 bg-gradient-to-br from-orange-50/60 via-white to-orange-50/20 relative">
              <div className="absolute top-6 right-6 rounded-full bg-[#F0582C] px-3 py-1 text-[10px] font-black uppercase text-white shadow-sm">
                Padrão Recomendado
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0582C] text-white shadow-md">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Com SGP Condomínios & BSB</h3>
                  <p className="text-xs text-[#F0582C] font-semibold">Normas ABNT, ART e Governança</p>
                </div>
              </div>

              <div className="space-y-6">
                {COMPARATIVO_ITEMS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs font-bold uppercase text-[#F0582C]">{item.criterio}</p>
                    <div className="flex items-start gap-2.5 text-sm font-semibold text-slate-900">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.comBsb}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold">Quer blindar a gestão do seu condomínio em Brasília?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Converse diretamente com nossos engenheiros especialistas pelo WhatsApp.
              </p>
            </div>
            <Botao href={linkWhatsApp("comparativo")} variante="laranja" className="shrink-0 !text-xs !py-3">
              Falar com Engenheiro no WhatsApp
            </Botao>
          </div>
        </Revelar>
      </div>
    </section>
  );
}

