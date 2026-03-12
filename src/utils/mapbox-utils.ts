import { FeatureCollectionExtended, LugaresRequest } from "../interfaces";
import { latLngToGeoJSON } from "./gis-utils";

/**
 * Load image
 * 
 * @param map Mapbox map
 * @param imageUrl Image to load
 * @param layerName Name of layer
 */
export const loadImage = (map: mapboxgl.Map, imageUrl: string, layerName: string): void => {

   map.loadImage(imageUrl, (error, image) => {
      if (error) throw error;
      map.addImage(`${layerName}-image`, image!);
   })

}

   /**
    * Agregar marcador único de propiedad en el mapa
    * 
    * Esta función carga y renderiza un marcador de propiedad en el mapa de Mapbox.
    * Realiza dos pasos principales:
    * 1. Carga la imagen del marcador desde la carpeta `/public/markers/`
    * 2. Crea una capa en el mapa con los datos geoespaciales de la propiedad
    * 
    * @param {mapboxgl.Map} map - Instancia del mapa de Mapbox donde se agregará el marcador
    * @param {number} latitud - Coordenada de latitud de la propiedad (rango: -90 a 90)
    * @param {number} longitud - Coordenada de longitud de la propiedad (rango: -180 a 180)
    * 
    * @returns {void} No retorna ningún valor. Realiza operaciones de mutación del mapa.
    * 
    * @example
    * addPropiedadMarker(mapRef.current, -34.6037, -58.3816); // Buenos Aires
    */
   export const addPropiedadMarker = (map: mapboxgl.Map, latitud: number, longitud: number) => {

      loadImage(map, '/markers/propiedad.png', 'propiedades');
      createEmptyLayer(map, 'propiedades', latLngToGeoJSON(latitud, longitud));
      
   };


/**
 * 
 * @param map 
 * @param layerName 
 * @param data 
 */
export const createEmptyLayer = (map: mapboxgl.Map, layerName: string, data?: GeoJSON.FeatureCollection): void => {

   map.addSource(`${layerName}-source`, {
      type: 'geojson', data: data ? data : {
         type: "FeatureCollection",
         features: []
      }
   });

   map.addLayer({
      id: layerName,
      type: 'symbol',
      source: `${layerName}-source`,
      layout: {
         'icon-image': `${layerName}-image`,
         'icon-size': 1
      }
   });
}


/**
 * Crear una capa usando FeatureCollection en el mapa
 * 
 * Integra una colección completa de features GeoJSON (FeatureCollection) en el mapa Mapbox.
 * Realiza tres pasos principales:
 * 1. Agrega una fuente (source) de datos GeoJSON con todas las características. (aca vienen los datos)
 * 2. Carga la imagen del icono que se usará para renderizar los puntos. (icono)
 * 3. Crea una capa de símbolos que visualiza los puntos con el icono especificado. (capa para poder ver/ocultar)
 * 
 * @param {mapboxgl.Map} map - Instancia del mapa de Mapbox donde se agregará la capa
 * @param {FeatureCollectionExtended} data - Objeto que contiene:
 *    - layerName: Identificador único de la capa
 *    - features: Array de características GeoJSON (puntos con propiedades)
 *    - icon: Ruta de la imagen del icono (ej: '/icons/restaurant.png')
 * 
 * @returns {void} No retorna ningún valor. Realiza operaciones de mutación del mapa.
 * 
 * @example
 * const restaurantLayer = {
 *    layerName: 'restaurants',
 *    icon: '/icons/restaurant.png',
 *    features: [
 *       {
 *          type: 'Feature',
 *          geometry: { type: 'Point', coordinates: [-58.3816, -34.6037] },
 *          properties: { name: 'El Sanjuanino' }
 *       }
 *    ]
 * };
 * createFeatureCollectionLayer(mapRef.current, restaurantLayer);
 */
export const createFeatureCollectionLayer = (map: mapboxgl.Map, data: FeatureCollectionExtended): void => {
   
   const layerName = data.layerName;

   map.addSource(`${layerName}-source`, {
      type: 'geojson',
      data: data
   });

   loadImage(map, data.icon, layerName );

   map.addLayer({
      id: layerName,
      type: 'symbol',
      source: `${layerName}-source`,
      layout: {
         'icon-image': `${layerName}-image`,
         'icon-size': 1
      }
   });   
}


/**
 * Add features to existent layer
 * 
 * @param map 
 * @param layerName 
 * @param data 
 * @returns 
 */
export const addFeaturesToLayer = (map: mapboxgl.Map, data: FeatureCollectionExtended): void => {

   const layerName = data.layerName;
   const source = map.getSource(`${layerName}-source`) as mapboxgl.GeoJSONSource;

   if (!source) {
      console.warn(`Source ${layerName} not found`);
      return;
   }

   // Obtener data actual
   const currentData = source._data as GeoJSON.FeatureCollection;

   // Combinar con nuevos points
   const updatedData: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: [...currentData.features, ...data.features]
   };

   source.setData(updatedData);
}


/**
 * Función async para cargar lugares
 */
export const loadNearbySearchPlaces = async (map: mapboxgl.Map, propiedadId: number) => {

   // La coleccion entera llega en un solo llamado
   const capasInteres = await fetch(`/api/lugares/${propiedadId}`).then(resp => resp.json()) as GeoJSON.FeatureCollection[];

   console.log('Capas de interes (GeoJSON):', capasInteres);
   
   // capasInteres.forEach(capaFeatureCollection => addFeaturesToLayer(map, capaFeatureCollection));

}

   