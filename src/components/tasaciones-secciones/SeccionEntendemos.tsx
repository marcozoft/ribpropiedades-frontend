'use client';

interface Tarea {
  numero: string;
  titulo: string;
  descripcion: string;
}

const tareas: Tarea[] = [
  {
    numero: '01',
    titulo: 'Rápida respuesta',
    descripcion: 'Nos ponemos en contacto a la brevedad con usted y combinamos una entrevista en la propiedad.<br/><br/>En 24hs le entregamos nuestra tasación la cual incluye todos los aspectos legales y documentales necesarios a tener en cuenta para poner en venta o alquilar su propiedad.',
  },
  {
    numero: '02',
    titulo: 'Expansión',
    descripcion: 'Una vez aceptada la tasación, nuestro fotógrafo visita la propiedad para extraer las mejores imágenes para publicar en nuestra página web, redes sociales y en los buscadores de propiedades más reconocidos del mercado.<br/><br/>También fijamos con usted el procedimiento a llevar a cabo para mostrar la propiedad a los Clientes potenciales.',
  },
  {
    numero: '03',
    titulo: 'Comunicación permanente',
    descripcion: 'A medida que avanza nuestra gestión, mantenemos contacto fluido con usted, informándole en forma escrita sobre los resultados de las visitas a la propiedad.<br/><br/>Llevamos a cabo distintos tipos de publicidad institucional y de nuestras propiedades en los clasificados más importantes del país, diferentes revistas especializadas y cartelería en la vía pública en toda la zona de Pilar.',
  },  
];

export const SeccionEntendemos = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Entendemos sus necesidades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una vez que establecemos este primer paso con nuestro Cliente, llevamos a cabo las siguientes tareas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tareas.map((tarea, index) => (
            <div
              key={index}
              className="group relative bg-[#ededed] rounded-lg p-8 hover:bg-[#5f021f] hover:shadow-xl transition-all duration-300"
            >
              {/* Número */}
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 bg-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {tarea.numero}
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">
                  {tarea.titulo}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed group-hover:text-white/90"
                  dangerouslySetInnerHTML={{ __html: tarea.descripcion }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
