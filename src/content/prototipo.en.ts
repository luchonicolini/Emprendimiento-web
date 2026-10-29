// Nicolini Design — English Content Hub
// Precision Web Design & Engineering Studio

export const brandEn = {
  name: "Nicolini Design",
  descriptor: "International Web Design & Engineering Studio",
  tagline: "Exact-fit websites for modern businesses.",
  email: "nicolini.luciano33@gmail.com",
  whatsapp: "https://wa.me/5491131568131",
  whatsappDisplay: "+54 9 11 3156-8131",
  instagram: "",
  location: "Global Remote · Buenos Aires HQ (UTC-3)",
  coordinates: "34°36′S 58°22′W",
  availability: "Open for bookings · Clients in US, Europe & Latam",
} as const;

export const navEn = [
  { label: "Scope", href: "#scope" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const projectTypesEn = [
  "Landing page",
  "Multi-page website",
  "Online store / E-commerce",
  "Custom web system",
  "Not sure yet",
] as const;

export type ProjectTypeEn = (typeof projectTypesEn)[number];

export const heroSheetEn = [
  { label: "Scope", value: "Landing · Corporate web · Store · Custom system" },
  { label: "Turnaround", value: "7 to 10 business days" },
  { label: "Price", value: "USD 200 · 2 slots left in November" },
  { label: "Deposit", value: "25% to start · Balance upon approved delivery" },
  { label: "Handover", value: "Custom domain (.com) and 100% credentials in your name" },
] as const;

export const scopeEn = [
  {
    index: "01",
    title: "Visual Direction & Architecture",
    body: "We structure the hierarchy, narrative flow, and user journey before opening the code editor. A single, decisive proposal crafted for conversion.",
    detail: "Wireframe · Visual system · Typography",
  },
  {
    index: "02",
    title: "Custom Frontend Engineering",
    body: "Tailor-made code in Next.js & React with zero bloated builders. Your site loads in under 1 second globally on 4G/5G, keeping visitors engaged.",
    detail: "Next.js · Sub-second load · Global CDN · Clean SEO",
  },
  {
    index: "03",
    title: "Conversion Copywriting",
    body: "We craft clear, high-impact copy that answers client objections and drives action. Photography and assets are resolved during the brief.",
    detail: "Copywriting · Asset curation · Section sequencing",
  },
  {
    index: "04",
    title: "Tracking & Global Performance",
    body: "We configure privacy-first analytics and conversion tracking out of the box. Whether running ads or organic traffic, your funnel is measurable.",
    detail: "Analytics · Meta Pixel · Conversion events",
  },
] as const;

export const projectCategoriesEn = [
  "All",
  "Landing page",
  "Multi-page website",
  "Store / System",
] as const;

export type ProjectCategoryEn = (typeof projectCategoriesEn)[number];

export const phasesEn = [
  {
    index: "01",
    title: "Select your scope with upfront pricing",
    body: "Fill out the quick project brief below. Takes less than a minute.",
  },
  {
    index: "02",
    title: "Lock in price, schedule, and kickoff",
    body: "We coordinate via WhatsApp or a 15-minute video call. We clarify your goals and lock in the final quote and exact delivery date. No pushy sales calls.",
  },
  {
    index: "03",
    title: "Review interactive preview & request revisions",
    body: "Our studio builds the prototype and sends a live staging link. You review it on mobile and desktop, and we polish it together until approved.",
  },
  {
    index: "04",
    title: "Global launch under your credentials",
    body: "We connect your custom domain (.com), configure SSL, and hand over all credentials. A landing page goes live in 7 to 10 business days.",
  },
] as const;

export const pricingEn = [
  {
    plan: "Landing page",
    type: "Landing page",
    fit: "Professionals, agencies, and product launches that need a high-converting one-page site.",
    includes: "Bespoke design, frontend engineering, WhatsApp integration, contact form, analytics, and global deployment.",
    pricePrefix: "Fixed rate",
    price: "USD 200",
    term: "7–10 days",
    recommended: false,
  },
  {
    plan: "Multi-page website",
    type: "Multi-page website",
    fit: "Studios and companies with multiple offerings competing for distinct Google search queries.",
    includes: "Dedicated page per service, section-level SEO, analytics, CMS ready, and documented handover.",
    pricePrefix: "Fixed rate",
    price: "USD 500",
    term: "10–15 days",
    recommended: true,
  },
  {
    plan: "Online store",
    type: "Online store",
    fit: "Brands selling products with checkout, global payment gateways, and automated shipping.",
    includes: "Shopify or WooCommerce setup, global payment processors (Stripe, PayPal, Cards), initial 30 products catalog.",
    pricePrefix: "Starting at",
    price: "USD 650",
    term: "15–20 days",
    recommended: false,
  },
] as const;

export const customSystemEn = {
  tag: "CUSTOM ENGINEERING // BESPOKE",
  plan: "Custom web app",
  type: "Custom web app",
  fit: "Operations requiring user portals, booking engines, client dashboards, or bespoke databases.",
  includes: "Architecture discovery, database schema, role-based access, and administration panel.",
  pricePrefix: "Starting at",
  price: "USD 1,500",
  term: "Custom scope",
} as const;

export const testimonialsEn = [
  {
    quote:
      "Outstanding service. We achieved a clean, robust website at an incredible price point. Patients book consultations directly with zero friction.",
    name: "Dr. Lucas Rueda",
    role: "Sports Medicine Specialist",
    verifiedUrl: "https://share.google/RwVYrHUEOp1QmP3vA",
  },
  {
    quote:
      "Captured the exact spirit of Softies from day one. The site launched right on schedule and catering inquiries now flow directly to WhatsApp.",
    name: "Santiago Hazaña",
    role: "Founder, Softies Catering",
  },
  {
    quote:
      "They delivered a stunning lookbook and digital storefront. We arrived with a loose idea and walked away with a fully resolved editorial ecommerce site.",
    name: "ExtraMundano Studio",
    role: "Artisanal Jewelry & Collections",
  },
] as const;

export const faqsEn = [
  {
    q: "How do we collaborate across timezones and borders?",
    a: "We work 100% remotely with clients across the United States, Spain, Brazil, and Latin America. Communication is fast and asynchronous via WhatsApp or email, paired with 15-minute video reviews on Google Meet or Zoom. Our UTC-3 headquarters seamlessly overlaps with US and European business hours.",
  },
  {
    q: "How does payment work?",
    a: "A 25% deposit secures your development slot, and the remaining 75% is due upon final approved delivery. We accept Wise, PayPal, Payoneer, international wire transfers (USD/EUR), and crypto (USDT). You never pay 100% upfront.",
  },
  {
    q: "Do I own my custom domain and all credentials?",
    a: "Yes, absolutely. The domain and all services are registered directly under your name with our guidance. We deliver all admin credentials and source code upon final handover.",
  },
  {
    q: "What if my project scope evolves during development?",
    a: "Any additional feature is quoted separately and agreed in writing before implementation. Your original fixed quote never changes for work you didn't request.",
  },
  {
    q: "Why choose custom engineering over Wix, Squarespace, or AI builders?",
    a: "If you're testing an unvalidated idea on zero budget, template builders are fine. But when your site needs to build credibility and drive revenue, engineering matters: slow template sites lose over 40% of visitors before rendering, fail Google Core Web Vitals, and lack a deliberate conversion funnel designed to guide visitors into contacting you.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A quick 15-minute discovery call (or brief online form), your logo if available, and the primary decision-maker. We handle the design, copywriting, and development smoothly from there.",
  },
] as const;
