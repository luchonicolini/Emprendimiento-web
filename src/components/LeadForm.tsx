"use client";

import { useState } from "react";
import {
  FileText,
  Layers,
  ShoppingCart,
  Boxes,
  ArrowRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProjectOption {
  value: string;
  label: string;
  precio: string;
  detalle: string;
  icon: typeof FileText;
}

const projectOptions: ProjectOption[] = [
  {
    value: "institucional",
    label: "Landing page",
    precio: "USD 350",
    detalle: "Pago único. Una sola página armada para que te lleguen consultas.",
    icon: FileText,
  },
  {
    value: "multipagina",
    label: "Web multipágina",
    precio: "USD 500",
    detalle: "Pago único. Cada servicio con su página: inicio, servicios, nosotros, contacto.",
    icon: Layers,
  },
  {
    value: "tienda",
    label: "Tienda online",
    precio: "USD 650 a 1.500",
    detalle: "Con carrito y medios de pago. El número depende del catálogo.",
    icon: ShoppingCart,
  },
  {
    value: "sistema",
    label: "Sistema o app a medida",
    precio: "Más de USD 1.500",
    detalle: "Pedidos, turnos, clientes con usuario, panel propio. Se cotiza según lo que tenga que hacer.",
    icon: Boxes,
  },
];

const timeframes = [
  { value: "ya", label: "Ya, esta semana" },
  { value: "mes", label: "Este mes" },
  { value: "2-3-meses", label: "En 2 o 3 meses" },
];

export function LeadForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [underBudget, setUnderBudget] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    proyecto: "institucional",
    plazo: "mes",
    negocio: "",
    mensaje: "",
    website: "", // Honeypot field
  });

  const update = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const savePartial = async (extra = {}) => {
    if (formData.website) return;
    try {
      await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          ...extra,
          parcial: "si",
        }),
      });
    } catch {}
  };

  const handleStep1Next = () => {
    setError("");
    if (!formData.nombre.trim() || !formData.whatsapp.trim()) {
      setError("Completá tu nombre y WhatsApp para que te contactemos.");
      return;
    }
    savePartial({ paso: 1 });
    setStep(2);
  };

  const handleStep2Next = () => {
    savePartial({ paso: 2 });
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          parcial: "no",
        }),
      });
      if (!res.ok) throw new Error("Error en el servidor");
      setSubmitted(true);
    } catch {
      setError("No pudimos enviar el formulario. Por favor escribinos directo por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const percentage = Math.round((step / 3) * 100);

  return (
    <section className="bg-[#080c18] py-24" id="contacto">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1220] p-7 sm:p-10">
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-7 text-center">
                <h2 className="mb-3 font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl">
                  Pedí tu{" "}
                  <em className="font-serif font-normal italic tracking-[-0.01em]">
                    presupuesto
                  </em>
                </h2>
                <p className="mx-auto max-w-md text-base text-white/55">
                  Tres pasos, menos de un minuto. Seguimos por WhatsApp con el precio final y la fecha de entrega.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#009688]/20 text-[#009688] mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    ¡Presupuesto recibido!
                  </h3>
                  <p className="mt-3 text-sm text-white/70 max-w-md mx-auto">
                    Gracias {formData.nombre}, ya recibimos tu pedido. Te vamos a responder por WhatsApp en menos de 24 horas con el número final.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress Bar */}
                  <div className="mx-auto mb-7 max-w-xl">
                    <div className="mb-2 flex items-center justify-between text-xs text-white/45">
                      <span>Paso {step} de 3</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#009688] transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="mx-auto max-w-xl">
                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={formData.website}
                      onChange={(e) => update("website", e.target.value)}
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />

                    {error && (
                      <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
                        {error}
                      </div>
                    )}

                    {/* STEP 1: CONTACTO */}
                    {step === 1 && (
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-white">
                          ¿Cómo te contactamos?
                        </h3>
                        <p className="mb-5 text-sm text-white/45">
                          Seguimos por WhatsApp. Te respondemos en menos de 24 hs.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="nombre" className="text-sm text-white/80">
                              Nombre *
                            </label>
                            <input
                              id="nombre"
                              placeholder="Tu nombre"
                              value={formData.nombre}
                              onChange={(e) => update("nombre", e.target.value)}
                              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#009688] focus:outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="whatsapp" className="text-sm text-white/80">
                              WhatsApp *
                            </label>
                            <input
                              id="whatsapp"
                              inputMode="tel"
                              placeholder="+54 9 11 1234-5678"
                              value={formData.whatsapp}
                              onChange={(e) => update("whatsapp", e.target.value)}
                              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#009688] focus:outline-none"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleStep1Next}
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-colors bg-white !text-[#080c18] hover:bg-white/90"
                        >
                          Continuar
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}

                    {/* STEP 2: TIPO DE PROYECTO */}
                    {step === 2 && underBudget && (
                      <div className="py-6 text-center">
                        <p className="mx-auto max-w-md text-base leading-relaxed text-white/70">
                          Con menos de USD 350 te conviene arrancar con Wix o Tienda Nube por tu cuenta y volver cuando el negocio lo pida. No es lo que hacemos.
                        </p>
                        <p className="mt-3 text-sm text-white/40">
                          Tus datos no quedaron guardados.
                        </p>
                        <button
                          type="button"
                          onClick={() => setUnderBudget(false)}
                          className="mt-6 text-xs text-[#2dd4bf] hover:underline"
                        >
                          Volver a elegir
                        </button>
                      </div>
                    )}

                    {step === 2 && !underBudget && (
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-white">
                          ¿Qué necesitás?
                        </h3>
                        <p className="mb-5 text-sm text-white/45">
                          Elegí la opción que más se parezca a tu caso. El número final te lo confirmamos por WhatsApp antes de arrancar.
                        </p>
                        <div className="grid gap-3">
                          {projectOptions.map((opt) => {
                            const isSelected = formData.proyecto === opt.value;
                            const Icon = opt.icon;
                            return (
                              <button
                                type="button"
                                key={opt.value}
                                onClick={() => update("proyecto", opt.value)}
                                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                                  isSelected
                                    ? "border-[#2dd4bf] bg-white/[0.08]"
                                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                                }`}
                              >
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-baseline justify-between gap-2">
                                    <h4 className="font-display text-base font-semibold text-white">
                                      {opt.label}
                                    </h4>
                                    <span className="text-sm font-semibold text-[#2dd4bf]">
                                      {opt.precio}
                                    </span>
                                  </div>
                                  <p className="mt-1 text-xs text-white/50 leading-relaxed">
                                    {opt.detalle}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-4 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setUnderBudget(true);
                              savePartial({ descartar: "si" });
                            }}
                            className="text-xs text-white/40 hover:text-white/70 transition-colors"
                          >
                            Tengo menos de USD 350
                          </button>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-5 py-3.5 text-[15px] font-semibold text-white hover:border-white/40"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Atrás
                          </button>
                          <button
                            type="button"
                            onClick={handleStep2Next}
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[15px] font-semibold !text-[#080c18] hover:bg-white/90"
                          >
                            Continuar
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: NEGOCIO Y PLAZO */}
                    {step === 3 && (
                      <form onSubmit={handleSubmit}>
                        <h3 className="mb-1 text-lg font-bold text-white">
                          Contanos un poco más
                        </h3>
                        <p className="mb-5 text-sm text-white/45">
                          Con esto te escribimos sabiendo de qué se trata.
                        </p>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="negocio" className="text-sm text-white/80">
                              ¿De qué es tu negocio?
                            </label>
                            <input
                              id="negocio"
                              placeholder="Ej: estudio contable, venta de indumentaria, gimnasio…"
                              value={formData.negocio}
                              onChange={(e) => update("negocio", e.target.value)}
                              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#009688] focus:outline-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm text-white/80 block">
                              ¿Para cuándo la necesitás?
                            </label>
                            <div className="grid grid-cols-3 gap-2.5">
                              {timeframes.map((tf) => (
                                <button
                                  type="button"
                                  key={tf.value}
                                  onClick={() => update("plazo", tf.value)}
                                  className={`rounded-xl border py-2.5 px-2 text-center text-xs font-medium transition-all ${
                                    formData.plazo === tf.value
                                      ? "border-[#2dd4bf] bg-white/[0.08] text-white"
                                      : "border-white/[0.08] bg-white/[0.03] text-white/60 hover:border-white/20"
                                  }`}
                                >
                                  {tf.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="mensaje" className="text-sm text-white/80">
                              Contanos tu idea (opcional)
                            </label>
                            <textarea
                              id="mensaje"
                              rows={3}
                              placeholder="Ej: ya tengo el logo y textos, necesito sección de servicios y botón a WhatsApp…"
                              value={formData.mensaje}
                              onChange={(e) => update("mensaje", e.target.value)}
                              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#009688] focus:outline-none resize-none"
                            />
                          </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-5 py-3.5 text-[15px] font-semibold text-white hover:border-white/40"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Atrás
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[15px] font-semibold !text-[#080c18] hover:bg-white/90 disabled:opacity-50"
                          >
                            {loading ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Enviando...</span>
                              </>
                            ) : (
                              <span>Enviar presupuesto</span>
                            )}
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Email link at bottom */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5 text-xs text-white/40">
                      <a
                        href="mailto:contacto@ahorawebdigital.com"
                        className="flex items-center gap-1.5 py-3 hover:text-white/70"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        contacto@ahorawebdigital.com
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
