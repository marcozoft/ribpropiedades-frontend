import { FeatureCollection, Point } from "geojson";
import { FeatureCollectionExtended, NearbySearchResponse, PropiedadBasico } from "../interfaces";

export const nearbySearchToGeoJSON = ({ places }: NearbySearchResponse ): FeatureCollection<Point> => {
   
   return {
      type: "FeatureCollection",
      features: places.map(place => ({
         type: "Feature",
         geometry: {
            type: "Point",
            coordinates: [
               place.location.longitude,
               place.location.latitude
            ]
         },
         properties: {
            name: place.name,
            types: place.types,
            formattedAddress: place.formattedAddress,
            displayName: place.displayName.text,
            primaryType: place.primaryTypeDisplayName.text,
            websiteUri: place.websiteUri,
         }
      }))
   };
}

export const propiedadesToGeoJSON = ( propiedades: PropiedadBasico[]): FeatureCollection<Point> => {
   return {
      type: "FeatureCollection",
      features: propiedades.map((prop, index) => ({
         type: "Feature",
         geometry: {
            type: "Point",
            coordinates: [
               +prop.mapa_longitud,
               +prop.mapa_latitud
            ]
         },
         properties: {
            index,
            propiedadId: prop.id
         }
      }))
   };
}


/**
 * Convertir coordenadas de latitud/longitud a FeatureCollectionExtended
 * 
 * Transforma un punto geográfico en un objeto GeoJSON listo para ser
 * utilizado como capa en el mapa de Mapbox.
 * 
 * @param {number} lat - Coordenada de latitud de la ubicación (rango: -90 a 90)
 * @param {number} lng - Coordenada de longitud de la ubicación (rango: -180 a 180)
 * @param {string} icon - Ruta absoluta de la imagen del icono del marcador (obligatorio). Ejemplo: '/markers/propiedad.png'
 * @param {string} layerName - Identificador único de la capa en el mapa. Se usa como key para la fuente y capa de Mapbox
 * @param {Object} options - Opciones adicionales de la capa (parámetro nombrado)
 * @param {string} [options.label] - Nombre descriptivo de la capa para mostrar en la UI (opcional). Si no se proporciona, será una cadena vacía
 * 
 * @returns {FeatureCollectionExtended} Objeto GeoJSON con estructura de capa extendida listo para ser usado en createFeatureCollectionLayer()
 * 
 * @example
 * // Uso básico con parámetros principales
 * latLngToFeatureCollectionExtended(
 *    -34.6037,
 *    -58.3816,
 *    '/markers/propiedad.png',
 *    'propiedad-principal'
 * );
 * 
 * @example
 * // Uso completo incluyendo label
 * latLngToFeatureCollectionExtended(
 *    -34.6037,
 *    -58.3816,
 *    '/markers/propiedad.png',
 *    'restaurante-destacado',
 *    { label: 'Restaurante Principal' }
 * );
 */
export const latLngToFeatureCollectionExtended = (
   lat: number, 
   lng: number,
   icon: string,
   layerName: string,
   { label }: { label?: string }
): FeatureCollectionExtended => {
   return {
     type: "FeatureCollection",
     layerName: layerName?? '',
     label: label?? '',
     icon,
     features: [
       {
         type: "Feature",
         geometry: {
           type: "Point",
           coordinates: [lng, lat],
         },
         properties: {},
       },
     ],
   };
}