import Link from 'next/link';
import Image from 'next/image';

interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
}

const servicios: Servicio[] = [
  {
    titulo: 'Compra tu Hogar',
    descripcion: 'Te ayudamos a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto.',
    imagen: 'compra.png',
    enlace: '/propiedades?operacion=venta',
  },
  {
    titulo: 'Vende tu Propiedad',
    descripcion: 'Maximiza el valor de tu propiedad con nuestra experiencia en el mercado inmobiliario.',
    imagen: 'vende.png',
    enlace: '/servicios#venta',
  },
  {
    titulo: 'Alquila tu Propiedad',
    descripcion: 'Encuentra inquilinos confiables y gestiona tu propiedad de manera eficiente.',
    imagen: 'alquila.png',
    enlace: '/propiedades?operacion=alquiler',
  },
];

export const SeccionServicios = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <p className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nuestro Enfoque Principal
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow"
            >
              {/* Icono/Imagen */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={`/images/servicios/${servicio.imagen}`}
                    alt={servicio.titulo}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link href={servicio.enlace} className="hover:text-foreground transition-colors">
                  {servicio.titulo}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {servicio.descripcion}
              </p>

              {/* Link */}
              <Link
                href={servicio.enlace}
                className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all font-medium"
              >
                Ver más
                <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
