/**
 * https://developers.google.com/maps/documentation/places/web-service/place-types
 */
export interface CapaDeInteresEspecificacion {
   name: string;
   includedPrimaryTypes: string[];
   excludedPrimaryTypes: string[];
   icon: string;
   label: string;
   radius: number;
   rankPreference: 'POPULARITY' | 'DISTANCE';
}