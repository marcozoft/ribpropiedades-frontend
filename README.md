# RIB Propiedades - Frontend



## Stack utilizado


## Pasos para correr la aplicación

```bash
npm run dev
```


## Deploy

## Configuración

## Variables de entorno

## Construir
```bash
npm install
npm run build
```


Breakpoint prefix	Minimum width	CSS
sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }




Quiero implementar supabase con postgress para guardar las respuestas de los llamados a la API de Google. Para esto necesito crear la tabla, la conexion a supabase con sus dependencias, utilizando la interface NearbySearchResponse.

En la api /lugares se debe realizar una consulta a la base de datos supabase utilizando una query que devuelva los places mas cercanos, para esto implementar la extension postgis,
Al buscar los puntos mas cercanos en la base de datos si no se encuentran resultados entonces llamar a la API de Google como se está haciendo actualmente.

De esta forma la base de datos supabase funciona a modo de cache de resultados y permite optimizar la cantidad de llamados a la API de google Places.