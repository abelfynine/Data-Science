-- Crea una base de datos si no existe
create database if not exists companydb;

-- Usar/Entrar la base de datos
use companydb;

-- Crear tabla
create table employees (
id int(11) not null auto_increment primary key,
name varchar(45) default null,
salary int(5) default null
);

-- Muestra las tablas que hay en la base de datos
show tables;

-- Muestra los datos de la tabla
describe employees;

-- Insertar datos
insert into employees values
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 3000),
(4, 'Max', 4000);

-- Monstrar Tabla
select * from employees;

-- Obtener un empleado en especifico
select * from employees where id = 3;

-- Eliminar un registro
delete from employees where id = 6;

-- Actualizar un registro
update employees set name = 'Juan', salary = 3366 where id = 7;