import { ServicioCard } from "../ui";


type ServicioItem = {
   titulo: string;
   descripcion: string;
   imageUrl: string;
   icon: string;
   href: string;
}

const servicios: ServicioItem[] = [
   {
      titulo: `Countries, Barrios & Clubes de campo`,
      descripcion: `RIB Inmobiliaria, te presenta la mejor oferta inmobiliaria para conocer los barrios, 
         el mercado y el proceso de decidir sobre tu futuro.`,
      imageUrl: '',
      icon: 'flaticon-home-2',
      href: '/propiedades'
   },
   {
      titulo: `Proyectos de Inversión, Fracciones & Desarrollos`,
      descripcion: `Conocé los mejores Proyectos de Inversión, Complejos de Usos Mixtos, 
         Fracciones y Desarrollos de Zona Norte`,
      imageUrl: '',
      icon: 'flaticon-house',
      href: '/emprendimientos'
   },
   {
      titulo: `Tasaciones`,
      descripcion: `Averiguá cuánto puede valer tu hogar ahora. Si estas pensando en vender, 
         verificar su posición de capital, o simplemente estar interesado 
         en el mercado`,
      imageUrl: '',
      icon: 'flaticon-house-3',
      href: '/tasaciones'
   },
];



export const Servicios = () => {
   return (
    <section className='stripe-marca'>
        <div className="flex flex-col items-center max-w-6xl mx-auto px-4 py-10">
            <span className="bg-foreground text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
               Servicios
            </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl text-foreground text-center mb-10">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-5">
            {
               servicios.map( servicio => ( <ServicioCard key={servicio.titulo} {...servicio} />))
            }
          </div>
        </div>
    </section>
   )
}
