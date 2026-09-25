/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  X,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  DollarSign,
  Search,
  Sparkles,
  Clock,
  ShieldCheck,
  Compass,
  MessageCircle,
  Award,
  Users,
} from "lucide-react";

export interface Destino {
  id: number;
  titulo: string;
  pais: string;
  region: "America" | "Caribe" | "Europa" | "Asia";
  imagenes: string[];
  tag: string;
  requiereVisa: boolean;
  duracionRecomendada: string;
  descripcion: string;
  ventajas: string[];
  imperdibles: string[];
  incluye: string[];
  requisitos: string;
  mejorEpoca: string;
  presupuesto: string;
}

// NUMERO DE WHATSAPP CORPORATIVO
const WHATSAPP_NUMBER = "16287266439";

// 10 DESTINOS MÁS SOLICITADOS (5 FOTOS HD CADA UNO)
const destinosPopulares: Destino[] = [
  {
    id: 1,
    titulo: "Magia en Orlando & Miami",
    pais: "Estados Unidos",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1597466599360-153835bd0ec0?q=80&w=1200", // Disney Castle
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", // Miami Beach
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200", // Universal Rollercoaster
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1200", // Ocean Drive Miami
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200", // Resort Pool Orlando
    ],
    tag: "Disney & Universal VIP",
    requiereVisa: true,
    duracionRecomendada: "8 a 12 Días",
    descripcion:
      "Combina la emoción inigualable de los parques temáticos de Walt Disney World y Universal Studios en Orlando, con la elegancia, gastronomía de autor, compras libre de impuestos y playas doradas de Miami.",
    ventajas: [
      "Pases Express y pases VIP para evitar hasta un 80% de filas en parques",
      "Asesoría experta en reserva de restaurantes temáticos dentro de Disney",
      "Rutas exclusivas de compras en Sawgrass Mills y Orlando Vineland Outlets",
      "Vuelos directos desde Bogotá, Medellín y Cali con equipaje incluido",
    ],
    imperdibles: [
      "Espectáculo nocturno de fuegos artificiales en el Castillo de Cenicienta",
      "Entrada a Star Wars: Galaxy's Edge y World of Avatar",
      "Paseo en yate privado por las mansiones de Biscayne Bay en Miami",
    ],
    incluye: [
      "Tiquetes aéreos ida y vuelta con maleta de bodega",
      "Hospedaje en Hoteles dentro o adyacentes al complejo Disney/Universal",
      "Entradas multidía a parques con opción Park Hopper",
      "Alquiler de auto SUV con seguros totales o traslados privados",
    ],
    requisitos: "Pasaporte vigente y Visa Americana de Turismo (B1/B2).",
    mejorEpoca: "Septiembre a Noviembre y Enero a Marzo (Baja afluencia).",
    presupuesto: "Medio - Alto",
  },
  {
    id: 2,
    titulo: "Riviera Maya & Cancún All-Inclusive",
    pais: "México",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=1200", // Cancun Beach
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Chichen Itza
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Cenote Maya
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Resort All Inclusive Pool
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Isla Mujeres
    ],
    tag: "Resorts 5★ Todo Incluido",
    requiereVisa: false,
    duracionRecomendada: "5 a 8 Días",
    descripcion:
      "El paraíso definitivo del Caribe mexicano. Disfruta de playas de arena blanca como talco, místicas ruinas mayas frente al mar, cenotes sagrados cristalinos y resorts de lujo con servicio ilimitado 24/7.",
    ventajas: [
      "Planes All-Inclusive premium con gastronomía gourmet y licores ilimitados",
      "Niños gratis o con tarifas preferenciales en resorts seleccionados",
      "Excursiones privadas a la Maravilla del Mundo Chichén Itzá",
      "Excelente conectividad de vuelos directos desde Colombia",
    ],
    imperdibles: [
      "Nadar en los cenotes subterráneos de la Riviera Maya",
      "Navegación en catamarán con open bar hacia Isla Mujeres",
      "Día completo de aventura y shows culturales en Parque Xcaret",
    ],
    incluye: [
      "Vuelos directos ida y vuelta con impuestos",
      "Estadía All-Inclusive en Resort 5 Estrellas a la orilla del mar",
      "Traslados aeropuerto - hotel - aeropuerto en servicio privado",
      "Tarjeta de asistencia médica internacional con cobertura amplia",
    ],
    requisitos: "Pasaporte vigente y prerregistro electrónico (Pre-chequeo México).",
    mejorEpoca: "Noviembre a Mayo (Clima seco, soleado y brisa fresca).",
    presupuesto: "Económico - Medio",
  },
  {
    id: 3,
    titulo: "Super Nintendo World & Tokio Imperial",
    pais: "Japón",
    region: "Asia",
    imagenes: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200", // Tokyo Pagoda & Mount Fuji
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200", // Tokyo Neon Shibuya
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200", // Sensoji Temple Tokyo
      "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200", // Japanese Cherry Blossoms / Osaka
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200", // Shinkansen Bullet Train
    ],
    tag: "Futuro, Anime & Tradición",
    requiereVisa: false,
    duracionRecomendada: "12 a 15 Días",
    descripcion:
      "Ingresa a un mundo donde la tradición milenaria se fusiona con la tecnología futurista. Explora la vertiginosa Tokio, vive el mundo interactivo de Mario Bros en Universal Osaka y maravíllate con el Monte Fuji.",
    ventajas: [
      "Sin requisito de visa consular previa para ciudadanos colombianos",
      "Pases Express garantizados para Super Nintendo World & Harry Potter",
      "Viaje ultra cómodo en el famoso tren bala JR Bullet Train",
      "Guías bilingües en español durante todo el circuito cultural",
    ],
    imperdibles: [
      "Atracción interactiva Mario Kart Koopa's Challenge en Osaka",
      "Cruzar el icónico paso peatonal de Shibuya al anochecer",
      "Noche en un Ryokan tradicional con baños termales Onsen frente al Fuji",
    ],
    incluye: [
      "Tiquetes aéreos internacionales de alta gama",
      "Pase de tren JR Rail Pass ilimitado para todo Japón",
      "Hospedajes boutique seleccionados en Tokio, Kioto y Osaka",
      "Entradas VIP a parques y atracciones principales",
    ],
    requisitos: "Pasaporte biométrico vigente (Mínimo 6 meses de validez).",
    mejorEpoca: "Marzo a Mayo (Cerezos en flor - Sakura) y Octubre a Noviembre.",
    presupuesto: "Alto / Exclusivo",
  },
  {
    id: 4,
    titulo: "Río de Janeiro, Búzios & Angra",
    pais: "Brasil",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200", // Christ Redeemer
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1200", // Sugarloaf Mountain
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200", // Copacabana Aerial
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Buzios Cove Beach
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Ipanema Sunset
    ],
    tag: "Samba, Sol & Playas",
    requiereVisa: false,
    duracionRecomendada: "7 a 10 Días",
    descripcion:
      "Déjate cautivar por la 'Cidade Maravilhosa'. Sube al Cristo Redentor, contempla el atardecer en Ipanema y finaliza tu travesía en la península sofisticada de Búzios con sus más de 20 playas paradisíacas.",
    ventajas: [
      "Viaja fácil: Únicamente requieres tu Cédula de Ciudadanía original",
      "Tasa de cambio muy favorable para el presupuesto colombiano",
      "Vuelos directos sin escalas desde Bogotá a Río de Janeiro",
      "Gastronomía de rodizio de carnes y caipirinhas incluidas",
    ],
    imperdibles: [
      "Ascenso en teleférico al Pan de Azúcar al atardecer",
      "Navegación en escuna por las islas de agua turquesa en Búzios y Arraial do Cabo",
      "Tour guiado a los vestidores y cancha del legendario Estadio Maracaná",
    ],
    incluye: [
      "Tiquetes aéreos ida y vuelta con maleta",
      "Alojamiento con desayuno buffet brasileño a pasos de Copacabana",
      "Traslados interdistritales Río - Búzios en vehículos con aire acondicionado",
      "City tour completo por la ciudad con ingresos",
    ],
    requisitos: "Cédula de Ciudadanía original o Pasaporte vigente.",
    mejorEpoca: "Diciembre a Marzo (Verano y ambiente carnavalesco).",
    presupuesto: "Económico - Medio",
  },
  {
    id: 5,
    titulo: "Madrid, Barcelona & Andalucía",
    pais: "España",
    region: "Europa",
    imagenes: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200", // Madrid Gran Via
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200", // Sagrada Familia Barcelona
      "https://images.unsplash.com/photo-1509817247933-2a1d2666a3d9?q=80&w=1200", // Alhambra Granada
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200", // Park Guell Barcelona
      "https://images.unsplash.com/photo-1511527656417-26240ac2a09c?q=80&w=1200", // Plaza España Sevilla
    ],
    tag: "Puerta de Entrada a Europa",
    requiereVisa: false,
    duracionRecomendada: "10 a 14 Días",
    descripcion:
      "Sumérgete en la cultura, historia y exquisita gastronomía española. Desde el Palacio Real de Madrid hasta las obras maestras de Gaudí en Barcelona y la magia flamenca del sur en Sevilla y Granada.",
    ventajas: [
      "Sin barrera idiomática y con una calidez cultural única",
      "Sin necesidad de Visa Schengen para estancias de turismo",
      "Desplazamiento rápido entre ciudades a bordo del Tren AVE de Alta Velocidad",
      "Ruta de tapas, tablao flamenco y catas de vinos riojanos incluidos",
    ],
    imperdibles: [
      "Visita prioritaria a la Basílica de la Sagrada Familia sin filas",
      "Noche de espectáculo flamenco auténtico en el barrio de Triana en Sevilla",
      "Tour del Estadio Santiago Bernabéu o Spotify Camp Nou",
    ],
    incluye: [
      "Vuelos internacionales transatlánticos ida y vuelta",
      "Billetes de tren de alta velocidad AVE entre Madrid, Sevilla y Barcelona",
      "Hoteles 4 estrellas céntricos con desayuno incluido",
      "Guías acompañantes en español en todo el recorrido",
    ],
    requisitos: "Pasaporte biométrico vigente, tiquete de salida y seguro médico ETIAS.",
    mejorEpoca: "Mayo a Junio y Septiembre a Noviembre (Clima idóneo).",
    presupuesto: "Medio - Alto",
  },
  {
    id: 6,
    titulo: "Punta Cana & Isla Saona VIP",
    pais: "República Dominicana",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Punta Cana Resort
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Saona Catamaran
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Saona Beach Palms
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Caribbean Natural Pool
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Tropical Sunset
    ],
    tag: "Caribe VIP All-Inclusive",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "El destino por excelencia para relajación total. Kilómetros de palmeras inclinadas sobre el mar, piscinas infinitas, parques acuáticos y la famosa excursión privada en catamarán a la virgen Isla Saona.",
    ventajas: [
      "Excelente relación costo-beneficio con todo incluido de lujo",
      "Vuelos directos económicos desde Bogotá, Medellín y Cali",
      "Ideal para escapadas de pareja, bodas de destino y descanso familiar",
      "Bebidas internacionales e infinitas actividades de animación",
    ],
    imperdibles: [
      "Navegación a Isla Saona con parada en la piscina natural con estrellas de mar",
      "Fiesta nocturna VIP en Coco Bongo Punta Cana",
      "Buggy tour por la selva tropical y playa Macao",
    ],
    incluye: [
      "Tiquetes aéreos ida y vuelta con maleta",
      "Alojamiento All Inclusive en Resorts de cadena internacional",
      "Excursión completa a Isla Saona con almuerzo buffet a la orilla del mar",
      "Traslados aeropuerto - hotel - aeropuerto",
    ],
    requisitos: "Pasaporte vigente y E-Ticket de entrada/salida digital.",
    mejorEpoca: "Diciembre a Mayo (Temporada soleada sin lluvias).",
    presupuesto: "Económico",
  },
  {
    id: 7,
    titulo: "París, Versalles & Disneyland",
    pais: "Francia",
    region: "Europa",
    imagenes: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200", // Eiffel Tower
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200", // Eiffel Night
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=1200", // Louvre Museum
      "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1200", // Versailles Gardens
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200", // Disneyland Paris Castle
    ],
    tag: "Romance, Glamour & Magia",
    requiereVisa: false,
    duracionRecomendada: "7 a 10 Días",
    descripcion:
      "La Ciudad de la Luz te enamorará desde el primer instante. Disfruta de un crucero por el Río Sena, contempla las obras maestras del Louvre, camina por Montmartre y vive la magia europea en Disneyland París.",
    ventajas: [
      "Sin visa Schengen requerida para colombianos",
      "Cenas románticas y catas de queso y vino francés incluidas",
      "Conexión directa en tren Eurostar hacia Londres o Bélgica",
      "Atención personalizada con guías de habla hispana",
    ],
    imperdibles: [
      "Subida al 2do piso o cumbre de la Torre Eiffel con copa de champagne",
      "Paseo nocturno en barco Bateaux Mouches iluminado por el Sena",
      "Día de diversión en Disneyland París & Walt Disney Studios",
    ],
    incluye: [
      "Tiquetes aéreos internacionales",
      "Hotel de categoría superior cerca de estaciones principales de metro",
      "Pase de museos prioritario para el Louvre y Palacio de Versalles",
      "Entradas combinadas para Disneyland París",
    ],
    requisitos: "Pasaporte biométrico vigente.",
    mejorEpoca: "Abril a Junio y Septiembre a Octubre.",
    presupuesto: "Alto",
  },
  {
    id: 8,
    titulo: "Roma, Florencia & Costa Amalfitana",
    pais: "Italia",
    region: "Europa",
    imagenes: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200", // Rome Colosseum
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200", // Positano Amalfi Coast
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200", // Trevi Fountain
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=1200", // Florence Duomo
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200", // Venice Grand Canal
    ],
    tag: "Historia, Arte & La Dolce Vita",
    requiereVisa: false,
    duracionRecomendada: "9 a 12 Días",
    descripcion:
      "Un viaje para los sentidos. Recorre la cuna del Imperio Romano, maravíllate con el arte renacentista en Florencia y enamórate de los acantilados de colores de Positano y Capri en la Costa Amalfitana.",
    ventajas: [
      "Gastronomía icónica accesible: la mejor pasta, pizza y gelato del mundo",
      "Excursiones privadas con historiadores en español",
      "Ingreso libre sin visa previa para colombianos",
      "Rutas panorámicas en trenes de alta velocidad Frecciarossa",
    ],
    imperdibles: [
      "Entrada VIP al Coliseo Romano, Foro Romano y Museos Vaticanos",
      "Paseo en barco por las grutas de la Isla de Capri",
      "Atardecer panorámico desde el Piazzale Michelangelo en Florencia",
    ],
    incluye: [
      "Vuelos ida y vuelta de larga distancia",
      "Hoteles seleccionados por su estilo encantador y céntrico",
      "Tren de alta velocidad entre Roma, Florencia y Nápoles",
      "Tours guiados privados en español",
    ],
    requisitos: "Pasaporte biométrico vigente.",
    mejorEpoca: "Mayo a Octubre.",
    presupuesto: "Medio - Alto",
  },
  {
    id: 9,
    titulo: "Nueva York, Manhattan & Broadway",
    pais: "Estados Unidos",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200", // Times Square
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200", // Central Park
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1200", // Statue of Liberty
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200", // Brooklyn Bridge
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200", // Manhattan Skyline
    ],
    tag: "La Capital del Mundo",
    requiereVisa: true,
    duracionRecomendada: "6 a 9 Días",
    descripcion:
      "Camina bajo los rascacielos más imponentes de la tierra, disfruta de un musical en Broadway, contempla el horizonte desde la cumbre del SUMMIT One Vanderbilt y vive la energía inagotable de Manhattan.",
    ventajas: [
      "La mayor oferta mundial de compras, espectáculos y museos",
      "Múltiples frecuencias de vuelos diarios a tarifas muy competitivas",
      "Hoteles estratégicamente ubicados cerca de Times Square",
      "Acompañamiento en el itinerario para aprovechar cada hora al máximo",
    ],
    imperdibles: [
      "Obra musical en vivo en el circuito de Broadway",
      "Mirador transparente SUMMIT One Vanderbilt o Edge Hudson Yards",
      "Caminata por el Puente de Brooklyn al atardecer y picnic en Central Park",
    ],
    incluye: [
      "Tiquetes aéreos ida y vuelta",
      "Hospedaje en Manhattan cerca a estaciones principales",
      "Pass de atracciones (CityPASS o Sightseeing Pass)",
      "Traslados aeropuerto - hotel en privado",
    ],
    requisitos: "Visa Americana de Turismo vigente (B1/B2).",
    mejorEpoca: "Abril a Junio y Noviembre a Diciembre (Navidad en Nueva York).",
    presupuesto: "Alto",
  },
  {
    id: 10,
    titulo: "Buenos Aires, Bariloche & Tango",
    pais: "Argentina",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1200", // Buenos Aires Obelisco
      "https://images.unsplash.com/photo-1545853332-147d456607c3?q=80&w=1200", // Bariloche Lake & Snow
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Caminito La Boca
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200", // Wine & Meat Steak
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", // Bariloche Mountains
    ],
    tag: "Tango, Nieve & Gastronomía",
    requiereVisa: false,
    duracionRecomendada: "7 a 10 Días",
    descripcion:
      "Una combinación inolvidable. Disfruta de la elegancia parisina de la capital del tango, sus tradicionales parrillas de carne y vinos Malbec, combinados con las majestuosas montañas nevadas y lagos de Bariloche.",
    ventajas: [
      "Viaje ultra accesible: Solo requieres Cédula de Ciudadanía colombiana",
      "Tipo de cambio sumamente ventajoso para turistas latinoamericanos",
      "Exquisita gastronomía gourmet a precios muy reducidos",
      "Opción de conocer la nieve a pocas horas de vuelo",
    ],
    imperdibles: [
      "Cena Show de Tango de nivel internacional con orquesta en vivo",
      "Circuito Chico y ascenso en teleférico al Cerro Campanario en Bariloche",
      "Degustación de cortes de carne y vinos en una mística cava de Palermo",
    ],
    incluye: [
      "Vuelos internacionales y tramos domésticos Buenos Aires - Bariloche",
      "Hospedajes de categoría en Recoleta/Palermo y Bariloche",
      "Cena Show de Tango con traslados",
      "Excursiones y visitas guiadas",
    ],
    requisitos: "Cédula de Ciudadanía original o Pasaporte vigente.",
    mejorEpoca: "Julio a Septiembre (Temporada de nieve) o Octubre a Marzo.",
    presupuesto: "Muy Económico",
  },
];

