import { FeatureCollection, Point } from "geojson";
import { NearbySearchResponse, PropiedadBasico } from "../interfaces";

export const nearbySearchToGeoJSON = ({ places }: NearbySearchResponse ): FeatureCollection<Point> => {
   
   return {
      type: "FeatureCollection",
      features: places.map(place => ({
         type: "Feature",
         geometry: {
            type: "Point",
            coordinates: [
               place.location.longitude,
               place.location.latitude
            ]
         },
         properties: {
            name: place.name,
            types: place.types,
            formattedAddress: place.formattedAddress,
            displayName: place.displayName.text,
            primaryType: place.primaryTypeDisplayName.text,
            websiteUri: place.websiteUri,
         }
      }))
   };
}

export const propiedadesToGeoJSON = ( propiedades: PropiedadBasico[]): FeatureCollection<Point> => {
   return {
      type: "FeatureCollection",
      features: propiedades.map((prop, index) => ({
         type: "Feature",
         geometry: {
            type: "Point",
            coordinates: [
               +prop.mapa_longitud,
               +prop.mapa_latitud
            ]
         },
         properties: {
            index,
            propiedadId: prop.id
         }
      }))
   };
}

export const latLngToGeoJSON = ( lat: number, lng: number): FeatureCollection<Point> => {
   return {
      type: "FeatureCollection",
      features: [
         {
            type: "Feature",
            geometry: {
               type: "Point",
               coordinates: [
                  lng,
                  lat
               ]
            },
            properties: { }
         }
      ]
   };
}