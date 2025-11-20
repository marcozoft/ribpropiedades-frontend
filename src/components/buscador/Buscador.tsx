import Form from "next/form"
import { Operacion } from "@/src/interfaces"

export const Buscador = () => {
   return (
      <Form action={'/propiedades'}>
         <div className="bg-white flex flex-wrap my-10 justify-between">
            <div className="border-1 my-10 mx-10 flex">
               <select className="flex" id="country" name="operacion" autoComplete="country-name"> 
                  <option value="Pilar">Pilar</option>
                  <option value="Pilar Centro">Pilar Centro</option>
                  <option value="San Isidro">San Isidro</option>
                  <option value="CABA">CABA</option>
               </select>
            </div>

            <div className="border-1 my-10 mx-10 flex">
               <select id="country" name="operacion" autoComplete="country-name" className="">
                  <option value={Operacion.VENTA}>Venta</option>
                  <option value={Operacion.ALQUILER}>Alquiler</option>
               </select>
            </div>

            <div className="border-1 my-10 mx-10 flex">
               <select id="country" name="operacion" autoComplete="country-name" className="">
                  <option value={Operacion.VENTA}>Venta</option>
                  <option value={Operacion.ALQUILER}>Alquiler</option>
               </select>
            </div>

            <div className="border-1 my-10 mx-10 flex">
               <button className="border-1" type="submit">
                  <i className="flaticon-loupe text-amber-950 text-4xl" />
               </button>
            </div>

         </div>
      </Form>
   )
}
