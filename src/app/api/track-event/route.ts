import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, sourceUrl, userData, customData, eventId, fbclid } = body;

    console.log(`[EVENTO DE ANALÍTICA]: ${eventName}`, {
      sourceUrl,
      userData,
      customData,
      eventId,
      fbclid,
    });

    /* 
      INTEGRACIÓN CON META CONVERSIONS API (CAPI):
      Si tenés configurado META_ACCESS_TOKEN y META_PIXEL_ID:
      
      await fetch(`https://graph.facebook.com/v19.0/${process.env.META_PIXEL_ID}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: sourceUrl,
            action_source: "website",
            user_data: userData,
            custom_data: customData,
          }],
          access_token: process.env.META_ACCESS_TOKEN,
        })
      });
    */

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en track-event:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
