import { Propiedad } from "./propiedad";

export interface PropiedadDetalleResponse {
    propiedad:      Propiedad;
    imagenes:       Imagen[];
    // planos:         any[];
    emprendimiento: Emprendimiento;
}

export interface Emprendimiento {
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

export interface Imagen {
    imagen: string;
    orden:  number;
    texto:  string;
}

