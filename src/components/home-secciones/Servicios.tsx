import { secondaryFont } from "@/src/app/config/fonts"
import { ServicioCard } from "../ui";
import { Servicio } from "@/src/interfaces";


const servicios: Servicio[] = [
   {
      titulo: `Countries, Barrios & Clubes de campo`,
      descripcion: `RIB Inmobiliaria, te presenta la mejor oferta inmobiliaria para conocer los barrios, 
         el mercado y el proceso de decidir sobre tu futuro.`,
      imageUrl: ''
   },
   {
      titulo: `Proyectos de Inversión, Fracciones & Desarrollos`,
      descripcion: `Conocé los mejores Proyectos de Inversión, Complejos de Usos Mixtos, 
         Fracciones y Desarrollos de Zona Norte`,
      imageUrl: ''
   },
   {
      titulo: `Tasaciones`,
      descripcion: `Averiguá cuánto puede valer tu hogar ahora. Si estas pensando en vender, 
         verificar su posición de capital, o simplemente estar interesado 
         en el mercado`,
      imageUrl: ''
   },
];



export const Servicios = () => {
   return (
    <section className='bg-white stripe-1'>
        <div className="flex flex-col items-center max-w-6xl mx-auto px-4 py-10">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black text-center">RIB Servicios</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-5">
            {
               servicios.map( servicio => ( <ServicioCard key={servicio.titulo} {...servicio} />))
            }
          </div>
        </div>
    </section>
   )
}
