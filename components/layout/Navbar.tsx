"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/16287266439?text=Hola,%20deseo%20diseñar%20un%20viaje%20personalizado%20con%20Suescun%20Signature%20Travel.";

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Coordenadas", href: "/coordenadas" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#C5A880]/20 transition-all duration-300">
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

        {/* Navegación de Escritorio */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-light text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#C5A880] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
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

          {/* Menú Mobile Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#C5A880] p-2 focus:outline-none transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-[#C5A880]/20 px-6 py-6 flex flex-col gap-4 text-center backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C5A880] py-2 border-b border-neutral-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full w-full mt-2 transition-all hover:bg-[#b0926b]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Asesoría Directa por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}