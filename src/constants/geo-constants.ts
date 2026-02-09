import { CapaDeInteres } from "../interfaces";

export const LAT_INDEX =  -40.30887509643052;
export const LNG_INDEX =  -70.13671875000001;

export const MAPBOX_ACCESS_TOKEN= process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||'';
export const ZOOM_FLY = 14;

// Capas de interes para mapas
export const CAPAS_INTERES: CapaDeInteres[] = [
   {
      name: 'restaurants',
      includedPrimaryTypes: ['restaurant'],
      excludePrimaryTypes: [],
      icon: '/markers/restaurant.png',
      label: 'Gastronomía',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'shopping',
      includedPrimaryTypes: ['shopping_mall'],
      excludePrimaryTypes: [],
      icon: '/markers/shoping.png',
      label: 'Centros comerciales',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'salud',
      includedPrimaryTypes: ['drugstore', 'hospital', 'medical_lab', 'pharmacy', 'dental_clinic'],
      excludePrimaryTypes: [],
      icon: '/markers/salud.png',
      label: 'Centros de salud y farmacias',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'mascotas',
      includedPrimaryTypes: ['pet_store', 'veterinary_care'],
      excludePrimaryTypes: [],
      icon: '/markers/mascotas.png',
      label: 'Mascotas',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
   {
      name: 'deportes',
      includedPrimaryTypes: ['sports_club', 'fitness_center', 'golf_course'],
      excludePrimaryTypes: [],
      icon: '/markers/deportes.png',
      label: 'Deportes',
      radius: 3000,
      rankPreference: "POPULARITY"
   },
]


export const POLYGON_PILARA: GeoJSON.FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
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
      }
    }
  ]
}