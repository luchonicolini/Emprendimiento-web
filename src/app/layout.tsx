import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "Web a Medida con Precio y Fecha Cerrados";
const ogImage = {
  url: "/og/desarrollo-web.jpg",
  width: 1200,
  height: 630,
  alt: "Ahora Web - Tu web a medida con precio y fecha de entrega cerrados antes de empezar",
};

export const viewport: Viewport = {
  themeColor: "#080c18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${title} | ${site.name}`,
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
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description:
      "Precio y fecha de entrega cerrados antes de empezar. Landing page USD 350, multipágina USD 500, pago único.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${site.name}`,
    description:
      "Precio y fecha de entrega cerrados antes de empezar. Landing page USD 350, multipágina USD 500, pago único.",
    images: [ogImage.url],
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
      logo: `${site.url}/logo-white.png`,
      image: `${site.url}/og/desarrollo-web.jpg`,
      description:
        "Agencia digital que desarrolla webs, aplicaciones y sistemas a medida, y gestiona campañas de Meta Ads junto con producción de contenido publicitario.",
      slogan: site.slogan,
      knowsAbout: [
        "Desarrollo de software a medida",
        "Desarrollo web full-stack",
        "Aplicaciones web",
        "Sistemas con base de datos",
        "Meta Ads",
        "Producción de contenido publicitario",
      ],
      sameAs: [site.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        email: site.email,
        availableLanguage: ["es"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressCountry: site.country,
      },
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
      className={`${plusJakarta.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#080c18] text-slate-100 selection:bg-[#009688]/30 selection:text-white">
        {/* ScrollReveal renders with inline opacity:0. Without JavaScript
            those inline styles would hide the whole page, so force the final
            state when scripting is unavailable. */}
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
      </body>
    </html>
  );
}
