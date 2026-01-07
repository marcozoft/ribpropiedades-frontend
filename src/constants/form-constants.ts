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

export const con_dos_plantasItem: ItemFilter = {
   valor: 'con_dos_plantas',
   label: '2 plantas o más'
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
   con_dos_plantasItem,
   con_dos_cocherasItem,
   con_dormitorio_suiteItem
];

export const searchExamples = [
   "casa de 5 dormitorios",
   "departamento con 2 baños",
   "casa en alquiler cercana al golf",
   "departamento en venta en Belgrano",
   "casa con pileta y jardín",
   "oficina en microcentro"
];

// TODO: Debe venir en el endpoint getFilterItems();
export const ambientes: ItemFilter[] = [
   {
      valor: '1',
      label: '1 ambiente'
   },
   {
      valor: '2',
      label: '2 ambientes'
   },
   {
      valor: '3',
      label: '3 ambientes'
   },
   {
      valor: '4',
      label: '4 ambientes'
   },
   {
      valor: '5',
      label: '5 ambientes'
   },
   {
      valor: '6',
      label: '6 ambientes'
   },
   {
      valor: '7',
      label: '7 ambientes'
   },
   {
      valor: '8',
      label: '8 ambientes'
   },
]