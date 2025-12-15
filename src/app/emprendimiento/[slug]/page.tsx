import { EmprendimientoFullPage } from "@/src/components";
import { getEmprendimientoById } from "@/src/requests";
import { extractIdFromSlug } from "@/src/utils";


export default async function Page(props: PageProps<'/propiedad/[slug]'>) {

    const { slug } = await props.params;
    const emprendimientoResponse = await getEmprendimientoById( extractIdFromSlug(slug) );    

    return (
      <EmprendimientoFullPage emprendimientoResponse={ emprendimientoResponse } />
    );
    
}