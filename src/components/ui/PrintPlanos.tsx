"use client";

import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";

type Props = {
  imagenes: Imagen[];
};

export const PrintPlanos = ({ imagenes }: Props) => {
  return (
    <div className="print-planos-container">
      <div className="grid grid-cols-2 gap-4 print-planos-grid">
        {imagenes.map((imagen, index) => (
          <div key={index} className="print-plano-item border border-gray-200 overflow-hidden">
            <Image
              src={generateSrcImage(imagen.imagen)}
              alt={`Plano ${index + 1}`}
              width={400}
              height={400}
              quality={85}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
