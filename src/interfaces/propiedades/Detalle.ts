import { PropiedadDetalle } from "./PropiedadDetalle";

export interface Detalle {
  clave: keyof PropiedadDetalle;
  descripcion: string;
}
