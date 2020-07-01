# CineIIMAS
A Java Web App (BootStrap) that simulates a webpage of a cinema. (MySQL DB is used)


Tutorial link:
https://youtu.be/I4CVZ0LKg-E


¡¡Bienvenidos a CineIIMAS!!
La aplicación tiene las siguientes características:
Servicio Registro de Usuarios: Se registran usuarios en una base de datos MySQL; esto se logra gracias a las integraciones Entity de SpringBoot (modelo de datos o Java Beans) , thymeleaf  y la clase CrudRepository de Spring Boot.
Servicio de Inicio de sesión para usuarios registrados: la aplicación tiene un sistema de login que busca y valida credenciales en la base de datos (usuarios). A través de una RESTful API generada con SpringBoot, se accede a los archivos de la base de datos (usuarios)( jquery + AJAX hacen un método GET a la) y genera una validación con JS de los campos del formulario de login contra la DB. Los usuarios registrados, al iniciar sesión, tienen acceso a mejores promociones del cine y se muestra un identificador en una navbar de Invitado Especial.
Servicio de Cartelera: la cartelera se genera dinámicamente a partir de una base de datos (movies); donde a través de una RESTful API generada con SpringBoot, se accede a los archivos de la base de datos (movies) y un loop itera para crear todos los elementos que se ven en la página de cartelera gracias a los métodos createElement y setAttribute de JS.
Servicio de Venta de boletos: la sección de venta boletos ofrece al usuario distintos horarios para la función, así como la opción de escoger sus asientos favoritos dentro del cine; a través de la base de datos (movie_seats), se tiene control de que asientos ya han sido comprados y que asientos aún están reservados. Esto se logra gracias a la API y jquery + AJAX para hacer un método UPDATE de la base de datos y tener el control de los asientos. Se genera un accionador de pagos para tarjetas de crédito ficticio y su respectivo validador de pagos.
Sistema de confirmación: este imprime una pantalla agradeciendo tu compra y generando los datos de tu compra. También manda un email de confirmación de compra al mail proporcionado por el usuario, esto se hace gracias a la integración de SpringBoot JavaMailSender y un servidor SMTP configurado a la cuenta cineiimas.info@gmail.com; toda esta integración del mail en la carpeta de servicios.
SQL Scripts: Todos los scripts para generar la base de datos vienen en la carpeta SQL.
