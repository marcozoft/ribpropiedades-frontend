import { GOOGLE_PLACES_API_KEY } from "../constants/constants";
import { CAPAS_INTERES } from "../constants/geo-constants";
import { REVALIDATE_GOGLE_PLACES } from "../constants/revalidate-constants";
import { CapaDeInteresEspecificacion, FeatureCollectionExtended, NearbySearchResponse } from "../interfaces";

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
export const generateCapasDeInteres = async(lat: number, lng: number): Promise<FeatureCollectionExtended[]> => {
  
  const capas = await Promise.all(
    CAPAS_INTERES.map((capaDefinion) => 
      getCapaInteresByEspecificacion(capaDefinion, lat, lng)
    )
  );

  // Filtrar nulls (capas que tuvieron error)
  const capasValidas = capas.filter((capa) => capa !== null) as FeatureCollectionExtended[];

  return capasValidas;
}


/**
 * Obtiene una capa de puntos de interés desde Google Places API
 * 
 * Realiza una búsqueda cercana a una ubicación específica utilizando la Google Places API.
 * Filtra los resultados según las especificaciones de la capa (tipos de lugares incluidos/excluidos,
 * radio de búsqueda, etc.) y retorna los datos en formato GeoJSON FeatureCollection.
 * 
 * @async
 * @param {CapaDeInteresEspecificacion} especificacion - Configuración de la capa de interés que incluye:
 *   - name: Identificador único de la capa (ej: "restaurantes", "escuelas")
 *   - label: Etiqueta legible para mostrar en UI
 *   - icon: Ícono asociado a la capa
 *   - includedPrimaryTypes: Tipos de lugares a incluir en la búsqueda
 *   - excludedPrimaryTypes: Tipos de lugares a excluir
 *   - rankPreference: Preferencia de ranking ("DISTANCE", "RELEVANCE", etc.)
 *   - radius: Radio de búsqueda en metros
 * @param {number} lat - Latitud del punto central de búsqueda
 * @param {number} lng - Longitud del punto central de búsqueda
 * 
 * @returns {Promise<FeatureCollectionExtended | null>} 
 *   - FeatureCollectionExtended: Colección de features GeoJSON con puntos de interés si la búsqueda es exitosa
 *   - null: Si ocurre un error en la API o no hay resultados
 * 
 * @example
 * const especificacion = {
 *   name: "hospitales",
 *   label: "Hospitales",
 *   icon: "hospital-icon",
 *   includedPrimaryTypes: ["hospital"],
 *   excludedPrimaryTypes: [],
 *   rankPreference: "DISTANCE",
 *   radius: 2000
 * };
 * const capa = await getCapaInteresByEspecificacion(especificacion, -34.9011, -56.1645);
 * 
 * @throws {Error} No lanza explícitamente, pero registra errores en consola si falla la conexión o parsing
 */
export const getCapaInteresByEspecificacion = async(especificacion: CapaDeInteresEspecificacion, lat: number, lng: number): Promise<FeatureCollectionExtended | null> => {
  
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