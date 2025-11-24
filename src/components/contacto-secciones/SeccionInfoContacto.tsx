'use client';

import Image from 'next/image';

interface InfoContacto {
  imagen: string;
  titulo: string;
  linea1: string;
  linea2: string;
}

const infoContacto: InfoContacto[] = [
  {
    imagen: 'email.png',
    titulo: 'Email',
    linea1: 'info@ribpropiedades.com.ar',
    linea2: 'Contacto y consultas',
  },
  {
    imagen: 'telefono.png',
    titulo: 'Teléfono',
    linea1: '+54 0230 4384500',
    linea2: 'Móvil: (54911) 3420 1500',
  },
  {
    imagen: 'ubicacion.png',
    titulo: 'Oficina',
    linea1: 'Edificio Bureau Pilar Norte - Of. 255, Piso 2',
    linea2: 'Ruta Panamericana Km 49.5, Pilar, Buenos Aires',
  },
];

export const SeccionInfoContacto = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoContacto.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-[0_4px_20px_rgba(95,2,31,0.15)] hover:shadow-[0_8px_30px_rgba(95,2,31,0.25)] transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                <Image
                  src={`/images/contacto/${info.imagen}`}
                  alt={info.titulo}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {info.titulo}
              </h3>
              <p className="text-gray-600 mb-1">{info.linea1}</p>
              <p className="text-gray-600">{info.linea2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
