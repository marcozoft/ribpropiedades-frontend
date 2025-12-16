import { EmprendimientoFullPage } from "@/src/components";
import { getEmprendimientoById } from "@/src/requests";
import { extractIdFromSlug } from "@/src/utils";
import { notFound } from "next/navigation";


export default async function Page(props: PageProps<'/emprendimiento/[slug]'>) {

    const { slug } = await props.params;
    const emprendimientoResponse = await getEmprendimientoById( extractIdFromSlug(slug) ).then(resp => {
      return resp.status == 200
          ? resp.json()
          : notFound()
    })

    return (
      <EmprendimientoFullPage emprendimientoResponse={ emprendimientoResponse } />
    );
    
}