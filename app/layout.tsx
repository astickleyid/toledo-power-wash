import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { site as biz } from "../lib/site";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const siteUrl = biz.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.startsWith("http") ? siteUrl : "https://toledo-power-wash.vercel.app"),
  title: {
    default: "Toledo Power Wash | Power Washing in Toledo, OH",
    template: "%s | Toledo Power Wash",
  },
  description:
    "Local power washing in Toledo, Ohio. Commercial lots, dumpster pads, sidewalks, buildings — plus homes. Owner Austin Stickley. Free quotes. Recurring plans for property managers.",
  keywords: [
    "Toledo power washing",
    "Toledo power wash",
    "Toledo pressure washing",
    "power washing Toledo OH",
    "commercial power washing Toledo",
    "dumpster pad cleaning Toledo",
    "house washing Toledo",
  ],
  authors: [{ name: "Austin Stickley" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Toledo Power Wash",
    title: "Toledo Power Wash | Power Washing Toledo OH",
    description: "Commercial-first power washing. Toledo & NW Ohio. Free quotes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toledo Power Wash",
    description: "Commercial and residential power washing in Toledo, Ohio.",
    url: siteUrl,
    telephone: biz.phone || undefined,
    email: biz.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toledo",
      addressRegion: "OH",
      addressCountry: "US",
    },
    founder: { "@type": "Person", name: "Austin Stickley" },
    areaServed: ["Toledo", "Sylvania", "Maumee", "Perrysburg", "NW Ohio"],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="stripe" aria-hidden />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
