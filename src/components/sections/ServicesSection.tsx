"use client";

const SERVICES = [
  {
    id: "recepcionista-digital",
    name: "Recepcionista Digital",
    slug: "Recepcionista Digital" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    description:
      "Un agente de IA que atiende las comunicaciones entrantes de tu empresa de forma autónoma, agenda citas y brinda información precisa a tus clientes las 24 horas.",
    capabilities: [
      "Atención de llamadas y mensajes entrantes",
      "Agendamiento automático de citas y reuniones",
      "Respuesta a consultas frecuentes",
      "Derivación inteligente según prioridad",
    ],
    accent: "from-glaciar-neon/20 to-glaciar-neon/5",
  },
  {
    id: "qa-agent",
    name: "QA Agent",
    slug: "QA Agent" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    description:
      "Automatizá la ejecución de casos de prueba a partir de especificaciones funcionales. El agente genera, ejecuta y reporta resultados sin intervención manual.",
    capabilities: [
      "Generación de casos de prueba desde especificaciones",
      "Ejecución automatizada de pruebas de regresión",
      "Reporte detallado de resultados y bugs",
      "Integración con pipelines CI/CD existentes",
    ],
    accent: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "refactoring-agent",
    name: "Refactoring Agent",
    slug: "Refactoring Agent" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    description:
      "Modernizá tu software legacy sin perder funcionalidad. El agente adapta y homologa el código existente al nuevo stack tecnológico sin desarrollar funcionalidades nuevas.",
    capabilities: [
      "Análisis y mapeo del código legacy",
      "Recodificación hacia el nuevo stack objetivo",
      "Homologación de lógica de negocio existente",
      "Sin desarrollo de nuevas funcionalidades",
    ],
    accent: "from-violet-500/20 to-violet-500/5",
  },
];

interface ServicesSectionProps {
  onServiceSelect?: (service: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const handleCTA = (slug: string) => {
    if (onServiceSelect) onServiceSelect(slug);
    const el = document.querySelector("#contacto");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    // Set query param for form pre-selection
    const url = new URL(window.location.href);
    url.searchParams.set("servicio", slug);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-arctic-navy via-arctic-navy-light/30 to-arctic-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-glaciar-neon/60 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Nuestros Agentes
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-frost-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tres agentes.{" "}
            <span className="text-gradient-neon">Un modelo.</span>
          </h2>
          <p className="text-lg text-frost-white/50 max-w-2xl mx-auto">
            Cada agente está diseñado para operar de forma autónoma en un área
            específica de tu operación, sin requerir equipos internos de IA.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group relative rounded-2xl border border-frost-white/8 bg-card hover:bg-card-hover hover:border-glaciar-neon/25 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient top accent */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent} rounded-t-2xl`}
              />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-glaciar-neon/10 border border-glaciar-neon/20 flex items-center justify-center text-glaciar-neon mb-6 group-hover:bg-glaciar-neon/15 transition-colors">
                  {service.icon}
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-bold text-frost-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-frost-white/55 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-glaciar-neon mt-2 flex-shrink-0" />
                      <span className="text-sm text-frost-white/50">{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleCTA(service.slug)}
                  className="w-full py-3 px-4 rounded-xl border border-glaciar-neon/25 text-glaciar-neon text-sm font-medium hover:bg-glaciar-neon/10 hover:border-glaciar-neon/50 transition-all duration-200 cursor-pointer"
                >
                  Quiero saber más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
