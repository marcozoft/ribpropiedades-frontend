import { PropiedadBasico } from "./propiedades/PropiedadBasico";
import { SearchParams } from "./SearchParams";

export interface PropiedadesIAResponse {
   query_original:           string;
   parametros_interpretados: Partial<SearchParams>
   propiedades:              PropiedadBasico[];
   total:                    number;
}

// export interface ParametrosInterpretados {
//    operacion:                  string;
//    tipo_inmueble:              TipoInmueble;
//    zona:                       Zona;
//    emprendimiento_nombre:      null;
//    precio_min:                 null;
//    precio_max:                 number;
//    moneda:                     string;
//    dormitorios_min:            null;
//    dormitorios_max:            null;
//    ambientes_min:              null;
//    ambientes_max:              null;
//    amenities:                  string[];
//    amenities_emprendimiento:   any[];
//    caracteristicas_especiales: any[];
//    plantas_min:                null;
//    plantas_max:                null;
//    banos_min:                  null;
//    banos_max:                  null;
//    cocheras_min:               null;
//    cocheras_max:               null;
//    sup_total_min:              null;
//    sup_total_max:              null;
//    sup_cubierta_min:           null;
//    sup_cubierta_max:           null;
//    sup_terreno_min:            null;
//    sup_terreno_max:            null;
//    estilo:                     string;
//    estado:                     null;
//    lote:                       null;
//    tipo_zona:                  null;
//    calefaccion:                null;
//    dormitorio_suite_min:       null;
//    antiguedad:                 null;
// }