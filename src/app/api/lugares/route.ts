import { GOOGLE_PLACES_API_KEY } from "@/src/constants/constants";
import { REVALIDATE_GOGLE_PLACES } from "@/src/constants/revalidate-constants";
import { LugaresRequest, NearbySearchResponse } from "@/src/interfaces";
import { supabase } from "@/src/lib/supabase";
import { nearbySearchToGeoJSON } from "@/src/utils";
import { NextResponse } from "next/server";

const GOOGLE_PLACES_URL = `https://places.googleapis.com/v1/places:searchNearby`;

const NEARBY_FIELDS = [
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

async function fetchFromGooglePlaces(request: LugaresRequest): Promise<NearbySearchResponse> {
  const response = await fetch(GOOGLE_PLACES_URL, {
    method: "POST",
    next: { revalidate: REVALIDATE_GOGLE_PLACES },
    headers: {
      "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
      "X-Goog-FieldMask": NEARBY_FIELDS.join(),
    },
    body: JSON.stringify({
      includedPrimaryTypes: request.includedPrimaryTypes,
      excludedPrimaryTypes: request.excludedPrimaryTypes,
      languageCode: "es",
      rankPreference: request.rankPreference,
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: { latitude: request.lat, longitude: request.lng },
          radius: request.radius,
        },
      },
    }),
  });
  return response.json();
}

export async function POST(req: Request): Promise<NextResponse> {
  const request: LugaresRequest = await req.json();

  // 1. Buscar en el cache de Supabase usando PostGIS
  const { data: cached, error: cacheError } = await supabase.rpc(
    "find_nearby_places_cache",
    {
      p_lat: request.lat,
      p_lng: request.lng,
      p_radius: request.radius,
      p_included_types: request.includedPrimaryTypes,
      p_excluded_types: request.excludedPrimaryTypes,
      p_rank_preference: request.rankPreference,
    }
  );

  if (cacheError) {
    console.error("Error al consultar el cache de Supabase:", cacheError.message);
  }

  if (cached) {
    return NextResponse.json(nearbySearchToGeoJSON(cached as NearbySearchResponse));
  }

  // 2. Cache miss: llamar a la API de Google Places
  const nearbySearchResponse = await fetchFromGooglePlaces(request);

  if (
    !nearbySearchResponse?.places ||
    nearbySearchResponse.places.length === 0
  ) {
    console.warn("Sin resultados de Google Places:", nearbySearchResponse);
    return NextResponse.json(nearbySearchToGeoJSON({ places: [] }));
  }

  // 3. Guardar la respuesta en Supabase para futuras consultas
  const { error: insertError } = await supabase
    .from("google_places_cache")
    .insert({
      search_location: `POINT(${request.lng} ${request.lat})`,
      radius: request.radius,
      included_primary_types: request.includedPrimaryTypes,
      excluded_primary_types: request.excludedPrimaryTypes,
      rank_preference: request.rankPreference,
      response: nearbySearchResponse,
    });

  if (insertError) {
    console.error("Error al guardar en el cache de Supabase:", insertError.message);
  }

  return NextResponse.json(nearbySearchToGeoJSON(nearbySearchResponse));
}
