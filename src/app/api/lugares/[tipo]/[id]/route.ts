import { GOOGLE_PLACES_API_KEY } from "@/src/constants/constants";
import { REVALIDATE_GOGLE_PLACES } from "@/src/constants/revalidate-constants";
import { FeatureCollectionExtended, NearbySearchResponse, PropiedadDetalleResponse, CapaDeInteresEspecificacion } from "@/src/interfaces";
import { getPropiedadById, putPuntosDeInteresById } from "@/src/requests";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CAPAS_INTERES } from "@/src/constants/geo-constants";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string, tipo: string }> }
): Promise<NextResponse> {

  const { id, tipo } = await params;

  if (tipo !== 'propiedades' && tipo !== 'emprendimientos') {
    return NextResponse.json(
      { error: 'Tipo inválido. Debe ser "propiedades" o "emprendimientos"' },
      { status: 400 }
    );
  }

  const propiedadResponse: PropiedadDetalleResponse = await getPropiedadById(+id)
    .then((resp) => resp.json());
  
    
  let puntosDeInteres: FeatureCollectionExtended[] = [];

  if(propiedadResponse.propiedad.puntosDeInteres == null) { // No hay en base de datos
    console.info('Llamar a Google...');
    puntosDeInteres = await generateCapasDeInteres(+propiedadResponse.propiedad.mapa_latitud, +propiedadResponse.propiedad.mapa_longitud);
    await putPuntosDeInteresById(+id, tipo, puntosDeInteres);
    revalidateTag(`${tipo}-${id}`);
  } else {
    console.log('Respuesta desde el backend cantidad de capas:' , propiedadResponse.propiedad.puntosDeInteres.length);
    puntosDeInteres = propiedadResponse.propiedad.puntosDeInteres;
  }

  // console.log(JSON.stringify(puntosDeInteres));
  return NextResponse.json(puntosDeInteres);
  
}



/**
 * Generar grupos de capas de interés basados en especificaciones
 * 
 * Realiza múltiples llamadas a Google Places API en paralelo
 * y retorna un array con todas las capas de interés obtenidas.
 * Filtra los errores y retorna solo las capas válidas.
 * 
 * @param {number} lat - Latitud del punto de búsqueda
 * @param {number} lng - Longitud del punto de búsqueda
 * 
 * @returns {Promise<FeatureCollectionExtended[]>} Array con todas las capas de interés válidas
 */
const generateCapasDeInteres = async(lat: number, lng: number): Promise<FeatureCollectionExtended[]> => {
  
  const capas = await Promise.all(
    CAPAS_INTERES.map((capaDefinion) => 
      getCapaInteresByEspecificacion(capaDefinion, lat, lng)
    )
  );

  // Filtrar nulls (capas que tuvieron error)
  const capasValidas = capas.filter((capa) => capa !== null) as FeatureCollectionExtended[];

  return capasValidas;
}


const getCapaInteresByEspecificacion = async(especificacion: CapaDeInteresEspecificacion, lat: number, lng: number): Promise<FeatureCollectionExtended | null> => {
  
  try {
    const url = `https://places.googleapis.com/v1/places:searchNearby`;
    
    const fields = [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.types",
      "places.name",
      "places.googleMapsUri",
      "places.businessStatus",
      "places.primaryTypeDisplayName",
      "places.websiteUri",
    ];
    
    const response = await fetch(url, {
      method: "POST",
      next: {
        revalidate: REVALIDATE_GOGLE_PLACES,
      },
      headers: {
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": fields.join(),
      },
      body: JSON.stringify({
        includedPrimaryTypes: especificacion.includedPrimaryTypes,
        excludedPrimaryTypes: especificacion.excludedPrimaryTypes,
        languageCode: "es",
        rankPreference: especificacion.rankPreference,
        maxResultCount: 20,
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius: especificacion.radius,
          },
        },
      }),
    });

    if (!response.ok) {
      console.error(`❌ Error en Google Places API para ${especificacion.name}: Status ${response.status}`);
      return null;
    }

    const nearbySearchGoogleResponse: NearbySearchResponse = await response.json();

    if (!nearbySearchGoogleResponse.places || !Array.isArray(nearbySearchGoogleResponse.places)) {
      console.warn(`⚠️ Sin resultados para ${especificacion.name} en ubicación (${lat}, ${lng})`);
      return null;
    }

    console.log(`✅ Google Places - ${especificacion.name}: ${nearbySearchGoogleResponse.places.length} resultados`);

    return {
      type: "FeatureCollection",
      label: especificacion.label,
      layerName: especificacion.name,
      icon: especificacion.icon,
      features: nearbySearchGoogleResponse.places.map((place) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [place.location.longitude, place.location.latitude],
        },
        properties: {
          name: place.name,
          types: place.types,
          formattedAddress: place.formattedAddress,
          displayName: place.displayName.text,
          primaryType: place.primaryTypeDisplayName.text,
          websiteUri: place.websiteUri,
        },
      })),
    };
  } catch (error) {
    console.error(`❌ Error al obtener ${especificacion.name}:`, error instanceof Error ? error.message : error);
    return null;
  }

}


