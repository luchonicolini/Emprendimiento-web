// Contenido de Cota. Todo lo que está acá es reemplazable: marca, contacto,
// precios, trabajos y reseñas. El sitio se arma cambiando este archivo, no los
// componentes.

export const brand = {
  name: "Cota",
  descriptor: "Estudio de desarrollo web",
  tagline: "Sitios web con medidas exactas.",
  email: "hola@cota.studio",
  whatsapp: "https://wa.me/5491155550101",
  whatsappDisplay: "+54 9 11 5555-0101",
  instagram: "https://www.instagram.com/",
  location: "Buenos Aires, AR",
  coordinates: "34°36′S 58°22′W",
  availability: "Agenda abierta · noviembre 2026",
} as const;

export const nav = [
  { label: "Alcance", href: "#alcance" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export const heroSheet = [
  { label: "Alcance", value: "Landing · multipágina · tienda · sistema" },
  { label: "Plazo", value: "7 a 10 días hábiles" },
  { label: "Precio", value: "Desde USD 350" },
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
    body: "Código propio, sin plantillas pesadas. Carga rápida, SEO técnico desde el primer día y un panel simple para editar lo que necesites.",
    detail: "Next.js · animación · integraciones",
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

export const projects = [
  {
    name: "Ventura",
    sector: "Software a medida",
    year: "2026",
    url: "https://landing-ventura.vercel.app",
    img: "/portfolio/ventura-hero.png",
  },
  {
    name: "RanchApp",
    sector: "Gestión ganadera",
    year: "2025",
    url: "https://www.ranchapp.ar",
    img: "/portfolio/ranchapp-hero.png",
  },
  {
    name: "Datero",
    sector: "Producto digital",
    year: "2025",
    url: "https://www.datero.app",
    img: "/portfolio/datero.png",
  },
  {
    name: "Ecospace",
    sector: "Energía para empresas",
    year: "2025",
    url: "https://ecospace-energia.vercel.app",
    img: "/portfolio/ecospace.png",
  },
  {
    name: "Join Developers",
    sector: "Desarrolladora inmobiliaria",
    year: "2024",
    url: "https://www.joindevelopers.com",
    img: "/portfolio/joindevelopers.png",
  },
  {
    name: "Softies",
    sector: "Catering y eventos",
    year: "2024",
    url: "https://softiescatering.com",
    img: "/portfolio/softies.png",
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
    type: "Landing page",
    fit: "Oficios y profesionales que necesitan una sola página para recibir consultas.",
    includes: "Diseño, desarrollo, WhatsApp, formulario, analítica y publicación.",
    price: "USD 350",
    term: "7–10 días",
  },
  {
    type: "Web multipágina",
    fit: "Estudios y empresas con varios servicios que compiten por búsquedas distintas.",
    includes: "Una página por servicio, SEO por sección, medición y entrega documentada.",
    price: "USD 500",
    term: "10–15 días",
  },
  {
    type: "Tienda online",
    fit: "Marcas que venden con carrito, envíos y medios de pago.",
    includes: "Tienda Nube o Shopify, carga inicial de hasta 30 productos y capacitación.",
    price: "Desde USD 650",
    term: "15–20 días",
  },
  {
    type: "Sistema a medida",
    fit: "Operaciones con usuarios, turnos, pedidos o paneles propios.",
    includes: "Relevamiento, base de datos, roles y panel de administración.",
    price: "Desde USD 1.500",
    term: "A definir",
  },
] as const;

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
    a: "Si estás validando una idea o tenés menos de USD 350, es una buena decisión. La diferencia aparece cuando la web tiene que traer clientes: carga, SEO, medición y una estructura pensada para que el visitante escriba.",
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
