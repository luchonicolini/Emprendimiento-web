import { NextResponse } from "next/server";

// In-memory sliding rate limiter (5 submissions per 10 minutes per IP)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  if (ip === "unknown") return false;
  const now = Date.now();
  const timestamps = (ipSubmissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipSubmissions.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipSubmissions.set(ip, timestamps);
  return false;
}

// Periodically clean up stale IPs every 15 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of ipSubmissions.entries()) {
      const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        ipSubmissions.delete(ip);
      } else {
        ipSubmissions.set(ip, active);
      }
    }
  }, 15 * 60 * 1000).unref?.();
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 0. Same-Origin Check: descarta llamadas no autorizadas desde otros dominios
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host) {
      try {
        const originHost = new URL(origin).host;
        if (
          originHost !== host &&
          !originHost.includes("localhost") &&
          !originHost.includes("127.0.0.1")
        ) {
          console.warn(`[SECURITY] Petición cross-origin no autorizada desde ${origin}`);
          return NextResponse.json({ ok: true });
        }
      } catch {
        return NextResponse.json({ ok: true });
      }
    }

    // 1. IP Rate Limiting: frena floods, pero avisa para que la UI ofrezca
    // el envío por WhatsApp/correo en vez de simular un éxito.
    if (isRateLimited(ip)) {
      console.warn(`[ANTI-BOT] Rate limit alcanzado para IP: ${ip}`);
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429 }
      );
    }

    const data = await request.json();

    // 2. Anti-spam Honeypot: Campo oculto que solo llenan los bots
    if (data.website && String(data.website).trim() !== "") {
      console.warn(`[ANTI-BOT] Honeypot activado desde IP ${ip}`);
      return NextResponse.json({ ok: true });
    }

    // 3. Time-Latch: Un humano tarda al menos 1.5s en llenar el formulario
    if (typeof data.loadedAt === "number" && data.loadedAt > 0) {
      const elapsed = Date.now() - data.loadedAt;
      if (elapsed < 1500) {
        console.warn(`[ANTI-BOT] Envío demasiado rápido (${elapsed}ms) desde IP ${ip}`);
        return NextResponse.json({ ok: true });
      }
    }

    const { nombre, whatsapp, email, proyecto, plazo, negocio, mensaje, parcial } = data;

    // 4. Heurística anti-inyección de spam en WhatsApp / Teléfono
    const rawTel = String(whatsapp || "").trim();
    const hasUrlInTel = /(https?:\/\/|www\.|\.com|\.xyz|\.ru|\.top)/i.test(rawTel);
    const digitsOnly = rawTel.replace(/\D/g, "");

    if (hasUrlInTel || (rawTel && digitsOnly.length < 6)) {
      console.warn(`[ANTI-BOT] Teléfono con formato o enlace sospechoso desde IP ${ip}: ${rawTel}`);
      return NextResponse.json({ ok: true });
    }

    // 5. Validación de nombre (previene payloads gigantes de spam)
    const rawNombre = String(nombre || "").trim();
    if (rawNombre.length > 120 || /(https?:\/\/)/i.test(rawNombre)) {
      console.warn(`[ANTI-BOT] Nombre inválido o con enlaces desde IP ${ip}`);
      return NextResponse.json({ ok: true });
    }

    // Validación mínima para clientes legítimos
    if (!whatsapp && !parcial) {
      return NextResponse.json(
        { error: "WhatsApp es requerido" },
        { status: 400 }
      );
    }

    const leadId = `lead_${Date.now()}`;
    const timestamp = new Date().toISOString();
    const leadRecord = {
      id: leadId,
      timestamp,
      nombre: rawNombre || "Anónimo",
      whatsapp: rawTel,
      email: String(email || "").trim(),
      proyecto: proyecto || "landing",
      plazo: plazo || "mes",
      negocio: negocio || "",
      mensaje: String(mensaje || "").trim(),
      tipo: parcial === "si" ? "LEAD_PARCIAL" : "LEAD_COMPLETO",
    };

    // Log the lead server-side
    console.log("[NUEVO LEAD REGISTRADO]:", leadRecord);

    // Envío de notificación privada por email (confidencial / solo servidor)
    const notified = await sendNotificationEmail(leadRecord);

    return NextResponse.json({ ok: true, id: leadId, notified });
  } catch (error) {
    console.error("Error guardando lead:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Los datos del formulario terminan dentro del HTML del email de notificación.
// Sin escapar, un visitante puede inyectar markup en tu bandeja de entrada.
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendNotificationEmail(lead: {
  id: string;
  nombre: string;
  whatsapp: string;
  email: string;
  proyecto: string;
  plazo: string;
  mensaje: string;
}): Promise<boolean> {
  const destinationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
  const fromEmail =
    process.env.LEAD_FROM_EMAIL || "Nicolini Design <onboarding@resend.dev>";

  const subject = `[NUEVO CLIENTE] ${esc(lead.nombre)} — ${lead.proyecto} (${lead.plazo})`
    .replace(/[\r\n]+/g, " ")
    .slice(0, 180);
  const digitsOnly = lead.whatsapp.replace(/\D/g, "");
  const waLink = digitsOnly ? `https://wa.me/${digitsOnly}` : "";

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1418; color: #edeae1; padding: 32px; border-radius: 8px; border: 1px solid #16324f;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(237,234,225,0.15); padding-bottom: 16px;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #b83812; font-weight: bold;">
          📐 NICOLINI DESIGN // FICHA DE OBRA
        </span>
        <span style="font-size: 10px; color: #98a19e; font-family: monospace;">
          Ref: ${esc(lead.id)}
        </span>
      </div>

      <h2 style="font-size: 22px; margin: 20px 0 8px 0; color: #ffffff;">
        Nueva consulta recibida en la web
      </h2>
      <p style="color: #98a19e; font-size: 14px; margin-top: 0;">
        Un cliente completó la ficha técnica de presupuesto.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px;">
        <tr style="border-bottom: 1px solid rgba(237,234,225,0.1);">
          <td style="padding: 10px 0; color: #98a19e; width: 130px;">Cliente:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${esc(lead.nombre)}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(237,234,225,0.1);">
          <td style="padding: 10px 0; color: #98a19e;">WhatsApp:</td>
          <td style="padding: 10px 0;">
            <a href="${waLink}" style="color: #25D366; text-decoration: none; font-weight: 600;">
              ${esc(lead.whatsapp)} ↗ (Abrir chat)
            </a>
          </td>
        </tr>
        ${
          lead.email
            ? `<tr style="border-bottom: 1px solid rgba(237,234,225,0.1);">
          <td style="padding: 10px 0; color: #98a19e;">Email:</td>
          <td style="padding: 10px 0;">
            <a href="mailto:${esc(lead.email)}" style="color: #e9e6dd; text-decoration: none;">${esc(lead.email)}</a>
          </td>
        </tr>`
            : ""
        }
        <tr style="border-bottom: 1px solid rgba(237,234,225,0.1);">
          <td style="padding: 10px 0; color: #98a19e;">Tipo de web:</td>
          <td style="padding: 10px 0; color: #ffffff;">${esc(lead.proyecto)}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(237,234,225,0.1);">
          <td style="padding: 10px 0; color: #98a19e;">Plazo deseado:</td>
          <td style="padding: 10px 0; color: #ffffff;">${esc(lead.plazo)}</td>
        </tr>
      </table>

      ${
        lead.mensaje
          ? `
        <div style="background: rgba(237,234,225,0.04); border: 1px solid rgba(237,234,225,0.15); padding: 16px; margin: 20px 0; border-radius: 4px;">
          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #98a19e; display: block; margin-bottom: 6px;">
            Requerimientos del cliente:
          </span>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #edeae1;">
            ${esc(lead.mensaje)}
          </p>
        </div>
      `
          : ""
      }

      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(237,234,225,0.1); text-align: center;">
        <a href="${waLink}" style="display: inline-block; background: #25D366; color: #0d1418; padding: 12px 24px; font-weight: bold; border-radius: 4px; text-decoration: none; font-size: 14px;">
          Contactar por WhatsApp al cliente
        </a>
      </div>
    </div>
  `;

  // 1. Envío directo mediante Resend (requiere API key y destinatario)
  if (resendApiKey && destinationEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [destinationEmail],
          reply_to: lead.email || undefined,
          subject,
          html: htmlBody,
        }),
      });

      if (res.ok) {
        console.log(`[EMAIL NOTIFICADO]: Consulta enviada exitosamente a ${destinationEmail}`);
        return true;
      } else {
        const errorText = await res.text();
        console.warn("[RESEND WARNING]:", errorText);
      }
    } catch (err) {
      console.error("[RESEND ERROR]:", err);
    }
  }

  // 2. Envío mediante Web3Forms (si está configurado)
  if (web3formsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject,
          from_name: "Web Nicolini Design",
          nombre: lead.nombre,
          whatsapp: lead.whatsapp,
          email: lead.email || "No informado",
          proyecto: lead.proyecto,
          plazo: lead.plazo,
          mensaje: lead.mensaje,
          referencia: lead.id,
        }),
      });

      if (res.ok) {
        console.log("[WEB3FORMS NOTIFICADO]: Consulta enviada correctamente");
        return true;
      }
    } catch (err) {
      console.error("[WEB3FORMS ERROR]:", err);
    }
  }

  return false;
}
