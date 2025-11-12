import { PropiedadDetalle } from "@/src/interfaces";

type Detalle = {
   clave: keyof PropiedadDetalle;
   descripcion: string;
}

type Props = {
   propiedad: PropiedadDetalle;
   detalles: Detalle[]
}

export const DetallesGrid = ({ propiedad, detalles }:Props) => {

   return (
      <div className="bg-background px-10 py-6 grid grid-cols-2">
         {
            detalles.map( ({clave, descripcion}) => (
               <p key={clave} className="text-sm text-black my-2">{descripcion}:&nbsp;
                  <span className="font-bold">{propiedad[clave]}</span>
               </p>
            ))
         }
      </div>
  )
}
