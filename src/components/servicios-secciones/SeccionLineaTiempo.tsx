'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Servicio {
  id: number;
  tituloTab: string;
  tituloCompleto: string;
  descripcion: string;
  descripcionExtra?: string;
  imagen: string;
}

const servicios: Servicio[] = [
  {
    id: 1,
    tituloTab: 'Imagen',
    tituloCompleto: 'Imagen de excepción',
    descripcion: 'Nuestro equipo multimedia visita la propiedad y toma las imágenes necesarias para realizar luego una galería de fotos, videos y tour 360º, los cuales serán colocados en nuestra página Web, visitada por centenares de potenciales Clientes en forma semanal.',
    imagen: 'imagen-excepcion.jpg',
  },
  {
    id: 2,
    tituloTab: 'Apertura Digital',
    tituloCompleto: 'Apertura digital',
    descripcion: 'Ingresamos la propiedad en los portales líderes del segmento, Argenprop, Zonaprop y en los principales buscadores del mercado. Realizamos campañas de marketing digital, posicionamiento, e-mail marketing y publicación en las redes sociales.',
    imagen: 'apertura-digital.jpg',
  },
  {
    id: 3,
    tituloTab: 'Medios',
    tituloCompleto: 'Medios gráficos',
    descripcion: 'Realizamos publicaciones en distintos medios gráficos especializados dentro de los emprendimientos, en revistas de la zona y en cartelería en la vía pública.',
    imagen: 'medios-graficos.jpg',
  },
  {
    id: 4,
    tituloTab: 'Comunicación',
    tituloCompleto: 'Comunicación permanente',
    descripcion: 'Mantenemos comunicación periódica con nuestro Cliente acerca del desarrollo de la venta o alquiler de su propiedad.',
    imagen: 'comunicacion-permanente.jpg',
  },
  {
    id: 5,
    tituloTab: 'Detalles',
    tituloCompleto: 'Cuidado en cada detalle',
    descripcion: 'Coordinamos las visitas a la propiedad con la mayor antelación posible.',
    imagen: 'cuidado-detalle.jpg',
  },
  {
    id: 6,
    tituloTab: 'Asesoramiento',
    tituloCompleto: 'Asesoramiento para su tranquilidad',
    descripcion: 'En los casos necesarios, brindamos asesoramiento jurídico, notarial, crediticio y tributario.',
    imagen: 'asesoramiento.jpg',
  },
];

export const SeccionLineaTiempo = () => {
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs horizontales - estilo Quarter */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-wrap justify-between gap-2 border-b border-gray-200">
            {servicios.map((servicio) => (
              <button
                key={servicio.id}
                onClick={() => setServicioActivo(servicio)}
                className={`
                  flex-1 px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base transition-all duration-300 border-b-2
                  ${
                    servicioActivo.id === servicio.id
                      ? 'border-foreground text-foreground bg-foreground/5'
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                <span className="hidden lg:inline">{servicio.tituloTab}</span>
                <span className="lg:hidden">0{servicio.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido - Imagen izquierda, texto derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Imagen con badge decorativo */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={`/images/servicios/${servicioActivo.imagen}`}
                alt={servicioActivo.tituloCompleto}
                fill
                className="object-cover transition-all duration-700"
                key={servicioActivo.id}
              />
            </div>
            
            {/* Badge decorativo estilo Quarter */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-32 md:h-32 bg-foreground rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-white font-bold text-2xl md:text-3xl">
                  0{servicioActivo.id}
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="mt-8 lg:mt-0">
            <span className="inline-block text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Nuestros Servicios
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {servicioActivo.tituloCompleto}
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              {servicioActivo.descripcion}
            </p>
            
            {servicioActivo.descripcionExtra && (
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {servicioActivo.descripcionExtra}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
