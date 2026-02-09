import { CAPAS_INTERES } from "../constants/geo-constants";
import { LugaresRequest } from "../interfaces";

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
 * 
 * @param map 
 * @param layerName 
 * @param data 
 */
export const createLayer = (map: mapboxgl.Map, layerName: string, data?: GeoJSON.FeatureCollection): void => {

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
 * Add features to existent layer
 * 
 * @param map 
 * @param layerName 
 * @param data 
 * @returns 
 */
export const addFeaturesToLayer = (map: mapboxgl.Map, layerName: string, data: GeoJSON.FeatureCollection): void => {

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
export const loadNearbySearchPlaces = async (map: mapboxgl.Map, coordinates: [number, number]) => {

   CAPAS_INTERES.forEach(async ({ name, includedPrimaryTypes, excludePrimaryTypes, radius, rankPreference }) => {
      const request: LugaresRequest = {
         results: 20,
         includedPrimaryTypes: includedPrimaryTypes,
         lat: coordinates[1],
         lng: coordinates[0],
         radius: radius,
         excludedPrimaryTypes: excludePrimaryTypes,
         rankPreference: rankPreference
      };
      const places = await fetch('/api/lugares', {
         method: 'POST',
         body: JSON.stringify(request),
      }).then(resp => resp.json()) as GeoJSON.FeatureCollection;

      addFeaturesToLayer(map, name, places);
   });
};