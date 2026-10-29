import type { Metadata, Viewport } from "next";
import { Figtree, Martian_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";
import "./cota.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "500", "700"],
});

const title = "Nicolini Design — Sitios web con medidas exactas";

export const viewport: Viewport = {
  themeColor: "#e9e6dd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  keywords: [
    "diseño web argentina",
    "desarrollo web buenos aires",
    "landing page precio fijo",
    "páginas web para profesionales",
    "desarrollo web a medida",
    "nicolini design",
    "diseño web responsive",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.legalName,
      url: site.url,
      description: site.description,
      slogan: site.slogan,
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "es-AR",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${figtree.variable} ${martian.variable} antialiased`}
    >
      <body className="proto-root min-h-screen">
        {/* Reveal hides content with inline styles. Without JavaScript those
            styles would hide the page, so force the final state. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  );
}
