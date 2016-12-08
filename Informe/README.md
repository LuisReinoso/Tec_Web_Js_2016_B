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
## Índice de contenidos
- Tema
- Objetivos
- Marco teórico
  - NPM
    - Paquetes
      - package.json
      - local y global
    - Modulos
- Desarrollo de la práctica
- Conclusiones y recomendaciones
---
## Tema
NPM

## Objetivos
- Conocer que es NPM
- Crear un paquete NPM
- Reutilizar código a través de NPM

## Marco teórico
### NPM

NPM es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

NPM facilita que los desarrolladores de JavaScript compartan y reutilicen código y facilita la actualización del código que se está compartiendo.

Fuente [Wikipedia](https://es.wikipedia.org/wiki/Npm), [NPM](https://docs.npmjs.com/getting-started/what-is-npm)

#### Paquetes
Un paquete es un archivo o directorio que es descrito por un `package.json`

Entre algunas formas de presentación se tiene:
   - Una carpeta que contiene un programa descrito por un archivo package.json

Fuente [NPM](https://docs.npmjs.com/how-npm-works/packages#what-is-a-package)

##### package.json
Un archivo `package.json` tiene la siguientes características:
- Sirve de documentación para saber de qué paquetes depende el proyecto.
- Permite especificar las versiones de un paquete que del proyecto.
- Hace su estructura reproducible esto implica significa que facilita compartir con otros desarrolladores.

Fuente [NPM](https://docs.npmjs.com/getting-started/using-a-package.json)

##### local y global
Los paquetes pueden ser instalados de forma local o global dependiendo de su uso.
Para ello se ejecuta la opción `-g` cuando se requiera instalar de forma global

**Ejemplo local:**
`npm install paquete`

**Ejemplo global:**
`npm install -g paquete`

#### Modulos
Un módulo es cualquier cosa que se puede cargar con `require()` en un programa Node.js.

- Una carpeta con un archivo package.json que contiene un campo principal.
- Una carpeta con un archivo index.js.
- Un archivo JavaScript.

Fuente [NPM](https://docs.npmjs.com/how-npm-works/packages#what-is-a-module)

## Desarrollo de la práctica
## Conclusiones y recomendaciones
