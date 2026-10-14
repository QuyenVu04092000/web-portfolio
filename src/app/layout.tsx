import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { LangProvider } from "@/i18n/LangContext";
import { PageTransition } from "@/components/PageTransition";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const siteUrl = "https://quyenvu04092000.github.io/web-portfolio";

export const metadata: Metadata = {
  title: "Vu Duc Quyen (Buck) · Frontend Engineer",
  description:
    "Frontend Engineer with 5+ years building React / Next.js + TypeScript applications. Currently working on frontend architecture for WeTax, a high-scale e-invoicing platform at Webcash Vietnam. Open to full-time remote roles.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Vu Duc Quyen (Buck) · Frontend Engineer",
    description:
      "Frontend Engineer with 5+ years in React, Next.js & TypeScript. Fintech & e-invoicing specialist. Open to remote full-time roles.",
    url: siteUrl,
    siteName: "Vu Duc Quyen Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vu Duc Quyen (Buck) · Frontend Engineer",
    description:
      "Frontend Engineer — React, Next.js, TypeScript. Open to remote full-time roles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vu Duc Quyen",
  alternateName: "Buck",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer with 5+ years building React / Next.js + TypeScript applications, specialising in fintech and e-invoicing platforms.",
  url: siteUrl,
  email: "vuquyen.04092000@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  sameAs: ["https://www.linkedin.com/in/quyenvu040900/"],
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Engineering", "Performance Optimisation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans mx-auto max-w-[1440px]"
        )}
      >
        <LangProvider>
          <PageTransition>{children}</PageTransition>
        </LangProvider>
      </body>
    </html>
  );
}
