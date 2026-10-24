import type { NextConfig } from "next";

// `unsafe-eval` solo hace falta para el hot reload de desarrollo. Dejarlo en
// producción debilita la CSP sin necesidad.
const isDev = process.env.NODE_ENV === "development";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "https://www.clarity.ms",
  "https://*.clarity.ms",
  "https://va.vercel-scripts.com",
];
if (isDev) scriptSrc.push("'unsafe-eval'");

const securityHeaders = [
  // 1. Previene ataques de Clickjacking impidiendo que sitios externos carguen la web en iframes
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // 2. Previene que el navegador intente adivinar el MIME-type (evita ejecución de scripts camuflados)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 3. Controla qué información de origen se envía al navegar hacia enlaces externos
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 4. Deshabilita accesos innecesarios a hardware del dispositivo (cámara, micrófono, geolocalización)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // 5. Fuerza HTTPS estricto en el navegador con soporte para subdominios (HSTS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 6. Optimización segura de resolución DNS
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // 7. Content Security Policy (CSP): Restringe de dónde se cargan scripts, estilos y conexiones
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc.join(" ")}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://*.clarity.ms https://*.bing.com https://c.bing.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://api.web3forms.com https://api.resend.com https://*.clarity.ms https://*.bing.com https://va.vercel-scripts.com",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/prototipo",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/catalogo",
        destination: "/catalogo/index.html",
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
