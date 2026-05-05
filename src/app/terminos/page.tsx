import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de los servicios de Antartida Labs.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-arctic-navy pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-glaciar-neon/70 hover:text-glaciar-neon transition-colors mb-8"
        >
          ← Volver al inicio
        </Link>

        <h1
          className="text-4xl font-bold text-frost-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Términos y Condiciones
        </h1>
        <p
          className="text-sm text-frost-white/30 mb-10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Última actualización: Mayo 2026
        </p>

        <div className="space-y-6 text-frost-white/60 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">1. Objeto</h2>
            <p className="text-sm">
              Los presentes Términos y Condiciones regulan el uso del sitio web de Antartida Labs
              (antartidalabs.com) y los servicios ofrecidos bajo el modelo AAAS (Agent As A Service).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">2. Uso del sitio</h2>
            <p className="text-sm">
              El usuario se compromete a utilizar el sitio web y sus funcionalidades de forma lícita,
              sin realizar actividades que puedan dañar, inutilizar o deteriorar el sitio o los
              derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">3. Propiedad intelectual</h2>
            <p className="text-sm">
              Todos los contenidos del sitio web — incluyendo textos, imágenes, logotipos y código —
              son propiedad de Antartida Labs o de sus licenciantes. Queda prohibida su reproducción
              sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">4. Limitación de responsabilidad</h2>
            <p className="text-sm">
              Antartida Labs no garantiza la disponibilidad continua del sitio web y no se
              responsabiliza por los daños derivados de su uso o de la imposibilidad de acceder al mismo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">5. Modificaciones</h2>
            <p className="text-sm">
              Antartida Labs se reserva el derecho de modificar estos Términos y Condiciones en
              cualquier momento. Los cambios serán publicados en esta página con indicación de la
              fecha de actualización.
            </p>
          </section>

          <div className="pt-4 border-t border-frost-white/5">
            <p className="text-xs text-frost-white/25 italic">
              Este documento es un ejemplo de referencia. Se recomienda revisarlo con asesoramiento
              legal antes del lanzamiento en producción.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
