import Form from "next/form"
import { LocalidadItemFilter, OperacionItemFilter, TipoInmuebleItemFilter } from "@/src/interfaces"

type Props = {
   localidades: LocalidadItemFilter[];
   operaciones: OperacionItemFilter[];
   tipos_inmueble: TipoInmuebleItemFilter[];
}

export const Buscador = ({localidades, operaciones, tipos_inmueble}: Props) => {
   return (
      <Form action={'/propiedades'}>
         <div className="bg-white flex flex-wrap my-10 justify-between gap-10 rounded">
            <div className="border-1 border-background hover:border-foreground rounded my-10 ml-10 flex flex-grow items-center">
               <select id="localidad" name="localidad" autoComplete="localidad" className="w-full uppercase mx-3 text-gray-800"> 
                  {
                     localidades.map( localidad => (<option key={localidad.valor} value={localidad.valor}>{localidad.label}</option> ))
                  }
               </select>
            </div>

            <div className="border-1 my-10 border-background hover:border-foreground rounded flex flex-grow items-center">
               <select id="operacion" name="operacion" autoComplete="operacion" className="w-full uppercase mx-3 text-gray-800">
                  {
                     operaciones.map( operacion => (<option key={operacion.valor} value={operacion.valor}>{operacion.label}</option> ))
                  }
               </select>
            </div>

            <div className="border-1 my-10 border-background hover:border-foreground rounded flex flex-grow items-center">
               <select id="tipo_inmueble" name="tipo_inmueble" autoComplete="tipo_inmueble" className="w-full uppercase mx-3 text-gray-800">
                 {
                     tipos_inmueble.map( tipo => (<option key={tipo.valor} value={tipo.valor}>{tipo.label}</option> ))
                  }
               </select>
            </div>

            <div className="border-1 rounded my-10 border-background hover:border-foreground mr-10 flex-none bg-foreground">
               <button className="cursor-pointer pt-2 mx-2" type="submit">
                  <i className="flaticon-loupe text-white text-4xl" />
               </button>
            </div>

         </div>
      </Form>
   )
}
