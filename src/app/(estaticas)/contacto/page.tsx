import { 
  SeccionMapa,
  SeccionFormularioContacto 
} from '@/src/components/contacto-secciones';

export default function ContactoPage() {
  return (
    <main>
      <SeccionFormularioContacto />
      <SeccionMapa />
    </main>
  );
}
