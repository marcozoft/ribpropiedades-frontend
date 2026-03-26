import { camposSiNo, descripcionCamposPropiedad } from "@/src/constants/fichas-propiedad-constants";
import { PropiedadDetalle } from "@/src/interfaces";

type Props = {
  propiedad: PropiedadDetalle;
  detalles: (keyof PropiedadDetalle)[];
};

export const DetallesGrid = ({ propiedad, detalles }: Props) => {

  return (
    <div className="bg-background grid-cols grid px-10 py-6 md:grid-cols-2">
      {detalles.map(
        ( item ) => {
          
          const valor = propiedad[item];          
          
          // Validar que el valor existe y no es un array
          if (valor === "" || valor == null || valor === 0 ) {
            return null;
          }

          return (
            <p key={item} className="my-2 text-sm text-black">
              {descripcionCamposPropiedad[item]}:&nbsp;
              <span className="font-bold capitalize">
                {
                  ( camposSiNo.includes(item) && valor === 1 ) ? 'Si' : String(propiedad[item])
                }
              </span>
            </p>
          );
        },
      )}
    </div>
  )
};
