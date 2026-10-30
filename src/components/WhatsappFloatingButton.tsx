"use client";

import { MessageCircle } from "lucide-react";
import { linkWhatsApp } from "./shared";

export function WhatsappFloatingButton() {
  return (
    <a
      href={linkWhatsApp("botao-flutuante")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Engenheiro no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[0_10px_35px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] group"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="text-xs font-black tracking-wide">
        Falar com Engenheiro
      </span>
    </a>
  );
}
