'use client';

import { Button } from "@/src/components"
import { Grid, Map } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
   vista?: 'mapa' | 'grilla'
}

export const ControlMapaGrilla = ({vista}: Props) => {

   const router = useRouter();
   const searchParams = useSearchParams();

   const handleClick = () => {
      // Crear una nueva instancia de URLSearchParams con los parámetros actuales
      const params = new URLSearchParams(searchParams.toString());
      
      // Cambiar el parámetro de vista
      if (vista === 'mapa') {
         params.set('vista', 'grilla');
      } else {
         params.set('vista', 'mapa');
      }
      
      // Hacer push manteniendo todos los filtros
      router.push(`?${params.toString()}`);
   };

   return (
      <Button 
         variant='search' 
         className="fixed bottom-6 bg-foreground left-1/2 -translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-50"
         onClick={handleClick}
      >
      {
         vista == 'mapa'
            ? (<> <Grid />Ver grilla </>)
            : (<> <Map />Ver mapa </>)
      }
      </Button >
  )
}
