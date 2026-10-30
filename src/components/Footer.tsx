"use client";

import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative h-12 w-48 bg-white/5 rounded-xl p-2 inline-block">
              <Image
                src="/brand/logo.png"
                alt="BSB Engenharia Condominial"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engenharia diagnóstica, laudos periciais e gestão predial preventiva
              em conformidade com as normas ABNT. Mais segurança e valorização para o seu patrimônio.
            </p>
            <div className="pt-2">
              <StoreBadges />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="font-bold text-white text-base">Plataforma</h4>
            <ul className="space-y-2.5 text-slate-400">
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
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="https://admin.bsbengenhariacondominial.com.br"
                  className="hover:text-orange-400 transition-colors"
                >
                  Portal Web do Síndico
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-4 text-sm text-slate-400">
            <h4 className="font-bold text-white text-base">Contato & Atendimento</h4>
            <div className="space-y-2.5">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Brasília - DF • Atendimento em todo o Distrito Federal</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <span>contato@bsbengenhariacondominial.com.br</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Empresa credenciada no CREA-DF</span>
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
            <a href="#" className="hover:text-slate-400">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
