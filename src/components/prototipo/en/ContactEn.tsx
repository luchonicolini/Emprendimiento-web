"use client";

import { useEffect, useRef, useState } from "react";
import {
  brandEn,
  projectTypesEn,
  type ProjectTypeEn,
} from "@/content/prototipo.en";
import { Cota, SectionHead } from "@/components/prototipo/primitives";

const deadlinesEn = ["This week", "This month", "In 2 to 3 months", "No rush"];

export function ContactEn() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [website, setWebsite] = useState("");
  const loadedAtRef = useRef<number>(0);
  const [whatsappHref, setWhatsappHref] = useState<string>(brandEn.whatsapp);
  const [mailHref, setMailHref] = useState<string>(`mailto:${brandEn.email}`);
  const [selectedType, setSelectedType] = useState<ProjectTypeEn>(
    projectTypesEn[0],
  );

  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Anti-bot: Honeypot & Time-Latch
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

    // Formatted message for WhatsApp in English
    const lines = [
      "Hello Luciano! I just compiled the technical project brief at Nicolini Design:",
      "",
      `• Name: ${nombre}`,
      `• WhatsApp / Phone: ${tel}`,
    ];

    if (email) {
      lines.push(`• Email: ${email}`);
    }

    lines.push(
      `• Project Type: ${tipo}`,
      `• Target Timeframe: ${plazo}`,
    );

    if (mensaje) {
      lines.push(`• What we need: ${mensaje}`);
    }

    lines.push("", `Brief Ref: #${refId}`);

    const targetUrl = `${brandEn.whatsapp}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setWhatsappHref(targetUrl);

    // Formatted mailto URL for email alternative
    const mailSubject = `Technical Brief: ${tipo} — Ref #${refId}`;
    const mailBodyLines = [
      "Hello Nicolini Design,",
      "",
      "I just generated this project brief on your website:",
      "",
      `• Name: ${nombre}`,
      `• Phone / WhatsApp: ${tel}`,
    ];
    if (email) {
      mailBodyLines.push(`• Reply Email: ${email}`);
    }
    mailBodyLines.push(
      `• Project Type: ${tipo}`,
      `• Target Timeframe: ${plazo}`,
    );
    if (mensaje) {
      mailBodyLines.push(`• What we need: ${mensaje}`);
    }
    mailBodyLines.push(
      "",
      `Brief Ref: #${refId}`,
      "",
      "Looking forward to hearing from your studio. Best regards!",
    );

    const mailtoUrl = `mailto:${brandEn.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBodyLines.join("\n"))}`;
    setMailHref(mailtoUrl);

    // Open WhatsApp directly without await
    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Handled by success screen button
    }

    // Server-side registration and backup email
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
      delivered = response.ok && payload?.ok === true;
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
    <section id="contact" className="proto-dark border-b border-[var(--line)] py-12 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHead
            index="08 / Project Brief"
            title={
              <>
                Let&apos;s start with
                <br />
                the numbers.
              </>
            }
          />
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
            With your project scope and target timeframe, we have enough to give
            you a fixed quote and guaranteed launch date. If you&apos;re not sure yet, we
            clarify it on a quick 15-minute call.
          </p>

          <Cota label="Guaranteed response under 24 business hours" className="mt-10 max-w-sm" />

          <div className="mt-10 border-t border-[var(--line)]">
            <a
              href={`mailto:${brandEn.email}`}
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[var(--signal)]"
            >
              <span>{brandEn.email}</span>
            </a>
            <a
              href={`${brandEn.whatsapp}?text=${encodeURIComponent(
                "Hello Luciano, I would like to inquire about a web design project for my business.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[#25D366]"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                <span>Direct WhatsApp: {brandEn.whatsappDisplay}</span>
              </span>
              <span className="font-cota text-xs text-[var(--muted)] group-hover:text-[#25D366]">
                Chat
              </span>
            </a>
            <div className="flex items-center justify-between border-b border-[var(--line)] py-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
                <span>Discovery Video Call: Google Meet / Zoom</span>
              </span>
              <span className="font-cota text-xs text-[var(--muted)]">
                15 min
              </span>
            </div>
            <div className="border-b border-[var(--line)] py-3 text-xs text-[var(--muted)]">
              <span className="font-cota uppercase tracking-wider block text-[10px] text-[var(--fg)] mb-1">
                Global Payment Methods
              </span>
              Wise · PayPal · Payoneer · International Wire (USD/EUR) · USDT
            </div>
            <button
              type="button"
              onClick={() =>
                alert(
                  "Nicolini Design's official Instagram profile will be live shortly.\n\nPlease contact us via WhatsApp at " +
                    brandEn.whatsappDisplay +
                    " or email at " +
                    brandEn.email
                )
              }
              className="group flex w-full items-center justify-between border-b border-[var(--line)] py-4 text-left text-sm transition-colors hover:text-[var(--signal)] cursor-pointer"
            >
              <span>Instagram</span>
              <span className="font-cota text-[11px] uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--signal)]">
                Coming soon
              </span>
            </button>
            <button
              type="button"
              onClick={() =>
                alert(
                  "Nicolini Design's official LinkedIn profile will be live shortly.\n\nPlease contact us via WhatsApp at " +
                    brandEn.whatsappDisplay +
                    " or email at " +
                    brandEn.email
                )
              }
              className="group flex w-full items-center justify-between border-b border-[var(--line)] py-4 text-left text-sm transition-colors hover:text-[var(--signal)] cursor-pointer"
            >
              <span>LinkedIn</span>
              <span className="font-cota text-[11px] uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--signal)]">
                Coming soon
              </span>
            </button>
          </div>
        </div>

        <div
          id="brief"
          className="scroll-mt-20 border border-[var(--line-strong)] p-5 sm:scroll-mt-28 sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <span className="proto-label">Technical Project Brief</span>
            <span className="proto-label">Step 01 / 01</span>
          </div>

          {sent ? (
            <div role="status" className="flex min-h-[420px] flex-col justify-between py-6 sm:py-8">
              <div>
                <span className="proto-label text-[var(--signal)]">
                  {deliveryFailed
                    ? "Direct Delivery via WhatsApp"
                    : "Project Brief Registered"}
                </span>
                <h3 className="proto-display mt-4 text-3xl sm:text-4xl">
                  {deliveryFailed ? "Brief ready to send." : "Brief ready."}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                  {deliveryFailed
                    ? "Your information has been formatted. Click below to open WhatsApp and send your brief directly to our team."
                    : "Your project brief has been compiled successfully. If WhatsApp did not open automatically, click the button below:"}
                </p>
                {leadId ? (
                  <p className="mt-5 font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Ref. {leadId}
                  </p>
                ) : null}
              </div>

              <div className="space-y-4 border-t border-[var(--line)] pt-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proto-btn justify-center text-center"
                  >
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={mailHref}
                    className="proto-btn proto-btn-ghost justify-center text-center"
                  >
                    <span>Send via Email</span>
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
                    Submit another brief
                  </button>
                  <span className="proto-label text-[10px]">
                    Nicolini Design // Direct Client Channel
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-6">
              {/* Honeypot anti-spam */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website-field-en">Website</label>
                <input
                  id="website-field-en"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <span className="proto-label">01 // What kind of project do you need?</span>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {projectTypesEn.map((type) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center justify-between border p-3 text-xs sm:text-sm transition-colors ${
                        selectedType === type
                          ? "border-[var(--signal)] bg-[rgba(184,56,18,0.08)] text-[var(--fg)] font-medium"
                          : "border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--muted)]"
                      }`}
                    >
                      <span>{type}</span>
                      <input
                        type="radio"
                        name="tipo"
                        value={type}
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="accent-[var(--signal)]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <span className="proto-label">02 // Desired timeframe</span>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {deadlinesEn.map((term, i) => (
                    <label
                      key={term}
                      className="flex cursor-pointer items-center justify-between border border-[var(--line)] p-2.5 text-xs text-[var(--muted)] hover:border-[var(--line-strong)] transition-colors"
                    >
                      <span>{term}</span>
                      <input
                        type="radio"
                        name="plazo"
                        value={term}
                        defaultChecked={i === 1}
                        className="accent-[var(--signal)]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre-en" className="proto-label block">
                    03 // Your name *
                  </label>
                  <input
                    id="nombre-en"
                    name="nombre"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="mt-2 w-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:border-[var(--signal)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp-en" className="proto-label block">
                    04 // Phone / WhatsApp (with country code) *
                  </label>
                  <input
                    id="whatsapp-en"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="e.g. +1 415 555 2671"
                    className="mt-2 w-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:border-[var(--signal)] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-en" className="proto-label block">
                  05 // Work email (optional)
                </label>
                <input
                  id="email-en"
                  name="email"
                  type="email"
                  placeholder="e.g. alex@yourcompany.com"
                  className="mt-2 w-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:border-[var(--signal)] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mensaje-en" className="proto-label block">
                  06 // Project details or current website
                </label>
                <textarea
                  id="mensaje-en"
                  name="mensaje"
                  rows={3}
                  placeholder="Tell us what your business does, links to references, or what you want your new site to achieve."
                  className="mt-2 w-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder-[var(--muted)] focus:border-[var(--signal)] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="proto-btn w-full justify-between"
                >
                  <span>{loading ? "Compiling brief…" : "Request technical proposal"}</span>
                  <span aria-hidden="true" className="font-cota text-xs">
                    {loading ? "…" : "01/01"}
                  </span>
                </button>
                <p className="proto-label mt-3 text-center sm:text-left">
                  Guaranteed privacy. Zero marketing spam. We reply within 24 business hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
