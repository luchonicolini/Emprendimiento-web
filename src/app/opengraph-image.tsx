import { ImageResponse } from "next/og";

export const alt = "Nicolini Design — Sitios web con medidas exactas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#0d0f11",
          color: "#f5f3ef",
          border: "10px solid #1a2026",
        }}
      >
        {/* Header con isotipo y marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#d05a3f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0d0f11",
              fontWeight: 900,
              fontSize: "26px",
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f5f3ef",
            }}
          >
            NICOLINI DESIGN
          </span>
          <span
            style={{
              marginLeft: "12px",
              padding: "4px 12px",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#d05a3f",
              border: "1px solid #d05a3f",
            }}
          >
            Estudio Web
          </span>
        </div>

        {/* Copy central */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
              color: "#ffffff",
            }}
          >
            Sitios web con
            <br />
            medidas exactas.
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.35,
            }}
          >
            Diseño, desarrollo de alto rendimiento y medición para negocios que necesitan que los contacten.
          </p>
        </div>

        {/* Footer con especificaciones técnicas */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #222931",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "28px" }}>
            <span style={{ fontSize: "19px", color: "#d05a3f", fontWeight: 700 }}>
              Landing USD 350
            </span>
            <span style={{ fontSize: "19px", color: "#4b5563" }}>·</span>
            <span style={{ fontSize: "19px", color: "#d05a3f", fontWeight: 700 }}>
              Web multipágina USD 500
            </span>
            <span style={{ fontSize: "19px", color: "#4b5563" }}>·</span>
            <span style={{ fontSize: "19px", color: "#9ca3af" }}>
              Entrega en 7 a 10 días
            </span>
          </div>
          <span
            style={{
              fontSize: "15px",
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Buenos Aires, AR
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
