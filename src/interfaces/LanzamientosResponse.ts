export interface LanzamientosResponse {
   sliders: LanzamientoSlider[];
   total: number;
}

export interface LanzamientoSlider {
   id: number;
   foto: string;
   titulo: string;
   subtitulo: string;
   texto: string;
   url: string;
   orden: number;
   publicado: number;
   texto_boton: string;
}
