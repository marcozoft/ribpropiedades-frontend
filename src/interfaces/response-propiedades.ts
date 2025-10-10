import { Propiedad, PropiedadBasico } from "./";

export interface PropiedadesResponse {
    propiedades: PropiedadBasico[];
    paginacion:  Paginacion;
}

export interface Paginacion {
    pagina_actual:   number;
    por_pagina:      number;
    total:           number;
    total_paginas:   number;
    tiene_anterior:  boolean;
    tiene_siguiente: boolean;
}
