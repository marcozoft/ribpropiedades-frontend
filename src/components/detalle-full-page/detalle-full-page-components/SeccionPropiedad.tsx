import { secondaryFont } from "@/src/config/fonts";
import { PropiedadDetalleResponse } from "@/src/interfaces";
import { DetallesGrid, IndicadoresNumericos, SeccionVideos } from ".";
import {
  IndicadorPrecio,
  MapaPropiedad,
  ShareDialog,
} from "@/src/components";
import { camposPorTipoInmueble, descripcionCamposPropiedad } from "@/src/constants/fichas-propiedad-constants";
import { WHATSAPP_PROMPT_PROPIEDAD } from "@/src/constants/share-social-constants";
import { removeAccents } from "@/src/utils";
import { CarouselPlanos } from '../../carousel-planos/CarouselPlanos';


type SeccionPropiedadProps = {
  propiedadResponse: PropiedadDetalleResponse;
};

export const SeccionPropiedad = async ({
  propiedadResponse,
}: SeccionPropiedadProps) => {
  const {
    id,
    codigo,
    descripcion_larga,
    mapa_latitud,
    mapa_longitud,
    operacion,
    precio_publico,
    precio,
    sup_balcon,
    sup_cubierta,
    sup_frente,
    sup_contrafrente,
    sup_lateral_derecho,
    sup_lateral_izquierdo,
    sup_terreno,
    sup_total,
    sup_construible,
    sup_semi_cubierta,
    tipo_inmueble,
    inmueble,
    titulo_venta,
    video,
    video2,
    video3,
  } = propiedadResponse.propiedad;

  
  
  return (
    <section id="descripcion" className="">
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
        <ShareDialog promptWhatsApp={WHATSAPP_PROMPT_PROPIEDAD} />
      </div>

      <div>
        <IndicadorPrecio
          precio={precio}
          precio_condicion={precio_publico}
          moneda="U$D"
          sinEspecificar="Consultar precio"
        />
      </div>

      {/* Detalles */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Detalles
      </h2>

      <IndicadoresNumericos
        indicadores={[
          {
            nombre: descripcionCamposPropiedad.sup_total,
            valor: sup_total,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
          {
            nombre: descripcionCamposPropiedad.sup_cubierta,
            valor: sup_cubierta,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
          {
            nombre: descripcionCamposPropiedad.sup_balcon,
            valor: sup_balcon,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
          {
            nombre: descripcionCamposPropiedad.sup_terreno,
            valor: sup_terreno,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
          {
            nombre: descripcionCamposPropiedad.sup_frente,
            valor: sup_frente,
            icono: <i className="flaticon-expand text-black"></i>,
            unidad: "m",
          },
          {
            nombre: descripcionCamposPropiedad.sup_contrafrente,
            valor: sup_contrafrente,
            icono: <i className="flaticon-expand text-black"></i>,
            unidad: "m",
          },
          {
            nombre: descripcionCamposPropiedad.sup_lateral_derecho,
            valor: sup_lateral_derecho,
            icono: <i className="flaticon-expand text-black"></i>,
            unidad: "m",
          },
          {
            nombre: descripcionCamposPropiedad.sup_lateral_izquierdo,
            valor: sup_lateral_izquierdo,
            icono: <i className="flaticon-expand text-black"></i>,
            unidad: "m",
          },
          {
            nombre: descripcionCamposPropiedad.sup_construible,
            valor: sup_construible,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
          {
            nombre: descripcionCamposPropiedad.sup_semi_cubierta,
            valor: sup_semi_cubierta,
            icono: (
              <i className="flaticon-square-shape-design-interface-tool-symbol text-black"></i>
            ),
            unidad: "m²",
          },
        ]}
      />

      <DetallesGrid
        propiedad={propiedadResponse.propiedad}
        detalles={[
          ...(camposPorTipoInmueble.get('todos') ?? []),
          ...(camposPorTipoInmueble.get(tipo_inmueble) ?? camposPorTipoInmueble.get(removeAccents(inmueble)) ?? []),
        ]}
      />

      {/* | Descripcion */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Descripción
      </h2>

      {/* Descripcion larga */}
      <p
        className={`${secondaryFont.className} text-lg text-black`}
        dangerouslySetInnerHTML={{ __html: descripcion_larga }}
      />

      {/* | Planos */}
      {propiedadResponse.planos.length > 0 && (
        <>
          <h2 className="mt-8 mb-4 text-xl font-bold text-black">
            <span className="text-foreground">|&nbsp;</span>Planos
          </h2>
          <CarouselPlanos imagenes={propiedadResponse.planos} />
        </>
      )}

      {/* Video/Videos (opcional) */}
      {<SeccionVideos videos={[video, video2, video3]} />}

      {/* Map */}
      <h2 className="mt-8 mb-4 text-xl font-bold text-black">
        <span className="text-foreground">|&nbsp;</span>Ubicación
      </h2>

      <MapaPropiedad
        latitud={+mapa_latitud}
        longitud={+mapa_longitud}
        tipo="propiedades"
        id={id}
        className="h-80"
      />
    </section>
  );
};
