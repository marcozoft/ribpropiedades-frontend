import { EmprendimientoFullPage } from "@/src/components";
import { EmprendimientoIdResponse } from "@/src/interfaces";
import { getEmprendimientoById } from "@/src/requests";
import { extractIdFromSlug } from "@/src/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";



export async function generateMetadata(  
  props: PageProps<'/emprendimiento/[slug]'>
): Promise<Metadata> {

  const { slug } = await props.params;

  const emprendimientoResponse: EmprendimientoIdResponse = await getEmprendimientoById( extractIdFromSlug(slug) ).then(resp => {
    return resp.status == 200
      ? resp.json()
      : notFound()
  })

  const title = emprendimientoResponse.emprendimiento.meta_title.length > 0 
    ? emprendimientoResponse.emprendimiento.meta_title
    : emprendimientoResponse.emprendimiento.nombre

  const description = emprendimientoResponse.emprendimiento.meta_description.length > 0
    ? emprendimientoResponse.emprendimiento.meta_description
    : emprendimientoResponse.emprendimiento.descripcion_corta

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        emprendimientoResponse.emprendimiento.imagen
      ]
    }
  }
}

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