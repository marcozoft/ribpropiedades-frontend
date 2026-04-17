import { PropiedadFullPage } from "@/src/components";
import { PropiedadDetalleResponse } from "@/src/interfaces";
import { getPropiedadById } from "@/src/requests";
import { extractIdFromSlug, generateSrcImage } from "@/src/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Metadata
export async function generateMetadata(
  props: PageProps<"/propiedad/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;

  const propiedadResponse: PropiedadDetalleResponse = await getPropiedadById(
    extractIdFromSlug(slug),
  ).then((resp) => {
    return resp.status == 200 ? resp.json() : notFound();
  });

  const title = propiedadResponse.propiedad.titulo_venta;
  const description = propiedadResponse.propiedad.descripcion_corta;
  
  // Validar si hay imágenes disponibles
  const imagenPrincipal = propiedadResponse.imagenes?.[0]?.imagen;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: imagenPrincipal ? [generateSrcImage(imagenPrincipal)] : [],
    },
  };
}

// Page
export default async function Page(props: PageProps<"/propiedad/[slug]">) {
  
  const { slug } = await props.params;
  const id = extractIdFromSlug(slug);
  const propiedadResponse: PropiedadDetalleResponse = await getPropiedadById(id)
    .then((resp) => {
      return resp.status == 200 
        ? resp.json() 
        : notFound();
    });

  return (
    <PropiedadFullPage propiedadResponse={propiedadResponse} />
  );
}