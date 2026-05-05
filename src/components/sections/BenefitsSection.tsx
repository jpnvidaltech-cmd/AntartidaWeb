const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Sin equipo especializado",
    description:
      "No necesitás contratar data scientists, ingenieros de ML ni DevOps para IA. El agente llega listo para operar en tu contexto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Disponibilidad 24/7",
    description:
      "Tu agente opera sin interrupciones: sin días festivos, sin ausencias, sin turnos. Siempre disponible para tu operación y tus clientes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Escalabilidad inmediata",
    description:
      "Ajustá la capacidad del agente según la demanda de tu negocio. Sin tiempos de reclutamiento ni curvas de aprendizaje.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Integración no invasiva",
    description:
      "El agente se adapta a tus sistemas existentes. No reemplazamos tu stack, nos conectamos a él mediante APIs estándar.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costo predecible",
    description:
      "Modelo de servicio sin sorpresas. Sabés exactamente cuánto cuesta operar el agente, sin variables ni costos ocultos de infraestructura.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Mejora continua",
    description:
      "Monitoreamos el desempeño del agente y aplicamos ajustes iterativos. Tu inversión mejora con el tiempo, no se deprecia.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-arctic-navy via-arctic-navy-light/40 to-arctic-navy" />

      {/* Decorative neon accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glaciar-neon/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-glaciar-neon/60 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Por qué elegirnos
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-frost-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Por qué{" "}
            <span className="text-gradient-neon">Antartida Labs?</span>
          </h2>
          <p className="text-lg text-frost-white/50 max-w-2xl mx-auto">
            El modelo AAAS elimina la complejidad de adoptar IA en tu empresa.
            Vos te enfocás en el negocio, nosotros en los agentes.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-frost-white/6 hover:border-glaciar-neon/20 bg-frost-white/2 hover:bg-frost-white/4 transition-all duration-300"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-glaciar-neon/8 border border-glaciar-neon/15 flex items-center justify-center text-glaciar-neon mb-4 group-hover:bg-glaciar-neon/15 transition-colors">
                {benefit.icon}
              </div>
              <h3
                className="text-base font-semibold text-frost-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {benefit.title}
              </h3>
              <p className="text-sm text-frost-white/50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
