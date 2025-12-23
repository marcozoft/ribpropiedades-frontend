import { secondaryFont } from '@/src/config/fonts';

type Props = {
   descripcion: string;
}

export const DescripcionCorta = ({ descripcion }: Props) => {
   return (
      <p className={`mt-2 text-gray-500 text-sm line-clamp-5 leading-5 min-h-[7.5rem] ${secondaryFont.className}`}>
         {descripcion}
      </p>
   )
}
