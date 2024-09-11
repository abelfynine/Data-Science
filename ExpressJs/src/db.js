// Importa la función `createPool` del paquete `mysql2/promise`.
// Esta función permite crear un grupo de conexiones a la base de datos que se manejará utilizando promesas,
// facilitando las operaciones asíncronas con MySQL.
import { createPool } from "mysql2/promise";

// Importa las variables de configuración necesarias para establecer la conexión a la base de datos.
// Estas variables incluyen el host, el puerto, el usuario, la contraseña y el nombre de la base de datos.
// Dichas variables provienen del archivo `config.js`, donde se obtienen de las variables de entorno o de valores predeterminados.
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "./config.js";

// Crea y exporta un grupo de conexiones a la base de datos MySQL mediante `createPool`.
// El grupo de conexiones es configurado con los valores especificados para el host, el puerto, el usuario,
// la contraseña y la base de datos, lo que permite reutilizar conexiones y optimizar el acceso a la base de datos.
export const pool = createPool({
    host: DB_HOST,      // El host de la base de datos, como 'localhost' o un dominio específico.
    user: DB_USER,      // El usuario para autenticar la conexión, como 'root' o cualquier otro nombre de usuario.
    password: DB_PASSWORD,  // La contraseña asociada al usuario de la base de datos.
    port: DB_PORT,      // El puerto en el que el servidor de base de datos está escuchando (por defecto 3306 para MySQL).
    database: DB_DATABASE // El nombre de la base de datos a la que se desea conectar, como 'companydb'.
});