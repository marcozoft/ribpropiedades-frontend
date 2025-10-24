import { PropiedadFullPage } from "@/src/components";
import { API_KEY, API_URL } from "@/src/constants/constants";
import { PropiedadDetalleResponse } from "@/src/interfaces";
import { extractIdFromSlug } from "@/src/utils";


const getPropertyById = async (id: number): Promise<PropiedadDetalleResponse> => {

   return fetch(`${API_URL}/propiedades/${id}`, {
      headers: {
        'X-API-Key': API_KEY
      }
   }).then(resp => resp.json())

}

export default async function Page(props: PageProps<'/propiedad/[slug]'>) {

    const { slug } = await props.params;
    const propiedad = await getPropertyById( extractIdFromSlug(slug) );
    
    console.log(propiedad);
    

    return (
        <PropiedadFullPage propiedadResponse={propiedad} />
    );
    
}