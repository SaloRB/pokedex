<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar

```bash
yarn install
```

3. Tener Nest CLI instalado

```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```bash
docker-compose up -d
```

5. Clonar el archivo **.env.example** y renonmbrarlo a **.env**

6. Llenar las variables de entorno definidas en el archivo **.env**

7. Ejecutar la aplicación en dev:

```bash
yarn start:dev
```

8. Reconstruir la base de datos

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- NestJS

# Production Build

1. Crear el archivo **.env.prod**
2. Llenar las variables de entorno de producción
3. Crear la nueva imagen

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
