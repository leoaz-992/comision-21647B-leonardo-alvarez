const dotenv = require('dotenv')
const express = require('express');
const helmet = require('helmet');
const { Sequelize } = require('sequelize');


dotenv.config();
const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});


