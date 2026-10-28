// Contenido de Nicolini Design. Todo lo que está acá es reemplazable: marca, contacto,
// precios, trabajos y reseñas. El sitio se arma cambiando este archivo, no los
// componentes.

export const brand = {
  name: "Nicolini Design",
  descriptor: "Estudio de diseño & desarrollo web",
  tagline: "Sitios web con medidas exactas.",
  email: "nicolini.luciano33@gmail.com",
  whatsapp: "https://wa.me/5491131568131",
  whatsappDisplay: "+54 9 11 3156-8131",
  // Vacío = el link de Instagram no se muestra (evita mandar a instagram.com sin perfil).
  instagram: "",
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
  { label: "Precio", value: "USD 200 · 2 cupos disponibles en noviembre" },
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
  "Clientes reales",
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
  tag?: string;
  liveDomain?: string;
}

export const projects: readonly Project[] = [
  // ── Obras de clientes (En producción · Clientes y negocios reales con URL verificable) ──
  {
    name: "CC Electricidad",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Instalaciones eléctricas industriales & obras",
    year: "2025",
    url: "https://ccelectricidad.com.ar",
    img: "/portfolio/ccelectricidad.png",
    tag: "0.38s FCP · Catálogo técnico",
    liveDomain: "ccelectricidad.com.ar",
  },
  {
    name: "RanchApp",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Software ganadero & control de rodeos",
    year: "2025",
    url: "https://www.ranchapp.ar",
    img: "/portfolio/ranchapp-hero.png",
    tag: "PWA · Trazabilidad de hacienda",
    liveDomain: "ranchapp.ar",
  },
  {
    name: "Datero",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Inteligencia comercial B2B & base de datos",
    year: "2025",
    url: "https://www.datero.app",
    img: "/portfolio/datero.png",
    tag: "SaaS analítico · Búsqueda en vivo",
    liveDomain: "datero.app",
  },
  {
    name: "Ecospace Energía",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Energía solar & sustentabilidad técnica",
    year: "2025",
    url: "https://ecospace-energia.vercel.app",
    img: "/portfolio/ecospace.png",
    tag: "Cotizador solar · 100% Mobile",
    liveDomain: "ecospace-energia.vercel.app",
  },
  {
    name: "Estudio Krono",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Arquitectura, plano técnico & obras",
    year: "2025",
    url: "https://estudiokrono.vercel.app",
    img: "/portfolio/estudio-krono.png",
    tag: "Portafolio arquitectura · Carga 0.4s",
    liveDomain: "estudiokrono.vercel.app",
  },
  {
    name: "Graciela Echeverria Rey",
    kind: "produccion",
    category: "Landing page",
    sector: "Escribanía pública & servicios notariales",
    year: "2025",
    url: "https://www.gracielaecheverriarey.com.ar",
    img: "/portfolio/graciela-echeverria.png",
    tag: "Landing institucional · Contacto",
    liveDomain: "gracielaecheverriarey.com.ar",
  },
  {
    name: "Softies Catering",
    kind: "produccion",
    category: "Landing page",
    sector: "Catering boutique & eventos corporativos",
    year: "2025",
    url: "https://softiescatering.com",
    img: "/portfolio/softies.png",
    tag: "Pedidos WhatsApp · Menú online",
    liveDomain: "softiescatering.com",
  },
  {
    name: "Dr. Lucas Rueda",
    kind: "produccion",
    category: "Landing page",
    sector: "Traumatología deportiva & consultorio",
    year: "2025",
    url: "https://lucas-rueda-website.vercel.app",
    img: "/portfolio/lucas-rueda.png",
    tag: "Turnos online · Google Maps",
    liveDomain: "lucas-rueda-website.vercel.app",
  },
  {
    name: "Bruggens Fine Arts",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Galería de arte & enmarcado boutique",
    year: "2025",
    url: "https://bruggens-web-si.vercel.app",
    img: "/portfolio/bruggens.png",
    tag: "Catálogo de obras · Zoom HD",
    liveDomain: "bruggens-web-si.vercel.app",
  },
  {
    name: "Ventura",
    kind: "produccion",
    category: "Landing page",
    sector: "Desarrollo inmobiliario & lotes",
    year: "2025",
    url: "https://landing-ventura.vercel.app",
    img: "/portfolio/ventura-hero.png",
    tag: "Masterplan interactivo · Leads",
    liveDomain: "landing-ventura.vercel.app",
  },
  {
    name: "NDW Gestión Preventiva",
    kind: "produccion",
    category: "Landing page",
    sector: "Seguridad e higiene laboral & B2B",
    year: "2025",
    url: "https://ndwgestionpreventiva.vercel.app",
    img: "/portfolio/ndw.png",
    tag: "Servicios corporativos · Normativa",
    liveDomain: "ndwgestionpreventiva.vercel.app",
  },
  {
    name: "Extramundano",
    kind: "produccion",
    category: "Tienda / Sistema",
    sector: "Joyería de autor & catálogo de diseño",
    year: "2025",
    url: "https://www.extramundano.com.ar",
    img: "/portfolio/extramundano.png",
    tag: "E-commerce · Lookbook editorial",
    liveDomain: "extramundano.com.ar",
  },
  {
    name: "Join Developers",
    kind: "produccion",
    category: "Web multipágina",
    sector: "Reclutamiento tech & talento IT",
    year: "2025",
    url: "https://www.joindevelopers.com",
    img: "/portfolio/joindevelopers.png",
    tag: "Portal de empleo · Filtros IT",
    liveDomain: "joindevelopers.com",
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
    tag: "Laboratorio Nicolini Design · Aurora glass",
  },
  {
    name: "The Aurelian",
    kind: "demo",
    category: "Landing page",
    sector: "Hotel boutique & hospitalidad",
    year: "2026",
    url: "/catalogo/015-art-deco-hotel.html",
    img: "/catalogo/thumbs/015-art-deco-hotel.jpg",
    tag: "Laboratorio Nicolini Design · Art deco",
  },
  {
    name: "Ember & Oak",
    kind: "demo",
    category: "Landing page",
    sector: "Café de especialidad",
    year: "2026",
    url: "/catalogo/035-coffee-roasters.html",
    img: "/catalogo/thumbs/035-coffee-roasters.jpg",
    tag: "Laboratorio Nicolini Design · Tostaduría",
  },
  {
    name: "Rosée",
    kind: "demo",
    category: "Landing page",
    sector: "Perfumería de autor",
    year: "2026",
    url: "/catalogo/082-perfume-rosee.html",
    img: "/catalogo/thumbs/082-perfume-rosee.jpg",
    tag: "Laboratorio Nicolini Design · Editorial",
  },
  {
    name: "Radical Shapes",
    kind: "demo",
    category: "Landing page",
    sector: "Festival de diseño Milano '86",
    year: "2026",
    url: "/catalogo/058-memphis-fest.html",
    img: "/catalogo/thumbs/058-memphis-fest.jpg",
    tag: "Laboratorio Nicolini Design · Memphis style",
  },
  {
    name: "The Last Keepers",
    kind: "demo",
    category: "Web multipágina",
    sector: "Revista editorial & crónicas",
    year: "2026",
    url: "/catalogo/008-lighthouse-longform.html",
    img: "/catalogo/thumbs/008-lighthouse-longform.jpg",
    tag: "Laboratorio Nicolini Design · Longform",
  },
  {
    name: "Monolith",
    kind: "demo",
    category: "Web multipágina",
    sector: "Estudio de arquitectura",
    year: "2026",
    url: "/catalogo/096-concrete-monolith.html",
    img: "/catalogo/thumbs/096-concrete-monolith.jpg",
    tag: "Laboratorio Nicolini Design · Hormigón",
  },
  {
    name: "Casa Lumen",
    kind: "demo",
    category: "Web multipágina",
    sector: "Arquitectura & plano técnico",
    year: "2026",
    url: "/catalogo/056-architectural-blueprint.html",
    img: "/catalogo/thumbs/056-architectural-blueprint.jpg",
    tag: "Laboratorio Nicolini Design · Blueprint",
  },
  {
    name: "Maison Varenne",
    kind: "demo",
    category: "Tienda / Sistema",
    sector: "Alta relojería & catálogo",
    year: "2026",
    url: "/catalogo/024-luxury-watch.html",
    img: "/catalogo/thumbs/024-luxury-watch.jpg",
    tag: "Laboratorio Nicolini Design · Relojería",
  },
  {
    name: "Maison Lierre",
    kind: "demo",
    category: "Web multipágina",
    sector: "Casa botánica de té",
    year: "2026",
    url: "/catalogo/085-art-nouveau-botanicals.html",
    img: "/catalogo/thumbs/085-art-nouveau-botanicals.jpg",
    tag: "Laboratorio Nicolini Design · Art nouveau",
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
      "Excelente servicio. Logramos una página muy bien desarrollada y a un costo muy bueno. Los pacientes consultan y reservan directo sin fricción.",
    name: "Dr. Lucas Rueda",
    role: "Traumatología deportiva · Mendoza",
    verifiedUrl: "https://share.google/RwVYrHUEOp1QmP3vA",
  },
  {
    quote:
      "Captó el espíritu de Softies desde el primer momento. La web quedó publicada en fecha exacta y los pedidos de catering entran directo por WhatsApp.",
    name: "Santiago Hazaña",
    role: "Fundador Softies Catering · Zona Norte",
  },
  {
    quote:
      "Nos hicieron una re linda web. La parte de catálogo y contenido fue clave: llegamos con la idea dispersa y salimos con el lookbook y la tienda totalmente resueltos.",
    name: "ExtraMundano Producciones",
    role: "Joyería de autor & Colecciones · Palermo",
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
