import { EmprendimientoBasico, Imagen, PropiedadDetalle } from '@/src/interfaces';

export interface PropiedadDetalleResponse {
    propiedad:          PropiedadDetalle;
    imagenes:           Imagen[];
    planos:             Imagen[];
    emprendimiento?:    EmprendimientoBasico;
}

