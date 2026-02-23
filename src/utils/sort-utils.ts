import { EmprendimientoBasico } from '@/src/interfaces/emprendimientos/EmprendimientoBasico';
import { PropiedadBasico } from '../interfaces';

export const sortEmprendimientosByNombre = (emprendimientos: EmprendimientoBasico[]): EmprendimientoBasico[] => {
   return [...emprendimientos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
   );
};


export const sortPropiedadesByOrden = (propiedades: PropiedadBasico[]): PropiedadBasico[] => {
   return [...propiedades].sort((a, b) => {
      return a.orden - b.orden;
   });
};
