"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "O aplicativo está disponível para iOS (iPhone) e Android?",
      a: "Sim! O SGP Condomínios está homologado e disponível para download oficial tanto na Apple App Store quanto na Google Play Store. O síndico, conselheiros e equipe técnica podem acessar pelo celular ou pelo portal administrativo no computador.",
    },
    {
      q: "Como o síndico acessa a plataforma administrativa no computador?",
      a: "O síndico e o setor administrativo contam com o portal web de gestão acessível pelo subdomínio admin.bsbengenhariacondominial.com.br. Lá é possível cadastrar cotações, emitir balancetes, conciliar extratos bancários e extrair relatórios completos em PDF e Excel.",
    },
    {
      q: "O que é a regra de governança das 3 cotações?",
      a: "Para garantir total lisura e conformidade perante os conselhos fiscais e assembleias, o sistema exige que toda contratação ou obra tenha no mínimo 3 orçamentos comparados antes de permitir a aprovação pelo síndico.",
    },
    {
      q: "Como o cumprimento da NBR 5674 resguarda o síndico legalmente?",
      a: "O Código Civil (Art. 1.348) responsabiliza o síndico pela conservação das áreas comuns. A NBR 5674 estabelece o padrão técnico de manutenção preventiva. Com o SGP Condomínios, todas as inspeções, laudos e intervenções ficam arquivados com data, foto e ART, servindo de prova jurídica contra alegações de omissão.",
    },
    {
      q: "Como meu condomínio pode ser integrado ao sistema da BSB Engenharia?",
      a: "Basta entrar em contato com nossa equipe técnica pelo botão de WhatsApp nesta página ou solicitar uma apresentação comercial. Configuramos o cadastro do edifício, os planos de manutenção e liberamos o acesso de todos os envolvidos.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F0582C]">
            Esclareça suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tudo o que você precisa saber sobre o aplicativo e a gestão técnica condominial.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 transition-colors hover:text-[#F0582C]"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#F0582C]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

