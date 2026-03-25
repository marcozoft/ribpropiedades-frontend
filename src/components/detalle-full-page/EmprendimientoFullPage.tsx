import { EmprendimientoIdResponse } from '@/src/interfaces'
import { secondaryFont } from '@/src/config/fonts'
import Image from 'next/image';
import { generateSrcImage } from '@/src/utils';
import { CarouselCards, MapaPropiedad, FormularioContacto, CarouselImagenes, ShareDialog, TrackerEmprendimiento } from '@/src/components';
import { SeccionVideos } from './detalle-full-page-components';
import { WHATSAPP_PROMPT_EMPRENDIMIENTO } from '@/src/constants/share-social-constants';


type Props = {
  emprendimientoResponse: EmprendimientoIdResponse
}

export const EmprendimientoFullPage = ({emprendimientoResponse}: Props) => {

  const { emprendimiento, propiedades } = emprendimientoResponse;
  
  return (
    <div className="bg-white">
      {/* Carousel imagenes  */}
      <div className="w-full">
        <CarouselImagenes imagenes={emprendimientoResponse.imagenes} />
      </div>

      {/* Descripcion emprendimiento */}
      <div className="mx-auto flex flex-col gap-4 lg:flex-row max-w-6xl px-4 py-8 pb-10">
        <section className="scroll-mt-33 px-4 xl:basis-2/3" id="descripcion">
          <div className="mb-10 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <h1 className="mt-4 text-4xl font-semibold text-black">
              {emprendimiento.nombre}
            </h1>
            {/* Logo del emprendimiento - opcional */}
            {emprendimiento.logo && (
              <Image
                height={300}
                width={300}
                src={generateSrcImage(emprendimiento.logo)}
                alt={`logo ${emprendimiento.nombre}`}
              />
            )}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h2 className="flex mt-8 mb-4 text-xl font-bold text-black">
                <span className="text-foreground">|&nbsp;</span>Descripción
              </h2>
              <ShareDialog promptWhatsApp={WHATSAPP_PROMPT_EMPRENDIMIENTO}/>
            </div>

            {/* Descripcion larga */}
            <p className={`${secondaryFont.className} text-lg text-black`}
              dangerouslySetInnerHTML={{ __html: emprendimiento.descripcion_larga }} 
            />

          </div>

          {/* Video/Videos (opcional) */}
          {
            <SeccionVideos
              videos={[emprendimiento.video, emprendimiento.video2]}
            />
          }

          {/* Mapa */}
          <h2 className="mt-8 mb-4 text-xl font-bold text-black">
            <span className="text-foreground">|&nbsp;</span>Ubicación
          </h2>

          <MapaPropiedad
            latitud={+emprendimiento.mapa_latitud}
            longitud={+emprendimiento.mapa_longitud}
            tipo="emprendimientos"
            id={emprendimiento.id}
            className="h-80"
          />
        </section>

        {/* formulario de contacto */}
        <section className="bg-background p-5 xl:basis-1/3">
          <FormularioContacto 
            propiedadId={emprendimiento.id}
          />
        </section>
      </div>

      {/* Propiedades ubicadas en el emprendimiento. Pueden ser 0 */}
      <div className="mx-auto flex w-full flex-col pb-30">
        {propiedades.length > 0 && (
          <>
            <div className="mb-10 flex items-center justify-center">
              <h1 className="mt-4 text-4xl font-semibold text-black mx-8">
                Propiedades en {emprendimiento.nombre}
              </h1>
            </div>
            <CarouselCards propiedades={propiedades} />
          </>
        )}
      </div>
      <TrackerEmprendimiento emprendimientoId={emprendimiento.id} />
    </div>
  );
}
