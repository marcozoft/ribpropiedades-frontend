import { Imagen } from '.';

export interface EmprendimientoBasico {
    id:                number;
    nombre:            string;
    descripcion_corta: string;
    descripcion_larga: string;
    zona:              string;
    imagen:            string;
    logo:              string;
    masterplan:        string;
    destacado:         number;
    imagenes:          Imagen[];
    // planos:            any[];
}
