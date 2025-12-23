import Image from "next/image"
import { LinkButton } from '../ui/buttons/LinkButton';

export const SeccionContactanos = () => {
  return (
    <section>
      <div className="relative w-full h-[560px]">
        <Image className='absolute inset-0 object-cover w-full h-full' 
          src={'/images/home-tu-proyecto-realidad.png'} 
          width={1920} 
          height={560} 
          alt="Hacemos tu proyecto realidad"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-6xl font-bold mb-6">Hacemos tu proyecto realidad</h1>
          <LinkButton className={'bg-white text-foreground font-semibold text-xl'} href={'contacto'} text="CONTACTANOS" />
        </div>
      </div>
    </section>
  )
}
