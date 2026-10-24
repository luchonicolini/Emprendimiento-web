"use client";

import { useEffect, useRef, useState } from "react";
import {
  brand,
  projectTypes,
  type ProjectType,
} from "@/content/prototipo";
import { Cota, Kicker } from "@/components/prototipo/primitives";
import { PLAN_SELECT_EVENT } from "@/lib/plan-selection";

const deadlines = ["Esta semana", "Este mes", "En 2 o 3 meses", "Sin apuro"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [website, setWebsite] = useState("");
  const loadedAtRef = useRef<number>(0);
  const [whatsappHref, setWhatsappHref] = useState<string>(brand.whatsapp);
  const [mailHref, setMailHref] = useState<string>(`mailto:${brand.email}`);
  const [projectType, setProjectType] =
    useState<ProjectType>("No sé todavía");
  const [deadline, setDeadline] = useState<string>(deadlines[1]);

  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    const handlePlanSelection = (event: Event) => {
      const plan = (event as CustomEvent<ProjectType>).detail;
      if (projectTypes.includes(plan)) setProjectType(plan);
    };

    window.addEventListener(PLAN_SELECT_EVENT, handlePlanSelection);
    return () =>
      window.removeEventListener(PLAN_SELECT_EVENT, handlePlanSelection);
  }, []);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Anti-bot: Honeypot y Time-Latch (un bot llena el formulario en < 1.5s)
    if (
      website ||
      (loadedAtRef.current > 0 && Date.now() - loadedAtRef.current < 1500)
    ) {
      setSent(true);
      return;
    }

    setLoading(true);

    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const tel = String(data.get("whatsapp") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const tipo = String(data.get("tipo") ?? "").trim();
    const plazo = String(data.get("plazo") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const refId = `nd_${Date.now().toString().slice(-6)}`;
    setLeadId(refId);

    // Mensaje estructurado para WhatsApp
    const lines = [
      "Hola Luciano! Acabo de armar la ficha técnica en Nicolini Design:",
      "",
      `• Nombre: ${nombre}`,
      `• WhatsApp: ${tel}`,
    ];

    if (email) {
      lines.push(`• Email: ${email}`);
    }

    lines.push(
      `• Tipo de proyecto: ${tipo}`,
      `• Plazo: ${plazo}`,
    );

    if (mensaje) {
      lines.push(`• Qué necesito: ${mensaje}`);
    }

    lines.push("", `Ficha Ref: #${refId}`);

    const targetUrl = `${brand.whatsapp}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setWhatsappHref(targetUrl);

    // Enlace pre-armado para envío alternativo por correo electrónico
    const mailSubject = `Ficha técnica: ${tipo} — Ref #${refId}`;
    const mailBodyLines = [
      "Hola Nicolini Design!",
      "",
      "Acabo de generar la ficha técnica en la web:",
      "",
      `• Nombre: ${nombre}`,
      `• Teléfono / WhatsApp: ${tel}`,
    ];
    if (email) {
      mailBodyLines.push(`• Email de respuesta: ${email}`);
    }
    mailBodyLines.push(
      `• Tipo de proyecto: ${tipo}`,
      `• Plazo deseado: ${plazo}`,
    );
    if (mensaje) {
      mailBodyLines.push(`• Qué necesito: ${mensaje}`);
    }
    mailBodyLines.push(
      "",
      `Ficha Ref: #${refId}`,
      "",
      "Prefiero recibir la propuesta por este medio de correo. Saludos!",
    );

    const mailtoUrl = `mailto:${brand.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBodyLines.join("\n"))}`;
    setMailHref(mailtoUrl);

    // Abrimos WhatsApp dentro del mismo gesto del usuario: si esperamos la
    // respuesta del servidor, el navegador bloquea la ventana emergente.
    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Si el navegador lo bloquea, el respaldo queda en la pantalla de confirmación.
    }

    // Registro en el servidor. Es el único canal que dispara la notificación
    // por email: una sola vez por consulta y sin exponer la API key en el navegador.
    let delivered = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        keepalive: true,
        body: JSON.stringify({
          nombre,
          whatsapp: tel,
          email,
          proyecto: tipo,
          plazo,
          negocio: "",
          mensaje,
          website,
          parcial: "no",
          loadedAt: loadedAtRef.current,
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        notified?: boolean;
      } | null;
      delivered =
        response.ok && payload?.ok === true && payload?.notified !== false;
    } catch {
      delivered = false;
    } finally {
      clearTimeout(timeout);
    }

    setDeliveryFailed(!delivered);
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacto" className="proto-dark border-b border-[var(--line)] py-12 sm:py-24">
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
            </a>
            <a
              href={`${brand.whatsapp}?text=${encodeURIComponent(
                "Hola Luciano, quiero consultar por un proyecto web para mi negocio.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[#25D366]"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                <span>WhatsApp directo: {brand.whatsappDisplay}</span>
              </span>
              <span className="font-cota text-xs text-[var(--muted)] group-hover:text-[#25D366]">
                Chatear
              </span>
            </a>
            {brand.instagram ? (
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[var(--signal)]"
              >
                <span>Instagram</span>
              </a>
            ) : null}
          </div>
        </div>

        <div
          id="ficha"
          className="scroll-mt-20 border border-[var(--line-strong)] p-5 sm:scroll-mt-28 sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <span className="proto-label">Ficha de proyecto</span>
            <span className="proto-label">Paso 01 / 01</span>
          </div>

          {sent ? (
            <div role="status" className="flex min-h-[420px] flex-col justify-between py-6 sm:py-8">
              <div>
                <span className="proto-label text-[var(--signal)]">
                  {deliveryFailed
                    ? "Registro en el sistema pendiente"
                    : "Ficha de proyecto registrada"}
                </span>
                <h3 className="proto-display mt-4 text-3xl sm:text-4xl">
                  {deliveryFailed ? "Ficha lista, falta confirmarla." : "Ficha lista."}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                  {deliveryFailed
                    ? "No pudimos registrar la consulta en el sistema. Tus datos ya están completos: mandalos por WhatsApp o correo para que no se pierda el contacto."
                    : "Tu consulta ya fue recibida en nuestro sistema. Elegí por qué canal preferís continuar la conversación:"}
                </p>
                {leadId ? (
                  <p className="mt-5 font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Ref. {leadId}
                  </p>
                ) : null}
              </div>

              {/* Botones de acción: WhatsApp o Correo electrónico */}
              <div className="space-y-4 border-t border-[var(--line)] pt-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proto-btn justify-center text-center"
                  >
                    <span>Enviar por WhatsApp</span>
                    <span aria-hidden="true" className="font-cota text-xs">↗</span>
                  </a>
                  <a
                    href={mailHref}
                    className="proto-btn proto-btn-ghost justify-center text-center"
                  >
                    <span>Enviar por correo</span>
                    <span aria-hidden="true" className="font-cota text-xs">✉</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setDeliveryFailed(false);
                      setLeadId("");
                    }}
                    className="font-cota text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    ← Modificar datos
                  </button>
                  <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                    Respuesta en &lt; 24h hábiles
                  </span>
                </div>
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

              <div className="grid gap-6 sm:grid-cols-2">
                {/* 01. Nombre */}
                <div>
                  <label htmlFor="nombre" className="flex items-center justify-between font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>01. Nombre *</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre o empresa"
                    className="mt-2 w-full border border-[var(--line-strong)] bg-[#0f171d] px-3.5 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]/60 transition-all duration-200 focus:border-[var(--signal)] focus:bg-[#142028] focus:outline-none focus:ring-1 focus:ring-[var(--signal)]"
                  />
                </div>

                {/* 02. WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="flex items-center justify-between font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>02. WhatsApp *</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+54 9 11 ..."
                    className="mt-2 w-full border border-[var(--line-strong)] bg-[#0f171d] px-3.5 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]/60 transition-all duration-200 focus:border-[var(--signal)] focus:bg-[#142028] focus:outline-none focus:ring-1 focus:ring-[var(--signal)]"
                  />
                </div>

                {/* Email (opcional para quien prefiera correo) */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="flex items-center justify-between font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>Email (opcional — si preferís respuesta por correo)</span>
                    <span className="text-[9px] lowercase opacity-60">opcional</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="tu@correo.com"
                    className="mt-2 w-full border border-[var(--line-strong)] bg-[#0f171d] px-3.5 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]/60 transition-all duration-200 focus:border-[var(--signal)] focus:bg-[#142028] focus:outline-none focus:ring-1 focus:ring-[var(--signal)]"
                  />
                </div>

                {/* 03. Tipo de proyecto (Selector interactivo de fichas) */}
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      03. Tipo de proyecto
                    </span>
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--signal)]">
                      {projectType}
                    </span>
                  </div>
                  <input type="hidden" name="tipo" value={projectType} />
                  <div
                    role="radiogroup"
                    aria-label="Tipo de proyecto"
                    className="mt-2 flex flex-wrap gap-2"
                  >
                    {projectTypes.map((option) => {
                      const isSelected = projectType === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setProjectType(option)}
                          className={`flex items-center gap-2 border px-3 py-2 font-cota text-[11px] tracking-wider uppercase transition-all duration-150 ${
                            isSelected
                              ? "border-[var(--signal)] bg-[var(--signal)] font-semibold text-[#0d1418] shadow-sm"
                              : "border-[var(--line-strong)] bg-[#0f171d] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 ${
                              isSelected
                                ? "bg-[#0d1418]"
                                : "bg-[var(--line-strong)]"
                            }`}
                            aria-hidden="true"
                          />
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 04. Plazo deseado (Selector interactivo de tiempo) */}
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      04. Para cuándo lo necesitás
                    </span>
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      {deadline}
                    </span>
                  </div>
                  <input type="hidden" name="plazo" value={deadline} />
                  <div
                    role="radiogroup"
                    aria-label="Plazo de entrega"
                    className="mt-2 flex flex-wrap gap-2"
                  >
                    {deadlines.map((option) => {
                      const isSelected = deadline === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setDeadline(option)}
                          className={`flex items-center gap-2 border px-3 py-2 font-cota text-[11px] tracking-wider uppercase transition-all duration-150 ${
                            isSelected
                              ? "border-[var(--signal)] bg-[var(--signal)] font-semibold text-[#0d1418] shadow-sm"
                              : "border-[var(--line-strong)] bg-[#0f171d] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 ${
                              isSelected
                                ? "bg-[#0d1418]"
                                : "bg-[var(--line-strong)]"
                            }`}
                            aria-hidden="true"
                          />
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 05. Qué necesitás */}
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="flex items-center justify-between font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span>05. Qué necesitás (detalles de obra)</span>
                    <span className="text-[9px] lowercase opacity-60">opcional</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Ej: tengo el logo y los textos, necesito una página con servicios y un botón a WhatsApp."
                    className="mt-2 w-full border border-[var(--line-strong)] bg-[#0f171d] p-3.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]/60 resize-none transition-all duration-200 focus:border-[var(--signal)] focus:bg-[#142028] focus:outline-none focus:ring-1 focus:ring-[var(--signal)]"
                  />
                </div>
              </div>

              <label className="mt-6 flex items-start gap-3 cursor-pointer text-xs leading-relaxed text-[var(--muted)] select-none">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-none border border-[var(--line-strong)] bg-[#0f171d] accent-[var(--signal)]"
                />
                <span>
                  Autorizo el uso de estos datos para responder mi consulta técnica. Ver{" "}
                  <a
                    href="/politica-de-privacidad"
                    className="text-[var(--fg)] underline decoration-[var(--signal)] underline-offset-2 hover:text-[var(--signal)]"
                  >
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="proto-btn mt-6 w-full justify-between px-5 text-sm disabled:opacity-60"
              >
                <span>{loading ? "Registrando consulta técnica…" : "Pedir presupuesto técnico"}</span>
                <span aria-hidden="true" className="font-cota text-xs">
                  {loading ? "…" : "01/01 ↗"}
                </span>
              </button>
              <p className="proto-label mt-3 text-center sm:text-left">
                Respuesta en menos de 24 h hábiles
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
