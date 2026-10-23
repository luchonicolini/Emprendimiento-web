import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Rate Limiting: máximo 60 eventos por minuto por IP
    const { success } = rateLimit(`track_${ip}`, 60, 60_000);
    if (!success) {
      return NextResponse.json({ ok: true }); // drop silencioso
    }

    // 2. Same-Origin Check: descarta peticiones externas no autorizadas
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
          return NextResponse.json({ ok: true });
        }
      } catch {
        return NextResponse.json({ ok: true });
      }
    }

    const body = await request.json();
    const eventName = String(body.eventName || "").slice(0, 60).trim();
    const sourceUrl = String(body.sourceUrl || "").slice(0, 255).trim();
    const { userData, customData, eventId, fbclid } = body;

    console.log(`[EVENTO DE ANALÍTICA]: ${eventName}`, {
      sourceUrl,
      userData,
      customData,
      eventId,
      fbclid,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en track-event:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
