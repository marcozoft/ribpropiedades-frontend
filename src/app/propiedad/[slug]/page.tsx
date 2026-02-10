import { PropiedadFullPage } from "@/src/components";
import { getPropiedadById } from "@/src/requests";
import { extractIdFromSlug } from "@/src/utils";
import { notFound } from "next/navigation";


export default async function Page(props: PageProps<'/propiedad/[slug]'>) {

   const { slug } = await props.params;
   const propiedadResponse = await getPropiedadById(extractIdFromSlug(slug))
      .then(resp => {
         return resp.status == 200
            ? resp.json()
            : notFound()
      })
   
   return (
      <PropiedadFullPage propiedadResponse={propiedadResponse} />
   );

}