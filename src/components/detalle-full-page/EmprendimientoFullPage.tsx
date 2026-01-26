import { EmprendimientoIdResponse } from '@/src/interfaces'
import { GoogleMapsCard, SeccionImagenes } from './detalle-full-page-components'
import { secondaryFont } from '@/src/config/fonts'
import Image from 'next/image';
import { generateSrcImage } from '@/src/utils';
import { FormularioContactoLateral } from './detalle-full-page-components/FormularioContactoLateral';
import { CarouselCards } from '@/src/components';


type Props = {
  emprendimientoResponse: EmprendimientoIdResponse
}

export const EmprendimientoFullPage = ({emprendimientoResponse}: Props) => {

  const { emprendimiento, imagenes, propiedades } = emprendimientoResponse;
  
  return (
    <div className='bg-white'>
      {/* Carouse imagenes + titulo + precio */}
      <SeccionImagenes 
        imagenes={imagenes} 
        titulo={emprendimiento.nombre}
      />

      {/* Descripcion emprendimiento */}
      <div className='max-w-6xl mx-auto flex px-4 py-8 pb-20'>
        <section className='xl:basis-2/3 px-4 scroll-mt-33' id="descripcion">
          <div className="flex justify-between mb-10 items-center">
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
          
          {/* Google Maps */}
          <h2 className="font-bold text-black text-xl mt-8 mb-4"><span className="text-foreground">|&nbsp;</span>Ubicación</h2>
          <GoogleMapsCard 
            lng={emprendimiento.mapa_longitud}
            lat={emprendimiento.mapa_latitud}
          />
        </section>

        {/* formulario de contacto */}
        <section className='hidden xl:flex xl:basis-1/3 bg-background p-5'>
          <FormularioContactoLateral />
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
