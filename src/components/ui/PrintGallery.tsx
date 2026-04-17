"use client";

import { Imagen } from "@/src/interfaces";
import { generateSrcImage } from "@/src/utils";
import Image from "next/image";

type Props = {
  imagenes: Imagen[];
};

export const PrintGallery = ({ imagenes }: Props) => {
  return (
    <div className="print-gallery-container hidden print:block">
      <h2 className="print-section-title">| Galería de Imágenes</h2>
      <div className="print-gallery-grid">
        {imagenes.map((imagen, index) => (
          <div key={index} className="print-gallery-item">
            <Image
              src={generateSrcImage(imagen.imagen)}
              alt={`Imagen ${index + 1}`}
              width={500}
              height={375}
              quality={90}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
