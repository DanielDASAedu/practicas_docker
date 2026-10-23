# COMANDOS

## Descargar imagen nginx
docker pull nginx:alpine

docker images nginx:alpine

## Prueba rápida
docker run --rm -p 8080:80 nginx:alpine 

## Crear contenedor
docker run --name servidorWeb -it -p 8080:80 nginx:alpine 

## Levantar el contenedor y probar que funciona
docker start servidorWeb

curl localhost:8080

## Copiar la pagina web en el contenedor
sudo chmod -R 774 ./html
docker cp html/* servidorWeb:/usr/share/nginx/html
