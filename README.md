# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://openclipart.org/image/300px/svg_to_png/168924/web-books.png&disposition=attachment" alt="Libros sobre la web" title="Libros sobre la web por cliparteles ( https://openclipart.org/user-detail/cliparteles)" />
</p>

### Tema : `Introducción a la Web`
### Fecha : `2016-10-25`
### Estudiante : `Luis Alberto Reinoso Calero`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

---

## Índice de contenidos
- Tema
- Objetivos
- Marco teórico
  - HTTP Methods
  - Códigos HTTP
  - Navegador web
  - WWW
  - W3C
  - W3C Schools
  - Doctype
  - HTML
  - Estilos CSS
  - Herramienta inspeccionar
  - Postman
  - NPM (Node Package Manger)
  - XML
  - Tags
    - h1
    - h2
    - p
    - ul
    - ol
    - li
- Desarrollo de la práctica
- Conclusiones y recomendaciones

## Tema
El tema de la práctica es: `Introducción a la Web`

## Objetivos
- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

## Marco teórico
### HTTP Methods
El protocolo HTTP (The Hypertext Transfer Protocol) trabaja como un protocolo de pedido-respuesta entre el cliente y servidor.

El navegador web puede ser el cliente y la computadora que almacena la página web puede ser un servidor.

De esta forma se presentan los siguientes métodos de petición:

### Más usados
#### GET

Solicita datos desde un recurso específico. Los valores clave-valor **son enviados en la URL** de la solicitud GET.

**Ejemplo clave:valor**

`/test/view.php?id=001&section=1`

#### POST

Envía datos a ser procesados a un recurso específico. Los valores clave-valor **son enviados dentro del cuerpo del mensaje HTTP** de una petición POST.

**Ejemplo clave:valor**

```
POST /test/view.php HTTP/1.1
HOST: pagina.com
id=001&seccion=1
```

### Otros
#### HEAD
Igual que GET pero solo retorna la cabecera del HTTP y no el cuerpo del documento.

#### PUT
Carga un representación de un URI especificado.

#### DELETE
Elimina un recurso especificado.

#### OPTIONS
Retorna los métodos HTTP que el servidor soporta.

#### CONNECT
Convierte una conexión de petición en un túnel TCP/IP transparente.

(Fuente: [w3schools](http://www.w3schools.com/tags/ref_httpmethods.asp))

### Códigos HTTP
Los códigos HTTP son códigos de estado de una respuesta, el primer dígito especifica una de las cinco clases de respuesta.

#### Clases de respuesta
- 1xx Respuestas informativas
  Peticiones recibidas, continuando proceso.
- 2xx Peticiones correctas
  Peticiones recibidas fue correctamente entendida y aceptada
- 3xx Redireccciones
  El cliente debe tomar una acción adicional para completar la petición.
- 4xx Errores del cliente
  La solicitud contiene sintaxis incorrecta o no puede procesarse.
- 5xx Errores de servidor
  El servidor falló al completar una solicitud aparentemente válida.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP))

### Navegador web
Un navegador web (en inglés, web browser) es un software, aplicación o programa que permite el acceso a la Web, interpretando la información de distintos tipos de archivos y sitios web para que estos puedan ser visualizados.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Navegador_web))

### WWW
En informática, la World Wide Web (WWW) o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

### W3C
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium))

### W3C Schools
W3Schools es un sitio de desarrolladores web, con tutoriales y referencias sobre lenguajes de desarrollo web como HTML, CSS, JavaScript, PHP, SQL y Bootstrap, que cubre la mayoría de los aspectos de la programación web.

(Fuente: [w3schools](http://www.w3schools.com/about/))

### Doctype
Una declaración de tipo de documento o DOCTYPE, es una instrucción que asocia un SGML o documento XML con una definición de tipo de documento (DTD) (por ejemplo, la definición formal de una versión particular de HTML1.0 - HTML 4.0).

En la forma serializada de un documento, este se manifiesta como una cadena corta de caracteres de marcado (markup) que se conforma con una sintaxis particular.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_tipo_de_documento))

### HTML
HTML es el lenguaje de marcado estándar para la creación de páginas Web.

