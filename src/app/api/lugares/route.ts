
import { LugaresRequest, NearbySearchResponse } from "@/src/interfaces";
import { NextResponse } from "next/server";


const GOOGLE_API_KEY = "AIzaSyD02kJX61Dq9rsFrlsLZuBql0K1S4JSD5Y";


export async function POST(req: Request) {

  const request: LugaresRequest = await req.json();

  console.log(request);
  

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
  
  console.log(fields.join());

  const places: NearbySearchResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Goog-Api-Key': GOOGLE_API_KEY,
      'X-Goog-FieldMask': fields.join()
    },
    body: JSON.stringify({
      "includedTypes": request.types,
      "languageCode": "es",
      "maxResultCount": 20,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": request.lat,
            "longitude": request.lng,
          },
          "radius": 500.0
        }
      }
    })
  }).then(response => response.json());

  console.log(places);
  
  // TODO: Hacerlo mejor...Verificar si la respuesta está vacía o no tiene places
  if (!places || !places.places || places.places.length === 0) {
    return NextResponse.json([]);
  }

  return NextResponse.json(places.places);
}
