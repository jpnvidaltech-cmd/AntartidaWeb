import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre no puede superar los 100 caracteres."),
  email: z
    .string()
    .min(1, "El email es requerido.")
    .email("El email no tiene un formato válido."),
  phone: z
    .string()
    .min(1, "El teléfono de contacto es requerido.")
    .regex(
      /^[\+\d\s\-\(\)]{7,20}$/,
      "El teléfono no tiene un formato válido. Mínimo 7 dígitos."
    ),
  company: z
    .string()
    .max(100, "El nombre de empresa no puede superar los 100 caracteres.")
    .optional()
    .or(z.literal("")),
  serviceInterest: z.enum(
    [
      "Recepcionista Digital",
      "QA Agent",
      "Refactoring Agent",
      "No estoy seguro",
    ],
    { errorMap: () => ({ message: "Seleccioná un servicio de interés." }) }
  ),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(1000, "El mensaje no puede superar los 1000 caracteres."),
  // Campo honeypot anti-spam — debe estar vacío siempre
  _honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Payload enviado al webhook de n8n (generado en el servidor)
export interface WebhookPayload {
  name: string;
  email: string;
  phone: string;
  company: string | null;
  serviceInterest:
    | "Recepcionista Digital"
    | "QA Agent"
    | "Refactoring Agent"
    | "No estoy seguro";
  message: string;
  source: "web-antartidalabs";
  submittedAt: string;
}
