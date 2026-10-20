import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Anti-spam Honeypot protection
    if (data.website && data.website.trim() !== "") {
      // Silently return success to avoid alerting bots
      return NextResponse.json({ ok: true });
    }

    const { nombre, whatsapp, email, proyecto, plazo, negocio, mensaje, parcial } = data;

    // Minimal validation
    if (!whatsapp && !parcial) {
      return NextResponse.json(
        { error: "WhatsApp es requerido" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const leadRecord = {
      timestamp,
      nombre: nombre || "Anónimo",
      whatsapp: whatsapp || "",
      email: email || "",
      proyecto: proyecto || "landing",
      plazo: plazo || "mes",
      negocio: negocio || "",
      mensaje: mensaje || "",
      tipo: parcial === "si" ? "LEAD_PARCIAL" : "LEAD_COMPLETO",
    };

    // Log the lead server-side
    console.log("[NUEVO LEAD REGISTRADO]:", leadRecord);

    /* 
      INTEGRACIÓN CON SUPABASE / BASE DE DATOS:
      Si configurás las variables de entorno SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY,
      podés persistirlo directamente aquí:

      const { data: inserted, error } = await supabase
        .from('leads')
        .insert([leadRecord]);
    */

    return NextResponse.json({ ok: true, id: `lead_${Date.now()}` });
  } catch (error) {
    console.error("Error guardando lead:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
