import { 
  SeccionMapa,
  SeccionFormularioContacto, 
  SeccionInfoContacto 
} from '@/src/components/contacto-secciones';

export default function ContactoPage() {
  return (
    <main>
      <SeccionMapa />
      <SeccionInfoContacto />
      <SeccionFormularioContacto />
    </main>
  );
}
