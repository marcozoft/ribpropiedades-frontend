import { secondaryFont } from "@/src/app/config/fonts"
import Image from 'next/image';

export const Seleccion = () => {
  return (
    <section className="mx-4 my-4">
      <h1 className="font-bold text-5xl text-center">RIB Selección</h1>
      <h2 className={`text-center font-bold ${secondaryFont.className}`}>Descubrí nuestra exclusiva selección</h2>
      <Image src={'/screnshot-seleccion.png'} height={611} width={1797} alt=''/>
      <Image className='' src='/screenshot-scroll.png' height={15} width={76} alt="" />
   </section>
  )
}
