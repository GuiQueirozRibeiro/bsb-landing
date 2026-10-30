"use client";

import React from "react";
import { Contador, Revelar } from "./animacoes";

export function NumerosImpacto() {
  return (
    <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-1.5 pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black text-[#F0582C]">
                <Contador alvo={120} prefixo="+" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Condomínios no DF
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black text-white">
                <Contador alvo={100} sufixo="%" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Conformidade NBR 5674
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black text-[#F0582C]">
                <Contador alvo={8400} prefixo="+" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Inspeções Registradas
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black text-emerald-400">
                100%
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Laudos com ART / CREA
              </p>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
