import { secondaryFont } from '@/src/config/fonts'
import { Buscador, CarouselLanzamientos } from '..'
import { getFilterItems, getLanzamientos } from '@/src/requests'


export const SeccionBuscadorLanzamientos = async() => {

  const { sliders } = await getLanzamientos();
  const { filtros } = await getFilterItems();
  

  return (
    <section className='stripe-marca-morado h-[60vh] mb-50'>


      <div className="max-w-6xl mx-auto -mt-16 z-10 relative">
        <div className="overflow-hidden">
          <Buscador {...filtros} />
        </div>
      </div>

        <div className="flex flex-col items-center w-full justify-center px-4 mt-20">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-background">RIB Lanzamientos</h1>
          <h2 className={`mt-2 font-bold text-background pb-4 ${secondaryFont.className}`}>Descubrí las mejores oportunidades de inversión</h2>
          <CarouselLanzamientos sliders ={sliders} />
        </div>

      {/* </div> */}
    </section>
  )
}