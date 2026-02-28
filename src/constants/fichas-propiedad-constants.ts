import { Detalle } from "../interfaces";

const ambientes: Detalle = { 
  descripcion: "Estilo", 
  clave: "estilo" 
};

const estilo: Detalle = { 
  descripcion: "Estilo", 
  clave: "estilo"
};

const dormitorios: Detalle = {
  descripcion: "Dormitorios",
  clave: "dormitorios",
};

const plantas: Detalle = {
  descripcion: "Nro. de plantas",
  clave: "plantas",
};

const dorm_suit: Detalle = {
  descripcion: "Dormitorios en suite",
  clave: "dormitorio_suite",
};

const altura_techo: Detalle = {
  descripcion: "Altura del techo",
  clave: "altura_techo"
}

const estado: Detalle = {
  descripcion: "Estado",
  clave: "estado",
};

const antiguedad: Detalle = {
  descripcion: "Antiguedad",
  clave: "antiguedad",
};

const lote: Detalle = {
  descripcion: "Lote",
  clave: "lote",
};

const tipo_zona: Detalle = {
  descripcion: "Tipo de zona",
  clave: "tipo_zona",
};

const calefaccion: Detalle = {
  descripcion: "Tipo de calefacción",
  clave: "calefaccion",
};

const aberturas: Detalle = {
  descripcion: "Aberturas",
  clave: "aberturas",
};

const zonificacion: Detalle = {
  descripcion: "Zonificación",
  clave: "zonificacion",
};

const orientacion: Detalle = {
  descripcion: "Orientación",
  clave: "orientacion",
};

const banos: Detalle = {
  descripcion: "Cantidad de baños",
  clave: "banos",
};

const banos_servicio: Detalle = {
  descripcion: "Baños de servicio",
  clave: "banos_servicio",
};

const piscina: Detalle = {
  descripcion: "Piscina",
  clave: "piscina",
};

const cocina: Detalle = {
  descripcion: "Cocina",
  clave: "cocina",
}

export const detallesPorTipoDeInmueble = new Map<string, Detalle[]>();

// Departamento
detallesPorTipoDeInmueble.set("departamento", [
  ambientes,
  dormitorios,
  dorm_suit,
  estado,
  altura_techo,
  aberturas,
  antiguedad,
  calefaccion,
  banos,
]);

// Fraccion
detallesPorTipoDeInmueble.set("fraccion", [zonificacion]);

// Lote
detallesPorTipoDeInmueble.set("lote", [zonificacion, orientacion]);


// Oficina
detallesPorTipoDeInmueble.set("oficina", [
  estado,
  aberturas,
  antiguedad,
  calefaccion,
  banos,
]);

// Quinta
detallesPorTipoDeInmueble.set("oficina", [
  estado,
  aberturas,
  antiguedad,
  calefaccion,
  banos,
  cocina,
]);

// Casa
detallesPorTipoDeInmueble.set("casa", [
  aberturas,
  altura_techo,
  antiguedad,
  banos,
  banos_servicio,
  calefaccion,
  dorm_suit,
  dormitorios,
  estado,
  estilo,
  lote,
  piscina,
  plantas,
  zonificacion,
]);

// Quinta
detallesPorTipoDeInmueble.set("quinta", [
  estado,
  antiguedad,
  dormitorios,
  banos,
  piscina,
  zonificacion,
]);

