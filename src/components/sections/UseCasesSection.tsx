"use client";

import { useState } from "react";

const USE_CASES = [
  {
    agent: "Recepcionista Digital",
    color: "glaciar-neon",
    cases: [
      {
        sector: "Salud",
        title: "Clínica médica con gestión de turnos telefónica",
        problem:
          "La clínica recibía decenas de llamadas diarias para agendar y reprogramar turnos. El personal administrativo dedicaba más del 60% de su tiempo a esta tarea repetitiva.",
        solution:
          "El Recepcionista Digital atiende las llamadas entrantes, consulta la disponibilidad de la agenda médica en tiempo real y agenda el turno directamente en el sistema, enviando confirmación por email o SMS.",
        result:
          "Reducción del 80% del tiempo administrativo en gestión de turnos. Personal dedicado a tareas de mayor valor. Sin lista de espera telefónica.",
      },
      {
        sector: "Servicios profesionales",
        title: "Estudio contable con consultas frecuentes",
        problem:
          "Los clientes del estudio llamaban reiteradamente para consultas simples: vencimientos, requisitos de documentación, estado de trámites. Esto interrumpía el trabajo del equipo.",
        solution:
          "El agente responde consultas frecuentes con la información configurada por el estudio y escala automáticamente las consultas complejas al contador responsable.",
        result:
          "90% de las consultas telefónicas resueltas sin intervención humana. El equipo contable trabaja sin interrupciones.",
      },
    ],
  },
  {
    agent: "QA Agent",
    color: "blue-400",
    cases: [
      {
        sector: "Desarrollo de software",
        title: "Software factory con entregas quincenales",
        problem:
          "El equipo de QA manual no podía cubrir las pruebas de regresión completas en cada sprint. Los bugs en producción aumentaban con cada release.",
        solution:
          "El QA Agent genera y ejecuta automáticamente los casos de prueba a partir de las especificaciones funcionales del sprint, e integra los resultados al pipeline CI/CD.",
        result:
          "Cobertura de regresión del 100% en cada release. Tiempo de ciclo de testing reducido de 3 días a 4 horas. Bugs en producción reducidos en un 70%.",
      },
      {
        sector: "Fintech",
        title: "Plataforma de pagos con compliance regulatorio",
        problem:
          "La validación de nuevas funcionalidades requería pruebas manuales extensas para cumplir con requisitos regulatorios. El proceso retrasaba los releases.",
        solution:
          "El QA Agent ejecuta el conjunto de pruebas de compliance definido por el equipo legal y técnico, generando reportes auditables en cada iteración.",
        result:
          "Tiempo de validación regulatoria reducido a la mitad. Reportes de testing listos para auditoría sin trabajo manual adicional.",
      },
    ],
  },
  {
    agent: "Refactoring Agent",
    color: "violet-400",
    cases: [
      {
        sector: "Industria",
        title: "Sistema de gestión de planta en Visual Basic 6",
        problem:
          "La empresa operaba con un sistema de gestión de producción escrito en VB6, incompatible con los nuevos sistemas ERP que planeaban implementar.",
        solution:
          "El Refactoring Agent analizó el código legacy, mapeó la lógica de negocio y recodificó el sistema hacia .NET moderno, manteniendo exactamente las mismas funcionalidades.",
        result:
          "Sistema migrado en 3 meses. Sin pérdida de funcionalidades. Compatible con el nuevo ERP. El equipo interno no tuvo que participar en el proceso de migración.",
      },
      {
        sector: "Retail",
        title: "E-commerce legacy con codebase PHP 5",
        problem:
          "La tienda online corría sobre PHP 5 al final de su ciclo de soporte. La deuda técnica impedía actualizaciones de seguridad y de infraestructura.",
        solution:
          "El Refactoring Agent homologó el código PHP 5 hacia PHP 8.2 y modernizó las dependencias, sin alterar el comportamiento del sistema ni agregar nuevas funcionalidades.",
        result:
          "Stack actualizado y compatible con infraestructura moderna. Vulnerabilidades de seguridad eliminadas. Base de código lista para desarrollo futuro.",
      },
    ],
  },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const activeAgent = USE_CASES[activeTab];

  return (
    <section id="casos-de-uso" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-arctic-navy via-arctic-navy-light/20 to-arctic-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium text-glaciar-neon/60 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Casos de uso
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-frost-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Casos de uso{" "}
            <span className="text-gradient-neon">reales</span>
          </h2>
          <p className="text-lg text-frost-white/50 max-w-2xl mx-auto">
            Ejemplos concretos de cómo cada agente puede transformar procesos
            en distintas industrias.
          </p>
        </div>

        {/* Agent tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {USE_CASES.map((uc, index) => (
            <button
              key={uc.agent}
              onClick={() => {
                setActiveTab(index);
                setActiveCaseIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === index
                  ? "bg-glaciar-neon text-arctic-navy"
                  : "border border-frost-white/10 text-frost-white/50 hover:border-glaciar-neon/30 hover:text-frost-white"
              }`}
            >
              {uc.agent}
            </button>
          ))}
        </div>

        {/* Sub-case tabs */}
        {activeAgent.cases.length > 1 && (
          <div className="flex gap-2 justify-center mb-8">
            {activeAgent.cases.map((c, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseIndex(index)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCaseIndex === index
                    ? "bg-frost-white/10 text-frost-white border border-frost-white/20"
                    : "text-frost-white/30 hover:text-frost-white/60"
                }`}
              >
                {c.sector}
              </button>
            ))}
          </div>
        )}

        {/* Case card */}
        {activeAgent.cases[activeCaseIndex] && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-frost-white/8 bg-card p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-medium px-3 py-1 rounded-full bg-glaciar-neon/10 text-glaciar-neon border border-glaciar-neon/20"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {activeAgent.cases[activeCaseIndex].sector}
              </span>
            </div>

            <h3
              className="text-xl font-bold text-frost-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {activeAgent.cases[activeCaseIndex].title}
            </h3>

            <div className="space-y-5">
              <div>
                <p
                  className="text-xs uppercase tracking-widest text-frost-white/30 mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  El problema
                </p>
                <p className="text-sm text-frost-white/60 leading-relaxed">
                  {activeAgent.cases[activeCaseIndex].problem}
                </p>
              </div>

              <div className="w-full h-px bg-frost-white/5" />

              <div>
                <p
                  className="text-xs uppercase tracking-widest text-glaciar-neon/50 mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  La solución
                </p>
                <p className="text-sm text-frost-white/60 leading-relaxed">
                  {activeAgent.cases[activeCaseIndex].solution}
                </p>
              </div>

              <div className="w-full h-px bg-frost-white/5" />

              <div className="p-4 rounded-xl bg-glaciar-neon/5 border border-glaciar-neon/15">
                <p
                  className="text-xs uppercase tracking-widest text-glaciar-neon/60 mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  El resultado
                </p>
                <p className="text-sm text-frost-white/70 leading-relaxed">
                  {activeAgent.cases[activeCaseIndex].result}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
