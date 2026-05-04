import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arctic-navy-950 border-t border-frost-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 opacity-90">
                <Image
                  src="/logo/pinguino.png"
                  alt="Antartida Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p
                  className="font-display font-bold text-frost-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Antartida Labs
                </p>
                <p
                  className="text-xs text-glaciar-neon/60"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Inteligencia Artificial del Sur
                </p>
              </div>
            </div>
            <p className="text-sm text-frost-white/50 leading-relaxed max-w-xs">
              Agentes de Inteligencia Artificial como servicio para automatizar
              y optimizar los procesos de tu empresa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-glaciar-neon/60 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Navegación
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-frost-white/50 hover:text-frost-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-glaciar-neon/60 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-frost-white/50 hover:text-frost-white transition-colors"
                >
                  Formulario de contacto
                </a>
              </li>
              <li>
                {/* Redes sociales — se agregarán en iteración futura */}
                <span className="text-sm text-frost-white/25 italic">
                  Redes sociales próximamente
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h3
                className="text-xs font-semibold uppercase tracking-widest text-glaciar-neon/60 mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacidad"
                    className="text-sm text-frost-white/50 hover:text-frost-white transition-colors"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="/terminos"
                    className="text-sm text-frost-white/50 hover:text-frost-white transition-colors"
                  >
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-frost-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-frost-white/30">
            © {currentYear} Antartida Labs. Todos los derechos reservados.
          </p>
          <p
            className="text-xs text-glaciar-neon/30"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Hecho en el Sur 🐧
          </p>
        </div>
      </div>
    </footer>
  );
}
