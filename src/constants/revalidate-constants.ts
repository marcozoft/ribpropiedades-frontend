/**
 * Tiempo en segundos para la revalidacion de los llamados fetch
 */
const HORA = 3600;
const DIA = 24 * HORA;
const SEMANA = 7 * DIA;
const MES = 30 * DIA;


/**
 * PROPIEDADES
 */

/**
 * getAllPropiedades
 */
export const REVALIDATE_PROPIEDADES = DIA;

/**
 * getPropiedadById
 */
export const REVALIDATE_PROPIEDAD_ID = DIA;

/**
 * getPropiedadesIA
 */
export const REVALIDATE_PROPIEDADES_IA = DIA;


/**
 * EMPRENDIMIENTOS
 */

/**
 * getAllEmprendimientos
 */
export const REVALIDATE_EMPRENDIMIENTOS = DIA;


/**
 * getEmprendimientoById
 */
export const REVALIDATE_EMPRENDIMIENTOS_ID = DIA;


/**
 * COMENTARIOS
 * getAllComentarios
 */
export const REVALIDATE_COMENTARIOS = SEMANA;

/**
 * PARAMETROS DE FILTROS
 */

/**
 * getFilterItems
 */
export const REVALIDATE_FILTERS = 3 * MES;


/**
 * GOOGLE PLACES
 * (API paga)
 */
export const REVALIDATE_GOGLE_PLACES = 3 * MES;


/**
 * HOME
 */

/**
 * getHomeContenido
 * Video nosotros
 */
export const REVALIDATE_HOME_CONTENIDO = 3 * MES;

/**
 * getLanzamientos
 */
export const REVALIDATE_LANZAMIENTOS = DIA;

/**
 * getPropiedadesDestacadas
 */
export const REVALIDATE_DESTACADAS = DIA;
