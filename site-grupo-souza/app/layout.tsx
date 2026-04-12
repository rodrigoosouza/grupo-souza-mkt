import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimations } from "@/components/layout/scroll-animations";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { DiagnosticModalProvider } from "@/components/forms/diagnostic-modal";
import { ConsentBanner } from "@/components/layout/consent-banner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://gruposouza.com.br";
const SITE_TITLE = "Grupo Souza MKT — Infraestrutura de Aquisição";
const SITE_DESCRIPTION =
  "Construímos a infraestrutura de aquisição que faz sua empresa crescer com previsibilidade. Tráfego pago, tracking avançado, landing pages, automação e dados.";
const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Grupo Souza MKT",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: "Grupo Souza MKT",
  authors: [{ name: "Rodrigo Souza", url: SITE_URL }],
  creator: "Rodrigo Souza",
  publisher: "Grupo Souza MKT",
  keywords: [
    "growth marketing",
    "tráfego pago",
    "Google Ads",
    "Meta Ads",
    "tracking GTM",
    "GA4",
    "landing pages CRO",
    "automação de marketing",
    "AIEO",
    "GEO",
    "infraestrutura de aquisição",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Grupo Souza MKT",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Grupo Souza MKT — Construímos a infraestrutura de aquisição",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
    creator: "@rodrigosouzadomarketing",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Grupo Souza MKT",
              "url": "https://gruposouza.com.br",
              "description": "Agência de growth marketing e infraestrutura de aquisição. Tráfego pago, tracking avançado, landing pages, automação, CRM, dashboards e AIEO/GEO.",
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Rodrigo Souza",
                "url": "https://gruposouza.com.br/sobre",
                "sameAs": [
                  "https://www.instagram.com/rodrigosouzadomarketing/",
                  "https://www.linkedin.com/in/rodrigosouzamkt"
                ]
              },
              "sameAs": [
                "https://www.instagram.com/gruposouzamkt/",
                "https://wa.me/5519996022561"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-19-99602-2561",
                "contactType": "sales",
                "availableLanguage": "Portuguese"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Brazil"
              },
              "knowsAbout": ["Growth Marketing", "Google Ads", "Meta Ads", "Google Tag Manager", "GA4", "Landing Pages", "CRO", "Marketing Automation", "AIEO", "GEO"]
            }),
          }}
        />
        {/* Background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="stars absolute inset-0" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-950/20 blur-[100px] rounded-full" />
        </div>

        {/* Content */}
        <DiagnosticModalProvider>
          <Navbar />
          <main className="relative z-10 flex-1 pt-[72px]">{children}</main>
          <Footer />
          <ConsentBanner />
          <WhatsAppButton />
          <ScrollAnimations />
        </DiagnosticModalProvider>
      </body>
    </html>
  );
}
