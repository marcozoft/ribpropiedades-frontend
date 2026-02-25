import { Detalle, PropiedadDetalle } from "@/src/interfaces";

type Props = {
  propiedad: PropiedadDetalle;
  detalles: Detalle[];
};

export const DetallesGrid = ({ propiedad, detalles }: Props) => {

  return detalles.length > 0 ? (  
    <div className="bg-background grid-cols grid px-10 py-6 md:grid-cols-2">
      {detalles.map(
        ({ clave, descripcion }) =>
          propiedad[clave] != 0 &&
          propiedad[clave] != null && (
            <p key={clave} className="my-2 text-sm text-black">
              {descripcion}:&nbsp;
              <span className="font-bold">{propiedad[clave]}</span>
            </p>
          ),
      )}
    </div>
  ) : null;
};
