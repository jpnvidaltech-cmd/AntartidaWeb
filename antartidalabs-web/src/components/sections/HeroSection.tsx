"use client";

import Image from "next/image";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-arctic-gradient" />

      {/* Neon glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-glaciar-neon/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-glaciar-neon/8 blur-2xl animate-pulse-slow animate-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-arctic-navy-800/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glaciar-neon/30 bg-glaciar-neon/5 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-glaciar-neon animate-pulse" />
              <span
                className="text-xs font-medium text-glaciar-neon tracking-wider uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Agent As A Service — AAAS
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-up"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-5xl sm:text-6xl xl:text-7xl text-frost-white">
                Antartida
              </span>
              <span className="block text-5xl sm:text-6xl xl:text-7xl text-gradient-neon mt-1">
                Labs
              </span>
              <span className="block text-xl sm:text-2xl xl:text-3xl text-frost-white/60 font-normal mt-4 tracking-normal">
                Inteligencia Artificial del Sur
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-frost-white/60 leading-relaxed mb-10 max-w-xl animate-fade-up animate-delay-200">
              Automatizá los procesos críticos de tu empresa con agentes de IA
              listos para operar. Sin equipos internos, sin infraestructura
              propia. Solo resultados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <button
                onClick={() => scrollTo("#servicios")}
                className="group px-8 py-4 bg-glaciar-neon text-arctic-navy font-semibold rounded-xl hover:bg-glaciar-neon/90 transition-all duration-200 hover:shadow-neon-lg text-center"
              >
                Conocé nuestros agentes
                <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button
                onClick={() => scrollTo("#contacto")}
                className="px-8 py-4 border border-glaciar-neon/30 text-frost-white font-semibold rounded-xl hover:border-glaciar-neon/60 hover:bg-glaciar-neon/5 transition-all duration-200 text-center"
              >
                Contactanos
              </button>
            </div>

            {/* Stats row */}
            <div className="mt-16 pt-8 border-t border-frost-white/5 grid grid-cols-3 gap-6 animate-fade-up animate-delay-500">
              {[
                { value: "3", label: "Agentes disponibles" },
                { value: "24/7", label: "Disponibilidad" },
                { value: "0", label: "Infraestructura requerida" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl sm:text-3xl font-bold text-glaciar-neon font-display"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-frost-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-glaciar-neon/10 blur-2xl scale-110 animate-glow-pulse" />

              {/* Inner glow ring */}
              <div className="absolute inset-8 rounded-full bg-glaciar-neon/5 blur-xl animate-pulse-slow" />

              {/* Logo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                <Image
                  src="/logo/pinguino.png"
                  alt="Antartida Labs — Agente de IA"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative circuit lines */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-glaciar-neon/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span
          className="text-xs text-frost-white/40 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-glaciar-neon/60 to-transparent" />
      </div>
    </section>
  );
}
