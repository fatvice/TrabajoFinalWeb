# TrabajoFinalWeb
Repositorio creado para el trabajo final del ramo Programación orientada a la web

### Comandos de uso comun

## Para desplegar con docker
``
    docker-compose build
    docker-compose up -d
``
## Para desplegar con xampp importante que se respete la estructura y se guarde
## todo en htdocs

## Para crear un proyecto de cero:
``
  composer create-project laravel/laravel  nombreApp
``

## Para instalar (recien se descarga de github, cuando el proyecto ya existe):
``
    composer install
``

### Para Laravel:

## Para crear controladores (dentro del contenedor):

``
    php artisan make:controller NombreController
``
## En los controladores metemos la logica de la aplicacion (el acceso a base de datos, etc)

### Base de datos

## para actualizar la base de datos

``
    php artisan migrate
``

## Para crear una migracion de una tabla
``
    php artisan make:migration nombre_da_lo_mismo --create=nombre_tabla_siempre_en_plural
``

## Para crear un modelo (un modelo es un archivo que permite efectuar operaciones
## con la base de datos)
``
    php artisan make:model Nombre
``
## Importante siempre el nombre en SINGULAR

## Tipos de datos y modificadores existentes
``
https://laravel.com/docs/8.x/migrations#available-column-types
``

## Pasos por cada entidad:
1. Crear migracion
2. Crear Modelo
3. Crear Controller
4. Agregar al controller las operaciones CRUD (INSERT, DELETE, BLA BLA)
5. Agregar controller a las routes (api.php)
6. Crear interfaz blade
7. Crear archivo service
8. Agregar al archivo service las llamadas al controller
9. Agregar el codigo de un archivo js con el mismo nombre de la vista

modelo se conecta a la bd y hace operaciones en esta
controlador es una interfaz, un elemento que conecta la capa web con php
el controlador llama al modelo y el modelo se hace cargo de la BD

la logica de la app se mete en el controlador
el modelo solo se encarga del CRUD con la BD

generacion de boletas va en el controlador

AWS es un gestor de la nube (Amazon web service)
es un conjunto de servicios
una infraestructura en la nube

Actualizar es un find cambiar valores y un save