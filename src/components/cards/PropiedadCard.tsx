import { PropiedadBasico } from "@/src/interfaces";
import Image from "next/image";
import {
  FajaPromocional,
  IndicadorNumerico,
  IndicadorPrecio,
  TituloDeVenta,
} from "./cards-components";
import Link from "next/link";
import { generateHrefPropiedad, generateSrcImage } from "@/src/utils";

type Props = {
  propiedad: PropiedadBasico;
  className?: string;
};

export const PropiedadCard = ({ propiedad, className }: Props) => {
  const {
    codigo,
    dormitorios,
    faja_promocional,
    id,
    imagen_principal,
    inmueble,
    operacion,
    precio_publico,
    precio,
    sup_total,
    sup_terreno,
    titulo_venta,
    emprendimiento,
  } = propiedad;

  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <Link
        href={generateHrefPropiedad(id, titulo_venta)}
        className="relative inline-block w-full"
      >
        <div className="rounded-xs bg-white p-4 shadow">
          <div className="relative flex justify-center overflow-hidden rounded-xs">
            {/* Imagen */}
            <div className="aspect-video w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <Image
                className="h-full w-full object-cover"
                src={generateSrcImage(imagen_principal)}
                width={950}
                height={534}
                alt={codigo}
              />
            </div>

            {/* Faja promocional */}
            {faja_promocional && (
              <FajaPromocional descripcion={faja_promocional} />
            )}
          </div>

          <div className="mt-1 flex justify-between">
            <p className="text-foreground text-md uppercase">
              {inmueble} - {operacion}
            </p>
            <p className="text-right text-xs text-black">Código: {codigo}</p>
          </div>

          <div className="mt-1">
            <p className="text-md font-foreground text-black">
              {emprendimiento?.nombre ? `${emprendimiento.nombre}` : `-`}
            </p>
            {/* Precio */}
            <IndicadorPrecio
              className="text-black"
              precio={precio}
              precio_condicion={precio_publico}
              sinEspecificar="Consultar"
              moneda="U$D"
            />
          </div>
          <div className="mt-2">
            {/* Descripcion */}
            <TituloDeVenta tituloVenta={titulo_venta} />
          </div>
          <div className="justify-center">
            <div className="mt-4 flex gap-2 divide-x overflow-hidden rounded-lg px-1 py-1">
              {/* Cantidad de dormitorios */}
              <IndicadorNumerico
                nombre="Dormitorios"
                valor={dormitorios}
                icono={<i className="flaticon-bed text-black"></i>}
              />

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
        </div>
      </Link>
    </div>
  );
};
