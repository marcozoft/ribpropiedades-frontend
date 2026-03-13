export { generateSrcImage, getYouTubeId, isYouTubeVideoUrl } from './media-src';
export { generateHrefPropiedad, generateHrefEmprendimiento, extractIdFromSlug } from './generate-slug';
export { filterSearchParams } from './form-utils';

// Shadcn components
export { cn } from './utils';

// GIS Utils
export { nearbySearchToGeoJSON, propiedadesToGeoJSON, latLngToFeatureCollectionExtended } from './gis-utils';

// Mapbox functions utils
export { 
  loadImage, 
  createEmptyLayer,
  createFeatureCollectionLayer, 
  addFeaturesToLayer, 
  loadNearbySearchPlaces,
} from './mapbox-utils';

// React client
export { renderReactComponent, getOrCreateSessionId } from './react-client-utils';

// WebGL
export { hasWebGL } from './hasWebGL';

// Sort utils
export { sortEmprendimientosByNombre, sortPropiedadesByOrden, getCategoriasEmprendimientos } from './sort-utils';

