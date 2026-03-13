import { FeatureCollectionExtended, EmprendimientoIdResponse } from "@/src/interfaces";
import { getEmprendimientoById, putPuntosDeInteresById } from "@/src/requests";
import { generateCapasDeInteres } from "@/src/utils";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {

  const { id } = await params;

  const emprendimientoResponse: EmprendimientoIdResponse = await getEmprendimientoById(+id)
    .then((resp) => resp.json());
  
    
  let puntosDeInteres: FeatureCollectionExtended[] = [];

  if(emprendimientoResponse.emprendimiento.puntosDeInteres == null) { // No hay en base de datos
    console.info('📍 Llamando a Google...');
    puntosDeInteres = await generateCapasDeInteres(+emprendimientoResponse.emprendimiento.mapa_latitud, +emprendimientoResponse.emprendimiento.mapa_longitud);
    await putPuntosDeInteresById(+id, 'emprendimientos', puntosDeInteres);
    revalidateTag(`emprendimientos-${id}`);
  } else {
    console.info('✅ Respuesta desde el backend cantidad de capas:' , emprendimientoResponse.emprendimiento.puntosDeInteres.length);
    puntosDeInteres = emprendimientoResponse.emprendimiento.puntosDeInteres;
  }

  // console.log(JSON.stringify(puntosDeInteres));
  return NextResponse.json(puntosDeInteres);
  
}



