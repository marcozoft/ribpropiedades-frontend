import { FeatureCollectionExtended } from "../interfaces";

/**
 * Cargar imagen para un marcador en el mapa
 * 
 * Carga una imagen desde una URL y la registra en el mapa de Mapbox.
 * Valida si la imagen ya existe antes de cargarla (evita duplicados).
 * 
 * @param {mapboxgl.Map} map - Instancia del mapa de Mapbox
 * @param {string} imageUrl - URL de la imagen a cargar (ej: '/markers/propiedad.png')
 * @param {string} layerName - Identificador único para la imagen (generalmente el nombre de la capa)
 * 
 * @returns {void} No retorna ningún valor.
 * 
 * @throws {Error} Si hay un error al cargar la imagen desde la URL
 */
export const loadImage = (map: mapboxgl.Map, imageUrl: string, layerName: string): void => {

   const imageName = `${layerName}-image`;

   // Validar si la imagen ya existe
   if (map.hasImage(imageName)) {
      // console.log(`✅ Imagen "${imageName}" ya cargada`);
      return;
   }

   map.loadImage(imageUrl, (error, image) => {
      if (error) {
         console.error(`❌ Error cargando imagen "${imageUrl}":`, error);
         throw error;
      }

      if (!image) {
         console.error(`❌ La imagen "${imageUrl}" es nula`);
         return;
      }

      map.addImage(imageName, image);
      // console.log(`✅ Imagen cargada: "${imageName}"`);
   })

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
   const sourceId = `${layerName}-source`;
   const layerId = layerName;

   // Validar si la source ya existe
   const sourceExists = map.getSource(sourceId) !== undefined;

   if (sourceExists) {
      const layerName = data.layerName;
      const source = map.getSource(`${layerName}-source`) as mapboxgl.GeoJSONSource;

      // Obtener data actual
      const currentData = source._data as GeoJSON.FeatureCollection;

      // Combinar con nuevos points
      const updatedData: GeoJSON.FeatureCollection = {
         type: 'FeatureCollection',
         features: [...currentData.features, ...data.features]
      };

      source.setData(updatedData);
      return;
   }

   // Agregar source si no existe
   if (!sourceExists) {
      map.addSource(sourceId, {
         type: 'geojson',
         data: data
      });
   }

   // Cargar imagen del icono
   loadImage(map, data.icon, layerName);

   map.addLayer({
      id: layerId,
      type: 'symbol',
      source: sourceId,
      layout: {
         'icon-image': `${layerName}-image`,
         'icon-size': 1
      }
   });
   
   addCursorEvents(map, layerId);
}



/**
 * Función async para cargar lugares
 */
export const loadNearbySearchPlaces = async (map: mapboxgl.Map, propiedadId: number) => {

   // La coleccion entera llega en un solo llamado
   const capasInteres = await fetch(`/api/lugares/propiedad/${propiedadId}`).then(resp => resp.json()) as GeoJSON.FeatureCollection[];

   console.log('Capas de interes (GeoJSON):', capasInteres);
   
}

/**
 * Agregar interactividad visual del cursor al pasar sobre una capa de marcadores
 * 
 * Esta función vincula eventos de entrada y salida del mouse a una capa específica del mapa.
 * Cuando el usuario pasa el cursor sobre cualquier feature de la capa, el cursor cambia a 'pointer' (dedito)
 * (indicando que el elemento es clickeable). Cuando el cursor sale de la capa, el cursor vuelve
 * a su estado normal.
 * 
 * Eventos manipulados:
 * - mouseenter: Se dispara cuando el cursor entra en la capa (cambia a pointer)
 * - mouseleave: Se dispara cuando el cursor sale de la capa (restaura cursor normal)
 * 
 * @param {mapboxgl.Map} map - Instancia del mapa de Mapbox donde está registrada la capa
 * @param {string} layerName - Identificador único de la capa a la que agregar los eventos
 *                             Debe coincidir con el ID de una capa ya existente en el mapa
 * 
 * @returns {void} No retorna ningún valor. Realiza operaciones de suscripción a eventos.
 * 
 * 
 * @note Esta función debe llamarse después de agregar la capa al mapa, ya que requiere que
 *       el layerId ya exista en la instancia del mapa para registrar los listeners.
 * 
 */
export const addCursorEvents = (map: mapboxgl.Map, layerName: string ) => {

   // Cambiar cursor al pasar sobre el layer
   map.on('mouseenter', layerName, () => {
      map.getCanvas().style.cursor = 'pointer';
   });

   map.on('mouseleave', layerName, () => {
      map.getCanvas().style.cursor = '';
   });

}
   