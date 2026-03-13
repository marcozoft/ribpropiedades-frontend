import { GOOGLE_PLACES_API_KEY } from "@/src/constants/constants";
import { REVALIDATE_GOGLE_PLACES } from "@/src/constants/revalidate-constants";
import { FeatureCollectionExtended, LugaresRequest, NearbySearchResponse } from "@/src/interfaces";
import { CapaDeInteresEspecificacion } from "@/src/interfaces/geo-interfaces/CapaDeInteresEspecificacion";
import { nearbySearchToGeoJSON } from "@/src/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const request: LugaresRequest = await req.json();
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

  const nearbySearchResponse: NearbySearchResponse = await fetch(url, {
    method: "POST",
    next: {
      revalidate: REVALIDATE_GOGLE_PLACES,
    },
    headers: {
      "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
      "X-Goog-FieldMask": fields.join(),
    },
    body: JSON.stringify({
      includedPrimaryTypes: request.includedPrimaryTypes,
      excludedPrimaryTypes: request.excludedPrimaryTypes,
      languageCode: "es",
      rankPreference: request.rankPreference,
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: {
            latitude: request.lat,
            longitude: request.lng,
          },
          radius: request.radius,
        },
      },
    }),
  }).then((nearbySearchResponse) => nearbySearchResponse.json());
  
  // TODO: Hacerlo mejor...Verificar si la respuesta está vacía o no tiene places
  if (
    !nearbySearchResponse ||
    !nearbySearchResponse.places ||
    nearbySearchResponse.places.length === 0
  ) {
    console.warn('Error al obtener los puntos relacionados', nearbySearchResponse);
    return NextResponse.json(nearbySearchToGeoJSON({ places: [] }));
  }
  return NextResponse.json(nearbySearchToGeoJSON(nearbySearchResponse));
}


/**
 * 
 * @param capasDeInteres 
 * @param latitud 
 * @param longitud 
 * @returns 
 */
const buildPlacesFromGoogle = (capasDeInteres: CapaDeInteresEspecificacion[], latitud: number, longitud: number): FeatureCollectionExtended[] => {
  
  capasDeInteres.forEach(async ({ name, includedPrimaryTypes, excludedPrimaryTypes, radius, rankPreference }) => {
    const request: LugaresRequest = {
      results: 20,
      includedPrimaryTypes: includedPrimaryTypes,
      lat: latitud,
      lng: longitud,
      radius: radius,
      excludedPrimaryTypes: excludedPrimaryTypes,
      rankPreference: rankPreference
    };
  })

  return []

}




//  capasInteres.forEach(async ({ name, includedPrimaryTypes, excludePrimaryTypes, radius, rankPreference }) => {
//       const request: LugaresRequest = {
//          results: 20,
//          includedPrimaryTypes: includedPrimaryTypes,
//          lat: coordinates[1],
//          lng: coordinates[0],
//          radius: radius,
//          excludedPrimaryTypes: excludePrimaryTypes,
//          rankPreference: rankPreference
//       };