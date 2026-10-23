// Contenido de Cota. Todo lo que está acá es reemplazable: marca, contacto,
// precios, trabajos y reseñas. El sitio se arma cambiando este archivo, no los
// componentes.

export const brand = {
  name: "Nicolini Design",
  descriptor: "Estudio de diseño & desarrollo web",
  tagline: "Sitios web con medidas exactas.",
  email: "hola@cota.studio",
  whatsapp: "https://wa.me/5491131568131",
  whatsappDisplay: "+54 9 11 3156-8131",
  instagram: "https://www.instagram.com/",
  location: "Buenos Aires, AR",
  coordinates: "34°36′S 58°22′W",
  availability: "Agenda abierta · noviembre 2026",
} as const;

export const nav = [
  { label: "Alcance", href: "#alcance" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Presupuesto", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export const projectTypes = [
  "Landing page",
  "Web multipágina",
  "Tienda online",
  "Sistema a medida",
  "No sé todavía",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const heroSheet = [
  { label: "Alcance", value: "Landing · multipágina · tienda · sistema" },
  { label: "Plazo", value: "7 a 10 días hábiles" },
  { label: "Precio", value: "Promo USD 200 (antes USD 350)" },
  { label: "Seña", value: "25% para arrancar" },
  { label: "Entrega", value: "Dominio y accesos a tu nombre" },
] as const;

export const scope = [
  {
    index: "01",
    title: "Dirección y diseño",
    body: "Definimos la estructura, la jerarquía y el tono antes de abrir el editor. Una sola propuesta, no tres caminos para elegir.",
    detail: "Wireframe · sistema visual",
  },
  {
    index: "02",
    title: "Desarrollo a medida",
    body: "Código propio, sin plantillas pesadas. Tu web abre en menos de 1 segundo en el celular del cliente, evitando que se vaya antes de contactarte.",
    detail: "Next.js · carga en < 1s · SEO técnico",
  },
  {
    index: "03",
    title: "Contenido y textos",
    body: "Escribimos con vos lo que el visitante necesita leer para decidir. Las fotos las resolvemos en el brief, no a última hora.",
    detail: "Copy · fotografía · orden de secciones",
  },
  {
    index: "04",
    title: "Medición y pauta",
    body: "Dejamos la analítica y los eventos de conversión funcionando. Si además pautás, la web y los anuncios hablan el mismo idioma.",
    detail: "Analytics · píxel · eventos",
  },
] as const;

export const projectCategories = [
  "Todos",
  "Landing page",
  "Web multipágina",
  "Tienda / Sistema",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectFilters = [
  "Todos",
  "Webs hechas",
  "Demos",
  "Landing page",
  "Web multipágina",
  "Tienda / Sistema",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type ProjectKind = "produccion" | "demo";

export interface Project {
  name: string;
  kind: ProjectKind;
  category: Exclude<ProjectCategory, "Todos">;
  sector: string;
  year: string;
  url: string;
  img: string;
}

export const projects = [
  // ── Webs hechas (En producción · Clientes y negocios reales) ──
  {
    name: "NSC Prestige",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Mecánica de alta gama & autos de lujo",
    year: "2026",
    url: "https://www.nsc.com.au/",
    img: "/portfolio/local-services/nsc.webp",
  },
  {
    name: "Nice Car Company",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Conversión eléctrica & clásicos",
    year: "2026",
    url: "https://www.nice.car/",
    img: "/portfolio/local-services/nice-car.webp",
  },
  {
    name: "CT Moving & Storage",
    kind: "produccion",
    category: "Landing page",
    sector: "Mudanzas & logística residencial",
    year: "2026",
    url: "https://www.ctmovingandstorage.com",
    img: "/portfolio/local-services/ct-moving.webp",
  },
  {
    name: "Nature's Elite",
    kind: "produccion",
    category: "Landing page",
    sector: "Paisajismo & diseño exterior",
    year: "2026",
    url: "https://www.natureselitelandscape.com/",
    img: "/portfolio/local-services/natures-elite.webp",
  },
  {
    name: "CleanSpace Co",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Servicios corporativos con cotizador",
    year: "2026",
    url: "https://www.cleanspaceco.com/",
    img: "/portfolio/local-services/cleanspace.webp",
  },
  {
    name: "By Miles",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Seguro vehicular por uso & app",
    year: "2026",
    url: "https://www.bymiles.co.uk/",
    img: "/portfolio/local-services/by-miles.webp",
  },

  // ── Demos interactivas (Laboratorio de diseño y prototipos 1:1) ──
  {
    name: "Stillwater",
    kind: "demo",
    category: "Landing page",
    sector: "Salud & meditación",
    year: "2026",
    url: "/catalogo/001-aurora-glass.html",
    img: "/catalogo/thumbs/001-aurora-glass.jpg",
  },
  {
    name: "The Aurelian",
    kind: "demo",
    category: "Landing page",
    sector: "Hotel boutique & hospitalidad",
    year: "2026",
    url: "/catalogo/015-art-deco-hotel.html",
    img: "/catalogo/thumbs/015-art-deco-hotel.jpg",
  },
  {
    name: "Ember & Oak",
    kind: "demo",
    category: "Landing page",
    sector: "Café de especialidad",
    year: "2026",
    url: "/catalogo/035-coffee-roasters.html",
    img: "/catalogo/thumbs/035-coffee-roasters.jpg",
  },
  {
    name: "Rosée",
    kind: "demo",
    category: "Landing page",
    sector: "Perfumería de autor",
    year: "2026",
    url: "/catalogo/082-perfume-rosee.html",
    img: "/catalogo/thumbs/082-perfume-rosee.jpg",
  },
  {
    name: "Mercury Studio",
    kind: "demo",
    category: "Landing page",
    sector: "Estudio de audio generativo",
    year: "2026",
    url: "/catalogo/010-liquid-mercury.html",
    img: "/catalogo/thumbs/010-liquid-mercury.jpg",
  },
  {
    name: "Radical Shapes",
    kind: "demo",
    category: "Landing page",
    sector: "Festival de diseño Milano '86",
    year: "2026",
    url: "/catalogo/058-memphis-fest.html",
    img: "/catalogo/thumbs/058-memphis-fest.jpg",
  },
  {
    name: "The Last Keepers",
    kind: "demo",
    category: "Web multipágina",
    sector: "Revista editorial & crónicas",
    year: "2026",
    url: "/catalogo/008-lighthouse-longform.html",
    img: "/catalogo/thumbs/008-lighthouse-longform.jpg",
  },
  {
    name: "Mira Okafor",
    kind: "demo",
    category: "Web multipágina",
    sector: "Diseño de producto & bento",
    year: "2026",
    url: "/catalogo/068-bento-portfolio.html",
    img: "/catalogo/thumbs/068-bento-portfolio.jpg",
  },
  {
    name: "Monolith",
    kind: "demo",
    category: "Web multipágina",
    sector: "Estudio de arquitectura",
    year: "2026",
    url: "/catalogo/096-concrete-monolith.html",
    img: "/catalogo/thumbs/096-concrete-monolith.jpg",
  },
  {
    name: "Maison Lierre",
    kind: "demo",
    category: "Web multipágina",
    sector: "Casa botánica de té",
    year: "2026",
    url: "/catalogo/085-art-nouveau-botanicals.html",
    img: "/catalogo/thumbs/085-art-nouveau-botanicals.jpg",
  },
  {
    name: "Juno Studio",
    kind: "demo",
    category: "Web multipágina",
    sector: "Ilustración editorial",
    year: "2026",
    url: "/catalogo/087-sketchbook-portfolio.html",
    img: "/catalogo/thumbs/087-sketchbook-portfolio.jpg",
  },
  {
    name: "Nonna Lucia",
    kind: "demo",
    category: "Web multipágina",
    sector: "Gastronomía & receta interactiva",
    year: "2026",
    url: "/catalogo/040-lemon-tart-recipe.html",
    img: "/catalogo/thumbs/040-lemon-tart-recipe.jpg",
  },
  {
    name: "Casa Lumen",
    kind: "demo",
    category: "Web multipágina",
    sector: "Arquitectura & plano técnico",
    year: "2026",
    url: "/catalogo/056-architectural-blueprint.html",
    img: "/catalogo/thumbs/056-architectural-blueprint.jpg",
  },
  {
    name: "Maison Varenne",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Alta relojería & catálogo",
    year: "2026",
    url: "/catalogo/024-luxury-watch.html",
    img: "/catalogo/thumbs/024-luxury-watch.jpg",
  },
  {
    name: "Nimbus",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Monitoreo meteorológico",
    year: "2026",
    url: "/catalogo/012-nimbus-weather.html",
    img: "/catalogo/thumbs/012-nimbus-weather.jpg",
  },
  {
    name: "Chroma Studio",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Sistema de diseño & paletas",
    year: "2026",
    url: "/catalogo/071-palette-studio.html",
    img: "/catalogo/thumbs/071-palette-studio.jpg",
  },
  {
    name: "Ares VII",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Consola de telemetría espacial",
    year: "2026",
    url: "/catalogo/076-mission-control.html",
    img: "/catalogo/thumbs/076-mission-control.jpg",
  },
  {
    name: "Elementa",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Base interactiva de elementos",
    year: "2026",
    url: "/catalogo/028-periodic-table.html",
    img: "/catalogo/thumbs/028-periodic-table.jpg",
  },
  {
    name: "Atelier Noire",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Moda & lookbook de colección",
    year: "2026",
    url: "/catalogo/043-fashion-lookbook.html",
    img: "/catalogo/thumbs/043-fashion-lookbook.jpg",
  },
] as const;

export const phases = [
  {
    index: "01",
    title: "Elegís qué necesitás, con el precio a la vista",
    body: "Completás el formulario de abajo. Lleva menos de un minuto.",
  },
  {
    index: "02",
    title: "Cerramos precio y fecha de entrega",
    body: "Seguimos por WhatsApp. Te pasamos un brief de 10 minutos sobre tu negocio y con eso te confirmamos el número final y el día de entrega. Sin reuniones de venta.",
  },
  {
    index: "03",
    title: "Revisás la web y pedís cambios",
    body: "La arma el equipo y te la manda para que la navegues desde el celular. La ajustamos con vos hasta que la apruebes.",
  },
  {
    index: "04",
    title: "La publicamos a tu nombre",
    body: "Conectamos tu dominio y te damos todos los accesos. Una landing page queda online en 7 a 10 días hábiles desde el brief.",
  },
] as const;

export const pricing = [
  {
    plan: "Landing page",
    type: "Landing page",
    fit: "Oficios y profesionales que necesitan una sola página para recibir consultas.",
    includes: "Diseño, desarrollo, WhatsApp, formulario, analítica y publicación.",
    pricePrefix: "",
    price: "USD 200",
    term: "7–10 días",
    recommended: false,
  },
  {
    plan: "Web multipágina",
    type: "Web multipágina",
    fit: "Estudios y empresas con varios servicios que compiten por búsquedas distintas.",
    includes: "Una página por servicio, SEO por sección, medición y entrega documentada.",
    pricePrefix: "",
    price: "USD 500",
    term: "10–15 días",
    recommended: true,
  },
  {
    plan: "Tienda online",
    type: "Tienda online",
    fit: "Marcas que venden con carrito, envíos y medios de pago.",
    includes: "Tienda Nube o Shopify, carga inicial de hasta 30 productos y capacitación.",
    pricePrefix: "Desde",
    price: "USD 650",
    term: "15–20 días",
    recommended: false,
  },
] as const;

export const customSystem = {
  plan: "Sistema a medida",
  type: "Sistema a medida",
  fit: "Operaciones con usuarios, turnos, pedidos o paneles propios.",
  includes: "Relevamiento, base de datos, roles y panel de administración.",
  pricePrefix: "Desde",
  price: "USD 1.500",
  term: "A definir",
} as const;

export const testimonials = [
  {
    quote:
      "Entendió el negocio antes de abrir el editor. La web quedó publicada el día que dijo y no volvimos a tocar el presupuesto.",
    name: "Lucas R.",
    role: "Odontología · CABA",
  },
  {
    quote:
      "Pedí tres presupuestos y fue el único que puso por escrito qué entraba y qué no. Eso solo ya me ahorró semanas.",
    name: "Sofía M.",
    role: "Catering · Zona norte",
  },
  {
    quote:
      "La parte que más me sirvió fue la de contenido: llegué con la idea y salí con los textos resueltos.",
    name: "Diego E.",
    role: "Producción audiovisual",
  },
] as const;

export const faqs = [
  {
    q: "¿Cómo se paga?",
    a: "25% de seña para reservar la semana y el resto cuando la web está publicada y aprobada. En pesos al cambio del día o en dólares, con factura. Nunca el 100% por adelantado.",
  },
  {
    q: "¿Qué pasa si cambio el alcance a mitad de obra?",
    a: "Se cotiza aparte y se suma al final, siempre por escrito antes de hacerlo. El precio original no se mueve por cambios que no pediste.",
  },
  {
    q: "¿El dominio y los accesos quedan a mi nombre?",
    a: "Sí. El dominio lo comprás vos con nuestra guía y te entregamos todos los accesos. Si mañana seguís con otro equipo, te llevás todo.",
  },
  {
    q: "¿Por qué no hacerla con Wix o con una IA?",
    a: "Si estás validando una idea o tenés menos de USD 350, es una alternativa rápida. La diferencia aparece cuando necesitás que la web facture: un sitio lento pierde la mitad de los visitantes antes de cargar, las plantillas genéricas no posicionan bien en Google y no tienen un recorrido pensado para que el cliente termine escribiéndote por WhatsApp.",
  },
  {
    q: "¿Quién escribe los textos y consigue las fotos?",
    a: "Los textos los escribimos nosotros a partir del brief. Las fotos, si tenés, mejor; si no, armamos una lista de lo que hace falta y lo resolvemos juntos.",
  },
  {
    q: "¿Qué necesitás de mí para arrancar?",
    a: "Una hora para el brief, el logo si existe, y la persona que decide. Todo lo demás lo coordinamos por WhatsApp.",
  },
] as const;
