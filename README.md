# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://openclipart.org/image/300px/svg_to_png/168924/web-books.png&disposition=attachment" alt="Libros sobre la web" title="Libros sobre la web por cliparteles ( https://openclipart.org/user-detail/cliparteles)" />
</p>

### Tema : `Bootstrap`
### Fecha : `2016-11-06`
### Estudiante : `Luis Alberto Reinoso Calero`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

---
## Índice de contenidos
- Tema
- Objetivos
- Marco teórico
  - Mimificar
  - ISP
  - Diseño web
  - Calidad web
  - WAI
  - Validacion
    - W3C Markup Validation Service
  - SEO
  - CDN
  - Bootstrap
    - Mobile-first
    - Contenedores
    - Sistema de grids
    - Formularios
    - Tablas
- Desarrollo de la práctica
- Conclusiones y recomendaciones

---

## Tema
Bootstrap

## Objetivos
- Conocer los apectos básicos para una aplicación web.
- Conocer el framework Bootstrap.

## Marco teórico
### Mimificar
Es el proceso en el cual se remueve todas los caracteres innecesarios del código fuente sin realizar cambios en su funcionalidad. Los caracteres innecesarios pueden ser: espacios en blanco, caracteres de nueva linea, comentarios.

Esto es un tipo de ofuscación y se hace con la finaliad de comprimir los datos de esta forma acelerando la carga de las páginas web en el caso de JavaScript.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Minification_(programming)))

### ISP
El Internet Service Provider es la organización que provee de acceso y uso a Internet, existen de diferente naturaleza y los servicios que ofrece son:
- Acceso a Internet
- Registro de nombre de dominio
- Web hosting

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Internet_service_provider))

### Diseño web
El diseño web se compone de diferentes habilidades y características para la producción y mantenimiento de páginas web.

Areas:
- Diseño gráfico web
- Diseño de interfaces
- SEO

Este termino es usado normalmente para describir el proceso relacionado con el front-end (el lado del cliente).

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Web_design))

### Calidad web
La calidad de la web, es un conjunto de especificiones y guias de estilo con la finalidad de promover una web de mayor calidad.

La w3c tiene una división de aseguramiento de la calidad cuyos objetivos son:

- Mejorar la calidad de las especificaciones del W3C, a través de directrices y revisiones de especificaciones en las etapas críticas de su desarrollo.
- Promover el despliegue amplio y la correcta implementación de estas especificaciones a través de artículos, tutoriales y servicios de validación.
- Comunicar el valor de los conjuntos de pruebas y ayuda a los grupos de trabajo a producir suites de prueba de calidad.
- Diseñar procesos efectivos que, si se siguen, ayudarán a los grupos a alcanzar estos objetivos.

