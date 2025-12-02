export interface PropiedadBasico {
   imagen_principal:    string;
   banos:               number;
   cochera:             Cochera;
   cocheras:            number;
   dormitorio_suite:    number;
   dormitorios:         number;
   localidad:           string;
   plantas:             number;
   sup_cubierta:        number;
   sup_terreno:         number;
   zona:                string;
   ambientes:           number;
   codigo:              string;
   destacado:           number;
   exclusiva:           number;
   faja_promocional:    string;
   id:                  number;
   inmueble:            string;
   moneda:              string;
   operacion:           string;
   precio_publico:      number;
   precio:              number;
   sup_total:           number;
   tipo_inmueble:       string;
   titulo_venta:        string;
}

export type Cochera = 'si' | 'no';