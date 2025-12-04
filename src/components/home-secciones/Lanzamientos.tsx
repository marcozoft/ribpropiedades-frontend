import { secondaryFont } from '@/src/config/fonts'
import { propiedadesSeeed } from '@/src/seed/propiedades'
import { CarouselLanzamientos } from '../propiedades/carousel-lanzamientos/CarouselLanzamientos'


// TODO: Definir fondo
export const Lanzamientos = () => {
  return (
    <section className='bg-foreground stripe-marca-morado px-4 py-10'>
      {/* contenedor relativo para que el h1 quede encima de la imagen */}
      {/* <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[724px] overflow-hidden"> */}
        {/* <Image
          src={'/images/background-diagonal.png'}
          alt=""
          fill
          className="object-cover opacity-4"
          priority
        /> */}

        {/* overlay centrado con el título encima de la imagen */}
        <div className="flex flex-col items-center max-w-6xl mx-auto justify-center px-4 pt-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-background">RIB Lanzamientos</h1>
          <h2 className={`mt-2 font-bold text-background pb-4 ${secondaryFont.className}`}>Descubrí las mejores oportunidades de inversión</h2>
         <CarouselLanzamientos propiedades={propiedadesSeeed.propiedades} />
        </div>

      {/* </div> */}
    </section>
  )
}