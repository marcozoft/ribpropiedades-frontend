import { getAllPropiedades, putPuntosDeInteresById } from "@/src/requests";
import { NextResponse } from "next/server";

/**
 * Endpoint para limpiar manualmente todos los puntos de interes de todas las propiedades,
 * usado para pruebas pero se puede incorporar en algun lado.
 * 
 * @param req 
 * @returns 
 */
export async function DELETE(req: Request): Promise<NextResponse> {

  // TODO: Endpoint para limpiar manualmente todos los puntos de interes de todas las propiedades
  
  const propiedadesResponse = await getAllPropiedades({});  
  // propiedadesResponse.propiedades.forEach( async propiedad => {
  //   const resp = await putPuntosDeInteresById(propiedad.id, 'propiedades', null);
  //   console.log(resp.json());
  // })


  return NextResponse.json({
    status: 'ok',
    // cantidadLimpiados: propiedadesResponse.propiedades.length,
  })
}