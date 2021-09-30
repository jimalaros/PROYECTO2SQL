CREATE DATABASE IF NOT EXISTS MINTIC;

USE MINTIC;

CREATE TABLE usuarios (
	id int NOT NULL auto_increment,
 	Nombre VARCHAR(50) NOT NULL,
 	Apellido VARCHAR(50) NOT NULL,
	Correo VARCHAR(100) NOT NULL,
	Contraseña VARCHAR(50) NOT NULL, 
	Direccion VARCHAR(100) NOT NULL,
 	PRIMARY KEY (id)
);

CREATE TABLE productos (
	id int NOT NULL auto_increment,
 	Nombre VARCHAR(50) NOT NULL,
 	Precio FLOAT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE ordenes(
	id int not null auto_increment,
 	usuarioId int not null, 
 	PRIMARY KEY (id),
 	FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE INTERMEDIO(
 	OrdenId int not null,
 	ProductoId int not null,
 	FOREIGN KEY (OrdenId) REFERENCES ordenes(id),
 	FOREIGN KEY (ProductoId) REFERENCES productos(id)
);

INSERT INTO usuarios values
	(1, 'Jimmy', 'Arango', 'jimalaros25@gmail.com', '1234', 'Hospital');
    

SELECT * FROM usuarios;