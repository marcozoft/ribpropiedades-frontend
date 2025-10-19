const generateSlug = (id: number, title: string):string => {
   const cleanTitle = title
      .toLowerCase()
      .normalize("NFD")                  // separa caracteres compuestos en 2 pares
      .replace(/[\u0300-\u036f]/g, "")   // elimina acentos
      .replace(/[^a-z0-9]+/g, "-")       // reemplaza espacios y símbolos
      .replace(/(^-|-$)+/g, "");         // quita guiones sobrantes

  return `${cleanTitle}-${id}`;
}

export const extractIdFromSlug = (slug: string):number => {
   
   return Number(slug.split('-').pop());

}

export const generateHrefPropiedad = (id: number, title: string): string => {
   return `/propiedad/${generateSlug(id, title)}`
}

export const generateHrefEmprendimiento = (id: number, title: string): string => {
   return `/emprendimiento/${generateSlug(id, title)}`
}
