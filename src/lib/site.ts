export const site = {
  name: "Cota",
  legalName: "Cota Estudio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cota.studio",
  email: "hola@cota.studio",
  phone: "+5491155550101",
  phoneDisplay: "+54 9 11 5555-0101",
  instagram: "https://www.instagram.com/",
  whatsapp:
    "https://wa.me/5491155550101?text=Hola,%20quiero%20hablar%20sobre%20un%20proyecto",
  locality: "Buenos Aires",
  country: "AR",
  locale: "es_AR",
  description:
    "Cota diseña y programa sitios web con alcance, precio y fecha definidos antes de empezar. Landing page USD 350, web multipágina USD 500, pago único.",
  slogan: "Sitios web con medidas exactas.",
} as const;

export const siteUrl = new URL(site.url);
