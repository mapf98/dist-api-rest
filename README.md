# API REST Sistemas Distribuidos

## Requerimientos

- Node
- PostgreSQL

## Configuración

- Realizar npm install
- Crear un .env utilizando de referencia el .env.template

## Despliegue de estructuras para persistencia de datos

- Crear una BD en PostgreSQL
- Configurar el .env con las credenciales de la BD
- Ejecutar el archivo ./database/scripts/create.sql

## Ejecución del servicio

```cmd
npm run serve
```

## Indicaciones de cómo obtener la especificación del servicio (Swagger)

- Ir a la dirección con la estructura `<host>:<API_PORT>/<API_PREFIX>/utils/docs/`
  - Ejemplo: `localhost:3000/dist/api/v1/utils/docs/`
