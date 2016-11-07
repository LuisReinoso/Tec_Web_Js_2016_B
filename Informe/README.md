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
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#mimificar">Mimificar</a>
  - <a href="#isp">ISP</a>
  - <a href="#diseñoWeb">Diseño web</a>
  - <a href="#calidadWeb">Calidad web</a>
  - <a href="#wai">WAI</a>
  - <a href="#validacion">Validacion</a>
    - <a href="#w3cMarkupValidationService">W3C Markup Validation Service</a>
  - <a href="#seo">SEO</a>
  - <a href="#cdn">CDN</a>
  - <a href="#bootstrap">Bootstrap</a>
    - <a href="#mobile-first">Mobile-first</a>
    - <a href="#contenedores">Contenedores</a>
    - <a href="#sistemaDeGrids">Sistema de grids</a>
    - <a href="#formularios">Formularios</a>
    - <a href="#tablas">Tablas</a>
- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>

---
<a name="tema"></a>
## Tema
Bootstrap

<a name="objetivos"></a>
## Objetivos
- Conocer los apectos básicos para una aplicación web.
- Conocer el framework Bootstrap.

<a name="marcoTeorico"></a>
## Marco teórico

<a name="mimificar"></a>
### Mimificar
Es el proceso en el cual se remueve todas los caracteres innecesarios del código fuente sin realizar cambios en su funcionalidad. Los caracteres innecesarios pueden ser: espacios en blanco, caracteres de nueva linea, comentarios.

Esto es un tipo de ofuscación y se hace con la finaliad de comprimir los datos de esta forma acelerando la carga de las páginas web en el caso de JavaScript.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Minification_(programming)))

<a href="#cabecera">A la cabecera</a>

<a name="isp"></a>
### ISP
El Internet Service Provider es la organización que provee de acceso y uso a Internet, existen de diferente naturaleza y los servicios que ofrece son:
- Acceso a Internet
- Registro de nombre de dominio
- Web hosting

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Internet_service_provider))

<a href="#cabecera">A la cabecera</a>

<a name="diseñoWeb"></a>
### Diseño web
El diseño web se compone de diferentes habilidades y características para la producción y mantenimiento de páginas web.

Areas:
- Diseño gráfico web
- Diseño de interfaces
- SEO

Este termino es usado normalmente para describir el proceso relacionado con el front-end (el lado del cliente).

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Web_design))

<a href="#cabecera">A la cabecera</a>

<a name="calidadWeb"></a>
### Calidad web
La calidad de la web, es un conjunto de especificiones y guias de estilo con la finalidad de promover una web de mayor calidad.

La w3c tiene una división de aseguramiento de la calidad cuyos objetivos son:

- Mejorar la calidad de las especificaciones del W3C, a través de directrices y revisiones de especificaciones en las etapas críticas de su desarrollo.
- Promover el despliegue amplio y la correcta implementación de estas especificaciones a través de artículos, tutoriales y servicios de validación.
- Comunicar el valor de los conjuntos de pruebas y ayuda a los grupos de trabajo a producir suites de prueba de calidad.
- Diseñar procesos efectivos que, si se siguen, ayudarán a los grupos a alcanzar estos objetivos.

