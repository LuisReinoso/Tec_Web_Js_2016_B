# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://openclipart.org/image/300px/svg_to_png/168924/web-books.png&disposition=attachment" alt="Libros sobre la web" title="Libros sobre la web por cliparteles ( https://openclipart.org/user-detail/cliparteles)" />
</p>

### Tema : `CSS`
### Fecha : `2016-11-06`
### Estudiante : `Luis Alberto Reinoso Calero`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

---

## Índice de contenidos
- Tema
- Objetivos
- Marco teórico
  - CSS
  - Sintaxis
  - Selectores
    - Elemento
    - Identificador
    - Clase
    - Agrupamiento
    - Comentarios
  - Formas de agregar CSS
    - Interno
    - Externo
    - En linea
  - Multiples hojas de estilo
    - Orden en cascada
  - Colores
    - Nombres
    - RGB
    - Hexadecimal
  - Modelo de caja
    - Contenido
    - Padding
    - Border
    - Margin
  - Propiedades
    - background-color
    - border-style
    - border-color
    - transitions  
- Desarrollo de la práctica
- Conclusiones y recomendaciones

---

## Tema
CSS

## Objetivos
- Aprender los conceptos fundamentales de CSS
- Comprender la funcionalidad de CSS
- Agregar estilos a las paginas web

## Marco teorico
### CSS
CSS proviene del inglés Cascading Style Sheets que en español significa lenguaje de estilos en cascada, este describe como los elementos HTML son desplegados en pantalla. Permite reutilización a usar una misma hoja de estilos para diferentes páginas, estas hojas de estilo son almacenadas en archivos CSS.

(Fuente: [w3schools](http://www.w3schools.com/css/css_intro.asp))

### Sintaxis
CSS tiene los siguientes elementos: `Selector`, `propiedad` `valor`. El espacio de declaración es aquel comprendido entre llaves.
```css
selector {
  propiedad: valor;
}
```

### Selectores
Los selectores son usados para encontrar o seleccionar un elemento HTML basado en: `nombre del elemento`, `identificador`, `clase`, `atributo`.

#### Elemento
Seleciona un elemento en base al nombre del elemento.

```css
body {
  propiedad: valor;
}
```

#### Identificador
El identificador o id es un tipo de selector que utiliza un atributo html id para seleccionar un elemento en especifico.

El identificador **debe ser único**

Para seleccionar el elemento es necesario usar el caracter numeral `#`.

Adicionalmente el nombre de un identifiador no puede iniciar con un número.
```css
#ejemplo {
  propiedad: valor;
}
```

#### Clase
El selector por clase, selecciona un elemento por el atributo clase.

Para seleccionar el elemento es necesario usar el caracter punto `.`.
```css
.ejemplo {
  propiedad: valor;
}
```

También se puede especificar a través de `elemento.clase`. De esta forma se altera a aquellos elementos que contengan dicha clase.

```css
elemento.nombreClase {
  propiedad: valor;
}
```

#### Agrupamiento
Se puede agrupar diferentes selectores separando cada selector con una coma.

```css
elemento1, elemento2 {
  propiedad: valor;
}

```
#### Comentarios
Para agregar comentarios se utiliza `/*` de inicio y `*/` de fin. Estos elementos son ignorados por el navegador.

```css
/*
 Esto es una ejemplo de comentario
*/
elemento {
  /* ejemplo de comentario */
}
```

(Fuente: [w3schools](http://www.w3schools.com/css/css_syntax.asp))

### Formas de agregar CSS
El navegador formatea el documento HTML acorde a la información contenida en la hoja de estilo. Las formas para insertar hojas de estilo son:

#### Interno
Este forma debe ser usada **si una sola página tiene un único estilo.**

``` html
<style>

elemento {
  propiedad: valor;
}

</style>

```

#### Externo
Este método permite cambiar la imagen de una web solo cambiando un archivo. En cada página se debe incluir un referencia al recurso externo dentro de una etiqueta link.

``` html
<head>
<link rel="stylesheet" href="ejemplo.css">
</head>
```
De eta forma hace referencia al la hoja de estilos externa.

#### En linea
Este método debe ser usado para **un solo estilo de solo elemento**, el estilo puede contener cualquier propiedad de CSS.

### Multiples hojas de estilo
Si algunas propiedes dentro de diferentes hojas de estilos son iguales, el valor de la última en ser leida es la usada.

#### Orden en cascada
CSS adicional a lo anterior sigue las siguientes reglas de prioridad.

1. Estilos en linea.
2. Hojas de estilo, externas e internas.
3. Estilos por defecto del navegador.

(Fuente: [w3schools](http://www.w3schools.com/css/css_howto.asp))

### Colores
Los colores pueden ser especificados por: `nombre`, `RGB`, `Hexadecimal`

#### Nombres
Selecciona un color tan solo escribiendo el nombre. Estos nombres son insensibles al caso, es decir no importa si esta escrito en mayúsculas o minúsulas.

```
Ejemplo
red, green, blue
```

#### RGB
El color viene dado por la combinación de los valores (Red, Green, Blue), estos valores se encuentran entre 0 y 255.

```
Ejemplo
rgb(255,0,0) // corresponde a Red
rgb(0,255,0) // corresponde a Green
rgb(0,0,255) // corresponde a Blue
```

Los grises se obtiene cuando se tiene los mismos valores RGB
```
Ejemplo
rgb(255,255,255)
rgb(0,0,0)
```

#### Hexadecimal
Los colores hexadecimal son valores de la forma `#RRGGBB`, similar a RGB, sin embargo estos valores se encuentran entre 00 y FF (hexadecimal).
```
Ejemplo
#FF0000 // corresponde a Red
#00FF00 // corresponde a Green
#0000FF // corresponde a Blue
```

(Fuente: [w3schools](http://www.w3schools.com/css/css_colors.asp))

### Modelo de caja
Todos los elements HTML son considerdos como cajas, el modelo en caja CSS es escencial para envolver a los elementos CSS. Estos elementos son `Content`, `Padding`, `Border`, `Margin`.

#TODO: Agregar imagen de modelo en caja

``` html
elemento {
  width: valor;
  border: valor;
  padding: valor;
  margin: valor;
}

```

(Fuente: [w3schools](http://www.w3schools.com/css/css_boxmodel.asp))

### Propiedades
A continuación de explica algunas propiedades vistas en clase.

#### background-color
Configura un color de fondo a difrentes elementos

``` html
/* por color*/
div {
  background-color: blue;
}

/* por hexadecimal*/
a {
  background-color: #0000FF;
}

/* por rgb*/
h1 {
  background-color: rgb(255,0,0);
}

```

(Fuente: [w3schools](http://www.w3schools.com/cssref/pr_background-color.asp))

#### border-style
Configura el estilo de los cuatro bordes

``` html
elemento {
  border-style: valor valor valor valor;
}

```
Existen diferetentes valores: `solid`, `double`, `dotted`

(Fuente: [w3schools](http://www.w3schools.com/cssref/pr_border-style.asp))

#### border-color
Configura el color de los cuatro bordes

``` html
elemento {
  border-color: valor valor valor valor;
}

```
Existen diferentes valores: `color`, `transparente`.

(Fuente: [w3schools](http://www.w3schools.com/cssref/pr_background-color.asp))

#### transitions
Es un propiedad `shorthand`, esta permite agregar una transición al elemento seleccionado.

```
div {
  transition: valor valor;
}

```
Existen diferentes valores: `duration`, `delay`.

(Fuente: [w3schools](http://www.w3schools.com/cssref/css3_pr_transition.asp))

## Desarrollo de la practica
## Conclusiones y recomendaciones
