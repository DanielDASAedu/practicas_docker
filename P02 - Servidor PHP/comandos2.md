# Comprobaciones

## Comprobar que la imagen se ha construido correctamente.
Se construye la imagen con un tag y se arranca un contenedor con esta
```
docker build -t dsa/sv-php:latest .
docker run --name phpSv -p 8080:80 dsa/sv-php:latest
```


## Verificar que el contenedor se encuentra en ejecución.
Se listan todo los contenedores activos para comprobar que el contenedor se está ejecutando
```
docker ps
```

## Acceder al formulario desde el navegador.
Se accede desde el navegador con la dirección de abajo para comprobar su funcionamiento
```
http://localhost:8080
```

## Consultar los registros del contenedor.
Se consulta los logs del contenedor
```
docker logs phpSv
```

## Detener el contenedor y comprobar su estado.
Se detiene y lista los contenedores inactivos
```
docker stop phpSv
docker ps -a
```

## Volver a iniciarlo y verificar que la aplicación sigue funcionando.
Se inicia nuevamente el contenedor
```
docker start phpSv
```

## Eliminar el contenedor y, posteriormente, la imagen Docker.
Se elimina tanto el contenedor como su imagen
```
docker rm phpSv
docker rmi dsa/sv-php:latest
```