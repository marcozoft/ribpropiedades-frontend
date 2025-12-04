export interface FiltrosResponse {
   filtros:           Filtros;
   total_propiedades: number;
}

export interface Filtros {
   operaciones:     ItemFilter[];
   tipos_inmueble:  ItemFilter[];
   localidades:     ItemFilter[];
   emprendimientos: ItemFilter[];
   dormitorios:     ItemFilter[];
}

export interface ItemFilter {
   valor: number;
   label: string;
}
