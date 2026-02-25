export interface TrackingResponse {
  success:      boolean;
  evento_id:    string;
  debe_sugerir: boolean;
  sugerencias?: Sugerencias;
}

interface Sugerencias { 
  propiedades: [];
  perfil_usuario: string;
  total: number
}