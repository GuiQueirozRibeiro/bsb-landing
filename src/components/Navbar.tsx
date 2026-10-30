"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Shield, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "./animacoes";
import { LINK_ADMIN, Botao, linkWhatsApp } from "./shared";

const NAV_LINKS = [
  { label: "Recursos do App", href: "#recursos" },
  { label: "NBR 5674 & Laudos", href: "#normas" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Dúvidas Frequentes", href: "#faq" },
];

export function Navbar() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || aberto
          ? "border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Large Crisp Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-14 w-48 sm:h-16 sm:w-60 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/brand/logo.png"
              alt="BSB Engenharia Condominial"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-slate-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-[#F0582C]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2.5px] w-full origin-left scale-x-0 rounded-full bg-[#F0582C] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={LINK_ADMIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-2xs hover:border-slate-800 hover:bg-slate-50 transition-all"
          >
            Portal do Síndico
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
          </a>
          <Botao href="#download" variante="laranja" className="!min-h-[44px] !text-xs !px-5">
            Baixar o App
          </Botao>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          className="p-2 text-slate-800 lg:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        >
          {aberto ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-slate-200 bg-white/98 px-6 py-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-bold text-slate-800">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="border-b border-slate-100 py-2.5 hover:text-[#F0582C]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={LINK_ADMIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-2xl border-2 border-slate-300 py-3 text-sm font-bold text-slate-800"
                >
                  Acessar Portal do Síndico
                </a>
                <Botao href="#download" onClick={() => setAberto(false)} variante="laranja" bloco>
                  Baixar o Aplicativo
                </Botao>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
