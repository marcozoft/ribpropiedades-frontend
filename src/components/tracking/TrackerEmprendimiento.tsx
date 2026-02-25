"use client";

import { trackEmprendimiento } from "@/src/actions-tracking";
import { TrackingResponse } from "@/src/interfaces";
import { getOrCreateSessionId } from "@/src/utils";
import { useEffect, useState } from "react";


type Props = {
  emprendimientoId: number;
}


export const TrackerEmprendimiento = ({emprendimientoId}: Props) => {

  const [trackingResponse, setTrackingResponse] = useState<TrackingResponse>();
  
  useEffect(() => {

    const fetchTracking = async () => {
      const id = getOrCreateSessionId();
      const response = await trackEmprendimiento(emprendimientoId, id);
      console.log('Response', response);
      setTrackingResponse(response);
    };

    fetchTracking();
  }, [emprendimientoId]);
  
  return (
    null
  )
}
