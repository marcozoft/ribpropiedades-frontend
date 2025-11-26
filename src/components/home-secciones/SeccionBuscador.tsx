import { getFilterItems } from "@/src/requests";
import { Buscador } from '@/src/components';

export const SeccionBuscador = async () => {

  const { filtros } = await getFilterItems();
  
  return (
    <section className="max-w-6xl mx-auto">
      <Buscador {...filtros } />
    </section>
  )
}
