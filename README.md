# comision-21647B-leonardo-alvarez  

## Descripción 

El proyecto trata sobre una página web personal donde una persona busca tener la capacidad de crear y compartir publicaciones de temas variados. 

El proyecto está construido con Express como servidor, MYSQL como gestor de base de datos, con Sequelize como ORM y EJS como motor de visualización de pantillas.

## Dependencias :bangbang:

Para poder probarlo en un entorno local tenga instalado las siguientes dependencias:

* bootstrap,
* bootstrap-icons
* cors
* dotenv
* ejs
* express
* helmet
* morgan
* mysql2
* sequelize
* nodemon (opcionales)
* sequelize-cli (opcionales)

## Ejecucion
Para instalar las dependencias:
```
npm install
```
Para configurar el proyecto con _sequelize-cli_ utilice en la terminar el siguiente comando:
```
npx sequelize-cli init
```
Para crear las tablas, modificar el archivo: *sequelize.json* en la carpeta _src/config/_ con el nombre de tu base de datos y los datos de connexión. Luego crear la migracioin usando el siguiente comandos en la terminal:
```
npx sequelize-cli db:migrate

```
para levantar el proyecto use el comando:
```
npm run start
```
Podra ver el proyecto corriendo en: 
[http://localhost:3000](http://localhost:3000/)



## Version History

* 0.1
    * Initial Release