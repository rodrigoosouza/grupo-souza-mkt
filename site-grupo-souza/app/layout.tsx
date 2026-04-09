import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimations } from "@/components/layout/scroll-animations";
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

export const metadata: Metadata = {
  title: {
    default: "Grupo Souza MKT — Infraestrutura de Aquisicao",
    template: "%s | Grupo Souza MKT",
  },
  description:
    "Construimos a maquina de aquisicao que faz sua empresa crescer com previsibilidade. Trafego pago, tracking avancado, landing pages, automacao e dados.",
  metadataBase: new URL("https://gruposouza.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo Souza MKT",
    title: "Grupo Souza MKT — Infraestrutura de Aquisicao",
    description:
      "Do clique ao contrato, com dados em cada etapa. Growth marketing para empresas em crescimento.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
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
        {/* Background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="stars absolute inset-0" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-950/20 blur-[100px] rounded-full" />
        </div>

        {/* Content */}
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
