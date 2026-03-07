import { ServicioCard } from '@/src/components';
import Image from 'next/image';


type ServicioItem = {
   titulo: string;
   descripcion: string;
   imageUrl: string;
   icon: string;
   href: string;
}

const servicios: ServicioItem[] = [
   {
      titulo: `Countries, Barrios Cerrados & Clubes de campo`,
      descripcion: `RIB Inmobiliaria, te presenta la mejor oferta inmobiliaria para conocer los barrios cerrados, 
         el mercado y el proceso de decidir sobre tu futuro.`,
      imageUrl: '',
      icon: 'flaticon-home-2',
      href: '/emprendimientos?categoria=country&categoria=barrio_cerrado&categoria=club_de_campo'
   },
   {
      titulo: `Proyectos de Inversión, Fracciones & Desarrollos`,
      descripcion: `Conocé los mejores Proyectos de Inversión, Complejos de Usos Mixtos, 
         Fracciones y Desarrollos de Zona Norte`,
      imageUrl: '',
      icon: 'flaticon-house',
      href: '/emprendimientos?categoria=condominio&categoria=proyectos_de_inversin&categoria=edificio_de_oficinas_y_locales'
   },
   {
      titulo: `Tasaciones y Valoraciones Inmobiliarias`,
      descripcion: `Averiguá cuánto puede valer tu hogar ahora. Si estas pensando en vender, 
         verificar su posición de capital, o simplemente estar interesado 
         en el mercado`,
      imageUrl: '',
      icon: 'flaticon-house-3',
      href: '/tasaciones'
   },
];



export const SeccionServicios = () => {
   return (
      <section className='relative stripe-marca overflow-hidden'>
         {/* Imagen de fondo */}
         <div className="absolute inset-0 z-0">
            <Image
               src="/images/home-servicios-back.jpg"
               alt="Fondo servicios"
               fill
               className="object-cover"
               priority={false}
            />
         </div>
         
         {/* Contenido */}
         <div className="flex flex-col items-center max-w-6xl mx-auto px-4 py-10 relative z-10">
            <span className="bg-foreground text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
               Servicios
            </span>
            <h2 className="font-bold text-4xl sm:text-4xl md:text-5xl text-foreground text-center mb-10">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-5">
               {
                  servicios.map(servicio => (<ServicioCard key={servicio.titulo} {...servicio} />))
               }
            </div>
         </div>
      </section>
   )
}
