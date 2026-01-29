export type SearchParams = {
   operacion?:            string;
   emprendimiento?:       string;
   tipo_inmueble?:        string;
   ambientes?:            string;
   dormitorios?:          string;
   zona?:                 string;
   queryAI?:              string;
   vista?:                'mapa' | 'grilla';
   orden?:                string;
   con_piscina?:          string;
   con_dos_plantas?:      string;
   con_dos_cocheras?:     string;
   con_dormitorio_suite?: string;
}