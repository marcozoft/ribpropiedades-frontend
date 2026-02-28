import { primaryFont, secondaryFont } from "@/src/config/fonts";

type Props = {
  tituloVenta: string;
};

export const TituloDeVenta = ({ tituloVenta }: Props) => {
  return (
    <p
      className={`mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-black ${primaryFont.className}`}
    >
      {tituloVenta}
    </p>
  );
};
