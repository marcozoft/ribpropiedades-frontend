import Image from "next/image";

export default function NotFound() {


  return (
    <div className="container w-full items-center">
      <p>No encontramos la propiedad</p>
      <Image src={'/images/not-found.jpg'} width={500} height={500} alt="Propiedad no encontrada"/>
    </div>    
  );
}