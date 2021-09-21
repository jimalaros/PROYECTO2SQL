CREATE DATABASE IF NOT EXISTS MINTIC;

USE MINTIC;

CREATE TABLE usuarios (
	id int NOT NULL auto_increment,
 	Nombre VARCHAR(50) NOT NULL,
 	Apellido VARCHAR(50) NOT NULL,
	Correo VARCHAR(100) NOT NULL,
	Contraseña VARCHAR(50) NOT NULL, 
	Direccion VARCHAR(100) NOT NULL,
 	PRIMARY KEY (`id`)
);

INSERT INTO usuarios values
	(1, 'Jimmy', 'Arango', 'jimalaros25@gmail.com', '1234', 'Hospital');
    
DESCRIBE usuarios;

SELECT * FROM usuarios;