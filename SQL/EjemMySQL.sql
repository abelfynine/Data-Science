-- Creación de las tablas
CREATE TABLE empleado (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamento(id)
);

CREATE TABLE departamento (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE proyecto (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE empleado_proyecto (
    empleado_id INT,
    proyecto_id INT,
    PRIMARY KEY (empleado_id, proyecto_id),
    FOREIGN KEY (empleado_id) REFERENCES empleado(id),
    FOREIGN KEY (proyecto_id) REFERENCES proyecto(id)
);

CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE pedido (
    id INT PRIMARY KEY,
    cliente_id INT,
    fecha_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

-- Consulta de ejemplo
SELECT e.nombre AS empleado, d.nombre AS departamento, COUNT(ep.proyecto_id) AS num_proyectos
FROM empleado e
JOIN departamento d ON e.departamento_id = d.id
LEFT JOIN empleado_proyecto ep ON e.id = ep.empleado_id
GROUP BY e.nombre, d.nombre;
