import { Paginacion } from "./paginacion";
import { PropiedadBasico } from "./propiedad-basico";

export interface PropiedadesResponse {
    propiedades: PropiedadBasico[];
    paginacion:  Paginacion;
}
