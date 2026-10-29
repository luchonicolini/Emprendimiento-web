export const site = {
  name: "Nicolini Design",
  legalName: "Nicolini Design — Estudio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nicolini.design",
  email: "nicolini.luciano33@gmail.com",
  phone: "+5491131568131",
  phoneDisplay: "+54 9 11 3156-8131",
  // Completar con el handle real (ej. "https://www.instagram.com/nicolini.design").
  // Mientras esté vacío, el link de Instagram no se renderiza en el sitio.
  instagram: "",
  whatsapp:
    "https://wa.me/5491131568131?text=Hola,%20quiero%20hablar%20sobre%20un%20proyecto",
  locality: "Buenos Aires",
  country: "AR",
  locale: "es_AR",
  description:
    "Nicolini Design diseña y programa sitios web con alcance, precio y fecha definidos antes de empezar. Landing page desde USD 200, web multipágina desde USD 500, pago único. Clientes en USA, Europa y Latinoamérica.",
  slogan: "Sitios web con medidas exactas.",
} as const;

export const siteUrl = new URL(site.url);
