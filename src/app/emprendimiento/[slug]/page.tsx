import { PropiedadFullPage } from "@/src/components";
import { getEmprendimientoById } from "@/src/requests";
import { extractIdFromSlug } from "@/src/utils";


export default async function Page(props: PageProps<'/propiedad/[slug]'>) {

    const { slug } = await props.params;
    const emprendimiento = await getEmprendimientoById( extractIdFromSlug(slug) );    

    return (
      <pre>{JSON.stringify(emprendimiento)}</pre>
    );
    
}