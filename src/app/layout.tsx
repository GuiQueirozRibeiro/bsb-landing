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
  title: "SGP Condomínios",
  description:
    "SGP (Sistema de Gestão Patrimonial) é o aplicativo da BSB Engenharia Condominial para síndicos, gestores e moradores. Manutenção preventiva sob a NBR 5674, laudos com ART no CREA-DF, governança com 3 cotações e transparência financeira.",
  openGraph: {
    title: "SGP Condomínios: Sistema de Gestão Patrimonial",
    description:
      "Aplicativo oficial da BSB Engenharia Condominial. Manutenção NBR 5674, governança e laudos técnicos com ART.",
    url: "https://bsbengenhariacondominial.com.br",
    siteName: "BSB Engenharia Condominial",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "SGP Condomínios - BSB Engenharia Condominial",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
