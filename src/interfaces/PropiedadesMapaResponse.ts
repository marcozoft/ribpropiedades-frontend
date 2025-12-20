export interface PropiedadesMapaResponse {
   propiedades: PropiedadMapa[];
   total:       number;
}

export interface PropiedadMapa {
   id:               number;
   codigo:           string;
   inmueble:         string;
   tipo_inmueble:    string;
   operacion:        string;
   moneda:           string;
   precio:           number;
   precio_publico:   number;
   mapa_latitud:     string;
   mapa_longitud:    string;
   titulo_venta:     string;
   zona:             string;
   localidad:        string;
   sup_total:        number;
   sup_cubierta:     number;
   imagen_principal: string;
}
