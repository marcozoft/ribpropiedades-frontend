import { secondaryFont } from '@/src/app/config/fonts';

type Props = {
   tituloVenta: string;
}

export const TituloDeVenta = ({ tituloVenta }: Props) => {
   return (
      <p className={`mt-2 text-gray-500 text-sm line-clamp-2 leading-5 min-h-[2.5rem] ${secondaryFont.className}`}>
         {tituloVenta}
      </p>
   )
}
