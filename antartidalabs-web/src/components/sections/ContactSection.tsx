import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-arctic-navy via-arctic-navy-light/30 to-arctic-navy" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glaciar-neon/25 to-transparent" />

      {/* Glow orb */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-glaciar-neon/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="lg:sticky lg:top-28">
            <p
              className="text-xs font-medium text-glaciar-neon/60 uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contacto
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-frost-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hablemos sobre
              <br />
              <span className="text-gradient-neon">tu próximo agente</span>
            </h2>
            <p className="text-lg text-frost-white/50 leading-relaxed mb-10">
              Contanos qué proceso querés automatizar. Te respondemos en menos de
              24 horas hábiles con una propuesta concreta.
            </p>

            {/* Contact highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Respuesta en menos de 24 horas hábiles",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Sin compromiso — solo una conversación",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  ),
                  text: "Atención personalizada desde el primer contacto",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-frost-white/50">
                  <div className="w-8 h-8 rounded-lg bg-glaciar-neon/10 flex items-center justify-center text-glaciar-neon flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="rounded-2xl border border-frost-white/8 bg-card p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
