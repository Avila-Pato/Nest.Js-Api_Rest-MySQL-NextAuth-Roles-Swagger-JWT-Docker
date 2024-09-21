# Resumen de Proyectos

Este repositorio contiene dos proyectos de APIs REST construidas con NestJS, utilizando MySQL como base de datos y NextAuth para la autenticación. Ambos proyectos implementan roles de usuario, documentación interactiva con Swagger y autenticación con JWT.

## Proyecto 1: API REST con NestJS, MySQL y NextAuth

Este proyecto es una API REST construida con NestJS que incluye varias características esenciales para la gestión de usuarios.

### Arquitectura REST

- **REST (Representational State Transfer)**: Estilo arquitectónico para diseñar servicios web que utiliza HTTP para interactuar con recursos.

### Herramientas y Tecnologías

- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **NextAuth**: Solución de autenticación para aplicaciones Next.js.
- **Swagger**: Herramienta para documentar y consumir APIs REST.
- **JWT (JSON Web Tokens)**: Método para asegurar la autenticación y autorización de usuarios.
- **Docker**: Plataforma para crear, implementar y ejecutar aplicaciones en contenedores.

### Funcionalidades

- **Registro y Autenticación**: Manejo de usuarios mediante registro y autenticación.
- **Roles de Usuario**: Control de acceso basado en roles para diferentes recursos de la API.
- **Documentación Interactiva**: Generación automática de documentación de la API mediante Swagger.
- **Seguridad**: Uso de JWT para proteger rutas y asegurar que solo usuarios autenticados accedan a determinados recursos.

## Proyecto 2: Sistema Seguro de Gestión de Usuarios

Este segundo proyecto refuerza el sistema de gestión de usuarios, añadiendo características adicionales de seguridad y autorización.

### Propósito de este Proyecto

El objetivo de este proyecto es establecer un sistema seguro de gestión de usuarios, que incluya autenticación, autorización y protección de recursos.

### Hash de Contraseña

- En lugar de guardar la contraseña en texto plano, se guarda un valor que resulta de aplicar una función hash a la contraseña. Esto asegura que las contraseñas se mantengan seguras en la base de datos.

### JWT (JSON Web Tokens)

- Se generan tokens de acceso que protegen nuestras rutas y garantizan que solo los usuarios autenticados puedan acceder a determinados recursos. Esto añade una capa adicional de seguridad a la aplicación.

### Guard

- Su propósito principal es verificar si el usuario está autenticado y autorizado para acceder a esa ruta. Si el usuario cumple con los criterios establecidos, se permite el acceso; de lo contrario, se deniega.

### Roles

- En el contexto de los roles, son etiquetas o categorías que se asignan a los usuarios para definir sus permisos y accesos a diferentes recursos en la aplicación. Esto permite una gestión granular de los permisos de los usuarios.

## Estructura del Repositorio

Puedes explorar el código y la estructura de ambos proyectos en los siguientes enlaces:

1. [Proyecto 1: Nest.Js-Api_Rest-MySQL-NextAuth-Roles-Swagger-JWT-Docker](https://github.com/Avila-Pato/Nest.Js-Api_Rest-MySQL-NextAuth-Roles-Swagger-JWT-Docker/tree/main/Crud-Mysql)
2. [Proyecto 2: Sistema Seguro de Gestión de Usuarios](https://github.com/Avila-Pato/Nest.Js-Api_Rest-MySQL-NextAuth-Roles-Swagger-JWT-Docker/tree/main/nestjs-mysql--docker-tyorm-jwt-guard)

---

Si necesitas más ajustes o información, ¡házmelo saber!
