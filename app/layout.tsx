import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { site } from "../lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = site.url.startsWith("http")
  ? site.url
  : "https://toledo-power-wash.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Glass City Power Wash | Power Washing in Toledo, OH",
    template: "%s | Glass City Power Wash",
  },
  description:
    "Professional power washing in Toledo, Ohio. House washing, driveways, parking lots, dumpster pads, and commercial exterior cleaning. Free estimates. Serving Toledo and Northwest Ohio. Owned by Austin Stickley.",
  keywords: [
    "Glass City Power Wash",
    "Toledo power washing",
    "Toledo power wash",
    "power washing Toledo OH",
    "Toledo pressure washing",
    "house washing Toledo",
    "driveway cleaning Toledo",
    "commercial power washing Toledo",
    "dumpster pad cleaning Toledo",
    "parking lot cleaning Toledo",
    "pressure washing near me Toledo",
    "Glass City power washing",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: "Glass City Power Wash | Power Washing in Toledo, OH",
    description:
      "Professional power washing for homes and businesses in Toledo and Northwest Ohio. Free estimates.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass City Power Wash | Power Washing Toledo OH",
    description: "Professional power washing in Toledo, Ohio. Free estimates.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: site.name,
        description: site.tagline,
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        email: site.email,
        telephone: site.phone || undefined,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toledo",
          addressRegion: "OH",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.6528,
          longitude: -83.5379,
        },
        areaServed: [
          { "@type": "City", name: "Toledo" },
          { "@type": "AdministrativeArea", name: "Lucas County" },
          { "@type": "AdministrativeArea", name: "Northwest Ohio" },
        ],
        founder: { "@type": "Person", name: site.owner },
        knowsAbout: [
          "Power washing",
          "Pressure washing",
          "Soft washing",
          "House washing",
          "Commercial exterior cleaning",
          "Dumpster pad cleaning",
          "Parking lot cleaning",
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "19:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        publisher: { "@id": `${siteUrl}/#business` },
      },
    ],
  };

  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
