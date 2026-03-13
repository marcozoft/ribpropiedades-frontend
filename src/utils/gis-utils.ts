import { FeatureCollectionExtended, PropiedadBasico } from "../interfaces";

/**
 * Convertir un array de propiedades a FeatureCollectionExtended
 * 
 * Transforma una lista de propiedades básicas en un objeto GeoJSON listo para ser
 * renderizado como capa en el mapa de Mapbox. Cada propiedad se convierte en un Feature
 * con sus coordenadas geográficas.
 * 
 * Casos de uso:
 * - Mostrar múltiples propiedades en el mapa (ej: resultados de búsqueda)
 * - Agrupar propiedades por tipo/categoría en capas separadas
 * - Dinámicamente cargar propiedades destacadas o filtradas
 * 
 * @param {PropiedadBasico[]} propiedades - Array de propiedades a convertir.
 *    Cada propiedad debe tener mapa_latitud y mapa_longitud
 * @param {string} icon - Ruta del icono del marcador (ej: '/markers/propiedad-destacada.png')
 * @param {string} layerName - Identificador único de la capa (ej: 'propiedades-venta', 'propiedades-alquiler')
 * @param {Object} options - Opciones adicionales (parámetro nombrado)
 * @param {string} [options.label] - Nombre descriptivo de la capa para mostrar en UI (opcional).
 *    Ejemplo: 'Propiedades en Venta', 'Propiedades Destacadas'
 * 
 * @returns {FeatureCollectionExtended} Objeto GeoJSON listo para usar con createFeatureCollectionLayer()
 * 
 * @example
 * // Mostrar propiedades destacadas en el mapa
 * const propiedadesDestacadas = [
 *    { id: 1, mapa_latitud: -34.6037, mapa_longitud: -58.3816, titulo: 'Casa A' },
 *    { id: 2, mapa_latitud: -34.6050, mapa_longitud: -58.3850, titulo: 'Casa B' }
 * ];
 * 
 * const capa = propiedadesToFeatureCollectionExtended(
 *    propiedadesDestacadas,
 *    '/markers/destacada.png',
 *    'propiedades-destacadas',
 *    { label: 'Propiedades Destacadas' }
 * );
 * 
 * createFeatureCollectionLayer(map, capa);
 * 
 * @example
 * // Agrupar propiedades por operación
 * const propiedadesVenta = propiedades.filter(p => p.operacion === 'Venta');
 * const capaVenta = propiedadesToFeatureCollectionExtended(
 *    propiedadesVenta,
 *    '/markers/venta.png',
 *    'propiedades-venta',
 *    { label: 'Ventas' }
 * );
 */
export const propiedadesToFeatureCollectionExtended = (
   propiedades: PropiedadBasico[],
   icon: string,
   layerName: string,
   { label }: { label?: string }
): FeatureCollectionExtended => {
   return {
     type: "FeatureCollection",
     layerName: layerName,
     label: label?? '',
     icon: icon,
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
     layerName: layerName,
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