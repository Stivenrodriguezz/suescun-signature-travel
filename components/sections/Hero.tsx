"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, MessageCircle, Menu, X } from "lucide-react";

// Número de WhatsApp configurado (Estados Unidos)
const WHATSAPP_NUMBER = "16287266439";

// Mensaje predeterminado para WhatsApp
const WHATSAPP_MESSAGE =
  "Hola Suescun Signature Travel, deseo solicitar una cotización personalizada. Por favor me brindan información de planes, fechas y tarifas. ¡Quedo atento!";

// ==========================================
// 1. ENCABEZADO / NAVBAR (HEADER)
// ==========================================

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#C5A880]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo / Marca Corporativa INTACTO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-black/60 group-hover:bg-[#C5A880] transition-all duration-300">
            <Compass className="w-5 h-5 text-[#C5A880] group-hover:text-black transition-colors" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider text-white group-hover:text-[#C5A880] transition-colors">
              SUESCUN
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880]">
              Signature Travel
            </span>
          </div>
        </Link>

        {/* Navegación Principal */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
          >
            Inicio
          </a>

          <Link
            href="/coordenadas"
            className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors"
          >
            Coordenadas
          </Link>

          <a
            href="#servicios"
            className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors"
          >
            Servicios
          </a>

          <Link
            href="/contacto"
            className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Botones de acción */}
        <div className="flex items-center gap-4">

          {/* WhatsApp Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow-md shadow-[#C5A880]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Asesoría 1 a 1</span>
          </a>

          {/* Menú móvil */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="md:hidden inline-flex items-center justify-center text-[#C5A880] p-2 focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* ==========================================
          PANEL DESPLEGABLE MÓVIL
          ========================================== */}

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md border-b border-[#C5A880]/30 px-6 py-6 flex flex-col gap-2 text-center shadow-2xl">

          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Inicio
          </a>

          <Link
            href="/coordenadas"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Coordenadas
          </Link>

          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Servicios
          </a>

          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Contacto
          </Link>

          {/* WhatsApp móvil */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-[0.15em] uppercase px-6 py-3.5 rounded-full w-full mt-4 transition-colors hover:bg-[#b0926b]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Asesoría 1 a 1</span>
          </a>
        </div>
      )}
    </header>
  );
}

// ==========================================
// 2. HERO COMPONENT
// ==========================================

function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto flex items-center overflow-hidden"
    >
      {/* Luz ambiental dorada de fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C5A880]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center z-10">

        {/* Columna Izquierda: Video con Marco Cinemático */}
        <div className="lg:col-span-6 relative group">

          <div className="absolute -inset-0.5 bg-linear-to-r from-[#C5A880]/30 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />

          <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-[#C5A880]/20 bg-neutral-900/80 shadow-2xl">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay sutil para matiz de cine */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Etiqueta Flotante */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A880]/30">
                Experiencias
              </span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información y Tipografía */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:pl-4">

          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/5 backdrop-blur-md">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A880]" />
            </span>

            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#C5A880] uppercase">
              Sedes en USA (San Francisco) & Colombia (Bogotá)
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-white leading-[1.15] tracking-wide">
            Sincronizando tu estilo de vida con las{" "}
            <span className="italic font-normal bg-linear-to-r from-[#E6D5B8] via-[#C5A880] to-[#9A7B4F] bg-clip-text text-transparent">
              coordenadas
            </span>{" "}
            más extraordinarias del mundo.
          </h1>

          {/* Subtítulo */}
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Diseño de viajes a la medida (
            <span className="text-white italic">&quot;Bespoke&quot;</span>),
            vuelos internacionales First Class y acceso exclusivo a las
            colecciones de hoteles más prestigiosas del planeta.
          </p>

          {/* Botón Principal */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/coordenadas"
              className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#D4B891] via-[#C5A880] to-[#A88B60] text-black font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-lg shadow-[#C5A880]/15 hover:shadow-[#C5A880]/30 hover:brightness-110 active:scale-95"
            >
              <span>Explorar Coordenadas</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Métricas y Sellos VIP */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80 w-full mt-2">

            <div>
              <p className="text-lg lg:text-xl font-serif text-[#C5A880]">
                100%
              </p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                A la medida
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-xl font-serif text-[#C5A880]">
                24/7
              </p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                Atención VIP
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-xl font-serif text-[#C5A880]">
                First Class
              </p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                Acceso Global
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. PILARES / SERVICIOS DESTACADOS
// ==========================================

function Pillars() {
  const pillars = [
    {
      number: "01",
      title: "Itinerarios Bespoke",
      desc: "Diseño itinerante 100% personalizado según tus gustos, ritmos y preferencias privadas.",
    },
    {
      number: "02",
      title: "Vuelos & First Class",
      desc: "Acceso preferencial a cabinas de primera clase, aviación ejecutiva y conexiones sin fricción.",
    },
    {
      number: "03",
      title: "Colección de Hoteles VIP",
      desc: "Trato preferencial, upgrades de suite, beneficios exclusivos y amenities reservados de bienvenida.",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-800/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">

        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
            Exclusividad
          </span>

          <h2 className="text-2xl sm:text-4xl font-serif text-white mt-1">
            Servicios de Firma
          </h2>
        </div>

        <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
          Atención integral de punta a punta para que cada travesía refleje tus
          altos estándares de sofisticación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-8 rounded-xl border border-[#C5A880]/15 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-[#C5A880]/40 transition-all duration-500"
          >
            <span className="text-3xl font-serif text-[#C5A880]/40 group-hover:text-[#C5A880] transition-colors">
              {item.number}
            </span>

            <h3 className="text-lg font-serif text-white mt-4 mb-2">
              {item.title}
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

// ==========================================
// 4. BLOQUE DE CONTACTO / CTA RÁPIDO
// ==========================================

function ContactCTA() {
  return (
    <section
      id="contacto"
      className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="relative rounded-2xl border border-[#C5A880]/30 bg-linear-to-b from-neutral-900/90 to-black p-8 sm:p-14 text-center overflow-hidden">

        {/* Destello de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C5A880]/10 blur-3xl pointer-events-none" />

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880]">
          Inicia la conversación
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif text-white mt-3 mb-4 max-w-2xl mx-auto leading-snug">
          ¿Listo para trazar tus próximas coordenadas?
        </h2>

        <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-lg mx-auto mb-8">
          Déjanos los detalles de tu próximo viaje o agenda una asesoría
          privada con nuestros especialistas en San Francisco o Bogotá.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">

          <Link
            href="/contacto"
            className="w-full sm:w-auto bg-linear-to-r from-[#D4B891] via-[#C5A880] to-[#A88B60] text-black font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all hover:brightness-110 text-center"
          >
            Ir a Contacto
          </Link>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// PÁGINA PRINCIPAL COMPLETA
// ==========================================

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#C5A880]/30 selection:text-[#E6D5B8] relative">

      <Navbar />

      <main>
        <Hero />
        <Pillars />
        <ContactCTA />
      </main>

      {/* FOOTER CORPORATIVO */}
      <footer className="border-t border-neutral-800 bg-black py-12 px-6 lg:px-12 text-center text-xs text-neutral-500 font-light">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C5A880]" />

            <span className="text-neutral-300 font-serif">
              SUESCUN SIGNATURE TRAVEL
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Suescun Signature Travel. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                WHATSAPP_MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880]"
            >
              Atención Directa WhatsApp
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}