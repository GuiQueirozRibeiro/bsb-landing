import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsbengenhariacondominial.com.br"),
  title: "SGP Condomínios | BSB Engenharia Condominial",
  description:
    "Aplicativo oficial da BSB Engenharia Condominial para síndicos e gestores. Manutenção sob a NBR 5674, laudos com ART, governança com 3 cotações e transparência financeira.",
  openGraph: {
    title: "SGP Condomínios | A engenharia do seu condomínio na palma da mão",
    description:
      "Aplicativo oficial da BSB Engenharia Condominial. Manutenção NBR 5674, governança e laudos técnicos com ART.",
    url: "https://bsbengenhariacondominial.com.br",
    siteName: "BSB Engenharia Condominial",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/brand/logo-oficial.png",
        width: 1200,
        height: 630,
        alt: "BSB Engenharia Condominial - SGP Condomínios",
      },
    ],
  },
  icons: {
    icon: "/brand/logo-oficial.png",
    apple: "/brand/logo-oficial.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F0582C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
