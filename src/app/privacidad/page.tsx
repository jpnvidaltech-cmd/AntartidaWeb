import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos de Antartida Labs.",
};

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p
          className="text-sm text-frost-white/30 mb-10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Última actualización: Mayo 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-frost-white/60 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">1. Datos que recopilamos</h2>
            <p>
              A través del formulario de contacto de este sitio web, Antartida Labs recopila la
              siguiente información: nombre y apellido, dirección de correo electrónico, número de
              teléfono de contacto, nombre de empresa (opcional) y el mensaje enviado por el usuario.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">2. Finalidad del tratamiento</h2>
            <p>
              Los datos recopilados a través del formulario de contacto son utilizados exclusivamente
              para responder a las consultas y solicitudes enviadas por el usuario, y para mantener
              comunicación comercial relacionada con los servicios de Antartida Labs. No utilizamos
              los datos para fines publicitarios de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">3. Almacenamiento y transferencia de datos</h2>
            <p>
              Los datos del formulario son transmitidos de forma segura a través de HTTPS a los
              sistemas internos de gestión de Antartida Labs. No vendemos ni cedemos datos personales
              a terceros con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">4. Derechos del usuario</h2>
            <p>
              El usuario tiene derecho a acceder, rectificar o eliminar sus datos personales en
              cualquier momento. Para ejercer estos derechos, puede contactarnos a través del
              formulario de contacto indicando su solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">5. Cookies</h2>
            <p>
              Este sitio web no utiliza cookies de seguimiento ni de publicidad. Únicamente se
              utilizan las cookies técnicas estrictamente necesarias para el funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-frost-white mb-2">6. Contacto</h2>
            <p>
              Para consultas relacionadas con el tratamiento de tus datos personales, podés
              comunicarte con nosotros a través del formulario de contacto disponible en el sitio web.
            </p>
          </section>

          <div className="pt-4 border-t border-frost-white/5">
            <p className="text-xs text-frost-white/25 italic">
              Esta política de privacidad es un documento de ejemplo. Se recomienda revisarla y
              adaptarla con asesoramiento legal antes del lanzamiento en producción.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
