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
    icono: 'flaticon-official-documents',
  },
  {
    numero: 3,
    titulo: 'Asesoramiento normativo',
    descripcion: 'Asesoramos a nuestro Cliente sobre las nuevas normas de AFIP para vender su propiedad.',
    icono: 'flaticon-secure',
  },
];

export const SeccionDecision = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda - Imágenes superpuestas */}
          <div className="relative order-2 lg:order-1">
            {/* Imagen de fondo */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/servicios/decision-principal.jpg"
                alt="Asesoramiento inmobiliario"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Imagen superpuesta con animación */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/servicios/decision-secundaria.jpg"
                alt="Profesionales RIB"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Columna Derecha - Contenido */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Has tomado la decisión. Estás listo para comprar o alquilar?
            </h2>
            
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-foreground transition-colors duration-300">
                Proceso de compra o alquiler de una propiedad
            </h3>
            

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                A partir del momento en que tomamos contacto con nuestro potencial Cliente, nos abocamos a la tarea de entender sus necesidades y expectativas. Una vez que logramos este importante primer paso, llevamos a cabo un análisis detallado con el Cliente de las propiedades que cumplen los requisitos solicitados, dando un completo asesoramiento sobre cada una de las mismas. Este proceso, en el cual también se visitan las propiedades, tomara el tiempo necesario en cada caso hasta lograr la completa satisfacción por parte del Cliente.
                <br/><br/>
                Cuando la propiedad es seleccionada, revisamos en detalle toda la documentación pertinente para realizar la operación de Compra o Alquiler, confeccionamos el Boleto de Compra-Venta o Contrato de Alquiler, expedimos los certificados de dominio e inhibición en caso de Venta y las garantías correspondientes en caso de Alquiler. Continuamos acompañando a nuestro Cliente hasta que la propiedad le es entregada.
                <br/><br/>
                Durante todo este proceso, trabajamos con nuestro equipo de abogados, escribanos y agrimensores con los cuales podemos asegurar la mejor calidad en cada paso del proceso.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
