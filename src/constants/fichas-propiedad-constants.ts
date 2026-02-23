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

const tipoZona: Detalle = {
  descripcion: "Tipo de zona",
  clave: "tipo_zona",
};

const calefaccion: Detalle = {
  descripcion: "Tipo de calefacción",
  clave: "calefaccion",
};

const aberturaas: Detalle = {
  descripcion: "Aberturas",
  clave: "aberturas",
};

const zonificacion: Detalle = {
  descripcion: "Zonificación",
  clave: "zonificacion",
};

const banos: Detalle = {
  descripcion: "Cantidad de baños",
  clave: "banos",
};

export const detallesPorTipoDeInmueble = new Map<string, Detalle[]>();

// Departamento
detallesPorTipoDeInmueble.set("departamento", [
  ambientes,
  dormitorios,
  dorm_suit,
  estado,
  aberturaas,
  antiguedad,
  calefaccion,
  banos,
]);

// Fraccion
detallesPorTipoDeInmueble.set("fraccion", [zonificacion]);

// Oficina
detallesPorTipoDeInmueble.set("oficina", [
  estado,
  aberturaas,
  antiguedad,
  calefaccion,
  banos,
]);

// Quinta
detallesPorTipoDeInmueble.set("oficina", [
  estado,
  antiguedad,
  dormitorios,
  banos,
]);

// Casa
detallesPorTipoDeInmueble.set("casa", [
  estilo,
  plantas,
  dormitorios,
  dorm_suit,
  banos,
  estado,
  antiguedad,
  lote,
  tipoZona,
  calefaccion,
  aberturaas,
  dormitorios,
  zonificacion,
]);

