import { LinkButton } from "@/src/components";
import Image from "next/image";

export default function NotFound() {

  return (
      <div className="relative w-full h-140">
        <Image className='absolute inset-0 object-cover w-full h-full' 
          src={'/images/home-tu-proyecto-realidad.webp'}
          width={1920} 
          height={560} 
          alt="Hacemos tu proyecto realidad"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-2xl font-bold mb-6">No encontramos esta propiedad, pero podemos ayudarte a encontrar la casa de tus sueños</h1>
          <LinkButton className={'bg-white text-foreground rounded-full font-semibold text-xl'} href={'/propiedades'} text="SEGUIR BUSCANDO" />
        </div>
      </div>
  );
}