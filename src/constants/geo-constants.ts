import { CapaDeInteresEspecificacion } from "../interfaces";

export const LAT_INDEX =  -40.30887509643052;
export const LNG_INDEX =  -70.13671875000001;

export const MAPBOX_ACCESS_TOKEN= process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||'';
export const ZOOM_FLY = 14;

// Capas de interes para mapas
export const CAPAS_INTERES: CapaDeInteresEspecificacion[] = [
  {
    name: "educacion",
    includedPrimaryTypes: ["university", "school", "secondary_school"],
    excludedPrimaryTypes: [],
    icon: "/markers/university.png",
    label: "Colegios y universidades",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
  {
    name: "restaurants",
    includedPrimaryTypes: ["restaurant"],
    excludedPrimaryTypes: [],
    icon: "/markers/restaurant.png",
    label: "Gastronomía",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
  {
    name: "shopping",
    includedPrimaryTypes: ["shopping_mall"],
    excludedPrimaryTypes: [],
    icon: "/markers/shoping.png",
    label: "Centros comerciales",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
  {
    name: "salud",
    includedPrimaryTypes: [
      "drugstore",
      "hospital",
      "medical_lab",
      "pharmacy",
      "dental_clinic",
    ],
    excludedPrimaryTypes: [],
    icon: "/markers/salud.png",
    label: "Centros de salud y farmacias",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
  {
    name: "mascotas",
    includedPrimaryTypes: ["pet_store", "veterinary_care"],
    excludedPrimaryTypes: [],
    icon: "/markers/mascotas.png",
    label: "Mascotas",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
  {
    name: "deportes",
    includedPrimaryTypes: ["sports_club", "fitness_center", "golf_course"],
    excludedPrimaryTypes: [],
    icon: "/markers/deportes.png",
    label: "Deportes",
    radius: 10000,
    rankPreference: "POPULARITY",
  },
];
