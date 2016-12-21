# Tec_Web_Js_2016_B

## Comandos importante

## Instalar sails.js

Sails es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.

´´´
> npm install -g sails
´´´

El -g nos deja usarlo globalmente

### Crear un proyecto en Sailsjs

´´´
> sails new nombreProyecto
´´´

### Levantar servidor

´´´
> sails lift
´´´

´´´
> node app.js
´´´

El sails pide opciones si no estan definidas, opciones:
1. SAFE MODE: No se altera la base de datos
2. ALTER MODE: Se va a alterar la base de datos si sea hace cambios en los modelos por ejemplo
3. DELETE MODE: Borra todos los datos de la base de datos y vuele a crear los modelos.

## El Servidor Web de Sailsjs

El servidor web se encuentra localizado en la carpeta **assets**

La carpeta assets contiene datos públicos

Para gestionar tareas y recargar cambios usa Grunt.

## GEnerar controladores Sailsjs

Para generar controladores se utiliza el siguiente comando:

´´´
> sails generate controller Saludo

´´´

## Generar un modelo
´´´
> sails generate model nombreModelo

´´´

## Generar APIs en Sailsjs
´´´
> sails generate api NombreAPI

´´´

Un Api es la fusión de un **Controlador** y de un **Modelo**

## API REST

# Crear

´http://localhost:1337/´

Metodo HTTP:

´POST´

Datos:

´´´javascript
{
    nombre: 'Luis',
    apellido: 'Reinoso',
    correo: 'luis.reinoso@epn.edu.ec'
}
´´´








