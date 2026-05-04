import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antartidalabs.com"),
  title: {
    default: "Antartida Labs — Inteligencia Artificial del Sur",
    template: "%s | Antartida Labs",
  },
  description:
    "Antartida Labs ofrece Agentes de Inteligencia Artificial como servicio (AAAS). Recepcionista Digital, QA Agent y Refactoring Agent para automatizar y optimizar los procesos de tu empresa.",
  keywords: [
    "inteligencia artificial",
    "agentes IA",
    "AAAS",
    "automatización",
    "recepcionista digital",
    "QA agent",
    "refactoring agent",
    "Argentina",
    "Latinoamérica",
    "Antartida Labs",
  ],
  authors: [{ name: "Antartida Labs", url: "https://antartidalabs.com" }],
  creator: "Antartida Labs",
  publisher: "Antartida Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://antartidalabs.com",
    siteName: "Antartida Labs",
    title: "Antartida Labs — Inteligencia Artificial del Sur",
    description:
      "Agentes de IA listos para operar en tu empresa. Recepcionista Digital, QA Agent y Refactoring Agent. Modelo AAAS — Agent As A Service.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antartida Labs — Inteligencia Artificial del Sur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antartida Labs — Inteligencia Artificial del Sur",
    description:
      "Agentes de IA listos para operar en tu empresa. Modelo AAAS — Agent As A Service.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://antartidalabs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/pinguino.png" />
      </head>
      <body className="font-body bg-arctic-navy text-frost-white antialiased">
        {children}
      </body>
    </html>
  );
}
