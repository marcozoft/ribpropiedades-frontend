import { EmprendimientoBasico } from '@/src/interfaces';

export interface EmprendimientosResponse {
    emprendimientos: EmprendimientoBasico[];
    total: number;
}
