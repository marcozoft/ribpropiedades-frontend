'use client'

import Form from "next/form"
import { ItemFilter } from "@/src/interfaces";
import Lottie from "lottie-react";
import ribIaAnimation from "@/public/lotties/rib_ia_lottie.json";
import { UbicacionAutocomplete } from "./UbicacionAutocomplete";
import { CssVarsProvider, Option, Select } from "@mui/joy";
import { ribTheme } from "@/src/styles/joy-custom-theme";

type Props = {
   localidades: ItemFilter[];
   operaciones: ItemFilter[];
   emprendimientos: ItemFilter[];
   tipos_inmueble: ItemFilter[];
}

export const Buscador = ({localidades, emprendimientos, operaciones, tipos_inmueble}: Props) => {
   return (
      <Form action={'/propiedades'}>
         <div className="bg-white flex flex-wrap my-5 justify-between gap-10 rounded">
            <div className="border border-background hover:border-foreground rounded my-5 ml-10 flex grow items-center">
               {/* <select id="localidad" name="localidad" autoComplete="localidad" className="w-full uppercase mx-3 text-gray-800"> 
                  {
                     localidades.map( localidad => (<option key={localidad.valor} value={localidad.valor}>{localidad.label}</option> ))
                  }
               </select> */}
               <UbicacionAutocomplete localidades = {localidades} emprendimientos={emprendimientos}/>
            </div>

            <div className="border-1 my-5 border-background hover:border-foreground rounded flex flex-grow items-center">
               {/* <select id="operacion" name="operacion" autoComplete="operacion" className="w-full uppercase mx-3 text-gray-800"> */}
                  {/* {
                     operaciones.map( operacion => (<option key={operacion.valor} value={operacion.valor}>{operacion.label}</option> ))
                  } */}
                   <CssVarsProvider theme={ribTheme}>
                     <Select>
                        {
                           operaciones.map( operacion => (
                              <Option
                                 key={operacion.valor} 
                                 value={operacion.valor}
                              >{operacion.label}</Option> 
                           ))
                        }
                     </Select>
                   </CssVarsProvider>
               {/* </select> */}
            </div>

            <div className="border-1 my-5 border-background hover:border-foreground rounded flex flex-grow items-center">
               <select id="tipo_inmueble" name="tipo_inmueble" autoComplete="tipo_inmueble" className="w-full uppercase mx-3 text-gray-800">
                 {
                     tipos_inmueble.map( tipo => (<option key={tipo.valor} value={tipo.valor}>{tipo.label}</option> ))
                  }
               </select>
            </div>

            <div className="flex">
               <div className="border-1 rounded my-5 cursor-pointer border-background hover:border-foreground flex-none bg-foreground">
                  <button className="cursor-pointer mt-2 mx-3" type="submit">
                     <i className="flaticon-loupe text-white text-2xl" />
                  </button>
               </div>

               
               {/*
               <div className="border-1 rounded my-5 border-background hover:border-foreground mr-10 flex-none cursor-pointer">
                  <button className="cursor-pointer aspect-square">
                     <Image src={'/images/buscador-ia.svg'} alt="Buscador IA" height={50} width={50}/>
                  </button>
               </div> 
               */}

               <Lottie 
                  animationData={ribIaAnimation}
                  loop={true}
                  style={{ width: '95px', height: '95px' }}
               />                  
               

            </div>

         </div>
      </Form>
   )
}
