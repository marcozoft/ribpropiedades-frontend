import Image from 'next/image';

type Props = {
  titulo: string;
  descripcion: string;
  imageUrl: string; 
}

export const ServicioCard = ({titulo}:Props) => {
  return (
    <div className="">
      {/* <h2 className="">{titulo}</h2> */}
      <Image src={'/screenshot-servicio.png'} alt='' width={370} height={200}/>
    </div>
  )
}
