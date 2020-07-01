USE tarea3_ing_soft;
GRANT FILE ON *.* TO 'agsmilinas'@'localhost';
DROP TABLE IF EXISTS movies;
CREATE TABLE movies(id INT PRIMARY KEY AUTO_INCREMENT,image BLOB not null,name VARCHAR(100),clasificacion VARCHAR(100),precio VARCHAR(100),descripcion VARCHAR(1000));
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://images-na.ssl-images-amazon.com/images/I/51H-kNS9S4L._AC_.jpg',"Matrix","B","$45","Un experto en computadoras descubre que su mundo es una simulación total creada con maliciosas intenciones por parte de la ciberinteligencia.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://images-na.ssl-images-amazon.com/images/I/71mTi3yd40L._AC_SY879_.jpg',"Ghost Busters","B","$45","Cuatro investigadores de sucesos paranormales desempleados crean una empresa en Nueva York con el propósito de limpiar la ciudad de fantasmas.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://3.bp.blogspot.com/-qBVigHggmQA/VB_colsEayI/AAAAAAAABcQ/sI24BB2vTfU/s1600/23p110303029.jpg',"Tron","A","$45","Un diseñador de videojuegos se hace parte del software de un usuario malvado dentro de una computadora.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://i.pinimg.com/originals/e6/28/5d/e6285d5a6a8c6033036a07d27c6d9c90.jpg',"The Warriors","C","$45","Durante una noche del verano de 1979, una pandilla, injustamente acusada de haber asesinado a un carismático líder durante una reunión en la que se pretendía unir a todos las pandillas de Nueva York, debe cruzar por la noche toda la ciudad de norte a sur, enfrentándose a todas las demás bandas, para regresar vivos a su barrio y desenmascarar al verdadero asesino.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://m.media-amazon.com/images/I/51FFvV73KLL.jpg',"Return of the Jedi: Star Wars: Episode VI","A","$45","Luke Skywalker, ahora un experimentado caballero Jedi, intenta descubrir la identidad de Darth Vader.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('data:image/jpeg;base64,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',"Back to the Future Part II","B","$45","Un adolescente y un inventor extravagante viajan al pasado y al futuro para alterar una serie de eventos desastrosos.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://product-image.juniqe-production.juniqe.com/media/catalog/product/cache/x600/171/230/171-230-401P.jpg',"The Shining","C","$45","Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.");
INSERT INTO movies(image,name,clasificacion,precio,descripcion) VALUES('https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2F2.bp.blogspot.com%2F-i1U01bzHxzU%2FVI8HJ-qij3I%2FAAAAAAAAAYI%2FvbwgjQPUt4M%2Fs1600%2Fclockwork_orange.jpg&container=blogger&gadget=a&rewriteMime=image%2F*',"A Clockwork Orange","C","$45","Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.");
