// Importa la aplicación Express desde el archivo `app.js`.
// Este archivo contiene la configuración de la aplicación, como las rutas y los middlewares.
import app from "./app.js";

// Importa la variable `PORT` desde el archivo `config.js`.
// Esta variable define el puerto en el que se ejecutará el servidor y se obtiene de las variables de entorno
// o de un valor predeterminado.
import { PORT } from "./config.js";

// Inicia el servidor Express escuchando en el puerto especificado por la variable `PORT`.
// La función `listen` permite que el servidor empiece a aceptar conexiones en el puerto definido.
app.listen(PORT);

// Imprime un mensaje en la consola indicando que el servidor está funcionando correctamente
// y en qué puerto está escuchando, ayudando a verificar que la aplicación ha iniciado con éxito.
console.log('Server running on port', PORT);