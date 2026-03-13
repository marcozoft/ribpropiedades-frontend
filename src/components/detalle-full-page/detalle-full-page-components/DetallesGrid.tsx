import { Detalle, PropiedadDetalle } from "@/src/interfaces";

type Props = {
  propiedad: PropiedadDetalle;
  detalles: Detalle[];
};

export const DetallesGrid = ({ propiedad, detalles }: Props) => {

  return detalles.length > 0 ? (  
    <div className="bg-background grid-cols grid px-10 py-6 md:grid-cols-2">
      {detalles.map(
        ({ clave, descripcion }) => {
          const valor = propiedad[clave as keyof PropiedadDetalle];
          
          // Validar que el valor existe y no es un array
          if (valor == 0 || valor == null || Array.isArray(valor)) {
            return null;
          }
          
          return (
            <p key={clave} className="my-2 text-sm text-black">
              {descripcion}:&nbsp;
              <span className="font-bold">
                {valor === 1 || valor === "si" || valor === "1" ? "Si" : String(valor)}
              </span>
            </p>
          );
        },
      )}
    </div>
  ) : null;
};
