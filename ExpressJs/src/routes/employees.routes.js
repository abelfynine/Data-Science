// Importa el módulo `express-promise-router`, que permite manejar rutas asíncronas
// sin la necesidad de utilizar bloques `try/catch` en cada controlador.
import Router from 'express-promise-router';

// Importa las funciones del controlador de empleados, que incluyen las operaciones
// para crear, eliminar, obtener y actualizar empleados.
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

// Crea una nueva instancia del enrutador utilizando `express-promise-router`.
// Este enrutador manejará todas las rutas relacionadas con los empleados.
const router = Router();

// Define una ruta para obtener todos los empleados.
// Cuando se realiza una solicitud GET a `/employees`, se llama a la función `getEmployees`
// del controlador, que devuelve todos los registros de empleados en formato JSON.
router.get("/employees", getEmployees);

// Define una ruta para obtener un empleado por su ID.
// Cuando se realiza una solicitud GET a `/employees/:id`, se llama a la función `getEmployee`
// del controlador, que busca y devuelve los datos de un empleado específico basado en su ID.
router.get("/employees/:id", getEmployee);

// Define una ruta para eliminar un empleado por su ID.
// Cuando se realiza una solicitud DELETE a `/employees/:id`, se llama a la función `deleteEmployee`
// del controlador, que elimina el registro del empleado correspondiente.
router.delete("/employees/:id", deleteEmployee);

// Define una ruta para crear un nuevo empleado.
// Cuando se realiza una solicitud POST a `/employees`, se llama a la función `createEmployee`
// del controlador, que crea un nuevo registro de empleado en la base de datos.
router.post("/employees", createEmployee);

// Define una ruta para actualizar un empleado por su ID.
// Cuando se realiza una solicitud PATCH a `/employees/:id`, se llama a la función `updateEmployee`
// del controlador, que actualiza los datos del empleado correspondiente.
router.patch("/employees/:id", updateEmployee);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación, como en `app.js`,
// donde se asocian las rutas de empleados con un prefijo de ruta general.
export default router;