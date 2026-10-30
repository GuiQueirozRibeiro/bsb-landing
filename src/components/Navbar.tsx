"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Shield } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 sm:w-44 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/brand/logo.png"
              alt="BSB Engenharia Condominial"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#recursos"
            className="text-sm font-medium text-slate-700 hover:text-[#F0582C] transition-colors"
          >
            Recursos do App
          </a>
          <a
            href="#normas"
            className="text-sm font-medium text-slate-700 hover:text-[#F0582C] transition-colors"
          >
            NBR 5674 & Laudos
          </a>
          <a
            href="#autoridade"
            className="text-sm font-medium text-slate-700 hover:text-[#F0582C] transition-colors"
          >
            Engenharia Condominial
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-slate-700 hover:text-[#F0582C] transition-colors"
          >
            Dúvidas Frequentes
          </a>
        </nav>

        {/* Actions CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://admin.bsbengenhariacondominial.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300/80 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Área do Síndico / Gestão
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F0582C] to-[#D44820] px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:brightness-105 transition-all"
          >
            Baixar o App
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
            <a
              href="#recursos"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#F0582C]"
            >
              Recursos do App
            </a>
            <a
              href="#normas"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#F0582C]"
            >
              NBR 5674 & Laudos
            </a>
            <a
              href="#autoridade"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#F0582C]"
            >
              Engenharia Condominial
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#F0582C]"
            >
              Dúvidas Frequentes
            </a>
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="https://admin.bsbengenhariacondominial.com.br"
                className="w-full text-center rounded-xl border border-slate-300 py-2.5 text-sm font-semibold text-slate-800"
              >
                Área do Síndico / Gestão
              </a>
              <a
                href="#download"
                onClick={() => setIsOpen(false)}
                className="w-full text-center rounded-xl bg-[#F0582C] py-2.5 text-sm font-bold text-white shadow-md"
              >
                Baixar Aplicativo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
