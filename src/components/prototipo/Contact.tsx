"use client";

import { useState } from "react";
import { brand } from "@/content/prototipo";
import { Cota, Kicker } from "@/components/prototipo/primitives";

const projectTypes = [
  "Landing page",
  "Web multipágina",
  "Tienda online",
  "Sistema a medida",
  "No sé todavía",
];

const deadlines = ["Esta semana", "Este mes", "En 2 o 3 meses", "Sin apuro"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [leadId, setLeadId] = useState("");
  const [website, setWebsite] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (website) return;

    setLoading(true);
    setError("");

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: String(data.get("nombre") ?? ""),
          whatsapp: String(data.get("whatsapp") ?? ""),
          proyecto: String(data.get("tipo") ?? ""),
          plazo: String(data.get("plazo") ?? ""),
          negocio: "",
          mensaje: String(data.get("mensaje") ?? ""),
          website,
          parcial: "no",
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        id?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "No pudimos enviar la consulta.");
      }

      setLeadId(result.id ?? "");
      setSent(true);
    } catch {
      setError(
        "No pudimos enviar el formulario. Escribinos directo por WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="proto-dark border-b border-[var(--line)] py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[6px] w-[6px] bg-[var(--signal)]" />
            <Kicker>08 / Contacto</Kicker>
          </div>
          <h2 className="proto-display mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)]">
            Contanos qué
            <br />
            querés armar.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
            Con el tipo de proyecto y el plazo nos alcanza para darte un número
            y una fecha. Si no lo tenés claro, lo definimos en la primera
            llamada.
          </p>

          <Cota label="Respuesta en menos de 24 h hábiles" className="mt-10 max-w-sm" />

          <div className="mt-10 border-t border-[var(--line)]">
            <a
              href={`mailto:${brand.email}`}
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[var(--signal)]"
            >
              <span>{brand.email}</span>
              <span aria-hidden="true" className="font-cota text-[11px]">
                ↗
              </span>
            </a>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[var(--signal)]"
            >
              <span>{brand.whatsappDisplay}</span>
              <span aria-hidden="true" className="font-cota text-[11px]">
                ↗
              </span>
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[var(--signal)]"
            >
              <span>Instagram</span>
              <span aria-hidden="true" className="font-cota text-[11px]">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="border border-[var(--line-strong)] p-5 sm:p-8">
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <span className="proto-label">Ficha de proyecto</span>
            <span className="proto-label">Paso 01 / 01</span>
          </div>

          {sent ? (
            <div role="status" className="flex min-h-[420px] flex-col justify-between py-8">
              <div>
                <span className="proto-label text-[var(--signal)]">
                  Consulta recibida
                </span>
                <h3 className="proto-display mt-5 text-4xl">Quedó anotado.</h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--muted)]">
                  Te escribimos por WhatsApp con el precio final y la fecha de
                  entrega. Si es urgente, mandanos un mensaje directo.
                </p>
                {leadId ? (
                  <p className="mt-6 font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Ref. {leadId}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-5 sm:flex-row">
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proto-btn"
                >
                  Abrir WhatsApp
                  <span aria-hidden="true" className="font-cota text-[11px]">
                    ↗
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setLeadId("");
                  }}
                  className="proto-btn proto-btn-ghost"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="relative pt-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="proto-label">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="proto-field mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="proto-label">
                    WhatsApp *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+54 9 11 ..."
                    className="proto-field mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="tipo" className="proto-label">
                    Tipo de proyecto
                  </label>
                  <select id="tipo" name="tipo" className="proto-field mt-2">
                    {projectTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="plazo" className="proto-label">
                    Para cuándo
                  </label>
                  <select id="plazo" name="plazo" className="proto-field mt-2">
                    {deadlines.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="proto-label">
                    Qué necesitás
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Ej: tengo el logo y los textos, necesito una página con servicios y un botón a WhatsApp."
                    className="proto-field mt-2 resize-none"
                  />
                </div>
              </div>

              {error ? (
                <p
                  role="alert"
                  className="mt-5 border border-[var(--signal)] p-3 text-sm leading-relaxed text-[var(--signal)]"
                >
                  {error}
                </p>
              ) : null}

              <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-[var(--muted)]">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--signal)]"
                />
                <span>
                  Autorizo el uso de estos datos para responder mi consulta.
                  Ver{" "}
                  <a
                    href="/politica-de-privacidad"
                    className="text-[var(--fg)] underline decoration-[var(--signal)] underline-offset-2"
                  >
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="proto-btn mt-6 w-full disabled:opacity-60"
              >
                {loading ? "Enviando…" : "Enviar consulta"}
                <span aria-hidden="true" className="font-cota text-[11px]">
                  ↗
                </span>
              </button>
              <p className="proto-label mt-3">
                Respuesta en menos de 24 h hábiles
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
