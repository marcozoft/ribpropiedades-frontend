import Image from 'next/image';

interface Agente {
  nombre: string;
  apellido: string;
  cargo: string;
  matricula: string;
  titulo?: string;
  email: string;
  imagen: string;
  redes?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const agentes: Agente[] = [
  {
    nombre: 'Julieta',
    apellido: 'Rozas',
    cargo: 'Directora Comercial',
    matricula: 'CUCICBA Mat. 7490',
    titulo: 'Martillera y Corredora Pública',
    email: 'julieta@ribpropiedades.com.ar',
    imagen: 'julieta-rozas.jpg',
  },
  {
    nombre: 'Osvaldo',
    apellido: 'Sobico',
    cargo: 'Titular',
    matricula: 'CMCPSI Mat. 5901',
    titulo: 'Martillero y Corredor Público, Licenciado en Análisis de Sistemas (UBA)',
    email: 'osvaldo@ribpropiedades.com.ar',
    imagen: 'osvaldo-sobico.jpg',
  },
];

export const SeccionAgentes = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-8">
          <p className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
            Somos RIB
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            20 años de experiencia
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Con la ayuda de su liderazgo y experiencia, con RIB Inmobiliaria puede lograr la mejor experiencia inmobiliaria.
          </p>
        </div>

        {/* Grid de agentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {agentes.map((agente, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={`/images/quienes-somos/team/${agente.imagen}`}
                  alt={`${agente.nombre} ${agente.apellido}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Información */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">
                  {agente.nombre} <span className="text-foreground">{agente.apellido}</span>
                </h4>
                <p className="text-foreground font-semibold mb-2">
                  {agente.cargo}
                </p>
                
                {agente.titulo && (
                  <p className="text-sm text-gray-600 mb-1">
                    {agente.titulo}
                  </p>
                )}
                
                <p className="text-sm text-gray-500 mb-3">
                  {agente.matricula}
                </p>

                {/* Email */}
                <a
                  href={`mailto:${agente.email}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {agente.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
