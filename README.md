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


### WWW
### W3C
### W3C Schools
### Doctype
### HTML
### Estilos CSS
### Herramienta inspeccionar
### Postman
### NPM (Node Package Manger)
### XML
### Tags
#### h1
#### h2
#### p
#### ul
#### ol
#### li
## Desarrollo de la práctica
## Conclusiones y recomendaciones
