import { secondaryFont } from "@/src/config/fonts";
import { PropiedadDetalleResponse } from "@/src/interfaces";
import { DetallesGrid, YouTubeVideoCard } from ".";
import {
  IndicadorNumerico,
  IndicadorPrecio,
  MapaPropiedad,
} from "@/src/components";
import { detallesPorTipoDeInmueble } from "@/src/constants/fichas-propiedad-constants";

type SeccionPropiedadProps = {
  propiedadResponse: PropiedadDetalleResponse;
};

export const SeccionPropiedad = ({
  propiedadResponse,
}: SeccionPropiedadProps) => {
  const {
    titulo_venta,
    operacion,
    descripcion_larga,
    precio,
    precio_publico,
    video,
    mapa_latitud,
    mapa_longitud,
    sup_total,
    sup_terreno,
    zona,
    codigo,
    tipo_inmueble,
  } = propiedadResponse.propiedad;

  console.log(tipo_inmueble);
  console.log(detallesPorTipoDeInmueble.get(tipo_inmueble));

  return (
    <section id="descripcion" className="scroll-mt-28">
      {/* Titulo, operacion, nombre del emprendimiento (si pertenece a un emprendimiento) y precio */}
      <div className="mb-8 flex justify-between">
        <div className="justify-between">
          <span className="bg-foreground px-1.5 py-0.5 text-sm text-white uppercase">
            {propiedadResponse.emprendimiento?.nombre
              ? `${propiedadResponse.emprendimiento.nombre} - ${operacion}`
              : operacion}
          </span>
        </div>
        <div className="flex items-center">
          <p className="text-right text-xs text-black sm:text-sm">
            Código: {codigo}
          </p>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <h1 className="mt-4 text-xl font-semibold text-black lg:text-3xl xl:text-4xl">
          {titulo_venta}
        </h1>
      </div>
      
      <div>
        <IndicadorPrecio
          precio={precio}
          precio_condicion={precio_publico}
          moneda="U$D"
          sinEspecificar="Consultar"
        />
      </div>

      {/* Detalles enumerados */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Detalles
      </h2>

      <div className="justify-center">
        <div className="my-5 flex gap-2 divide-x overflow-hidden rounded-lg">
          {/* superficie total m2 */}
          <IndicadorNumerico
            nombre="Sup. Total"
            valor={sup_total}
            icono={
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            }
            unidad="m²"
          />
          {/* superficie terreno m2 */}
          <IndicadorNumerico
            nombre="Sup. Terreno"
            valor={sup_terreno}
            icono={
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            }
            unidad="m²"
          />
        </div>
      </div>

      <DetallesGrid
        propiedad={propiedadResponse.propiedad}
        detalles={detallesPorTipoDeInmueble.get(tipo_inmueble) ?? []}
      />

      {/* Descripcion */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Descripción
      </h2>

      {/* Descripcion larga */}
      <p className={`${secondaryFont.className} text-lg text-black`}>
        {descripcion_larga}
      </p>

      {/* Video (opcional) */}
      {video && (
        <>
          <h2 className="my-8 text-xl font-bold text-black">
            <span className="text-foreground">|&nbsp;</span>Video
          </h2>
          <YouTubeVideoCard youTubeId={video} />
        </>
      )}
      {/* Map */}
      <h2 className="my-8 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Ubicación
      </h2>

      <MapaPropiedad
        latitud={+mapa_latitud}
        longitud={+mapa_longitud}
        className="h-80"
      />
    </section>
  );
};
