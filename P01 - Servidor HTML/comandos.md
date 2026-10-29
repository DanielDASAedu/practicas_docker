# COMANDOS

## Descargar imagen nginx
Para descargar la imágen oficial de nginx y comprobar si está en la lista de imágenes

```
docker pull nginx:alpine

docker images nginx:alpine
```


## Prueba rápida
Para ejecutar un contenedor temporal y comprobar su funcionamiento
```
docker run --rm -p 8080:80 nginx:alpine 
```
## Crear contenedor
Se ejecuta un contenedor con el puerto 8080 del host conectado al 80 del contenedor con una imagen de nginx. 
```
docker run --name servidorWeb -it -p 8080:80 nginx:alpine 
```
## Levantar el contenedor y probar que funciona
Iniciar un contenedor y probar con curl si responde el contenedor con su paǵina web por defecto
```
docker start servidorWeb

curl localhost:8080
```
## Copiar la pagina web en el contenedor
Se modifica los permisos de los archivos de la carpeta html del host para que el contenedor pueda leer el contenido. Posteriormente, se copia el contenido a la carpeta html del contenedor
```
sudo chmod -R 774 ./html
docker cp html/* servidorWeb:/usr/share/nginx/html
```

## Conectarse al contenedor y ejecutar comandos
Permite conectarse al contenedor mediante una terminal
```
docker exec -it servidorWeb sh

```

## Comprobar logs
Se consulta los logs de forma indefinida del contenedor
```
$docker logs -f web-server
```
## Crear imagen propia a partir del contenedor
Se crea una imagen a partir de un contenedor
```
 docker container commit servidorWeb danielsa/servidor-web:0.1
```

## Exportar la imagen a un archivo TAR
Se exporta la imagen en un archivo con nombre imagenSvWeb.tar
```
docker image save -o imagenSvWeb.tar danielsa/servidor-web:0.1
```

## Eliminar imagen local
Se detiene y elimina el contenedor. Posteriormente, se elimina la imagen del contenedor
```
docker stop servidorWeb
docker rm servidorWeb
docker rmi danielsa/servidor-web:0.1
```

## Importar imagen desde archivo y levantar servicio
Se carga la imagen del archivo .TAR y se arranca un contenedor con esa imagen

```
docker image load --input imagenSvWeb.tar
docker run --name servidorWeb -it -p 8080:80 danielsa/servidor-web:0.1 

```
from imagen
copy que copiar
expose