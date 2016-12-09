# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://openclipart.org/image/300px/svg_to_png/168924/web-books.png&disposition=attachment" alt="Libros sobre la web" title="Libros sobre la web por cliparteles ( https://openclipart.org/user-detail/cliparteles)" />
</p>

### Tema : `NPM`
### Fecha : `2016-12-08`
### Estudiante : `Luis Alberto Reinoso Calero`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#npm">NPM</a>
    - <a href="#paquetes">Paquetes</a>
      - <a href="#packageJson">package.json</a>
      - <a href="#localYGlobal">local y global</a>
    - <a href="#modulos">Modulos</a>
- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>
---
<a name="tema"></a>
## Tema
NPM

<a name="objetivos"></a>
## Objetivos
- Conocer que es NPM
- Crear un paquete NPM
- Reutilizar código a través de NPM

<a name="marcoTeorico"></a>
## Marco teórico

<a name="#npm"></a>
### NPM

NPM es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

NPM facilita que los desarrolladores de JavaScript compartan y reutilicen código y facilita la actualización del código que se está compartiendo.

Fuente [Wikipedia](https://es.wikipedia.org/wiki/Npm), [NPM](https://docs.npmjs.com/getting-started/what-is-npm)

<a href="#cabecera">A la cabecera</a>

<a name="#paquetes"></a>
#### Paquetes
Un paquete es un archivo o directorio que es descrito por un `package.json`

Entre algunas formas de presentación se tiene:
   - Una carpeta que contiene un programa descrito por un archivo package.json

Fuente [NPM](https://docs.npmjs.com/how-npm-works/packages#what-is-a-package)

<a href="#cabecera">A la cabecera</a>

<a name="#packageJson"></a>
##### package.json
Un archivo `package.json` tiene la siguientes características:
- Sirve de documentación para saber de qué paquetes depende el proyecto.
- Permite especificar las versiones de un paquete que del proyecto.
- Hace su estructura reproducible esto implica significa que facilita compartir con otros desarrolladores.

Fuente [NPM](https://docs.npmjs.com/getting-started/using-a-package.json)

<a href="#cabecera">A la cabecera</a>

<a name="#localYGlobal"></a>
##### local y global
Los paquetes pueden ser instalados de forma local o global dependiendo de su uso.
Para ello se ejecuta la opción `-g` cuando se requiera instalar de forma global

**Ejemplo local:**
`npm install paquete`

**Ejemplo global:**
`npm install -g paquete`

<a href="#cabecera">A la cabecera</a>

<a name="#modulos"></a>
#### Modulos
Un módulo es cualquier cosa que se puede cargar con `require()` en un programa Node.js.

- Una carpeta con un archivo package.json que contiene un campo principal.
- Una carpeta con un archivo index.js.
- Un archivo JavaScript.

Fuente [NPM](https://docs.npmjs.com/how-npm-works/packages#what-is-a-module)

<a href="#cabecera">A la cabecera</a>

<a name="#desarrolloDeLaPractica"></a>
## Desarrollo de la práctica
- Instalacion npm

  `dnf install npm`

- Creación de primeros archivos

  ``` JavaScript
  //Numeros
  var numero1 = 1;
  var numero2 = 2;

  //Impresion
  console.log(numero1 + numero2);
  ```

- Creación cuenta en [npmjs](https://www.npmjs.com/)

<p align="center">
<img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/nodejs/Informe/Graficos/crearNPM.png" alt="creación cuenta de usuario en NPM" title="Usuario NPM" />
</p>

- Generación de proyecto NPM

  `npm init`

- Llenar los datos que se generan

  ```
  name: (tmp.85FfxvC5Rx) calculadora
  version: (1.0.0)
  description: calculadora simple
  entry point: (index.js)
  test command:
  git repository:
  keywords: calculadora
  author: Luis
  license: (ISC) MIT
  ```

  Esto genera automaticamente el archivo `package.json`

  ``` json
  {
    "name": "calculadoratest",
    "version": "1.0.0",
    "description": "calculadora simple",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "calculadora"
    ],
    "author": "Luis",
    "license": "MIT"
  }
  ```
- Creación un modulo para NPM

  Archivo index.js

  ``` JavaScript
  //Numeros
  var numero1 = 1;
  var numero2 = 2;

  module.exports = {
      funcionalidad: imprimirSuma1y2()
  }

  //suma
  function imprimirSuma1y2 () {
      return numero1 + numero2;
  }
  ```

- Publicar en [npmjs](https://www.npmjs.com/)

  `npm publish`

  Ahora se encuentra dentro en los repositorios de npm

  <p align="center">
  <img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/nodejs/Informe/Graficos/calcculadoratest.png" alt="publicación en NPM" title="publicación en NPM" />
  </p>

- Uso de modulo localmente
  - crear una carpeta e ingresar en ella
  - ejecutar el comando

  `npm install calculadoratest`

  <p align="center">
  <img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/nodejs/Informe/Graficos/npmLocal" alt="modulo local" title="modulo local" />
  </p>

    notar que se creo el directorio `node_modules` que contiene los archivos del repositorio calculadoratest

  - crear un archivo js y usar require

    ```JavaScript
    var calculadora = require("tecnologiaswebrluis");

    console.log(calculadora);

    ```

- Uso de modulo globalmente
  - crear una carpeta e ingresar en ella
  - ejecutar el comando

  `npm install -g calculadoratest`

  <p align="center">
  <img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/nodejs/Informe/Graficos/npmGlobal.png" alt="modulo global" title="modulo global" />
  </p>

    notar que en esta ocasión no se crea el directorio `node_modules` pero se guarda el modulo dentro de una carpeta que almacena los modulos instalados de forma global.

  - crear un archivo js y usar require

    ```JavaScript
    var calculadora = require("tecnologiaswebrluis");

    console.log(calculadora);

    ```
- Eliminar paquete

  - Eliminar de forma local

    - Ingresar al directorio donde se encuentra la carpeta `node_modules`
    - Ejecutar el comando `npm remove calculadoratest`

    <p align="center">
    <img src="https://raw.githubusercontent.com/LuisReinoso/Tec_Web_Js_2016_B/nodejs/Informe/Graficos/npmRemoveLocal.png" alt="borrar modulo local" title="borrar modulo" />
    </p>

      notar que la carpeta `node_modeles` se encuentra vacia

  - Eliminar de forma global

    - Ejecutar el comando `npm remove -g calculadoratest`

  - Eliminar paquete del repositorio npm

    - Ejecutar el comndo `npm unpublish --force calculadoratest`

<a href="#cabecera">A la cabecera</a>

<a name="#conclusionesYRecomendaciones"></a>
## Conclusiones y recomendaciones
- El gestor de paquetes NPM promueve el rehuso de código permitiendo a los desarrolladores tener soluciones para un amplia variedad de problemas
- NPM permite publicar facilmente los paquetes creados, sin embargo a la hora de eliminar los paquetes recomienda marcar al paquete como deprecate para así evitar problemas de dependencias con otros programas
- El nombre del paquete creado debe ser único puesto que de ser repetido genera conflictos a la hora de la publicación y por tanto no es publicado
- El nombre de los paquetes debe ser en minúsculas

<a href="#cabecera">A la cabecera</a>
