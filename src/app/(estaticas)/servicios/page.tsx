import { 
  SeccionHeroServicios, 
  SeccionDecision, 
  SeccionProcesoIngreso, 
  SeccionLineaTiempo 
} from '@/src/components/servicios-secciones';

export default function ServiciosPage() {
  return (
    <main>
      <SeccionHeroServicios />
      <SeccionDecision />
      <SeccionProcesoIngreso />
      <SeccionLineaTiempo />
    </main>
  );
}
