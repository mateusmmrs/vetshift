import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetShift — Veterinários Plantonistas em Minutos",
  description: "Conectamos clínicas veterinárias a profissionais plantonistas qualificados disponíveis na sua região. Marketplace de plantões veterinários em Salvador-BA.",
  keywords: ["veterinário", "plantonista", "plantão veterinário", "Salvador", "Bahia", "clínica veterinária"],
  openGraph: {
    title: "VetShift — Veterinários Plantonistas em Minutos",
    description: "O Uber dos veterinários plantonistas. Encontre profissionais qualificados para sua clínica em minutos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
