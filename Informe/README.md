# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://openclipart.org/image/300px/svg_to_png/168924/web-books.png&disposition=attachment" alt="Libros sobre la web" title="Libros sobre la web por cliparteles ( https://openclipart.org/user-detail/cliparteles)" />
</p>

### Tema : `Sailsjs`
### Fecha : `2017-01-05`
### Estudiante : `Luis Alberto Reinoso Calero`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

---
<a name="cabecera"></a>
## Índice de contenidos
- Tema
- Objetivos
- Marco teórico
  - Sailsjs
    - Assets
    - Views
    - Rutas
      - Explicitas
      - Implicitas
    - Controladores
    - Pipeline
- Desarrollo de la práctica
- Conclusiones y recomendaciones

---
## Tema
Sailsjs

## Objetivos
- Desarrollar una aplicación web.
- Conocer el framework Sailsjs.

## Marco Teorico

### Sailsjs
Sails es un web framework que trabaja en back-end de una aplicación web, es decir sails permite crear APIs, servir HTML y manejar simultaneamente cientos de usuarios.

Fuente: [Sails](http://sailsjs.com/whats-that)

#### Assets
Se refiere a los archivos estáticos presentes en el proyecto (js, css, imagenes, entre otros) que serán accesibles al mundo, al momento de agregar o cambiar un elemento dentro de la carpeta `assets/` se añade al proceso de pipeline y sincroniza estos archivos con la carpeta `.tmp/public/`. Esto es lo que se muestra en tiempo de ejecución.

Fuente: [Sails](http://sailsjs.com/documentation/concepts/assets)

#### Views
Las vistas son plantillas que son compilados en el servidor y retornan paginas HTML, por defecto Sails usa EJS (Embedded Javascript) como motor de vista, las vistas están definidas en la carpeta `views/`

Para compilar una vista utiliza el objeto res `res.view`

Las vista puede ser directamente añadido dentro de las rutas definidas, para esto se modifica el archivo `routes.js`

Fuente: [Sails](http://sailsjs.com/documentation/concepts/views)

#### Rutas
Es la forma de en que la aplicación web interpreta un petición y devolver una respuesta, de esta forma distinguir una URL de otra. Sails un enrutamiento para mapear URL a controladores y vistas.

Estas son reglas que le dice a Sails que tiene que hacer cuando recibe una petición. Existen dos tipos de petición:
- explicitas
- implicitas

##### Explicitas
Son aquellas declaradas en el archivo `config/routes.js`

Cada ruta consiste en:
  - dirección: describe el tipo de solicitud (opcional) y la ruta.
  - objetivo: puede ser controlador o alguna vista.

##### Implicitas
Son aquellas rutas creados por los archivos en los Assets o las rutas generadas por los blueprints que provee la generación de la REST API.

#### Controladores
El controlador es el responsable de responder a los pedidos realizado desde el navegador web, aplicación movil o cualquier otro sistema capaz de comunicarse con el servidor.

Actua como intermediario entre los modelos y vistas.

En Sails tienen una serie de métodos llamados `acciones` y estas están asociadas a las rutas.

Los controladores son definidos en la carpeta `api/controllers/` y dependiendo de orden que sean puestos en `Controller.js` serán ejecutados, además, existe la convención de usar el PascalCase para nombrarlos.

Los controladores definen un objeto o diccionrio donde las claves son los nombres de la acciones y los valores los métodos.

Fuente: [Sails](http://sailsjs.com/documentation/concepts/controllers)

#### Pipeline
El archivo pipeline.js se especifica los assets a ser inyectados dentro de las vistas.

Este archivo se encuentra dentro de la carpeta `task/` y ademas contiene las tareas de Grunt y sus configuraciones.

## Desarrollo de la practica
