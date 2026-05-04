// Rate limiting en memoria — suficiente para v1 de sitio institucional.
// Para alta concurrencia o múltiples instancias, reemplazar por @upstash/ratelimit + Redis.

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Limpiar entradas vencidas cada 5 minutos para evitar memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const max = parseInt(process.env.RATE_LIMIT_MAX ?? "5", 10);
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? "60000", 10);
  const now = Date.now();

  const entry = store.get(ip);

  if (!entry || entry.resetAt < now) {
    // Primera request o ventana vencida: reiniciar contador
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + windowMs,
    };
    store.set(ip, newEntry);
    return { allowed: true, remaining: max - 1, resetAt: newEntry.resetAt };
  }

  if (entry.count >= max) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: max - entry.count, resetAt: entry.resetAt };
}
