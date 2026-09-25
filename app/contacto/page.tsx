'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Send, 
  MessageCircle, 
  User, 
  Plane, 
  Users, 
  Building2, 
  ShieldCheck,
  Globe,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Clock,
  Menu,
  X
} from 'lucide-react';

const WHATSAPP_NUMBER = "16287266439";

export default function ContactoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    origen: '',
    destino: '',
    tipoVuelo: 'Ida y Vuelta',
    preferenciaVuelo: 'Directo (si está disponible)',
    fechaSalida: '',
    fechaRegreso: '',
    adultos: '2',
    ninos: '0',
    pasaporte: 'Sí, todos vigentes',
    visa: 'Sí, cuento con Visa vigente',
    incluyeHotel: 'Sí (Colección VIP 5★ / Luxury)',
    presupuesto: '$5,000 - $10,000 USD',
    notas: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensajeWhatsApp = 
`🏛️ *NUEVA SOLICITUD DE COTIZACIÓN*
*SUESCUN SIGNATURE TRAVEL*

👤 *1. DATOS DEL CLIENTE*
- *Nombre:* 
${formData.nombre}
- *Contacto / Tel:* 
${formData.telefono}
- *Origen:* 
${formData.origen}

✈️ *2. DETALLES DE LA TRAVESÍA*
- *Destino Deseado:* 
${formData.destino}
- *Modalidad:* 
${formData.tipoVuelo}
- *Conexiones:* 
${formData.preferenciaVuelo}
- *Fecha de Salida:* 
${formData.fechaSalida}
${formData.tipoVuelo === 'Ida y Vuelta' ? `• *Fecha de Regreso:* ${formData.fechaRegreso}\n` : ''}
👥 *3. PASAJEROS Y DOCUMENTACIÓN*
- *Pasajeros:* 
${formData.adultos} Adulto(s) | ${formData.ninos} Niño(s)
- *Pasaporte Vigente:* 
${formData.pasaporte}
- *Visa Requerida:* 
${formData.visa}

🏨 *4. ALOJAMIENTO Y PRESUPUESTO*
- *Hospedaje:* 
${formData.incluyeHotel}
- *Presupuesto Estimado:* 
${formData.presupuesto}

${formData.notas ? `📝 *5. NOTAS O REQUERIMIENTOS ESPECIALES:*
${formData.notas}\n` : ''}
---
*Enviado desde el portal oficial suescunsignaturetravel.com*`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#C5A880]/30 selection:text-[#E6D5B8]">
      
      {/* NAVBAR FIXA Y RESPONSIVA */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#C5A880]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo Intacto */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-black/60 group-hover:bg-[#C5A880] transition-all duration-300 shadow-sm shadow-[#C5A880]/30">
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

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors">
              Inicio
            </Link>
            <Link href="/coordenadas" className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors">
              Coordenadas
            </Link>
            <Link href="/#servicios" className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#C5A880] transition-colors">
              Servicios
            </Link>
            <Link href="/contacto" className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Botón WhatsApp Desktop */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A880] to-[#E6D5B8] text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow-md shadow-[#C5A880]/20 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>Asesoría Directa</span>
          </a>

          {/* Menú Mobile Hamburguesa */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#C5A880] p-2 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-[#C5A880]/20 px-6 py-6 space-y-4">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C5A880]"
            >
              Inicio
            </Link>
            <Link 
              href="/coordenadas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C5A880]"
            >
              Coordenadas
            </Link>
            <Link 
              href="/#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C5A880]"
            >
              Servicios
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-[#C5A880]"
            >
              Contacto
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full w-full"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Asesoría Directa por WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* ENCABEZADO DE PÁGINA */}
      <section className="pt-36 pb-12 px-6 lg:px-12 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
        
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[10px] uppercase tracking-[0.3em] text-[#C5A880] mb-3">
          <Sparkles className="w-3 h-3 text-[#C5A880]" /> Atención Privada & Bespoke
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-serif text-white mt-2 mb-4 tracking-tight">
          Solicitud de Cotización VIP
        </h1>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
          Ingresa los parámetros de tu viaje a continuación. La información se consolidará automáticamente y se abrirá tu WhatsApp para recibir atención personalizada e itinerarios a la medida de inmediato.
        </p>
      </section>

      {/* CONTENIDO PRINCIPAL: FORMULARIO + PERFILES EJECUTIVOS */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO INTERACTIVO (8 COLS) */}
        <div className="lg:col-span-8 bg-neutral-900/80 border border-[#C5A880]/25 p-6 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* SECCIÓN 1: DATOS PERSONALES */}
            <div>
              <h3 className="text-xs font-serif text-[#C5A880] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <User className="w-4 h-4 text-[#C5A880]" /> 1. Información del Titular
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej. Mateo Suescun"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+1 628 000 0000"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Ciudad y País de Origen *</label>
                  <input
                    type="text"
                    name="origen"
                    required
                    placeholder="Ej. Bogotá, Colombia / San Francisco, USA"
                    value={formData.origen}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: LOGÍSTICA DE VUELO */}
            <div>
              <h3 className="text-xs font-serif text-[#C5A880] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Plane className="w-4 h-4 text-[#C5A880]" /> 2. Coordenadas del Viaje
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Lugar o Destino que Desea Visitar *</label>
                  <input
                    type="text"
                    name="destino"
                    required
                    placeholder="Cualquier país, ciudad o aeropuerto del mundo (Ej. Tokio, Madrid, Cancún...)"
                    value={formData.destino}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Modalidad de Vuelo</label>
                  <select
                    name="tipoVuelo"
                    value={formData.tipoVuelo}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="Ida y Vuelta">Ida y Vuelta</option>
                    <option value="Solo Ida">Solo Ida</option>
                    <option value="Múltiples Ciudades / Multidestino">Múltiples Ciudades / Multidestino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Escalas o Preferencia</label>
                  <select
                    name="preferenciaVuelo"
                    value={formData.preferenciaVuelo}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="Directo (si está disponible)">Directo (si está disponible)</option>
                    <option value="Permitir Escalas (Para optimizar costo)">Permitir Escalas (Para optimizar costo)</option>
                    <option value="First Class / Business Class">First Class / Business Class</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Fecha Tentativa de Salida *</label>
                  <input
                    type="date"
                    name="fechaSalida"
                    required
                    value={formData.fechaSalida}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors color-scheme-dark"
                  />
                </div>

                {formData.tipoVuelo === 'Ida y Vuelta' && (
                  <div>
                    <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Fecha Tentativa de Regreso *</label>
                    <input
                      type="date"
                      name="fechaRegreso"
                      required
                      value={formData.fechaRegreso}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors color-scheme-dark"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* SECCIÓN 3: PASAJEROS Y DOCUMENTACIÓN */}
            <div>
              <h3 className="text-xs font-serif text-[#C5A880] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Users className="w-4 h-4 text-[#C5A880]" /> 3. Pasajeros y Documentación
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Adultos</label>
                  <select
                    name="adultos"
                    value={formData.adultos}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="1">1 Adulto</option>
                    <option value="2">2 Adultos</option>
                    <option value="3">3 Adultos</option>
                    <option value="4">4 Adultos</option>
                    <option value="5+">5+ Adultos (Grupo VIP)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Niños (0 - 12 años)</label>
                  <select
                    name="ninos"
                    value={formData.ninos}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="0">0 Niños</option>
                    <option value="1">1 Niño</option>
                    <option value="2">2 Niños</option>
                    <option value="3+">3+ Niños</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Pasaporte Vigente</label>
                  <select
                    name="pasaporte"
                    value={formData.pasaporte}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="Sí, todos vigentes">Sí, todos vigentes</option>
                    <option value="En trámite / Por renovar">En trámite / Por renovar</option>
                    <option value="No posee actualmente">No posee actualmente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Visa Requerida / Estatus</label>
                  <select
                    name="visa"
                    value={formData.visa}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="Sí, cuento con Visa vigente">Sí, cuento con Visa vigente</option>
                    <option value="No requiere para el destino">No requiere para el destino</option>
                    <option value="En trámite / Necesito asesoría">En trámite / Necesito asesoría</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECCIÓN 4: ALOJAMIENTO Y PRESUPUESTO */}
            <div>
              <h3 className="text-xs font-serif text-[#C5A880] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Building2 className="w-4 h-4 text-[#C5A880]" /> 4. Alojamiento y Presupuesto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Preferencia de Hospedaje</label>
                  <select
                    name="incluyeHotel"
                    value={formData.incluyeHotel}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="Sí (Colección VIP 5★ / Luxury)">Sí (Colección VIP 5★ / Luxury)</option>
                    <option value="Solo Vuelos (Sin Hospedaje)">Solo Vuelos (Sin Hospedaje)</option>
                    <option value="Resort All-Inclusive Premium">Resort All-Inclusive Premium</option>
                    <option value="Villa Privada / Boutique">Villa Privada / Boutique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">Presupuesto Estimado (USD)</label>
                  <select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors [&>option]:bg-neutral-900"
                  >
                    <option value="$3,000 - $5,000 USD">$3,000 - $5,000 USD</option>
                    <option value="$5,000 - $10,000 USD">$5,000 - $10,000 USD</option>
                    <option value="$10,000 - $20,000 USD">$10,000 - $20,000 USD</option>
                    <option value="+$20,000 USD (Ultra Luxury)">+$20,000 USD (Ultra Luxury)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECCIÓN 5: NOTAS O REQUERIMIENTOS ESPECIALES */}
            <div>
              <h3 className="text-xs font-serif text-[#C5A880] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Sparkles className="w-4 h-4 text-[#C5A880]" /> 5. Requerimientos Especiales
              </h3>
              <div>
                <label className="block text-[11px] uppercase text-neutral-400 tracking-wider mb-2">
                  Notas Adicionales / Experiencias Deseadas
                </label>
                <textarea
                  name="notas"
                  rows={4}
                  placeholder="Detalla preferencias de aerolíneas, ocasiones especiales (luna de miel, aniversario), traslados helitransportados, solicitudes gastronómicas..."
                  value={formData.notas}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-colors"
                />
              </div>
            </div>

            {/* BOTÓN DE ENVÍO POR WHATSAPP */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C5A880] via-[#E6D5B8] to-[#C5A880] text-black font-bold uppercase text-xs tracking-[0.2em] py-4 rounded-xl hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#C5A880]/20 flex items-center justify-center gap-3 active:scale-[0.99]"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>Solicitar Cotización VIP por WhatsApp</span>
              </button>
              <p className="text-[10px] text-center text-neutral-500 mt-3">
                🔒 Tus datos están protegidos y serán tratados de forma estrictamente confidencial.
              </p>
            </div>

          </form>
        </div>

        {/* COLUMNA DERECHA: INFORMACIÓN EJECUTIVA Y GARANTÍAS (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Tarjeta de Asesoría VIP */}
          <div className="bg-neutral-900/80 border border-[#C5A880]/20 p-6 rounded-2xl backdrop-blur-md">
            <div className="w-12 h-12 rounded-full border border-[#C5A880]/40 flex items-center justify-center bg-[#C5A880]/10 mb-4">
              <PhoneCall className="w-6 h-6 text-[#C5A880]" />
            </div>
            <h4 className="font-serif text-lg text-white mb-2">Concierge Directo VIP</h4>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Si prefieres asistencia personalizada inmediata por llamada o canal privado corporativo, contáctanos directamente.
            </p>
            <div className="space-y-3 border-t border-neutral-800 pt-4 text-xs">
              <div className="flex items-center gap-3 text-neutral-300">
                <Globe className="w-4 h-4 text-[#C5A880]" />
                <span>Atención Internacional Global 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>Respuesta Estimada: &lt; 30 Minutos</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Membresías & Convenios Exclusivos</span>
              </div>
            </div>
          </div>

          {/* Garantías Suescun Signature */}
          <div className="bg-neutral-900/80 border border-[#C5A880]/20 p-6 rounded-2xl backdrop-blur-md space-y-4">
            <h4 className="font-serif text-base text-[#C5A880] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C5A880]" /> Garantía Suescun
            </h4>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Acceso Preferencial</h5>
                  <p className="text-neutral-400 leading-relaxed">Prioridad en suites luxury, upgrades y beneficios gastronómicos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Tarifas Consolidadas</h5>
                  <p className="text-neutral-400 leading-relaxed">Acceso a inventarios privados de aviación comercial y ejecutiva.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Monitoreo en Tiempo Real</h5>
                  <p className="text-neutral-400 leading-relaxed">Soporte continuo durante todo tu itinerario de viaje.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sello de Marca */}
          <div className="p-6 rounded-2xl border border-[#C5A880]/15 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-center space-y-2">
            <Compass className="w-8 h-8 text-[#C5A880] mx-auto opacity-80" />
            <h5 className="font-serif text-sm text-white tracking-widest uppercase">SUESCUN SIGNATURE</h5>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Experiencias de Viaje Bespoke</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-black/60 py-8 px-6 text-center text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Suescun Signature Travel. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-[11px]">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Términos VIP</Link>
            <Link href="/" className="hover:text-[#C5A880] transition-colors">Privacidad</Link>
            <Link href="/contacto" className="hover:text-[#C5A880] transition-colors">Soporte</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}