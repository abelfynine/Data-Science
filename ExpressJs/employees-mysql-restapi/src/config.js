// Importa la función `config` del paquete `dotenv`.
// `dotenv` permite cargar las variables de entorno definidas en un archivo `.env` para que estén disponibles en `process.env`.
import { config } from "dotenv";

// Ejecuta la función `config` para cargar las variables de entorno del archivo `.env` (si existe).
config();

// Exporta la variable `PORT`, que obtiene su valor de la variable de entorno `PORT`.
// Si `PORT` no está definida en las variables de entorno, usará el valor predeterminado `3000`.
export const PORT = process.env.PORT || 3000;

// Exporta la variable `DB_HOST`, que obtiene su valor de la variable de entorno `DB_HOST`.
// Si no está definida, usará el valor predeterminado `'localhost'`, que es el host de la base de datos.
export const DB_HOST = process.env.DB_HOST || 'localhost';

// Exporta la variable `DB_PORT`, que obtiene su valor de la variable de entorno `DB_PORT`.
// Si no está definida, usará el valor predeterminado `3306`, que es el puerto comúnmente utilizado por MySQL.
export const DB_PORT = process.env.DB_PORT || 3306;

// Exporta la variable `DB_USER`, que obtiene su valor de la variable de entorno `DB_USER`.
// Si no está definida, usará el valor predeterminado `'root'`, que es el nombre de usuario predeterminado en muchos sistemas de bases de datos.
export const DB_USER = process.env.DB_USER || 'root';

// Exporta la variable `DB_PASSWORD`, que obtiene su valor de la variable de entorno `DB_PASSWORD`.
// Si no está definida, usará el valor predeterminado `'root'`, que es una contraseña común en entornos locales de desarrollo.
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root';

// Exporta la variable `DB_DATABASE`, que obtiene su valor de la variable de entorno `DB_DATABASE`.
// Si no está definida, usará el valor predeterminado `'companydb'`, que es el nombre de la base de datos.
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';