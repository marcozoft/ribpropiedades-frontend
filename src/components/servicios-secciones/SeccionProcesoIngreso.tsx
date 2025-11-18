'use client';

import Image from 'next/image';

interface ItemDecision {
  numero: number;
  titulo: string;
  descripcion: string;
  icono: string;
}

const items: ItemDecision[] = [
  {
    numero: 1,
    titulo: 'Tasación profesional',
    descripcion: 'Llevamos a cabo una Tasación profesional, fundamentada en experiencia, seriedad y conocimiento, para lograr claridad en la información para nuestro nuevo Cliente. El precio acordado en esta parte del proceso, es un importante compromiso para nosotros.',
    icono: 'flaticon-home-2',
  },
  {
    numero: 2,
    titulo: 'Revisión de documentación',
    descripcion: 'Realizamos una revisión profunda de la documentación para poder conocer en detalle la situación y corregir cualquier faltante, si lo hubiere.',
    icono: 'flaticon-document',
  },
  {
    numero: 3,
    titulo: 'Asesoramiento normativo',
    descripcion: 'Asesoramos a nuestro Cliente sobre las nuevas normas de AFIP para vender su propiedad.',
    icono: 'flaticon-protection',
  },
];

export const SeccionProcesoIngreso = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda - Contenido */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Proceso de ingreso de propiedades
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Cuando recibimos una propiedad para su venta o alquiler, lo primero que hacemos es aseguramos de cumplir con las siguientes tareas :
            </p>

            {/* Lista de items */}
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.numero}
                  className="group flex gap-4 items-start hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  {/* Icono */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-foreground group-hover:scale-110 transition-all duration-300">
                    <i className={`${item.icono} text-foreground text-xl md:text-2xl group-hover:text-white transition-colors duration-300`}></i>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-foreground transition-colors duration-300">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha - Imágenes superpuestas */}
          <div className="relative order-2 lg:order-2">
            {/* Imagen de fondo */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/servicios/decision-principal.jpg"
                alt="Asesoramiento inmobiliario"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Imagen superpuesta con animación */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/servicios/decision-secundaria.jpg"
                alt="Profesionales RIB"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
