"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const LINK_APP_STORE = "https://apps.apple.com/app/id6744043956";
export const LINK_GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=br.com.bsbengenhariacondominial.sgp";
export const LINK_ADMIN = "https://bsbengenhariacondominial.com.br";
export const LINK_SITE_INSTITUCIONAL = "https://bsbengenhariacondominial.com";
export const LINK_CURSO_SINDICO = "https://sindicoprofissionaloficial.com.br/sindico-profissional-2/";
export const WHATSAPP_NUMERO = "5561996989009";

export const linkWhatsApp = (origem = "landing") =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o aplicativo SGP Condomínios e os serviços de engenharia da BSB. (Origem: ${origem})`
  )}`;

export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Logo = ({
  claro = false,
  className = "",
}: {
  claro?: boolean;
  className?: string;
}) => (
  <div className={`flex items-center gap-3.5 ${className}`}>
    <div className="relative h-14 w-44 sm:h-16 sm:w-52 transition-transform hover:scale-[1.02]">
      <Image
        src={claro ? "/brand/logo-bsb.png" : "/brand/logo.png"}
        alt="BSB Engenharia Condominial"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  </div>
);

export const Kicker = ({
  children,
  claro = false,
}: {
  children: React.ReactNode;
  claro?: boolean;
}) => (
  <span
    className={`inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.18em] sm:text-xs ${
      claro ? "text-orange-300" : "text-[#F0582C]"
    }`}
  >
    <motion.span
      aria-hidden="true"
      className={`inline-block h-[2px] w-7 origin-left rounded-full ${
        claro ? "bg-orange-300" : "bg-[#F0582C]"
      }`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    />
    {children}
  </span>
);

type VarianteBotao = "laranja" | "escuro" | "contorno" | "branco";

const ESTILO_BOTAO: Record<VarianteBotao, string> = {
  laranja:
    "bg-gradient-to-r from-[#F0582C] to-[#D44820] text-white hover:brightness-105 shadow-[0_10px_30px_-8px_rgba(240,88,44,.5)]",
  escuro:
    "bg-slate-900 text-white hover:bg-black shadow-[0_10px_30px_-10px_rgba(15,23,42,.4)]",
  contorno:
    "border-2 border-slate-300 text-slate-800 hover:border-slate-800 hover:bg-slate-50",
  branco:
    "bg-white text-slate-900 hover:bg-slate-100 shadow-md",
};

export function Botao({
  href,
  variante = "laranja",
  children,
  className = "",
  bloco = false,
  onClick,
}: {
  href?: string;
  variante?: VarianteBotao;
  children: React.ReactNode;
  className?: string;
  bloco?: boolean | "celular";
  onClick?: () => void;
}) {
  const classes = `relative inline-flex min-h-[50px] items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-6 py-3 text-center text-sm font-bold leading-tight transition-all ${
    ESTILO_BOTAO[variante]
  } ${bloco === true ? "w-full" : bloco === "celular" ? "w-full sm:w-auto" : ""} ${className}`;

  const conteudo = <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>;

  if (!href) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {conteudo}
      </motion.button>
    );
  }

  const externo = /^https?:/.test(href);

  return (
    <motion.span
      className={bloco === true ? "flex w-full" : bloco === "celular" ? "flex w-full sm:inline-flex sm:w-auto" : "inline-flex"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {externo ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {conteudo}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {conteudo}
        </Link>
      )}
    </motion.span>
  );
}

