USE tarea3_ing_soft;
GRANT FILE ON *.* TO 'agsmilinas'@'localhost';
DROP TABLE IF EXISTS movies_seats;
CREATE TABLE movies_seats(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100),asientos_reservados VARCHAR(100));
INSERT INTO movies_seats(name,asientos_reservados) VALUES("Matrix","[A1,A2]");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("Ghost Busters","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("Tron","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("The Warriors","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("Return of the Jedi: Star Wars: Episode VI","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("Back to the Future Part II","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("The Shining","");
INSERT INTO movies_seats(name,asientos_reservados) VALUES("A Clockwork Orange","");
