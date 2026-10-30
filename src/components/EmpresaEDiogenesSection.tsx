"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award, BookOpen, CheckCircle2, Compass, GraduationCap, ShieldCheck, Sparkles, Building2, Users } from "lucide-react";
import { Container, Kicker, Botao, LINK_SITE_INSTITUCIONAL, LINK_CURSO_SINDICO, linkWhatsApp } from "./shared";
import { Revelar } from "./animacoes";

export function EmpresaEDiogenesSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 text-white">
      {/* Background blueprint subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative gradient glow */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#F0582C]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 space-y-24">
        {/* PARTE 1: A BSB ENGENHARIA CONDOMINIAL */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <Revelar>
              <Kicker claro>ENGENHARIA DE CONFIANÇA DESDE 2014</Kicker>
            </Revelar>

            <Revelar>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Mais de uma década cuidando do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#F0582C]">
                  patrimônio e da segurança
                </span>{" "}
                dos condomínios.
              </h2>
            </Revelar>

            <Revelar atraso={0.1}>
              <p className="text-lg leading-relaxed text-slate-300">
                A <strong className="text-white">BSB Engenharia</strong> nasceu com uma missão clara: levar rigor técnico de engenharia civil, conformidade legal e gestão preventiva para condomínios residenciais e comerciais. O app SGP é o ápice desse ecossistema, colocando na palma da mão do síndico os mesmos protocolos validados em mais de 10 anos de obras, laudos e perícias.
              </p>
            </Revelar>

            {/* Credenciais e Números */}
            <Revelar atraso={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <div className="text-2xl font-black text-[#F0582C]">+150.000 m²</div>
                  <div className="text-xs text-slate-400 mt-0.5">Área fiscalizada e laudos</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <div className="text-2xl font-black text-white">100% ABNT</div>
                  <div className="text-xs text-slate-400 mt-0.5">Normas NBR 5674 e 16280</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-orange-400">+10 Anos</div>
                  <div className="text-xs text-slate-400 mt-0.5">Tradição em Brasília e DF</div>
                </div>
              </div>
            </Revelar>

            {/* Botões de Ação */}
            <Revelar atraso={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={LINK_SITE_INSTITUCIONAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#F0582C] to-[#e0451a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Conhecer Site da BSB Engenharia
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={linkWhatsApp("sobre-empresa")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                >
                  Falar com um Engenheiro
                </a>
              </div>
            </Revelar>
          </div>

          {/* Card Visual BSB Engenharia */}
          <div className="lg:col-span-5">
            <Revelar>
              <div className="relative rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-800 to-slate-900/90 p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Building2 className="w-36 h-36 text-white" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 text-xs font-semibold text-orange-400">
                    <ShieldCheck className="h-4 w-4" /> Corpo Técnico Especializado
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Equipe Multidisciplinar Própria
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Especialistas atuantes em engenharia civil, elétrica, segurança do trabalho, perícias judiciais e manutenção predial conforme as normas mais exigentes.
                  </p>

                  <ul className="space-y-3 pt-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#F0582C] shrink-0" />
                      <span>Gestão e Fiscalização de Reformas e Obras</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#F0582C] shrink-0" />
                      <span>Inspeções Prediais e Laudos Técnicos Periciais</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#F0582C] shrink-0" />
                      <span>Recuperação Estrutural e Impermeabilização</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#F0582C] shrink-0" />
                      <span>Auditorias Preventivas para Prestação de Contas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Revelar>
          </div>
        </div>

        {/* DIVISOR DE ALTO PADRÃO */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* PARTE 2: O CRIADOR — ENG. DIÓGENES SUHETT */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Foto Oficial Imponente do Diógenes */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Revelar>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-2 border-slate-700 bg-slate-800 shadow-2xl group">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/assets/institutional/diogenes-suhett-oficial.jpg"
                    alt="Eng. Diógenes Suhett - Fundador da BSB Engenharia e Criador do Método SGP"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                  {/* Subtle vignette shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge flutuante sobre a foto */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                    <p className="text-xs uppercase tracking-widest text-[#F0582C] font-bold">
                      Autor & Palestrante
                    </p>
                    <p className="text-base font-extrabold text-white mt-0.5">
                      Eng. Diógenes Suhett
                    </p>
                    <p className="text-xs text-slate-400">
                      Criador do Método SGP • Mais de 150.000 m² fiscalizados
                    </p>
                  </div>
                </div>
              </div>
            </Revelar>
          </div>

          {/* Conteúdo sobre o Autor, Mentorias, Palestras e Livro */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Revelar>
              <Kicker claro>AUTORIDADE NO MERCADO CONDOMINIAL</Kicker>
            </Revelar>

            <Revelar>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                A mente e a experiência por trás do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#F0582C]">
                  Método SGP
                </span>
              </h2>
            </Revelar>

            <Revelar atraso={0.1}>
              <p className="text-lg leading-relaxed text-slate-300">
                <strong>Diógenes Suhett</strong> é engenheiro civil especialista em Engenharia Condominial, perícias, gestão de obras e manutenção predial. Com vasta trajetória à frente de grandes intervenções e laudos complexos, tornou-se palestrante nacional, mentor de síndicos profissionais e autor do livro de referência do setor.
              </p>
            </Revelar>

            {/* Destaques do criador */}
            <Revelar atraso={0.2}>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="flex items-start gap-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 p-4">
                  <BookOpen className="h-6 w-6 text-[#F0582C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Autor do Livro Oficial</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      "Engenharia Condominial: Como fiscalizar as obras do seu condomínio mesmo sem ser engenheiro".
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 p-4">
                  <GraduationCap className="h-6 w-6 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Formação & Mentorias</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Treinamentos de capacitação técnica que preparam síndicos para blindar sua gestão contra responsabilidade civil e criminal.
                    </p>
                  </div>
                </div>
              </div>
            </Revelar>

            {/* Botões do Diógenes */}
            <Revelar atraso={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={LINK_CURSO_SINDICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-md hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Conhecer o Curso & Método SGP
                  <ArrowUpRight className="h-4 w-4 text-[#F0582C]" />
                </a>

                <a
                  href={linkWhatsApp("palestras-mentorias")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                >
                  Palestras e Mentorias
                </a>
              </div>
            </Revelar>
          </div>
        </div>
      </Container>
    </section>
  );
}
