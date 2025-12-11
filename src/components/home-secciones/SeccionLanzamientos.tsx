import { secondaryFont } from '@/src/config/fonts'
import { CarouselLanzamientos } from '..'
import { getLanzamientos } from '@/src/requests'



export const SeccionLanzamientos = async() => {

  const { sliders } = await getLanzamientos();

  return (
    <section className='bg-foreground stripe-marca-morado px-4 py-8'>
        {/* overlay centrado con el título encima de la imagen */}
        <div className="flex flex-col items-center w-full justify-center px-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-background">RIB Lanzamientos</h1>
          <h2 className={`mt-2 font-bold text-background pb-4 ${secondaryFont.className}`}>Descubrí las mejores oportunidades de inversión</h2>
          <CarouselLanzamientos sliders ={sliders} />
        </div>

      {/* </div> */}
    </section>
  )
}