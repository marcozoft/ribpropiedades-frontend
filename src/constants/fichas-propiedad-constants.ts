import { Detalle } from "../interfaces";

const ambientes: Detalle = { 
  descripcion: "Ambientes", 
  clave: "ambientes" 
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

const lote_asfalto: Detalle = {
  descripcion: "Asfalto",
  clave: "lote_asfalto",
}

const lote_ubicacion: Detalle = {
  descripcion: "Ubicación de lote",
  clave: "lote_ubicacion",
}


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

const cocina_detalles: Detalle = {
  descripcion: "Detalles de cocina",
  clave: "cocina_detalles",
}

const cocina_muebles: Detalle = {
  descripcion: "Muebles de cocina",
  clave: "cocina_muebles",
}

const gas: Detalle = {
  descripcion: "Gas natural",
  clave: "gas"
}

const obra_sanitaria: Detalle = {
  descripcion: "Obra sanitaria",
  clave: "obra_sanitaria",
}

const telefono: Detalle = {
  descripcion: "Servicio de teléfono",
  clave: "telefono",
}

const internet: Detalle = {
  descripcion: "Servicio de internet",
  clave: "internet",
}

const cable: Detalle = {
  descripcion: "Servicio de cable",
  clave: "cable",
}

const electricidad: Detalle = {
  descripcion: "Servicio de electricidad",
  clave: "electricidad"
}

const asfalto: Detalle = {
  descripcion: "Asfalto",
  clave: "asfalto",
}

const agua_corriente: Detalle = {
  descripcion: "Agua corriente",
  clave: "agua_corriente",
}

const agua_caliente: Detalle = {
  descripcion: "Agua caliente",
  clave: "agua_caliente",
}

const seguridad: Detalle = {
  descripcion: "Seguridad",
  clave: "seguridad",
}

const demolicion: Detalle = {
  descripcion: "Demolición",
  clave: "demolicion",
}

const comedor_empleados: Detalle = {
  descripcion: "Comedor para empleados",
  clave: "comedor_empleados",
}

const tipo_pisos: Detalle = {
  descripcion: "Tipo de piso",
  clave: "tipo_pisos",
}

const vestuarios: Detalle = {
  descripcion: "Vestuarios",
  clave: "vestuarios",
}

const oficinas: Detalle = {
  descripcion: "Oficinas",
  clave: "oficinas",
}

const banos_por_genero: Detalle = {
  descripcion: "Baños por género",
  clave: "banos_por_genero",
}

const vivienda_anexa: Detalle = {
  descripcion: "Vivienda anexa",
  clave: "vivienda_anexa",
}

const of_cocina: Detalle = {
  descripcion: "Cocina",
  clave: "of_cocina",
}

const of_ducha: Detalle = {
  descripcion: "Ducha",
  clave: "of_ducha",
}

const bano_toilette_check: Detalle = {
  descripcion: "Toilette",
  clave: "bano_toilette_check"
}

const bano_servicio_check: Detalle = {
  descripcion: "Baño de servicio",
  clave: "bano_servicio_check"
}

const bano_servicio: Detalle = {
  descripcion: "Baño de servicio",
  clave: "banos_servicio",
}

const bano_externo_check: Detalle = {
  descripcion: "Baño externo",
  clave: "bano_externo_check",
}

const banos_texto: Detalle = {
  descripcion: "Baño",
  clave: "banos_texto",
}


export const detallesPorTipoDeInmueble = new Map<string, Detalle[]>();

// Departamento
detallesPorTipoDeInmueble.set("departamento", [
  dormitorios,
  dorm_suit,
  estado,
  altura_techo,
  aberturas,
  antiguedad,
  calefaccion,
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
]);

// Quinta
detallesPorTipoDeInmueble.set("oficina", [
  estado,
  aberturas,
  antiguedad,
  calefaccion,
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
  piscina,
  zonificacion,
]);


export const allFields: Detalle[] = [
  lote_ubicacion,
  lote_asfalto,
  ambientes,
  tipo_zona,
  obra_sanitaria,
  gas,
  telefono,
  internet,
  cable,
  electricidad,
  asfalto,
  agua_corriente,
  agua_caliente,
  seguridad,
  demolicion,
  altura_techo,
  comedor_empleados,
  tipo_pisos,
  vestuarios,
  oficinas,
  banos_por_genero,
  vivienda_anexa,
  cocina,
  cocina_detalles,
  cocina_muebles,
  of_cocina,
  of_ducha,
  banos,
  bano_toilette_check,
  bano_servicio_check,
  bano_servicio,
  bano_externo_check,
  banos_texto,
]
