"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animation";
import {
  Wrench,
  FileSpreadsheet,
  Camera,
  Coins,
  BellRing,
  ShieldCheck,
  CheckCircle,
  FileText,
} from "lucide-react";

export function RecursosSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const cards = sectionRef.current.querySelectorAll(".recurso-card");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      icon: Wrench,
      tag: "NBR 5674",
      title: "Plano de Manutenção Preventiva",
      description:
        "Controle rigoroso do ciclo de vida das instalações do edifício. Checklist com periodicidade (diária, semanal, mensal e anual) e histórico técnico digital.",
      color: "from-orange-500 to-amber-500",
      accent: "text-orange-600 bg-orange-50",
    },
    {
      icon: FileSpreadsheet,
      tag: "Governança Rígida",
      title: "Comparador de 3 Cotações",
      description:
        "O sistema bloqueia compras ou contratações de obras sem no mínimo 3 orçamentos comparados lado a lado, garantindo transparência ao conselho fiscal.",
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-600 bg-blue-50",
    },
    {
      icon: Camera,
      tag: "Engenharia Legal",
      title: "Laudo Fotográfico Antes & Depois",
      description:
        "Gere laudos fotográficos em PDF com layout técnico, ART do CREA-DF emitida e assinaturas digitais prontas para assembleia de moradores.",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Coins,
      tag: "Finanças Claras",
      title: "Balancetes & Transparência",
      description:
        "Contas a pagar unificadas, comprovantes bancários anexados e conciliação de extratos OFX em um clique, sem planilhas perdidas.",
      color: "from-purple-500 to-violet-500",
      accent: "text-purple-600 bg-purple-50",
    },
    {
      icon: BellRing,
      tag: "Comunicação",
      title: "Chamados & Notificações Push",
      description:
        "Moradores e equipe abrem solicitações de manutenção direto pelo smartphone, com envio de fotos e notificações de status em tempo real.",
      color: "from-rose-500 to-pink-500",
      accent: "text-rose-600 bg-rose-50",
    },
    {
      icon: ShieldCheck,
      tag: "Proteção Jurídica",
      title: "Resguardo para o Síndico",
      description:
        "Toda intervenção física no prédio fica registrada com responsabilidade técnica assinada, protegendo o síndico cível e criminalmente.",
      color: "from-slate-700 to-slate-900",
      accent: "text-slate-800 bg-slate-100",
    },
  ];

  return (
    <section
      id="recursos"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F0582C]">
            Tecnologia + Engenharia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que um condomínio profissional precisa, em um só lugar.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Desenvolvido para eliminar o improviso na gestão condominial e entregar
            laudos, manutenções e finanças com rigor de engenharia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="recurso-card group relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${item.accent}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#F0582C] transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F0582C] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#F0582C]">
                  <span>Ver detalhes no app</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
