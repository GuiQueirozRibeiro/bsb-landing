"use client";

import React from "react";
import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import { ShieldCheck, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { LINK_ADMIN, WHATSAPP_NUMERO, linkWhatsApp } from "./shared";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-16 w-56 p-2 inline-block">
              <Image
                src="/brand/logo.png"
                alt="BSB Engenharia Condominial"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engenharia diagnóstica, laudos periciais e gestão predial preventiva
              em estrita conformidade com as normas ABNT. Resguardo legal e segurança
              para síndicos, conselheiros e condôminos em Brasília.
            </p>
            <div className="pt-1">
              <StoreBadges />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="font-bold text-white text-base">Plataforma</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>
                <a href="#recursos" className="hover:text-orange-400 transition-colors">
                  Recursos do Aplicativo
                </a>
              </li>
              <li>
                <a href="#normas" className="hover:text-orange-400 transition-colors">
                  Manutenção NBR 5674
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-orange-400 transition-colors">
                  Comparativo de Governança
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href={LINK_ADMIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
                >
                  Portal do Síndico / Gestão →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-4 text-sm text-slate-400">
            <h4 className="font-bold text-white text-base">BSB Engenharia Condominial</h4>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Setor Central C 1, 1/12 - Sala 429, Taguatinga Centro, Brasília - DF</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <span>(61) 99698-9009</span>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={linkWhatsApp("footer")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Atendimento via WhatsApp Comercial
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Empresa Homologada no CREA-DF</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} BSB Engenharia Condominial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="/privacidade" className="hover:text-slate-400">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
