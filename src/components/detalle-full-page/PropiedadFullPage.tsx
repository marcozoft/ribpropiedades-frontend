import { PropiedadDetalleResponse } from "@/src/interfaces";
import {
  SeccionEmprendimiento,
  SeccionPropiedad,
} from "./detalle-full-page-components";
import { CarouselImagenes, FormularioContacto, TrackerPropiedad, PrintGallery, PrintPlanos } from "@/src/components";
import Image from "next/image";
import { generateSrcImage } from "@/src/utils";

type PropiedadDetalleProps = {
  propiedadResponse: PropiedadDetalleResponse;
};

export const PropiedadFullPage = ({
  propiedadResponse,
}: PropiedadDetalleProps) => {
  return (
    <div className="propiedad-full-page bg-white pb-20">
      {/* Logo RIB para impresión - HEADER */}
      <div className="print-header hidden print:block">
        <div className="print-header-inner">
          <Image
            src="/images/logo-rib-print.png"
            alt="RIB Inmobiliaria"
            width={180}
            height={60}
            priority
            className="print-header-logo"
          />
          <div className="print-header-contact">
            <p>Tel. 0230 4384500</p>
            <p>Cel. 15 3420 1500</p>
            <p>info@ribpropiedades.com.ar</p>
            <p>Matrícula: CSI 5901 Osvaldo Sobico</p>
          </div>
        </div>        
      </div>

      {/* Carousel imagenes (visible en pantalla) */}
      <div className="w-full carousel-container print:hidden no-print">
        <CarouselImagenes imagenes={propiedadResponse.imagenes} />
      </div>

      {/* Primera imagen para impresión (fullscreen) */}
      {propiedadResponse.imagenes.length > 0 && (
        <div className="hidden print:block w-full">
          <Image
            src={generateSrcImage(propiedadResponse.imagenes[0].imagen)}
            alt="Imagen principal"
            width={800}
            height={600}
            quality={95}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>
      )}

      {/* Secciones propiedad + emprendimiento */}
      <div className="mx-auto flex flex-col lg:flex-row max-w-6xl px-4 py-8 pb-20 propiedad-seccion-print">
        <div className="px-4 xl:basis-2/3 seccion-propiedad">
          <SeccionPropiedad propiedadResponse={propiedadResponse} />
          {propiedadResponse.emprendimiento && (
            <SeccionEmprendimiento
              emprendimiento={propiedadResponse.emprendimiento}
            />
          )}
        </div>

        {/* formulario de contacto */}
        <div className="bg-background p-5 xl:basis-1/3 formulario-contacto no-print">
          <FormularioContacto
            propiedadId={propiedadResponse.propiedad.id}
            propiedadCodigo={propiedadResponse.propiedad.codigo}
            emprendimientoId={propiedadResponse.emprendimiento?.id}
            emprendimientoNombre={propiedadResponse.emprendimiento?.nombre}
          />
        </div>
      </div>

      {/* Galería de imágenes (DESPUÉS de toda la información) 
      <div className="mx-auto max-w-6xl px-4 pb-20 propiedad-seccion-print">
        <PrintGallery imagenes={propiedadResponse.imagenes} />
      </div>
      */}

      {/* Galería de planos (solo en print) 
      {propiedadResponse.planos.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 pb-20 propiedad-seccion-print">
          <PrintPlanos imagenes={propiedadResponse.planos} />
        </div>
      )}
      */}

      <div className="tracker-propiedad no-print">
        <TrackerPropiedad propiedadId={propiedadResponse.propiedad.id}/>
      </div>

      {/* Footer de impresión */}
      <div className="print-footer">
        <p>RIB PROPIEDADES</p>
        <p>Matrícula: CSI 5901. Osvaldo Sobico - Copyright 2026 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};
