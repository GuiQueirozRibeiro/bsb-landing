"use client";

import { MessageCircle } from "lucide-react";

export function WhatsappFloatingButton() {
  const whatsappUrl =
    "https://wa.me/5561999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20aplicativo%20SGP%20Condom%C3%ADnios%20da%20BSB%20Engenharia.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-emerald-500/30 group"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold transition-all duration-300 group-hover:max-w-xs">
        Falar com Especialista
      </span>
    </a>
  );
}
