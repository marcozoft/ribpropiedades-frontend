import { GOOGLE_PLACES_API_KEY } from "@/src/constants/constants";
import { mockPuntosDeInteres } from "@/src/constants/mockPuntosDeInteres";
import { REVALIDATE_GOGLE_PLACES } from "@/src/constants/revalidate-constants";
import { FeatureCollectionExtended, LugaresRequest, NearbySearchResponse, PropiedadDetalleResponse } from "@/src/interfaces";
import { getPropiedadById, putPuntosDeInteresById } from "@/src/requests";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CapaDeInteresEspecificacion } from '../../../../../interfaces/geo-interfaces/CapaDeInteresEspecificacion';
import { CAPAS_INTERES } from "@/src/constants/geo-constants";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string, tipo: string }> }
): Promise<NextResponse> {

  const { id, tipo } = await params;

  if (tipo !== 'propiedad' && tipo !== 'emprendimiento') {
    return NextResponse.json(
      { error: 'Tipo inválido. Debe ser "propiedad" o "emprendimiento"' },
      { status: 400 }
    );
  }

  const propiedadResponse: PropiedadDetalleResponse = await getPropiedadById(+id)
    .then((resp) => resp.json());
  
  let puntosDeInteres: FeatureCollectionExtended[] = [];

  if(propiedadResponse.propiedad.puntosDeInteres == null) { // No hay en base de datos
    console.log('Llamar a Google...');
    // puntosDeInteres = await generateCapasDeInteres(+propiedadResponse.propiedad.mapa_latitud, +propiedadResponse.propiedad.mapa_longitud);
    revalidateTag(`${tipo}-${id}`);
  } else {
    puntosDeInteres = propiedadResponse.propiedad.puntosDeInteres;
  }

  console.log(puntosDeInteres);
  return NextResponse.json(puntosDeInteres);
  
}



const generateCapasDeInteres = async(lat: number, lng: number): Promise<FeatureCollectionExtended[]> => {
  
  
  return [ await getCapaInteresByEspecificacion(CAPAS_INTERES[0], lat, lng) ];
}


const getCapaInteresByEspecificacion = async(especificacion: CapaDeInteresEspecificacion, lat: number, lng: number): Promise<FeatureCollectionExtended> => {
  
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
  
  const nearbySearchGoogleResponse: NearbySearchResponse = await fetch(url, {
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
  }).then(resp => resp.json());

  console.log('respuesta Google', nearbySearchGoogleResponse);
  

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


}


