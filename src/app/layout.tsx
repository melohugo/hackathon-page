import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackathon PMI-DF 2026",
  description: "Hackathon oficial do Student Club PMI-DF - Inovação e Gerenciamento de Projetos em Brasília.",
  icons: {
    icon: "/assets/7_PMI.svg",
    shortcut: "/assets/7_PMI.svg",
    apple: "/assets/7_PMI.svg",
  },
  verification: {
    google: "6XXM6dXFdoNXt7dntU7f2v_5SrVIDe-czoKgL2N-ISQ",
  },
  openGraph: {
    title: "Hackathon PMI-DF 2026",
    description: "Inscreva sua equipe no maior evento de inovação e gerenciamento de projetos do Student Club PMI-DF em Brasília.",
    url: "https://hackathon.pmidf.org",
    siteName: "Hackathon PMI-DF 2026",
    images: [
      {
        url: "https://hackathon.pmidf.org/assets/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Hackathon PMI-DF 2026",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon PMI-DF 2026",
    description: "Inscreva sua equipe no maior evento de inovação e gerenciamento de projetos do Student Club PMI-DF em Brasília.",
    images: ["https://hackathon.pmidf.org/assets/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Hackathon Student Club PMI-DF 2026",
    "startDate": "2026-09-11T19:00:00-03:00",
    "endDate": "2026-09-12T18:00:00-03:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Auditório SEPN 515",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "SEPN 515, Bloco A, Asa Norte",
        "addressLocality": "Brasília",
        "addressRegion": "DF",
        "postalCode": "70770-521",
        "addressCountry": "BR"
      }
    },
    "image": [
      "https://hackathon.pmidf.org/assets/logo-full.png"
    ],
    "description": "Hackathon oficial do Student Club PMI-DF - Inovação e Gerenciamento de Projetos em Brasília.",
    "organizer": {
      "@type": "Organization",
      "name": "Student Club PMI-DF",
      "url": "https://hackathon.pmidf.org"
    }
  };

  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
