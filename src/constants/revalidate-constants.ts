/**
 * Tiempo en segundos para la revalidacion de los llamados fetch
 */
const MINUTO = 60;
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
export const REVALIDATE_PROPIEDADES = 1 * MINUTO;

/**
 * getPropiedadById
 */
export const REVALIDATE_PROPIEDAD_ID = 1 * MINUTO;

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
export const REVALIDATE_EMPRENDIMIENTOS = 1 * MINUTO;


/**
 * getEmprendimientoById
 */
export const REVALIDATE_EMPRENDIMIENTOS_ID = 1 * MINUTO;


/**
 * COMENTARIOS
 * getAllComentarios
 */
export const REVALIDATE_COMENTARIOS = 1 * HORA;

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
export const REVALIDATE_LANZAMIENTOS = 1 * MINUTO;;

/**
 * getPropiedadesDestacadas
 */
export const REVALIDATE_DESTACADAS = 1 * MINUTO;;
