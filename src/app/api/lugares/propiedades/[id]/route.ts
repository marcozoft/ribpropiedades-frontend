import { FeatureCollectionExtended, PropiedadDetalleResponse } from "@/src/interfaces";
import { getPropiedadById, putPuntosDeInteresById } from "@/src/requests";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { generateCapasDeInteres } from "@/src/utils";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {

  const { id } = await params;

  const propiedadResponse: PropiedadDetalleResponse = await getPropiedadById(+id)
    .then((resp) => resp.json());
  
    
  let puntosDeInteres: FeatureCollectionExtended[] = [];

  if(propiedadResponse.propiedad.puntosDeInteres == null) { // No hay en base de datos
    console.info('📍 Llamando a Google...');
    puntosDeInteres = await generateCapasDeInteres(+propiedadResponse.propiedad.mapa_latitud, +propiedadResponse.propiedad.mapa_longitud);
    await putPuntosDeInteresById(+id, 'propiedades', puntosDeInteres);
    revalidateTag(`propiedades-${id}`);
  } else {
    console.info('✅ Respuesta desde el backend cantidad de capas:' , propiedadResponse.propiedad.puntosDeInteres.length);
    puntosDeInteres = propiedadResponse.propiedad.puntosDeInteres;
  }

  // console.log(JSON.stringify(puntosDeInteres));
  return NextResponse.json(puntosDeInteres);
  
}