// 15 JOYAS OCULTAS SIN VISA O ECONÓMICAS
const joyasOcultas: Destino[] = [
  {
    id: 11,
    titulo: "Cusco & Machu Picchu Místico",
    pais: "Perú",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200", // Machu Picchu
      "https://images.unsplash.com/photo-1526392060635-9d601988106a?q=80&w=1200", // Cusco Main Square
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200", // Rainbow Mountain
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200", // Sacred Valley
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Peruvian Ceviche
    ],
    tag: "Solo con Cédula",
    requiereVisa: false,
    duracionRecomendada: "5 a 8 Días",
    descripcion:
      "Camina por la antigua capital del Imperio Inca, explora ruinas sagradas en el Valle Sagrado y aborda el tren panorámico Vistadome para llegar a la majestuosa ciudadela de Machu Picchu.",
    ventajas: ["Ingreso solo con Cédula colombiana", "Gastronomía galardonada mundialmente", "Precios muy cómodos"],
    imperdibles: ["Boleto de tren panorámico a Machu Picchu", "Tour a la Montaña de 7 Colores", "Cena criolla cusqueña"],
    incluye: ["Vuelos ida y vuelta", "Hoteles con desayuno", "Boleto turístico oficial e ingresos a Machu Picchu", "Traslados y trenes"],
    requisitos: "Cédula de Ciudadanía.",
    mejorEpoca: "Mayo a Octubre.",
    presupuesto: "Económico",
  },
  {
    id: 12,
    titulo: "Salar de Uyuni surrealista",
    pais: "Bolivia",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200", // Uyuni Salt Mirror
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200", // Uyuni Sky Reflection
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200", // Incahuasi Island Cacti
      "https://images.unsplash.com/photo-1526392060635-9d601988106a?q=80&w=1200", // Laguna Colorada Flamingos
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200", // Uyuni Stargazing
    ],
    tag: "Espejo del Cielo",
    requiereVisa: false,
    duracionRecomendada: "4 a 6 Días",
    descripcion:
      "El desierto de sal continuo más grande del planeta. Durante la época de lluvias se transforma en el espejo natural más inmenso del mundo donde el cielo y la tierra se unen.",
    ventajas: ["Destino sumamente económico", "Viaje solo con Cédula", "Fotografías artísticas espectaculares"],
    imperdibles: ["Fotografía perspectiva en el desierto de sal", "Noche en un hotel construido 100% de sal", "Observación de estrellas"],
    incluye: ["Tiquetes aéreos", "Camioneta 4x4 privada con guía local", "Hospedaje en hotel de sal", "Todas las comidas"],
    requisitos: "Cédula de Ciudadanía original.",
    mejorEpoca: "Enero a Marzo (Efecto Espejo) o Mayo a Noviembre.",
    presupuesto: "Muy Económico",
  },
  {
    id: 13,
    titulo: "Desierto de Atacama & Vía Láctea",
    pais: "Chile",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200", // Atacama Valley
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Atacama Geysers
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200", // Atacama Night Stars
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200", // Moon Valley Chile
      "https://images.unsplash.com/photo-1526392060635-9d601988106a?q=80&w=1200", // Chaxa Lagoon
    ],
    tag: "Astro-Turismo VIP",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "El desierto más árido del mundo te espera con valles lunares, géiseres que emergen al amanecer y el cielo más despejado del planeta para la observación astronómica.",
    ventajas: ["Viaje sin pasaporte (Cédula)", "Nivel de seguridad y confort elevado", "Aventura de naturaleza única"],
    imperdibles: ["Tour astronómico VIP con telescopios profesionales", "Géiseres del Tatio al amanecer", "Atardecer en el Valle de la Luna"],
    incluye: ["Vuelos a Calama vía Santiago", "Traslados privados", "Alojamiento boutique con encanto en San Pedro", "Tours diarios"],
    requisitos: "Cédula de Ciudadanía.",
    mejorEpoca: "Todo el año.",
    presupuesto: "Medio",
  },
  {
    id: 14,
    titulo: "Islas Galápagos Santuario Vivo",
    pais: "Ecuador",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200", // Sea Lion Galapagos
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Giant Tortoise
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Galapagos Landscape
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Kicker Rock Snorkeling
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Galapagos Blue Footed Booby
    ],
    tag: "Santuario Natural Unico",
    requiereVisa: false,
    duracionRecomendada: "5 a 8 Días",
    descripcion:
      "Un laboratorio viviente de la evolución. Camina entre tortugas gigantes ancestrales, nada junto a leones marinos amigables, tiburones tintorera y piqueros de patas azules.",
    ventajas: ["Viaja con Cédula de Ciudadanía", "Naturaleza intacta sin miedo al ser humano", "Vuelos cortos"],
    imperdibles: ["Snorkeling en Kicker Rock (León Dormido)", "Estación Científica Charles Darwin", "Navegación a islas desiertas"],
    incluye: ["Tiquetes aéreos", "Estadía en Hoteles Eco-Lodge", "Navegaciones diarias con guías naturalistas", "Alimentación"],
    requisitos: "Cédula de Ciudadanía y Tarjeta de Control Migratorio.",
    mejorEpoca: "Diciembre a Mayo.",
    presupuesto: "Medio - Alto",
  },
  {
    id: 15,
    titulo: "Isla de Aruba 'La Isla Feliz'",
    pais: "Caribe Neerlandés",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Aruba Flamingos
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Eagle Beach Divi Tree
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Palm Beach Resort
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Oranjestad Colorful Dutch
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Natural Pool Aruba
    ],
    tag: "Flamencos & Lujo holandés",
    requiereVisa: false,
    duracionRecomendada: "4 a 6 Días",
    descripcion:
      "Playas de aguas turquesas y tranquilas fuera de la zona de huracanes. Fotografía los flamencos rosados en la playa, explora el parque Arikok en Jeep y relájate en resorts de clase mundial.",
    ventajas: ["Sin visa requerida para colombianos", "Vuelos ultracortos de 1.5 horas", "Islas con máxima seguridad internacional"],
    imperdibles: ["Día privado en Renaissance Island con los flamencos", "Atardecer en Eagle Beach", "Tour en Jeep por la Piscina Natural"],
    incluye: ["Vuelos directos ida y vuelta", "Hospedaje de lujo frente al mar", "Traslados privados", "Asistencia de viaje"],
    requisitos: "Pasaporte vigente y tarjeta ED Card digital.",
    mejorEpoca: "Todo el año (Fuera del cinturón de huracanes).",
    presupuesto: "Medio",
  },
  {
    id: 16,
    titulo: "San Blas & Panamá City Shopping",
    pais: "Panamá",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", // San Blas Beach
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200", // Panama City Skyline
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=1200", // Panama Canal
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Casco Viejo Panama
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Guna Yala Islands
    ],
    tag: "Caribe Virgen & Compras",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "Disfruta de 365 islas vírgenes de agua cristalina bajo la custodia indígena Guna Yala, combinadas con los rascacielos, compras exentas e historia colonial del Casco Viejo de Panamá.",
    ventajas: ["A solo 1 hora de vuelo desde Colombia", "Rutas de compras en Zona Libre y Malls de marcas de lujo", "Sin visa previa"],
    imperdibles: ["Día en velero navegando entre las islas de San Blas", "Visita al Canal de Panamá (Esclusas de Miraflores)", "Cena en Casco Viejo"],
    incluye: ["Tiquetes aéreos", "Noches de hotel en Ciudad de Panamá y cabañas en San Blas", "Excursión al Canal", "Traslados"],
    requisitos: "Pasaporte vigente.",
    mejorEpoca: "Diciembre a Abril.",
    presupuesto: "Económico",
  },
  {
    id: 17,
    titulo: "Curazao & Playa Kenepa",
    pais: "Caribe",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Curacao Handelskade
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Playa Kenepa
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Queen Emma Bridge
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Klein Curacao Island
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Snorkeling Turtle
    ],
    tag: "Holanda en el Caribe",
    requiereVisa: false,
    duracionRecomendada: "4 a 6 Días",
    descripcion:
      "Arquitectura holandesa en tonos pastel sobre el canal de Willemstad, combinada con ensenadas de agua azul deslumbrante como Playa Grote Knip y excursiones en catamarán a Klein Curazao.",
    ventajas: ["Sin visa para colombianos", "Ambiente multicultural seguro", "Buceo de arrecifes de primer nivel"],
    imperdibles: ["Excursión de un día en catamarán a la desierta Klein Curazao", "Paseo por las casitas holandesas de Willemstad", "Snorkel con tortugas"],
    incluye: ["Vuelos ida y vuelta", "Alojamiento con vista al mar", "Traslados", "Asistencia médica"],
    requisitos: "Pasaporte vigente y tarjeta digital de migración.",
    mejorEpoca: "Todo el año.",
    presupuesto: "Medio",
  },
  {
    id: 18,
    titulo: "Mendoza & Ruta del Vino Malbec",
    pais: "Argentina",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", // Mendoza Vineyard Andes
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1200", // Wine Tasting
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200", // Andes Mountains Snow
      "https://images.unsplash.com/photo-1545853332-147d456607c3?q=80&w=1200", // Mendoza Estancia
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Hot Springs Mendoza
    ],
    tag: "Enoturismo & Cordillera",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "Bodegas galardonadas internacionalmente a los pies de la imponente Cordillera de los Andes. Disfruta de catas de vinos Malbec, almuerzos maridados de 5 pasos y spas termales en la montaña.",
    ventajas: ["Solo se requiere Cédula", "Excelente relación costo-calidad en alta gastronomía", "Paisajes imponentes"],
    imperdibles: ["Cata de vinos en bodegas icónicas de Valle de Uco", "Almuerzo gourmet maridado frente a los Andes", "Día de relax en Termas de Cacheuta"],
    incluye: ["Vuelos ida y vuelta", "Hospedaje en resort con viñedos", "Circuito privado de bodegas con catas", "Traslados"],
    requisitos: "Cédula de Ciudadanía.",
    mejorEpoca: "Febrero a Abril (Vendimia) y Octubre a Diciembre.",
    presupuesto: "Económico",
  },
  {
    id: 19,
    titulo: "Varadero & La Habana Clásica",
    pais: "Cuba",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Classic Car Havana
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Varadero Beach
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Malecon Havana
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Old Havana Plaza
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Cuban Mojito Live Music
    ],
    tag: "Caribe Leyenda & Tradición",
    requiereVisa: false,
    duracionRecomendada: "6 a 8 Días",
    descripcion:
      "Un viaje en el tiempo. Recorre La Habana en un auto clásico descapotable de los años 50, escucha música son en vivo en La Bodeguita del Medio y descansa en las playas cristalinas de Varadero.",
    ventajas: ["Tarifas altamente económicas", "Cultura musical viva y calidez humana", "Playa de arena blanca insuperable"],
    imperdibles: ["Tour en convertible clásico por el Malecón de La Habana", "Show musical de Tropicana", "Relajación All Inclusive en Varadero"],
    incluye: ["Tiquetes aéreos directos", "Alojamiento combinado Habana (boutique) + Varadero (All Inclusive)", "Tarjeta turística visa incluida"],
    requisitos: "Pasaporte vigente y Tarjeta Turística.",
    mejorEpoca: "Noviembre a Abril.",
    presupuesto: "Muy Económico",
  },
  {
    id: 20,
    titulo: "Manuel Antonio & Volcán Arenal",
    pais: "Costa Rica",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200", // Arenal Volcano
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Manuel Antonio Beach
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200", // Sloth Wildlife
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Canopy Hanging Bridges
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Thermal Hot Springs
    ],
    tag: "Pura Vida & Naturaleza",
    requiereVisa: false,
    duracionRecomendada: "6 a 9 Días",
    descripcion:
      "Volcanes activos, termales curativas en medio de la selva, tirolesas sobre el dosel de los árboles y el Parque Nacional Manuel Antonio donde las playas selváticas albergan perezosos y monos.",
    ventajas: ["Sin necesidad de visa para colombianos", "Líder mundial en turismo ecológico y sostenible", "Paz y seguridad plena"],
    imperdibles: ["Bañarse en las termales naturales de Tabacón frente al volcán", "Tour guiado por la selva para avistamiento de perezosos", "Tirolesa de aventura"],
    incluye: ["Vuelos ida y vuelta", "Alquiler de auto 4x4 o traslados interhoteles", "Eco-lodges con desayuno", "Tours de aventura"],
    requisitos: "Pasaporte vigente.",
    mejorEpoca: "Diciembre a Abril.",
    presupuesto: "Medio",
  },
  {
    id: 21,
    titulo: "Lago Atitlán & Antigua Colonial",
    pais: "Guatemala",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200", // Antigua Guatemala Street
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200", // Lake Atitlan
      "https://images.unsplash.com/photo-1526392060635-9d601988106a?q=80&w=1200", // Mayan Textiles
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200", // Acatenango Volcano View
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200", // Santa Catalina Arch
    ],
    tag: "Joya Colonial & Cultura Maya",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "Calles empedradas flanqueadas por volcanes en la joya colonial de Antigua, combinadas con la belleza mágica del Lago Atitlán, rodeado por 12 pueblos indígenas llenos de artesanías y misticismo.",
    ventajas: ["Precios sumamente accesibles", "Cultura maya viva e imponente", "Ingreso libre sin visa previa"],
    imperdibles: ["Paseo en lancha por los pueblos del Lago Atitlán", "Fotografía en el Arco de Santa Catalina", "Visita al mercado artesanal de Chichicastenango"],
    incluye: ["Tiquetes aéreos", "Hoteles coloniales boutique", "Traslados privados", "Tours con guías locales"],
    requisitos: "Pasaporte vigente.",
    mejorEpoca: "Noviembre a Abril.",
    presupuesto: "Muy Económico",
  },
  {
    id: 22,
    titulo: "Punta del Este & Montevideo",
    pais: "Uruguay",
    region: "America",
    imagenes: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Punta del Este Fingers
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200", // Casapueblo Sunset
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Montevideo Rambla
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Jose Ignacio Beach
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200", // Uruguayan Asado
    ],
    tag: "Glamour Atlántico",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "El balneario más exclusivo de América del Sur. Disfruta de puestas de sol mágicas en Casapueblo, gastronomía marina en José Ignacio, ramblas tranquilas y la devolución del IVA en compras de turistas.",
    ventajas: ["Solo se requiere Cédula de Ciudadanía", "Devolución automática de IVA en restaurantes y compras", "Tranquilidad y seguridad total"],
    imperdibles: ["Atardecer con ceremonia de poema en Casapueblo", "Fotografía en la escultura 'La Mano' en La Brava", "Almuerzo de carnes en el Mercado del Puerto de Montevideo"],
    incluye: ["Vuelos ida y vuelta", "Alojamiento en Montevideo y Punta del Este", "Traslados", "Tours panorámicos"],
    requisitos: "Cédula de Ciudadanía original.",
    mejorEpoca: "Diciembre a Marzo (Verano costero).",
    presupuesto: "Medio - Alto",
  },
  {
    id: 23,
    titulo: "Isla de Roatán Arrecife Coral",
    pais: "Honduras",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Roatan Turquoise Sea
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Roatan Snorkeling Coral
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Overwater Cabanas
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // West Bay Roatan
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Roatan Coast Jungle
    ],
    tag: "Segunda Barrera Coralina Mundial",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "Un secreto paradisíaco del Caribe. Alberga la segunda barrera de arrecifes de coral más grande del planeta, ideal para buceo con tiburones ballena, kayak y relajación en playas sin aglomeraciones.",
    ventajas: ["Sin trámite de visa previa", "Destino mundial de buceo con precios accesibles", "Playas vírgenes"],
    imperdibles: ["Snorkel directo desde la orilla de West Bay Beach", "Navegación para ver delfines en libertad", "Buceo de pared en el arrecife"],
    incluye: ["Tiquetes aéreos", "Resort frente al mar con desayunos", "Equipo de snorkel o inmersiones", "Traslados de aeropuerto"],
    requisitos: "Pasaporte vigente.",
    mejorEpoca: "Marzo a Septiembre.",
    presupuesto: "Económico",
  },
  {
    id: 24,
    titulo: "Samaná & Las Terrenas Salvaje",
    pais: "República Dominicana",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Samana Bay
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // Humpback Whale Samana
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Salto del Limon Waterfall
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Playa Rincon Samana
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Cayo Levantado
    ],
    tag: "Avistamiento Ballenas Jorobadas",
    requiereVisa: false,
    duracionRecomendada: "5 a 7 Días",
    descripcion:
      "Una península ecológica resguardada. Descubre cascadas escondidas en la jungla (Salto del Limón), la paradisíaca Isla Cayo Levantado y presenciar el salto de las ballenas jorobadas en libertad.",
    ventajas: ["Ingreso libre sin visa", "Naturaleza salvaje preservada", "Precios muy atractivos"],
    imperdibles: ["Avistamiento de ballenas jorobadas en la Bahía de Samaná (Ene-Mar)", "Cabalgata al Salto del Limón", "Día de playa en Cayo Levantado"],
    incluye: ["Vuelos ida y vuelta", "Hospedaje ecológico frente a la playa", "Excursiones en barco", "Traslados"],
    requisitos: "Pasaporte vigente.",
    mejorEpoca: "Enero a Marzo (Ballenas) o Todo el año.",
    presupuesto: "Económico",
  },
  {
    id: 25,
    titulo: "San Andrés & Providencia Caribeño",
    pais: "Colombia",
    region: "Caribe",
    imagenes: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // San Andres Sea 7 Colors
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200", // Johnny Cay Palms
      "https://images.unsplash.com/photo-1574955700813-e4d6a195b452?q=80&w=1200", // Providencia Island
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1200", // West View Snorkeling
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200", // Sunset San Andres
    ],
    tag: "Mar de los 7 Colores",
    requiereVisa: false,
    duracionRecomendada: "4 a 6 Días",
    descripcion:
      "El tesoro insular colombiano. Disfruta del deslumbrante mar de los siete colores, la gastronomía con coco y mariscos fresh, la calidez de la cultura raizal y cayos vírgenes como Johnny Cay y Acuario.",
    ventajas: ["Sin pasaporte ni trámites internacionales", "Múltiples vuelos diarios asequibles", "Sabor y cultura caribeña local"],
    imperdibles: ["Tour en mula alrededor de la isla", "Visita en lancha a Johnny Cay y Cayo Haynes", "Snorkel en el Acuario Natural"],
    incluye: ["Tiquetes aéreos ida y vuelta", "Alojamiento con desayunos o All Inclusive", "Tours de bahía y cayos", "Tarjeta de turismo de la isla"],
    requisitos: "Cédula de Ciudadanía original.",
    mejorEpoca: "Todo el año.",
    presupuesto: "Muy Económico",
  },
];

