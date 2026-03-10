import { ItemFilter } from "../interfaces";


export const ordenes: ItemFilter[] = [
   {
      valor: 'precio_asc',
      label: 'Menor precio'
   }, {
      valor: 'precio_desc',
      label: 'Mayor precio'
   }, {
      valor: 'exclusiva',
      label: 'Exclusivas RIB'
   }, {
      valor: 'ingresadas',
      label: 'Últimas ingresadas'
   }
];

export const con_piscinaItem: ItemFilter = {
   valor: 'con_piscina',
   label: 'Con piscina'
};

export const con_unaPlantaItem: ItemFilter = {
   valor: 'con_una_planta',
   label: '1 planta'
}

export const con_dos_cocherasItem: ItemFilter = {
   valor: 'con_dos_cocheras',
   label: '2 cocheras o más'
}

export const con_dormitorio_suiteItem: ItemFilter = {
   valor: 'con_dormitorio_suite',
   label: 'Con dormitorio en suite'
}

export const booleanFilters: ItemFilter[] = [
   con_piscinaItem,
   con_unaPlantaItem,
   con_dos_cocherasItem,
   con_dormitorio_suiteItem
];

export const searchAIExamples = [
   "casa de 5 dormitorios",
   "departamento con 2 baños",
   "casa en alquiler cercana al golf",
   "departamento en venta en Belgrano",
   "casa con pileta y jardín",
   "oficina en microcentro"
];
