const dotenv = require('dotenv')
const express = require('express');
const helmet = require('helmet');
const {sequelize} = require('./src/models/');
const postRoutes = require('./src/routes/post.routes');
const loginRoutes = require('./src/routes/login.routes');
const csp =require('./src/middlewares/contentSecurityPolicy.middleware');

dotenv.config();
const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.use(csp.cspValidator);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname));

app.use('/login',loginRoutes)
app.use('/',postRoutes)
app.get('*',(req,res)=>{
  return res.render('base/page404');
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