(Fuente: [W3C Quality Assurance](https://www.w3.org/QA/Activity.html))

### WAI
La Inicitiva de Accesibilidad a la Web o en inglés The Web Accessibility Initiative (WAI) desarrolla estrategias, directrices y recursos para ayudar a que la Web sea accesible para las personas con discapacidades.

### Validación
#### W3C Markup Validation Service
Este servicio es un validador por la W3C que permite a los usuarios comprobar que los documentos HTML y XHTML se encuentre correctamente formateados. La validación es paso importante para asegurar la calidad téccnica de las páginas web.

- Enlaces:
  - [W3C Markup Validation Service](https://validator.w3.org/)
  - [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

(Fuente:[Wikipedia](https://en.wikipedia.org/wiki/W3C_Markup_Validation_Service))

### SEO
Search Engine Optimización o en español Optimización en motores de búsqueda. Es el proceso que afecta la visibilidad de un sitio web o página web dentro de un motor de búsqueda web. El SEO puede tener objetivos diferentes dependiendo del tipo de buscador.

Como una estratégia de marketing el SEO considera como los motores de búsqueda trabajan, que es lo que la gente busca, cuales son las palabras clave que el buscador usa y el tipo de motor de búsqueda preferido por los usuarios.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Search_engine_optimization))

### CDN
Content Distribution Network ó Content Delivery Network, en español Red de Distribución de Contenidos, es una red ditribuida globlamente de servidores proxy desplegados en multiples centros de datos. El objetivo de un CDN es servir de contenidos a usuarios finales con alta disponibilidad y alto rendimiento.

Estos pueden servir:
- Objetos web: Texto, graficos, scripts.
- Objetos descargables: Archivos multimedia, software, documentos.
- Aplicaciones: E-Commerce, portales.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network))

### Bootstrap
Bootstrap es un framework gratuito para el front-end rápido y facíl para el desarrollo web, este incluye plantillas de diseño basados en HTML y CSS para tipografía, formularios, botones, tablas, navegación, entre otros, asi también opcionalmente plugins JavaScript.

Este framework provee la habilidad de crear facilmente diseño responsivo.

(Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp))

#### Mobile-first
Este enfoque propone los estilos mobile-first como parte del nucleo del framework, es decir, este framework esta diseñado para ser responsivo con los dispositivos móviles.

Para asegurar un apropiado renderizado y touch-zooming es necesario agragar:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Donde:
`width=device-width` configura el ancho de la página  en función del ancho de la pantalla del dispositivo.

`initial-scale=1` configura el nivel inicial de zoom cuando la página es cargada en el navegador.

(Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp))

#### Contenedores
Boostrap requiere un contenedor que tiene la finalidad de envolver los contenidos del sitio.

Los contenedores tiene dos clases:

`.container` provee un resposive ajustado al ancho del contenedor.

``` html
<div class="container">
  ...
</div>
```

`.container-fluid` provee a un contenedor ajustado a todo el ancho, abarcando todo el ancho de la ventana.

``` html
<div class="container-fluid">
  ...
</div>
```

**Los contenedores no son anidables**, es decir, no se puede poner un contenedor dentro de otro contenedor.

(Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp))

#### Sistema de grids
Bootstrap provee un sistema de grids que permite hasta 12 columnas a lo largo de la página, sino se usa todas la columnas se las puede agrupar, creando así columnas mas anchas.

Boostrap esa un sistema de resposive y las columnas pueden ser re-ordenadas automaticamente dependiendo del tamaño de la pantalla.

Algunas consideraciones a tener en cuenta:

- Se deben colocar filas dentro de un `.container` (ancho fijo) o `.container-fluid` (ancho completo) para una alineación y relleno adecuados.
- Se debe colocar el contenido entre columnas y solamente estas pueden ser los hijos inmediatos de las filas
- Se crean las columnas de cuadrícula al especificar la cantidad doce columnas disponibles que desee generar. Por ejemplo, tres columnas iguales usarían tres `.col-xs-4.`
- Si se crea más de 12 columnas en una sola fila, cada grupo extra de columnas es enviado a una nueva linea.

Algunos opciones

- Prefijos de clase
  - .col-xs-
    - ancho de columna automático
    - dispositivos muy pequeños < 768px
  - .col-sm-
    - ancho de columna 62px
    - dispositivos pequeños >= 768px
  - .col-md-
    - ancho de columna 81px
    - dispositivos medianos >= 992px
  - .col-lg-
    - ancho de columna 97px
    - dispositivos grandes >= 1200px

