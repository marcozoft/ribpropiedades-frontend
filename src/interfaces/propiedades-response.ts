import { Paginacion, PropiedadBasico } from "@/src/interfaces";

export interface PropiedadesResponse {
    propiedades: PropiedadBasico[];
    paginacion:  Paginacion;
}
