"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Casos de uso", href: "#casos-de-uso" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-arctic-navy/95 backdrop-blur-md border-b border-glaciar-neon/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
            aria-label="Antartida Labs — Inicio"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo/pinguino.png"
                alt="Antartida Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="font-display font-bold text-lg tracking-tight text-frost-white group-hover:text-glaciar-neon transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Antartida Labs
              </span>
              <p className="text-xs text-glaciar-neon/70 font-mono -mt-0.5"
                 style={{ fontFamily: "var(--font-mono)" }}>
                Inteligencia Artificial del Sur
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-frost-white/70 hover:text-frost-white hover:bg-frost-white/5 rounded-lg transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contacto")}
              className="ml-4 px-5 py-2.5 text-sm font-semibold bg-glaciar-neon text-arctic-navy rounded-lg hover:bg-glaciar-neon/90 transition-all duration-200 hover:shadow-neon cursor-pointer"
            >
              Contactanos
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-frost-white/70 hover:text-frost-white hover:bg-frost-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 space-y-1 border-t border-frost-white/5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-frost-white/70 hover:text-frost-white hover:bg-frost-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-2">
              <button
                onClick={() => handleNavClick("#contacto")}
                className="w-full px-4 py-3 text-sm font-semibold bg-glaciar-neon text-arctic-navy rounded-lg hover:bg-glaciar-neon/90 transition-colors cursor-pointer"
              >
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
