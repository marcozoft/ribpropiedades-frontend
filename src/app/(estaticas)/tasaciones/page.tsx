import { 
  SeccionHeroTasaciones, 
  SeccionEntendemos, 
  SeccionFormularioTasacion 
} from '@/src/components/tasaciones-secciones';

export default function TasacionesPage() {
  return (
    <main>
      <SeccionHeroTasaciones />
      <SeccionEntendemos />
      <SeccionFormularioTasacion />
    </main>
  );
}
