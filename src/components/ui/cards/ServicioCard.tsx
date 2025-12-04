import { secondaryFont } from '@/src/config/fonts';
import { RoundedButton } from '../buttons/RoundedButton';

type Props = {
  titulo: string;
  descripcion: string;
  imageUrl: string;
  icon: string;
  href: string;
}

export const ServicioCard = ({titulo, descripcion, href, icon}:Props) => {
  return (
    <div className="flex flex-col bg-background items-center p-6 justify-between shadow-lg hover:shadow-2xl">
      <i className={`${icon} text-5xl`} />
      <p className='font-bold text-4xl text-foreground text-center items-center flex justify-center flex-1 p-2'>{titulo}</p>
      <p className={`text-black ${secondaryFont.className} text-xl text-center line-clamp-5 h-[9rem] my-5`}>{descripcion}</p>
      <RoundedButton className='rounded-full uppercase' href={href} text='Ver más'/>
    </div>
  )
}
