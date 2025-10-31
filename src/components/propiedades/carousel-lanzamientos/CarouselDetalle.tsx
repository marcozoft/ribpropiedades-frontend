import { secondaryFont } from "@/src/app/config/fonts";
import { RoundedButton } from "../../ui";

type Props = {
   subtitulo?: string;
   titulo: string;
   descripcion: string;
   href: string;
}

export const CarouselDetalle = ({titulo, subtitulo, descripcion, href}: Props) => {
  return (
    <div className='bg-background text-black text-sm p-5'>
      <span className={`${secondaryFont.className} text-foreground font-bold`}>{subtitulo}</span>
      <h2 className="text-3xl font-bold py-5">{titulo}</h2>
      <p>{descripcion}</p>
      <RoundedButton href={href} text="Ver más" className="my-5" />
    </div>
  )
}