(Fuente: [Bootstrap](http://www.oneskyapp.com/es/docs/bootstrap/css))

#### Formularios
Los formularios HTML automaticamente reciben un estilo global, los elementos `<input>` con la clase `.form-control` y envueltos en un `.form-group` se encuentran con un ancho al 100% por defecto.

``` html
<form class="form-inline" role="form">
  <div class="form-group">
    <input type="email" class="form-control">
  </div>
</form>

```
También existen formularios:
- en linea
- horizontales

(Fuente: [Bootstrap](http://getbootstrap.com/css/))

#### Tablas
Las tablas utilizan la clase base `.table` y este pude ser agragado a cualquier etiqueta `<table>`.

```
<table class="table">
  ...
</table>
```

Tipos de tablas
- `.table-striped`
- `.table-bordered`
- `.table-hover`
- `.table-condensed`

Se puede utilizar clases contextuales para agragar colores a las tablas
-  `.active` Aplica el color de desplazamiento del ratón a una fila o celda específicas.
-  `.success` Indica una acción exitosa o positiva.
- `.info`	Indica un cambio o acción informativos neutrales.
- `.warning` Muestra una advertencia que puede hacer falta solucionar.
- `.danger` Indica un acción peligrosa o potencialmente negativa

(Fuente: [Bootstrap](http://getbootstrap.com/css/))

## Desarrollo de la práctica
Agregado framework Bootstrap desde CDN

``` html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

Agregado mobile-first
``` html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Agregado contenedor
``` html
<!-- .container -->
   <div class="container" style="background-color:#687fd4;">
```

Agregado tablas y respectivos tamaños
``` html
<style>
.borde {
  border-style: solid;
}  
</style>

<div class="col-md-4 borde">
    <h2>Columna md4-1</h2>

    <!-- .row>.col-xs-2.borde+.col-xs-5.borde*2 -->    
    <div class="row">
        <div class="col-xs-2 borde">columna-xa-2-1</div>
        <div class="col-xs-5 borde">columna-xa-2-2</div>
        <div class="col-xs-5 borde">columna-xa-2-3</div>
    </div>
</div>

<div class="col-md-4 borde">
    <h2>Columna md4-2</h2>
    <div class="col-sm-3 borde">
        <h3>CSM2-1</h3>
    </div>
    <div class="col-sm-3 borde">
        <h3>CSM2-2</h3>
    </div>
    <div class="col-sm-3 borde">
        <h3>CSM2-3</h3>
    </div>
    <div class="col-sm-3 borde">
        <h3>CSM2-4</h3>
    </div>
</div>

<div class="col-md-4 borde">
    <h2>Columna md4-3</h2>

<!-- .col-lg-6.borde*3>h3 -->

   <div class="col-lg-6 borde">
       <h3>col-lg-6-1</h3>
   </div>
   <div class="col-lg-6 borde">
       <h3>col-lg-6-2</h3>
   </div>
   <div class="col-lg-6 borde">
       <h3>col-lg-6-3</h3>
   </div>
</div>
```

Agregado user inputs
``` html
<p> Esta web permite el uso de <kbd>ctrl</kbd> + <kbd>c</kbd></p>
```

Agregado tablas
Tabla simple
``` html
<table>
 <thead>
 <tr>
   <th>Firstname</th>
   <th>Lastname</th>
   <th>Age</th>
 </tr>
 <thead>
 <tr>
   <td>Jill</td>
   <td>Smith</td>
   <td>50</td>
 </tr>
 <tr>
   <td>Eve</td>
   <td>Jackson</td>
   <td>94</td>
 </tr>
</table>
```

Tabla simple Boostrap
``` html
<table class="table">
 <thead>
 <tr>
   <th>Firstname</th>
   <th>Lastname</th>
   <th>Age</th>
 </tr>
 <thead>
 <tr>
   <td>Jill</td>
   <td>Smith</td>
   <td>50</td>
 </tr>
 <tr>
   <td>Eve</td>
   <td>Jackson</td>
   <td>94</td>
 </tr>
</table>
```

Agregado colores a tabla simple




Agregado formulario

## Conclusiones y recomendaciones
- Bootstrap es un framework que facilita y agiliza el desarrollo del front-end de una aplicación web.
- Bootstrap provee al desarrollad@r una forma fácil de implementación de diseño responsivo.
- Boostrap permite crear el front-end con criterios de calidad (diseño responsivo, accesibilidad).
- Boostrap es recomendado por la W3C, lo cual indica que es un framework que cumple con los estándares propuestos por dicha organización.