- HTML significa Hyper Text Markup Language
- HTML describe la estructura de las páginas Web usando el marcado
- Los elementos HTML son los bloques de construcción de páginas HTML
- Los elementos HTML están representados por etiquetas
- Los navegadores no muestran las etiquetas HTML, pero los utilizan para representar el contenido de la página

(Fuente: [w3schools](http://www.w3schools.com/html/html_intro.asp))

### Estilos CSS
Cascading Style Sheets (CSS) describe cómo son los elementos HTML que se mostrará en la pantalla.

CSS ahorra mucho trabajo. Se puede controlar la disposición de múltiples páginas web a la vez.

CSS se puede añadir a los elementos HTML de 3 formas:
- Inline - mediante el atributo de estilo en los elementos HTML.
- Interna - mediante el uso de un elemento <style> en la sección <head>.
- Externo - mediante el uso de un archivo CSS externo.

(Fuente: [w3schools](http://www.w3schools.com/html/html_css.asp))

### Herramienta inspeccionar
Chrome Inspector es una herramienta complementaria de desarrollo web que se usa específicamente para solucionar problemas de código de páginas web en el navegador Chrome.

(Fuente: [Google support](https://support.google.com/richmedia/answer/6062390?hl=es))

### Postman
Postman es la navaja suiza de las herramientas API, lo que permite diseñar, construir, probar, documentar y monitorear servicios, todo en un solo lugar. Postman está disponible para Chrome, Mac OS X y Windows.

(Fuente: [Postman](https://www.getpostman.com/))

### NPM (Node Package Manger)
NPM (Node Package Manger) es el gestor de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Npm))

### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))

### Tags
#### h1 - h6
Las etiquetas `<h1>` a `<h6>` son usadas para definir títulos HTML.
`<h1>` define el más importante título. `<h6>` define el título menos importante.

#### p
La etiqueta `<p>` define un párrafo.

Los navegadores automáticamente agregan algo de espacio (margin) antes y después de cada elemento `<p>`. Los margenes pueden ser modificados con CSS (con las propiedades de margen).

#### ul
La etiqueta `<ul>` define una lista no ordenada (bulleted).

Usa la etiqueta `<ul>` junto con la etiqueta `<li>` para crear un lista no ordenada.

#### ol
La etiqueta `<ol>` define  una lista ordenada. Una lista ordenada puede ser numérica o alfabética.

Usa la etiqueta `<li>` para definir una lista de elementos.

#### li
La etiqueta  `<li>` define un elemento de una lista.

La etiqueta `<li>` es usada para una lista ordenada `<ol>`, lista no ordenada `<ul>` y un lista de menú `<menu>`.

(Fuente: [w3schools](http://www.w3schools.com/tags/))

## Desarrollo de la práctica
### Instalación programas necesarios
- Navegador web Chrome
- Postman Chrome plugin
- Editor Brackets
- Emmet

### Esquema HTML base
- Creación de documento html que contenga los elementos base del cuerpo de un HTML.
baseHTML.png

  emmet `! + tab`

- Agregado estilos CSS Inline
cssInline.png
cssInlineNavegador.png

- Agregado contenido dentro de etiqueta `<p>`
contenidoP.png
contenidoPWeb.png

- Agregado imagen `<img>`
contenidoImg.png
contenidoImgWeb.png

  emmet `img + tab`

- Agregado lista no ordenada `<ul>`
contenidoUl.png
contenidoUlWeb.png

  emmet `ul>li*3 + tab`

- Agregado lista ordenada `<ol>`
contenidoOl.png
contenidoOlWeb.png

  emmet `ol>li*3 + tab`

- Agregado enlace referencia `<a>`
contenidoA.png
contenidoAWeb.png

  emmet `a + tab`

- Agregado enlace a imagen `<a><img>`
contenidoImgEnlace.png

### Postman
#### GET request
- Solicitud del primer pokemon `http://pokeapi.co/api/v2/pokemon/1/`
pokemonGET.png

#### POST request
- Solicitud del primer pokemon `http://pokeapi.co/api/v2/pokemon/1/`
pokemonPOST.png

## Conclusiones y recomendaciones