(Fuente: [W3C Quality Assurance](https://www.w3.org/QA/Activity.html))

<a href="#cabecera">A la cabecera</a>

<a name="WAI"></a>
### WAI
La Inicitiva de Accesibilidad a la Web o en inglés The Web Accessibility Initiative (WAI) desarrolla estrategias, directrices y recursos para ayudar a que la Web sea accesible para las personas con discapacidades.

<a href="#cabecera">A la cabecera</a>

<a name="validacion"></a>
### Validación

<a name="w3cMarkupValidationService"></a>
#### W3C Markup Validation Service
Este servicio es un validador por la W3C que permite a los usuarios comprobar que los documentos HTML y XHTML se encuentre correctamente formateados. La validación es paso importante para asegurar la calidad téccnica de las páginas web.

- Enlaces:
  - [W3C Markup Validation Service](https://validator.w3.org/)
  - [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

(Fuente:[Wikipedia](https://en.wikipedia.org/wiki/W3C_Markup_Validation_Service))

<a href="#cabecera">A la cabecera</a>

<a name="seo"></a>
### SEO
Search Engine Optimización o en español Optimización en motores de búsqueda. Es el proceso que afecta la visibilidad de un sitio web o página web dentro de un motor de búsqueda web. El SEO puede tener objetivos diferentes dependiendo del tipo de buscador.

Como una estratégia de marketing el SEO considera como los motores de búsqueda trabajan, que es lo que la gente busca, cuales son las palabras clave que el buscador usa y el tipo de motor de búsqueda preferido por los usuarios.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Search_engine_optimization))

<a href="#cabecera">A la cabecera</a>

<a name="cdn"></a>
### CDN
Content Distribution Network ó Content Delivery Network, en español Red de Distribución de Contenidos, es una red ditribuida globlamente de servidores proxy desplegados en multiples centros de datos. El objetivo de un CDN es servir de contenidos a usuarios finales con alta disponibilidad y alto rendimiento.

Estos pueden servir:
- Objetos web: Texto, graficos, scripts.
- Objetos descargables: Archivos multimedia, software, documentos.
- Aplicaciones: E-Commerce, portales.

(Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network))

<a href="#cabecera">A la cabecera</a>

<a name="bootstrap"></a>
### Bootstrap
Bootstrap es un framework gratuito para el front-end rápido y facíl para el desarrollo web, este incluye plantillas de diseño basados en HTML y CSS para tipografía, formularios, botones, tablas, navegación, entre otros, asi también opcionalmente plugins JavaScript.

Este framework provee la habilidad de crear facilmente diseño responsivo.

(Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp))

<a href="#cabecera">A la cabecera</a>

<a name="mobile-first"></a>
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

<a href="#cabecera">A la cabecera</a>

<a name="contenedores"></a>
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

<a href="#cabecera">A la cabecera</a>

<a name="sistemaDeGrids"></a>
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

<a href="#cabecera">A la cabecera</a>

<a name="formularios"></a>
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

<a href="#cabecera">A la cabecera</a>

<a name="tablas"></a>
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

<a href="#cabecera">A la cabecera</a>

<a name="desarrolloDeLaPractica"></a>
## Desarrollo de la práctica
Agregado framework Bootstrap desde CDN

``` html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

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

<div class="container">
<div class="col-md-4 borde">
    <h2>Columna md4-1</h2>

    <!-- .row>.col-xs-2.borde+.col-xs-5.borde*2 -->
    <div class="row">
        <div class="col-xs-2 borde">columna-xs-2-1</div>
        <div class="col-xs-3 borde">columna-xs-2-2</div>
        <div class="col-xs-3 borde">columna-xs-2-3</div>
    </div>
</div>

<div class="col-md-4 borde">
    <h2>Columna md4-2</h2>
    <div class="col-sm-2 borde">
        <h3>CSM3-1</h3>
    </div>
    <div class="col-sm-2 borde">
        <h3>CSM3-2</h3>
    </div>
    <div class="col-sm-2 borde">
        <h3>CSM3-3</h3>
    </div>
    <div class="col-sm-2 borde">
        <h3>CSM3-4</h3>
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
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/grids.png" alt="grids demo bootstrap" title="grids" />
</p>

Agregado user inputs
``` html
<p> Esta web permite el uso de <kbd>ctrl</kbd> + <kbd>c</kbd></p>
```
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/userInputs.png" alt="uso de user inputs bootstrap" title="user inputs" />
</p>

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
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/tablaSimple.png" alt="tabla simple" title="tabla simple" />
</p>

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
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/tablaSimpleBootstrap.png" alt="tabla simple bootstrap" title="tabla simple bootstrap" />
</p>

Agregado colores a tabla striped
``` html
<div class="container">
<table class="table table-striped">
 <thead>
 <tr>
   <th>Firstname</th>
   <th>Lastname</th>
   <th>Age</th>
 </tr>
 <thead>
 <tbody>
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
 <tbody>
</table>
</div>
```
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/tablaSimpleStripped.png" alt="tabla simple bootstrap stripped" title="tabla simple bootstrap stripped" />
</p>

Agregado colores a tabla hover simple colores contextuales
``` html
<div class="container">
<table class="table table-striped">
 <thead>
 <tr>
   <th>Firstname</th>
   <th>Lastname</th>
   <th>Age</th>
 </tr>
 <thead>
 <tbody>
<!-- Agregado colores tabla -->
 <tr class="warning">
   <td>Jill</td>
   <td>Smith</td>
   <td>50</td>
 </tr>
 <!-- Agregado colores tabla -->
 <tr class="success">
   <td>Eve</td>
   <td>Jackson</td>
   <td>94</td>
 </tr>
 <tbody>
</table>
</div>
```
<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/tablaSimpleContextual.png" alt="tabla simple bootstrap contextual" title="tabla simple bootstrap contextual" />
</p>

Agregado formulario simple
``` html
<form>
  <label>Usuario: </label>
  <input type="text"></input>
  <label>Contraseña: </label>
  <input type="password"></input>
</form>
```

<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/formularioSimple.png" alt="formulario simple" title="formulario simple" />
</p>

Agregado formulario simple Boostrap
``` html
<!-- Agregado formulario simple Boostrap-->
<form>
  <div class="form-group">
    <label>Usuario: </label>
    <input type="text" class="form-control"></input>
  </div>
  <div class="form-group">
    <label>Contraseña: </label>
    <input type="password" class="form-control"></input>
  </div>
</form>
```

<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/03-Bootstrap/Informe/Graficos/formularioSimpleBootstrap.png" alt="formulario simple bootstrap" title="formulario simple bootstrap" />
</p>

<a href="#cabecera">A la cabecera</a>

<a name="conclusionesYRecomendaciones"></a>
## Conclusiones y recomendaciones
- Bootstrap es un framework que facilita y agiliza el desarrollo del front-end de una aplicación web.
- Bootstrap provee al desarrollad@r una forma fácil de implementación de diseño responsivo.
- Boostrap permite crear el front-end con criterios de calidad (diseño responsivo, accesibilidad).
- Boostrap es recomendado por la W3C, lo cual indica que es un framework que cumple con los estándares propuestos por dicha organización.

<a href="#cabecera">A la cabecera</a>
