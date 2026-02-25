'use server';

import { API_URL, BACKEND_API_KEY } from "../constants/constants"
import { TrackingRequest, TrackingResponse } from "../interfaces"

/**
 * 
 */
export const trackEmprendimiento = async (emprendimientoId: number, sessionId: string): Promise<TrackingResponse> => {

  const body: TrackingRequest = {
    session_id: sessionId,
    tipo_evento: 'emprendimiento_visitado',
    datos: {
      emprendimiento_id: emprendimientoId,
    }
  };

  return fetch(`${API_URL}/tracking`, {
    method: "POST",
      headers: {
        "X-API-Key": BACKEND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());

}