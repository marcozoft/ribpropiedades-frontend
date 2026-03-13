import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Endpoint para revalidar el cache de una propiedad
 * 
 * POST /api/revalidate/propiedad
 * 
 * @param {NextRequest} request - Debe contener { propiedadId: number } en el body
 * 
 * @returns {NextResponse} { revalidated: true } si fue exitoso
 */
export async function POST(request: NextRequest) {
   try {
      const { propiedadId } = await request.json();

      if (!propiedadId) {
         return NextResponse.json(
            { error: 'propiedadId es requerido' },
            { status: 400 }
         );
      }

      revalidateTag(`propiedad-${propiedadId}`);

      return NextResponse.json({ 
         revalidated: true,
         propiedadId 
      });
   } catch (error) {
      return NextResponse.json(
         { error: 'Error al revalidar' },
         { status: 500 }
      );
   }
}
