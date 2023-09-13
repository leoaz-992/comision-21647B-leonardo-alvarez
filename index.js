const dotenv = require('dotenv')
const express = require('express');
const helmet = require('helmet');
const {sequelize} =require('./src/models/');
const postRutes = require('./src/routes/post.routes');

dotenv.config();
const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/posts',postRutes)
app.get('*',(req,res)=>{
  return res.status(404).send('404- la ruta no existe');
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


