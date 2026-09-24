import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

export const metadata: Metadata = {
  title: "OMIS — Проектируем цифровую архитектуру бизнеса",
  description:
    "OMIS создаёт корпоративные системы, AI-решения и технологии автоматизации — от анализа процессов до промышленного внедрения. Резидент Astana Hub.",
  keywords: "OMIS, цифровизация, автоматизация, ERP, CRM, AI-агенты, VR-симуляторы, SmartEnergyControl, Казахстан, Astana Hub",
  openGraph: {
    title: "OMIS — Проектируем цифровую архитектуру бизнеса",
    description: "Сначала проектируем. Затем программируем.",
    type: "website",
    locale: "ru_RU",
    url: "https://omis.kz",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OMIS Enterprise Architecture",
  url: "https://omis.kz",
  logo: "https://omis.kz/logo.png",
  description: "Проектирование и внедрение цифровой архитектуры бизнеса, AI-агентов, ERP и VR-решений.",
  founder: {
    "@type": "Person",
    name: "Александр Шанькин",
    jobTitle: "Solution-архитектор, основатель OMIS",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "KZ",
    addressLocality: "Астана / Павлодар",
  },
  award: "Резидент Astana Hub, 50+ авторских прав на программное обеспечение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
