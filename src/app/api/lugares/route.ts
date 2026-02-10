
import { GOOGLE_PLACES_API_KEY } from "@/src/constants/constants";
import { REVALIDATE_GOGLE_PLACES } from "@/src/constants/revalidate-constants";
import { LugaresRequest, NearbySearchResponse } from "@/src/interfaces";
import { nearbySearchToGeoJSON } from "@/src/utils";
import { NextResponse } from "next/server";


export async function POST(req: Request): Promise<NextResponse> {

  const request: LugaresRequest = await req.json();  

  const url = `https://places.googleapis.com/v1/places:searchNearby`;

  const fields = [
    'places.displayName',
    'places.formattedAddress',
    'places.location','places.types',
    'places.name',
    'places.googleMapsUri',
    'places.businessStatus',
    'places.primaryTypeDisplayName',
    'places.websiteUri',
  ];
  
  const nearbySearchResponse: NearbySearchResponse = await fetch(url, {
    method: 'POST',
    next: {
      revalidate: REVALIDATE_GOGLE_PLACES
    },
    headers: {
      'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
      'X-Goog-FieldMask': fields.join()
    },
    body: JSON.stringify({
      "includedPrimaryTypes": request.includedPrimaryTypes,
      "excludedPrimaryTypes": request.excludedPrimaryTypes,
      "languageCode": "es",
      "rankPreference": request.rankPreference,
      "maxResultCount": 20,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": request.lat,
            "longitude": request.lng,
          },
          "radius": request.radius
        }
      },
    })
  }).then(nearbySearchResponse => nearbySearchResponse.json());
  
  // TODO: Hacerlo mejor...Verificar si la respuesta está vacía o no tiene places
  if (!nearbySearchResponse || !nearbySearchResponse.places || nearbySearchResponse.places.length === 0) {
    return NextResponse.json([]);
  }
  return NextResponse.json(nearbySearchToGeoJSON(nearbySearchResponse));
}
