import { CarouselLanzamientosClient } from './CarouselLanzamientosClient';

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400",
];

export const CarouselLanzamientos = () => {
  // Podrías obtener las imágenes desde una API o base de datos acá (SSR)
  return( 
    <div className='flex border-2 bg-white p-3 rounded-md max-w-6xl mx-auto px-4'>
      <CarouselLanzamientosClient images={images} />
      <div className='bg-background'>
        <p className='text-black gray'>Exclusiva ubicación frente a la Universidad Austral e IAE y a pocos metros del Hospital Austral, Shopping Las Palmas, Jumbo, Easy,  Hoteles Sheraton e Ibis, Parque Empresarial Austral, Village Cinemas,  Bancos de Galicia, ICBC y Rio, en el centro del área comercial más  importante de Pilar, encontramos la mejor inversión, tanto en renta como en capitalización, respaldada por el gran crecimiento demográfico de la zona Austral, estudiantes, empleados, profesores y pacientes. Cocheras en subsuelo. Distrito Campus 1 consta de 53 unidades de 1 y 2 ambientes, ya finalizadas y entregadas, quedando pocas unidades a la venta.
        </p>
      </div>
    </div>
  ) 
}
