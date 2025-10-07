import { PropiedadesResponse } from "@/interfaces";
import { notFound } from "next/navigation";

const getAllPropiedades = async(): Promise<PropiedadesResponse> => {

    const url = `https://admin.ribpropiedades.com.ar/api/propiedades`
    const apiKey = 'rib_api_2025_secure_key_d4f8a2e1b9c7x3m5';

    return fetch(url, {
        headers: {
            'X-API-Key': apiKey
        }
    }).then( resp => resp.json() )

} 


export default async function Propiedades() {
    
    // Todas las propiedades
    const propiedadesResponse = await getAllPropiedades();
    console.log('Propiedades: ', propiedadesResponse);
    
    
    return (
        <div>
            {
                propiedadesResponse.propiedades.map( (prop) => 
                    ( <div key={prop.id}><p>{prop.id}</p></div>))
            }
        </div>
    );
}