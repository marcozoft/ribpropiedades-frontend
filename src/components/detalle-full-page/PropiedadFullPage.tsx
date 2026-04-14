import { PropiedadDetalleResponse } from "@/src/interfaces";
import {
  SeccionEmprendimiento,
  SeccionPropiedad,
} from "./detalle-full-page-components";
import { CarouselImagenes, FormularioContacto, TrackerPropiedad } from "@/src/components";

type PropiedadDetalleProps = {
  propiedadResponse: PropiedadDetalleResponse;
};

export const PropiedadFullPage = ({
  propiedadResponse,
}: PropiedadDetalleProps) => {
  return (
    <div className="bg-white pb-20">
      {/* Carousel imagenes  */}
      <div className="w-full">
        <CarouselImagenes imagenes={propiedadResponse.imagenes} />
      </div>

      {/* Secciones propiedad + emprendimiento */}
      <div className="mx-auto flex flex-col lg:flex-row max-w-6xl px-4 py-8 pb-20">
        <div className="px-4 xl:basis-2/3">
          <SeccionPropiedad propiedadResponse={propiedadResponse} />
          {propiedadResponse.emprendimiento && (
            <SeccionEmprendimiento
              emprendimiento={propiedadResponse.emprendimiento}
            />
          )}
        </div>

        {/* formulario de contacto */}
        <div className="bg-background p-5 xl:basis-1/3">
          <FormularioContacto
            propiedadId={propiedadResponse.propiedad.id}
            propiedadCodigo={propiedadResponse.propiedad.codigo}
            emprendimientoId={propiedadResponse.emprendimiento?.id}
            emprendimientoNombre={propiedadResponse.emprendimiento?.nombre}
          />
        </div>
      </div>
      <TrackerPropiedad propiedadId={propiedadResponse.propiedad.id}/>
    </div>
  );
};
