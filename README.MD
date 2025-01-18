# Task Management API
Este proyecto es una API para la gestión de tareas, donde puedes crear, actualizar, eliminar y consultar tareas. Está implementado con Node.js, Express y MySQL, utilizando procedimientos almacenados para manejar las operaciones de tareas en la base de datos.

## Clona el repositorio
1. Clona el repositorio:
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>

## Instala las dependencias
- npm install

## Crea el archivo .env en la raiz del proyecto
DB_HOST=<tu-host-de-base-de-datos>
DB_USER=<tu-usuario-de-base-de-datos>
DB_PASSWORD=<tu-contraseña-de-base-de-datos>
DB_NAME=<tu-nombre-de-base-de-datos>
PORT=<puerto-del-servidor>  # por defecto es 3000

## Ejecuta el servidor
- npm start

## Endpoints
1.-GET /tasks -> optiene una lista de todas las tareas
2.-POST /tasks -> Crea una nueva tarea
   Ejemplo:
      {
         "name": "Nombre de la tarea",
         "description": "Descripción de la tarea",
         "due_date": "2025-01-18",
         "status": "pending"
      }
3.-PUT /tasks/{id} -> Actualiza los campos de una tarea que ya existe
   Ejemplo:
      {
         "name": "Nuevo nombre",
         "description": "Nueva descripción",
         "due_date": "2025-01-20",
         "status": "completed"
      }
4.-PUT /tasks/{id}/status -> Actualiza solo el estado de una tarea
   Ejemplo:
      {
         "status": "completed"
      }
5.-DELETE /tasks/{id} -> Elimina una tarea


## Documentacion de la api en Swagger
-- http://localhost:<puerto-del-servidor>/api-docs





