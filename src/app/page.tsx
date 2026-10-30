import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { RecursosSection } from "@/components/RecursosSection";
import { EngenhariaSection } from "@/components/EngenhariaSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <RecursosSection />
      <EngenhariaSection />
      <FaqSection />
      <Footer />
      <WhatsappFloatingButton />
    </main>
  );
}