export default function CoordenadasPage() {
  const [selectedDestino, setSelectedDestino] = useState<Destino | null>(null);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"todos" | "populares" | "sinVisa" | "caribe" | "europa">("todos");

  // Abrir y cerrar modal
  const openModal = (destino: Destino) => {
    setSelectedDestino(destino);
    setImgIndex(0);
  };

  const closeModal = () => {
    setSelectedDestino(null);
    setImgIndex(0);
  };

  // Navegación de imágenes en el slider
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedDestino) return;
    setImgIndex((prev) => (prev + 1) % selectedDestino.imagenes.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedDestino) return;
    setImgIndex((prev) => (prev - 1 + selectedDestino.imagenes.length) % selectedDestino.imagenes.length);
  };

  // Generador de Link de WhatsApp Personalizado por Destino
  const getWhatsAppLink = (destino: Destino) => {
    const mensaje = `Hola Suescun Signature Travel, deseo solicitar una cotización personalizada para el destino: *${destino.titulo}* (${destino.pais}). Por favor me brindan información de planes, fechas y tarifas. ¡Quedo atento!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  };

  // Unificación de todos los destinos para búsquedas y filtrados
  const todosLosDestinos = useMemo(() => {
    return [...destinosPopulares, ...joyasOcultas];
  }, []);

  // Filtrado de destinos en tiempo real
  const destinosFiltrados = useMemo(() => {
    return todosLosDestinos.filter((dest) => {
      const matchSearch =
        dest.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.pais.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.tag.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchSearch) return false;

      if (activeTab === "populares") return dest.id <= 10;
      if (activeTab === "sinVisa") return !dest.requiereVisa;
      if (activeTab === "caribe") return dest.region === "Caribe";
      if (activeTab === "europa") return dest.region === "Europa";

      return true;
    });
  }, [todosLosDestinos, searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#C5A880] selection:text-black font-sans antialiased">
      
      {/* ==========================================
          HEADER / ENCABEZADO PRINCIPAL (NAVBAR)
      ========================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Marca Corporativa */}
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

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-neutral-300 font-medium">
            <Link href="/" className="hover:text-[#C5A880] transition-colors">
              Inicio
            </Link>
            <Link href="/coordenadas" className="text-[#C5A880] font-semibold">
            Coordenadas
            </Link>
            <a href="#servicios" className="hover:text-[#C5A880] transition-colors">
              Servicios
            </a>
            <a href="/contacto" className="hover:text-[#C5A880] transition-colors">
              Contacto
            </a>
          </nav>

          {/* Botón de Acción Directa en Navbar */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Suescun Signature Travel, deseo consultar asesoría para un itinerario a medida.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow-md shadow-[#C5A880]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Asesoría 1 a 1</span>
          </a>
        </div>
      </header>

      {/* ==========================================
          CONTENIDO PRINCIPAL
      ========================================== */}
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Botón Volver */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors duration-300 group"
          >
            <span className="transition-transform group-hover:-translate-x-1.5">←</span>
            <span>Volver a la Página Principal</span>
          </Link>
        </div>

        {/* Encabezado Hero de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Destinos Predilectos & Rutas Exclusivas
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              Coordenadas <span className="italic font-normal text-[#C5A880]">Inolvidables</span>
            </h1>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Explora las rutas más cotizadas por latinoamericanos. Desde los parques de Disney y Universal hasta la mística de Japón, la elegancia de Europa y playas vírgenes sin visa.
          </p>
        </div>

        {/* BARRA DE BÚSQUEDA Y FILTROS INTERACTIVOS */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800/80 backdrop-blur-md">
            
            {/* Buscador */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar por país, ciudad o interés..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-neutral-700/80 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors"
              />
            </div>

            {/* Pestañas de Filtrado */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {[
                { id: "todos", label: "Todos (25)" },
                { id: "populares", label: "Más Solicitados" },
                { id: "sinVisa", label: "Sin Visa" },
                { id: "caribe", label: "Caribe & Sol" },
                { id: "europa", label: "Europa" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-xs px-4 py-2 rounded-full tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#C5A880] text-black font-semibold shadow-md shadow-[#C5A880]/20"
                      : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTADOS DE BÚSQUEDA / DESTINOS POPULARES */}
        {destinosFiltrados.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-sm">No encontramos destinos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveTab("todos");
              }}
              className="mt-4 text-xs text-[#C5A880] underline font-semibold"
            >
              Ver todos los destinos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinosFiltrados.map((dest) => (
              <div
                key={dest.id}
                onClick={() => openModal(dest)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/40 hover:border-[#C5A880]/80 transition-all duration-500 flex flex-col justify-between h-[420px] shadow-xl hover:shadow-2xl hover:shadow-[#C5A880]/10"
              >
                {/* Imagen Principal de Portada */}
                <img
                  src={dest.imagenes[0]}
                  alt={dest.titulo}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 group-hover:brightness-90 transition-all duration-700 ease-out"
                />
                
                {/* Degradado superpuesto para lectibilidad */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20" />

                {/* Badges Superiores */}
                <div className="relative z-10 p-5 flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold bg-black/80 px-3 py-1 rounded-full border border-[#C5A880]/40 backdrop-blur-md">
                    {dest.tag}
                  </span>
                  {!dest.requiereVisa && (
                    <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                      Sin Visa
                    </span>
                  )}
                </div>

                {/* Contenido Inferior Tarjeta */}
                <div className="relative z-10 p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-neutral-300 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span className="font-medium">{dest.pais}</span>
                    <span className="text-neutral-500">•</span>
                    <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-1" />
                    <span>{dest.duracionRecomendada}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-white leading-tight group-hover:text-[#C5A880] transition-colors">
                    {dest.titulo}
                  </h3>

                  <p className="text-neutral-300 text-xs line-clamp-2 font-light leading-relaxed">
                    {dest.descripcion}
                  </p>

                  {/* Botones de Acción en la Tarjeta */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/10 mt-1">
                    <span className="text-[11px] text-[#C5A880] font-medium group-hover:underline flex items-center gap-1">
                      Ver 5 fotos y plan →
                    </span>
                    
                    <a
                      href={getWhatsAppLink(dest)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-[#C5A880] text-black font-semibold text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-md hover:brightness-110 transition-all flex items-center gap-1 shadow-md"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECCIÓN DE GARANTÍAS Y BENEFICIOS CORPORATIVOS */}
        <section id="garantias" className="mt-28 pt-16 border-t border-neutral-800">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Suescun Signature Travel
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-2">
              ¿Por qué cotizar tu viaje <span className="text-[#C5A880] italic">con nosotros</span>?
            </h2>
            <p className="text-neutral-400 text-sm mt-4 font-light">
              Transformamos la planeación de tus vacaciones en una experiencia sin estrés, garantizando la máxima seguridad, tarifas competitivas y beneficios exclusivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-[#C5A880]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Respaldo 100% Garantizado</h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Asesoría continua en español antes, durante y después de tu viaje. Tarjetas de asistencia médica internacional y soporte 24/7.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-[#C5A880]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Pases VIP & Sin Filas</h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Convenios directos con pases rápidos para parques temáticos (Disney, Universal), traslados privados y reservas en hoteles seleccionados.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-[#C5A880]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Facilidades de Pago</h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Reserva tu paquete con un pago inicial y congela la tarifa. Paga a cuotas cómodas hasta semanas antes de la fecha de tu vuelo.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER FINAL DE CONVERSIÓN */}
        <div className="mt-24 p-10 rounded-2xl border border-[#C5A880]/40 bg-linear-to-r from-neutral-900 via-black to-neutral-900 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Itinerarios a la Medida
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white mt-1">
              ¿Tienes en mente otra coordenada o fecha especial?
            </h3>
            <p className="text-neutral-300 text-xs md:text-sm mt-3 font-light leading-relaxed">
              Diseñamos paquetes personalizados ajustados a tu presupuesto, número de acompañantes y fechas deseadas. Habla directo con un asesor VIP.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Suescun Signature Travel, deseo diseñar un plan de viaje personalizado a mi medida.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 bg-[#C5A880] text-black font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 hover:brightness-110 shadow-xl shadow-[#C5A880]/20 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar Plan Personalizado →</span>
          </a>
        </div>

      </main>

      {/* ==========================================
          MODAL FLOTANTE DE DETALLES CON SLIDER DE 5 FOTOS
      ========================================== */}
      {selectedDestino && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-100 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0A0A0B] border border-[#C5A880]/50 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-300 scrollbar-thin scrollbar-thumb-neutral-800"
          >
            {/* Botón Cerrar Modal */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 bg-black/80 p-2.5 rounded-full text-white hover:text-[#C5A880] transition-colors border border-white/20 shadow-lg"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* CARRUSEL DE 5 IMÁGENES HD */}
            <div className="w-full h-80 sm:h-96 relative bg-neutral-900 group shrink-0">
              <img
                src={selectedDestino.imagenes[imgIndex]}
                alt={`${selectedDestino.titulo} foto ${imgIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B] via-transparent to-black/30" />

              {/* Botones de Navegación del Carrusel */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#C5A880] hover:text-black text-white p-2.5 rounded-full border border-white/20 transition-all shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#C5A880] hover:text-black text-white p-2.5 rounded-full border border-white/20 transition-all shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Contador de Fotos */}
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#C5A880] border border-white/10 backdrop-blur-md">
                Foto {imgIndex + 1} de {selectedDestino.imagenes.length}
              </div>

              {/* Tira de Miniaturas (Thumbnails) para seleccionar directo la foto */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md max-w-[90%] overflow-x-auto">
                {selectedDestino.imagenes.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`relative w-12 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      imgIndex === idx ? "border-[#C5A880] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt={`miniatura ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* CONTENIDO DETALLADO DEL MODAL */}
            <div className="p-6 sm:p-8 pt-4 space-y-6">
              
              {/* Header Info */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold bg-black px-3 py-1 rounded-full border border-[#C5A880]/40">
                    {selectedDestino.tag}
                  </span>
                  {!selectedDestino.requiereVisa ? (
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
                      Sin Visa Requerida
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full">
                      Requiere Visa
                    </span>
                  )}
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-white">{selectedDestino.titulo}</h2>
                
                <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-xs mt-2">
                  <div className="flex items-center gap-1 text-[#C5A880]">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{selectedDestino.pais}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-neutral-400" />
                    <span>Recomendado: {selectedDestino.duracionRecomendada}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-neutral-400" />
                    <span>Presupuesto: {selectedDestino.presupuesto}</span>
                  </div>
                </div>
              </div>

              {/* Descripción Comercial */}
              <p className="text-neutral-300 text-sm leading-relaxed font-light border-b border-neutral-800 pb-6">
                {selectedDestino.descripcion}
              </p>

              {/* Ventajas Exclusivas */}
              <div>
                <h4 className="text-white font-serif text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  Ventajas Exclusivas del Plan
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDestino.ventajas.map((ventaja, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{ventaja}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiencias Imperdibles */}
              {selectedDestino.imperdibles && (
                <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-xl">
                  <h4 className="text-[#C5A880] font-serif text-sm font-semibold uppercase tracking-wider mb-3">
                    Experiencias Imperdibles Incluidas
                  </h4>
                  <ul className="space-y-2">
                    {selectedDestino.imperdibles.map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ¿Qué incluye el paquete? */}
              <div>
                <h4 className="text-white font-serif text-sm uppercase tracking-wider text-neutral-400 mb-3">
                  Servicios y Coberturas del Paquete
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDestino.incluye.map((inc, idx) => (
                    <div key={idx} className="bg-black/40 border border-neutral-800 p-3 rounded-lg text-xs text-neutral-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ficha de Requisitos & Mejor Época */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-800 text-xs">
                <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800/80">
                  <span className="text-[#C5A880] font-medium block mb-1">Requisitos de Ingreso:</span>
                  <p className="text-neutral-300 font-light">{selectedDestino.requisitos}</p>
                </div>
                <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800/80">
                  <span className="text-[#C5A880] font-medium block mb-1">Mejor Época para Viajar:</span>
                  <p className="text-neutral-300 font-light">{selectedDestino.mejorEpoca}</p>
                </div>
              </div>

              {/* BOTÓN DE COTIZACIÓN VIP PERSONALIZADO POR LUGAR */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                    Atención Inmediata en WhatsApp
                  </span>
                  <span className="text-xs text-[#C5A880] font-serif">
                    Cotización personalizada para {selectedDestino.titulo}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(selectedDestino)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase px-7 py-4 rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar {selectedDestino.titulo} por WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER CORPORATIVO */}
      <footer className="border-t border-neutral-800 bg-black py-12 px-6 lg:px-12 text-center text-xs text-neutral-500 font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C5A880]" />
            <span className="text-neutral-300 font-serif">SUESCUN SIGNATURE TRAVEL</span>
          </div>
          <p>© {new Date().getFullYear()} Suescun Signature Travel. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880]">
              Atención Directa WhatsApp
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}