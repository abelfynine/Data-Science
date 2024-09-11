// Importa el módulo Express para manejar las solicitudes HTTP.
import express from 'express';

// Importa las rutas definidas para los empleados desde el archivo correspondiente.
import employeesRoutes from "./routes/employees.routes.js";

// Crea una nueva aplicación de Express.
const app = express();

// Configura la aplicación para que use el middleware `express.json`.
// Este middleware se encarga de analizar las solicitudes entrantes con datos JSON, 
// permitiendo que los controladores puedan acceder a los datos enviados en el cuerpo de la solicitud.
app.use(express.json());

// Define la ruta base `/api` para las rutas de empleados.
// Todas las rutas en `employeesRoutes` estarán bajo el prefijo `/api`, como por ejemplo, `/api/employees`.
app.use('/api', employeesRoutes);

// Agrega un middleware para manejar las rutas no encontradas.
// Si ninguna de las rutas definidas coincide con la solicitud, responderá con un código de estado 404 
// y un mensaje indicando que el endpoint no se ha encontrado.
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not Found"
    });
});

// Exporta la aplicación para que pueda ser utilizada en otros archivos, 
// como en el archivo principal que inicia el servidor.
export default app;