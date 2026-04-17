"use client";

import { PropiedadBasico } from "@/src/interfaces";
import { PropiedadCard } from "@/src/components";

type Props = {
  propiedades: PropiedadBasico[];
  nombre: string;
};

export const PrintPropiedadesEmprendimiento = ({ propiedades, nombre }: Props) => {
  return (
    <div className="hidden print:block print-propiedades-emprendimiento">
      <h2 className="print-section-title">| Propiedades en {nombre}</h2>
      <div className="print-propiedades-grid">
        {propiedades.map((propiedad, index) => (
          <div key={index} className="print-propiedad-item">
            <PropiedadCard propiedad={propiedad} />
          </div>
        ))}
      </div>
    </div>
  );
};
