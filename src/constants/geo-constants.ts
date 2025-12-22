import { Icon, LatLng } from "leaflet";
import marker from '../assets/marker-icon.png';
import markerShadow from '../assets/marker-shadow.png';

// Leaflet map
export const MAP_INDEX_CENTER:LatLng = new LatLng(-40.15451161680131, -71.34787014700214);
export const LAT_INDEX =  -40.30887509643052;
export const LNG_INDEX =  -70.13671875000001;

export const MAP_ZOOM_START = 16;

// IGN
// export const BASE_URL = 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png';
// export const BASE_ATTRIBUTION = '<a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>';

// OSM
export const BASE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
export const BASE_ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export const MARKER: Icon = new Icon({
   iconUrl: marker.src,
   popupAnchor: [1, -34],
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   shadowUrl: markerShadow.src,
   shadowSize: [41, 41],
   shadowAnchor: [12, 41],
   className: 'orangeIcon'
});

export const REFERENCE_MARKER: Icon = new Icon({
   iconUrl: marker.src,
   popupAnchor: [1, -34],
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   shadowUrl: markerShadow.src,
   shadowSize: [41, 41],
   shadowAnchor: [12, 41],
   className: 'greenIcon'
});