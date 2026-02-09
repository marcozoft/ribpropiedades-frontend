/**
 * https://developers.google.com/maps/documentation/places/web-service/place-types
 */
export interface CapaDeInteres {
   name: string;
   includedPrimaryTypes: string[];
   excludePrimaryTypes: string[];
   icon: string;
   label: string;
   radius: number;
   rankPreference: 'POPULARITY' | 'DISTANCE';
}