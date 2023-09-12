const dotenv = require('dotenv')
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const {sequelize} =require('./src/models/');


dotenv.config();
const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;


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


