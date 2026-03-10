import { EmprendimientoBasico } from '@/src/interfaces/emprendimientos/EmprendimientoBasico';
import { ItemFilter, PropiedadBasico } from '../interfaces';

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

export const getCategoriasEmprendimientos = ( emprendimientos: EmprendimientoBasico[]): ItemFilter[] => {

   const categorias: ItemFilter[] = [];
   emprendimientos.forEach( emprendimiento => {
      if(!categorias.map(cat => cat.valor).includes(emprendimiento.categoria_emprendimientos)) {
         categorias.push({
            valor: emprendimiento.categoria_emprendimientos,
            label: emprendimiento.categoria_emprendimientos_nombre
         });
      }
   });
   
   return categorias;

};
