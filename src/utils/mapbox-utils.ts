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

