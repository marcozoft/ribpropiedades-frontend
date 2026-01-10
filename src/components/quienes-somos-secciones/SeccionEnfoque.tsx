import Link from 'next/link';
import Image from 'next/image';

interface Servicio {
  titulo: string;
  descripcion: string | string[];
  imagen: string;
  enlace: string;
  textoBoton: string;
}

const servicios: Servicio[] = [
 {
    titulo: 'Asesoramiento profesional',
    descripcion: 'Te acompañamos en cada paso del proceso inmobiliario con atención personalizada y un equipo de profesionales capacitados. Desde la primera consulta hasta la firma de escritura, brindamos el apoyo necesario para que tomes decisiones informadas y seguras.',
    imagen: 'asesoramiento.jpg',
    enlace: '/contacto#formulario',
    textoBoton: 'Consultanos',
  },
  {
    titulo: 'Experiencia y conocimiento local',
    descripcion: 'Años de trayectoria en el mercado inmobiliario local nos respaldan. Conocemos cada barrio, las tendencias del mercado y los valores reales de las propiedades. Esta experiencia nos permite ofrecerte opciones que se ajustan perfectamente a tus necesidades y presupuesto.',
    imagen: 'conocimiento.jpg',
    enlace: '/quienes-somos',
    textoBoton: 'Conocenos',
  },
  {
    titulo: 'Respaldo jurídico y legal de las operaciones',
    descripcion: 'Todas nuestras operaciones cuentan con el respaldo de un equipo legal especializado en derecho inmobiliario. Verificamos la documentación, realizamos estudios de títulos y garantizamos que cada transacción se realice con total transparencia y seguridad jurídica.',
    imagen: 'respaldo.jpg',
    enlace: '/servicios',
    textoBoton: 'Ver servicios',
  },  
  /*
  {
    titulo: 'Tranquilidad total',
    descripcion: 'Toda la tranquilidad en el momento de realizar una operación inmobiliaria. Porque te acompañamos desde el primer momento en que te comunicas con nosotros.',
    imagen: 'tranquilidad.jpg',
    enlace: '/contacto#formulario',
    textoBoton: 'Asesorate',
  },
  {
    titulo: 'Seriedad y respaldo',
    descripcion: [
      'Asesoramiento',
      'Experiencia local',
      'Respaldo jurídico y legal de las operaciones'
    ],
    imagen: 'seriedad.jpg',
    enlace: '/servicios',
    textoBoton: 'VER SERVICIOS',
  },
  */
];

export const SeccionEnfoque = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 stripe-marca">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nuestro Enfoque Principal
          </h2>
        </div>

        {/* Tarjetas apiladas verticalmente */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Imagen - Orden alternado */}
                <div className={`relative h-64 lg:h-auto ${index === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={`/images/quienes-somos/servicios/${servicio.imagen}`}
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {servicio.titulo}
                  </h3>
                  
                  {/* Descripción - puede ser texto o lista */}
                  {typeof servicio.descripcion === 'string' ? (
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {servicio.descripcion}
                    </p>
                  ) : (
                    <ul className="space-y-3 mb-6">
                      {servicio.descripcion.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-lg">
                          <span className="text-foreground mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Botón */}
                  <div>
                    <Link
                      href={servicio.enlace}
                      className="inline-block bg-foreground text-white px-6 py-3 rounded hover:bg-foreground/90 transition-colors font-medium uppercase text-sm"
                    >
                      {servicio.textoBoton}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
