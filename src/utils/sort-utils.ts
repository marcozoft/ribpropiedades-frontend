import { EmprendimientoBasico } from '@/src/interfaces/emprendimientos/EmprendimientoBasico';

export const sortEmprendimientosByNombre = (emprendimientos: EmprendimientoBasico[]): EmprendimientoBasico[] => {
   return [...emprendimientos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
   );
};

export default sortEmprendimientosByNombre;
