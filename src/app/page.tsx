import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NumerosImpacto } from "@/components/NumerosImpacto";
import { RecursosComModal } from "@/components/RecursosComModal";
import { ComparativoSection } from "@/components/ComparativoSection";
import { EngenhariaSection } from "@/components/EngenhariaSection";
import { EmpresaEDiogenesSection } from "@/components/EmpresaEDiogenesSection";
import { FaixaChamada } from "@/components/FaixaChamada";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#F0582C] selection:text-white">
      <Navbar />
      <HeroSection />
      <NumerosImpacto />
      <RecursosComModal />
      <div id="comparativo">
        <ComparativoSection />
      </div>
      <EngenhariaSection />
      <EmpresaEDiogenesSection />
      <FaixaChamada />
      <FaqSection />
      <Footer />
      <WhatsappFloatingButton />
    </main>
  );
}
