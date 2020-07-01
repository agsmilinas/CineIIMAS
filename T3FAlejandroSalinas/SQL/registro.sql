use `tarea3_ing_soft`;
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100),apellido VARCHAR(100),nombre_usuario VARCHAR(100),ciudad VARCHAR(100),estado VARCHAR(100),cp INT, contraseña VARCHAR(100));


