// Importa el objeto `pool` desde el archivo `db.js`.
// `pool` es el grupo de conexiones a la base de datos que permite realizar consultas MySQL.
import { pool } from "../db.js";

// Define y exporta una función asincrónica para obtener todos los empleados de la base de datos.
export const getEmployees = async (req, res) => {
    // Realiza una consulta SQL para seleccionar todos los registros de la tabla `employees`.
    const [rows] = await pool.query('SELECT * FROM employees');
    
    // Envía el resultado de la consulta como respuesta en formato JSON.
    res.send(rows);
};

// Define y exporta una función asincrónica para obtener un empleado específico por su ID.
export const getEmployee = async (req, res) => {    
    // Realiza una consulta SQL para seleccionar un empleado con un ID específico,
    // utilizando el valor proporcionado en los parámetros de la solicitud (`req.params.id`).
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);

    // Si no se encuentra ningún empleado con el ID dado, devuelve una respuesta 404 con un mensaje de error.
    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee Not Found'
    });

    // Si se encuentra el empleado, se envía el primer registro de los resultados en formato JSON.
    res.json(rows[0]);
};

// Define y exporta una función asincrónica para crear un nuevo empleado.
export const createEmployee = async (req, res) => {
    // Extrae los datos `name` y `salary` del cuerpo de la solicitud (`req.body`).
    const { name, salary } = req.body;

    // Inserta un nuevo empleado en la base de datos con los valores de `name` y `salary`.
    const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary]);

    // Devuelve una respuesta 201 con los datos del nuevo empleado, incluyendo el ID generado.
    res.status(201).json({ id: rows.insertId, name, salary });
};

// Define y exporta una función asincrónica para actualizar un empleado existente.
export const updateEmployee = async (req, res) => {
    // Extrae el ID del empleado de los parámetros de la solicitud y los datos `name` y `salary` del cuerpo.
    const { id } = req.params;
    const { name, salary } = req.body;

    // Realiza una consulta SQL para actualizar el nombre y el salario del empleado con el ID dado.
    // Si no se proporciona `name` o `salary`, se mantendrán los valores actuales gracias a `IFNULL`.
    const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

    // Si no se actualiza ningún registro (por ejemplo, si el ID no existe), devuelve una respuesta 404.
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Employee Not Found'
    });

    // Si se actualizó el empleado, realiza otra consulta para obtener el registro actualizado.
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

    // Devuelve el registro actualizado en formato JSON.
    res.json(rows[0]);
};

// Define y exporta una función asincrónica para eliminar un empleado por su ID.
export const deleteEmployee = async (req, res) => {
    // Realiza una consulta SQL para eliminar el empleado con el ID dado.
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);

    // Si no se eliminó ningún registro (por ejemplo, si el ID no existe), devuelve una respuesta 404.
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee Not Found'
    });

    // Si se eliminó el empleado, envía una respuesta 204 (sin contenido) para indicar que la operación fue exitosa.
    res.sendStatus(204);
};