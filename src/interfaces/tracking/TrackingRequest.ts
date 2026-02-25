export interface TrackingRequest {
  session_id:  string;
  tipo_evento: 'inicio' | 'propiedad_visitada' | 'emprendimiento_visitado' | 'busqueda';
  datos:       InfoTrackingPropiedad | InfoTrackingEmprendimiento;
}

interface InfoTrackingPropiedad {
  propiedad_id: number;
}

interface InfoTrackingEmprendimiento {
  emprendimiento_id: number;
}
