import { PropiedadesGrid } from "@/src/components";
import { secondaryFont } from "../config/fonts";
import { PropiedadesResponse } from "@/src/interfaces";
import { API_KEY, API_URL, BASE_URL } from "@/src/constants/constants";


const getAllPropiedades = async (): Promise<PropiedadesResponse> => {

   const queryParams = new URLSearchParams({
      'page': '1'
   });
   // queryParams.append('page','1');

   return fetch(`${API_URL}/propiedades?${queryParams}`, {
      headers: {
         'X-API-Key': API_KEY
      },

   }).then(resp => resp.json())

}


export default async function Page({ searchParams }: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

   const { 
      pagina, 
      operacion, 
      zona,
      precio_min,
      precio_max,
      ambientes,
      orden = 'precio_desc'
   } = await searchParams;
   // console.log({ pagina, sort, query });

   const propiedadesResponse = await getAllPropiedades();

   console.log(propiedadesResponse);
   

   return (
      <div className="bg-white">
         <div className="bg-background">
            <div className="max-w-6xl mx-auto px-4">
               <div className="py-24">
                  <h1 className="text-5xl text-black font-bold">Listado de propiedades</h1>
                  <p>pagina: {pagina}</p>
                  <p>operacion: {operacion}</p>
                  <p>zona: {zona}</p>
                  <p>precio_min:{precio_min}</p>
                  <p>precio_max max:{precio_max}</p>
                  <p>ambientes: {ambientes}</p>
                  <p>orden: {orden}</p>
               </div>
            </div>
         </div>
         <PropiedadesGrid propiedades={propiedadesResponse.propiedades} />
      </div>
   )

}

// destacadas: Si es 1, devuelve solo propiedades destacadas (sin paginación, ordenadas por orden_destacado)
// page: Número de página (default: 1, ignorado si destacadas=1)
// tipo: Tipo de operación (VENTA, ALQUILER, ALQUILER_TEMPORAL)
// zona: Nombre de la zona
// tipo_propiedad: Tipo de propiedad (CASA, DEPARTAMENTO, etc.)
// precio_min: Precio mínimo
// precio_max: Precio máximo
// ambientes: Número de ambientes
// orden: Criterio de ordenamiento (precio_asc, precio_desc, fecha_desc, fecha_asc, codigo_asc, codigo_desc) - ignorado si destacadas=1