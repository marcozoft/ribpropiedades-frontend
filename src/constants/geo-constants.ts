// import { Icon, LatLng } from "leaflet";
// import marker from '../assets/marker-icon.png';
// import markerShadow from '../assets/marker-shadow.png';

// Leaflet map
// export const MAP_INDEX_CENTER:LatLng = new LatLng(-40.15451161680131, -71.34787014700214);
export const LAT_INDEX =  -40.30887509643052;
export const LNG_INDEX =  -70.13671875000001;

export const MAP_ZOOM_START = 16;

// IGN
// export const BASE_URL = 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png';
// export const BASE_ATTRIBUTION = '<a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>';


// Mapbox token
// public example
// export const MAPBOX_ACCESS_TOKEN='pk.eyJ1IjoibXNhdWN6dWsiLCJhIjoiY205Zzc1N2Y5MDBxYjJrcHhvM2UzZGFwdCJ9.nr3FuvM9kfIcMVGN_4r9Pg';

// rib_develop
export const MAPBOX_ACCESS_TOKEN='pk.eyJ1IjoibXNhdWN6dWsiLCJhIjoiY21rYjlvang0MDFtcjNocHZ2OHBmb2RxeCJ9.2d_sc2IETainqYmKgx_sBQ';


export const POLYGON_PILARA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "BIT Cotesma",
        "description": "Lugar para aprender programacion"
      },
      "geometry": {
        "coordinates": [
          -71.34787014700214,
          -40.15451161680131
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -58.366945640099644,
          -34.67424069949021
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -58.919721047773606,
          -34.438869519399276
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -58.963311230099265,
              -34.46452708246973
            ],
            [
              -58.966491443953714,
              -34.474549221710646
            ],
            [
              -58.961572850924526,
              -34.47578332957658
            ],
            [
              -58.962428271775764,
              -34.478251342433715
            ],
            [
              -58.96045015496921,
              -34.47917682420461
            ],
            [
              -58.9586324342782,
              -34.48164474069855
            ],
            [
              -58.95414153509286,
              -34.479000556802845
            ],
            [
              -58.951521985531244,
              -34.479837788010634
            ],
            [
              -58.95088042589897,
              -34.478559746675316
            ],
            [
              -58.94280749686028,
              -34.47177254905367
            ],
            [
              -58.950233957855005,
              -34.4620508861579
            ],
            [
              -58.94966761929352,
              -34.459617067357115
            ],
            [
              -58.96135478779473,
              -34.45752279439027
            ],
            [
              -58.963311230099265,
              -34.46452708246973
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}