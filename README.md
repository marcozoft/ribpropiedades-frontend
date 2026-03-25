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

## Campos por tipo de inmueble

# Todos los inmuebles

tipo_inmueble varchar(75)               ok
codigo varchar(75)                      ok
faja_promocional varchar(150)           ok
sucursal varchar(50)                    no
id_usuario smallint(6)                  no
visible_web varchar(5)                  no
operacion varchar(150)                  ok
moneda varchar(50)                      ok
precio int(11)                          ok
precio_publico tinyint(1)               ok
financiacion tinyint(1)                 sin agregar
financiacion_detalles text              sin agregar
exclusiva tinyint(1)                    sin agregar
vigencia varchar(150)                   sin agregar
titulo_venta varchar(200)               ok
descripcion_corta varchar(300)          ok
descripcion_larga text                  ok
mapa_latitud varchar(100)               ok
mapa_longitud varchar(100)              ok
pais                                    sin agregar
zona varchar(200)                       sin agregar
localidad varchar(200)                  sin agregar
id_emprendimiento int(11)               ok
subbarrio varchar(200)                  sin agregar
direccion_publica varchar(300)          sin agregar
direccion_exacta varchar(300)           sin agregar
direccion_altura varchar(200)           sin agregar
vision360 varchar(500)                  sin agregar
expensas varchar(10)                    sin agregar
expensas_monto float                    sin agregar
obra_sanitaria varchar(10)              ok 
gas varchar(50)                         ok
seguridad varchar(10)                   ok
agua_corriente tinyint(1)               ok
telefono tinyint(1)                     Eliminado a pedido
internet tinyint(1)                     ok
id_propietario int(11)                  sin agregar
estado_habitacional varchar(50)         agregado
propietario_nota int(11)                sin agregar
detalles_ingreso text                   sin agregar 
video varchar(100)                      ok
video2 N/D                              ok
video3                                  ok


# Deposito (campos adicionales)
piso varchar(50)
direccion_unidad varchar(300)
sup_total int(11)
sup_terreno int(11)
sup_cubierta int(11)
sup_fondo int(11)
sup_frente int(11)
sup_cochera float
expensas_mes tinyint(4)
expensas_ano smallint(6)
agua_caliente varchar(50)
cable tinyint(1)
oficinas smallint(6)
banos smallint(6)
of_cocina (campo cocina del bloque deposito) tinyint(4)
vestuarios varchar(20)
comedor_empleados varchar(20)
vivienda_anexa tinyint(1)
llaves varchar(50)
fotocopias_titulo varchar(50)
cartel varchar(10)
coti varchar(50)
numero_coti varchar(150)
tasacion_datos text
tasacion_fecha date
produccion varchar(100)


# Casa (campos adicionales)

aberturas             varchar(300)
agua_caliente         varchar(50). // sacado a pedido
aire_acondicionado    varchar(50)
ambientes             smallint(6)
amueblada tinyint(1)
antiguedad varchar(100)
asfalto tinyint(1)
balcones tinyint(1)
bano_externo_check tinyint(1)
bano_servicio_check tinyint(1)
bano_toilette_check tinyint(1)
banos_texto varchar(500)
baulera tinyint(1)
cable tinyint(1)
calefaccion varchar(50)
  cartel varchar(10)        ??
casa_casero tinyint(1)
casa_huespedes tinyint(1)
chimenea tinyint(1)
cochera varchar(10)
cochera_tipo varchar(50)
cocheras smallint(6)
cocina varchar(50)
cocina_detalles tinytext     //sacado a pedido
cocina_muebles varchar(50)   //sacado a pedido
comedor_diario tinyint(1)
 coti varchar(50)
dependencia_servicio tinyint(1)
deposito tinyint(1)
direccion_unidad varchar(300)
dormitorio_suite smallint(6)
dormitorios smallint(6)
entrada_servicio tinyint(1)
escritorio tinyint(1)
estado varchar(50)
estilo varchar(100)
expensas_ano smallint(6)
expensas_detalles text
expensas_mes tinyint(4)
family tinyint(1)
 fotocopias_titulo varchar(50)
galeria tinyint(1)
hall_entrada tinyint(1)
lavadero tinyint(1)
living tinyint(1)
 llaves varchar(50)
lote varchar(50)
lote_vista varchar(100)
 numero_coti varchar(150)
