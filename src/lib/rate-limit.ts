// Limitador de tasa de peticiones (Rate Limiter) en memoria por IP
// Protege los endpoints públicos contra abusos, ataques de fuerza bruta y DoS.

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Limpieza automática de registros expirados cada 60 segundos
if (typeof setInterval !== "undefined") {
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }, 60_000);

  // Evita que el temporizador impida cerrar el proceso en tests o builds
  if (cleanupInterval.unref) {
    cleanupInterval.unref();
  }
}

/**
 * Evalúa si una clave (ej: IP + endpoint) ha superado el límite de peticiones permitido.
 * @param key Identificador único (IP + acción)
 * @param limit Máximo de peticiones permitidas en la ventana
 * @param windowMs Ventana de tiempo en milisegundos (por defecto 1 minuto)
 */
export function rateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 60_000,
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetAt) {
    const newRecord: RateLimitRecord = { count: 1, resetAt: now + windowMs };
    rateLimitMap.set(key, newRecord);
    return { success: true, remaining: limit - 1, resetAt: newRecord.resetAt };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count, resetAt: record.resetAt };
}

/**
 * Extrae de forma segura la dirección IP del cliente desde los encabezados de proxy de Vercel/Cloudflare.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}
