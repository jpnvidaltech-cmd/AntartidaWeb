"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, type ContactFormData } from "@/lib/schemas/contact.schema";

const SERVICE_OPTIONS = [
  { value: "", label: "Seleccioná un servicio de interés" },
  { value: "Recepcionista Digital", label: "Recepcionista Digital" },
  { value: "QA Agent", label: "QA Agent" },
  { value: "Refactoring Agent", label: "Refactoring Agent" },
  { value: "No estoy seguro", label: "No estoy seguro / Quiero más información" },
];

type SubmitState = "idle" | "loading" | "success" | "error" | "ratelimit";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: undefined,
      message: "",
      _honeypot: "",
    },
  });

  // Pre-select service from URL param (set by service card CTAs)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");
    const validServices = [
      "Recepcionista Digital",
      "QA Agent",
      "Refactoring Agent",
      "No estoy seguro",
    ];
    if (servicio && validServices.includes(servicio)) {
      setValue("serviceInterest", servicio as ContactFormData["serviceInterest"]);
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitState("success");
        reset();
        // Remove service param from URL
        const url = new URL(window.location.href);
        url.searchParams.delete("servicio");
        window.history.replaceState({}, "", url.toString());
      } else if (response.status === 429) {
        setSubmitState("ratelimit");
      } else {
        const json = await response.json().catch(() => ({}));
        setErrorMessage(
          json.error ?? "Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente."
        );
        setSubmitState("error");
      }
    } catch {
      setErrorMessage(
        "No pudimos conectarnos. Verificá tu conexión a internet e intentá nuevamente."
      );
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-glaciar-neon/15 border border-glaciar-neon/30 flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-glaciar-neon" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold text-frost-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ¡Mensaje enviado!
        </h3>
        <p className="text-frost-white/60 max-w-sm">
          Gracias por contactarnos. Te responderemos a la brevedad a la dirección de email indicada.
        </p>
        <button
          onClick={() => setSubmitState("idle")}
          className="mt-8 px-6 py-2.5 text-sm text-glaciar-neon border border-glaciar-neon/30 rounded-xl hover:bg-glaciar-neon/10 transition-colors cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from users, visible to bots */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("_honeypot")}
        />
      </div>

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="Nombre y apellido" error={errors.name?.message} required>
          <input
            type="text"
            placeholder="Juan García"
            autoComplete="name"
            {...register("name")}
            className={fieldClass(!!errors.name)}
          />
        </FieldWrapper>

        <FieldWrapper label="Email" error={errors.email?.message} required>
          <input
            type="email"
            placeholder="juan@empresa.com"
            autoComplete="email"
            {...register("email")}
            className={fieldClass(!!errors.email)}
          />
        </FieldWrapper>
      </div>

      {/* Row: Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="Teléfono de contacto" error={errors.phone?.message} required>
          <input
            type="tel"
            placeholder="+54 11 1234 5678"
            autoComplete="tel"
            {...register("phone")}
            className={fieldClass(!!errors.phone)}
          />
        </FieldWrapper>

        <FieldWrapper label="Empresa" error={errors.company?.message}>
          <input
            type="text"
            placeholder="Tu empresa (opcional)"
            autoComplete="organization"
            {...register("company")}
            className={fieldClass(!!errors.company)}
          />
        </FieldWrapper>
      </div>

      {/* Service interest */}
      <FieldWrapper label="Servicio de interés" error={errors.serviceInterest?.message} required>
        <select
          {...register("serviceInterest")}
          className={`${fieldClass(!!errors.serviceInterest)} appearance-none`}
          defaultValue=""
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </FieldWrapper>

      {/* Message */}
      <FieldWrapper label="Mensaje" error={errors.message?.message} required>
        <textarea
          rows={4}
          placeholder="Contanos brevemente qué proceso querés automatizar o qué consulta tenés..."
          {...register("message")}
          className={`${fieldClass(!!errors.message)} resize-none`}
        />
      </FieldWrapper>

      {/* Error / rate limit messages */}
      {submitState === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}
      {submitState === "ratelimit" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-400">
            Demasiados intentos. Por favor, esperá unos minutos e intentá nuevamente.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || submitState === "loading"}
        className="w-full py-4 px-6 bg-glaciar-neon text-arctic-navy font-semibold rounded-xl hover:bg-glaciar-neon/90 transition-all duration-200 hover:shadow-neon disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
      >
        {submitState === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>

      <p className="text-xs text-frost-white/25 text-center">
        Al enviar este formulario aceptás nuestra{" "}
        <a href="/privacidad" className="underline hover:text-frost-white/50 transition-colors">
          Política de Privacidad
        </a>
        .
      </p>
    </form>
  );
}

// ── Helper components ──────────────────────────────────────────

function fieldClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl text-sm text-frost-white placeholder-frost-white/25 bg-frost-white/5 border transition-all duration-200 outline-none focus:ring-2 focus:ring-glaciar-neon/30 ${
    hasError
      ? "border-red-500/50 bg-red-500/5"
      : "border-frost-white/10 hover:border-frost-white/20 focus:border-glaciar-neon/50"
  }`;
}

interface FieldWrapperProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FieldWrapper({ label, error, required, children }: FieldWrapperProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-frost-white/70">
        {label}
        {required && <span className="text-glaciar-neon ml-1" aria-hidden>*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
