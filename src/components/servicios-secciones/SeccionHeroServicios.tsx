'use client';

import Link from 'next/link';
import Image from 'next/image';

export const SeccionHeroServicios = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/servicios/background-servicios.jpg"
          alt="RIB Propiedades Servicios"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay negro transparente */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-block mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Nuestros Servicios
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Servicio y Experiencia{' '}
            <span className="text-white/90">a tu disposición</span>
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            Haciendo enfoque en el servicio excepcional a los clientes significa ser expertos en lo que hacemos, calidad, tecnología, y vanguardia inmobiliaria.
          </p>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span>¿Necesitás ayuda?</span>
              <i className="flaticon-right-arrow text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>

            <Link
              href="/tasaciones"
              className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-lg font-semibold text-lg border-2 border-foreground hover:bg-foreground hover:text-white transition-all duration-300"
            >
              <span>Solicitar Tasación</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
