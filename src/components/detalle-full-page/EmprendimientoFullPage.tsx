import { EmprendimientoIdResponse } from '@/src/interfaces'
import { secondaryFont } from '@/src/config/fonts'
import Image from 'next/image';
import { generateSrcImage } from '@/src/utils';
import { CarouselCards, MapaPropiedad, FormularioContacto, CarouselImagenes } from '@/src/components';


type Props = {
  emprendimientoResponse: EmprendimientoIdResponse
}

export const EmprendimientoFullPage = ({emprendimientoResponse}: Props) => {

  const { emprendimiento, propiedades } = emprendimientoResponse;
  
  return (
    <div className='bg-white'>

      {/* Carousel imagenes  */}
      <div className="w-full">
        <CarouselImagenes imagenes={emprendimientoResponse.imagenes} />
      </div>

      {/* Descripcion emprendimiento */}
      <div className='max-w-6xl mx-auto flex px-4 py-8 pb-20'>
        <section className='xl:basis-2/3 px-4 scroll-mt-33' id="descripcion">
          <div className="flex flex-col sm:flex-row gap-2 justify-between mb-10 items-center">
            <h1 className="font-semibold text-4xl mt-4 text-black">{emprendimiento.nombre}</h1>
            {/* Logo del emprendimiento - opcional */}
            {
              emprendimiento.logo && <Image height={300} width={300} src={ generateSrcImage(emprendimiento.logo)} alt={`logo ${emprendimiento.nombre}`} />
            }
          </div>
          <div className="mt-10">
            <h2 className="font-bold text-black text-xl mt-8 mb-4"><span className="text-foreground">|&nbsp;</span>Descripción</h2>
            <p className={`${secondaryFont.className} text-black text-lg`}>{emprendimiento.descripcion_larga}</p>
          </div>
          
          {/* Mapa */}
          <h2 className="font-bold text-black text-xl mt-8 mb-4"><span className="text-foreground">|&nbsp;</span>Ubicación</h2>
          <MapaPropiedad latitud={+emprendimiento.mapa_latitud} longitud={+emprendimiento.mapa_longitud} className="h-80" />

        </section>

        {/* formulario de contacto */}
        <section className='hidden xl:flex xl:basis-1/3 bg-background p-5'>
          <FormularioContacto />
        </section>
      </div>

      

      {/* Porpiedades ubicadas en el emprendimiento. Pueden ser 0 */}
      <div className='w-full mx-auto flex flex-col pb-30'>
        {
          propiedades.length > 0 && (
            <>
              <div className="flex justify-center mb-10 items-center">
                <h1 className="font-semibold text-4xl mt-4 text-black">Propiedades en {emprendimiento.nombre}</h1>
              </div>
              <CarouselCards propiedades={propiedades} />
            </>
          )
        }

      </div>

    </div>
  )
}
