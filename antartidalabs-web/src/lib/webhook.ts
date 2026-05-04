import type { WebhookPayload } from "@/lib/schemas/contact.schema";

export async function sendToWebhook(payload: WebhookPayload): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("[webhook] WEBHOOK_URL no está configurada.");
    throw new Error("Webhook no configurado.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000); // 10s timeout

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "antartidalabs-web/1.0",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(
        `[webhook] El webhook respondió con status ${response.status}.`,
        { url: webhookUrl.replace(/\/[^\/]+$/, "/***"), status: response.status }
      );
      throw new Error(`Webhook error: ${response.status}`);
    }

    console.info("[webhook] Payload enviado exitosamente.", {
      service: payload.serviceInterest,
      submittedAt: payload.submittedAt,
    });
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      console.error("[webhook] Timeout al conectar con el webhook (>10s).");
      throw new Error("Timeout al conectar con el webhook.");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
