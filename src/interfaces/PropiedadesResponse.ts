import { Paginacion, PropiedadBasico } from ".";

export interface PropiedadesResponse {
    propiedades: PropiedadBasico[];
    paginacion:  Paginacion;
}
