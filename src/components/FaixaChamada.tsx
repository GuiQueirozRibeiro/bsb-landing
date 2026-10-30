"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";
import { Revelar } from "./animacoes";
import { Botao, Container, linkWhatsApp, LINK_APP_STORE, LINK_GOOGLE_PLAY } from "./shared";

export function FaixaChamada() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Revelar>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative flex flex-col items-stretch gap-8 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#F0582C] via-[#ea580c] to-[#D44820] px-8 py-12 text-white shadow-2xl sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between"
          >
            {/* Ambient Conic Glow */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,.4),transparent_40%,rgba(255,255,255,.2),transparent_80%)] blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-200">
                Segurança para o seu patrimônio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Pronto para colocar a engenharia do seu condomínio em ordem?
              </h2>
              <p className="text-base text-orange-100 leading-relaxed">
                Baixe o aplicativo oficial agora mesmo ou converse com nossa equipe de engenharia
                para implementar o plano de manutenção NBR 5674 no seu edifício.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Botao href={linkWhatsApp("banner-chamada")} variante="branco" bloco="celular">
                <MessageCircle className="h-4 w-4 text-[#F0582C]" />
                Falar com Engenheiro no WhatsApp
              </Botao>
              <Botao href="#download" variante="escuro" bloco="celular">
                Baixar Aplicativo nas Lojas
                <ArrowUpRight className="h-4 w-4" />
              </Botao>
            </div>
          </motion.div>
        </Revelar>
      </Container>
    </section>
  );
}