parrilla tinyint(1)
patio tinyint(1)
piscina varchar(10)
piscina_calefaccion varchar(5)
piscina_cerco varchar(5)
piscina_medidas varchar(150)
piscina_tipo varchar(50)
piscina_vista tinyint(4)
piso varchar(50)
plantas int(11)
porche tinyint(1)
 produccion varchar(100)
quincho tinyint(1)
revestimiento varchar(50)
riego tinyint(1)
sol_jardin tinyint(1)
sup_cubierta int(11)
sup_descubierta float
sup_fondo int(11)
sup_frente int(11)
sup_semi_cubierta int(11)
sup_terreno int(11)
sup_total int(11)
 tasacion_datos text
 tasacion_fecha date
techo varchar(50)
terraza tinyint(1)
tipo_pisos varchar(200)
tipo_zona varchar(100)    // sacado por pedido
toilette int(11)

# Departamento (campos adicionales)

piso varchar(50)
direccion_unidad varchar(300)
ambientes smallint(6)
dormitorios smallint(6)
dormitorio_suite smallint(6)
banos smallint(6)
banos_servicio smallint(6)
luminosidad varchar(100)
altura_techo varchar(50)
cochera varchar(10)
cocheras smallint(6)
cochera_tipo varchar(50)
estado varchar(50)
antiguedad varchar(100)
lote_vista varchar(100)
orientacion varchar(100)
tipo_zona varchar(100)
sup_total int(11)
sup_cubierta int(11)
sup_semi_cubierta int(11)
sup_descubierta float
sup_balcon int(11)
expensas_mes tinyint(4)
expensas_ano smallint(6)
expensas_detalles text
agua_caliente varchar(50)
cable tinyint(1)
edificio_tipo varchar(100)
edificio_estado varchar(50)
edificio_pisos smallint(6)
unidades_pisos varchar(250)
edificio_ascensores smallint(6)
piscina varchar(10)
hall_entrada tinyint(1)
sum tinyint(1)
quincho tinyint(1)
gimnasio tinyint(1)
escaleras tinyint(1)
arquitecto varchar(200)
amueblada tinyint(1)
escritorio tinyint(1)
family tinyint(1)
comedor_diario tinyint(1)
dependencia_servicio tinyint(1)
entrada_servicio tinyint(1)
balcones tinyint(1)
galeria tinyint(1)
patio tinyint(1)
baulera tinyint(1)
toilette int(11)
chimenea tinyint(1)
lavadero tinyint(1)
parrilla tinyint(1)
calefaccion varchar(50)
aire_acondicionado varchar(50)
aberturas varchar(300)
cocina varchar(50)
cocina_detalles tinytext     // sacado a pedido
cocina_muebles varchar(50)   // sacado a pedido
tipo_pisos varchar(200)
llaves varchar(50)
 fotocopias_titulo varchar(50)
 cartel varchar(10)
 coti varchar(50)
 numero_coti varchar(150)

# Oficina (campos adicionales)

piso varchar(50)
direccion_unidad varchar(300)
sup_total int(11)
sup_cubierta int(11)
sup_semi_cubierta int(11)
sup_balcon int(11)
expensas_mes tinyint(4)
expensas_ano smallint(6)
agua_caliente varchar(50)
cable tinyint(1)
edificio_tipo varchar(100)
edificio_estado varchar(50)
edificio_pisos smallint(6)
edificio_ascensores smallint(6)
piscina varchar(10)
hall_entrada tinyint(1)
sum tinyint(1)
quincho tinyint(1)
gimnasio tinyint(1)
escaleras tinyint(1)
arquitecto varchar(200)
calefaccion varchar(50)
aire_acondicionado varchar(50)
aberturas varchar(300)
cocina varchar(50)
cocina_detalles tinytext
cocina_muebles varchar(50)
llaves varchar(50)
fotocopias_titulo varchar(50)
cartel varchar(10)
coti varchar(50)
numero_coti varchar(150)

# Local (Campos adicionales)

