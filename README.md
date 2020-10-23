# Aplicación básica para practicar el backend

Esta es una aplicación básica que se puede usar para practicar los conceptos básicos de una aplicación de backend como la definción del API REST, estructura de directorios, enrutamientos, middlewares, conexiones a bases de datos y manejo de caché

## Requisitos para ejecutar localmente

1. Instale y configure un servidor de base de datos [MYSQL](https://www.tutorialesprogramacionya.com/mysqlya/temarios/descripcion.php?inicio=0&cod=2&punto=1).
2. Instale [NodeJS](https://nodejs.org/es/) en su máquina.
3. Crear un archivo `.env` en la carpeta principal de la aplicación con el siguiente contenido acorde a los datos de conexión a su base de datos omition los simbolos `<>`:
```
DBUSER=<user>
DBPASSWORD=<password>
DBHOST=<host>
DBPORT=<port>
DBNAE=<database name>
```
4. Instalar las dependencias del proyecto ejecutando el comando `npm install` en una consola ubicado en la carpeta de la aplicación.
5. Ejecutar la aplicación ejecutando el comando `npm start`

## Ejercicios sugeridos

- Implementa las funcionalidades faltantes de la aplicación, incluyendo las operaciones de base de datos y usando la cache para la consultas de datos.

- Implementa middlewares para realizar validaciones genéricas en los endpoints de la aplicación, defínelos en la carpeta `middlewares` e importalos en las rutas que necesites.

- Implementa un esquema de seguridad usando tokens de [JWT](https://www.npmjs.com/package/jsonwebtoken)
