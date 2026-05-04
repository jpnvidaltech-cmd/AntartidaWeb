import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema, type WebhookPayload } from "@/lib/schemas/contact.schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendToWebhook } from "@/lib/webhook";

export async function POST(request: NextRequest) {
  // ── 1. Rate limiting por IP ──────────────────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { allowed, remaining, resetAt } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiados intentos. Por favor, esperá unos minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // ── 2. Parsear body ──────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Formato de solicitud inválido." },
      { status: 400 }
    );
  }

  // ── 3. Validación server-side con Zod ───────────────────────────────────
  const result = ContactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", details: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, company, serviceInterest, message, _honeypot } =
    result.data;

  // ── 4. Honeypot anti-spam ─────────────────────────────────────────────────
  if (_honeypot && _honeypot.length > 0) {
    // Silenciosamente retornar 200 para no alertar al bot
    console.warn("[contact] Honeypot activado. Request descartado.", { ip });
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // ── 5. Construir payload del webhook ─────────────────────────────────────
  const webhookPayload: WebhookPayload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    company: company && company.trim().length > 0 ? company.trim() : null,
    serviceInterest,
    message: message.trim(),
    source: "web-antartidalabs",
    submittedAt: new Date().toISOString(),
  };

  // ── 6. Enviar al webhook de n8n ──────────────────────────────────────────
  try {
    await sendToWebhook(webhookPayload);

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      {
        status: 200,
        headers: { "X-RateLimit-Remaining": String(remaining) },
      }
    );
  } catch (err) {
    console.error("[contact] Error al enviar al webhook.", err);

    return NextResponse.json(
      {
        error:
          "Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente.",
      },
      { status: 502 }
    );
  }
}

// Solo aceptar POST
export async function GET() {
  return NextResponse.json({ error: "Método no permitido." }, { status: 405 });
}
