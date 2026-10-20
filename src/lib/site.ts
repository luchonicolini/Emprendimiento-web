export const site = {
  name: "Ahora Web",
  legalName: "Ahora Web Digital",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahorawebdigital.com",
  email: "contacto@ahorawebdigital.com",
  phone: "+5491171187699",
  phoneDisplay: "+54 9 11 7118-7699",
  instagram: "https://www.instagram.com/ahoraweb.ar/",
  whatsapp:
    "https://wa.me/5491171187699?text=Hola,%20quiero%20hablar%20sobre%20un%20proyecto",
  locality: "Buenos Aires",
  country: "AR",
  locale: "es_AR",
  description:
    "Web a medida para que te lleguen consultas: precio y fecha de entrega cerrados antes de empezar. Landing page USD 350 y web multipágina USD 500, pago único, con el dominio a tu nombre.",
  slogan: "Construimos y pautamos para que tu negocio crezca de verdad.",
} as const;

export const siteUrl = new URL(site.url);
