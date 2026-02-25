import { IndicadorNumerico } from "@/src/components";
import { ReactElement } from "react";

type Props = {
  indicadores: {
    nombre: string;
    valor: number;
    icono: ReactElement;
    unidad: string;
  }[];
};
export const IndicadoresNumericos = ({ indicadores }: Props) => {
  return (
    <div className="justify-center">
      <div className="my-5 flex gap-2 divide-x overflow-hidden rounded-lg">
        {indicadores.map(({ nombre, valor, icono, unidad }) => (
          <IndicadorNumerico
            key={nombre}
            nombre={nombre}
            valor={valor}
            icono={icono}
            unidad={unidad}
          />
        ))}
      </div>
    </div>
  );
};
