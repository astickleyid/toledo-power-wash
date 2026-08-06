import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://toledopowerwash.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toledo Power Wash | Power Washing Toledo OH",
    template: "%s | Toledo Power Wash",
  },
  description:
    "Toledo Power Wash — commercial and residential power washing in Toledo, Ohio. Parking lots, sidewalks, dumpster pads, building exteriors, and house washing. Recurring plans for property managers. Owned by Austin Stickley.",
  keywords: [
    "Toledo power washing",
    "Toledo power wash",
    "Toledo pressure washing",
    "power washing Toledo OH",
    "commercial power washing Toledo",
    "apartment pressure washing Toledo",
    "dumpster pad cleaning Toledo",
    "house washing Toledo",
    "parking lot cleaning Toledo",
  ],
  authors: [{ name: "Austin Stickley" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Toledo Power Wash",
    title: "Toledo Power Wash | Power Washing Toledo OH",
    description:
      "Commercial-first power washing in Toledo, Ohio. Recurring exterior clean for property managers + residential fill.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Toledo Power Wash",
    description:
      "Commercial and residential power washing and soft washing serving Toledo and Northwest Ohio.",
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    telephone: "",
    email: "austin@toledopowerwash.com",
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
    founder: {
      "@type": "Person",
      name: "Austin Stickley",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    knowsAbout: [
      "Power washing",
      "Pressure washing",
      "Soft washing",
      "Commercial exterior cleaning",
      "Dumpster pad cleaning",
      "Parking lot cleaning",
    ],
  };

  return (
    <html lang="en">
      <body>
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