piso varchar(50)
direccion_unidad varchar(300)
sup_total int(11)
sup_cubierta int(11)
sup_semi_cubierta int(11)
sup_descubierta float
sup_balcon int(11)
expensas_mes tinyint(4)
expensas_ano smallint(6)
agua_caliente varchar(50)
edificio_tipo varchar(100)
edificio_estado varchar(50)
edificio_pisos smallint(6)
edificio_ascensores smallint(6)
hall_entrada tinyint(1)
sum tinyint(1)
escaleras tinyint(1)
arquitecto varchar(200)
calefaccion varchar(50)
aire_acondicionado varchar(50)
aberturas varchar(300)
cocina varchar(50)
cocina_detalles tinytext
cocina_muebles varchar(50)
llaves varchar(50)
fotocopias_titulo varchar(50)
cartel varchar(10)
coti varchar(50)
numero_coti varchar(150)

# Edificio (campos adicionales) (no está en buscador)

piso varchar(50)
direccion_unidad varchar(300)
ambientes smallint(6)
dormitorios smallint(6)
dormitorio_suite smallint(6)
banos smallint(6)
banos_servicio smallint(6)
luminosidad varchar(100)
altura_techo varchar(50)
cochera varchar(10)
cocheras smallint(6)
cochera_tipo varchar(50)
estado varchar(50)
antiguedad varchar(100)
lote_vista varchar(100)
orientacion varchar(100)
tipo_zona varchar(100)
sup_total int(11)
sup_cubierta int(11)
sup_semi_cubierta int(11)
sup_balcon int(11)
expensas_mes tinyint(4)
expensas_ano smallint(6)
expensas_detalles text
agua_caliente varchar(50)
cable tinyint(1)
edificio_tipo varchar(100)
edificio_estado varchar(50)
edificio_pisos smallint(6)
unidades_pisos varchar(250)
edificio_ascensores smallint(6)
piscina varchar(10)
hall_entrada tinyint(1)
sum tinyint(1)
quincho tinyint(1)
gimnasio tinyint(1)
escaleras tinyint(1)
arquitecto varchar(200)
amueblada tinyint(1)
escritorio tinyint(1)
family tinyint(1)
comedor_diario tinyint(1)
dependencia_servicio tinyint(1)
entrada_servicio tinyint(1)
balcones tinyint(1)
chimenea tinyint(1)
lavadero tinyint(1)
parrilla tinyint(1)
calefaccion varchar(50)
aire_acondicionado varchar(50)
aberturas varchar(300)
cocina varchar(50)
cocina_detalles tinytext
cocina_muebles varchar(50)
tipo_pisos varchar(200)
llaves varchar(50)
fotocopias_titulo varchar(50)
cartel varchar(10)
coti varchar(50)
numero_coti varchar(150)

# Lote (campos adicionales)

direccion_unidad varchar(300)
sup_total int(11)
sup_frente int(11)
sup_contrafrente int(11)
sup_lateral_derecho float
sup_lateral_izquierdo float
sup_construible int(11)
sup_edificable int(11)
expensas_mes tinyint(4)
expensas_ano smallint(6)
agua_caliente varchar(50)
asfalto tinyint(1)
cable tinyint(1)
llaves varchar(50)
fotocopias_titulo varchar(50)
cartel varchar(10)
coti varchar(50)
numero_coti varchar(150)

# Chacra (campos adicionales)

estado varchar(50)
acceso varchar(50)
cerca_ruta tinyint(1)
suelos tinyint(1)
pastura_perenne tinyint(1)
potreros tinyint(1)
sembrado tinyint(1)
manga tinyint(1)
balanza tinyint(1)
alambrado_perimetral tinyint(1)
motores tinyint(1)
galpones tinyint(1)
molinos tinyint(1)
silos tinyint(1)
maquinas tinyint(1)
picadero tinyint(1)
bebederos tinyint(1)
caballerizas tinyint(1)
lagunas tinyint(1)
casa_principal tinyint(1)
casa_casero tinyint(1)
sup_hectareas int(11)
sup_total int(11)
sup_cubierta int(11)
sup_semi_cubierta int(11)
sup_tierras_bajas smallint(6)
sup_tierras_altas smallint(6)

# Fraccion (campos adicionales)

estado varchar(50)
cerca_ruta
suelos
pastura_perenne 
potreros 
sembrado
manga
balanza
alambrado_perimetral
motores
galpones
molinos
silos
maquinas
picadero
bebederos
caballerizas
lagunas
casa_principal 
casa_casero 
sup_hectareas 
sup_total 
sup_cubierta 
sup_semi_cubierta 
sup_tierras_bajas 
sup_tierras_altas 
agua_caliente 