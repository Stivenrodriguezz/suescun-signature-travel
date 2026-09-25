"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/16287266439?text=Hola,%20deseo%20diseñar%20un%20viaje%20personalizado%20con%20Suescun%20Signature%20Travel.";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#C5A880]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-bold text-white uppercase group-hover:text-[#C5A880] transition-colors duration-300">
            Suescun
          </span>

          <span className="text-[9px] tracking-[0.35em] text-[#C5A880] uppercase font-light">
            Signature Travel
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-light text-neutral-300">
          <Link
            href="/"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Inicio
          </Link>

          <Link
            href="/coordenadas"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Coordenadas
          </Link>

          <Link
            href="/#servicios"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Servicios
          </Link>

          <Link
            href="/contacto"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón WhatsApp Desktop y Botón Hamburguesa Móvil */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/10 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-300 text-xs tracking-[0.15em] uppercase font-medium shadow-md shadow-[#C5A880]/10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contacto VIP</span>
          </a>

          {/* Botón Menú Hamburguesa Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#C5A880] p-2 focus:outline-none"
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

      {/* Panel desplegable móvil */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-black border-b border-[#C5A880]/30 px-6 py-6 flex flex-col gap-2 text-center z-50 shadow-2xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Inicio
          </Link>

          <Link
            href="/coordenadas"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Coordenadas
          </Link>

          <Link
            href="/#servicios"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Servicios
          </Link>

          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-white hover:text-[#C5A880] py-3 border-b border-neutral-800 block"
          >
            Contacto
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-[0.15em] uppercase px-6 py-3.5 rounded-full w-full mt-4 transition-colors hover:bg-[#b0926b]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Asesoría Directa por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}