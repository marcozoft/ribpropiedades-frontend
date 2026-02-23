import { secondaryFont } from "@/src/config/fonts";
import { CarouselCards } from "@/src/components";
import { getPropiedadesDestacadas } from "@/src/requests";
import { sortPropiedadesByOrden } from "@/src/utils";

export const SeccionSeleccion = async () => {
  const propiedadesSeleccionOrdenadas = sortPropiedadesByOrden(
    (await getPropiedadesDestacadas()).propiedades,
  );

  return (
    <section className="px-4 pt-20 pb-10">
      <h1 className="text-center text-5xl font-bold">RIB Selección</h1>
      <h2 className={`pb-10 text-center font-bold ${secondaryFont.className}`}>
        Descubrí nuestra exclusiva selección
      </h2>

      {/* Carousel Seleccion x3 cards */}
      <CarouselCards propiedades={propiedadesSeleccionOrdenadas} />
    </section>
  );
};
