'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const SeccionIntroduccion = () => {
  const [seccionActiva, setSeccionActiva] = useState<string>('concepto');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Imagen con efecto decorativo */}
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            {/* Efecto decorativo detrás (arriba izquierda) - Color violeta de la marca con rayas */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-lg -z-10 stripe-marca"></div>
            
            {/* Contenedor de imagen */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/quienes-somos/about-principal.jpg"
                alt="RIB Propiedades"
                fill
                className="object-cover"
              />
              
              {/* Botón de play para video con efecto de pulso */}
              <button
                onClick={handleVideoClick}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Reproducir video"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground animate-pulse-subtle">
                  <svg 
                    className="w-8 h-8 text-foreground group-hover:text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <div>
              <p className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
                Somos RIB Inmobiliaria
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Haciendo la casa de tus sueños una realidad<span className="text-foreground">.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestro servicio es personalizado, atendemos a cada cliente con profesionalismo, 
                entendiendo sus necesidades y dándole soluciones a su medida.
              </p>
            </div>

            {/* Grid de iconos interactivos */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li>
                <div
                  onMouseEnter={() => setSeccionActiva('concepto')}
                  className="flex items-center gap-3 p-3 rounded transition-all duration-300 cursor-pointer hover:bg-foreground group"
                >
                  <i className="flaticon-home-2 text-foreground group-hover:text-white text-2xl transition-colors"></i>
                  <span className="text-gray-700 group-hover:text-white font-medium transition-colors">El Concepto RIB</span>
                </div>
              </li>
              <li>
                <div
                  onMouseEnter={() => setSeccionActiva('mision')}
                  className="flex items-center gap-3 p-3 rounded transition-all duration-300 cursor-pointer hover:bg-foreground group"
                >
                  <i className="flaticon-mountain text-foreground group-hover:text-white text-2xl transition-colors"></i>
                  <span className="text-gray-700 group-hover:text-white font-medium transition-colors">Nuestra Misión</span>
                </div>
              </li>
              <li>
                <div
                  onMouseEnter={() => setSeccionActiva('objetivos')}
                  className="flex items-center gap-3 p-3 rounded transition-all duration-300 cursor-pointer hover:bg-foreground group"
                >
                  <i className="flaticon-heart text-foreground group-hover:text-white text-2xl transition-colors"></i>
                  <span className="text-gray-700 group-hover:text-white font-medium transition-colors">Nuestros Objetivos</span>
                </div>
              </li>
              <li>
                <div
                  onMouseEnter={() => setSeccionActiva('servicio')}
                  className="flex items-center gap-3 p-3 rounded transition-all duration-300 cursor-pointer hover:bg-foreground group"
                >
                  <i className="flaticon-secure text-foreground group-hover:text-white text-2xl transition-colors"></i>
                  <span className="text-gray-700 group-hover:text-white font-medium transition-colors">Nuestro Servicio</span>
                </div>
              </li>
            </ul>

            {/* Contenido dinámico con animación y altura fija */}
            <div className="min-h-[200px] h-[200px] overflow-y-auto">
              {/* El concepto RIB */}
              {seccionActiva === 'concepto' && (
                <div className="bg-foreground/5 border-l-4 border-foreground p-4 rounded animate-in fade-in slide-in-from-top-2 duration-300">
                  <h3 className="font-bold text-gray-900 mb-2">El concepto RIB:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Es concepto de boutique, &quot;Tienda especializada en producto selecto&quot;. Por tal motivo 
                    creamos RIB, la primer inmobiliaria Boutique de Pilar. Con la mejor cartera de propiedades 
                    en venta y alquiler, en cuanto a diseño, calidad y precio.
                  </p>
                </div>
              )}

              {/* Nuestra misión */}
              {seccionActiva === 'mision' && (
                <div className="bg-foreground/5 border-l-4 border-foreground p-4 rounded animate-in fade-in slide-in-from-top-2 duration-300">
                  <h3 className="font-bold text-gray-900 mb-2">Nuestra misión:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ser un reconocido medio inmobiliario en la zona que facilite a nuestros Clientes la 
                    concreción de sus ideas y sueños.
                  </p>
                </div>
              )}

              {/* Nuestros objetivos */}
              {seccionActiva === 'objetivos' && (
                <div className="bg-foreground/5 border-l-4 border-foreground p-4 rounded animate-in fade-in slide-in-from-top-2 duration-300">
                  <h3 className="font-bold text-gray-900 mb-2">Nuestros objetivos:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Mejorar día a día la calidad de nuestra atención y entendimiento del mercado local.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Mantener bien alta la satisfacción de nuestros Clientes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Comunicarnos con nuestros Clientes con claridad, respeto y conocimiento.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Nuestro servicio */}
              {seccionActiva === 'servicio' && (
                <div className="bg-foreground/5 border-l-4 border-foreground p-4 rounded animate-in fade-in slide-in-from-top-2 duration-300">
                  <h3 className="font-bold text-gray-900 mb-2">Nuestro Servicio:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Servicio personalizado, atendemos a cada cliente con profesionalismo, 
                    entendiendo sus necesidades y dándole soluciones a su medida. Completa seguridad 
                    y transparencia en cada transacción.
                  </p>
                </div>
              )}
            </div>

            {/* Botón */}
            <div>
              <Link
                href="/contacto"
                className="inline-block bg-foreground text-white px-6 py-3 rounded hover:bg-foreground/90 transition-colors font-medium"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de video de YouTube */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Cerrar video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video de YouTube embebido */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QOaBMryzEK4?autoplay=1"
              title="Video RIB Propiedades"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
