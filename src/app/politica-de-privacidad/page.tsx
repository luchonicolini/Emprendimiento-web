import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferences } from "@/components/CookiePreferences";
import { ProtoFooter } from "@/components/prototipo/ProtoFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Nicolini Design recopila, usa y conserva los datos que enviás a través del formulario de presupuesto, y cómo gestionar tus cookies.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
};

const updated = "Octubre de 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-6">
          <Link
            href="/"
            className="proto-label inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]"
          >
            <span aria-hidden="true">←</span>
            Volver al inicio
          </Link>
          <span className="text-sm font-semibold tracking-[-0.04em]">
            {site.name.toUpperCase()}
          </span>
        </div>
      </header>

      <article className="mx-auto max-w-[820px] px-5 py-16 sm:px-6 sm:py-24">
        <p className="proto-label">Nicolini Design / Legal</p>
        <h1 className="proto-display mt-5 text-[clamp(2.4rem,6vw,4.8rem)]">
          Política de
          <br />
          privacidad.
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Última actualización: {updated}
        </p>

        <div className="mt-12 space-y-10 border-t border-[var(--line)] pt-10 text-[15px] leading-relaxed text-[var(--muted)]">
          <section>
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              1. Quién es el responsable
            </h2>
            <p className="mt-3">
              {site.name} ({site.legalName}), con domicilio en {site.locality},
              Argentina, es responsable de los datos personales que se recopilan
              en este sitio. Para cualquier consulta podés escribirnos a{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--fg)] underline decoration-[var(--signal)] underline-offset-2"
              >
                {site.email}
              </a>
              .
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              2. Qué datos recopilamos
            </h2>
            <p className="mt-3">
              A través del formulario de presupuesto recopilamos el nombre, el
              número de WhatsApp, el tipo de proyecto, el plazo y el mensaje que
              decidas escribirnos. El correo electrónico es opcional y solo se
              usa si lo incluís.
            </p>
            <p className="mt-3">
              También registramos datos técnicos de navegación (páginas vistas,
              dispositivo, ubicación aproximada y eventos de interacción) cuando
              aceptás las cookies de medición.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              3. Para qué los usamos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Responder tu pedido de presupuesto y coordinar el proyecto.</li>
              <li>Enviarte la propuesta con precio y fecha de entrega.</li>
              <li>Entender cómo se usa el sitio para mejorarlo.</li>
              <li>Cumplir obligaciones legales y contables.</li>
            </ul>
            <p className="mt-3">
              No vendemos ni cedemos tus datos a terceros con fines publicitarios.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              4. Base legal y conservación
            </h2>
            <p className="mt-3">
              Tratamos los datos con base en el consentimiento que otorgás al
              enviar el formulario (Ley 25.326 de Protección de los Datos
              Personales). Los conservamos mientras dure la conversación
              comercial y hasta tres años después, salvo que pidas su supresión
              antes.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              5. Tus derechos
            </h2>
            <p className="mt-3">
              Podés solicitar acceso, rectificación, actualización o supresión de
              tus datos escribiendo a{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--fg)] underline decoration-[var(--signal)] underline-offset-2"
              >
                {site.email}
              </a>
              .{" "}También podés presentar un reclamo ante la Agencia de Acceso a
              la Información Pública de Argentina.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              6. Cookies y medición
            </h2>
            <p className="mt-3">
              Usamos cookies esenciales para que el sitio funcione y, solo si las
              aceptás, Microsoft Clarity para analizar el uso de forma agregada.
              Podés cambiar tu elección en cualquier momento desde{" "}
              <CookiePreferences className="text-[var(--fg)] underline decoration-[var(--signal)] underline-offset-2" />
              .
            </p>
            <p className="mt-3">
              No cargamos ninguna herramienta de medición antes de que otorgues
              el consentimiento.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              7. Seguridad
            </h2>
            <p className="mt-3">
              Aplicamos medidas técnicas y organizativas razonables para proteger
              la información, incluyendo conexiones cifradas y acceso restringido
              a los sistemas donde se almacenan los datos.
            </p>
          </section>

          <section className="border-t border-[var(--line)] pt-8">
            <h2 className="proto-display text-2xl text-[var(--fg)]">
              8. Cambios en esta política
            </h2>
            <p className="mt-3">
              Si modificamos esta política, publicaremos la nueva versión en esta
              página con la fecha de actualización.
            </p>
          </section>
        </div>
      </article>

      <ProtoFooter />
    </main>
  );
}
