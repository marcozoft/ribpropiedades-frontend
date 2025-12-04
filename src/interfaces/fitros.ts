export interface FiltrosResponse {
   filtros:           Filtros;
   total_propiedades: number;
}

export interface Filtros {
   operaciones:     OperacionItemFilter[];
   tipos_inmueble:  TipoInmuebleItemFilter[];
   localidades:     LocalidadItemFilter[];
   emprendimientos: EmprendimientoItemFilter[];
   dormitorios:     DormitorioItemFilter[];
}

export interface OperacionItemFilter {
   valor: number;
   label: string;
}

export interface TipoInmuebleItemFilter {
   valor: string;
   label: string;
}

export interface LocalidadItemFilter {
   valor: string;
   label: string;
}

export interface DormitorioItemFilter {
   valor: number;
   label: string;
}

export interface EmprendimientoItemFilter {
   valor: number;
   label: string;
}
