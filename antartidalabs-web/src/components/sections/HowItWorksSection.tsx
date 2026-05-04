const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos el proceso que querés automatizar: volumen, complejidad, integraciones necesarias y métricas de éxito. Sin compromiso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Configuración",
    description:
      "Adaptamos el agente a los flujos, vocabulario y reglas de negocio de tu empresa. El agente aprende cómo opera tu organización.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integración",
    description:
      "Conectamos el agente a tus sistemas existentes: CRM, calendario, base de datos, APIs internas. Sin reemplazar lo que ya funciona.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Operación",
    description:
      "El agente entra en producción y opera de forma autónoma. Tu equipo se libera de tareas repetitivas y puede enfocarse en lo que importa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Monitoreo continuo",
    description:
      "Seguimiento permanente del desempeño del agente. Métricas, ajustes y mejoras iterativas para maximizar el impacto en tu operación.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-arctic-navy via-arctic-navy-light/20 to-arctic-navy" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-glaciar-neon/60 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            El proceso
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-frost-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Cómo funciona{" "}
            <span className="text-gradient-neon">AAAS?</span>
          </h2>
          <p className="text-lg text-frost-white/50 max-w-2xl mx-auto">
            Del diagnóstico a la operación en producción. Un proceso claro,
            predecible y sin sorpresas.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-8 bottom-8 w-px bg-gradient-to-b from-glaciar-neon/20 via-glaciar-neon/10 to-transparent" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    index > 0 ? "lg:-mt-2" : ""
                  }`}
                >
                  {/* Step content */}
                  <div
                    className={`${
                      isEven
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-2 lg:text-left"
                    } mb-4 lg:mb-0`}
                  >
                    <div
                      className={`inline-flex items-start gap-4 ${
                        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                      } flex-row`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glaciar-neon/10 border border-glaciar-neon/20 flex items-center justify-center text-glaciar-neon">
                        {step.icon}
                      </div>
                      <div className={`${isEven ? "lg:text-right" : "lg:text-left"} text-left`}>
                        <div
                          className="text-xs font-mono text-glaciar-neon/50 mb-1"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {step.number}
                        </div>
                        <h3
                          className="text-xl font-bold text-frost-white mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-frost-white/50 leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 ${
                      isEven ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                    style={{ top: "50%" }}
                  >
                    <div className="w-5 h-5 rounded-full bg-arctic-navy border-2 border-glaciar-neon flex items-center justify-center -mt-2.5">
                      <div className="w-2 h-2 rounded-full bg-glaciar-neon" />
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={`hidden lg:block ${isEven ? "lg:col-start-2" : "lg:col-start-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
