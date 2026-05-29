import { PropiedadBasico, EmprendimientoDetalle, Imagen } from '@/src/interfaces';

export interface EmprendimientoIdResponse {
   emprendimiento: EmprendimientoDetalle;
   imagenes:       Imagen[];
   planos:         any[];
   propiedades:    PropiedadBasico[];
}
