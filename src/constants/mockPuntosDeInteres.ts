import { FeatureCollectionExtended } from "../interfaces";

export const mockPuntosDeInteres: FeatureCollectionExtended[] = [
  {
    type: "FeatureCollection",
    layerName: "restaurantes",
    label: "Restaurantes",
    icon: "/markers/restaurant.png",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.3816, -34.6037],
        },
        properties: {
          displayName: "El Sanjuanino",
          formattedAddress: "Avenida 9 de Julio 1000, Buenos Aires",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.385, -34.601],
        },
        properties: {
          displayName: "Fierro Buenos Aires",
          formattedAddress: "San Martín 455, Buenos Aires",
        },
      },
    ],
  },
  {
    type: "FeatureCollection",
    layerName: "hospitales",
    label: "Hospitales",
    icon: "/markers/salud.png",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.39, -34.605],
        },
        properties: {
          displayName: "Hospital Austral",
          formattedAddress: "J.M. Gutiérrez 3200, Buenos Aires",
          primaryType: "hospital",
          types: ["health", "establishment"],
        },
      },
    ],
  },
  {
    type: "FeatureCollection",
    layerName: "museos",
    label: "Museos",
    icon: "/markers/shoping.png",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.376, -34.601],
        },
        properties: {
          displayName: "Museo Nacional de Bellas Artes",
          formattedAddress: "Avenida del Libertador 1473, Buenos Aires",
          primaryType: "museum",
          types: ["art", "establishment"],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.371, -34.600],
        },
        properties: {
          displayName: "Otro museo",
          formattedAddress: "Avenida del Libertador 1473, Buenos Aires",
          primaryType: "museum",
          types: ["art", "establishment"],
        },
      },
    ],
  },
];
